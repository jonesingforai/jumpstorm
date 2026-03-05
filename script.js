// === CONFIG ===
const BUSINESS_START_HOUR = 8;  // 8 AM
const BUSINESS_END_HOUR = 20;   // 8 PM
const CLEANING_BUFFER_HOURS = 2; // hidden buffer after return for cleaning

// If you deploy the free Apps Script backend, paste its URL here:
const API_BASE = ""; // e.g. "https://script.google.com/macros/s/XXXXX/exec"

function getLang(){
  // Spanish-first preference (user-controlled)
  const pref = localStorage.getItem("lang_default");
  if (pref === "es") return "es";
  if (pref === "en") return "en";
  // Otherwise use saved lang or browser language
  return localStorage.getItem("lang") || ((navigator.language || "en").startsWith("es") ? "es" : "en");
}
function setLang(lang){
  localStorage.setItem("lang", lang);
  applyI18n(lang);
  renderProducts(lang);
  fillProductSelects(lang);
}

function applyI18n(lang){
  document.documentElement.lang = lang;
  updateAgreementLink(lang);
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const value = (window.I18N?.[lang] || {})[key];
    if (value) el.textContent = value;
  });
}

function readProducts(){
  const el = document.getElementById("productsData");
  return JSON.parse(el.textContent).products || [];
}

