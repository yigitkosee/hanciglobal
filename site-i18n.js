/* ==========================================================================
   SITE-I18N — her sayfada ortak olan dil işleri. Sayfanın en sonunda yüklenir.
   1) Menü + footer'daki HTML'e sabit yazılmış ortak metinleri çevirir
      ("Call", "About us", footer başlıkları...).
   2) Arapça (ar): sadece <html data-ar="1"> işaretli sayfalarda (ana sayfa,
      konaklama, daire detay, seyahat) sayfayı sağdan sola çevirir ve Arapça
      fontları yükler. İşaretsiz sayfalar (emlak, tadilat, vize) ?lang=ar ile
      açılırsa İngilizce kalır ve canonical İngilizce sayfayı gösterir.
   ========================================================================== */
(function () {
  var lang = new URLSearchParams(window.location.search).get('lang');
  var root = document.documentElement;

  if (lang === 'ar' && root.getAttribute('data-ar') !== '1') {
    /* bu sayfanın Arapçası yok: İngilizce göster, Google'a İngilizce sürümü işaret et */
    root.lang = 'en';
    var canon = document.getElementById('canonicalLink');
    if (canon) canon.href = canon.href.replace(/([?&])lang=ar(&|$)/, function (m, a, b) { return b ? a : ''; }).replace(/\?$/, '');
    return;
  }
  if (lang !== 'tr' && lang !== 'ru' && lang !== 'ar') return;

  /* site içi linkler seçili dili korusun: "index.html#about" → "index.html?lang=ar#about"
     (sayfaların kendi kodu bazı linkleri atlıyordu, örn. alt sayfalardaki "Hakkımızda") */
  document.querySelectorAll('a[href]').forEach(function (a) {
    var m = a.getAttribute('href').match(/^(index|stay|stay-detail|travel|property|renovation|visa)\.html(\?[^#]*)?(#.*)?$/);
    if (!m) return;
    var q = new URLSearchParams((m[2] || '').slice(1));
    if (q.has('lang')) return;
    q.set('lang', lang);
    a.setAttribute('href', m[1] + '.html?' + q.toString() + (m[3] || ''));
  });

  /* rehber linkleri (data-guide="slug") seçili dilin rehber sayfasına gitsin: guides/slug-tr.html */
  document.querySelectorAll('a[data-guide]').forEach(function (a) {
    a.href = 'guides/' + a.getAttribute('data-guide') + '-' + lang + '.html';
  });

  var DICT = {
    'Call':         { tr: 'Ara',         ru: 'Позвонить',        ar: 'اتصل' },
    'Stay':         { tr: 'Konaklama',   ru: 'Апартаменты',      ar: 'الإقامة' },
    'Property':     { tr: 'Emlak',       ru: 'Недвижимость',     ar: 'العقارات' },
    'Renovation':   { tr: 'Tadilat',     ru: 'Ремонт',           ar: 'التجديد' },
    'Travel':       { tr: 'Seyahat',     ru: 'Путешествия',      ar: 'السفر' },
    'Visa':         { tr: 'Vize',        ru: 'Виза',             ar: 'التأشيرات' },
    'About':        { tr: 'Hakkımızda',  ru: 'О нас',            ar: 'من نحن' },
    'About us':     { tr: 'Hakkımızda',  ru: 'О нас',            ar: 'من نحن' },
    'Get in touch': { tr: 'Bize ulaşın', ru: 'Связаться с нами', ar: 'تواصل معنا' },
    'Find us':      { tr: 'Bizi bulun',  ru: 'Как нас найти',    ar: 'موقعنا' },
    'Services':     { tr: 'Hizmetler',   ru: 'Услуги',           ar: 'الخدمات' },
    'Contact':      { tr: 'İletişim',    ru: 'Контакты',         ar: 'التواصل' },
    'Company':      { tr: 'Şirket',      ru: 'Компания',         ar: 'الشركة' },
    'Istanbul Guide': { tr: 'İstanbul Rehberi', ru: 'Путеводитель по Стамбулу', ar: 'دليل إسطنبول' },
    'Guide':        { tr: 'Rehber',      ru: 'Путеводитель',     ar: 'الدليل' },
    /* menüdeki "Services" açılır listesinin açıklamaları */
    'Buy, rent & invest in Istanbul': { tr: 'İstanbul\'da satılık ve kiralık', ru: 'Покупка и аренда в Стамбуле', ar: 'شراء واستئجار العقارات في إسطنبول' },
    'Turnkey renovation projects':    { tr: 'Anahtar teslim tadilat', ru: 'Ремонт под ключ', ar: 'تجديد بنظام تسليم المفتاح' },
    'Schengen, UK & US visa support': { tr: 'Schengen, İngiltere ve ABD vizesi', ru: 'Визы: Шенген, Великобритания, США', ar: 'تأشيرات شنغن وبريطانيا وأمريكا' },
    'Professionally managed · Istanbul-based team': {
      tr: 'Profesyonel yönetim · İstanbul merkezli ekip',
      ru: 'Профессиональное управление · команда в Стамбуле',
      ar: 'إدارة احترافية · فريق مقرّه إسطنبول' },
    'How to get here from the airports →': {
      tr: 'Havalimanlarından buraya nasıl gelinir →',
      ru: 'Как добраться сюда из аэропортов →',
      ar: 'كيف تصل إلى هنا من المطارات ←' }
  };

  /* sadece menü, footer ve data-i18n işaretli öğelerdeki metinlere dokunur; içerikteki aynı kelimeler etkilenmez */
  document.querySelectorAll('nav, .mobile-nav, footer, [data-i18n]').forEach(function (el) {
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      var text = node.textContent.trim();
      if (DICT[text]) node.textContent = node.textContent.replace(text, DICT[text][lang]);
    }
  });

  if (lang !== 'ar') return;

  /* ---------- Arapça: sağdan sola + fontlar ---------- */
  root.lang = 'ar';
  root.dir = 'rtl';

  var font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Amiri:wght@400;700&display=swap';
  document.head.appendChild(font);

  /* Latin fontlar Arapça harf içermediği için her font ailesinin arkasına Arapça karşılığını ekle:
     Latin harfler (marka adları, mekân adları) eski fontla, Arapça harfler Arapça fontla görünür */
  var SERIF = '"Cormorant Garamond","Amiri",serif';
  var SANS = '"Plus Jakarta Sans","IBM Plex Sans Arabic",sans-serif';
  var rules = {};
  document.querySelectorAll('body, body *').forEach(function (el) {
    var cls = el.classList && el.classList[0];
    if (!cls || rules[cls]) return;
    var ff = getComputedStyle(el).fontFamily;
    if (/Cormorant/i.test(ff)) rules[cls] = SERIF;
  });

  var css = 'html[dir=rtl] body,html[dir=rtl] button,html[dir=rtl] input,html[dir=rtl] select,html[dir=rtl] textarea,html[dir=rtl] .cinput,html[dir=rtl] .cselect,html[dir=rtl] .ctextarea{font-family:' + SANS + '}' +
    Object.keys(rules).map(function (c) { return 'html[dir=rtl] .' + CSS.escape(c) + '{font-family:' + rules[c] + '!important}'; }).join('') +
    /* Arapça harfler birbirine bağlanır: harf aralığı ve eğik yazı bozar */
    'html[dir=rtl] *{letter-spacing:0!important}' +
    'html[dir=rtl] em,html[dir=rtl] i{font-style:normal}' +
    /* kaydırmalı galeriler translateX ile çalışıyor; hem şerit hem kapsayıcısı soldan sağa kalmalı,
       yoksa sağdan sola sayfada şerit sağa yaslanır ve boş ikinci kare (alt yazısı) görünür */
    'html[dir=rtl] .slider,html[dir=rtl] .slides,html[dir=rtl] #dgallery,html[dir=rtl] .dslides,html[dir=rtl] #pgMainEl,html[dir=rtl] #pgTrack{direction:ltr}' +
    /* telefon, e-posta ve Latin adresler soldan sağa okunmalı ama yine sağa yaslı durmalı */
    'html[dir=rtl] a[href^="tel:"],html[dir=rtl] a[href^="mailto:"],html[dir=rtl] footer a[href*="instagram.com"]{direction:ltr;unicode-bidi:isolate}' +
    'html[dir=rtl] .ch-val,html[dir=rtl] .footer-addr,html[dir=rtl] .footer-copy{unicode-bidi:plaintext}' +
    'html[dir=rtl] .footer-top,html[dir=rtl] .footer-top *,html[dir=rtl] .footer-copy,html[dir=rtl] .ch-val{text-align:right}' +
    '@media (max-width:900px){html[dir=rtl] .footer-copy{text-align:center}}' +
    /* hero karartması metnin olduğu tarafa (sağa) dönsün */
    'html[dir=rtl] .hero-overlay{transform:scaleX(-1)}' +
    /* sabit WhatsApp butonu sola */
    'html[dir=rtl] .wa-float{right:auto;left:24px}' +
    '@media (max-width:900px){html[dir=rtl] .wa-float{left:16px}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();
