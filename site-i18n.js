/* ==========================================================================
   SITE-I18N — her sayfada ortak olan menü + footer metinlerini çevirir
   (üst menüdeki "Call", mobil menü, footer başlıkları ve "About us / Get in touch / Find us").
   Sayfaların kendi metinleri kendi *-data.js dosyalarında; bu dosya sadece
   HTML'e sabit yazılmış ortak parçalar için. Sayfanın en sonunda yüklenir.
   ========================================================================== */
(function () {
  var lang = new URLSearchParams(window.location.search).get('lang');
  if (lang !== 'tr' && lang !== 'ru') return;

  var DICT = {
    'Call':         { tr: 'Ara',        ru: 'Позвонить' },
    'Stay':         { tr: 'Konaklama',  ru: 'Апартаменты' },
    'About':        { tr: 'Hakkımızda', ru: 'О нас' },
    'About us':     { tr: 'Hakkımızda', ru: 'О нас' },
    'Get in touch': { tr: 'Bize ulaşın', ru: 'Связаться с нами' },
    'Find us':      { tr: 'Bizi bulun', ru: 'Как нас найти' },
    'Services':     { tr: 'Hizmetler',  ru: 'Услуги' },
    'Contact':      { tr: 'İletişim',   ru: 'Контакты' },
    'Company':      { tr: 'Şirket',     ru: 'Компания' }
  };

  /* sadece menü ve footer içindeki metinlere dokunur; içerikteki aynı kelimeler etkilenmez */
  document.querySelectorAll('nav, .mobile-nav, footer').forEach(function (root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      var text = node.textContent.trim();
      if (DICT[text]) node.textContent = node.textContent.replace(text, DICT[text][lang]);
    }
  });
})();
