/* ==========================================================================
   APARTMENTS DATA — single source of truth for stay-detail.html
   --------------------------------------------------------------------------
   To add/edit an apartment: change ONLY this file. stay-detail.html reads
   the "id" from the URL (stay-detail.html?id=galata-tower) and renders it.

   AMENITIES: grouped by category (from your Airbnb host checklist). All 5
   apartments currently share the same STANDARD_AMENITIES set — if a
   specific apartment is missing an item (e.g. no bathtub mat, no smart
   lock), just delete that key from that apartment's own "amenities" array.

   To add Turkish / Russian text: fill the "tr" / "ru" blocks inside each
   apartment's "translations" object, and the "tr" / "ru" blocks inside
   AMENITY_LABELS below. Empty blocks automatically fall back to English.
   ========================================================================== */

/* single check icon used as the fallback for amenities without a dedicated icon */
const CHECK_ICON = 'M20 6L9 17l-5-5';

/* dedicated icons for the most visually important amenities (Airbnb-style).
   Anything not listed here just shows the generic checkmark — still clear, just less decorative. */
const ICON_PATHS = {
  wifi: 'M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01',
  smarttv: 'M17 2l-5 5-5-5M2 7h20v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z',
  ac_heating: 'M12 2v20M2 12h20M6 6l12 12M18 6L6 18',
  "portable fan": 'M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2',
  seating: 'M4 18v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M2 18h20M4 14V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M14 14V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5',
  selfcheckin: 'M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3',
  freshlinens: 'M2 9V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2M2 9v9M2 9h20M22 9v9M6 9V7M2 18h20',
  hangers: 'M12 4a2 2 0 1 1 2 2c0 .5-.2 1-.6 1.4L12 9l-1.4-1.6A2 2 0 0 1 10 6a2 2 0 0 1 2-2zM12 9L3 15h18z',
  bathtowels: 'M4 3h16v4H4zM4 7v14h4V7M16 7v14h4V7',
  hairdryer: 'M6 9a6 6 0 1 1 10.7 3.8L21 17l-2 2-4.2-4.3A6 6 0 0 1 6 9zM6 15v5a2 2 0 0 0 2 2h1',
  firstaid: 'M4 6h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM12 9v6M9 12h6',
  dishwasher: 'M3 3h18v18H3zM7 3v18M3 9h4M12 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
  fridge: 'M5 2h14v20H5zM5 10h14M9 5v3M9 13v3',
  microwave: 'M2 6h20v12H2zM6 9h8v6H6zM18 11h.01M18 14h.01',
  coffeemaker: 'M4 3h10v3H4zM6 6v3a4 4 0 0 0 8 0V6M9 13v3M6 21h6',
  cutlery: 'M4 2v7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2M7 2v20M17 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z',
  "washing machine": 'M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M5 6h14a1 1 0 0 1 1 1v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1zM12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  iron: 'M3 21h13a5 5 0 0 0 5-5v-1a3 3 0 0 0-3-3H8a5 5 0 0 0-5 5z',
  smartlock: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 10V7a6 6 0 1 1 12 0v3M5 10h14v11H5z',
  smokealarm: 'M12 2a7 7 0 0 0-7 7c0 4 3 6 3 9h8c0-3 3-5 3-9a7 7 0 0 0-7-7zM9 21h6',
  fireextinguisher: 'M12 2a3 3 0 0 0-3 3v2H7l1 4h8l1-4h-2V5a3 3 0 0 0-3-3zM8 11v9a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-9'
};

/* static UI text (calendar, house rules, review CTA, meta line) — separate from
   the per-apartment "translations" block since these strings are the same on every page. */
const UI_STRINGS = {
  en: {
    entireUnit: "Entire rental unit in Istanbul",
    guests: "guests", bedroom: "bedroom", bedrooms: "bedrooms", bed: "bed", beds: "beds", bath: "bath", baths: "baths",
    houseRulesTitle: "House rules", checkin: "Check-in", checkout: "Check-out",
    noSmoking: "No smoking", noParties: "No parties or events", petsNote: "Pets not allowed unless stated", quietHours: "Quiet hours 10 PM – 8 AM",
    availabilityTitle: "Availability", selectDates: "Select dates", confirmDates: "Confirm dates",
    available: "Available", booked: "Booked",
    writeReview: "Write a review", reviewPending: "Your review will be published after approval.",
    showAll: "Show all", amenitiesWord: "amenities", reviewsWord: "reviews", locationTitle: "Where you'll be", showMore: "Show more", showLess: "Show less", otherPropsTitle: "Other properties you might like",
    monthNames: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    dayLabels: ["Mo","Tu","We","Th","Fr","Sa","Su"]
  },
  tr: {
    entireUnit: "İstanbul'da kiralık dairenin tamamı",
    guests: "misafir", bedroom: "yatak odası", bedrooms: "yatak odası", bed: "yatak", beds: "yatak", bath: "banyo", baths: "banyo",
    houseRulesTitle: "Ev kuralları", checkin: "Giriş", checkout: "Çıkış",
    noSmoking: "Sigara içilmez", noParties: "Parti / etkinlik yapılmaz", petsNote: "Aksi belirtilmedikçe evcil hayvan kabul edilmez", quietHours: "Sessiz saatler 22:00 – 08:00",
    availabilityTitle: "Müsaitlik", selectDates: "Tarih seçin", confirmDates: "Tarihleri onayla",
    available: "Müsait", booked: "Dolu",
    writeReview: "Yorum ekle", reviewPending: "Yorumunuz onaylandıktan sonra yayınlanacaktır.",
    showAll: "Tümünü göster", amenitiesWord: "olanak", reviewsWord: "değerlendirme", locationTitle: "Konum", showMore: "Devamını göster", showLess: "Daha az göster", otherPropsTitle: "Beğenebileceğiniz diğer evlerimiz",
    monthNames: ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],
    dayLabels: ["Pt","Sa","Ça","Pe","Cu","Ct","Pz"]
  },
  ru: {
    entireUnit: "Апартаменты целиком в Стамбуле",
    guests: "гостей", bedroom: "спальня", bedrooms: "спальни", bed: "кровать", beds: "кровати", bath: "ванная", baths: "ванных",
    houseRulesTitle: "Правила проживания", checkin: "Заезд", checkout: "Выезд",
    noSmoking: "Курение запрещено", noParties: "Вечеринки запрещены", petsNote: "Животные не допускаются, если не указано иное", quietHours: "Тихие часы 22:00 – 08:00",
    availabilityTitle: "Доступность", selectDates: "Выбрать даты", confirmDates: "Подтвердить даты",
    available: "Свободно", booked: "Занято",
    writeReview: "Оставить отзыв", reviewPending: "Ваш отзыв будет опубликован после проверки.",
    showAll: "Показать все", amenitiesWord: "удобств", reviewsWord: "отзывов", locationTitle: "Расположение", showMore: "Показать больше", showLess: "Показать меньше", otherPropsTitle: "Другие апартаменты, которые могут вам понравиться",
    monthNames: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
    dayLabels: ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"]
  }
};
function getUIStrings(lang) { return UI_STRINGS[lang] || UI_STRINGS.en; }

