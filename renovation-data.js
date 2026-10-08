/* ==========================================================================
   RENOVATION DATA — single source of truth for renovation.html
   --------------------------------------------------------------------------
   To add a completed/in-progress project: copy a block inside
   PORTFOLIO_PROJECTS and change images/translations. renovation.html
   renders it automatically.
   ========================================================================== */

const PORTFOLIO_PROJECTS = [
  {
    // Bedrettin Sk. dairesi (sitede "Golden Horn Hidden Heaven"). Önce: profesyonel fotoğraflar, sonra: tasarım görselleri.
    // paired: true → before[i] ile after[i] aynı açı; bir küçük resme tıklayınca iki taraf birlikte değişir.
    id: "galata-golden-horn-reno",
    status: "completed",
    paired: true,
    images: {
      before: ["reno-galata-before1.jpg","reno-galata-before2.jpg","reno-galata-before3.jpg","reno-galata-before4.jpg","reno-galata-before5.jpg","reno-galata-before6.jpg","reno-galata-before7.jpg"],
      after:  ["reno-galata-after1.jpg","reno-galata-after2.jpg","reno-galata-after3.jpg","reno-galata-after4.jpg","reno-galata-after5.jpg","reno-galata-after6.jpg","reno-galata-after7.jpg"],
      during: []
    },
    translations: {
      en: { location:"Galata · Golden Horn", typeLabel:"Interior renovation", category:"Residential",
        name:"Interior Renovation — Golden Horn View Apartment",
        desc:"A top-floor apartment in a historic Galata building, overlooking the Golden Horn. Every room had its own colour scheme, so we tied the whole home together with one calm palette: warm off-white walls, a midnight blue accent and the original wooden floors sanded and refinished in a warm honey tone. The original Ottoman cement tiles in the hall and kitchen were kept. The scope covered new walnut interior doors, hidden LED cornice lighting with built-in curtain pockets, pendant lights, a travertine bathroom, refreshed kitchen fronts with matte black handles, a built-in window bench facing the view and all-new furniture." },
      tr: { location:"Galata · Haliç", typeLabel:"İç mekân yenileme", category:"Konut",
        name:"İç Mekân Yenileme — Haliç Manzaralı Daire",
        desc:"Galata'da tarihi bir binanın Haliç'e bakan çatı katı dairesi. Her oda ayrı bir renk dünyasındaydı; evi tek ve sakin bir paletle bütünleştirdik: sıcak kırık beyaz duvarlar, gece mavisi vurgu ve zımparalanıp bal tonunda yenilenen orijinal ahşap zeminler. Hol ve mutfaktaki orijinal Osmanlı çinileri korundu. Kapsam: ceviz kaplama yeni iç kapılar, perde cepli gizli LED kartonpiyer aydınlatma, sarkıt armatürler, traverten banyo, mat siyah kulplu yenilenmiş mutfak kapakları, manzaraya bakan sedir ve tamamen yeni mobilyalar." },
      ru: { location:"Галата · Золотой Рог", typeLabel:"Ремонт интерьера", category:"Жилой объект",
        name:"Ремонт интерьера — квартира с видом на Золотой Рог",
        desc:"Мансардная квартира в историческом здании Галаты с видом на Золотой Рог. Каждая комната была выдержана в своей цветовой гамме, поэтому мы объединили дом одной спокойной палитрой: тёплые молочно-белые стены, акцент цвета полуночной синевы и оригинальный деревянный пол, отшлифованный и покрытый в тёплом медовом тоне. Оригинальная османская плитка в холле и на кухне сохранена. Объём работ: новые межкомнатные двери в ореховом шпоне, скрытая LED-подсветка карниза с нишами для штор, подвесные светильники, ванная в травертине, обновлённые фасады кухни с матовыми чёрными ручками, встроенная скамья у окна с видом и полностью новая мебель." },
      ar: { location:"غلطة · القرن الذهبي", typeLabel:"تجديد داخلي", category:"سكني",
        name:"تجديد داخلي — شقة بإطلالة على القرن الذهبي",
        desc:"شقة في الطابق العلوي من مبنى تاريخي في غلطة تطل على القرن الذهبي. كانت لكل غرفة ألوانها الخاصة، فوحّدنا المنزل بلوحة ألوان هادئة واحدة: جدران بلون أبيض دافئ، ولمسات بالأزرق الليلي، وأرضيات خشبية أصلية جرى صنفرتها وتجديدها بدرجة عسلية دافئة. حافظنا على البلاط العثماني الأصلي في الممر والمطبخ. شمل العمل أبواباً داخلية جديدة بقشرة الجوز، وإضاءة LED مخفية في الكرانيش مع جيوب للستائر، وإنارة معلّقة، وحمّاماً من الترافرتين، وواجهات مطبخ مجدّدة بمقابض سوداء غير لامعة، ومقعداً مدمجاً عند النافذة يطل على المنظر، وأثاثاً جديداً بالكامل." }
    }
  },
  {
    id: "beyoglu-full-reno",
    status: "completed",
    images: {
      before: ["before1.jpg","before2.jpg","before3.jpg","before4.jpg"],
      after:  ["after1.jpg","after2.jpg","after3.jpg","after4.jpg"],
      during: []
    },
    translations: {
      en: { location:"Beyoğlu", typeLabel:"Full renovation", category:"Residential",
        name:"Full Renovation — Beyoğlu Apartment",
        desc:"A complete gut renovation of a historic Beyoğlu apartment. The scope covers structural wall demolition and reconfiguration, complete replumbing and electrical rewiring, new bathroom installation, engineered parquet flooring throughout, new interior doors, suspended ceiling work, plastering and full repaint." },
      tr: { location:"Beyoğlu", typeLabel:"Tam tadilat", category:"Konut",
        name:"Komple Tadilat — Beyoğlu Dairesi",
        desc:"Tarihi bir Beyoğlu dairesinin komple yenilenmesi. Kapsam: duvar yıkımı ve yeniden düzenleme, elektrik ve su tesisatının komple yenilenmesi, banyo kurulumu, mühendislik parke döşeme, yeni iç kapılar, alçıpan ve asma tavan, sıva ve tam boya." },
      ru: { location:"Бейоглу", typeLabel:"Полный ремонт", category:"Жилой объект",
        name:"Полный ремонт — квартира в Бейоглу",
        desc:"Полный ремонт исторической квартиры в Бейоглу. Снос и перепланировка стен, полная замена электрики и сантехники, новая ванная, инженерный паркет, новые двери, гипсокартон и подвесные потолки, штукатурка и покраска." },
      ar: { location:"بيوغلو", typeLabel:"تجديد شامل", category:"سكني",
        name:"تجديد شامل — شقة في بيوغلو",
        desc:"تجديد كامل من الصفر لشقة تاريخية في بيوغلو. شمل العمل هدم الجدران وإعادة توزيعها، وتجديد تمديدات السباكة والكهرباء بالكامل، وتركيب حمّام جديد، وأرضيات باركيه هندسي في كل الأرجاء، وأبواباً داخلية جديدة، وأسقفاً معلّقة، ولياسة ودهاناً كاملين." }
    }
  }
];
function getProjectText(project, lang) { return project.translations[lang] || project.translations.en; }

