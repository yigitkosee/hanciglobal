/* ==========================================================================
   APARTMENTS DATA — single source of truth for stay-detail.html
   --------------------------------------------------------------------------
   To add/edit an apartment: change ONLY this file. stay-detail.html reads
   the "id" from the URL (stay-detail.html?id=galata-tower) and renders it.

   AMENITIES: grouped by category (from your Airbnb host checklist). All 5
   apartments currently share the same STANDARD_AMENITIES set — if a
   specific apartment is missing an item (e.g. no bathtub mat, no smart
   lock), just delete that key from that apartment's own "amenities" array.

   To add Turkish / Russian text: fill the "tr" / "ru" blocks inside each
   apartment's "translations" object, and the "tr" / "ru" blocks inside
   AMENITY_LABELS below. Empty blocks automatically fall back to English.
   ========================================================================== */

/* single check icon used for every amenity row (matches a clean checklist look) */
const CHECK_ICON = 'M20 6L9 17l-5-5';

/* categories + which items belong to each (order = display order) */
const AMENITY_CATEGORIES = [
  { key: "common",   items: ["wifi","smarttv","ac_heating","portable fan","seating","coffeetable","charging","selfcheckin","blackoutcurtains"] },
  { key: "bedrooms", items: ["freshlinens","pillows","mattressprotector","bedsidelamp","hangers","closet"] },
  { key: "bathrooms",items: ["bathtowels","handtowels","toiletpaper","soap","shampoo","hairdryer","nonslipmat","firstaid"] },
  { key: "kitchen",  items: ["dishwasher","stove","oven","cutlery","cookware","cookingutensils","knifeset","microwave","coffeemaker","fridge","dishsoap","bins","saltpepper"] },
  { key: "dining",   items: ["platesglassware","diningtable","kettle"] },
  { key: "laundry",  items: ["washing machine","detergent","iron"] },
  { key: "safety",   items: ["smartlock","smokealarm","fireextinguisher","emergencycontact"] },
  { key: "extras",   items: ["luggage drop-off","cot","highchair"] }
];

/* the full standard set — used by every apartment below unless overridden */
const STANDARD_AMENITIES = AMENITY_CATEGORIES.flatMap(c => c.items);

/* category + item labels per language. tr/ru left empty on purpose —
   fill them in later, English shows automatically until then. */