/* ==========================================================================
   STAY.HTML PAGE TEXT — powers the single stay.html template (hero, platform
   bar, "why us" features, guest reviews section, CTA band, footer labels).
   Same pattern as UI_STRINGS: fill "tr"/"ru", empty strings fall back to "en".
   ========================================================================== */
const FEATURE_ICONS = [
  '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  '<polyline points="20 6 9 17 4 12"/>',
  '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
];

const STAY_PAGE = {
  en: {
    backHome: "← Back to Hancı Global",
    heroEyebrow: "Hancı Stay · Istanbul",
    heroH1a: "Luxury stays in the", heroH1em: "heart of Istanbul",
    heroP: "Curated apartments in Taksim, Galata & Beyoğlu. Each property is professionally managed and ready for your arrival. Book on Airbnb or contact us directly for the best rate.",
    heroBtn1: "View our properties", heroBtn2: "💬 Ask availability",
    platformsLabel: "Book on", platformsAirbnb: "🏠 Airbnb", platformsDirect: "💬 Direct booking (best rate)",
    listingsEyebrow: "Our properties", listingsH2a: "Find your", listingsH2em: "Istanbul home",
    bedroomsWord: "bedrooms", guestsUpTo: "Up to", guestsWord: "guests", fromWord: "From ", perNight: " / night",
    viewAirbnb: "🏠 View on Airbnb", bookDirect: "📅 Book now", getDirections: "📍 Get directions",
    featuresEyebrow: "Why Hancı Stay", featuresH2a: "What makes us", featuresH2em: "different",
    features: [
      {title:"Prime locations", desc:"All properties are in Taksim, Galata & Beyoğlu — Istanbul's most vibrant neighbourhoods, within walking distance of everything."},
      {title:"Professionally managed", desc:"Every apartment is cleaned and inspected before each arrival. High standards, every time, no exceptions."},
      {title:"Responsive team", desc:"We're on WhatsApp throughout your stay — real people, fast replies, in English, Turkish and Russian. No bots."},
      {title:"Best rate direct", desc:"Book directly via WhatsApp and skip platform fees. You get the best rate — we handle everything."},
      {title:"Flexible check-in", desc:"Early arrivals and late check-outs arranged on request. We work around your schedule, not the other way around."},
      {title:"Local know-how", desc:"We know every restaurant, café and hidden gem in Beyoğlu. Ask us anything about the city."}
    ],
    reviewsEyebrow: "What our guests say", reviewsH2a: "Guest", reviewsH2em: "reviews",
    ctaH2: "Ready to book your stay?", ctaP: "Contact us on WhatsApp for availability and the best direct rate. We reply fast — in English, Turkish and Russian.",
    ctaBtn1: "💬 WhatsApp us now", ctaBtn2: "📞 Call us",
    footerServices: "Services", footerContact: "Contact", footerCompany: "Company"
  },
  tr: {
    backHome: "← Hancı Global'e dön",
    heroEyebrow: "Hancı Stay · İstanbul",
    heroH1a: "İstanbul'un", heroH1em: "kalbinde lüks konaklama",
    heroP: "Taksim, Galata & Beyoğlu'nda özenle seçilmiş daireler. Her mülk profesyonelce yönetilir ve varışınıza hazırdır. Airbnb'de rezervasyon yapın veya en iyi fiyat için doğrudan bize ulaşın.",
    heroBtn1: "Mülklerimizi görün", heroBtn2: "💬 Müsaitlik sorun",
    platformsLabel: "Rezervasyon için", platformsAirbnb: "🏠 Airbnb", platformsDirect: "💬 Direkt rezervasyon (en iyi fiyat)",
    listingsEyebrow: "Mülklerimiz", listingsH2a: "", listingsH2em: "İstanbul evinizi bulun",
    bedroomsWord: "yatak odası", guestsUpTo: "", guestsWord: "kişiye kadar", fromWord: "", perNight: "'dan başlayan fiyatlarla",
    viewAirbnb: "🏠 Airbnb'de gör", bookDirect: "📅 Rezervasyon Yap", getDirections: "📍 Yol tarifi al",
    featuresEyebrow: "Neden Hancı Stay?", featuresH2a: "Bizi", featuresH2em: "farklı kılan nedir",
    features: [
      {title:"Merkezi konumlar", desc:"Tüm mülkler Taksim, Galata & Beyoğlu'nda — İstanbul'un en canlı semtlerinde, her yere yürüme mesafesinde."},
      {title:"Profesyonel yönetim", desc:"Her daire, her varıştan önce temizlenir ve kontrol edilir. Her zaman yüksek standartlar, istisnasız."},
      {title:"Hızlı yanıt veren ekip", desc:"Konaklamanız boyunca WhatsApp'tayız — gerçek insanlar, hızlı yanıtlar, İngilizce, Türkçe ve Rusça. Bot yok."},
      {title:"En iyi fiyat direkt", desc:"WhatsApp üzerinden direkt rezervasyon yapın ve platform ücretlerinden kurtulun. En iyi fiyatı siz alın — gerisini biz hallederiz."},
      {title:"Esnek check-in", desc:"Erken varış ve geç check-out talep üzerine ayarlanır. Biz sizin programınıza uyarız, siz bizimkine değil."},
      {title:"Yerel bilgi", desc:"Beyoğlu'ndaki her restoran, kafe ve gizli mekânı biliyoruz. Şehir hakkında her şeyi bize sorun."}
    ],
    reviewsEyebrow: "Misafirlerimiz ne diyor", reviewsH2a: "Misafir", reviewsH2em: "yorumları",
    ctaH2: "Konaklamanızı rezerve etmeye hazır mısınız?", ctaP: "Müsaitlik ve en iyi direkt fiyat için WhatsApp'tan ulaşın. Hızlı yanıt veriyoruz — İngilizce, Türkçe veya Rusça.",
    ctaBtn1: "💬 Şimdi WhatsApp'tan yazın", ctaBtn2: "📞 Bizi arayın",
    footerServices: "Hizmetler", footerContact: "İletişim", footerCompany: "Şirket"
  },
  ru: {
    backHome: "← Вернуться на Hancı Global",
    heroEyebrow: "Hancı Stay · Стамбул",
    heroH1a: "Роскошное проживание в", heroH1em: "сердце Стамбула",
    heroP: "Отборные апартаменты в Таксиме, Галате и Бейоглу. Профессиональное управление, готовность к вашему приезду. Бронируйте на Airbnb или обращайтесь к нам напрямую для лучшей цены.",
    heroBtn1: "Смотреть объекты", heroBtn2: "💬 Узнать о наличии",
    platformsLabel: "Забронировать на", platformsAirbnb: "🏠 Airbnb", platformsDirect: "💬 Прямое бронирование (лучшая цена)",
    listingsEyebrow: "Наши объекты", listingsH2a: "Найдите свой", listingsH2em: "дом в Стамбуле",
    bedroomsWord: "спален", guestsUpTo: "До", guestsWord: "гостей", fromWord: "От ", perNight: " / ночь",
    viewAirbnb: "🏠 Смотреть на Airbnb", bookDirect: "📅 Забронировать", getDirections: "📍 Как добраться",
    featuresEyebrow: "Почему Hancı Stay", featuresH2a: "Что делает нас", featuresH2em: "особенными",
    features: [
      {title:"Премиальные локации", desc:"Все объекты в Таксиме, Галате и Бейоглу — самых оживлённых районах Стамбула, в пешей доступности от всего."},
      {title:"Профессиональное управление", desc:"Каждые апартаменты убираются и проверяются перед каждым заездом. Высокие стандарты, всегда, без исключений."},
      {title:"Быстрый отклик", desc:"Мы в WhatsApp на протяжении всего вашего пребывания — живые люди, быстрые ответы, на русском и английском. Никаких ботов."},
      {title:"Лучшая цена напрямую", desc:"Бронируйте напрямую через WhatsApp и избегайте комиссий платформ. Лучшая цена — всё остальное мы берём на себя."},
      {title:"Гибкий заезд", desc:"Ранний заезд и поздний выезд по запросу. Мы подстраиваемся под ваш график, а не наоборот."},
      {title:"Местные знания", desc:"Мы знаем каждый ресторан, кафе и скрытую жемчужину в Бейоглу. Спрашивайте нас всё о городе."}
    ],
    reviewsEyebrow: "Что говорят наши гости", reviewsH2a: "Отзывы", reviewsH2em: "гостей",
    ctaH2: "Готовы забронировать проживание?", ctaP: "Напишите в WhatsApp для уточнения наличия и лучшей цены. Отвечаем быстро — на русском, английском и турецком.",
    ctaBtn1: "💬 Написать в WhatsApp", ctaBtn2: "📞 Позвонить",
    footerServices: "Услуги", footerContact: "Контакты", footerCompany: "Компания"
  }
};
function getStayPage(lang) { return STAY_PAGE[lang] || STAY_PAGE.en; }