/* ==========================================================================
   RENOVATION_PAGE — all static page text. Fill "tr"/"ru"; falls back to
   "en" if a field is missing.
   ========================================================================== */
const RENOVATION_PAGE = {
  en: {
    backHome: "← Back to Hancı Global",
    heroEyebrow: "Hancı Renovation · Istanbul",
    heroH1a: "Transform your", heroH1em: "Istanbul property",
    heroP: "Full renovation and refurbishment services from first survey to final handover. We manage everything — permits, contractors, timelines and budget — so you do not have to.",
    heroBtn1: "Our process", heroBtn2: "💬 Get a quote",
    trustBadges: ["✓ Own crew — no subcontractors", "✓ Transparent pricing", "✓ Full project management"],
    introBadge: "Hancı Renovation", introEyebrow: "End-to-end renovation", introH2a: "We manage your", introH2b: "", introH2em: "entire project",
    introDescs: [
      "Whether you have just bought an apartment that needs work, or you want to modernise an existing property, Hancı Renovation handles the full process — from design and permits through to construction and handover.",
      "Our team is our own — not subcontracted. That means direct accountability, consistent quality and a single point of contact throughout your project."
    ],
    introTags: ["Residential", "Commercial", "Historic buildings", "All Istanbul"],
    introCta: "💬 Discuss your project",
    processEyebrow: "How we work", processH2a: "Your renovation,", processH2em: "step by step",
    steps: [
      { num:"Step 01", title:"Site survey", desc:"We visit the property, assess its condition and define the full scope of work needed." },
      { num:"Step 02", title:"Design & quote", desc:"We prepare a detailed scope of work, design proposal and transparent cost breakdown." },
      { num:"Step 03", title:"Permits & planning", desc:"We handle all necessary permits and coordinate contractors, materials and timelines." },
      { num:"Step 04", title:"Construction", desc:"Our own crew carries out all works. We supervise daily and update you throughout." },
      { num:"Step 05", title:"Handover", desc:"Final inspection, snagging and handover. We do not leave until everything is perfect." }
    ],
    scopeEyebrow: "What we cover", scopeH2a: "Scope of", scopeH2em: "work",
    scope: [
      { icon:"🔨", title:"Structural works", desc:"Wall demolition and reconfiguration, structural repairs, concrete works. We handle full gut renovations." },
      { icon:"⚡", title:"Electrical & plumbing", desc:"Complete electrical rewiring and replumbing — new panels, pipework, fixtures and fittings throughout." },
      { icon:"🚿", title:"Bathroom & kitchen", desc:"Full bathroom and kitchen installation — tiling, sanitary ware, cabinetry and all fixtures." },
      { icon:"🪵", title:"Flooring", desc:"Engineered parquet, tiles, screed and all floor finishes. Supply and installation included." },
      { icon:"🚪", title:"Doors & ceilings", desc:"New interior doors, suspended ceilings, cornicing and all carpentry works." },
      { icon:"🎨", title:"Plastering & paint", desc:"Full plastering, skim coat and professional paint throughout — interior and exterior if required." }
    ],
    portfolioEyebrow: "Our work", portfolioH2a: "Renovation", portfolioH2em: "portfolio",
    beforeLabel: "Before", afterLabel: "After", duringLabel: "During construction",
    statusInProgress: "In progress", statusCompleted: "Completed",
    placeholderTitle: "Next project coming soon", placeholderDesc: "Our portfolio is growing. Have a renovation project? Let's talk.", placeholderBtn: "💬 Discuss a project",
    featuresEyebrow: "Why Hancı Renovation", featuresH2a: "What makes us", featuresH2em: "different",
    features: [
      { title:"Own crew — no subcontractors", desc:"Our renovation team is directly employed by us. Better quality control, faster problem solving and a single point of accountability." },
      { title:"Transparent pricing", desc:"No hidden costs. We provide a detailed quote upfront and inform you of any changes before they happen." },
      { title:"On-time delivery", desc:"We set realistic timelines and stick to them. You will always know exactly where your project stands." },
      { title:"Historic building experience", desc:"Beyoğlu's buildings require special care. We have experience preserving original architectural details while bringing spaces to modern standards." },
      { title:"Daily updates", desc:"We send progress updates via WhatsApp throughout the project. You always know what is happening on site — even if you are not in Istanbul." },
      { title:"Perfect handover", desc:"Full snagging and final inspection before handover. We do not consider a project complete until everything meets our standard." }
    ],
    ctaH2: "Ready to start your renovation?", ctaP: "Contact us to discuss your project. We visit the site, assess the scope and provide a transparent quote — no obligation.",
    ctaBtn1: "💬 WhatsApp us", ctaBtn2: "📞 Call us",
    footerServices: "Services", footerContact: "Contact", footerCompany: "Company"
  },
  tr: {
    backHome: "← Hancı Global'e dön",
    heroEyebrow: "Hancı Renovation · İstanbul",
    heroH1a: "İstanbul mülkünüzü", heroH1em: "dönüştürün",
    heroP: "İlk keşiften son teslimata kadar komple tadilat ve yenileme hizmetleri. İzinler, yükleniciler, zaman çizelgesi ve bütçe dahil her şeyi biz yönetiyoruz.",
    heroBtn1: "Sürecimiz", heroBtn2: "💬 Teklif alın",
    trustBadges: ["✓ Kendi ekibimiz — taşeron yok", "✓ Şeffaf fiyatlandırma", "✓ Tam proje yönetimi"],
    introBadge: "Hancı Renovation", introEyebrow: "Uçtan uca tadilat", introH2a: "Tüm projenizi", introH2b: "biz ", introH2em: "yönetiyoruz",
    introDescs: [
      "İster yeni aldığınız bir daireyi yenilemek isteyin, ister mevcut mülkünüzü modernize etmek — Hancı Renovation tasarımdan inşaata, izinlerden teslimata kadar tüm süreci yönetir.",
      "Ekibimiz doğrudan bizimdir — taşeron değil. Bu, doğrudan hesap verebilirlik, tutarlı kalite ve proje boyunca tek bir iletişim noktası anlamına gelir."
    ],
    introTags: ["Konut", "Ticari", "Tarihi binalar", "Tüm İstanbul"],
    introCta: "💬 Projenizi görüşelim",
    processEyebrow: "Nasıl çalışırız", processH2a: "Tadilat süreciniz,", processH2em: "adım adım",
    steps: [
      { num:"Adım 01", title:"Saha incelemesi", desc:"Mülkü ziyaret eder, durumunu değerlendirir ve gerekli tüm iş kapsamını belirleriz." },
      { num:"Adım 02", title:"Tasarım & teklif", desc:"Detaylı iş kapsamı, tasarım önerisi ve şeffaf maliyet dökümü hazırlarız." },
      { num:"Adım 03", title:"İzinler & planlama", desc:"Tüm gerekli izinleri alır, yüklenicileri, malzemeleri ve zaman çizelgesini koordine ederiz." },
      { num:"Adım 04", title:"İnşaat", desc:"Kendi ekibimiz tüm işleri yürütür. Günlük denetim yapar, sizi sürekli bilgilendiririz." },
      { num:"Adım 05", title:"Teslim", desc:"Son kontrol, eksik giderme ve teslim. Her şey mükemmel olana kadar ayrılmayız." }
    ],
    scopeEyebrow: "Ne yapıyoruz", scopeH2a: "İş", scopeH2em: "kapsamı",
    scope: [
      { icon:"🔨", title:"Yapısal işler", desc:"Duvar yıkımı ve yeniden düzenleme, yapısal onarımlar, beton işleri. Komple yenileme projelerini yönetiyoruz." },
      { icon:"⚡", title:"Elektrik & tesisat", desc:"Komple elektrik tesisatı yenileme ve sıhhi tesisat — yeni panolar, borular ve tüm bağlantılar." },
      { icon:"🚿", title:"Banyo & mutfak", desc:"Komple banyo ve mutfak kurulumu — fayans, sıhhi tesisat, dolaplar ve tüm aksesuarlar." },
      { icon:"🪵", title:"Zemin kaplama", desc:"Mühendislik parke, fayans, şap ve tüm zemin kaplamaları. Malzeme ve montaj dahil." },
      { icon:"🚪", title:"Kapılar & tavanlar", desc:"Yeni iç kapılar, asma tavan, alçı profil ve tüm marangozluk işleri." },
      { icon:"🎨", title:"Sıva & boya", desc:"Komple sıva, alçı ve profesyonel boya — iç ve dış mekan gerektiğinde." }
    ],
    portfolioEyebrow: "Çalışmalarımız", portfolioH2a: "Tadilat", portfolioH2em: "portföyü",
    beforeLabel: "Önce", afterLabel: "Sonra", duringLabel: "İnşaat sürecinde",
    statusInProgress: "Devam ediyor", statusCompleted: "Tamamlandı",
    placeholderTitle: "Yakında yeni proje", placeholderDesc: "Portföyümüz büyüyor. Aklınızda bir tadilat projesi mi var? Konuşalım.", placeholderBtn: "💬 Proje konuşalım",
    featuresEyebrow: "Neden Hancı Renovation?", featuresH2a: "Bizi", featuresH2em: "farklı kılan nedir",
    features: [
      { title:"Kendi ekibimiz — taşeron yok", desc:"Tadilat ekibimiz doğrudan bizimdir. Daha iyi kalite kontrolü, daha hızlı problem çözme ve tek bir sorumluluk noktası." },
      { title:"Şeffaf fiyatlandırma", desc:"Gizli maliyet yok. Detaylı teklif sunuyor, herhangi bir değişiklikten önce sizi bilgilendiriyoruz." },
      { title:"Zamanında teslim", desc:"Gerçekçi zaman çizelgeleri belirler ve bunlara uyarız. Projenizin durumunu her zaman bilirsiniz." },
      { title:"Tarihi bina deneyimi", desc:"Beyoğlu'nun binaları özel ilgi gerektirir. Orijinal mimari detayları koruyarak mekanları modern standartlara taşıma konusunda deneyimliyiz." },
      { title:"Günlük bilgilendirme", desc:"Proje boyunca WhatsApp üzerinden ilerleme güncellemeleri gönderiyoruz. İstanbul'da olmasanız bile şantiyede neler olduğunu her zaman biliyorsunuz." },
      { title:"Mükemmel teslim", desc:"Teslimattan önce tam eksik giderme ve son kontrol. Her şey standartlarımızı karşılayana kadar projeyi tamamlanmış saymıyoruz." }
    ],
    ctaH2: "Tadilata başlamaya hazır mısınız?", ctaP: "Projenizi görüşmek için bize ulaşın. Sahayı ziyaret eder, kapsamı değerlendirir ve şeffaf bir teklif sunarız — taahhüt yok.",
    ctaBtn1: "💬 WhatsApp'tan yazın", ctaBtn2: "📞 Bizi arayın",
    footerServices: "Hizmetler", footerContact: "İletişim", footerCompany: "Şirket"
  },
  ru: {
    backHome: "← Вернуться на Hancı Global",
    heroEyebrow: "Hancı Renovation · Стамбул",
    heroH1a: "Преобразите вашу", heroH1em: "стамбульскую недвижимость",
    heroP: "Полный ремонт от первого осмотра до финальной сдачи. Разрешения, подрядчики, сроки и бюджет — всё берём на себя.",
    heroBtn1: "Наш процесс", heroBtn2: "💬 Получить смету",
    trustBadges: ["✓ Собственная бригада — без субподряда", "✓ Прозрачное ценообразование", "✓ Полное управление проектом"],
    introBadge: "Hancı Renovation", introEyebrow: "Ремонт под ключ", introH2a: "Мы управляем вашим", introH2b: "", introH2em: "проектом полностью",
    introDescs: [
      "Купили квартиру, требующую ремонта, или хотите обновить существующую — Hancı Renovation берёт на себя весь процесс: от проекта и разрешений до строительства и сдачи.",
      "Наша команда — собственная, без субподряда. Это прямая ответственность, стабильное качество и единая точка контакта на протяжении всего проекта."
    ],
    introTags: ["Жилые объекты", "Коммерческие объекты", "Исторические здания", "Весь Стамбул"],
    introCta: "💬 Обсудить проект",
    processEyebrow: "Как мы работаем", processH2a: "Ваш ремонт,", processH2em: "шаг за шагом",
    steps: [
      { num:"Шаг 01", title:"Обследование объекта", desc:"Выезжаем на объект, оцениваем состояние и определяем полный объём необходимых работ." },
      { num:"Шаг 02", title:"Проект и смета", desc:"Готовим детальный объём работ, проектное предложение и прозрачную смету." },
      { num:"Шаг 03", title:"Разрешения и планирование", desc:"Оформляем все необходимые разрешения, координируем подрядчиков, материалы и сроки." },
      { num:"Шаг 04", title:"Строительство", desc:"Собственная бригада выполняет все работы. Ежедневный надзор и постоянная обратная связь." },
      { num:"Шаг 05", title:"Сдача объекта", desc:"Финальная проверка, устранение недостатков и сдача. Не уходим, пока всё не идеально." }
    ],
    scopeEyebrow: "Что мы делаем", scopeH2a: "Объём", scopeH2em: "работ",
    scope: [
      { icon:"🔨", title:"Конструктивные работы", desc:"Снос и перепланировка стен, конструктивные работы, бетонные работы. Полный демонтаж и реконструкция." },
      { icon:"⚡", title:"Электрика и сантехника", desc:"Полная замена электропроводки и сантехники — новые щиты, трубы, фурнитура и арматура." },
      { icon:"🚿", title:"Ванная и кухня", desc:"Полная установка ванной и кухни — плитка, сантехника, шкафы и вся фурнитура." },
      { icon:"🪵", title:"Напольные покрытия", desc:"Инженерный паркет, плитка, стяжка и все напольные покрытия. Материалы и монтаж включены." },
      { icon:"🚪", title:"Двери и потолки", desc:"Новые межкомнатные двери, подвесные потолки, карнизы и все столярные работы." },
      { icon:"🎨", title:"Штукатурка и покраска", desc:"Полная штукатурка, шпаклёвка и профессиональная покраска — внутри и снаружи при необходимости." }
    ],
    portfolioEyebrow: "Наши работы", portfolioH2a: "Портфолио", portfolioH2em: "ремонтов",
    beforeLabel: "До", afterLabel: "После", duringLabel: "В процессе строительства",
    statusInProgress: "В процессе", statusCompleted: "Завершён",
    placeholderTitle: "Следующий проект скоро", placeholderDesc: "Наше портфолио растёт. Есть проект ремонта? Давайте обсудим.", placeholderBtn: "💬 Обсудить проект",
    featuresEyebrow: "Почему Hancı Renovation", featuresH2a: "Что делает нас", featuresH2em: "особенными",
    features: [
      { title:"Собственная бригада — без субподряда", desc:"Наша ремонтная бригада работает напрямую у нас. Лучший контроль качества, быстрое решение проблем и единая точка ответственности." },
      { title:"Прозрачное ценообразование", desc:"Никаких скрытых расходов. Детальная смета заранее и уведомление о любых изменениях до их внесения." },
      { title:"Своевременная сдача", desc:"Устанавливаем реалистичные сроки и соблюдаем их. Вы всегда знаете статус проекта." },
      { title:"Опыт работы с историческими зданиями", desc:"Здания Бейоглу требуют особого подхода. Мы сохраняем оригинальные архитектурные детали, приводя пространство к современным стандартам." },
      { title:"Ежедневные обновления", desc:"Отправляем обновления через WhatsApp на протяжении всего проекта. Вы всегда знаете, что происходит на объекте — даже находясь за пределами Стамбула." },
      { title:"Идеальная сдача", desc:"Полное устранение недостатков и финальная проверка перед сдачей. Проект считается завершённым только когда всё соответствует нашим стандартам." }
    ],
    ctaH2: "Готовы начать ремонт?", ctaP: "Свяжитесь с нами для обсуждения проекта. Выезжаем на объект, оцениваем объём работ и предоставляем прозрачную смету — без обязательств.",
    ctaBtn1: "💬 Написать в WhatsApp", ctaBtn2: "📞 Позвонить",
    footerServices: "Услуги", footerContact: "Контакты", footerCompany: "Компания"
  },
  ar: {
    backHome: "→ العودة إلى Hancı Global",
    heroEyebrow: "Hancı Renovation · إسطنبول",
    heroH1a: "حوِّل عقارك", heroH1em: "في إسطنبول",
    heroP: "خدمات تجديد وترميم شاملة من أول معاينة حتى التسليم النهائي. نتولّى كل شيء: التصاريح والفِرق والجدول الزمني والميزانية، فلا داعي لأن تقلق.",
    heroBtn1: "طريقة عملنا", heroBtn2: "💬 اطلب عرض سعر",
    trustBadges: ["✓ فريقنا الخاص، بلا مقاولين من الباطن", "✓ أسعار شفافة", "✓ إدارة كاملة للمشروع"],
    introBadge: "Hancı Renovation", introEyebrow: "تجديد متكامل", introH2a: "ندير", introH2b: "", introH2em: "مشروعك بالكامل",
    introDescs: [
      "سواء اشتريت للتو شقة تحتاج إلى تجديد، أو تريد تحديث عقار تملكه، تتولى Hancı Renovation العملية كاملة: من التصميم والتصاريح إلى التنفيذ والتسليم.",
      "فريقنا تابع لنا مباشرة وليس من مقاولين من الباطن. وهذا يعني مسؤولية مباشرة وجودة ثابتة وجهة تواصل واحدة طوال مشروعك."
    ],
    introTags: ["سكني", "تجاري", "مبانٍ تاريخية", "كل إسطنبول"],
    introCta: "💬 ناقش مشروعك معنا",
    processEyebrow: "كيف نعمل", processH2a: "تجديد عقارك،", processH2em: "خطوة بخطوة",
    steps: [
      { num:"الخطوة 01", title:"معاينة الموقع", desc:"نزور العقار ونقيّم حالته ونحدّد نطاق الأعمال المطلوبة بالكامل." },
      { num:"الخطوة 02", title:"التصميم وعرض السعر", desc:"نُعدّ نطاق عمل مفصّلاً ومقترح تصميم وتفصيلاً شفافاً للتكاليف." },
      { num:"الخطوة 03", title:"التصاريح والتخطيط", desc:"نستخرج جميع التصاريح اللازمة وننسّق الفِرق والمواد والجدول الزمني." },
      { num:"الخطوة 04", title:"التنفيذ", desc:"ينفّذ فريقنا جميع الأعمال. نشرف يومياً ونطلعك على التقدّم باستمرار." },
      { num:"الخطوة 05", title:"التسليم", desc:"فحص نهائي ومعالجة الملاحظات ثم التسليم. لا نغادر حتى يصبح كل شيء على أكمل وجه." }
    ],
    scopeEyebrow: "ما نقدّمه", scopeH2a: "نطاق", scopeH2em: "الأعمال",
    scope: [
      { icon:"🔨", title:"الأعمال الإنشائية", desc:"هدم الجدران وإعادة توزيعها، والإصلاحات الإنشائية، وأعمال الخرسانة. ننفّذ التجديد الشامل من الصفر." },
      { icon:"⚡", title:"الكهرباء والسباكة", desc:"تجديد كامل لتمديدات الكهرباء والسباكة: لوحات جديدة وأنابيب وتجهيزات في كل أرجاء العقار." },
      { icon:"🚿", title:"الحمّام والمطبخ", desc:"تركيب كامل للحمّام والمطبخ: البلاط والأدوات الصحية والخزائن وجميع التجهيزات." },
      { icon:"🪵", title:"الأرضيات", desc:"باركيه هندسي وبلاط وصبّة أرضية وجميع أنواع التشطيب. التوريد والتركيب مشمولان." },
      { icon:"🚪", title:"الأبواب والأسقف", desc:"أبواب داخلية جديدة وأسقف معلّقة وكرانيش وجميع أعمال النجارة." },
      { icon:"🎨", title:"اللياسة والدهان", desc:"لياسة كاملة ومعجون ودهان احترافي في كل الأرجاء، داخلياً وخارجياً عند الحاجة." }
    ],
    portfolioEyebrow: "أعمالنا", portfolioH2a: "معرض", portfolioH2em: "مشاريع التجديد",
    beforeLabel: "قبل", afterLabel: "بعد", duringLabel: "أثناء التنفيذ",
    statusInProgress: "قيد التنفيذ", statusCompleted: "مكتمل",
    placeholderTitle: "مشروع جديد قريباً", placeholderDesc: "معرض أعمالنا يكبر. هل لديك مشروع تجديد؟ لنتحدث.", placeholderBtn: "💬 ناقش مشروعاً",
    featuresEyebrow: "لماذا Hancı Renovation", featuresH2a: "ما الذي", featuresH2em: "يميّزنا",
    features: [
      { title:"فريقنا الخاص، بلا مقاولين من الباطن", desc:"فريق التجديد يعمل لدينا مباشرة. رقابة أفضل على الجودة، وحلّ أسرع للمشكلات، وجهة مسؤولة واحدة." },
      { title:"أسعار شفافة", desc:"لا تكاليف خفية. نقدّم عرض سعر مفصّلاً مسبقاً ونبلغك بأي تغيير قبل حدوثه." },
      { title:"تسليم في الموعد", desc:"نضع جداول زمنية واقعية ونلتزم بها. ستعرف دائماً أين وصل مشروعك." },
      { title:"خبرة في المباني التاريخية", desc:"مباني بيوغلو تحتاج إلى عناية خاصة. لدينا خبرة في الحفاظ على التفاصيل المعمارية الأصلية مع الارتقاء بالمساحات إلى المعايير الحديثة." },
      { title:"تحديثات يومية", desc:"نرسل لك تحديثات التقدّم عبر واتساب طوال المشروع، فتعرف دائماً ما يجري في الموقع حتى لو لم تكن في إسطنبول." },
      { title:"تسليم مثالي", desc:"معالجة كاملة للملاحظات وفحص نهائي قبل التسليم. لا نعتبر المشروع مكتملاً حتى يستوفي كل شيء معاييرنا." }
    ],
    ctaH2: "هل أنت مستعد لبدء التجديد؟", ctaP: "تواصل معنا لمناقشة مشروعك. نزور الموقع ونقيّم نطاق العمل ونقدّم لك عرض سعر شفافاً دون أي التزام.",
    ctaBtn1: "💬 راسلنا على واتساب", ctaBtn2: "📞 اتصل بنا",
    footerServices: "الخدمات", footerContact: "التواصل", footerCompany: "الشركة"
  }
};
function getRenovationPage(lang) { return RENOVATION_PAGE[lang] || RENOVATION_PAGE.en; }
