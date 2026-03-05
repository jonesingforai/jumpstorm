// Simple bilingual dictionary (EN/ES). Add more keys as needed.
const I18N = {
  en: {
    nav_products: "Products",
    nav_availability: "Availability",
    nav_book: "Book",
    nav_safety: "Safety",
    hero_kicker: "🌩 Bring the Thunder. Bring the Fun.",
    hero_title: "Inflatable Rentals in Texas",
    hero_tagline: "Electrifying Every Party",
    hero_sub: "Clean, safe bounce houses, slides, and combos — delivered, set up, and picked up.",
    cta_call: "Call",
    cta_text: "Text",
    cta_quote: "Get a Quote",
    badge_clean: "✅ Sanitized & inspected",
    badge_ontime: "✅ On-time delivery",
    badge_safe: "✅ Safety-first rules",
    aside_fast: "Fast booking:",
    aside_step1: "Pick a product",
    aside_step2: "Check availability",
    aside_step3: "Request booking",
    aside_tip: "Tip: Add your real inventory and pricing below.",
    products_title: "Products & Pricing",
    products_sub: "Add / edit products in products.json. The booking form pulls from this list.",
    avail_title: "Live Availability",
    avail_sub: "This page is wired for a free Google Sheets + Apps Script backend. Until you connect it, it shows demo availability.",
    avail_select: "Select product",
    avail_date: "Date",
    avail_check: "Check",
    avail_setup_title: "How to turn on real-time availability (free)",
    avail_setup_p1: "1) Create a Google Sheet called JumpStorm Bookings with tabs: Products, Bookings. 2) Paste the Apps Script from apps-script/Code.gs and deploy as a Web App. 3) Set API_BASE in script.js.",
    book_title: "Request a Booking",
    book_sub: "We confirm by text/email ASAP. Your request is not final until confirmed.",
    doc_en: "Contract + Waiver (English)",
    doc_en_sub: "Fillable PDF",
    doc_es: "Contrato + Exención (Español)",
    doc_es_sub: "PDF rellenable",
    form_title: "Booking details",
    f_name: "Name",
    f_phone: "Phone",
    f_email: "Email",
    f_date: "Event date",
    f_address: "Address / City",
    f_product: "Product",
    f_notes: "Notes",
    f_submit: "Send request",
    f_note: "Free mode: opens your email app. Pro mode: connect Apps Script to store bookings + block dates.",
    safety_title: "Professional, safe, trustworthy",
    s1: "Equipment sanitized & inspected every rental",
    s2: "Clear rules: no flips, no overcrowding, age grouping",
    s3: "Proper anchoring / staking",
    s4: "Weather-aware setup & shutdown",
    trust_tip: "Recommended next: add a photo gallery, real reviews, and a Google Business Profile link for instant credibility.",
    footer_line: "Bring the Thunder. Bring the Fun.",
    can4: "Example: If conditions are unsafe, we’ll reschedule or refund per your weather policy.",
    can4_title: "Weather",
    can3: "Example: Cancellations within 24 hours may forfeit the deposit.",
    can3_title: "Cancellation",
    can2: "Example: Reschedule once at no cost with 48 hours notice (weather exceptions may apply).",
    can2_title: "Rescheduling",
    can1: "Example: A $___ deposit is required to hold the date/time. Deposit applies to the rental total.",
    can1_title: "Deposit",
    can_sub: "Set clear rules to protect your schedule. Replace placeholders to match your business.",
    can_title: "Deposits & Cancellation Policy",
    ins_sub2: "If permits are required in your area, add: “Compliant with local requirements.”",
    ins_sub: "If you have insurance, add: “We are insured for inflatable rentals.” Avoid posting policy numbers publicly.",
    ins_title: "Insurance / Licenses",
    comp_tip: "Optional: Add a short insurance statement if you carry coverage.",
    comp4: "Weather monitoring and shutdown procedures",
    comp3: "Clear capacity and age-grouping rules",
    comp2: "Proper anchoring / staking and safe blower placement",
    comp1: "Cleaning and inspection checklist for every rental",
    comp_sub: "Add details that build trust (without overwhelming customers).",
    comp_title: "Safety & Compliance",
    faq_a4: "Yes. Adult supervision is required at all times.",
    faq_q4: "Do I need to supervise?",
    faq_a3: "Safety first. We will reschedule or cancel based on rain, lightning, and wind.",
    faq_q3: "What if the weather is bad?",
    faq_a2: "If a dedicated outlet isn’t available, we can provide a generator add-on (request in advance).",
    faq_q2: "Do you provide a generator?",
    faq_a1: "We’ll confirm exact dimensions, but most inflatables need level ground plus clearance.",
    faq_q1: "How much space do I need?",
    faq_sub: "Replace answers to match your exact policies. This reduces time-wasting messages.",
    faq_title: "FAQ",
    f_hours: "Hours",
    f_start: "Start time",
    slot_unavailable: "No time slots available for that duration.",
    slot_selected: "Selected:",
    slot_pick: "Pick a start time below:",
    avail_duration: "Hours",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    policies_note: "One unit per product: each inflatable blocks its own date when booked."
    cap_text: "No overcrowding. Group kids by size/age. No flips or rough play. Adult supervision is required at all times."
    cap_title: "Capacity Rules"
    wthr_text: "Inflatables cannot be used in rain, lightning, or high winds. We will reschedule or cancel for safety."
    wthr_title: "Weather Safety"
    spc_text: "We need enough clear space on level ground. No slopes or unsafe terrain. We will not set up if conditions are unsafe."
    spc_title: "Level Ground + Space"
    pwr_text: "A dedicated 110–120V outlet is required within 50–75 feet for each inflatable blower. Please keep the outlet free of other appliances."
    pwr_title: "Electricity Required"
    policies_sub: "Clear policies prevent cancellations and protect your business."
    policies_title: "Power, Space & Weather Policies"
    gb_mapph: "Map embed goes here"
    gb_maptip: "Optional: paste your Google Maps embed iframe code into index.html here:"
    gb_btn: "Open Google Reviews"
    gb_linktip: "Replace the link below with your Google Business Profile URL:"
    gb_sub: "Add your Google Business Profile link and (optional) embed map."
    gb_title: "Google Business Profile"
    service_tip: "Tip: Add your delivery fee rules here if you use them."
    svc4: "Surrounding areas"
    svc3: "City 3"
    svc2: "City 2"
    svc1: "City 1"
    service_sub: "List the cities you serve (this helps SEO and customer trust)."
    service_title: "Service Area"
    rev3_by: "— Customer Name, City"
    rev3: "“Fast communication and everything looked brand new.”"
    rev2_by: "— Customer Name, City"
    rev2: "“Professional setup and clear safety rules. Highly recommend.”"
    rev1_by: "— Customer Name, City"
    rev1: "“Super clean, on time, and the kids had the BEST day.”"
    reviews_sub: "Replace the placeholders with your real reviews (Google is best)."
    reviews_title: "Customer Reviews"
    inc4_title: "Safety Rules"
    inc3_title: "Pickup Included"
    inc2_title: "Sanitized Equipment"
    inc1_title: "Delivery + Setup"
    included_sub: "Clear expectations reduce issues and increase bookings."
    included_title: "What’s Included"
    gallery_tip: "Pro tip: bright daylight photos + one cleanliness close-up increases trust fast."
    gallery_cap4: "Add a 10–20 second walkthrough video."
    gallery_cap3: "Add a wide party shot (parents love this)."
    gallery_cap2: "Add a clean setup shot (anchors visible if possible)."
    gallery_cap1: "Add a photo of your most popular unit."
    gallery_sub: "Upload your best photos and short videos here. Replace the placeholder files."
    gallery_title: "Photo & Video Gallery"
    nav_policies: "Policies"
    nav_service: "Service Area"
    nav_reviews: "Reviews"
    nav_gallery: "Gallery"
    doc_contract: "Rental Contract (Fillable)",
    doc_contract_sub: "Texas",
    doc_waiver: "Liability Waiver (Branded)",
    doc_waiver_sub: "English",
    agree_text: "I have read and agree to the Contract + Waiver.",
    agree_link: "(open)"
  },
  es: {
    nav_products: "Productos",
    nav_availability: "Disponibilidad",
    nav_book: "Reservar",
    nav_safety: "Seguridad",
    hero_kicker: "🌩 Trae el trueno. Trae la diversión.",
    hero_title: "Renta de Inflables en Texas",
    hero_tagline: "Electrificando Cada Fiesta",
    hero_sub: "Brincolines, resbaladillas y combos limpios y seguros — entrega, instalación y recolección.",
    cta_call: "Llamar",
    cta_text: "Texto",
    cta_quote: "Cotizar",
    badge_clean: "✅ Sanitados e inspeccionados",
    badge_ontime: "✅ Entrega a tiempo",
    badge_safe: "✅ Reglas de seguridad",
    aside_fast: "Reserva rápida:",
    aside_step1: "Elige un producto",
    aside_step2: "Revisa disponibilidad",
    aside_step3: "Envía solicitud",
    aside_tip: "Consejo: Agrega tu inventario real y precios abajo.",
    products_title: "Productos y Precios",
    products_sub: "Agrega / edita productos en products.json. El formulario usa esta lista.",
    avail_title: "Disponibilidad en Tiempo Real",
    avail_sub: "Esta página está lista para un backend gratuito con Google Sheets + Apps Script. Mientras no lo conectes, muestra una demo.",
    avail_select: "Selecciona producto",
    avail_date: "Fecha",
    avail_check: "Consultar",
    avail_setup_title: "Cómo activar disponibilidad real (gratis)",
    avail_setup_p1: "1) Crea una Hoja de Google llamada JumpStorm Bookings con pestañas: Products, Bookings. 2) Pega el Apps Script de apps-script/Code.gs y publícalo como Web App. 3) Configura API_BASE en script.js.",
    book_title: "Solicitar Reserva",
    book_sub: "Confirmamos por texto/correo lo más pronto posible. La solicitud no es final hasta confirmación.",
    doc_en: "Contrato + Exención (Inglés)",
    doc_en_sub: "PDF rellenable",
    doc_es: "Contrato + Exención (Español)",
    doc_es_sub: "PDF rellenable",
    form_title: "Detalles de la reserva",
    f_name: "Nombre",
    f_phone: "Teléfono",
    f_email: "Correo",
    f_date: "Fecha del evento",
    f_address: "Dirección / Ciudad",
    f_product: "Producto",
    f_notes: "Notas",
    f_submit: "Enviar solicitud",
    f_note: "Modo gratis: abre tu correo. Modo pro: conecta Apps Script para guardar reservas y bloquear fechas.",
    safety_title: "Profesional, seguro y confiable",
    s1: "Equipo sanitizado e inspeccionado en cada renta",
    s2: "Reglas claras: sin piruetas, sin sobrecupo, por edades",
    s3: "Anclaje / estacado correcto",
    s4: "Instalación y apagado según el clima",
    trust_tip: "Recomendación: agrega galería, reseñas reales y enlace a Google Business Profile para credibilidad inmediata.",
    footer_line: "Trae el trueno. Trae la diversión.",
    can4: "Ejemplo: Si no es seguro, reprogramamos o reembolsamos según tu política.",
    can4_title: "Clima",
    can3: "Ejemplo: Cancelaciones dentro de 24 horas pueden perder el depósito.",
    can3_title: "Cancelación",
    can2: "Ejemplo: Reprograma una vez sin costo con 48 horas de aviso (clima puede aplicar).",
    can2_title: "Reprogramación",
    can1: "Ejemplo: Se requiere un depósito de $___ para apartar fecha/hora. Se aplica al total.",
    can1_title: "Depósito",
    can_sub: "Reglas claras protegen tu agenda. Reemplaza ejemplos según tu negocio.",
    can_title: "Depósitos y Cancelaciones",
    ins_sub2: "Si se requieren permisos en tu zona, agrega: “Cumplimos con requisitos locales.”",
    ins_sub: "Si tienes seguro, agrega: “Contamos con seguro para renta de inflables.” Evita publicar números de póliza.",
    ins_title: "Seguro / Permisos",
    comp_tip: "Opcional: agrega una línea corta de seguro si cuentas con cobertura.",
    comp4: "Monitoreo del clima y procedimientos de apagado",
    comp3: "Reglas claras de capacidad y por edades",
    comp2: "Anclaje correcto y colocación segura del soplador",
    comp1: "Lista de limpieza e inspección en cada renta",
    comp_sub: "Agrega detalles que generan confianza (sin abrumar).",
    comp_title: "Seguridad y Cumplimiento",
    faq_a4: "Sí. Supervisión adulta requerida en todo momento.",
    faq_q4: "¿Necesito supervisar?",
    faq_a3: "Seguridad primero. Reprogramamos o cancelamos por lluvia, relámpagos o viento.",
    faq_q3: "¿Qué pasa si el clima está mal?",
    faq_a2: "Si no hay tomacorriente dedicado, podemos proporcionar generador (solicitar con anticipación).",
    faq_q2: "¿Proveen generador?",
    faq_a1: "Confirmamos dimensiones exactas, pero se requiere terreno nivelado y espacio libre.",
    faq_q1: "¿Cuánto espacio necesito?",
    faq_sub: "Reemplaza respuestas según tus políticas. Reduce mensajes repetidos.",
    faq_title: "Preguntas Frecuentes",
    f_hours: "Horas",
    f_start: "Hora de inicio",
    slot_unavailable: "No hay horarios disponibles para esa duración.",
    slot_selected: "Seleccionado:",
    slot_pick: "Elige una hora de inicio:",
    avail_duration: "Horas",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    policies_note: "Una unidad por producto: cada inflable bloquea su fecha cuando se reserva."
    cap_text: "Sin sobrecupo. Agrupa por edad/tamaño. Sin piruetas ni juego brusco. Supervisión adulta requerida."
    cap_title: "Reglas de capacidad"
    wthr_text: "No se usan inflables con lluvia, relámpagos o vientos fuertes. Reprogramamos o cancelamos por seguridad."
    wthr_title: "Seguridad por clima"
    spc_text: "Necesitamos espacio suficiente y terreno nivelado. No pendientes ni terreno inseguro. No instalamos si no es seguro."
    spc_title: "Terreno nivelado + espacio"
    pwr_text: "Se requiere un tomacorriente dedicado de 110–120V a 50–75 pies para cada soplador. Mantén el tomacorriente libre de otros aparatos."
    pwr_title: "Se requiere electricidad"
    policies_sub: "Políticas claras evitan cancelaciones y protegen tu negocio."
    policies_title: "Políticas de Electricidad, Espacio y Clima"
    gb_mapph: "Aquí va el mapa"
    gb_maptip: "Opcional: pega el iframe de Google Maps en index.html aquí:"
    gb_btn: "Ver reseñas en Google"
    gb_linktip: "Reemplaza el enlace con tu URL de Google Business Profile:"
    gb_sub: "Agrega el enlace a tu Perfil de Google y (opcional) un mapa."
    gb_title: "Perfil de Negocio en Google"
    service_tip: "Consejo: agrega reglas de tarifa de entrega aquí si las usas."
    svc4: "Áreas cercanas"
    svc3: "Ciudad 3"
    svc2: "Ciudad 2"
    svc1: "Ciudad 1"
    service_sub: "Lista las ciudades donde ofreces servicio (ayuda SEO y confianza)."
    service_title: "Área de Servicio"
    rev3_by: "— Nombre, Ciudad"
    rev3: "“Respuesta rápida y todo se veía como nuevo.”"
    rev2_by: "— Nombre, Ciudad"
    rev2: "“Instalación profesional y reglas claras. Muy recomendado.”"
    rev1_by: "— Nombre, Ciudad"
    rev1: "“Súper limpio, a tiempo, y los niños la pasaron increíble.”"
    reviews_sub: "Reemplaza los ejemplos con reseñas reales (Google es lo mejor)."
    reviews_title: "Reseñas de Clientes"
    inc4_title: "Reglas de Seguridad"
    inc3_title: "Recolección Incluida"
    inc2_title: "Equipo Sanitizado"
    inc1_title: "Entrega + Instalación"
    included_sub: "Expectativas claras reducen problemas y aumentan reservas."
    included_title: "Qué Incluye"
    gallery_tip: "Consejo: fotos con buena luz + un acercamiento de limpieza aumentan la confianza."
    gallery_cap4: "Agrega un video de 10–20 segundos mostrando el inflable."
    gallery_cap3: "Agrega una foto amplia de la fiesta (a los padres les encanta)."
    gallery_cap2: "Agrega una foto de instalación limpia (anclajes visibles si es posible)."
    gallery_cap1: "Agrega una foto de tu inflable más popular."
    gallery_sub: "Sube tus mejores fotos y videos cortos aquí. Reemplaza los archivos de ejemplo."
    gallery_title: "Galería de Fotos y Videos"
    nav_policies: "Políticas"
    nav_service: "Área de servicio"
    nav_reviews: "Reseñas"
    nav_gallery: "Galería"
    doc_contract: "Contrato de Renta (PDF rellenable)",
    doc_contract_sub: "Texas",
    doc_waiver: "Exención de Responsabilidad (Marca)",
    doc_waiver_sub: "Inglés",
    agree_text: "He leído y acepto el Contrato + Exención.",
    agree_link: "(abrir)"
  }
};

window.I18N = I18N;