const AMENITY_LABELS = {
  en: {
    categories: {
      common:"Common space", bedrooms:"Bedrooms", bathrooms:"Bathrooms", kitchen:"Kitchen",
      dining:"Dining room", laundry:"Laundry", safety:"Safety & entry", extras:"Guest extras"
    },
    categoryNotes: { extras: "Available upon request" },
    items: {
      wifi:"High-speed wifi", smarttv:"Smart TV with Netflix", ac_heating:"Air conditioning & heating",
      "portable fan":"Portable fan",
      seating:"Comfortable seating", coffeetable:"Coffee table & coasters", charging:"Multi-device charging station",
      selfcheckin:"Self check-in instructions", blackoutcurtains:"Blackout curtains",
      freshlinens:"Fresh bed linens & duvet", pillows:"Pillows & pillow protectors", mattressprotector:"Mattress protector",
      bedsidelamp:"Bedside lamps", hangers:"Clothes hangers", closet:"Closet / dresser storage",
      bathtowels:"Bath towels", handtowels:"Hand towels & washcloths", toiletpaper:"Toilet paper (4+ rolls)",
      soap:"Hand soap & lotion", shampoo:"Shampoo & conditioner", hairdryer:"Hair dryer",
      nonslipmat:"Non-slip bath mat", firstaid:"First aid kit",
      dishwasher:"Dishwasher", stove:"Stove / hob", oven:"Oven",
      cutlery:"Full cutlery set", cookware:"Kettle, pots, pans & baking tray", cookingutensils:"Cooking utensils",
      knifeset:"Knife set & chopping boards", microwave:"Microwave, toaster, oven", coffeemaker:"Coffee maker / French press",
      fridge:"Fridge & freezer space", dishsoap:"Dish soap & sponge", bins:"Bin liners & rubbish bins",
      saltpepper:"Salt, pepper & cooking oil",
      platesglassware:"Plates, bowls & glassware", diningtable:"Dining table & chairs", kettle:"Tea, coffee & sugar starter kit",
      "washing machine":"Washing machine", detergent:"Laundry detergent", iron:"Iron & ironing board",
      smartlock:"Smart lock / lockbox", smokealarm:"Smoke & CO alarms", fireextinguisher:"Fire extinguisher",
      emergencycontact:"Emergency contact card",
      "luggage drop-off":"Luggage drop-off", cot:"Baby cot", highchair:"High chair"
    }
  },
  tr: {
    categories: {
      common:"Ortak alan", bedrooms:"Yatak odaları", bathrooms:"Banyolar", kitchen:"Mutfak",
      dining:"Yemek alanı", laundry:"Çamaşır", safety:"Güvenlik ve giriş", extras:"Misafir ekstraları"
    },
    categoryNotes: { extras: "Talep üzerine sağlanır" },
    items: {
      wifi:"Yüksek hızlı wifi", smarttv:"Netflix'li Smart TV", ac_heating:"Klima ve ısıtma",
      "portable fan":"Taşınabilir vantilatör",
      seating:"Konforlu oturma alanı", coffeetable:"Sehpa ve bardak altlıkları", charging:"Çoklu cihaz şarj istasyonu",
      selfcheckin:"Self check-in talimatları", blackoutcurtains:"Karartma perdeleri",
      freshlinens:"Temiz nevresim takımı", pillows:"Yastık ve yastık koruyucuları", mattressprotector:"Yatak koruyucu",
      bedsidelamp:"Başucu lambaları", hangers:"Askılar", closet:"Gardırop / dolap",
      bathtowels:"Banyo havluları", handtowels:"El havluları ve peçeteler", toiletpaper:"Tuvalet kağıdı (4+ rulo)",
      soap:"El sabunu ve losyon", shampoo:"Şampuan ve saç kremi", hairdryer:"Saç kurutma makinesi",
      nonslipmat:"Kaymaz banyo paspası", firstaid:"İlk yardım çantası",
      dishwasher:"Bulaşık makinesi", stove:"Ocak", oven:"Fırın",
      cutlery:"Tam çatal-bıçak takımı", cookware:"Su ısıtıcısı, tencere, tava ve fırın tepsisi", cookingutensils:"Mutfak gereçleri",
      knifeset:"Bıçak seti ve kesme tahtaları", microwave:"Mikrodalga, tost makinesi, fırın", coffeemaker:"Kahve makinesi / French press",
      fridge:"Buzdolabı ve dondurucu alanı", dishsoap:"Bulaşık deterjanı ve sünger", bins:"Çöp poşeti ve çöp kutuları",
      saltpepper:"Tuz, karabiber ve yemeklik yağ",
      platesglassware:"Tabak, kase ve bardaklar", diningtable:"Yemek masası ve sandalyeler", kettle:"Çay, kahve ve şeker başlangıç seti",
      "washing machine":"Çamaşır makinesi", detergent:"Çamaşır deterjanı", iron:"Ütü ve ütü masası",
      smartlock:"Akıllı kilit / kilit kutusu", smokealarm:"Duman ve karbonmonoksit alarmı", fireextinguisher:"Yangın söndürücü",
      emergencycontact:"Acil durum iletişim kartı",
      "luggage drop-off":"Bagaj bırakma", cot:"Bebek yatağı", highchair:"Mama sandalyesi"
    }
  },
  ru: {
    categories: {
      common:"Общее пространство", bedrooms:"Спальни", bathrooms:"Ванные комнаты", kitchen:"Кухня",
      dining:"Столовая", laundry:"Прачечная", safety:"Безопасность и вход", extras:"Дополнительно для гостей"
    },
    categoryNotes: { extras: "Предоставляется по запросу" },
    items: {
      wifi:"Высокоскоростной wifi", smarttv:"Смарт-ТВ с Netflix", ac_heating:"Кондиционер и отопление",
      "portable fan":"Переносной вентилятор",
      seating:"Удобные зоны отдыха", coffeetable:"Журнальный столик и подставки", charging:"Станция для зарядки нескольких устройств",
      selfcheckin:"Инструкции для самостоятельного заезда", blackoutcurtains:"Плотные шторы",
      freshlinens:"Свежее постельное бельё и одеяло", pillows:"Подушки и наволочки", mattressprotector:"Наматрасник",
      bedsidelamp:"Прикроватные лампы", hangers:"Плечики для одежды", closet:"Шкаф / место для хранения",
      bathtowels:"Банные полотенца", handtowels:"Полотенца для рук и салфетки", toiletpaper:"Туалетная бумага (4+ рулона)",
      soap:"Мыло для рук и лосьон", shampoo:"Шампунь и кондиционер", hairdryer:"Фен",
      nonslipmat:"Нескользящий коврик для ванной", firstaid:"Аптечка первой помощи",
      dishwasher:"Посудомоечная машина", stove:"Плита", oven:"Духовка",
      cutlery:"Полный набор столовых приборов", cookware:"Чайник, кастрюли, сковороды и противень", cookingutensils:"Кухонные принадлежности",
      knifeset:"Набор ножей и разделочные доски", microwave:"Микроволновка, тостер, духовка", coffeemaker:"Кофеварка / френч-пресс",
      fridge:"Холодильник и морозильная камера", dishsoap:"Средство для мытья посуды и губка", bins:"Пакеты для мусора и мусорные вёдра",
      saltpepper:"Соль, перец и растительное масло",
      platesglassware:"Тарелки, миски и стаканы", diningtable:"Обеденный стол и стулья", kettle:"Стартовый набор чая, кофе и сахара",
      "washing machine":"Стиральная машина", detergent:"Стиральный порошок", iron:"Утюг и гладильная доска",
      smartlock:"Умный замок / сейф для ключей", smokealarm:"Датчики дыма и угарного газа", fireextinguisher:"Огнетушитель",
      emergencycontact:"Карточка с контактами на случай ЧС",
      "luggage drop-off":"Хранение багажа", cot:"Детская кроватка", highchair:"Стульчик для кормления"
    }
  }
};

