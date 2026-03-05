JumpStorm Website Deploy (Cloudflare Pages)

What to replace first (5 minutes):
1) Phone number + email:
   - index.html: search for XXX-XXX-XXXX and you@jumpstorm.com and replace.
2) Products & pricing:
   - products.json: edit name_en/name_es, price, dims. (ONE UNIT PER PRODUCT.)
3) Gallery:
   - Replace these files:
     assets/placeholders/photo-1.jpg
     assets/placeholders/photo-2.jpg
     assets/placeholders/photo-3.jpg
     assets/placeholders/video-poster.jpg
     assets/placeholders/demo-video.mp4
4) Service Area:
   - index.html: Service Area list items (City 1/2/3).
5) Google Business Profile:
   - index.html: set the # link on the "Open Google Reviews" button (id="gbLink").
   - Optional: paste your Google Maps embed iframe into the Map placeholder area.

Enable real-time availability & booking (still free):
- Create Google Sheet "JumpStorm Bookings"
  Products tab: id | name_en | name_es | price | dims | size
  Bookings tab: timestamp | date | productId | name | phone | email | address | notes | status
- In Google Sheets: Extensions > Apps Script
  Paste apps-script/Code.gs
  Deploy as Web App (Execute as Me, access Anyone)
- Copy web app URL into script.js API_BASE

Cloudflare Pages (recommended):
1) Create a GitHub repo and upload ALL files from this folder to the repo root.
2) Cloudflare Dashboard > Pages > Create a project > Connect to Git.
3) Framework preset: None
4) Build command: (leave blank)
5) Output directory: / (root)
6) Deploy. Your site gets HTTPS automatically.

Spanish-first:
- Site has EN/ES toggle and an "ES-first" preference button (stores visitor preference).



Time-based bookings (hourly) + hidden cleaning buffer:
- Bookings are in hourly increments. Customers pick a start time and number of hours.
- The backend blocks overlapping times per product.
- A hidden 2-hour cleaning buffer is applied after end time (not shown to customers).
- Example: booking 10–12 makes next available start 2 PM.

Google Sheet Bookings columns now include start/end hours.
See apps-script/Code.gs for the exact schema.
