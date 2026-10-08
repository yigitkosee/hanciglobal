/* ==========================================================================
   PROPERTY DATA — single source of truth for property.html
   --------------------------------------------------------------------------
   To add a new listing for sale: copy one block inside PROPERTY_LISTINGS and
   change the id/images/specs/translations. property.html will render it
   automatically — no HTML editing needed.
   ========================================================================== */

const PROPERTY_LISTINGS = [
  // dealType: "sale" (varsayılan) veya "rent". Kiralıkta rozet "Kiralık" olur; specs içine mortgage yerine deposit yazılır.
  // specs içindeki alanlar sırayla kutu olarak basılır (etiketler PROPERTY_SPEC_LABELS'ta).
  {
    id: "galata-2-5plus1-sale",
    dealType: "sale",
    sahibindenUrl: "https://www.sahibinden.com/ilan/emlak-konut-satilik-galata-kulesi-ve-deniz-manzarali-firsat-2,5-plus1-daire-1335652119/detay/",
    waNumber: "905063335154",
    images: ["stay2-1.webp","stay2-2.webp","stay2-3.webp","stay2-4.webp","stay2-8.webp","stay2-7.webp","stay2-5.webp","stay2-6.webp"],
    priceTRY: "23.000.000",
    specs: { grossM2: "110 m²", netM2: "100 m²", layout: "2.5+1", floor: "5 / 6", heating: "Gas combi", mortgage: "Eligible" },
    translations: {
      en: {
        location: "Bereketzade Mah. · Galata",
        name: "2.5+1 Apartment with Galata Tower & Sea Views",
        desc: "A spacious 2.5+1 apartment on the 5th floor of the 120-year-old Glorya Apartment in historic Bereketzade, right next to Galata Tower. Only two flats share the floor. The living room and its balcony face the sea, the generous bedrooms look straight out at Galata Tower, and the high ceilings make every room feel open and bright.",
        priceLabel: "asking price",
        features: [
          "Sea view from the living room and balcony",
          "Bedrooms facing Galata Tower",
          "One bathroom and two toilets, air conditioning in every room",
          "Gas combi-boiler heating, high ceilings",
          "Low service charge: ₺500 per month",
          "Kat mülkiyeti title deed, eligible for a mortgage",
          "Sold furnished, or unfurnished on request"
        ]
      },
      tr: {
        location: "Bereketzade Mah. · Galata",
        name: "Galata Kulesi ve Deniz Manzaralı 2,5+1 Daire",
        desc: "Tarihi Bereketzade Mahallesi'nde, Galata Kulesi'nin hemen yanında, 120 yıllık Glorya Apartmanı'nın 5. katında geniş bir 2,5+1 daire. Katta yalnızca iki daire var. Salon ve balkon denize, geniş yatak odaları doğrudan Galata Kulesi'ne bakıyor; yüksek tavanlar her odaya ferahlık katıyor.",
        priceLabel: "talep fiyatı",
        features: [
          "Salon ve balkondan deniz manzarası",
          "Galata Kulesi'ne bakan yatak odaları",
          "Bir banyo ve iki tuvalet, her odada klima",
          "Kombi (doğalgaz) ısıtma, yüksek tavanlar",
          "Düşük aidat: aylık 500 TL",
          "Kat mülkiyeti tapusu, krediye uygun",
          "Eşyalı satılık; istenirse eşyasız teslim"
        ]
      },
      ru: {
        location: "Bereketzade Mah. · Галата",
        name: "Квартира 2.5+1 с видом на Галатскую башню и море",
        desc: "Просторная квартира 2.5+1 на 5-м этаже 120-летнего дома Glorya в историческом квартале Берекетзаде, рядом с Галатской башней. На этаже всего две квартиры. Гостиная и балкон выходят на море, большие спальни смотрят прямо на Галатскую башню, а высокие потолки наполняют комнаты простором и светом.",
        priceLabel: "запрашиваемая цена",
        features: [
          "Вид на море из гостиной и с балкона",
          "Спальни с видом на Галатскую башню",
          "Одна ванная и два туалета, кондиционер в каждой комнате",
          "Газовое отопление (комби), высокие потолки",
          "Низкая плата за обслуживание: 500 TL в месяц",
          "Правоустанавливающий документ Kat mülkiyeti, подходит для ипотеки",
          "Продаётся с мебелью, по запросу — без мебели"
        ]
      },
      ar: {
        location: "حي بركت زاده · غلطة",
        name: "شقة ⁦2.5+1⁩ بإطلالة على برج غلطة والبحر",
        desc: "شقة واسعة ⁦2.5+1⁩ في الطابق الخامس من مبنى Glorya الذي يبلغ عمره 120 عاماً، في حي بركت زاده التاريخي بجوار برج غلطة مباشرة. لا يوجد في الطابق سوى شقتين. تطل غرفة المعيشة وشرفتها على البحر، وتطل غرف النوم الواسعة مباشرة على برج غلطة، فيما تمنح الأسقف العالية كل غرفة شعوراً بالرحابة والضوء.",
        priceLabel: "السعر المطلوب",
        features: [
          "إطلالة على البحر من غرفة المعيشة والشرفة",
          "غرف نوم تطل على برج غلطة",
          "حمّام واحد ودورتا مياه، ومكيّف في كل غرفة",
          "تدفئة مستقلة بالغاز (كومبي)، وأسقف عالية",
          "رسوم خدمات منخفضة: 500 ليرة شهرياً",
          "سند ملكية طابقية (Kat mülkiyeti)، ومؤهَّلة للتمويل العقاري",
          "تُباع مفروشة، أو غير مفروشة عند الطلب"
        ]
      }
    }
  },
  {
    id: "galata-2-5plus1-rent",
    dealType: "rent",
    sahibindenUrl: "https://www.sahibinden.com/ilan/emlak-konut-kiralik-galata-kulesine-bitisik-deniz-manzarali-2,5-plus1-daire-1335464483/detay/",
    waNumber: "905063335154",
    images: ["stay2-2.webp","stay2-8.webp","stay2-3.webp","stay2-4.webp","stay2-7.webp","stay2-5.webp","stay2-6.webp","stay2-1.webp"],
    priceTRY: "90.000",
    specs: { grossM2: "110 m²", netM2: "100 m²", layout: "2.5+1", floor: "5 / 6", heating: "Gas combi", deposit: "₺190.000" },
    translations: {
      en: {
        location: "Bereketzade Mah. · Galata",
        name: "Furnished 2.5+1 Next to Galata Tower — Sea Views",
        desc: "The same Glorya Apartment flat is also available for long-term rent. A furnished 2.5+1 on the 5th floor right beside Galata Tower, with a sea-view living room and balcony, bedrooms facing the tower and high ceilings throughout.",
        priceLabel: "per month",
        features: [
          "Furnished and ready to move in",
          "Sea view from the living room and balcony",
          "Bedrooms facing Galata Tower",
          "One bathroom and two toilets, air conditioning in every room",
          "Gas combi-boiler heating",
          "Service charge: ₺500 per month"
        ]
      },
      tr: {
        location: "Bereketzade Mah. · Galata",
        name: "Galata Kulesi'ne Bitişik Deniz Manzaralı Eşyalı 2,5+1",
        desc: "Glorya Apartmanı'ndaki aynı daire uzun dönem kiralık olarak da sunuluyor. Galata Kulesi'nin hemen yanında, 5. katta eşyalı bir 2,5+1: deniz manzaralı salon ve balkon, kuleye bakan yatak odaları ve yüksek tavanlar.",
        priceLabel: "aylık",
        features: [
          "Eşyalı, hemen taşınmaya hazır",
          "Salon ve balkondan deniz manzarası",
          "Galata Kulesi'ne bakan yatak odaları",
          "Bir banyo ve iki tuvalet, her odada klima",
          "Kombi (doğalgaz) ısıtma",
          "Aidat: aylık 500 TL"
        ]
      },
      ru: {
        location: "Bereketzade Mah. · Галата",
        name: "Меблированная 2.5+1 рядом с Галатской башней — вид на море",
        desc: "Эта же квартира в доме Glorya сдаётся и в долгосрочную аренду. Меблированная 2.5+1 на 5-м этаже рядом с Галатской башней: гостиная и балкон с видом на море, спальни с видом на башню и высокие потолки.",
        priceLabel: "в месяц",
        features: [
          "С мебелью, можно сразу заезжать",
          "Вид на море из гостиной и с балкона",
          "Спальни с видом на Галатскую башню",
          "Одна ванная и два туалета, кондиционер в каждой комнате",
          "Газовое отопление (комби)",
          "Плата за обслуживание: 500 TL в месяц"
        ]
      },
      ar: {
        location: "حي بركت زاده · غلطة",
        name: "شقة ⁦2.5+1⁩ مفروشة بجوار برج غلطة بإطلالة بحرية",
        desc: "الشقة نفسها في مبنى Glorya متاحة أيضاً للإيجار طويل الأمد. شقة ⁦2.5+1⁩ مفروشة في الطابق الخامس بجوار برج غلطة مباشرة، مع غرفة معيشة وشرفة تطلّان على البحر، وغرف نوم تطل على البرج، وأسقف عالية في كل أرجائها.",
        priceLabel: "شهرياً",
        features: [
          "مفروشة وجاهزة للسكن فوراً",
          "إطلالة على البحر من غرفة المعيشة والشرفة",
          "غرف نوم تطل على برج غلطة",
          "حمّام واحد ودورتا مياه، ومكيّف في كل غرفة",
          "تدفئة مستقلة بالغاز (كومبي)",
          "رسوم الخدمات: 500 ليرة شهرياً"
        ]
      }
    }
  },
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
      },
      ar: {
        location: "حي حسين آغا · بيوغلو",
        name: "شقة ⁦1+1⁩ في مبنى بمصعد، على بُعد دقيقتين من شارع الاستقلال",
        desc: "شقة جذابة في الطابق الرابع من مبنى تاريخي مزوّد بمصعد في قلب بيوغلو. على بُعد دقائق من شارع الاستقلال وميدان تقسيم، وهي فرصة مميزة للسكن والاستثمار معاً.",
        priceLabel: "السعر المطلوب",
        features: [
          "مبنى بمصعد، وهو أمر نادر في هذا الموقع المركزي",
          "على مسافة مشي من شارع الاستقلال وميدان تقسيم",
          "سطح مشترك واسع",
          "تدفئة مستقلة بالغاز (كومبي)",
          "مؤجَّرة حالياً، ويمكن تسليمها فارغة أو الإبقاء عليها كدخل إيجاري",
          "سند ملكية طابقية (Kat mülkiyeti)"
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
  en: { grossM2:"Size", netM2:"Net", layout:"Layout", floor:"Floor", heating:"Heating", mortgage:"Mortgage", deposit:"Deposit", forSale:"For Sale", forRent:"For Rent", grossSfx:" gross", netSfx:" net" },
  tr: { grossM2:"Alan", netM2:"Net", layout:"Oda Sayısı", floor:"Kat", heating:"Isıtma", mortgage:"Kredi", deposit:"Depozito", forSale:"Satılık", forRent:"Kiralık", grossSfx:" brüt", netSfx:" net" },
  ru: { grossM2:"Площадь", netM2:"Чистая", layout:"Планировка", floor:"Этаж", heating:"Отопление", mortgage:"Ипотека", deposit:"Депозит", forSale:"Продаётся", forRent:"Аренда", grossSfx:" общая", netSfx:" полезная" },
  ar: { grossM2:"المساحة", netM2:"الصافية", layout:"عدد الغرف", floor:"الطابق", heating:"التدفئة", mortgage:"التمويل العقاري", deposit:"التأمين", forSale:"للبيع", forRent:"للإيجار", grossSfx:" إجمالية", netSfx:" صافية" }
};
/* specs içindeki kelime değerlerinin çevirisi (sayılar ve ₺ tutarlar olduğu gibi kalır) */
const PROPERTY_SPEC_VALUES = {
  "Gas combi": { tr:"Kombi (doğalgaz)", ru:"Газовый котёл", ar:"غاز (كومبي)" },
  "Eligible":  { tr:"Uygun",            ru:"Доступна",      ar:"متاح" }
};
function getSpecValue(value, lang) { const v = PROPERTY_SPEC_VALUES[value]; return (v && v[lang]) || value; }
function getSpecLabels(lang) { return PROPERTY_SPEC_LABELS[lang] || PROPERTY_SPEC_LABELS.en; }

/* ==========================================================================
   PROPERTY_PAGE — all static page text (hero, investor block, process,
   features, CTA, footer). Fill "tr"/"ru"; falls back to "en" if missing.
   ========================================================================== */
const PROPERTY_PAGE = {
  en: {
    backHome: "← Back to Hancı Global",
    waGeneral: "Hi, I'm interested in Hancı Property.", waBuy: "Hi, I'm interested in buying property in Istanbul.", waInvestor: "Hi, I'm an international buyer interested in Istanbul property.",
    waEnquire: "Hi, I'm interested in the {name} listing. Please share more details.", waViewing: "Hi, I'd like to arrange a viewing for the {name}.",
    heroEyebrow: "Hancı Property · Istanbul",
    heroH1a: "Invest in", heroH1em: "Istanbul",
    heroP: "Curated property listings and expert real estate consultancy across Istanbul. We guide international and local buyers from first inquiry to signed title deed.",
    heroBtn1: "View listings", heroBtn2: "💬 Talk to us",
    trustBadges: ["✓ Beyoğlu specialists", "✓ International buyers welcome", "✓ Turkish citizenship advisory"],
    listingsEyebrow: "Active listings", listingsH2a: "Properties for", listingsH2em: "sale & rent",
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
    waGeneral: "Merhaba, Hancı Property ile ilgileniyorum.", waBuy: "Merhaba, İstanbul'da mülk satın almakla ilgileniyorum.", waInvestor: "Merhaba, İstanbul'da mülk almak isteyen yabancı bir alıcıyım.",
    waEnquire: "Merhaba, \"{name}\" ilanıyla ilgileniyorum. Daha fazla bilgi paylaşabilir misiniz?", waViewing: "Merhaba, \"{name}\" için görüntüleme ayarlamak istiyorum.",
    heroEyebrow: "Hancı Property · İstanbul",
    heroH1a: "", heroH1em: "İstanbul'a yatırım yapın",
    heroP: "İstanbul genelinde özenle seçilmiş mülk ilanları ve uzman gayrimenkul danışmanlığı. Uluslararası ve yerel alıcıları ilk sorudan tapu teslimine kadar rehberlik ediyoruz.",
    heroBtn1: "İlanları görün", heroBtn2: "💬 Bizimle konuşun",
    trustBadges: ["✓ Beyoğlu uzmanları", "✓ Uluslararası alıcılara açık", "✓ Türk vatandaşlığı danışmanlığı"],
    listingsEyebrow: "Aktif ilanlar", listingsH2a: "Satılık & kiralık", listingsH2em: "mülkler",
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
    waGeneral: "Здравствуйте, меня интересует Hancı Property.", waBuy: "Здравствуйте, я хочу купить недвижимость в Стамбуле.", waInvestor: "Здравствуйте, я иностранный покупатель, меня интересует недвижимость в Стамбуле.",
    waEnquire: "Здравствуйте, меня интересует объявление «{name}». Расскажите, пожалуйста, подробнее.", waViewing: "Здравствуйте, я хочу записаться на просмотр: «{name}».",
    heroEyebrow: "Hancı Property · Стамбул",
    heroH1a: "Инвестируйте", heroH1em: "в Стамбул",
    heroP: "Отборные объявления о недвижимости и экспертный консалтинг по всему Стамбулу. Сопровождаем международных и местных покупателей от первого запроса до подписания документов.",
    heroBtn1: "Смотреть объявления", heroBtn2: "💬 Поговорить с нами",
    trustBadges: ["✓ Специалисты по Бейоглу", "✓ Иностранные покупатели приветствуются", "✓ Консультации по гражданству Турции"],
    listingsEyebrow: "Актуальные объявления", listingsH2a: "Недвижимость:", listingsH2em: "продажа и аренда",
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
  },
  ar: {
    backHome: "→ العودة إلى Hancı Global",
    waGeneral: "مرحباً، أنا مهتم بخدمات Hancı Property.", waBuy: "مرحباً، أنا مهتم بشراء عقار في إسطنبول.", waInvestor: "مرحباً، أنا مشترٍ أجنبي مهتم بالعقارات في إسطنبول.",
    waEnquire: "مرحباً، أنا مهتم بالعقار «{name}». أرجو تزويدي بمزيد من التفاصيل.", waViewing: "مرحباً، أودّ حجز معاينة للعقار «{name}».",
    heroEyebrow: "Hancı Property · إسطنبول",
    heroH1a: "استثمر في", heroH1em: "إسطنبول",
    heroP: "عقارات مختارة بعناية واستشارات عقارية متخصصة في جميع أنحاء إسطنبول. نرافق المشترين الدوليين والمحليين من أول استفسار حتى استلام سند الملكية.",
    heroBtn1: "تصفّح العقارات", heroBtn2: "💬 تحدّث معنا",
    trustBadges: ["✓ متخصصون في بيوغلو", "✓ نرحّب بالمشترين الدوليين", "✓ استشارات الجنسية التركية"],
    listingsEyebrow: "العقارات المتاحة", listingsH2a: "عقارات", listingsH2em: "للبيع والإيجار",
    viewSahibinden: "🏠 عرض على Sahibinden", enquire: "💬 استفسر", bookViewing: "📅 احجز معاينة",
    investorH2a: "هل تشتري في إسطنبول", investorH2em: "كمستثمر دولي؟",
    investorP: "نرافق المشترين الأجانب في كل خطوة من خطوات تملّك العقار في تركيا، من التحقق القانوني ونقل سند الملكية إلى طلبات الجنسية التركية عن طريق الاستثمار وخيارات التمويل.",
    investorBtn1: "💬 تحدّث معنا", investorBtn2: "📞 اتصل بنا",
    investorFeats: [
      { icon:"🏛️", title:"استشارات تملّك العقار", desc:"نرافقك في عملية الشراء كاملة: الفحص القانوني، والكاتب العدل، ونقل سند الملكية، وجميع المتطلبات الرسمية في تركيا." },
      { icon:"🇹🇷", title:"الجنسية التركية عن طريق الاستثمار", desc:"قد يؤهّلك العقار المناسب للحصول على الجنسية التركية. نقدّم لك المشورة حول الشروط والمدة وخطوات التقديم." },
      { icon:"🏦", title:"التمويل ورؤى السوق", desc:"نتابع سوق العقارات والقطاع المصرفي في إسطنبول عن كثب، ونشاركك أنسب خيارات التمويل لوضعك." },
      { icon:"🌐", title:"دعم بعدة لغات", desc:"يتواصل فريقنا بالإنجليزية والتركية والروسية طوال العملية." }
    ],
    processEyebrow: "كيف نعمل", processH2a: "نجد لك", processH2em: "العقار المثالي",
    steps: [
      { title:"الاستشارة الأولى", desc:"نتعرّف على أهدافك: الميزانية، والموقع المفضّل، والغرض من الشراء، والمدى الزمني للاستثمار." },
      { title:"البحث والقائمة المختصرة", desc:"نحدّد العقارات المناسبة في إسطنبول ونقدّم لك قائمة مختارة تطابق معاييرك." },
      { title:"المعاينة والتفاوض", desc:"نرافقك في المعاينات، ونقيّم كل عقار بصدق، ونتفاوض نيابةً عنك على أفضل سعر." },
      { title:"العقد والتسليم", desc:"نرشدك خلال الإجراءات القانونية ونبقى معك حتى يصبح سند الملكية في يدك." }
    ],
    featuresEyebrow: "لماذا Hancı Property", featuresH2a: "ما الذي", featuresH2em: "يميّزنا",
    features: [
      { title:"متخصصون في بيوغلو", desc:"معرفة محلية عميقة ببيوغلو وتقسيم وغلطة والأحياء المحيطة، وهي المناطق التي نعرفها جيداً ونعمل فيها يومياً." },
      { title:"المشترون الدوليون", desc:"لدينا خبرة في العمل مع المشترين الأجانب، ونرافقهم في كل خطوة من البحث عن العقار حتى طلب الجنسية التركية." },
      { title:"استشارات الاستثمار", desc:"تبحث عن عائد إيجاري أم عن ارتفاع في قيمة العقار؟ نقدّم لك المشورة حول أفضل الفرص وفق ظروف السوق الحالية." },
      { title:"مشورة صادقة", desc:"نقيّم كل عقار بصدق ونقول لك رأينا الحقيقي، فنحن نعمل لصالحك لا لصالح البائع." },
      { title:"دعم متكامل", desc:"من أول معاينة حتى تسليم سند الملكية، ندير كل خطوة ونطلعك على كل جديد." },
      { title:"ردّ سريع عبر واتساب", desc:"نجيب عن أسئلتك بسرعة عبر واتساب بالإنجليزية والتركية والروسية طوال العملية." }
    ],
    ctaH2: "هل أنت مستعد للاستثمار في إسطنبول؟", ctaP: "تواصل معنا لمناقشة أهدافك العقارية. نعمل في جميع أحياء إسطنبول ونرحّب بالمشترين الدوليين.",
    ctaBtn1: "💬 راسلنا على واتساب", ctaBtn2: "📞 اتصل بنا",
    footerServices: "الخدمات", footerContact: "التواصل", footerCompany: "الشركة"
  }
};
function getPropertyPage(lang) { return PROPERTY_PAGE[lang] || PROPERTY_PAGE.en; }
