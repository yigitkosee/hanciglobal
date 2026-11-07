/* ==========================================================================
   TAKAS EVLERİ — bina alımı için takasa sunulan 5 ev (7.11.2026).
   - Sayfalar sadece linkle açılır: noindex, menüde/sitemap'te yok, adreslerde rastgele ek.
   - Fiyat yazılmaz (kullanıcı kararı). Kapı numarası yazılmaz; harita yaklaşık konum.
   - Fotoğraflar Drive "Evler" klasöründeki profesyonel/yeni çekimlerden: img/<slug>/NN.jpg (1600 px), NN-s.jpg (800 px).
   ========================================================================== */
const TAKAS_WA = "905336915154";

const TAKAS = {
  "cezayir-45e4": {
    short: "Cezayir Sokağı 4+1",
    title: "Cezayir Sokağı'nda 4+1 Tarihi Daire",
    location: "Firuzağa Mah., Cezayir Sokağı · Beyoğlu",
    photos: 22,
    facts: ["4+1", "1,5 banyo", "Balkon", "Tarihi bina", "Tam eşyalı"],
    intro: "İstanbul'un en bilinen sokaklarından Cezayir Sokağı'nda (Fransız Sokağı), restore edilmiş tarihi bir binada geniş 4+1 daire. Galatasaray, İstiklal Caddesi ve Cihangir birkaç dakika yürüme mesafesinde. Bugün Hancı Global tarafından 10 kişilik bir daire olarak Airbnb'de işletiliyor.",
    highlights: [
      "Sokağın ünlü renkli merdivenlerine bakan balkon",
      "4 yatak odası, ayrı yemek salonu ve oturma odası — büyük aileler ve gruplar için",
      "Yüksek tavanlar, korunmuş tarihi detaylar, yenilenmiş iç mekân",
      "Tam eşyalı ve kısa dönem kiralamada çalışan, kendini kanıtlamış daire"
    ],
    airbnb: "https://www.airbnb.co.uk/rooms/1386135456988178273",
    airbnbName: "The Heaven on Heritage Street",
    geo: [41.03134, 28.97916]
  },
  "bedrettin-76e8": {
    short: "Haliç manzaralı teras katı",
    title: "Haliç Manzaralı Teras Katı 2+1",
    location: "Evliya Çelebi Mah., Bedrettin Sokağı · Beyoğlu (Şişhane)",
    photos: 21,
    facts: ["2+1", "62,5 m² (tapu)", "Teras katı", "Haliç manzarası", "Kat mülkiyetli tapu"],
    intro: "Galata ile Şişhane arasında, binanın teras katında Haliç'e bakan 2+1 daire. Şişhane metro durağı ve Galata Kulesi yürüme mesafesinde. Bugün Hancı Global tarafından Airbnb'de işletiliyor.",
    highlights: [
      "Pencerelerden Haliç ve tarihi yarımada manzarası",
      "Şişhane metrosuna birkaç dakika: Taksim, Levent ve tarihi yarımadaya doğrudan ulaşım",
      "Kat mülkiyetli tapu",
      "Tam eşyalı ve kısa dönem kiralamada çalışan daire"
    ],
    airbnb: "https://www.airbnb.co.uk/rooms/1349242709634643218",
    airbnbName: "Golden Horn Hidden Heaven",
    geo: [41.02840, 28.97160]
  },
  "oasis-c482": {
    short: "Çukurcuma'da yenilenmiş 2+1",
    title: "Çukurcuma'da Baştan Sona Yenilenmiş 2+1",
    location: "Firuzağa Mah., Çukurcuma Caddesi · Beyoğlu",
    photos: 20,
    facts: ["2+1", "Yenilenmiş", "Tam eşyalı", "Turizm kiralaması için bina kararı"],
    intro: "Taksim Meydanı ile Galata Kulesi'nin tam ortasında, Çukurcuma'da baştan sona yenilenmiş 2+1 daire. Cihangir, Galatasaray ve Karaköy yürüme mesafesinde. Bugün Hancı Global tarafından Airbnb'de işletiliyor.",
    highlights: [
      "Binadaki tüm kat maliklerinin oy birliğiyle aldığı, noter onaylı turizm amaçlı kiralama kararı (Mayıs 2024)",
      "Yeni mutfak ve banyo, modern iç mekân",
      "Merkezi ama sakin bir cadde",
      "Tam eşyalı ve kısa dönem kiralamada çalışan daire"
    ],
    airbnb: "https://www.airbnb.co.uk/rooms/1088463429757145807",
    airbnbName: "Hidden Oasis",
    geo: [41.03125, 28.98010]
  },
  "cinar-ce99": {
    short: "Galata manzaralı, kiracılı 2+1",
    title: "Galata Manzaralı, Asansörlü 2+1",
    location: "Firuzağa Mah., Çukurcuma Caddesi · Beyoğlu",
    photos: 19,
    facts: ["2+1", "Asansörlü bina", "Galata manzarası", "Tam eşyalı", "Kiracılı · 1.600 €/ay"],
    intro: "Çukurcuma Caddesi'nde, asansörlü binada Galata manzaralı, tam eşyalı 2+1 daire. Daire şu an aylık 1.600 € kira ile kiracılı — ilk günden düzenli gelir getiriyor.",
    highlights: [
      "Düzenli kira geliri: aylık 1.600 € (yıllık 19.200 €)",
      "Galata Kulesi'ne bakan manzara",
      "Asansörlü bina; geniş salon, açık yemek alanı, ankastre mutfak",
      "Tam eşyalı; görüntüleme kiracıyla önceden randevu ile"
    ],
    rent: "1.600 € / ay",
    geo: [41.03125, 28.98010]
  },
  "glorya-e2bb": {
    short: "Galata Kulesi'nin dibinde 2+1",
    title: "Galata Kulesi'ne 20 Adım, Haliç Manzaralı 2+1",
    location: "Bereketzade Mah., Galata Kulesi Sokağı · Beyoğlu",
    photos: 21,
    facts: ["2+1", "1,5 banyo", "Balkon", "Haliç manzarası", "Tarihi bina"],
    intro: "Galata Kulesi'nin hemen yanında, tarihi bir binada yenilenmiş, gün ışığı alan 2+1 daire. Bir yanda Galata Kulesi, diğer yanda Haliç ve tarihi yarımada manzarası. Bugün Hancı Global tarafından Airbnb'de işletiliyor.",
    highlights: [
      "Pencerelerden Galata Kulesi, salondan Haliç ve tarihi yarımada manzarası",
      "Gece manzaralı balkon",
      "İstanbul'un en çok ziyaret edilen noktalarından birinde, kısa dönem kiralama için güçlü konum",
      "Tam eşyalı ve kısa dönem kiralamada çalışan daire"
    ],
    airbnb: "https://www.airbnb.co.uk/rooms/755682121457369800",
    airbnbName: "Magical Sea View",
    geo: [41.02485, 28.97340]
  }
};
const TAKAS_ORDER = ["cezayir-45e4", "glorya-e2bb", "bedrettin-76e8", "oasis-c482", "cinar-ce99"];
