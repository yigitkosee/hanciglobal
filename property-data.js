/* ==========================================================================
   PROPERTY DATA — single source of truth for property.html
   --------------------------------------------------------------------------
   To add a new listing for sale: copy one block inside PROPERTY_LISTINGS and
   change the id/images/specs/translations. property.html will render it
   automatically — no HTML editing needed.
   ========================================================================== */

const PROPERTY_LISTINGS = [
  {
    id: "beyoglu-1plus1",
    sahibindenUrl: "https://www.sahibinden.com/ilan/emlak-konut-satilik-beyoglu-nda-asansorlu-binada-istiklal-caddesi-ne-2-dakika-1-plus1-1326036018/detay/",
    waNumber: "905063335154",
    images: ["ev1-1.jpg","ev1-2.jpg","ev1-3.jpg","ev1-4.jpg","ev1-5.jpg","ev1-6.jpg"],
    priceTRY: "6.000.000",
    specs: { grossM2: "85 m²", netM2: "65 m²", layout: "1+1", floor: "4 / 4", heating: "Gas combi", mortgage: "Eligible" },
    translations: {
      en: {
        location: "Hüseyinağa Mah. · Beyoğlu",
        name: "1+1 Apartment with Elevator — 2 min to İstiklal Avenue",
        desc: "A charming apartment on the 4th floor of a historic elevator building in the heart of Beyoğlu. Just minutes from İstiklal Avenue and Taksim Square — an outstanding opportunity for both living and investment.",
        priceLabel: "asking price",
        features: [
          "Elevator building — rare in this central location",
          "Walking distance to İstiklal Avenue & Taksim Square",
          "Spacious shared rooftop terrace",
          "Independent gas combi-boiler heating",
          "Currently tenanted — can be delivered vacant or kept as rental income",
          "Kat mülkiyeti title deed"
        ]
      },
      tr: {
        location: "Hüseyinağa Mah. · Beyoğlu",
        name: "Asansörlü Binada 1+1 Daire — İstiklal Caddesi'ne 2 Dakika",
        desc: "Beyoğlu'nun kalbinde, tarihi asansörlü bir binanın 4. katında büyüleyici bir daire. İstiklal Caddesi ve Taksim Meydanı'na yürüme mesafesinde — hem yaşam hem yatırım için eşsiz bir fırsat.",
        priceLabel: "talep fiyatı",
        features: [
          "Asansörlü bina — bu merkezi konumda nadir",
          "İstiklal Caddesi & Taksim Meydanı'na yürüme mesafesi",
          "Geniş ortak çatı terası",
          "Bağımsız kombi (doğalgaz) ısıtma",
          "Şu an kiracılı — boş teslim veya kira geliri olarak tutulabilir",
          "Kat mülkiyeti tapusu"
        ]
      },
      ru: {
        location: "Hüseyinağa Mah. · Beyoğlu",
        name: "Квартира 1+1 с лифтом — 2 минуты до проспекта Истикляль",
        desc: "Уютная квартира на 4-м этаже исторического здания с лифтом в самом сердце Бейоглу. В нескольких минутах от проспекта Истикляль и площади Таксим — отличная возможность для жизни и инвестиций.",
        priceLabel: "запрашиваемая цена",
        features: [
          "Здание с лифтом — редкость в таком центральном месте",
          "Пешая доступность до пр. Истикляль и пл. Таксим",
          "Просторная общая терраса на крыше",
          "Независимое газовое отопление",
          "Сейчас сдаётся — можно получить свободной или оставить для дохода от аренды",
          "Правоустанавливающий документ Kat mülkiyeti"
        ]
      }
    }
  }
];

function getPropertyText(listing, lang) {
  return listing.translations[lang] || listing.translations.en;
}

/* specs are labels only (values are the same numbers/words in every language
   except the label) — kept separate from PROPERTY_PAGE for clarity */
const PROPERTY_SPEC_LABELS = {
  en: { grossM2:"Size", netM2:"Net", layout:"Layout", floor:"Floor", heating:"Heating", mortgage:"Mortgage", forSale:"For Sale" },
  tr: { grossM2:"Alan", netM2:"Net", layout:"Oda Sayısı", floor:"Kat", heating:"Isıtma", mortgage:"Kredi", forSale:"Satılık" },
  ru: { grossM2:"Площадь", netM2:"Чистая", layout:"Планировка", floor:"Этаж", heating:"Отопление", mortgage:"Ипотека", forSale:"Продаётся" }
};
function getSpecLabels(lang) { return PROPERTY_SPEC_LABELS[lang] || PROPERTY_SPEC_LABELS.en; }