function renderProducts(lang){
  const products = readProducts();
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  products.forEach(p=>{
    const name = lang==="es" ? p.name_es : p.name_en;
    const notes = lang==="es" ? p.notes_es : p.notes_en;
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${name}</h3>
      <div class="muted small">${p.size} • ${p.dims}</div>
      <div class="price" style="margin-top:8px">${p.price}</div>
      <div class="muted" style="margin-top:8px">${notes}</div>
      <div class="pills">
        <span class="pill">${p.size}</span>
        <span class="pill">${p.dims}</span>
      </div>
      <div class="actions">
        <button class="btn btn--small" data-product="${p.id}">${lang==="es" ? "Reservar" : "Book"}</button>
      </div>
    `;
    card.querySelector("button").addEventListener("click", ()=>{
      document.getElementById("book").scrollIntoView({behavior:"smooth"});
      document.getElementById("bookProduct").value = p.id;
      document.getElementById("availProduct").value = p.id;
    });
    grid.appendChild(card);
  });
}

function fillProductSelects(lang){
  const products = readProducts();
  const selects = [document.getElementById("bookProduct"), document.getElementById("availProduct")];
  selects.forEach(sel=>{
    sel.innerHTML="";
    products.forEach(p=>{
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = lang==="es" ? p.name_es : p.name_en;
      sel.appendChild(opt);
    });
  });
}

async function fetchAvailableSlots(productId, dateStr, hours){
  // Returns {slots:[startHourInts], mode:"demo"|""}
  if (!API_BASE){
    // Demo: even dates block 10-14; odd dates all open
    const d = new Date(dateStr);
    const blocked = (d.getDate() % 2 === 0) ? [10,11,12,13,14] : [];
    const slots = [];
    for (let h=BUSINESS_START_HOUR; h<=BUSINESS_END_HOUR-hours; h++){
      let ok = true;
      for (let x=h; x< h+hours; x++){
        if (blocked.includes(x)) { ok=false; break; }
      }
      // also apply cleaning buffer in demo: if booking ends at b, next start must be >= b + CLEANING_BUFFER_HOURS
      // (simple demo already handled by blocked window)
      if (ok) slots.push(h);
    }
    return {ok:true, slots, mode:"demo"};
  }
  const url = `${API_BASE}?action=availability_slots&productId=${encodeURIComponent(productId)}&date=${encodeURIComponent(dateStr)}&hours=${encodeURIComponent(hours)}`;
  const res = await fetch(url);
  return await res.json();
}

async function createBooking(payload){
  if (!API_BASE){
    return {ok:true, mode:"email"};
  }
  const res = await fetch(API_BASE, {
    method:"POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({action:"book", ...payload})
  });
  return await res.json();
}

function mailtoBooking(payload, lang){
  const subject = encodeURIComponent(lang==="es" ? "Solicitud de Reserva - JumpStorm" : "Booking Request - JumpStorm");
  const body = encodeURIComponent(
`Name/Nombre: ${payload.name}
Phone/Teléfono: ${payload.phone}
Email/Correo: ${payload.email || ""}
Date/Fecha: ${payload.date}
Address/Dirección: ${payload.address}
Product/Producto: ${payload.product}
Start/Hora: ${payload.start_time}
Hours/Horas: ${payload.hours}
Notes/Notas: ${payload.notes || ""}

${lang==="es" ? "Trae el trueno. Trae la diversión." : "Bring the Thunder. Bring the Fun."}
— JumpStorm Inflatables`
  );
  // Replace with your email:
  window.location.href = `mailto:you@jumpstorm.com?subject=${subject}&body=${body}`;
}

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("langToggle").addEventListener("click", ()=>{
  const current = document.documentElement.lang || "en";
  setLang(current==="en" ? "es" : "en");
});

document.getElementById("checkBtn").addEventListener("click", async ()=>{
  const lang = document.documentElement.lang || "en";
  const dateStr = document.getElementById("availDate").value;
  const out = document.getElementById("availResult");
  out.className = "result";
  if (!dateStr){
    out.textContent = lang==="es" ? "Selecciona una fecha." : "Please select a date.";
    out.classList.add("bad");
    return;
  }
  out.textContent = lang==="es" ? "Consultando..." : "Checking...";
  await refreshSlots();
});
const dur = document.getElementById("availDuration");
if (dur){ dur.addEventListener("change", refreshSlots); }
const ap = document.getElementById("availProduct");
if (ap){ ap.addEventListener("change", refreshSlots); }

document.getElementById("bookingForm").addEventListener("submit", async (e)=>{
  e.preventDefault();
  const lang = document.documentElement.lang || "en";
  const fd = new FormData(e.target);
  const payload = Object.fromEntries(fd.entries());
  // Try live booking if API_BASE is configured
  if (API_BASE){
    const result = await createBooking(payload);
    alert(result.ok ? (lang==="es" ? "¡Solicitud enviada! Te contactaremos pronto." : "Request sent! We'll contact you soon.") : (lang==="es" ? "Error al enviar. Intenta de nuevo." : "Error sending request. Please try again."));
    return;
  }
  // Free mode: open email
  mailtoBooking(payload, lang);
});

// init
(function init(){
  const preferred = localStorage.getItem("lang") || ((navigator.language||"en").startsWith("es") ? "es" : "en");
  applyI18n(preferred);
  renderProducts(preferred);
  fillProductSelects(preferred);
  document.getElementById("availDate").valueAsDate = new Date();
  buildStartTimeOptions(parseInt(document.getElementById("hours")?.value || "4",10));
  refreshSlots();
  document.documentElement.lang = preferred;
})();

// Spanish-first toggle: when ON, site defaults to Spanish on future visits
const sf = document.getElementById("spanishFirstToggle");
if (sf){
  const updateLabel = ()=>{
    const pref = localStorage.getItem("lang_default");
    sf.textContent = (pref === "es") ? "ES-first ✓" : "ES-first";
  };
  updateLabel();
  sf.addEventListener("click", ()=>{
    const pref = localStorage.getItem("lang_default");
    if (pref === "es"){
      localStorage.removeItem("lang_default");
    } else {
      localStorage.setItem("lang_default","es");
      setLang("es");
    }
    updateLabel();
  });
}

function updateAgreementLink(lang){
  const link = document.querySelector(".agree__link");
  if (!link) return;
  link.href = lang === "es"
    ? "docs/JumpStorm_Rental_Contract_and_Waiver_TX_FILLABLE_ES.pdf"
    : "docs/JumpStorm_Rental_Contract_and_Waiver_TX_FILLABLE_EN.pdf";
}

function hourToLabel(h){
  const ampm = h >= 12 ? "PM" : "AM";
  const hr = ((h + 11) % 12) + 1;
  return `${hr}:00 ${ampm}`;
}
function buildStartTimeOptions(hours){
  const sel = document.getElementById("startTime");
  if (!sel) return;
  sel.innerHTML = "";
  for (let h=BUSINESS_START_HOUR; h<=BUSINESS_END_HOUR-hours; h++){
    const opt = document.createElement("option");
    opt.value = String(h);
    opt.textContent = hourToLabel(h);
    sel.appendChild(opt);
  }
}
async function refreshSlots(){
  const lang = document.documentElement.lang || "en";
  const productId = document.getElementById("availProduct")?.value;
  const dateStr = document.getElementById("availDate")?.value;
  const hours = parseInt(document.getElementById("availDuration")?.value || "4", 10);
  const out = document.getElementById("availResult");
  const grid = document.getElementById("slotGrid");
  if (!productId || !dateStr || !grid || !out) return;
  out.className = "result";
  out.textContent = (window.I18N?.[lang]?.slot_pick) || (lang==="es" ? "Elige una hora de inicio:" : "Pick a start time below:");
  grid.innerHTML = "";
  const data = await fetchAvailableSlots(productId, dateStr, hours);
  const slots = data.slots || [];
  if (!slots.length){
    out.textContent = (window.I18N?.[lang]?.slot_unavailable) || (lang==="es" ? "No hay horarios disponibles." : "No time slots available.");
    out.classList.add("bad");
    return;
  }
  // Build clickable slots
  slots.forEach(h=>{
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "slot";
    btn.textContent = hourToLabel(h);
    btn.addEventListener("click", ()=>{
      // mark selected
      grid.querySelectorAll(".slot").forEach(x=>x.classList.remove("slot--selected"));
      btn.classList.add("slot--selected");
      // set booking form values
      const startSel = document.getElementById("startTime");
      const hoursSel = document.getElementById("hours");
      if (hoursSel) hoursSel.value = String(hours);
      buildStartTimeOptions(hours);
      if (startSel) startSel.value = String(h);
      document.getElementById("book").scrollIntoView({behavior:"smooth"});
    });
    grid.appendChild(btn);
  });
}
