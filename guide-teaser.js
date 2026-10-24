/* ==========================================================================
   REHBER ŞERİDİ — sayfaların ortasında rehberi tanıtan kart şeridi.
   Kullanım: sayfaya <div id="guideTeaser"></div> koyup bu dosyayı yükleyin.
   <div id="guideLinks"></div> varsa (daire detayı) sadece küçük linkler basılır.
   Dil ?lang= parametresinden okunur; Arapçada sağdan sola site-i18n.js ile gelir.
   ========================================================================== */
(function () {
  var lang = new URLSearchParams(location.search).get('lang') || 'en';
  if (['en', 'tr', 'ru', 'ar'].indexOf(lang) < 0) lang = 'en';
  var sfx = lang === 'en' ? '' : '-' + lang;
  var url = function (slug) { return 'guides/' + slug + sfx + '.html'; };

  var T = {
    en: { eyebrow: 'Hancı Istanbul Guide', h2a: 'Istanbul', h2em: 'like a local',
      p: 'Where we eat, what we see and how to get here: our own picks across the city, all on one map.',
      cta: 'Open the guide →', more: 'Explore →',
      eat: ['Where to eat & drink', '70+ places · breakfast, meyhanes, Bosphorus, rooftops'],
      see: ['Things to do', '50 places · Galata, the Old City, palaces and the Bosphorus'],
      air: ['From the airport', 'Taxi, shuttle or metro to Galata and Taksim'],
      stay: ['Where to stay', 'Galata, Sultanahmet, Kadıköy… every neighbourhood, honestly compared'],
      days: ['Istanbul in 3 days', 'A day-by-day plan from Galata, with sunsets'],
      boat: ['Bosphorus cruises', 'Public ferry, tour boat or private yacht?'],
      when: ['When to visit', 'Weather, crowds and prices month by month'],
      tower: ['Galata Tower', 'Tickets, queues and the best free views'],
      prev: 'Previous', next: 'Next',
      linkEat: '🍽️ Where to eat nearby →', linkSee: '🗼 What to see nearby →' },
    tr: { eyebrow: 'Hancı İstanbul Rehberi', h2a: 'İstanbul\'u', h2em: 'bir yerli gibi keşfedin',
      p: 'Nerede yiyoruz, neleri geziyoruz, buraya nasıl gelinir: şehrin dört bir yanından kendi seçtiğimiz yerler, hepsi tek haritada.',
      cta: 'Rehberi açın →', more: 'Keşfedin →',
      eat: ['Ne yenir, ne içilir', '70+ mekân · kahvaltı, meyhane, Boğaz, teraslar'],
      see: ['Gezilecek yerler', '50 yer · Galata, Tarihi Yarımada, saraylar ve Boğaz'],
      air: ['Havalimanından ulaşım', 'Galata ve Taksim\'e taksi, otobüs ya da metro'],
      stay: ['Nerede kalınır?', 'Galata, Sultanahmet, Kadıköy… bütün semtlerin dürüst karşılaştırması'],
      days: ['3 günde İstanbul', 'Galata’dan başlayan, gün batımlı günlük plan'],
      boat: ['Boğaz turları', 'Şehir Hatları mı, tur teknesi mi, özel yat mı?'],
      when: ['Ne zaman gidilir?', 'Aylara göre hava, kalabalık ve fiyatlar'],
      tower: ['Galata Kulesi', 'Bilet, kuyruk ve en güzel ücretsiz manzaralar'],
      prev: 'Önceki', next: 'Sonraki',
      linkEat: '🍽️ Yakında ne yenir →', linkSee: '🗼 Yakında ne gezilir →' },
    ru: { eyebrow: 'Путеводитель Hancı', h2a: 'Стамбул', h2em: 'как местный',
      p: 'Где мы едим, что смотрим и как сюда добраться: наши любимые места по всему городу на одной карте.',
      cta: 'Открыть гид →', more: 'Смотреть →',
      eat: ['Где поесть и выпить', '70+ мест · завтраки, мейхане, Босфор, крыши'],
      see: ['Что посмотреть', '50 мест · Галата, Старый город, дворцы и Босфор'],
      air: ['Из аэропорта', 'Такси, автобус или метро до Галаты и Таксима'],
      stay: ['Где остановиться', 'Галата, Султанахмет, Кадыкёй… честное сравнение районов'],
      days: ['Стамбул за 3 дня', 'План по дням с началом в Галате и закатами'],
      boat: ['Прогулки по Босфору', 'Городской паром, кораблик или частная яхта?'],
      when: ['Когда ехать', 'Погода, толпы и цены по месяцам'],
      tower: ['Галатская башня', 'Билеты, очереди и лучшие бесплатные виды'],
      prev: 'Назад', next: 'Вперёд',
      linkEat: '🍽️ Где поесть рядом →', linkSee: '🗼 Что посмотреть рядом →' },
    ar: { eyebrow: 'دليل Hancı لإسطنبول', h2a: 'إسطنبول', h2em: 'كأنك من أهلها',
      p: 'أين نأكل وماذا نزور وكيف تصل إلينا: اختياراتنا في أنحاء المدينة، كلها على خريطة واحدة.',
      cta: '← افتح الدليل', more: '← استكشف',
      eat: ['أين تأكل وتشرب', 'أكثر من 70 مكاناً · فطور، مطاعم تقليدية، البوسفور، أسطح'],
      see: ['ماذا تزور', '50 مكاناً · غلطة، المدينة القديمة، القصور والبوسفور'],
      air: ['من المطار', 'تاكسي أو حافلة أو مترو إلى غلطة وتقسيم'],
      stay: ['أين تقيم', 'غلطة والسلطان أحمد وكاديكوي… مقارنة صادقة لكل الأحياء'],
      days: ['إسطنبول في 3 أيام', 'خطة يوماً بيوم تبدأ من غلطة مع أجمل الغروب'],
      boat: ['رحلات البوسفور', 'عبّارة حكومية أم قارب سياحي أم يخت خاص؟'],
      when: ['متى تزور إسطنبول', 'الطقس والازدحام والأسعار شهراً بشهر'],
      tower: ['برج غلطة', 'التذاكر والطوابير وأجمل الإطلالات المجانية'],
      prev: 'السابق', next: 'التالي',
      linkEat: '🍽️ أين تأكل بالقرب ←', linkSee: '🗼 ماذا تزور بالقرب ←' }
  }[lang];

  /* daire detayı: sadece küçük linkler */
  var links = document.getElementById('guideLinks');
  if (links) {
    /* havalimanı linki de aynı satıra */
    var air = links.previousElementSibling;
    links.innerHTML = '';
    if (air && air.classList.contains('maps-guide-link')) links.appendChild(air);
    links.innerHTML +='<a class="maps-guide-link" href="' + url('where-to-eat-drink-galata') + '">' + T.linkEat + '</a>' +
      '<a class="maps-guide-link" href="' + url('things-to-do-galata-beyoglu') + '">' + T.linkSee + '</a>';
  }

  var box = document.getElementById('guideTeaser');
  if (!box) return;
  var css = '.gt{padding:88px 56px;background:#0D1E35;color:#fff;position:relative;overflow:hidden}' +
    '.gt::before{content:"";position:absolute;inset:0;background:radial-gradient(70% 90% at 90% 0%,rgba(184,149,58,.22),transparent 60%),radial-gradient(60% 80% at 0% 100%,rgba(29,158,117,.18),transparent 60%)}' +
    '.gt-in{position:relative;max-width:1280px;margin:0 auto;display:grid;grid-template-columns:minmax(260px,.85fr) 2fr;gap:48px;align-items:center}' +
    '.gt-in>div{min-width:0}' +
    '.gt-eye{font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#E8C86A;margin-bottom:14px}' +
    '.gt h2{font-family:"Cormorant Garamond","Amiri",serif;font-size:46px;font-weight:500;line-height:1.08;letter-spacing:-.5px}' +
    '.gt h2 em{color:#E8C86A}' +
    '.gt-p{margin-top:16px;font-size:15.5px;line-height:1.75;color:rgba(255,255,255,.75)}' +
    '.gt-btn{display:inline-block;margin-top:26px;font-size:14px;font-weight:800;color:#0D1E35;background:#E8C86A;padding:14px 26px;border-radius:10px;transition:transform .2s}' +
    '.gt-btn:hover{transform:translateY(-2px)}' +
    /* tüm rehberler yatay kayar: masaüstünde 3 kart görünür, okla ya da kaydırarak geçilir */
    '.gt-cards{display:grid;grid-auto-flow:column;grid-auto-columns:calc((100% - 32px) / 3);gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;overscroll-behavior-x:contain}' +
    '.gt-cards::-webkit-scrollbar{display:none}' +
    '.gt-nav{display:flex;justify-content:flex-end;gap:10px;margin-top:16px}' +
    '.gt-nav button{width:42px;height:42px;border-radius:50%;border:1px solid rgba(255,255,255,.3);background:transparent;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,opacity .2s}' +
    '.gt-nav button:hover{background:rgba(255,255,255,.12)}' +
    '.gt-nav button:disabled{opacity:.3;cursor:default}' +
    '[dir=rtl] .gt-nav svg{transform:scaleX(-1)}' +
    '.gt-card{scroll-snap-align:start;position:relative;border-radius:20px;overflow:hidden;min-height:300px;display:flex;align-items:flex-end;color:#fff;box-shadow:0 20px 40px -20px rgba(0,0,0,.6)}' +
    '.gt-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .6s}' +
    '.gt-card:hover img{transform:scale(1.06)}' +
    '.gt-card::after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(8,16,30,.92) 0%,rgba(8,16,30,.35) 55%,rgba(8,16,30,.05) 100%)}' +
    '.gt-card div{position:relative;z-index:1;padding:22px}' +
    '.gt-card b{display:block;font-family:"Cormorant Garamond","Amiri",serif;font-size:26px;font-weight:600;line-height:1.1}' +
    '.gt-card span{display:block;margin-top:6px;font-size:12.5px;color:rgba(255,255,255,.78);line-height:1.5}' +
    '.gt-card i{display:inline-block;margin-top:12px;font-style:normal;font-size:12.5px;font-weight:800;color:#E8C86A}' +
    '@media (max-width:1000px){.gt{padding:60px 20px}.gt-in{grid-template-columns:1fr;gap:28px}.gt h2{font-size:36px}' +
    '.gt-cards{grid-auto-columns:78%}.gt-card{min-height:260px}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var card = function (slug, img, t) {
    return '<a class="gt-card" href="' + url(slug) + '"><img loading="lazy" src="' + img + '" alt=""><div><b>' + t[0] + '</b><span>' + t[1] + '</span><i>' + T.more + '</i></div></a>';
  };
  /* sayfaya göre ilk 3 kart: ana sayfa → kalış + plan + yemek; konaklama → kalış + ne zaman + yemek; seyahat → Boğaz + havalimanı + plan; ardından diğer rehberler */
  var C = {
    stay: ['where-to-stay-in-istanbul', 'where-to-stay.jpg', T.stay], days: ['istanbul-3-day-itinerary', 'istanbul-3-days.jpg', T.days],
    boat: ['bosphorus-cruise-guide', 'bosphorus-cruise.jpg', T.boat], when: ['best-time-to-visit-istanbul', 'best-time-istanbul.jpg', T.when],
    eat: ['where-to-eat-drink-galata', 'sunset2.jpg', T.eat], see: ['things-to-do-galata-beyoglu', 'istanbul.jpg', T.see],
    air: ['istanbul-airport-to-galata-taksim', 'transferana.jpg', T.air], tower: ['galata-tower-guide', 'galata-tower-guide.jpg', T.tower]
  };
  var page = (location.pathname.split('/').pop() || 'index.html').replace('.html', '');
  var order = { index: ['stay', 'days', 'eat'], '': ['stay', 'days', 'eat'], stay: ['stay', 'when', 'eat'], travel: ['boat', 'air', 'days'] }[page] || ['eat', 'see', 'air'];
  Object.keys(C).forEach(function (k) { if (order.indexOf(k) < 0) order.push(k); });
  var cards = order.map(function (k) { return card(C[k][0], C[k][1], C[k][2]); }).join('');
  box.className = 'gt';
  box.innerHTML = '<div class="gt-in"><div><div class="gt-eye">' + T.eyebrow + '</div><h2>' + T.h2a + ' <em>' + T.h2em + '</em></h2>' +
    '<p class="gt-p">' + T.p + '</p><a class="gt-btn" href="' + url('index') + '">' + T.cta + '</a></div>' +
    '<div><div class="gt-cards">' + cards + '</div><div class="gt-nav">' +
    '<button type="button" class="gt-prev" aria-label="' + T.prev + '"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>' +
    '<button type="button" class="gt-next" aria-label="' + T.next + '"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></button>' +
    '</div></div></div>';
  /* oklar: bir kart genişliği kadar kaydırır; Arapçada (rtl) yön ters */
  var row = box.querySelector('.gt-cards'), prev = box.querySelector('.gt-prev'), next = box.querySelector('.gt-next');
  var dir = function () { return getComputedStyle(row).direction === 'rtl' ? -1 : 1; };
  var step = function () { var c = row.querySelector('.gt-card'); return c ? c.offsetWidth + 16 : row.clientWidth; };
  var upd = function () { var x = Math.abs(row.scrollLeft), max = row.scrollWidth - row.clientWidth;
    prev.disabled = x < 4; next.disabled = x > max - 4; };
  prev.onclick = function () { row.scrollBy({ left: -step() * dir(), behavior: 'smooth' }); };
  next.onclick = function () { row.scrollBy({ left: step() * dir(), behavior: 'smooth' }); };
  row.addEventListener('scroll', upd, { passive: true }); window.addEventListener('resize', upd); upd();
})();