/* ==========================================================================
   OTHER SERVICES — compact cross-promo row shown under Guest Reviews on
   stay.html. This reuses the exact icon/color/copy pattern from index.html's
   own "service strip" component, so it looks native to the site.
   ========================================================================== */
const OTHER_SERVICES = [
  {
    key: "property", link: "property.html", bg: "#FAEEDA", stroke: "#BA7517", linkColor: "var(--amber)",
    icon: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'
  },
  {
    key: "renovation", link: "renovation.html", bg: "#E8F5E9", stroke: "#2C5F2E", linkColor: "#2C5F2E",
    icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'
  },
  {
    key: "travel", link: "travel.html", bg: "#E6F1FB", stroke: "#185FA5", linkColor: "var(--blue)",
    icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
  },
  {
    key: "visa", link: "visa.html", bg: "#FAECE7", stroke: "#993C1D", linkColor: "var(--coral)",
    icon: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4"/><path d="M14 15h4"/>'
  }
];
const OTHER_SERVICES_TEXT = {
  en: {
    sectionTitle: "More from Hancı Global",
    property:   { name:"Hancı Property",   desc:"Real estate & renovation across Istanbul", cta:"Explore →" },
    renovation: { name:"Hancı Renovation", desc:"Full renovation & project management",     cta:"Explore →" },
    travel:     { name:"Hancı Travel",     desc:"Transfers, boat tours & experiences",       cta:"Explore →" },
    visa:       { name:"Hancı Visa",       desc:"Schengen & international consultancy",      cta:"Explore →" }
  },
  tr: {
    sectionTitle: "Hancı Global'den daha fazlası",
    property:   { name:"Hancı Property",   desc:"İstanbul genelinde gayrimenkul & tadilat", cta:"Keşfet →" },
    renovation: { name:"Hancı Renovation", desc:"Komple tadilat & proje yönetimi",           cta:"Keşfet →" },
    travel:     { name:"Hancı Travel",     desc:"Transfer, tekne turu & deneyimler",         cta:"Keşfet →" },
    visa:       { name:"Hancı Visa",       desc:"Schengen & uluslararası danışmanlık",       cta:"Keşfet →" }
  },
  ru: {
    sectionTitle: "Больше от Hancı Global",
    property:   { name:"Hancı Property",   desc:"Недвижимость и ремонт по всему Стамбулу", cta:"Подробнее →" },
    renovation: { name:"Hancı Renovation", desc:"Полный ремонт и управление проектами",     cta:"Подробнее →" },
    travel:     { name:"Hancı Travel",     desc:"Трансферы, прогулки на яхте и экскурсии",  cta:"Подробнее →" },
    visa:       { name:"Hancı Visa",       desc:"Шенгенское и международное консультирование", cta:"Подробнее →" }
  }
};
function getOtherServicesText(lang) { return OTHER_SERVICES_TEXT[lang] || OTHER_SERVICES_TEXT.en; }

