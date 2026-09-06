/* ==========================================================================
   VISA DATA — single source of truth for visa.html
   ========================================================================== */

const VISA_SERVICES = [
  { key:"schengen", img:"schengen.jpg", waMsg:"Hi, I'd like help with a Schengen visa application." },
  { key:"ukusa", img:"usvisa.jpg", waMsg:"Hi, I'd like help with a UK or USA visa application." },
  { key:"documents", img:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=85", waMsg:"Hi, I'd like help preparing my visa documents." }
];

const VISA_REVIEWS = [
  { name:"Beyza U.", country_en:"Denmark", country_tr:"Danimarka", country_ru:"Дания", year:"2026",
    text_en:"Thanks to them, I received my 6-month Denmark visa quickly and without any issues. The whole process was smooth from start to finish — they handled everything professionally.",
    text_tr:"Sayelerinde 6 aylık Danimarka vizemi sorunsuz bir şekilde çok hızlı aldım. Süreç baştan sona çok düzgün ilerledi — her şeyi profesyonelce hallettiler.",
    text_ru:"Благодаря им я быстро и без проблем получила датскую визу на 6 месяцев. Весь процесс прошёл гладко — всё было сделано профессионально." },
  { name:"Mehmet D.", country_en:"France", country_tr:"Fransa", country_ru:"Франция", year:"2025",
    text_en:"Very professional and responsive. They helped me prepare all my documents correctly and my visa was approved on the first attempt. Highly recommended.",
    text_tr:"Çok profesyonel ve hızlı yanıt veriyorlar. Tüm belgelerimi doğru hazırlamama yardımcı oldular ve vizem ilk denemede onaylandı. Kesinlikle tavsiye ederim.",
    text_ru:"Очень профессиональны и отзывчивы. Помогли правильно подготовить документы, виза одобрена с первой попытки. Настоятельно рекомендую." }
];

const VISA_PAGE = {
  en: {
    backHome:"← Back to Hancı Global", heroEyebrow:"Hancı Visa · Istanbul",
    heroH1a:"Your visa,", heroH1em:"handled",
    heroP:"Professional Schengen, UK and US visa consultancy for Turkish nationals. We guide you from document preparation through to submission — with personalised advice for every case.",
    heroBtn1:"💬 Start your application", heroBtn2:"📞 Call us",
    trustBadges:["✓ Schengen visas","✓ UK & USA visas","✓ White-collar specialists"],
    wcH2a:"Specialists in", wcH2em:"white-collar", wcH2b:"visa applications",
    wcP:"We specialise in visa consultancy for professionals — business people, executives, academics and frequent travellers. We understand the documentation requirements for complex profiles and know how to present your case in the strongest possible way.",
    wcTags:["Business professionals","Executives & managers","Academics & researchers","Frequent travellers","Self-employed"],
    wcBtn1:"💬 Discuss your case", wcBtn2:"📞 Call us",
    servicesEyebrow:"What we offer", servicesH2a:"Visa services we", servicesH2em:"handle",
    services:{
      schengen:{ chip:"Schengen", title:"Schengen Visa", desc:"Germany, France, Netherlands, Denmark, Belgium, Austria and all other Schengen countries. We handle the full application process for Turkish nationals — from document preparation to submission.", cta:"💬 Get started" },
      ukusa:{ chip:"UK & USA", title:"UK & USA Visa", desc:"UK visitor and business visas, and US B1/B2 tourist and business visas. We guide you through the specific requirements, interview preparation and documentation for both countries.", cta:"💬 Get started" },
      documents:{ chip:"Documents", title:"Document Preparation", desc:"Missing or incorrect documents are the most common reason for visa rejection. We review and help prepare every required document — cover letters, financial statements, itineraries and more.", cta:"💬 Get a review" }
    },
    featuresEyebrow:"Our approach", featuresH2a:"How we make it", featuresH2em:"easier",
    features:[
      { title:"Thorough document review", desc:"We check every document before submission. Incomplete or weak applications are the number one reason for rejection — we eliminate that risk." },
      { title:"Personal guidance", desc:"Every case is different. We give personalised advice based on your travel history, profession, purpose of travel and destination country requirements." },
      { title:"Appointment support", desc:"We advise on the right timing, help you book consulate appointments and prepare you for any interview if required." },
      { title:"Tailored document checklist", desc:"We provide a personalised checklist based on your specific visa type, destination and personal profile — so nothing gets missed." },
      { title:"White-collar expertise", desc:"We have extensive experience with professional profiles — business owners, executives, academics and frequent travellers who require a stronger, more nuanced application." },
      { title:"Fast WhatsApp response", desc:"Questions do not wait — we are available on WhatsApp for quick answers, updates and guidance throughout your application process." }
    ],
    processEyebrow:"How it works", processH2a:"Your application,", processH2em:"step by step",
    steps:[
      { title:"Initial consultation", desc:"We discuss your travel plans, profile and destination to understand your specific requirements." },
      { title:"Document checklist", desc:"We provide a personalised list of required documents and advise on how to prepare each one correctly." },
      { title:"Review & prepare", desc:"We review every document, write cover letters if needed and ensure your application is complete and compelling." },
      { title:"Submit & follow up", desc:"We guide submission and stay in touch until your visa decision arrives. We are here for any follow-up questions." }
    ],
    reviewsEyebrow:"What our clients say", reviewsH2a:"Client", reviewsH2em:"reviews",
    reviewPlaceholderTitle:"Share your experience", reviewPlaceholderDesc:"Did we help with your visa? We would love to hear from you.", reviewPlaceholderBtn:"Leave a review",
    ctaH2:"Ready to get started?", ctaP:"Contact us to discuss your visa application. Personalised advice, fast responses — in English or Türkçe.",
    ctaBtn1:"💬 WhatsApp us now", ctaBtn2:"📞 Call us",
    footerServices:"Services", footerContact:"Contact", footerCompany:"Company"
  },
  tr: {
    backHome:"← Hancı Global'e dön", heroEyebrow:"Hancı Visa · İstanbul",
    heroH1a:"Vizeniz,", heroH1em:"halloldu",
    heroP:"Türk vatandaşları için profesyonel Schengen, İngiltere ve ABD vize danışmanlığı. Belge hazırlığından başvuruya kadar kişiselleştirilmiş rehberlik.",
    heroBtn1:"💬 Başvurunuzu başlatın", heroBtn2:"📞 Bizi arayın",
    trustBadges:["✓ Schengen vizeleri","✓ İngiltere & ABD vizeleri","✓ Beyaz yakalı uzmanlar"],
    wcH2a:"Beyaz yakalı", wcH2em:"vize başvurularında", wcH2b:"uzmanlar",
    wcP:"Profesyoneller için vize danışmanlığında uzmanlaşıyoruz — iş insanları, yöneticiler, akademisyenler ve sık seyahat edenler. Karmaşık profillerin belge gereksinimlerini anlıyor ve davanızı en güçlü şekilde nasıl sunacağımızı biliyoruz.",
    wcTags:["İş profesyonelleri","Yöneticiler","Akademisyenler & araştırmacılar","Sık seyahat edenler","Serbest meslek"],
    wcBtn1:"💬 Durumunuzu görüşelim", wcBtn2:"📞 Bizi arayın",
    servicesEyebrow:"Neler sunuyoruz", servicesH2a:"Yürüttüğümüz", servicesH2em:"vize hizmetleri",
    services:{
      schengen:{ chip:"Schengen", title:"Schengen Vizesi", desc:"Almanya, Fransa, Hollanda, Danimarka, Belçika, Avusturya ve tüm Schengen ülkeleri. Türk vatandaşları için belge hazırlığından başvuruya kadar tüm süreci yönetiyoruz.", cta:"💬 Başlayın" },
      ukusa:{ chip:"İngiltere & ABD", title:"İngiltere & ABD Vizesi", desc:"İngiltere ziyaretçi ve iş vizeleri ile ABD B1/B2 turist ve iş vizeleri. Her iki ülke için özel gereksinimler, mülakat hazırlığı ve belgelendirme konusunda rehberlik ediyoruz.", cta:"💬 Başlayın" },
      documents:{ chip:"Belgeler", title:"Belge Hazırlığı", desc:"Eksik veya hatalı belgeler vize reddinin en yaygın sebebidir. Ön yazılar, mali tablolar, güzergahlar ve daha fazlası dahil tüm gerekli belgeleri inceliyoruz ve hazırlamanıza yardımcı oluyoruz.", cta:"💬 İnceleme isteyin" }
    },
    featuresEyebrow:"Yaklaşımımız", featuresH2a:"Nasıl daha", featuresH2em:"kolay hale getiriyoruz",
    features:[
      { title:"Kapsamlı belge incelemesi", desc:"Başvuru öncesi her belgeyi kontrol ediyoruz. Eksik veya zayıf başvurular en yaygın red sebebi — bu riski ortadan kaldırıyoruz." },
      { title:"Kişisel rehberlik", desc:"Her vaka farklıdır. Seyahat geçmişinize, mesleğinize, seyahat amacınıza ve hedef ülke gereksinimlerine göre kişiselleştirilmiş tavsiye veriyoruz." },
      { title:"Randevu desteği", desc:"Doğru zamanlama konusunda danışmanlık verir, konsolosluk randevusu almanıza yardımcı olur ve gerekirse mülakat hazırlığı yaparız." },
      { title:"Kişiselleştirilmiş belge listesi", desc:"Vize türünüze, hedef ülkenize ve kişisel profilinize göre özel kontrol listesi sunuyoruz — hiçbir şey gözden kaçmasın." },
      { title:"Beyaz yakalı uzmanlığı", desc:"İş sahipleri, yöneticiler, akademisyenler ve daha güçlü, nüanslı başvuru gerektiren sık seyahat edenler gibi profesyonel profillerle kapsamlı deneyimimiz var." },
      { title:"Hızlı WhatsApp yanıtı", desc:"Sorular beklemez — başvuru süreciniz boyunca hızlı yanıtlar, güncellemeler ve rehberlik için WhatsApp'tayız." }
    ],
    processEyebrow:"Nasıl çalışır", processH2a:"Başvurunuz,", processH2em:"adım adım",
    steps:[
      { title:"İlk görüşme", desc:"Seyahat planlarınızı, profilinizi ve hedef ülkenizi tartışarak özel gereksinimlerinizi anlıyoruz." },
      { title:"Belge listesi", desc:"Gerekli belgeler için kişiselleştirilmiş liste sunuyor, her birini doğru hazırlamanız için tavsiye veriyoruz." },
      { title:"İnceleme & hazırlık", desc:"Her belgeyi inceliyoruz, gerekirse ön yazı yazıyor ve başvurunuzun eksiksiz ve ikna edici olmasını sağlıyoruz." },
      { title:"Başvuru & takip", desc:"Başvuruya rehberlik edip vize kararınıza kadar iletişimde kalıyoruz. Sonraki sorularınız için buradayız." }
    ],
    reviewsEyebrow:"Müşterilerimiz ne diyor", reviewsH2a:"Müşteri", reviewsH2em:"yorumları",
    reviewPlaceholderTitle:"Deneyiminizi paylaşın", reviewPlaceholderDesc:"Vizenizde yardımcı olduk mu? Görüşlerinizi duymak isteriz.", reviewPlaceholderBtn:"Yorum bırakın",
    ctaH2:"Başlamaya hazır mısınız?", ctaP:"Vize başvurunuzu görüşmek için bize ulaşın. Kişiselleştirilmiş tavsiye, hızlı yanıtlar — İngilizce veya Türkçe.",
    ctaBtn1:"💬 Şimdi WhatsApp'tan yazın", ctaBtn2:"📞 Bizi arayın",
    footerServices:"Hizmetler", footerContact:"İletişim", footerCompany:"Şirket"
  },
  ru: {
    backHome:"← Вернуться на Hancı Global", heroEyebrow:"Hancı Visa · Стамбул",
    heroH1a:"Ваша виза —", heroH1em:"мы всё решим",
    heroP:"Профессиональный визовый консалтинг для граждан Турции: Шенген, Великобритания и США. Сопровождение от подготовки документов до подачи заявки.",
    heroBtn1:"💬 Начать оформление", heroBtn2:"📞 Позвонить",
    trustBadges:["✓ Шенгенские визы","✓ Визы Великобритании и США","✓ Специалисты для профессионалов"],
    wcH2a:"Специалисты по визам", wcH2em:"для профессионалов", wcH2b:"",
    wcP:"Специализируемся на визовом консалтинге для профессионалов — бизнесменов, руководителей, учёных и частых путешественников. Понимаем требования к документам для сложных профилей и знаем, как представить вашу заявку максимально убедительно.",
    wcTags:["Деловые профессионалы","Руководители и менеджеры","Учёные и исследователи","Частые путешественники","Самозанятые"],
    wcBtn1:"💬 Обсудить ваш случай", wcBtn2:"📞 Позвонить",
    servicesEyebrow:"Что мы предлагаем", servicesH2a:"Визовые услуги, которые мы", servicesH2em:"оказываем",
    services:{
      schengen:{ chip:"Шенген", title:"Шенгенская виза", desc:"Германия, Франция, Нидерланды, Дания, Бельгия, Австрия и все страны Шенгенского соглашения. Ведём полный процесс подачи заявления для граждан Турции — от подготовки документов до подачи.", cta:"💬 Начать" },
      ukusa:{ chip:"Великобритания и США", title:"Виза Великобритании и США", desc:"Туристические и деловые визы в Великобританию, визы США B1/B2. Сопровождение по требованиям, подготовке к интервью и документации для обеих стран.", cta:"💬 Начать" },
      documents:{ chip:"Документы", title:"Подготовка документов", desc:"Неполные или неверные документы — главная причина отказа. Проверяем и помогаем подготовить все необходимые документы: сопроводительные письма, финансовые выписки, маршруты и другое.", cta:"💬 Запросить проверку" }
    },
    featuresEyebrow:"Наш подход", featuresH2a:"Как мы делаем это", featuresH2em:"проще",
    features:[
      { title:"Тщательная проверка документов", desc:"Проверяем каждый документ перед подачей. Неполные или слабые заявки — главная причина отказа, мы устраняем этот риск." },
      { title:"Персональное сопровождение", desc:"Каждый случай уникален. Персональные рекомендации с учётом истории поездок, профессии, цели путешествия и требований страны назначения." },
      { title:"Поддержка с записью", desc:"Консультируем по срокам, помогаем записаться в консульство и готовим к собеседованию при необходимости." },
      { title:"Индивидуальный список документов", desc:"Персональный чек-лист по типу визы, стране назначения и личному профилю — чтобы ничего не упустить." },
      { title:"Экспертиза для профессионалов", desc:"Богатый опыт работы с профессиональными профилями — владельцы бизнеса, руководители, учёные и частые путешественники, которым нужна более сильная и продуманная заявка." },
      { title:"Быстрый ответ в WhatsApp", desc:"Вопросы не ждут — мы доступны в WhatsApp для быстрых ответов, обновлений и сопровождения на протяжении всего процесса подачи." }
    ],
    processEyebrow:"Как это работает", processH2a:"Ваша заявка,", processH2em:"шаг за шагом",
    steps:[
      { title:"Первичная консультация", desc:"Обсуждаем планы поездки, профиль и страну назначения для понимания ваших требований." },
      { title:"Список документов", desc:"Предоставляем персональный список документов и консультируем по правильной подготовке каждого." },
      { title:"Проверка и подготовка", desc:"Проверяем все документы, при необходимости пишем сопроводительные письма и обеспечиваем полноту заявки." },
      { title:"Подача и отслеживание", desc:"Сопровождаем подачу и остаёмся на связи до решения по визе. Ответим на любые последующие вопросы." }
    ],
    reviewsEyebrow:"Что говорят наши клиенты", reviewsH2a:"Отзывы", reviewsH2em:"клиентов",
    reviewPlaceholderTitle:"Поделитесь опытом", reviewPlaceholderDesc:"Мы помогли с вашей визой? Будем рады отзыву.", reviewPlaceholderBtn:"Оставить отзыв",
    ctaH2:"Готовы начать?", ctaP:"Свяжитесь с нами для обсуждения визовой заявки. Персональные советы, быстрые ответы — на русском, английском и турецком.",
    ctaBtn1:"💬 Написать в WhatsApp", ctaBtn2:"📞 Позвонить",
    footerServices:"Услуги", footerContact:"Контакты", footerCompany:"Компания"
  }
};
function getVisaPage(lang) { return VISA_PAGE[lang] || VISA_PAGE.en; }