/* ==========================================================================
   PROPERTY_PAGE — all static page text (hero, investor block, process,
   features, CTA, footer). Fill "tr"/"ru"; falls back to "en" if missing.
   ========================================================================== */
const PROPERTY_PAGE = {
  en: {
    backHome: "← Back to Hancı Global",
    heroEyebrow: "Hancı Property · Istanbul",
    heroH1a: "Invest in", heroH1em: "Istanbul",
    heroP: "Curated property listings and expert real estate consultancy across Istanbul. We guide international and local buyers from first inquiry to signed title deed.",
    heroBtn1: "View listings", heroBtn2: "💬 Talk to us",
    trustBadges: ["✓ Beyoğlu specialists", "✓ International buyers welcome", "✓ Turkish citizenship advisory"],
    listingsEyebrow: "Active listings", listingsH2a: "Properties for", listingsH2em: "sale",
    viewSahibinden: "🏠 View on Sahibinden", enquire: "💬 Enquire", bookViewing: "📅 Book viewing",
    investorH2a: "Buying in Istanbul", investorH2em: "as an international investor?",
    investorP: "We guide foreign buyers through every step of the property acquisition process in Turkey — from due diligence and title deed transfer to Turkish citizenship by investment applications and financing options.",
    investorBtn1: "💬 Talk to us", investorBtn2: "📞 Call us",
    investorFeats: [
      { icon:"🏛️", title:"Property acquisition advisory", desc:"We guide you through the full purchase process — legal checks, notary, title deed transfer and all Turkish bureaucratic requirements." },
      { icon:"🇹🇷", title:"Turkish citizenship by investment", desc:"Eligible properties can qualify for Turkish citizenship. We advise on requirements, timelines and the application process." },
      { icon:"🏦", title:"Financing & market insights", desc:"We track the Istanbul property market and banking sector closely — sharing the most suitable financing options for your situation." },
      { icon:"🌐", title:"English & multilingual support", desc:"Our team communicates in English, Turkish and Russian throughout the entire process — no language barriers." }
    ],
    processEyebrow: "How we work", processH2a: "Finding your", processH2em: "ideal property",
    steps: [
      { title:"Initial consultation", desc:"We understand your goals — budget, preferred location, intended use and investment horizon." },
      { title:"Search & shortlist", desc:"We identify suitable properties across Istanbul and present a curated shortlist matched to your criteria." },
      { title:"Viewings & negotiation", desc:"We accompany you on viewings, evaluate each property honestly, and negotiate the best price on your behalf." },
      { title:"Contract & handover", desc:"We guide you through the legal process and stay with you until the title deed is in your hand." }
    ],
    featuresEyebrow: "Why Hancı Property", featuresH2a: "What makes us", featuresH2em: "different",
    features: [
      { title:"Beyoğlu specialists", desc:"Deep local knowledge of Beyoğlu, Taksim, Galata and surrounding neighbourhoods — the areas we know best and operate in daily." },
      { title:"International buyers", desc:"We are experienced in working with foreign buyers — guiding every step from property search through to Turkish citizenship applications." },
      { title:"Investment advisory", desc:"Looking for rental yield or capital appreciation? We advise on the best opportunities based on current market conditions." },
      { title:"Honest advice", desc:"We evaluate every property honestly and tell you what we really think — we work for you, not for the seller." },
      { title:"End-to-end support", desc:"From the first viewing to the title deed handover — we manage every step and keep you informed throughout." },
      { title:"Fast WhatsApp response", desc:"Questions answered quickly. We are available on WhatsApp in English, Turkish and Russian throughout the process." }
    ],
    ctaH2: "Ready to invest in Istanbul?", ctaP: "Contact us to discuss your property goals. We work across all Istanbul neighbourhoods and welcome international buyers.",
    ctaBtn1: "💬 WhatsApp us", ctaBtn2: "📞 Call us",
    footerServices: "Services", footerContact: "Contact", footerCompany: "Company"
  },
  tr: {
    backHome: "← Hancı Global'e dön",
    heroEyebrow: "Hancı Property · İstanbul",
    heroH1a: "", heroH1em: "İstanbul'a yatırım yapın",
    heroP: "İstanbul genelinde özenle seçilmiş mülk ilanları ve uzman gayrimenkul danışmanlığı. Uluslararası ve yerel alıcıları ilk sorudan tapu teslimine kadar rehberlik ediyoruz.",
    heroBtn1: "İlanları görün", heroBtn2: "💬 Bizimle konuşun",
    trustBadges: ["✓ Beyoğlu uzmanları", "✓ Uluslararası alıcılara açık", "✓ Türk vatandaşlığı danışmanlığı"],
    listingsEyebrow: "Aktif ilanlar", listingsH2a: "Satılık", listingsH2em: "mülkler",
    viewSahibinden: "🏠 Sahibinden'de gör", enquire: "💬 Bilgi alın", bookViewing: "📅 Görüntüleme ayarlayın",
    investorH2a: "İstanbul'da yabancı", investorH2em: "yatırımcı olarak mı alıyorsunuz?",
    investorP: "Yabancı alıcılara Türkiye'deki mülk edinme sürecinin her adımında rehberlik ediyoruz — durum tespitinden tapu devrine, yatırım yoluyla Türk vatandaşlığı başvurularına ve finansman seçeneklerine kadar.",
    investorBtn1: "💬 Bizimle konuşun", investorBtn2: "📞 Bizi arayın",
    investorFeats: [
      { icon:"🏛️", title:"Mülk edinme danışmanlığı", desc:"Tam satın alma sürecinde rehberlik ediyoruz — hukuki kontroller, noter, tapu devri ve tüm Türk bürokratik gereklilikleri." },
      { icon:"🇹🇷", title:"Yatırım yoluyla Türk vatandaşlığı", desc:"Uygun mülkler Türk vatandaşlığına hak kazandırabilir. Gereklilikler, süreç ve başvuru hakkında danışmanlık veririz." },
      { icon:"🏦", title:"Finansman & piyasa bilgisi", desc:"İstanbul gayrimenkul piyasasını ve bankacılık sektörünü yakından takip ediyoruz — sizin durumunuza en uygun finansman seçeneklerini paylaşıyoruz." },
      { icon:"🌐", title:"İngilizce & çok dilli destek", desc:"Ekibimiz tüm süreç boyunca İngilizce, Türkçe ve Rusça iletişim kurar — dil engeli yok." }
    ],
    processEyebrow: "Nasıl çalışırız", processH2a: "İdeal", processH2em: "mülkünüzü buluyoruz",
    steps: [
      { title:"İlk görüşme", desc:"Hedeflerinizi anlıyoruz — bütçe, tercih edilen konum, kullanım amacı ve yatırım ufku." },
      { title:"Arama & ön liste", desc:"İstanbul genelinde uygun mülkleri belirleyip kriterlerinize göre hazırlanmış ön liste sunuyoruz." },
      { title:"Görüşmeler & müzakere", desc:"Görüşmelere eşlik eder, her mülkü dürüstçe değerlendirir ve sizin adınıza en iyi fiyat için müzakere ederiz." },
      { title:"Sözleşme & teslim", desc:"Hukuki süreçte rehberlik eder, tapu elinize geçene kadar yanınızda oluruz." }
    ],
    featuresEyebrow: "Neden Hancı Property?", featuresH2a: "Bizi", featuresH2em: "farklı kılan nedir",
    features: [
      { title:"Beyoğlu uzmanları", desc:"Beyoğlu, Taksim, Galata ve çevre semtlerin derin yerel bilgisi — en iyi bildiğimiz ve her gün faaliyet gösterdiğimiz bölgeler." },
      { title:"Uluslararası alıcılar", desc:"Yabancı alıcılarla çalışma konusunda deneyimliyiz — mülk aramadan Türk vatandaşlığı başvurularına kadar her adımda rehberlik ediyoruz." },
      { title:"Yatırım danışmanlığı", desc:"Kira getirisi mi yoksa değer artışı mı arıyorsunuz? Mevcut piyasa koşullarına göre en iyi fırsatlar hakkında danışmanlık veriyoruz." },
      { title:"Dürüst tavsiye", desc:"Her mülkü dürüstçe değerlendiriyor ve gerçekten ne düşündüğümüzü söylüyoruz — satıcı için değil, sizin için çalışıyoruz." },
      { title:"Uçtan uca destek", desc:"İlk görüşmeden tapu teslimine kadar — her adımı yönetir ve sizi sürekli bilgilendiririz." },
      { title:"Hızlı WhatsApp yanıtı", desc:"Sorular hızla yanıtlanır. Süreç boyunca WhatsApp'ta İngilizce, Türkçe ve Rusça olarak hizmet veriyoruz." }
    ],
    ctaH2: "İstanbul'a yatırım yapmaya hazır mısınız?", ctaP: "Gayrimenkul hedeflerinizi görüşmek için bize ulaşın. Tüm İstanbul semtlerinde çalışıyor ve uluslararası alıcılara açığız.",
    ctaBtn1: "💬 WhatsApp'tan yazın", ctaBtn2: "📞 Bizi arayın",
    footerServices: "Hizmetler", footerContact: "İletişim", footerCompany: "Şirket"
  },
  ru: {
    backHome: "← Вернуться на Hancı Global",
    heroEyebrow: "Hancı Property · Стамбул",
    heroH1a: "Инвестируйте", heroH1em: "в Стамбул",
    heroP: "Отборные объявления о недвижимости и экспертный консалтинг по всему Стамбулу. Сопровождаем международных и местных покупателей от первого запроса до подписания документов.",
    heroBtn1: "Смотреть объявления", heroBtn2: "💬 Поговорить с нами",
    trustBadges: ["✓ Специалисты по Бейоглу", "✓ Иностранные покупатели приветствуются", "✓ Консультации по гражданству Турции"],
    listingsEyebrow: "Актуальные объявления", listingsH2a: "Недвижимость на", listingsH2em: "продажу",
    viewSahibinden: "🏠 Смотреть на Sahibinden", enquire: "💬 Узнать подробнее", bookViewing: "📅 Записаться на просмотр",
    investorH2a: "Покупаете в Стамбуле", investorH2em: "как иностранный инвестор?",
    investorP: "Сопровождаем иностранных покупателей на каждом этапе приобретения недвижимости в Турции — от проверки до передачи права собственности и получения гражданства через инвестиции.",
    investorBtn1: "💬 Поговорить с нами", investorBtn2: "📞 Позвонить",
    investorFeats: [
      { icon:"🏛️", title:"Консультации по приобретению недвижимости", desc:"Сопровождаем весь процесс покупки — юридические проверки, нотариус, переоформление права собственности и все бюрократические требования Турции." },
      { icon:"🇹🇷", title:"Гражданство Турции через инвестиции", desc:"Подходящая недвижимость может дать право на гражданство. Консультируем по требованиям, срокам и процессу подачи." },
      { icon:"🏦", title:"Финансирование и аналитика рынка", desc:"Пристально следим за рынком недвижимости и банковским сектором Стамбула — делимся наиболее подходящими вариантами финансирования." },
      { icon:"🌐", title:"Поддержка на русском и других языках", desc:"Наша команда общается на английском, турецком и русском на протяжении всего процесса — никаких языковых барьеров." }
    ],
    processEyebrow: "Как мы работаем", processH2a: "Находим вашу", processH2em: "идеальную недвижимость",
    steps: [
      { title:"Первичная консультация", desc:"Понимаем ваши цели — бюджет, предпочтительное расположение, назначение и инвестиционный горизонт." },
      { title:"Поиск и отбор", desc:"Находим подходящие объекты по всему Стамбулу и представляем тщательно отобранный список по вашим критериям." },
      { title:"Просмотры и переговоры", desc:"Сопровождаем на просмотрах, честно оцениваем каждый объект и ведём переговоры о лучшей цене от вашего имени." },
      { title:"Договор и передача", desc:"Сопровождаем через юридический процесс и остаёмся рядом до получения правоустанавливающего документа." }
    ],
    featuresEyebrow: "Почему Hancı Property", featuresH2a: "Что делает нас", featuresH2em: "особенными",
    features: [
      { title:"Специалисты по Бейоглу", desc:"Глубокое знание Бейоглу, Таксима, Галаты и прилегающих районов — территорий, которые мы знаем лучше всего." },
      { title:"Иностранные покупатели", desc:"Опыт работы с иностранными покупателями — от поиска недвижимости до оформления гражданства Турции." },
      { title:"Инвестиционный консалтинг", desc:"Ищете доход от аренды или прирост капитала? Консультируем по лучшим возможностям на основе текущих рыночных условий." },
      { title:"Честные рекомендации", desc:"Честно оцениваем каждый объект и говорим, что думаем на самом деле — работаем для вас, а не для продавца." },
      { title:"Полное сопровождение", desc:"От первого просмотра до передачи документов — управляем каждым этапом и держим вас в курсе." },
      { title:"Быстрый ответ в WhatsApp", desc:"Быстрые ответы на вопросы. WhatsApp на английском, турецком и русском на протяжении всего процесса." }
    ],
    ctaH2: "Готовы инвестировать в Стамбул?", ctaP: "Свяжитесь с нами для обсуждения ваших целей. Работаем по всему Стамбулу, рады иностранным покупателям.",
    ctaBtn1: "💬 Написать в WhatsApp", ctaBtn2: "📞 Позвонить",
    footerServices: "Услуги", footerContact: "Контакты", footerCompany: "Компания"
  }
};
function getPropertyPage(lang) { return PROPERTY_PAGE[lang] || PROPERTY_PAGE.en; }
