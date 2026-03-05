/**
 * JumpStorm free booking backend (Google Sheets + Apps Script).
 *
 * ONE UNIT PER PRODUCT: any booking with status 'hold' or 'confirmed' blocks overlapping times for that product.
 * CLEANING BUFFER (hidden): 2 hours after end time (for cleaning) is treated as unavailable.
 *
 * Sheets:
 *  - Products: id | name_en | name_es | price | dims | size
 *  - Bookings:
 *      timestamp | date (YYYY-MM-DD) | productId | startHour (0-23) | hours | endHour (0-23) |
 *      name | phone | email | address | notes | status
 *
 * Deploy: Apps Script > Deploy > New deployment > Web app
 * Execute as: Me
 * Who has access: Anyone
 */
const CLEANING_BUFFER_HOURS = 2;
const BUSINESS_START_HOUR = 8;
const BUSINESS_END_HOUR = 20;

function doGet(e){
  const action = (e.parameter.action || "").toLowerCase();
  if (action === "availability_slots") return availabilitySlots_(e);
  return ContentService.createTextOutput(JSON.stringify({ok:true, message:"JumpStorm API"}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e){
  const data = JSON.parse(e.postData.contents || "{}");
  const action = (data.action || "").toLowerCase();
  if (action === "book") return book_(data);
  return ContentService.createTextOutput(JSON.stringify({ok:false, error:"Unknown action"}))
    .setMimeType(ContentService.MimeType.JSON);
}

function availabilitySlots_(e){
  const productId = e.parameter.productId;
  const date = e.parameter.date; // YYYY-MM-DD
  const hours = parseInt(e.parameter.hours || "4", 10);

  const bookings = getBookingsFor_(productId, date);
  const slots = [];
  for (let h=BUSINESS_START_HOUR; h<=BUSINESS_END_HOUR-hours; h++){
    const start = h;
    const end = h + hours;
    if (isSlotAvailable_(start, end, bookings)){
      slots.push(h);
    }
  }
  return ContentService.createTextOutput(JSON.stringify({ok:true, slots}))
    .setMimeType(ContentService.MimeType.JSON);
}

function book_(data){
  const productId = data.product;
  const date = data.date;
  const start = parseInt(data.start_time, 10);
  const hours = parseInt(data.hours || "4", 10);
  const end = start + hours;

  if (!productId || !date || isNaN(start) || isNaN(hours)){
    return ContentService.createTextOutput(JSON.stringify({ok:false, error:"Missing required fields"}))
      .setMimeType(ContentService.MimeType.JSON);
  }
  if (start < BUSINESS_START_HOUR || end > BUSINESS_END_HOUR){
    return ContentService.createTextOutput(JSON.stringify({ok:false, error:"Outside business hours"}))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const bookings = getBookingsFor_(productId, date);
  if (!isSlotAvailable_(start, end, bookings)){
    return ContentService.createTextOutput(JSON.stringify({ok:false, error:"Time not available"}))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName("Bookings");
  const now = new Date();
  sh.appendRow([
    now,
    date,
    productId,
    start,
    hours,
    end,
    data.name || "",
    data.phone || "",
    data.email || "",
    data.address || "",
    data.notes || "",
    "hold"
  ]);

  return ContentService.createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}

function getBookingsFor_(productId, date){
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName("Bookings");
  const rows = sh.getDataRange().getValues();
  const out = [];
  for (let i=1;i<rows.length;i++){
    const r = rows[i];
    const rDate = r[1];
    const rProduct = r[2];
    const status = (r[11] || "").toString().toLowerCase();
    if (rDate === date && rProduct === productId && (status === "confirmed" || status === "hold")){
      out.push({
        start: parseInt(r[3],10),
        end: parseInt(r[5],10),
        hours: parseInt(r[4],10)
      });
    }
  }
  return out;
}

function isSlotAvailable_(start, end, bookings){
  // A booking blocks [start, end + buffer)
  for (let i=0;i<bookings.length;i++){
    const b = bookings[i];
    const bStart = b.start;
    const bEndBlocked = b.end + CLEANING_BUFFER_HOURS;

    // overlap test: [start,end) overlaps [bStart,bEndBlocked)
    const overlaps = start < bEndBlocked && end > bStart;
    if (overlaps) return false;
  }
  return true;
}
