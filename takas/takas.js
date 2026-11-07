/* Takas evi sayfasını çizer. Her HTML <body data-slug="..."> taşır; veri takas-data.js'te. */
(function () {
  const slug = document.body.dataset.slug;
  const h = TAKAS[slug];
  if (!h) return;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const img = (s, n, size) => `img/${s}/${String(n).padStart(2, "0")}${size === "s" ? "-s" : ""}.jpg`;
  const I = {
    pin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>',
    wa: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>',
    ext: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>',
    x: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    l: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>',
    r: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>'
  };
  const waUrl = `https://wa.me/${TAKAS_WA}?text=${encodeURIComponent(`Merhaba, takas için paylaştığınız "${h.title}" (${h.location}) hakkında bilgi almak istiyorum.`)}`;
  const nums = Array.from({ length: h.photos }, (_, i) => i + 1);

  const others = TAKAS_ORDER.filter(s => s !== slug).map(s => {
    const o = TAKAS[s];
    return `<a class="ocard" href="${s}.html"><img src="${img(s, 1, "s")}" alt="${esc(o.title)}" loading="lazy"><div>${esc(o.short)}<small>${esc(o.location.split("·")[0].trim())}</small></div></a>`;
  }).join("");

  document.getElementById("app").innerHTML = `
  <header class="top"><div class="wrap">
    <a class="brand" href="/"><img src="../logo.jpg" alt="">Hancı Global</a>
    <span class="tag">Takas teklifi · Beyoğlu, İstanbul</span>
  </div></header>

  <section class="hero" data-i="0">
    <img src="${img(slug, 1)}" alt="${esc(h.title)}" fetchpriority="high">
    <span class="count">${h.photos} fotoğraf</span>
    <div class="cap"><div class="wrap">
      <span class="kicker">Takasa açık</span>
      <h1>${esc(h.title)}</h1>
      <div class="loc">${I.pin}${esc(h.location)}</div>
    </div></div>
  </section>

  <main class="wrap">
    <div class="facts">${h.facts.map(f => `<span class="fact${/kira|€/i.test(f) ? " gold" : ""}">${esc(f)}</span>`).join("")}</div>

    <div class="grid2">
      <div>
        <h2>Daire hakkında</h2>
        <p class="intro">${esc(h.intro)}</p>
        <ul class="hl">${h.highlights.map(x => `<li>${I.check}<span>${esc(x)}</span></li>`).join("")}</ul>
      </div>
      <aside class="card">
        ${h.rent ? `<div class="rent"><span>Mevcut kira geliri</span><b>${esc(h.rent)}</b></div>` : ""}
        <h3>Takas için görüşelim</h3>
        <p>Bu daire, satın almak istediğimiz bina için takas teklifimizin parçasıdır. Değer, tapu bilgileri ve görüntüleme için bize yazın.</p>
        <a class="btn btn-wa" href="${waUrl}" target="_blank" rel="noopener">${I.wa}WhatsApp'tan yazın</a>
        ${h.airbnb ? `<a class="btn btn-line" href="${h.airbnb}" target="_blank" rel="noopener">${I.ext}Airbnb ilanını görün</a>` : ""}
        <div class="note">Tapu ve belgeler talep üzerine paylaşılır.</div>
      </aside>
    </div>

    <h2>Fotoğraflar</h2>
    <div class="gallery">${nums.map((n, i) => `<button type="button" data-i="${i}" aria-label="Fotoğraf ${n}"><img src="${img(slug, n, "s")}" alt="${esc(h.title)} — fotoğraf ${n}" loading="lazy"></button>`).join("")}</div>

    <h2>Konum</h2>
    <div class="map" id="map"></div>
    <p class="mapnote">${esc(h.location)} — haritadaki daire yaklaşık konumu gösterir.</p>
  </main>

  <section class="others"><div class="wrap">
    <h2>Takasa sunduğumuz diğer daireler</h2>
    <p class="sub">Hepsi Beyoğlu'nda, birbirine yürüme mesafesinde.</p>
    <div class="orow">${others}</div>
  </div></section>

  <footer>Hancı Global · İstanbul · <a href="${waUrl}" target="_blank" rel="noopener">WhatsApp</a></footer>

  <a class="btn btn-wa wa-float" href="${waUrl}" target="_blank" rel="noopener">${I.wa}WhatsApp'tan yazın</a>

  <div class="lb" id="lb" role="dialog" aria-modal="true" aria-label="Fotoğraf görüntüleyici">
    <img alt="">
    <button class="x" aria-label="Kapat">${I.x}</button>
    <button class="prev" aria-label="Önceki">${I.l}</button>
    <button class="next" aria-label="Sonraki">${I.r}</button>
    <div class="num"></div>
  </div>`;

  // Lightbox
  const lb = document.getElementById("lb"), lbImg = lb.querySelector("img"), lbNum = lb.querySelector(".num");
  let cur = 0;
  const show = i => { cur = (i + h.photos) % h.photos; lbImg.src = img(slug, cur + 1); lbNum.textContent = `${cur + 1} / ${h.photos}`; new Image().src = img(slug, ((cur + 1) % h.photos) + 1); };
  const open = i => { show(i); lb.classList.add("open"); document.body.style.overflow = "hidden"; };
  const close = () => { lb.classList.remove("open"); document.body.style.overflow = ""; };
  document.querySelectorAll("[data-i]").forEach(el => el.addEventListener("click", () => open(+el.dataset.i)));
  lb.querySelector(".x").onclick = close;
  lb.querySelector(".prev").onclick = e => { e.stopPropagation(); show(cur - 1); };
  lb.querySelector(".next").onclick = e => { e.stopPropagation(); show(cur + 1); };
  lb.addEventListener("click", e => { if (e.target === lb) close(); });
  document.addEventListener("keydown", e => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close(); else if (e.key === "ArrowLeft") show(cur - 1); else if (e.key === "ArrowRight") show(cur + 1);
  });
  let x0 = null;
  lb.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", e => {
    if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1)); else if (e.target === lbImg) show(cur + 1);
  });

  // Harita: Leaflet + OpenStreetMap (Google Maps API kullanılmaz), görünür olunca yüklenir
  const mapEl = document.getElementById("map");
  const loadMap = () => {
    const css = document.createElement("link"); css.rel = "stylesheet"; css.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"; document.head.appendChild(css);
    const s = document.createElement("script"); s.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
    s.onload = () => {
      const m = L.map(mapEl, { scrollWheelZoom: false }).setView(h.geo, 16);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap" }).addTo(m);
      L.circle(h.geo, { radius: 120, color: "#B8953A", fillColor: "#B8953A", fillOpacity: .25, weight: 2 }).addTo(m);
    };
    document.head.appendChild(s);
  };
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); loadMap(); } }, { rootMargin: "300px" });
    io.observe(mapEl);
  } else loadMap();
})();