function getAmenityLabels(lang) {
  const l = AMENITY_LABELS[lang];
  const en = AMENITY_LABELS.en;
  return {
    categories: { ...en.categories, ...(l ? l.categories : {}) },
    categoryNotes: { ...en.categoryNotes, ...(l ? l.categoryNotes : {}) },
    items: { ...en.items, ...(l ? l.items : {}) }
  };
}

const APARTMENTS = [

  {
    id: "galata-tower",
    airbnbUrl: "https://www.airbnb.co.uk/rooms/1234624841258038203",
    waNumber: "905063335154",
    bedrooms: 2, beds: 3, baths: 1, guests: 5,
    priceFrom: 80, currency: "€",
    images: ["stay1-1.jpg.webp","stay1-2.jpg.webp","stay1-3.jpg.webp","stay1-4.jpg.webp","stay1-5.jpg.webp","stay1-6.jpg.webp","stay1-7.jpg.webp","stay1-8.jpg.webp"],
    amenities: STANDARD_AMENITIES,
    translations: {
      en: {
        location: "Taksim · Galata",
        name: "Galata Tower Heritage Loft With Stunning Views",
        shortDesc: "A beautifully restored historic residence steps from the iconic Galata Tower. Stunning panoramic views, high ceilings, and preserved architectural details — original doors and volta ceilings — blend history with modern comfort.",
        longDesc: "This heritage loft sits in a beautifully restored building just steps from the iconic Galata Tower. High ceilings, original doors and preserved volta ceilings give the space real character, while every modern comfort has been added without disturbing that character. Panoramic views stretch across the rooftops of Galata. Perfect for couples or small families who want to be in the middle of Istanbul's most atmospheric neighbourhood.",
        reviews: [
          {name:"Marie", text:"You'll feel like you're touching the past while enjoying all the modern amenities. Prime location, the apartment was comfortable and the hosts were always reachable."},
          {name:"Sarah", text:"It was right opposite the Galata Tower and walkable to a tram stop. The apartment was super clean and suited us perfectly as a family of 4."}
        ]
      },
      tr: { name: "Galata Kulesi Manzaralı Tarihi Loft", location: "Taksim · Galata",
        shortDesc: "İkonik Galata Kulesi'ne birkaç adım mesafede, güzelce restore edilmiş tarihi bir konut. Muhteşem panoramik manzaralar, yüksek tavanlar ve orijinal kapılar ile volta tavanlar gibi korunmuş mimari detaylar — tarih ile modern konforu bir arada sunar." },
      ru: { location: "Taksim · Galata", name: "Апартаменты с видом на Галатскую башню",
        shortDesc: "Красиво отреставрированные исторические апартаменты в нескольких шагах от Галатской башни. Потрясающие панорамные виды, высокие потолки и сохранившиеся архитектурные детали — сочетание истории с современным комфортом.",
        longDesc: "Эти апартаменты с историей расположены в прекрасно отреставрированном здании всего в нескольких шагах от знаменитой Галатской башни. Высокие потолки, оригинальные двери и сохранившиеся сводчатые потолки придают пространству настоящий характер, а все современные удобства добавлены так, чтобы не нарушить эту атмосферу. Панорамный вид открывается на крыши Галаты. Идеальный вариант для пар или небольших семей, которые хотят оказаться в самом сердце одного из самых атмосферных районов Стамбула." }
    }
  },

  {
    id: "magical-sea-view",
    airbnbUrl: "https://www.airbnb.co.uk/rooms/755682121457369800",
    waNumber: "905063335154",
    bedrooms: 2, beds: 3, baths: 1.5, guests: 8,
    priceFrom: 80, currency: "€",
    images: ["stay2-1.webp","stay2-2.webp","stay2-3.webp","stay2-4.webp","stay2-5.webp","stay2-6.webp","stay2-7.webp","stay2-8.webp"],
    amenities: STANDARD_AMENITIES,
    translations: {
      en: {
        location: "Taksim · Galata",
        name: "Magical Sea View — Only 20 Steps to Galata Tower",
        shortDesc: "Luxurious, refurbished and well-lit — a spectacular Golden Horn view with 2 bedrooms and 1.5 baths in a historical building next to Istanbul's most famous landmark.",
        longDesc: "Refurbished top to bottom and flooded with natural light, this apartment sits just 20 steps from Galata Tower. The living room opens onto a spectacular Golden Horn view. Two bedrooms and one and a half bathrooms make it comfortable for larger groups, and the historical building it sits in adds character you won't find in a new-build.",
        reviews: [
          {name:"Noemi", text:"The apartment is welcoming and spacious — we immediately felt at home! The rooms are large and the view is breathtaking. Highly recommended!"},
          {name:"James", text:"Ideal in location and amenities. From one side you can view the Galata Tower, from the other the Golden Horn. Very walkable with lots of good nightlife and restaurants."}
        ]
      },
      tr: { name: "Büyülü Deniz Manzarası — Galata Kulesi'ne 20 Adım", location: "Taksim · Galata",
        shortDesc: "Lüks, yenilenmiş ve aydınlık — İstanbul'un en ünlü yapısının yanında, 2 yatak odalı ve 1,5 banyolu tarihi binada muhteşem Haliç manzarası." },
      ru: { location: "Taksim · Galata", name: "Волшебный вид на море — 20 шагов до Галатской башни",
        shortDesc: "Роскошные, обновлённые, светлые апартаменты с видом на Золотой Рог. 2 спальни, 1,5 ванных в историческом здании рядом с главной достопримечательностью Стамбула." }
    }
  },

  {
    id: "heritage-street",
    airbnbUrl: "https://www.airbnb.co.uk/rooms/1386135456988178273",
    waNumber: "905063335154",
    bedrooms: 4, beds: 5, baths: 2, guests: 10,
    priceFrom: 150, currency: "€",
    images: ["stay3-1.webp","stay3-2.webp","stay3-3.webp","stay3-4.webp","stay3-5.webp","stay3-6.webp","stay3-7.webp","stay3-8.webp","stay3-9.webp","stay3-10.webp"],
    amenities: STANDARD_AMENITIES,
    translations: {
      en: {
        location: "Beyoğlu · Taksim",
        name: "The Heaven on Heritage Street",
        shortDesc: "Spacious and inviting apartment on one of Istanbul's most famous streets. Steps from vibrant cafes, boutique shops, cultural hotspots and iconic landmarks in a beautifully preserved historic building.",
        longDesc: "Four bedrooms and two bathrooms make this the largest of our apartments — ideal for bigger groups or families travelling together. It sits on one of Istanbul's most famous streets, steps from cafes, boutique shops and cultural landmarks, inside a beautifully preserved historic building.",
        reviews: [
          {name:"Josh", text:"Really nice and convenient place. The location was perfect — close to all the nightlife and tourist areas but the street was a lot more relaxed. Would highly recommend!"},
          {name:"Arigun", text:"The hosts are very friendly and kind. Don't be afraid to ask for help — they are genuinely nice people who have your comfort in mind."}
        ]
      },
      tr: { name: "Tarihi Sokaktaki Cennet", location: "Beyoğlu · Taksim",
        shortDesc: "İstanbul'un en ünlü sokaklarından birinde ferah ve davetkar bir daire. Tarihi binada, canlı kafeler, butik dükkanlar ve ikonik mekânlara yürüme mesafesinde." },
      ru: { location: "Beyoğlu · Taksim", name: "Рай на Исторической улице",
        shortDesc: "Просторные апартаменты на одной из самых известных улиц Стамбула. Кафе, бутики, культурные места — всё рядом в прекрасно сохранившемся историческом здании." }
    }
  },

  {
    id: "golden-horn-hidden-heaven",
    airbnbUrl: "https://www.airbnb.co.uk/rooms/1349242709634643218",
    waNumber: "905063335154",
    bedrooms: 2, beds: 2, baths: 1, guests: 4,
    priceFrom: 60, currency: "€",
    images: ["stay4-1.webp","stay4-2.webp","stay4-3.webp","stay4-4.webp","stay4-5.webp","stay4-6.webp","stay4-7.webp"],
    amenities: STANDARD_AMENITIES,
    translations: {
      en: {
        location: "Taksim · Galata",
        name: "Golden Horn Hidden Heaven",
        shortDesc: "Beautifully preserved Galata apartment where breathtaking Golden Horn views meet timeless elegance. A true retreat blending history, comfort, and an unbeatable location.",
        longDesc: "A quieter, more intimate apartment tucked into a beautifully preserved Galata building. The Golden Horn view is the highlight. Comfortably fits couples or small families, and the location keeps you a short walk from Galata Tower and the metro.",
        reviews: [
          {name:"Jessica", text:"Loved our stay. The view was magical to wake up to. Location was great — close to Galata Tower and a metro line with lots of nearby restaurants. Beds were very comfy."},
          {name:"Oliver", text:"Great communication from the host, very responsive. The area is a great location with lots of cafes and supermarkets nearby. Flat was exactly as described. Would stay again."}
        ]
      },
      tr: { name: "Haliç'in Gizli Cenneti", location: "Taksim · Galata",
        shortDesc: "Nefes kesen Haliç manzaralarının zamansız zarafetle buluştuğu, güzelce korunmuş Galata dairesi. Tarih, konfor ve eşsiz konumu bir arada sunan gerçek bir sığınak." },
      ru: { location: "Taksim · Galata", name: "Тайный рай на Золотом Роге",
        shortDesc: "Прекрасно сохранившиеся апартаменты в Галате с захватывающим видом на Золотой Рог. История, комфорт и непревзойдённое расположение." }
    }
  },

  {
    id: "hidden-oasis",
    airbnbUrl: "https://www.airbnb.co.uk/rooms/1088463429757145807",
    waNumber: "905063335154",
    bedrooms: 2, beds: 3, baths: 1, guests: 5,
    priceFrom: 65, currency: "€",
    images: ["stay5-1.webp","stay5-2.webp","stay5-3.webp","stay5-4.webp","stay5-5.webp","stay5-6.webp"],
    amenities: STANDARD_AMENITIES,
    translations: {
      en: {
        location: "Beyoğlu · Taksim",
        name: "Hidden Oasis: Historic 2BR with Views in Taksim",
        shortDesc: "Charming and cozy flat in the heart of Istanbul. Right between Taksim Square and Galata Tower — the perfect base for your Istanbul adventure.",
        longDesc: "Cozy and full of character, this two-bedroom flat sits right between Taksim Square and Galata Tower — genuinely equidistant from both. A great base for guests who want to explore on foot.",
        reviews: [
          {name:"Alexander", text:"Check-in was easy and smooth. The place was even better than in the photos — clean, warm, and cozy. The area is very central, yet surprisingly quiet. We would definitely stay again."},
          {name:"Pavel", text:"We spent several wonderful days in Istanbul. Check-in was seamless, the apartment perfectly located. The mattresses were very comfortable and the shower pressure excellent."}
        ]
      },
      tr: { name: "Gizli Vaha: Taksim'de Manzaralı Tarihi 2 Yatak Odalı", location: "Beyoğlu · Taksim",
        shortDesc: "İstanbul'un kalbinde büyüleyici ve samimi bir daire. Taksim Meydanı ile Galata Kulesi arasında — İstanbul maceranız için mükemmel üs." },
      ru: { location: "Beyoğlu · Taksim", name: "Скрытый оазис: историческая квартира с видом в Таксиме",
        shortDesc: "Уютная квартира в самом сердце Стамбула. Между площадью Таксим и Галатской башней — идеальная база для вашего стамбульского приключения." }
    }
  }

];

/* Fallback: if a "tr" or "ru" translation block is missing a field, fall back to "en".
   Special case: if that language has a shortDesc but no longDesc, use its own
   shortDesc for the long paragraph too — better than dropping into English mid-page. */
function getApartmentText(apt, lang) {
  const en = apt.translations.en;
  const l = apt.translations[lang] || {};
  const merged = { ...en, ...l };
  if (!l.longDesc) merged.longDesc = l.shortDesc || en.longDesc;
  return merged;
}
