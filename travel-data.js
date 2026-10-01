/* ==========================================================================
   TRAVEL DATA — single source of truth for travel.html
   ========================================================================== */

const VEHICLES = [
  { key:"vito", img:"vito.jpg", name:"Mercedes-Benz Vito" },
  { key:"sprinter", img:"sprinter.jpg", name:"Mercedes-Benz Sprinter" }
];

const BOAT_TOURS = [
  { key:"sunset", img:"sunset2.jpg", waMsg:"Hi, I'd like to arrange a Sunset cruise tour on the Bosphorus.", showAirbnb:true },
  { key:"private", img:"travel-1.jpg", waMsg:"Hi, I'd like to arrange a private yacht charter on the Bosphorus.", showAirbnb:false },
  { key:"swim", img:"travel-2.jpg", waMsg:"Hi, I'd like to know more about the Bosphorus swimming tour.", showAirbnb:false }
];

const TRAVEL_PAGE = {
  en: {
    backHome:"← Back to Hancı Global", heroEyebrow:"Hancı Travel · Istanbul",
    heroH1a:"Istanbul, your way —", heroH1em:"in comfort",
    heroP:"VIP airport transfers, Bosphorus boat tours and chauffeured vehicle hire. Fixed prices, no surprises.",
    heroBtn1:"Airport transfer", heroBtn2:"🛥 Boat tours",
    trustBadges:["✓ Fixed price — no meter","✓ 24/7 available"],
    tabs:["✈️ Airport Transfer","🚗 Hourly / Daily Hire","🛥 Boat Tours","📋 How it works"],

    transferBadge:"Airport Transfer", transferEyebrow:"IST · SAW · Door to door",
    transferH2a:"Stress-free arrivals", transferH2b:"&", transferH2em:"departures",
    transferP:"We track your flight in real time and meet you at arrivals with a name sign. Available 24/7 for both Istanbul airports — Istanbul Airport (IST) and Sabiha Gökçen (SAW). Fixed price agreed before the ride. No meter, no surprises.",
    transferBadges:["✓ 60 min free waiting","✓ Flight tracking included"],
    transferBtn1:"💬 Book a transfer", transferBtn2:"📞 Call us",

    vehiclesEyebrow:"Your vehicle",
    vehicles:{
      vito:{ cap:"Up to 7 passengers · Premium VIP", desc:"Our standard transfer vehicle. Spacious, air conditioned and fully equipped for a comfortable journey — whether from the airport or across the city." },
      sprinter:{ cap:"8+ passengers · Group transfers", desc:"For larger groups we arrange a Mercedes Sprinter. Same fixed price policy, same professional service — no matter the group size." }
    },

    includesTitle:"Every ride includes",
    includes:[
      { title:"Flight tracking", sub:"Real-time monitoring", desc:"We monitor your flight live. Your driver waits even if you are delayed — at no extra charge." },
      { title:"Free waiting — 60 min", sub:"60 min free", desc:"Up to 60 minutes of free waiting at the airport after your landing. No rush, no extra cost." },
      { title:"Fixed price", sub:"Transparent pricing", desc:"Price is agreed before the ride. No meter, no hidden fees, no surprises at the end of the journey." },
      { title:"24/7 service", sub:"Always available", desc:"Available any hour, any day. Early morning or late night — we are always there when you need us." }
    ],

    routesEyebrow:"Popular routes",
    routes:[
      { from:"IST", arrow:"Istanbul Airport →", to:"Taksim / Beyoğlu", desc:"Arrivals & Departures · Terminal pickup" },
      { from:"SAW", arrow:"Sabiha Gökçen →", to:"Any district", desc:"Arrivals & Departures · Terminal pickup" },
      { from:"Hotel", arrow:"Drop-off →", to:"Any location", desc:"Door-to-door service · Any Istanbul address" }
    ],

    hourlyH2a:"Chauffeured vehicle", hourlyH2b:"hire —", hourlyH2em:"by the hour or full day",
    hourlyP:"Need a driver for a shopping trip, business meetings, sightseeing or a full day around Istanbul? We arrange a chauffeured Mercedes Vito or Sprinter for as many hours as you need.",
    hourlyBtn1:"💬 Get a quote", hourlyBtn2:"📞 Call us",
    hourlyFeats:[
      { title:"Hourly hire", desc:"From 2 hours — perfect for shopping, meetings or a half-day city tour." },
      { title:"Full day hire", desc:"A dedicated chauffeured vehicle for the whole day. Go anywhere, anytime." },
      { title:"Up to 7+ passengers", desc:"Vito for up to 7 — Sprinter for larger groups. We scale to your needs." },
      { title:"Fixed price agreed upfront", desc:"We agree the rate before we start. No surprises, no meter running." }
    ],

    boatBadge:"Bosphorus Boat Tours", boatEyebrow:"Istanbul from the water",
    boatH2a:"The Bosphorus,", boatH2em:"your way",
    boatP:"There is no better way to see Istanbul than from the water. We partner with Bosphorus Yachts — one of Istanbul's most trusted tour operators — to offer our guests exclusive access to Bosphorus experiences at a special discount.",
    boatBadges:["✓ Partner: Bosphorus Yachts","✓ Exclusive 5% discount","✓ Private & group options"],
    boatTours:{
      sunset:{ chip:"Most popular", title:"Sunset Cruise", desc:"The golden hour on the Bosphorus — the most memorable way to end a day in Istanbul. Watch the city light up as the sun sets over two continents. Drinks available on board.", meta:"⏱ ~2 hours &nbsp;·&nbsp; 👥 Group & private" },
      private:{ chip:"Premium", title:"Private Charter", desc:"Your own private yacht on the Bosphorus. Perfect for special occasions, family groups or corporate events. Fully customisable itinerary, duration and catering.", meta:"⏱ Flexible &nbsp;·&nbsp; 👥 Private only" },
      swim:{ chip:"Unique experience", title:"Swimming Tour", desc:"Swim between Europe and Asia in the Bosphorus Strait. A truly unique Istanbul experience — cruise the strait and dive in at selected swimming spots.", meta:"⏱ Full day &nbsp;·&nbsp; 👥 Group" }
    },
    airbnbReviewsBtn:"🏠 Airbnb reviews", bookBtn:"Book →", askUsBtn:"💬 Ask us",

    discountLabel:"Exclusive discount", discountTitle:"5% off all Bosphorus Yachts tours",
    discountP:"Book directly on Bosphorus Yachts and enter the code below at checkout to receive your exclusive Hancı Global discount.",
    discountHint:"Enter at checkout on bosphorusyachts.com",
    discountBtn1:"Book now →", discountBtn2:"💬 Ask us first",

    hamamTitle:"Hamam Experience — Coming Soon",
    hamamP:"An authentic Istanbul hammam experience is coming to Hancı Travel. Stay tuned — or contact us to be the first to know.",
    hamamBtn:"💬 Notify me",

    howEyebrow:"Simple process", howH2a:"How it", howH2em:"works",
    steps:[
      { title:"Contact us", desc:"WhatsApp or call us with your dates, group size, pickup location and what you need." },
      { title:"We confirm & quote", desc:"We send you a fixed price quote and confirm availability within the hour." },
      { title:"Easy payment", desc:"Pay securely before your service. Simple, transparent, no hidden costs." },
      { title:"Enjoy Istanbul", desc:"Your driver or guide meets you on time, with a name sign. Sit back and enjoy the city." }
    ],

    ctaH2:"Ready to explore Istanbul?", ctaP:"Contact us on WhatsApp for availability and pricing. Fast response — in English or Türkçe.",
    ctaBtn1:"💬 WhatsApp us now", ctaBtn2:"📞 Call us",
    footerServices:"Services", footerContact:"Contact", footerCompany:"Company",

    popup:{ title:"Don't forget your discount!", desc:"Copy your exclusive code before booking. Enter it at checkout on Bosphorus Yachts for <strong style='color:#111C26'>5% off</strong>.", copy:"Copy", copied:"Copied! ✓", go:"Continue to Bosphorus Yachts →", back:"← Go back" }
  },
  tr: {
    backHome:"← Hancı Global'e dön", heroEyebrow:"Hancı Travel · İstanbul",
    heroH1a:"İstanbul, sizin yolunuzla —", heroH1em:"konforla",
    heroP:"VIP havalimanı transferleri, Boğaz tekne turları ve şoförlü araç kiralama. Sabit fiyatlar, sürpriz yok.",
    heroBtn1:"Havalimanı transferi", heroBtn2:"🛥 Tekne turları",
    trustBadges:["✓ Sabit fiyat — sayaç yok","✓ 7/24 hizmet"],
    tabs:["✈️ Havalimanı Transferi","🚗 Saatlik / Günlük Kiralama","🛥 Tekne Turları","📋 Nasıl çalışır"],

    transferBadge:"Havalimanı Transferi", transferEyebrow:"IST · SAW · Kapıdan kapıya",
    transferH2a:"Stressiz varış", transferH2b:"&", transferH2em:"kalkışlar",
    transferP:"Uçuşunuzu gerçek zamanlı takip eder, varış salonunda isim tabelasıyla karşılarız. Her iki İstanbul havalimanı için 7/24 hizmet — İstanbul Havalimanı (IST) ve Sabiha Gökçen (SAW). Yolculuk öncesi sabit fiyat, sürpriz yok.",
    transferBadges:["✓ 60 dk ücretsiz bekleme","✓ Uçuş takibi dahil"],
    transferBtn1:"💬 Transfer rezervasyonu", transferBtn2:"📞 Bizi arayın",

    vehiclesEyebrow:"Araçlarımız",
    vehicles:{
      vito:{ cap:"7 kişiye kadar · Premium VIP", desc:"Standart transfer aracımız. Ferah, klimalı ve konforlu bir yolculuk için tam donanımlı — ister havalimanından ister şehir içinde." },
      sprinter:{ cap:"8+ yolcu · Grup transferleri", desc:"Büyük gruplar için Mercedes Sprinter ayarlıyoruz. Aynı sabit fiyat politikası, aynı profesyonel hizmet — grup büyüklüğünden bağımsız." }
    },

    includesTitle:"Her yolculukta dahil",
    includes:[
      { title:"Uçuş takibi", sub:"Gerçek zamanlı izleme", desc:"Uçuşunuzu canlı takip ediyoruz. Gecikmeniz olsa bile sürücünüz bekler — ek ücret yok." },
      { title:"Ücretsiz bekleme — 60 dk", sub:"60 dk ücretsiz", desc:"İnişinizden sonra havalimanında 60 dakikaya kadar ücretsiz bekleme. Acele yok, ek maliyet yok." },
      { title:"Sabit fiyat", sub:"Şeffaf fiyatlandırma", desc:"Fiyat yolculuk öncesinde belirlenir. Sayaç yok, gizli ücret yok, yolculuk sonunda sürpriz yok." },
      { title:"7/24 hizmet", sub:"Her zaman mevcut", desc:"Her saat, her gün hizmetteyiz. Sabahın erken saati ya da gece geç vakit — ihtiyacınız olduğunda hep buradayız." }
    ],

    routesEyebrow:"Popüler güzergahlar",
    routes:[
      { from:"IST", arrow:"İstanbul Havalimanı →", to:"Taksim / Beyoğlu", desc:"Varış & Kalkış · Terminal karşılama" },
      { from:"SAW", arrow:"Sabiha Gökçen →", to:"Herhangi bir semt", desc:"Varış & Kalkış · Terminal karşılama" },
      { from:"Otel", arrow:"Bırakış →", to:"Herhangi bir konum", desc:"Kapıdan kapıya hizmet · Her İstanbul adresi" }
    ],

    hourlyH2a:"Şoförlü araç", hourlyH2b:"kiralama —", hourlyH2em:"saatlik veya tam gün",
    hourlyP:"Alışveriş gezisi, iş toplantıları, gezi turu veya İstanbul'da tam günlük bir program için şoföre mi ihtiyacınız var? İhtiyacınız kadar saat için şoförlü Mercedes Vito veya Sprinter ayarlıyoruz.",
    hourlyBtn1:"💬 Fiyat alın", hourlyBtn2:"📞 Bizi arayın",
    hourlyFeats:[
      { title:"Saatlik kiralama", desc:"2 saatten itibaren — alışveriş, toplantı veya yarım günlük şehir turu için ideal." },
      { title:"Tam günlük kiralama", desc:"Tüm gün için özel şoförlü araç. İstediğiniz zaman, istediğiniz yere." },
      { title:"7+ yolcuya kadar", desc:"7 kişiye kadar Vito — daha büyük gruplar için Sprinter. İhtiyacınıza göre ölçekleniyoruz." },
      { title:"Baştan belirlenen sabit fiyat", desc:"Başlamadan önce ücreti belirliyoruz. Sürpriz yok, sayaç işlemiyor." }
    ],

    boatBadge:"Boğaz Tekne Turları", boatEyebrow:"İstanbul'u sudan görün",
    boatH2a:"Boğaz,", boatH2em:"sizin tarzınızda",
    boatP:"İstanbul'u görmenin sudan daha iyi bir yolu yok. İstanbul'un en güvenilir tur operatörlerinden Bosphorus Yachts ile ortaklık kurarak misafirlerimize özel indirimle Boğaz deneyimlerine ayrıcalıklı erişim sunuyoruz.",
    boatBadges:["✓ Ortak: Bosphorus Yachts","✓ Özel %5 indirim","✓ Özel & grup seçenekleri"],
    boatTours:{
      sunset:{ chip:"En popüler", title:"Gün Batımı Turu", desc:"Boğaz'da altın saat — İstanbul'da bir günü kapatmanın en unutulmaz yolu. Güneş iki kıta üzerinde batarken şehrin ışıklarını izleyin. Gemide içecek mevcut.", meta:"⏱ ~2 saat &nbsp;·&nbsp; 👥 Grup & özel" },
      private:{ chip:"Premium", title:"Özel Tekne", desc:"Boğaz'da kendi özel tekneniz. Özel günler, aile grupları veya kurumsal etkinlikler için ideal. Tamamen özelleştirilebilir güzergah, süre ve ikram.", meta:"⏱ Esnek &nbsp;·&nbsp; 👥 Sadece özel" },
      swim:{ chip:"Eşsiz deneyim", title:"Yüzme Turu", desc:"Boğaz'da Avrupa ile Asya arasında yüzün. Gerçek anlamda eşsiz bir İstanbul deneyimi — boğazda seyredin ve seçilmiş yüzme noktalarında suya girin.", meta:"⏱ Tam gün &nbsp;·&nbsp; 👥 Grup" }
    },
    airbnbReviewsBtn:"🏠 Airbnb yorumları", bookBtn:"Rezervasyon →", askUsBtn:"💬 Bize sorun",

    discountLabel:"Özel indirim", discountTitle:"Tüm Bosphorus Yachts turlarında %5 indirim",
    discountP:"Bosphorus Yachts üzerinden doğrudan rezervasyon yapın ve ödeme sırasında aşağıdaki kodu girerek özel Hancı Global indiriminizi kazanın.",
    discountHint:"bosphorusyachts.com'da ödeme sırasında girin",
    discountBtn1:"Hemen rezervasyon →", discountBtn2:"💬 Önce bize yazın",

    hamamTitle:"Hamam Deneyimi — Yakında",
    hamamP:"Otantik bir İstanbul hamam deneyimi yakında Hancı Travel'da. Takipte kalın — ya da ilk siz haberdar olmak için bize ulaşın.",
    hamamBtn:"💬 Beni bilgilendir",

    howEyebrow:"Basit süreç", howH2a:"Nasıl", howH2em:"çalışır",
    steps:[
      { title:"Bize ulaşın", desc:"Tarihlerinizi, grup büyüklüğünüzü, alınacak konumu ve ihtiyacınızı WhatsApp'tan veya telefonla bize iletin." },
      { title:"Onaylıyoruz & fiyat veriyoruz", desc:"Bir saat içinde size sabit fiyat teklifi gönderir ve müsaitliği onaylarız." },
      { title:"Kolay ödeme", desc:"Hizmetiniz öncesinde güvenle ödeme yapın. Basit, şeffaf, gizli ücret yok." },
      { title:"İstanbul'un tadını çıkarın", desc:"Şoförünüz veya rehberiniz isim tabelasıyla zamanında sizi karşılar. Arkanıza yaslanın ve şehrin tadını çıkarın." }
    ],

    ctaH2:"İstanbul'u keşfetmeye hazır mısınız?", ctaP:"Müsaitlik ve fiyat için bize WhatsApp'tan ulaşın. Hızlı yanıt — İngilizce veya Türkçe.",
    ctaBtn1:"💬 Şimdi WhatsApp'tan yazın", ctaBtn2:"📞 Bizi arayın",
    footerServices:"Hizmetler", footerContact:"İletişim", footerCompany:"Şirket",

    popup:{ title:"İndirim kodunuzu unutmayın!", desc:"Rezervasyon yapmadan önce özel kodunuzu kopyalayın. Bosphorus Yachts'ta ödeme sırasında girerek <strong style='color:#111C26'>%5 indirim</strong> kazanın.", copy:"Kopyala", copied:"Kopyalandı! ✓", go:"Bosphorus Yachts'a devam et →", back:"← Geri dön" }
  },
  ru: {
    backHome:"← Вернуться на Hancı Global", heroEyebrow:"Hancı Travel · Стамбул",
    heroH1a:"Стамбул, как вы хотите —", heroH1em:"с комфортом",
    heroP:"VIP трансферы из аэропорта, прогулки по Босфору и аренда автомобиля с водителем. Фиксированные цены, без сюрпризов.",
    heroBtn1:"Трансфер из аэропорта", heroBtn2:"🛥 Прогулки на яхте",
    trustBadges:["✓ Фиксированная цена — без счётчика","✓ Доступны 24/7"],
    tabs:["✈️ Трансфер из аэропорта","🚗 Почасовая / дневная аренда","🛥 Прогулки на яхте","📋 Как это работает"],

    transferBadge:"Трансфер из аэропорта", transferEyebrow:"IST · SAW · От двери до двери",
    transferH2a:"Прибытие и отъезд", transferH2b:"", transferH2em:"без стресса",
    transferP:"Отслеживаем ваш рейс в реальном времени и встречаем вас на прилёте с табличкой с именем. Доступны 24/7 для обоих аэропортов Стамбула — Istanbul Airport (IST) и Sabiha Gökçen (SAW). Фиксированная цена согласовывается заранее. Без счётчика, без сюрпризов.",
    transferBadges:["✓ 60 минут бесплатного ожидания","✓ Отслеживание рейса включено"],
    transferBtn1:"💬 Заказать трансфер", transferBtn2:"📞 Позвонить",

    vehiclesEyebrow:"Ваш автомобиль",
    vehicles:{
      vito:{ cap:"До 7 пассажиров · Premium VIP", desc:"Наш стандартный автомобиль для трансфера. Просторный, с кондиционером и полностью оборудован для комфортной поездки — из аэропорта или по городу." },
      sprinter:{ cap:"8+ пассажиров · Групповые трансферы", desc:"Для больших групп предоставляем Mercedes Sprinter. Та же политика фиксированной цены, тот же профессиональный сервис — независимо от размера группы." }
    },

    includesTitle:"В каждую поездку входит",
    includes:[
      { title:"Отслеживание рейса", sub:"Мониторинг в реальном времени", desc:"Отслеживаем ваш рейс в прямом эфире. Водитель подождёт, даже если вы задержитесь — без дополнительной платы." },
      { title:"Бесплатное ожидание — 60 мин", sub:"60 минут бесплатно", desc:"До 60 минут бесплатного ожидания в аэропорту после посадки. Без спешки, без дополнительных расходов." },
      { title:"Фиксированная цена", sub:"Прозрачное ценообразование", desc:"Цена согласовывается до поездки. Без счётчика, без скрытых платежей, без сюрпризов в конце поездки." },
      { title:"Сервис 24/7", sub:"Всегда доступны", desc:"Доступны в любой час, любой день. Раннее утро или поздняя ночь — мы всегда рядом, когда нужны." }
    ],

    routesEyebrow:"Популярные маршруты",
    routes:[
      { from:"IST", arrow:"Istanbul Airport →", to:"Таксим / Бейоглу", desc:"Прилёт и отлёт · Встреча в терминале" },
      { from:"SAW", arrow:"Sabiha Gökçen →", to:"Любой район", desc:"Прилёт и отлёт · Встреча в терминале" },
      { from:"Отель", arrow:"Высадка →", to:"Любое место", desc:"Услуга от двери до двери · Любой адрес в Стамбуле" }
    ],

    hourlyH2a:"Аренда автомобиля", hourlyH2b:"с водителем —", hourlyH2em:"почасово или на весь день",
    hourlyP:"Нужен водитель для похода по магазинам, деловых встреч, экскурсий или на целый день по Стамбулу? Предоставим Mercedes Vito или Sprinter с водителем на столько часов, сколько нужно.",
    hourlyBtn1:"💬 Получить смету", hourlyBtn2:"📞 Позвонить",
    hourlyFeats:[
      { title:"Почасовая аренда", desc:"От 2 часов — идеально для шопинга, встреч или получасовой экскурсии по городу." },
      { title:"Аренда на весь день", desc:"Автомобиль с водителем в вашем распоряжении весь день. Куда угодно, когда угодно." },
      { title:"До 7+ пассажиров", desc:"Vito до 7 человек — Sprinter для больших групп. Подстраиваемся под ваши нужды." },
      { title:"Фиксированная цена заранее", desc:"Согласовываем цену перед началом. Без сюрпризов, без работающего счётчика." }
    ],

    boatBadge:"Прогулки по Босфору", boatEyebrow:"Стамбул с воды",
    boatH2a:"Босфор", boatH2em:"так, как хотите вы",
    boatP:"Нет лучшего способа увидеть Стамбул, чем с воды. Мы сотрудничаем с Bosphorus Yachts — одним из самых надёжных туроператоров Стамбула — чтобы предложить нашим гостям эксклюзивный доступ к прогулкам по Босфору со специальной скидкой.",
    boatBadges:["✓ Партнёр: Bosphorus Yachts","✓ Эксклюзивная скидка 5%","✓ Частные и групповые варианты"],
    boatTours:{
      sunset:{ chip:"Самый популярный", title:"Закатный круиз", desc:"Золотой час на Босфоре — самый запоминающийся способ завершить день в Стамбуле. Наблюдайте, как город зажигается огнями на закате над двумя континентами. Напитки на борту.", meta:"⏱ ~2 часа &nbsp;·&nbsp; 👥 Группа и частные" },
      private:{ chip:"Премиум", title:"Частная аренда", desc:"Собственная частная яхта на Босфоре. Идеально для особых случаев, семейных поездок или корпоративных мероприятий. Полностью настраиваемый маршрут, продолжительность и кейтеринг.", meta:"⏱ Гибко &nbsp;·&nbsp; 👥 Только частные" },
      swim:{ chip:"Уникальный опыт", title:"Тур с плаванием", desc:"Плавайте между Европой и Азией в проливе Босфор. Поистине уникальный стамбульский опыт — прогулка по проливу с остановками для плавания в отдельных местах.", meta:"⏱ Весь день &nbsp;·&nbsp; 👥 Группа" }
    },
    airbnbReviewsBtn:"🏠 Отзывы на Airbnb", bookBtn:"Забронировать →", askUsBtn:"💬 Спросить нас",

    discountLabel:"Эксклюзивная скидка", discountTitle:"Скидка 5% на все туры Bosphorus Yachts",
    discountP:"Бронируйте напрямую на Bosphorus Yachts и введите код ниже при оформлении заказа, чтобы получить эксклюзивную скидку от Hancı Global.",
    discountHint:"Введите при оформлении на bosphorusyachts.com",
    discountBtn1:"Забронировать →", discountBtn2:"💬 Сначала спросить нас",

    hamamTitle:"Хаммам — скоро",
    hamamP:"Аутентичный стамбульский хаммам скоро появится в Hancı Travel. Следите за обновлениями — или свяжитесь с нами, чтобы узнать первыми.",
    hamamBtn:"💬 Сообщить мне",

    howEyebrow:"Простой процесс", howH2a:"Как это", howH2em:"работает",
    steps:[
      { title:"Свяжитесь с нами", desc:"Напишите в WhatsApp или позвоните с датами, размером группы, местом посадки и вашими потребностями." },
      { title:"Подтверждаем и рассчитываем", desc:"Отправляем вам фиксированную цену и подтверждаем наличие в течение часа." },
      { title:"Лёгкая оплата", desc:"Оплатите безопасно до предоставления услуги. Просто, прозрачно, без скрытых расходов." },
      { title:"Наслаждайтесь Стамбулом", desc:"Ваш водитель или гид встретит вас вовремя с табличкой с именем. Откиньтесь на спинку и наслаждайтесь городом." }
    ],

    ctaH2:"Готовы исследовать Стамбул?", ctaP:"Свяжитесь с нами в WhatsApp для уточнения наличия и цен. Быстрый ответ — на английском или турецком.",
    ctaBtn1:"💬 Написать в WhatsApp", ctaBtn2:"📞 Позвонить",
    footerServices:"Услуги", footerContact:"Контакты", footerCompany:"Компания",

    popup:{ title:"Не забудьте скидку!", desc:"Скопируйте код до бронирования. Введите при оплате на Bosphorus Yachts и получите <strong style='color:#111C26'>скидку 5%</strong>.", copy:"Копировать", copied:"Скопировано! ✓", go:"Перейти на Bosphorus Yachts →", back:"← Назад" }
  },
  ar: {
    backHome:"→ العودة إلى Hancı Global", heroEyebrow:"Hancı Travel · إسطنبول",
    heroH1a:"إسطنبول على طريقتك —", heroH1em:"براحة تامة",
    heroP:"خدمات نقل VIP من المطار، وجولات بالقوارب في البوسفور، وتأجير سيارات مع سائق. أسعار ثابتة بلا مفاجآت.",
    heroBtn1:"النقل من المطار", heroBtn2:"🛥 جولات القوارب",
    trustBadges:["✓ سعر ثابت — بلا عدّاد","✓ متاح على مدار الساعة"],
    tabs:["✈️ النقل من المطار","🚗 تأجير بالساعة / باليوم","🛥 جولات القوارب","📋 كيف نعمل"],

    transferBadge:"النقل من المطار", transferEyebrow:"IST · SAW · من الباب إلى الباب",
    transferH2a:"وصول ومغادرة", transferH2b:"", transferH2em:"بلا عناء",
    transferP:"نتابع رحلتك الجوية لحظة بلحظة ونستقبلك في صالة الوصول بلافتة تحمل اسمك. الخدمة متاحة على مدار الساعة لكلا مطارَي إسطنبول — مطار إسطنبول (IST) ومطار صبيحة كوكجن (SAW). سعر ثابت يُتّفق عليه قبل الرحلة. بلا عدّاد ولا مفاجآت.",
    transferBadges:["✓ 60 دقيقة انتظار مجاناً","✓ متابعة الرحلة مشمولة"],
    transferBtn1:"💬 احجز النقل", transferBtn2:"📞 اتصل بنا",

    vehiclesEyebrow:"سيارتك",
    vehicles:{
      vito:{ cap:"حتى 7 ركّاب · VIP مميّز", desc:"سيارتنا المعتادة للنقل. واسعة ومكيّفة ومجهّزة بالكامل لرحلة مريحة — من المطار أو داخل المدينة." },
      sprinter:{ cap:"8 ركّاب أو أكثر · نقل المجموعات", desc:"للمجموعات الكبيرة نوفّر Mercedes Sprinter. سياسة السعر الثابت نفسها والخدمة الاحترافية نفسها — مهما كان حجم المجموعة." }
    },

    includesTitle:"كل رحلة تشمل",
    includes:[
      { title:"متابعة الرحلة الجوية", sub:"مراقبة لحظية", desc:"نتابع رحلتك مباشرةً. ينتظرك السائق حتى لو تأخّرت — دون أي رسوم إضافية." },
      { title:"انتظار مجاني — 60 دقيقة", sub:"60 دقيقة مجاناً", desc:"حتى 60 دقيقة انتظار مجاني في المطار بعد هبوطك. بلا استعجال وبلا تكلفة إضافية." },
      { title:"سعر ثابت", sub:"أسعار واضحة", desc:"يُتّفق على السعر قبل الرحلة. بلا عدّاد ولا رسوم خفية ولا مفاجآت في نهاية الرحلة." },
      { title:"خدمة على مدار الساعة", sub:"متاحون دائماً", desc:"متاحون في أي ساعة وأي يوم. في الصباح الباكر أو في وقت متأخر من الليل — نحن هنا عندما تحتاجنا." }
    ],

    routesEyebrow:"المسارات الأكثر طلباً",
    routes:[
      { from:"IST", arrow:"مطار إسطنبول ←", to:"تقسيم / بي أوغلو", desc:"الوصول والمغادرة · الاستقبال في المبنى" },
      { from:"SAW", arrow:"صبيحة كوكجن ←", to:"أي حي", desc:"الوصول والمغادرة · الاستقبال في المبنى" },
      { from:"الفندق", arrow:"التوصيل ←", to:"أي موقع", desc:"خدمة من الباب إلى الباب · أي عنوان في إسطنبول" }
    ],

    hourlyH2a:"تأجير سيارة", hourlyH2b:"مع سائق —", hourlyH2em:"بالساعة أو ليوم كامل",
    hourlyP:"تحتاج سائقاً للتسوّق أو لاجتماعات العمل أو لجولة سياحية أو ليوم كامل في إسطنبول؟ نوفّر لك Mercedes Vito أو Sprinter مع سائق للمدة التي تحتاجها.",
    hourlyBtn1:"💬 اطلب عرض سعر", hourlyBtn2:"📞 اتصل بنا",
    hourlyFeats:[
      { title:"تأجير بالساعة", desc:"ابتداءً من ساعتين — مثالي للتسوّق أو الاجتماعات أو جولة في المدينة لنصف يوم." },
      { title:"تأجير ليوم كامل", desc:"سيارة مع سائق مخصّصة لك طوال اليوم. إلى أي مكان وفي أي وقت." },
      { title:"لأكثر من 7 ركّاب", desc:"Vito حتى 7 أشخاص — وSprinter للمجموعات الأكبر. نتكيّف مع احتياجاتك." },
      { title:"سعر ثابت يُتّفق عليه مسبقاً", desc:"نتّفق على السعر قبل البدء. بلا مفاجآت وبلا عدّاد." }
    ],

    boatBadge:"جولات القوارب في البوسفور", boatEyebrow:"إسطنبول من الماء",
    boatH2a:"البوسفور", boatH2em:"على طريقتك",
    boatP:"لا توجد طريقة أفضل لرؤية إسطنبول من الماء. نتعاون مع Bosphorus Yachts — من أكثر منظّمي الجولات موثوقيةً في إسطنبول — لنقدّم لضيوفنا تجارب البوسفور بخصم خاص.",
    boatBadges:["✓ شريكنا: Bosphorus Yachts","✓ خصم حصري 5%","✓ خيارات خاصة وجماعية"],
    boatTours:{
      sunset:{ chip:"الأكثر طلباً", title:"رحلة الغروب", desc:"الساعة الذهبية على البوسفور — أجمل طريقة لختام يومك في إسطنبول. شاهد أضواء المدينة وهي تتلألأ مع غروب الشمس فوق قارّتين. المشروبات متوفّرة على متن القارب.", meta:"⏱ نحو ساعتين &nbsp;·&nbsp; 👥 جماعية وخاصة" },
      private:{ chip:"مميّز", title:"يخت خاص", desc:"يختك الخاص على البوسفور. مثالي للمناسبات الخاصة والعائلات وفعاليات الشركات. مسار ومدة وضيافة قابلة للتخصيص بالكامل.", meta:"⏱ مرن &nbsp;·&nbsp; 👥 خاص فقط" },
      swim:{ chip:"تجربة فريدة", title:"جولة السباحة", desc:"اسبح بين أوروبا وآسيا في مضيق البوسفور. تجربة إسطنبولية فريدة حقاً — جولة في المضيق مع التوقّف للسباحة في أماكن مختارة.", meta:"⏱ يوم كامل &nbsp;·&nbsp; 👥 جماعية" }
    },
    airbnbReviewsBtn:"🏠 تقييمات Airbnb", bookBtn:"← احجز", askUsBtn:"💬 اسألنا",

    discountLabel:"خصم حصري", discountTitle:"خصم 5% على جميع جولات Bosphorus Yachts",
    discountP:"احجز مباشرةً عبر Bosphorus Yachts وأدخل الرمز أدناه عند الدفع لتحصل على خصم Hancı Global الحصري.",
    discountHint:"أدخله عند الدفع على bosphorusyachts.com",
    discountBtn1:"← احجز الآن", discountBtn2:"💬 اسألنا أولاً",

    hamamTitle:"تجربة الحمّام التركي — قريباً",
    hamamP:"تجربة حمّام تركي أصيلة قادمة قريباً إلى Hancı Travel. ترقّبوا — أو تواصلوا معنا لتكونوا أول من يعلم.",
    hamamBtn:"💬 أبلغني",

    howEyebrow:"خطوات بسيطة", howH2a:"كيف", howH2em:"نعمل",
    steps:[
      { title:"تواصل معنا", desc:"راسلنا عبر واتساب أو اتصل بنا مع التواريخ وعدد الأشخاص ومكان الاستقبال وما تحتاجه." },
      { title:"نؤكّد ونرسل السعر", desc:"نرسل لك عرض سعر ثابتاً ونؤكّد التوفّر خلال ساعة." },
      { title:"دفع سهل", desc:"ادفع بأمان قبل الخدمة. بسيط وواضح وبلا تكاليف خفية." },
      { title:"استمتع بإسطنبول", desc:"يستقبلك السائق أو المرشد في الموعد بلافتة تحمل اسمك. استرخِ واستمتع بالمدينة." }
    ],

    ctaH2:"هل أنت مستعد لاستكشاف إسطنبول؟", ctaP:"تواصل معنا عبر واتساب لمعرفة التوفّر والأسعار. ردّ سريع — بالإنجليزية أو التركية.",
    ctaBtn1:"💬 راسلنا على واتساب", ctaBtn2:"📞 اتصل بنا",
    footerServices:"الخدمات", footerContact:"التواصل", footerCompany:"الشركة",

    popup:{ title:"لا تنسَ الخصم!", desc:"انسخ رمزك الحصري قبل الحجز، وأدخله عند الدفع على Bosphorus Yachts لتحصل على <strong style='color:#111C26'>خصم 5%</strong>.", copy:"نسخ", copied:"تم النسخ! ✓", go:"← المتابعة إلى Bosphorus Yachts", back:"→ رجوع" }
  }
};
function getTravelPage(lang) { return TRAVEL_PAGE[lang] || TRAVEL_PAGE.en; }