/* categories + which items belong to each (order = display order) */
const AMENITY_CATEGORIES = [
  { key: "common",   items: ["wifi","smarttv","ac_heating","portable fan","seating","coffeetable","charging","selfcheckin","blackoutcurtains"] },
  { key: "bedrooms", items: ["freshlinens","pillows","mattressprotector","bedsidelamp","hangers","closet"] },
  { key: "bathrooms",items: ["bathtowels","handtowels","toiletpaper","soap","shampoo","hairdryer","nonslipmat","firstaid"] },
  { key: "kitchen",  items: ["dishwasher","stove","oven","cutlery","cookware","cookingutensils","knifeset","microwave","coffeemaker","fridge","dishsoap","bins","saltpepper"] },
  { key: "dining",   items: ["platesglassware","diningtable","kettle"] },
  { key: "laundry",  items: ["washing machine","detergent","iron"] },
  { key: "safety",   items: ["smartlock","smokealarm","fireextinguisher","emergencycontact"] },
  { key: "extras",   items: ["luggage drop-off","cot","highchair"] }
];

/* the full standard set — used by every apartment below unless overridden */
const STANDARD_AMENITIES = AMENITY_CATEGORIES.flatMap(c => c.items);

/* shortcut: remove one or more whole categories at once.
   Example: amenities: amenitiesWithout("safety")
   Example (multiple): amenities: amenitiesWithout("safety", "laundry") */
function amenitiesWithout(...categoryKeys) {
  const excluded = new Set(
    AMENITY_CATEGORIES.filter(c => categoryKeys.includes(c.key)).flatMap(c => c.items)
  );
  return STANDARD_AMENITIES.filter(k => !excluded.has(k));
}

/* category + item labels per language. tr/ru left empty on purpose —
   fill them in later, English shows automatically until then. */
