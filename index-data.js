/* ==========================================================================
   INDEX DATA — single source of truth for index.html
   Reuses APARTMENTS + getApartmentText from apartments-data.js for the
   prominent Stay section, and OTHER_SERVICES + getOtherServicesText from
   the same file for the compact 4-service strip. Load apartments-data.js
   BEFORE this file.
   ========================================================================== */

const INDEX_PAGE = {
  en: {
    heroEyebrow:"Istanbul · Est. 2020",
    heroH1a:"Istanbul is better", heroH1b:"when you have", heroH1em:"the right partner",
    heroP:"From curated short-term stays in Taksim & Beyoğlu to real estate, travel services, and visa consultancy — Hancı Global makes Istanbul work for you.",
    heroBtn1:"Explore our services", heroBtn2:"💬 Get in touch",

    stayEyebrow:"Our flagship", stayH2a:"Start with", stayH2em:"Hancı Stay",
    stayP:"Curated luxury apartments in Taksim & Beyoğlu — professionally managed and ready for your arrival.",
    stayViewAll:"View all properties →",

    otherServicesTitle:"More from Hancı Global",

    aboutBadge:"Since 2020 · Istanbul", aboutEyebrow:"About Hancı Global",
    aboutH2a:"One group, built", aboutH2em:"around Istanbul",
    aboutP1:"Hancı Global is an Istanbul-based consulting group at the intersection of real estate, hospitality, travel, and migration services. We believe the best version of Istanbul should be accessible — not complicated.",
    aboutP2:"Whether you are a traveller looking for the perfect apartment, an investor seeking the right property, or someone navigating a visa application — our trilingual team handles the details so you do not have to.",
    aboutTags:["TURSAB licensed","Taksim & Beyoğlu","All Istanbul","English · Turkish · Russian"],

    stats:[
      { num:"5", label:"Service lines" },
      { num:"3", label:"Booking platforms" },
      { num:"EN+TR+RU", label:"Trilingual team" },
      { num:"IST", label:"Istanbul-based" }
    ],

    locationsEyebrow:"Where we operate", locationsH2a:"Rooted in", locationsH2em:"Istanbul",
    locations:[
      { name:"Taksim & Beyoğlu", sub:"Stay · Travel", desc:"The cultural heart of Istanbul. All our short-term rentals and travel services are centred here, steps from İstiklal." },
      { name:"All of Istanbul", sub:"Property · Renovation", desc:"Our real estate & renovation team covers every neighbourhood — Beşiktaş to Kadıköy and beyond." },
      { name:"Everywhere", sub:"Visa · Consultancy", desc:"Visa consultancy and remote services for clients across Turkey and from abroad." }
    ],

    contactEyebrow:"Contact", contactH2a:"Let's talk", contactH2em:"about Istanbul",
    contactP:"Reach out on WhatsApp for the fastest response — we reply in English, Turkish and Russian.",
    chWhatsapp:"WhatsApp", chPhone:"Phone", chEmail:"Email", chAddress:"Address", chInstagram:"Instagram",
    formName:"Name", formEmail:"Email", formService:"Service", formMessage:"Message",
    formNamePh:"Your name", formEmailPh:"your@email.com", formMessagePh:"Tell us what you need...",
    formOptions:["Hancı Stay — short-term rental","Hancı Property — real estate & renovation","Hancı Renovation — full renovation & refurbishment","Hancı Travel — transfers & tours","Hancı Visa — consultancy"],
    formSubmit:"💬 Send via WhatsApp", formAlertName:"Please enter your name.",

    footerServices:"Services", footerContact:"Contact", footerCompany:"Company"
  },
  tr: {
    heroEyebrow:"İstanbul · 2020'den beri",
    heroH1a:"Doğru", heroH1b:"ortakla İstanbul çok", heroH1em:"daha güzel",
    heroP:"Taksim & Beyoğlu'nda özenle seçilmiş kısa dönem kiralıklardan gayrimenkul, tadilat, seyahat ve vize danışmanlığına — Hancı Global, İstanbul'u sizin için kolaylaştırır.",
    heroBtn1:"Hizmetlerimizi keşfedin", heroBtn2:"💬 İletişime geçin",

    stayEyebrow:"Amiral gemimiz", stayH2a:"Hancı Stay ile", stayH2em:"başlayın",
    stayP:"Taksim & Beyoğlu'nda özenle seçilmiş lüks daireler — profesyonelce yönetilir, varışınıza hazırdır.",
    stayViewAll:"Tüm mülkleri görün →",

    otherServicesTitle:"Hancı Global'den daha fazlası",

    aboutBadge:"2020'den beri · İstanbul", aboutEyebrow:"Hancı Global Hakkında",
    aboutH2a:"İstanbul için kurulmuş", aboutH2em:"bir grup",
    aboutP1:"Hancı Global, gayrimenkul, konaklama, seyahat ve göç hizmetlerinin kesişiminde faaliyet gösteren İstanbul merkezli bir danışmanlık grubudur. İstanbul'un en iyi halinin karmaşık değil, erişilebilir olması gerektiğine inanıyoruz.",
    aboutP2:"İster mükemmel daireyi arayan bir gezgin, ister doğru mülkü arayan bir yatırımcı, ister vize başvurusuyla uğraşan biri olun — üç dilli ekibimiz detaylarla ilgilenir, siz uğraşmazsınız.",
    aboutTags:["TURSAB belgeli","Taksim & Beyoğlu","Tüm İstanbul","İngilizce · Türkçe · Rusça"],

    stats:[
      { num:"5", label:"Hizmet Alanı" },
      { num:"3", label:"Rezervasyon Platformu" },
      { num:"EN+TR+RU", label:"Üç Dilli Ekip" },
      { num:"IST", label:"İstanbul Merkezli" }
    ],

    locationsEyebrow:"Nerede faaliyet gösteriyoruz", locationsH2a:"İstanbul'a", locationsH2em:"bağlıyız",
    locations:[
      { name:"Taksim & Beyoğlu", sub:"Konaklama · Seyahat", desc:"İstanbul'un kültürel kalbi. Tüm kısa dönem kiralıklarımız ve seyahat hizmetlerimiz burada, İstiklal'e birkaç adım mesafede." },
      { name:"Tüm İstanbul", sub:"Emlak · Tadilat", desc:"Gayrimenkul & tadilat ekibimiz Beşiktaş'tan Kadıköy'e her mahalleyi kapsar." },
      { name:"Her yerde", sub:"Vize · Danışmanlık", desc:"Türkiye geneli ve yurt dışındaki müşteriler için vize danışmanlığı ve uzaktan hizmetler." }
    ],

    contactEyebrow:"İletişim", contactH2a:"İstanbul'u", contactH2em:"konuşalım",
    contactP:"En hızlı yanıt için WhatsApp'tan ulaşın — İngilizce, Türkçe ve Rusça yanıt veriyoruz.",
    chWhatsapp:"WhatsApp", chPhone:"Telefon", chEmail:"E-posta", chAddress:"Adres", chInstagram:"Instagram",
    formName:"İsim", formEmail:"E-posta", formService:"Hizmet", formMessage:"Mesaj",
    formNamePh:"Adınız", formEmailPh:"eposta@adresiniz.com", formMessagePh:"Ne ihtiyacınız olduğunu yazın...",
    formOptions:["Hancı Stay — kısa dönem kiralık","Hancı Property — gayrimenkul","Hancı Renovation — komple tadilat","Hancı Travel — transfer & turlar","Hancı Visa — danışmanlık"],
    formSubmit:"💬 WhatsApp ile gönder", formAlertName:"Lütfen adınızı girin.",

    footerServices:"Hizmetler", footerContact:"İletişim", footerCompany:"Şirket"
  },
  ru: {
    heroEyebrow:"Стамбул · С 2020 года",
    heroH1a:"Стамбул лучше,", heroH1b:"когда рядом правильный", heroH1em:"партнёр",
    heroP:"От краткосрочной аренды в Таксиме и Бейоглу до недвижимости, ремонта, туристических услуг и визового консалтинга — Hancı Global делает Стамбул доступным для вас.",
    heroBtn1:"Наши услуги", heroBtn2:"💬 Связаться с нами",

    stayEyebrow:"Наше главное направление", stayH2a:"Начните с", stayH2em:"Hancı Stay",
    stayP:"Отборные апартаменты в Таксиме и Бейоглу — профессиональное управление, готовность к вашему приезду.",
    stayViewAll:"Смотреть все объекты →",

    otherServicesTitle:"Больше от Hancı Global",

    aboutBadge:"С 2020 года · Стамбул", aboutEyebrow:"О компании Hancı Global",
    aboutH2a:"Одна компания,", aboutH2em:"созданная для Стамбула",
    aboutP1:"Hancı Global — стамбульская консалтинговая группа на стыке недвижимости, гостеприимства, туризма и миграционных услуг. Мы верим, что лучшая версия Стамбула должна быть доступной, а не сложной.",
    aboutP2:"Будь вы путешественник в поисках идеальной квартиры, инвестор в поисках подходящей недвижимости или человек, оформляющий визу — наша трёхъязычная команда берёт детали на себя.",
    aboutTags:["Лицензия TURSAB","Таксим и Бейоглу","Весь Стамбул","Английский · Турецкий · Русский"],

    stats:[
      { num:"5", label:"Направления" },
      { num:"3", label:"Платформы бронирования" },
      { num:"EN+TR+RU", label:"Трёхъязычная команда" },
      { num:"IST", label:"Базируемся в Стамбуле" }
    ],

    locationsEyebrow:"Где мы работаем", locationsH2a:"Наши корни — в", locationsH2em:"Стамбуле",
    locations:[
      { name:"Таксим и Бейоглу", sub:"Апартаменты · Путешествия", desc:"Культурное сердце Стамбула. Вся наша краткосрочная аренда и туристические услуги сосредоточены здесь, в нескольких шагах от Истикляль." },
      { name:"Весь Стамбул", sub:"Недвижимость · Ремонт", desc:"Наша команда по недвижимости и ремонту охватывает все районы — от Бешикташа до Кадыкёя и далее." },
      { name:"Везде", sub:"Виза · Консалтинг", desc:"Визовый консалтинг и дистанционные услуги для клиентов по всей Турции и из-за рубежа." }
    ],

    contactEyebrow:"Контакты", contactH2a:"Поговорим", contactH2em:"о Стамбуле",
    contactP:"Напишите в WhatsApp для самого быстрого ответа — отвечаем на английском, турецком и русском.",
    chWhatsapp:"WhatsApp", chPhone:"Телефон", chEmail:"Email", chAddress:"Адрес", chInstagram:"Instagram",
    formName:"Имя", formEmail:"Email", formService:"Услуга", formMessage:"Сообщение",
    formNamePh:"Ваше имя", formEmailPh:"ваш@email.com", formMessagePh:"Напишите, что вам нужно...",
    formOptions:["Hancı Stay — краткосрочная аренда","Hancı Property — недвижимость","Hancı Renovation — полный ремонт","Hancı Travel — трансферы и туры","Hancı Visa — визовый консалтинг"],
    formSubmit:"💬 Отправить в WhatsApp", formAlertName:"Пожалуйста, введите ваше имя.",

    footerServices:"Услуги", footerContact:"Контакты", footerCompany:"Компания"
  }
};
function getIndexPage(lang) { return INDEX_PAGE[lang] || INDEX_PAGE.en; }
