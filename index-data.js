/* ==========================================================================
   INDEX DATA — single source of truth for index.html
   Reuses APARTMENTS + getApartmentText from apartments-data.js for the
   prominent Stay section, OTHER_SERVICES + getOtherServicesText from the
   same file for the compact 4-service strip, and getStayPage from the same
   file for correctly-translated price wording (From/'dan başlayan/От).
   Load apartments-data.js BEFORE this file.
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
    aboutTags:["Taksim & Beyoğlu","All Istanbul","English · Turkish · Russian"],

    locationsEyebrow:"Where we operate", locationsH2a:"Rooted in", locationsH2em:"Istanbul",
    locations:[
      { name:"Taksim & Beyoğlu", sub:"Stay · Travel", desc:"The cultural heart of Istanbul. All our short-term rentals and travel services are centred here, steps from İstiklal." },
      { name:"All of Istanbul", sub:"Property · Renovation", desc:"Our real estate & renovation team covers every neighbourhood — Beşiktaş to Kadıköy and beyond." },
      { name:"Everywhere", sub:"Visa · Consultancy", desc:"Visa consultancy and remote services for clients across Turkey and from abroad." }
    ],

    contactEyebrow:"Contact", contactH2a:"Let's talk", contactH2em:"about Istanbul",
    contactP:"Reach out on WhatsApp for the fastest response — we reply in English, Turkish and Russian.",
    chWhatsapp:"WhatsApp", chPhone:"Phone", chEmail:"Email", chAddress:"Istanbul Office", chLegal:"Registered Company & Head Office", chInstagram:"Instagram",
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
    aboutTags:["Taksim & Beyoğlu","Tüm İstanbul","İngilizce · Türkçe · Rusça"],

    locationsEyebrow:"Nerede faaliyet gösteriyoruz", locationsH2a:"İstanbul'a", locationsH2em:"bağlıyız",
    locations:[
      { name:"Taksim & Beyoğlu", sub:"Konaklama · Seyahat", desc:"İstanbul'un kültürel kalbi. Tüm kısa dönem kiralıklarımız ve seyahat hizmetlerimiz burada, İstiklal'e birkaç adım mesafede." },
      { name:"Tüm İstanbul", sub:"Emlak · Tadilat", desc:"Gayrimenkul & tadilat ekibimiz Beşiktaş'tan Kadıköy'e her mahalleyi kapsar." },
      { name:"Her yerde", sub:"Vize · Danışmanlık", desc:"Türkiye geneli ve yurt dışındaki müşteriler için vize danışmanlığı ve uzaktan hizmetler." }
    ],

    contactEyebrow:"İletişim", contactH2a:"İstanbul'u", contactH2em:"konuşalım",
    contactP:"En hızlı yanıt için WhatsApp'tan ulaşın — İngilizce, Türkçe ve Rusça yanıt veriyoruz.",
    chWhatsapp:"WhatsApp", chPhone:"Telefon", chEmail:"E-posta", chAddress:"İstanbul Ofisi", chLegal:"Şirket Unvanı ve Merkez Adresi", chInstagram:"Instagram",
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
    aboutTags:["Таксим и Бейоглу","Весь Стамбул","Английский · Турецкий · Русский"],

    locationsEyebrow:"Где мы работаем", locationsH2a:"Наши корни — в", locationsH2em:"Стамбуле",
    locations:[
      { name:"Таксим и Бейоглу", sub:"Апартаменты · Путешествия", desc:"Культурное сердце Стамбула. Вся наша краткосрочная аренда и туристические услуги сосредоточены здесь, в нескольких шагах от Истикляль." },
      { name:"Весь Стамбул", sub:"Недвижимость · Ремонт", desc:"Наша команда по недвижимости и ремонту охватывает все районы — от Бешикташа до Кадыкёя и далее." },
      { name:"Везде", sub:"Виза · Консалтинг", desc:"Визовый консалтинг и дистанционные услуги для клиентов по всей Турции и из-за рубежа." }
    ],

    contactEyebrow:"Контакты", contactH2a:"Поговорим", contactH2em:"о Стамбуле",
    contactP:"Напишите в WhatsApp для самого быстрого ответа — отвечаем на английском, турецком и русском.",
    chWhatsapp:"WhatsApp", chPhone:"Телефон", chEmail:"Email", chAddress:"Офис в Стамбуле", chLegal:"Юридическое лицо и головной офис", chInstagram:"Instagram",
    formName:"Имя", formEmail:"Email", formService:"Услуга", formMessage:"Сообщение",
    formNamePh:"Ваше имя", formEmailPh:"ваш@email.com", formMessagePh:"Напишите, что вам нужно...",
    formOptions:["Hancı Stay — краткосрочная аренда","Hancı Property — недвижимость","Hancı Renovation — полный ремонт","Hancı Travel — трансферы и туры","Hancı Visa — визовый консалтинг"],
    formSubmit:"💬 Отправить в WhatsApp", formAlertName:"Пожалуйста, введите ваше имя.",

    footerServices:"Услуги", footerContact:"Контакты", footerCompany:"Компания"
  },
  ar: {
    heroEyebrow:"إسطنبول · منذ 2020",
    heroH1a:"إسطنبول أجمل", heroH1b:"عندما يكون معك", heroH1em:"الشريك المناسب",
    heroP:"من الإقامات القصيرة المختارة بعناية في تقسيم وبي أوغلو إلى العقارات وخدمات السفر — Hancı Global تجعل إسطنبول أسهل لك.",
    heroBtn1:"اكتشف خدماتنا", heroBtn2:"💬 تواصل معنا",

    stayEyebrow:"خدمتنا الرئيسية", stayH2a:"ابدأ مع", stayH2em:"Hancı Stay",
    stayP:"شقق فاخرة مختارة بعناية في تقسيم وبي أوغلو — بإدارة احترافية وجاهزة لاستقبالك.",
    stayViewAll:"← عرض جميع الشقق",

    otherServicesTitle:"المزيد من Hancı Global",

    aboutBadge:"منذ 2020 · إسطنبول", aboutEyebrow:"عن Hancı Global",
    aboutH2a:"مجموعة واحدة", aboutH2em:"مبنيّة حول إسطنبول",
    aboutP1:"Hancı Global مجموعة استشارية مقرّها إسطنبول، تعمل في مجالات العقارات والضيافة والسفر. نؤمن بأن أفضل ما في إسطنبول يجب أن يكون في متناول الجميع، لا معقّداً.",
    aboutP2:"سواء كنت مسافراً تبحث عن الشقة المثالية أو مستثمراً يبحث عن العقار المناسب — يتولّى فريقنا متعدّد اللغات كل التفاصيل نيابةً عنك.",
    aboutTags:["تقسيم وبي أوغلو","كل إسطنبول","الإنجليزية · التركية · الروسية"],

    locationsEyebrow:"أين نعمل", locationsH2a:"جذورنا في", locationsH2em:"إسطنبول",
    locations:[
      { name:"تقسيم وبي أوغلو", sub:"الإقامة · السفر", desc:"القلب الثقافي لإسطنبول. جميع شققنا للإيجار القصير وخدمات السفر تتركّز هنا، على بُعد خطوات من شارع الاستقلال." },
      { name:"كل إسطنبول", sub:"العقارات · التجديد", desc:"يغطّي فريق العقارات والتجديد لدينا كل الأحياء — من بشكتاش إلى كاديكوي وما بعدهما." },
      { name:"في كل مكان", sub:"التأشيرات · الاستشارات", desc:"استشارات التأشيرات وخدمات عن بُعد لعملائنا في أنحاء تركيا وخارجها." }
    ],

    contactEyebrow:"تواصل معنا", contactH2a:"لنتحدّث", contactH2em:"عن إسطنبول",
    contactP:"راسلنا عبر واتساب للحصول على أسرع ردّ — نردّ بالإنجليزية والتركية والروسية.",
    chWhatsapp:"واتساب", chPhone:"الهاتف", chEmail:"البريد الإلكتروني", chAddress:"مكتب إسطنبول", chLegal:"الشركة المسجّلة والمقرّ الرئيسي", chInstagram:"إنستغرام",
    formName:"الاسم", formEmail:"البريد الإلكتروني", formService:"الخدمة", formMessage:"الرسالة",
    formNamePh:"اسمك", formEmailPh:"your@email.com", formMessagePh:"أخبرنا بما تحتاجه...",
    formOptions:["Hancı Stay — إيجار قصير الأجل","Hancı Property — العقارات","Hancı Renovation — التجديد الشامل","Hancı Travel — النقل والجولات","Hancı Visa — استشارات التأشيرات"],
    formSubmit:"💬 أرسل عبر واتساب", formAlertName:"يرجى إدخال اسمك.",

    footerServices:"الخدمات", footerContact:"التواصل", footerCompany:"الشركة"
  }
};
function getIndexPage(lang) { return INDEX_PAGE[lang] || INDEX_PAGE.en; }