const AMENITY_LABELS = {
  en: {
    categories: {
      common:"Common space", bedrooms:"Bedrooms", bathrooms:"Bathrooms", kitchen:"Kitchen",
      dining:"Dining room", laundry:"Laundry", safety:"Safety & entry", extras:"Guest extras"
    },
    categoryNotes: { extras: "Available upon request" },
    items: {
      wifi:"High-speed wifi", smarttv:"Smart TV with Netflix", ac_heating:"Air conditioning & heating",
      "portable fan":"Portable fan",
      seating:"Comfortable seating", coffeetable:"Coffee table & coasters", charging:"Multi-device charging station",
      selfcheckin:"Self check-in instructions", blackoutcurtains:"Blackout curtains",
      freshlinens:"Fresh bed linens & duvet", pillows:"Pillows & pillow protectors", mattressprotector:"Mattress protector",
      bedsidelamp:"Bedside lamps", hangers:"Clothes hangers", closet:"Closet / dresser storage",
      bathtowels:"Bath towels", handtowels:"Hand towels & washcloths", toiletpaper:"Toilet paper (4+ rolls)",
      soap:"Hand soap & lotion", shampoo:"Shampoo & conditioner", hairdryer:"Hair dryer",
      nonslipmat:"Non-slip bath mat", firstaid:"First aid kit",
      dishwasher:"Dishwasher", stove:"Stove / hob", oven:"Oven",
      cutlery:"Full cutlery set", cookware:"Kettle, pots, pans & baking tray", cookingutensils:"Cooking utensils",
      knifeset:"Knife set & chopping boards", microwave:"Microwave, toaster, oven", coffeemaker:"Coffee maker / French press",
      fridge:"Fridge & freezer space", dishsoap:"Dish soap & sponge", bins:"Bin liners & rubbish bins",
      saltpepper:"Salt, pepper & cooking oil",
      platesglassware:"Plates, bowls & glassware", diningtable:"Dining table & chairs", kettle:"Tea, coffee & sugar starter kit",
      "washing machine":"Washing machine", detergent:"Laundry detergent", iron:"Iron & ironing board",
      smartlock:"Smart lock / lockbox", smokealarm:"Smoke & CO alarms", fireextinguisher:"Fire extinguisher",
      emergencycontact:"Emergency contact card",
      "luggage drop-off":"Luggage drop-off", cot:"Baby cot", highchair:"High chair"
    }
  },
  tr: {
    categories: {
      common:"Ortak alan", bedrooms:"Yatak odaları", bathrooms:"Banyolar", kitchen:"Mutfak",
      dining:"Yemek alanı", laundry:"Çamaşır", safety:"Güvenlik ve giriş", extras:"Misafir ekstraları"
    },
    categoryNotes: { extras: "Talep üzerine sağlanır" },
    items: {
      wifi:"Yüksek hızlı wifi", smarttv:"Netflix'li Smart TV", ac_heating:"Klima ve ısıtma",
      "portable fan":"Taşınabilir vantilatör",
      seating:"Konforlu oturma alanı", coffeetable:"Sehpa ve bardak altlıkları", charging:"Çoklu cihaz şarj istasyonu",
      selfcheckin:"Self check-in talimatları", blackoutcurtains:"Karartma perdeleri",
      freshlinens:"Temiz nevresim takımı", pillows:"Yastık ve yastık koruyucuları", mattressprotector:"Yatak koruyucu",
      bedsidelamp:"Başucu lambaları", hangers:"Askılar", closet:"Gardırop / dolap",
      bathtowels:"Banyo havluları", handtowels:"El havluları ve peçeteler", toiletpaper:"Tuvalet kağıdı (4+ rulo)",
      soap:"El sabunu ve losyon", shampoo:"Şampuan ve saç kremi", hairdryer:"Saç kurutma makinesi",
      nonslipmat:"Kaymaz banyo paspası", firstaid:"İlk yardım çantası",
      dishwasher:"Bulaşık makinesi", stove:"Ocak", oven:"Fırın",
      cutlery:"Tam çatal-bıçak takımı", cookware:"Su ısıtıcısı, tencere, tava ve fırın tepsisi", cookingutensils:"Mutfak gereçleri",
      knifeset:"Bıçak seti ve kesme tahtaları", microwave:"Mikrodalga, tost makinesi, fırın", coffeemaker:"Kahve makinesi / French press",
      fridge:"Buzdolabı ve dondurucu alanı", dishsoap:"Bulaşık deterjanı ve sünger", bins:"Çöp poşeti ve çöp kutuları",
      saltpepper:"Tuz, karabiber ve yemeklik yağ",
      platesglassware:"Tabak, kase ve bardaklar", diningtable:"Yemek masası ve sandalyeler", kettle:"Çay, kahve ve şeker başlangıç seti",
      "washing machine":"Çamaşır makinesi", detergent:"Çamaşır deterjanı", iron:"Ütü ve ütü masası",
      smartlock:"Akıllı kilit / kilit kutusu", smokealarm:"Duman ve karbonmonoksit alarmı", fireextinguisher:"Yangın söndürücü",
      emergencycontact:"Acil durum iletişim kartı",
      "luggage drop-off":"Bagaj bırakma", cot:"Bebek yatağı", highchair:"Mama sandalyesi"
    }
  },
  ru: {
    categories: {
      common:"Общее пространство", bedrooms:"Спальни", bathrooms:"Ванные комнаты", kitchen:"Кухня",
      dining:"Столовая", laundry:"Прачечная", safety:"Безопасность и вход", extras:"Дополнительно для гостей"
    },
    categoryNotes: { extras: "Предоставляется по запросу" },
    items: {
      wifi:"Высокоскоростной wifi", smarttv:"Смарт-ТВ с Netflix", ac_heating:"Кондиционер и отопление",
      "portable fan":"Переносной вентилятор",
      seating:"Удобные зоны отдыха", coffeetable:"Журнальный столик и подставки", charging:"Станция для зарядки нескольких устройств",
      selfcheckin:"Инструкции для самостоятельного заезда", blackoutcurtains:"Плотные шторы",
      freshlinens:"Свежее постельное бельё и одеяло", pillows:"Подушки и наволочки", mattressprotector:"Наматрасник",
      bedsidelamp:"Прикроватные лампы", hangers:"Плечики для одежды", closet:"Шкаф / место для хранения",
      bathtowels:"Банные полотенца", handtowels:"Полотенца для рук и салфетки", toiletpaper:"Туалетная бумага (4+ рулона)",
      soap:"Мыло для рук и лосьон", shampoo:"Шампунь и кондиционер", hairdryer:"Фен",
      nonslipmat:"Нескользящий коврик для ванной", firstaid:"Аптечка первой помощи",
      dishwasher:"Посудомоечная машина", stove:"Плита", oven:"Духовка",
      cutlery:"Полный набор столовых приборов", cookware:"Чайник, кастрюли, сковороды и противень", cookingutensils:"Кухонные принадлежности",
      knifeset:"Набор ножей и разделочные доски", microwave:"Микроволновка, тостер, духовка", coffeemaker:"Кофеварка / френч-пресс",
      fridge:"Холодильник и морозильная камера", dishsoap:"Средство для мытья посуды и губка", bins:"Пакеты для мусора и мусорные вёдра",
      saltpepper:"Соль, перец и растительное масло",
      platesglassware:"Тарелки, миски и стаканы", diningtable:"Обеденный стол и стулья", kettle:"Стартовый набор чая, кофе и сахара",
      "washing machine":"Стиральная машина", detergent:"Стиральный порошок", iron:"Утюг и гладильная доска",
      smartlock:"Умный замок / сейф для ключей", smokealarm:"Датчики дыма и угарного газа", fireextinguisher:"Огнетушитель",
      emergencycontact:"Карточка с контактами на случай ЧС",
      "luggage drop-off":"Хранение багажа", cot:"Детская кроватка", highchair:"Стульчик для кормления"
    }
  }
};

