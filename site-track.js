/* ==========================================================================
   SITE-TRACK — Google Ads'ten gelen ziyaretçiyi tanır ve WhatsApp mesajını işaretler.
   - Reklam tıklamasıyla gelen adreste gclid / gbraid / wbraid olur. Görülünce 30 gün
     hatırlanır (localStorage'da sadece tarih; kişisel veri yok).
   - Böyle bir ziyaretçi WhatsApp'a gittiğinde mesajın sonuna " · G" eklenir. Kullanıcı
     telefonda hangi rezervasyonun reklamdan geldiğini görür.
   - wa.me linklerine tıklama (yakalama aşamasında) ve window.hgWaUrl(url) ile
     JS'ten açılan WhatsApp adresleri (ör. ana sayfa formu) işaretlenir.
   Her sayfanın <head>'inde yüklenir (rehberlerde ../site-track.js).
   ========================================================================== */
(function () {
  var KEY = 'hg_ads', DAYS = 30, TAG = ' · G', now = Date.now();
  var q = new URLSearchParams(location.search);
  var fromAds = q.has('gclid') || q.has('gbraid') || q.has('wbraid');
  var seen = 0;
  try {
    if (fromAds) localStorage.setItem(KEY, String(now));
    seen = +localStorage.getItem(KEY) || 0;
  } catch (e) { seen = fromAds ? now : 0; }
  window.hgFromAds = !!seen && now - seen < DAYS * 864e5;

  /* wa.me adresindeki text parametresine işaret ekler (zaten varsa eklemez).
     URLSearchParams kullanılmıyor: boşluğu "+" yapar, WhatsApp onu "+" olarak gösterir. */
  window.hgWaUrl = function (url) {
    if (!window.hgFromAds || !/wa\.me/.test(url)) return url;
    var m = url.match(/([?&])text=([^&#]*)/);
    var text = m ? decodeURIComponent(m[2].replace(/\+/g, ' ')) : '';
    if (text.slice(-TAG.length) === TAG) return url;
    var next = encodeURIComponent((text || 'Hi') + TAG);
    return m ? url.replace(m[0], m[1] + 'text=' + next) : url + (url.indexOf('?') < 0 ? '?' : '&') + 'text=' + next;
  };

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="wa.me"]');
    if (a) a.href = window.hgWaUrl(a.href);
  }, true);
})();