function getAmenityLabels(lang) {
  const l = AMENITY_LABELS[lang];
  const en = AMENITY_LABELS.en;
  return {
    categories: { ...en.categories, ...(l ? l.categories : {}) },
    categoryNotes: { ...en.categoryNotes, ...(l ? l.categoryNotes : {}) },
    items: { ...en.items, ...(l ? l.items : {}) }
  };
}

const APARTMENTS = [

  {
    id: "galata-tower",
    airbnbUrl: "https://www.airbnb.co.uk/rooms/1234624841258038203",
    directionsUrl: "https://share.google/ShQbOu6Lr0ACbdRop",
    waNumber: "905063335154",
    bedrooms: 2, beds: 3, baths: 1, guests: 5,
    priceFrom: 80, currency: "€",
    rating: null, reviewCount: null, // fill with real Airbnb numbers e.g. rating: 4.92, reviewCount: 38 — leave null to hide the stars row
    mapQuery: "Galata Tower, Istanbul, Turkey", // replace with the exact address for a precise map pin
    reviewFormUrl: "https://forms.gle/PTC9PhAuCbswFZUh9", // same form for all 5, or one per apartment
    checkinTime: "3:00 PM", checkoutTime: "11:00 AM",
    blockedDates: [], // ISO "YYYY-MM-DD" nights that are booked — will be auto-filled once Google Calendar sync is connected
    images: ["stay1-1.jpg.webp","stay1-2.jpg.webp","stay1-3.jpg.webp","stay1-4.jpg.webp","stay1-5.jpg.webp","stay1-6.jpg.webp","stay1-7.jpg.webp","stay1-8.jpg.webp"],
    amenities: STANDARD_AMENITIES,
    translations: {
      en: {
        location: "Taksim · Galata",
        name: "Galata Tower Heritage Loft With Stunning Views",
        shortDesc: "A beautifully restored historic residence steps from the iconic Galata Tower. Stunning panoramic views, high ceilings, and preserved architectural details — original doors and volta ceilings — blend history with modern comfort.",
        longDesc: "This heritage loft sits in a beautifully restored building just steps from the iconic Galata Tower. High ceilings, original doors and preserved volta ceilings give the space real character, while every modern comfort has been added without disturbing that character. Panoramic views stretch across the rooftops of Galata. Perfect for couples or small families who want to be in the middle of Istanbul's most atmospheric neighbourhood.",
        reviews: [
          {name:"Marie", text:"You'll feel like you're touching the past while enjoying all the modern amenities. Prime location, the apartment was comfortable and the hosts were always reachable.", stars:5},
          {name:"Sarah", text:"It was right opposite the Galata Tower and walkable to a tram stop. The apartment was super clean and suited us perfectly as a family of 4.", stars:5}
        ]
      },
      tr: { name: "Galata Kulesi Manzaralı Tarihi Loft", location: "Taksim · Galata",
        shortDesc: "İkonik Galata Kulesi'ne birkaç adım mesafede, güzelce restore edilmiş tarihi bir konut. Muhteşem panoramik manzaralar, yüksek tavanlar ve orijinal kapılar ile volta tavanlar gibi korunmuş mimari detaylar — tarih ile modern konforu bir arada sunar." },
      ru: { location: "Taksim · Galata", name: "Апартаменты с видом на Галатскую башню",
        shortDesc: "Красиво отреставрированные исторические апартаменты в нескольких шагах от Галатской башни. Потрясающие панорамные виды, высокие потолки и сохранившиеся архитектурные детали — сочетание истории с современным комфортом.",
        longDesc: "Эти апартаменты с историей расположены в прекрасно отреставрированном здании всего в нескольких шагах от знаменитой Галатской башни. Высокие потолки, оригинальные двери и сохранившиеся сводчатые потолки придают пространству настоящий характер, а все современные удобства добавлены так, чтобы не нарушить эту атмосферу. Панорамный вид открывается на крыши Галаты. Идеальный вариант для пар или небольших семей, которые хотят оказаться в самом сердце одного из самых атмосферных районов Стамбула." }
    }
  },

  {
    id: "magical-sea-view",
    airbnbUrl: "https://www.airbnb.co.uk/rooms/755682121457369800",
    directionsUrl: "https://share.google/QwvbAYQiGJjWehh40",
    waNumber: "905063335154",
    placeId: "ChIJkweelkW3yhQRtJTLyV6fa3Y", // real Google Business Profile — pulls live Google reviews
    bedrooms: 2, beds: 3, baths: 1.5, guests: 8,
    priceFrom: 80, currency: "€",
    rating: null, reviewCount: null, // fill with real Airbnb numbers e.g. rating: 4.92, reviewCount: 38 — leave null to hide the stars row
    mapQuery: "Galata Tower, Istanbul, Turkey", // replace with the exact address for a precise map pin
    reviewFormUrl: "https://forms.gle/PTC9PhAuCbswFZUh9", // same form for all 5, or one per apartment
    checkinTime: "3:00 PM", checkoutTime: "11:00 AM",
    blockedDates: [], // ISO "YYYY-MM-DD" nights that are booked — will be auto-filled once Google Calendar sync is connected
    images: ["stay2-1.webp","stay2-2.webp","stay2-3.webp","stay2-4.webp","stay2-5.webp","stay2-6.webp","stay2-7.webp","stay2-8.webp"],
    amenities: STANDARD_AMENITIES,
    translations: {
      en: {
        location: "Taksim · Galata",
        name: "Magical Sea View — Only 20 Steps to Galata Tower",
        shortDesc: "Luxurious, refurbished and well-lit — a spectacular Golden Horn view with 2 bedrooms and 1.5 baths in a historical building next to Istanbul's most famous landmark.",
        longDesc: "Refurbished top to bottom and flooded with natural light, this apartment sits just 20 steps from Galata Tower. The living room opens onto a spectacular Golden Horn view. Two bedrooms and one and a half bathrooms make it comfortable for larger groups, and the historical building it sits in adds character you won't find in a new-build.",
        reviews: [
          {name:"Noemi", text:"The apartment is welcoming and spacious — we immediately felt at home! The rooms are large and the view is breathtaking. Highly recommended!", stars:5},
          {name:"James", text:"Ideal in location and amenities. From one side you can view the Galata Tower, from the other the Golden Horn. Very walkable with lots of good nightlife and restaurants.", stars:5}
        ]
      },
      tr: { name: "Büyülü Deniz Manzarası — Galata Kulesi'ne 20 Adım", location: "Taksim · Galata",
        shortDesc: "Lüks, yenilenmiş ve aydınlık — İstanbul'un en ünlü yapısının yanında, 2 yatak odalı ve 1,5 banyolu tarihi binada muhteşem Haliç manzarası." },
      ru: { location: "Taksim · Galata", name: "Волшебный вид на море — 20 шагов до Галатской башни",
        shortDesc: "Роскошные, обновлённые, светлые апартаменты с видом на Золотой Рог. 2 спальни, 1,5 ванных в историческом здании рядом с главной достопримечательностью Стамбула." }
    }
  },

  {
    id: "heritage-street",
    airbnbUrl: "https://www.airbnb.co.uk/rooms/1386135456988178273",
    directionsUrl: "https://share.google/HXSmsLdZp071Jdnr0",
    waNumber: "905063335154",
    bedrooms: 4, beds: 5, baths: 2, guests: 10,
    priceFrom: 150, currency: "€",
    rating: null, reviewCount: null, // fill with real Airbnb numbers e.g. rating: 4.92, reviewCount: 38 — leave null to hide the stars row
    mapQuery: "Istiklal Caddesi, Beyoglu, Istanbul, Turkey", // replace with the exact address for a precise map pin
    reviewFormUrl: "https://forms.gle/PTC9PhAuCbswFZUh9", // same form for all 5, or one per apartment
    checkinTime: "3:00 PM", checkoutTime: "11:00 AM",
    blockedDates: [], // ISO "YYYY-MM-DD" nights that are booked — will be auto-filled once Google Calendar sync is connected
    images: ["stay3-1.webp","stay3-2.webp","stay3-3.webp","stay3-4.webp","stay3-5.webp","stay3-6.webp","stay3-7.webp","stay3-8.webp","stay3-9.webp","stay3-10.webp"],
    amenities: STANDARD_AMENITIES,
    translations: {
      en: {
        location: "Beyoğlu · Taksim",
        name: "The Heaven on Heritage Street",
        shortDesc: "Spacious and inviting apartment on one of Istanbul's most famous streets. Steps from vibrant cafes, boutique shops, cultural hotspots and iconic landmarks in a beautifully preserved historic building.",
        longDesc: "Four bedrooms and two bathrooms make this the largest of our apartments — ideal for bigger groups or families travelling together. It sits on one of Istanbul's most famous streets, steps from cafes, boutique shops and cultural landmarks, inside a beautifully preserved historic building.",
        reviews: [
          {name:"Josh", text:"Really nice and convenient place. The location was perfect — close to all the nightlife and tourist areas but the street was a lot more relaxed. Would highly recommend!", stars:5},
          {name:"Arigun", text:"The hosts are very friendly and kind. Don't be afraid to ask for help — they are genuinely nice people who have your comfort in mind.", stars:5}
        ]
      },
      tr: { name: "Tarihi Sokaktaki Cennet", location: "Beyoğlu · Taksim",
        shortDesc: "İstanbul'un en ünlü sokaklarından birinde ferah ve davetkar bir daire. Tarihi binada, canlı kafeler, butik dükkanlar ve ikonik mekânlara yürüme mesafesinde." },
      ru: { location: "Beyoğlu · Taksim", name: "Рай на Исторической улице",
        shortDesc: "Просторные апартаменты на одной из самых известных улиц Стамбула. Кафе, бутики, культурные места — всё рядом в прекрасно сохранившемся историческом здании." }
    }
  },

  {
    id: "golden-horn-hidden-heaven",
    airbnbUrl: "https://www.airbnb.co.uk/rooms/1349242709634643218",
    directionsUrl: "https://share.google/XKNHdBdSQaFBPv8vV",
    waNumber: "905063335154",
    placeId: "ChIJ3RiwVtO5yhQRRaVjIifPWnc", // real Google Business Profile — pulls live Google reviews
    bedrooms: 2, beds: 2, baths: 1, guests: 4,
    priceFrom: 60, currency: "€",
    rating: null, reviewCount: null, // fill with real Airbnb numbers e.g. rating: 4.92, reviewCount: 38 — leave null to hide the stars row
    mapQuery: "Galata, Istanbul, Turkey", // replace with the exact address for a precise map pin
    reviewFormUrl: "https://forms.gle/PTC9PhAuCbswFZUh9", // same form for all 5, or one per apartment
    checkinTime: "3:00 PM", checkoutTime: "11:00 AM",
    blockedDates: [], // ISO "YYYY-MM-DD" nights that are booked — will be auto-filled once Google Calendar sync is connected
    images: ["stay4-1.webp","stay4-2.webp","stay4-3.webp","stay4-4.webp","stay4-5.webp","stay4-6.webp","stay4-7.webp"],
    amenities: STANDARD_AMENITIES,
    translations: {
      en: {
        location: "Taksim · Galata",
        name: "Golden Horn Hidden Heaven",
        shortDesc: "Beautifully preserved Galata apartment where breathtaking Golden Horn views meet timeless elegance. A true retreat blending history, comfort, and an unbeatable location.",
        longDesc: "A quieter, more intimate apartment tucked into a beautifully preserved Galata building. The Golden Horn view is the highlight. Comfortably fits couples or small families, and the location keeps you a short walk from Galata Tower and the metro.",
        reviews: [
          {name:"Jessica", text:"Loved our stay. The view was magical to wake up to. Location was great — close to Galata Tower and a metro line with lots of nearby restaurants. Beds were very comfy.", stars:5},
          {name:"Oliver", text:"Great communication from the host, very responsive. The area is a great location with lots of cafes and supermarkets nearby. Flat was exactly as described. Would stay again.", stars:5}
        ]
      },
      tr: { name: "Haliç'in Gizli Cenneti", location: "Taksim · Galata",
        shortDesc: "Nefes kesen Haliç manzaralarının zamansız zarafetle buluştuğu, güzelce korunmuş Galata dairesi. Tarih, konfor ve eşsiz konumu bir arada sunan gerçek bir sığınak." },
      ru: { location: "Taksim · Galata", name: "Тайный рай на Золотом Роге",
        shortDesc: "Прекрасно сохранившиеся апартаменты в Галате с захватывающим видом на Золотой Рог. История, комфорт и непревзойдённое расположение." }
    }
  },

  {
    id: "hidden-oasis",
    airbnbUrl: "https://www.airbnb.co.uk/rooms/1088463429757145807",
    directionsUrl: "https://share.google/O6xyzQoehfhspFjjx",
    waNumber: "905063335154",
    bedrooms: 2, beds: 3, baths: 1, guests: 5,
    priceFrom: 65, currency: "€",
    rating: null, reviewCount: null, // fill with real Airbnb numbers e.g. rating: 4.92, reviewCount: 38 — leave null to hide the stars row
    mapQuery: "Taksim Square, Istanbul, Turkey", // replace with the exact address for a precise map pin
    reviewFormUrl: "https://forms.gle/PTC9PhAuCbswFZUh9", // same form for all 5, or one per apartment
    checkinTime: "3:00 PM", checkoutTime: "11:00 AM",
    blockedDates: [], // ISO "YYYY-MM-DD" nights that are booked — will be auto-filled once Google Calendar sync is connected
    images: ["stay5-1.webp","stay5-2.webp","stay5-3.webp","stay5-4.webp","stay5-5.webp","stay5-6.webp"],
    amenities: STANDARD_AMENITIES,
    translations: {
      en: {
        location: "Beyoğlu · Taksim",
        name: "Hidden Oasis: Historic 2BR with Views in Taksim",
        shortDesc: "Charming and cozy flat in the heart of Istanbul. Right between Taksim Square and Galata Tower — the perfect base for your Istanbul adventure.",
        longDesc: "Cozy and full of character, this two-bedroom flat sits right between Taksim Square and Galata Tower — genuinely equidistant from both. A great base for guests who want to explore on foot.",
        reviews: [
          {name:"Alexander", text:"Check-in was easy and smooth. The place was even better than in the photos — clean, warm, and cozy. The area is very central, yet surprisingly quiet. We would definitely stay again.", stars:5},
          {name:"Pavel", text:"We spent several wonderful days in Istanbul. Check-in was seamless, the apartment perfectly located. The mattresses were very comfortable and the shower pressure excellent.", stars:5}
        ]
      },
      tr: { name: "Gizli Vaha: Taksim'de Manzaralı Tarihi 2 Yatak Odalı", location: "Beyoğlu · Taksim",
        shortDesc: "İstanbul'un kalbinde büyüleyici ve samimi bir daire. Taksim Meydanı ile Galata Kulesi arasında — İstanbul maceranız için mükemmel üs." },
      ru: { location: "Beyoğlu · Taksim", name: "Скрытый оазис: историческая квартира с видом в Таксиме",
        shortDesc: "Уютная квартира в самом сердце Стамбула. Между площадью Таксим и Галатской башней — идеальная база для вашего стамбульского приключения." }
    }
  }

];

/* Fallback: if a "tr" or "ru" translation block is missing a field, fall back to "en".
   Special case: if that language has a shortDesc but no longDesc, use its own
   shortDesc for the long paragraph too — better than dropping into English mid-page. */
function getApartmentText(apt, lang) {
  const en = apt.translations.en;
  const l = apt.translations[lang] || {};
  const merged = { ...en, ...l };
  if (!l.longDesc) merged.longDesc = l.shortDesc || en.longDesc;
  return merged;
}
