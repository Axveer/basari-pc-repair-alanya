export type Locale = "tr" | "en" | "de" | "ru";

export const LOCALES: readonly Locale[] = ["tr", "en", "de", "ru"] as const;

export const LOCALE_LABELS: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
  ru: "Русский",
};

export type ServiceId = "technical" | "laptop" | "apple" | "parts";

export interface ServiceItem {
  id: ServiceId;
  title: string;
  short: string;
  bullets: string[];
}

export interface Dict {
  meta: { title: string; description: string };
  nav: { home: string; about: string; services: string; parts: string; blog: string; contact: string };
  topbar: { support: string; landline: string; menu: string; language: string };
  hero: {
    badge: string;
    titleTop: string;
    titleMain: string;
    subtitle: string;
    ctaServices: string;
    ctaContact: string;
    callNow: string;
    tagline: string;
  };
  badges: string[];
  moved: { tag: string; title: string; body: string; cta: string; call: string };
  services: { eyebrow: string; title: string; subtitle: string; items: ServiceItem[]; cta: string };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body1: string;
    body2: string;
    stats: { value: string; label: string }[];
    points: string[];
  };
  parts: { eyebrow: string; title: string; subtitle: string; items: string[]; note: string; cta: string };
  why: { eyebrow: string; title: string; items: { title: string; desc: string }[] };
  blog: { eyebrow: string; title: string; subtitle: string; posts: { tag: string; title: string; excerpt: string }[] };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    supportLabel: string;
    landlineLabel: string;
    addressLabel: string;
    directions: string;
    whatsappCta: string;
    form: {
      name: string;
      namePh: string;
      email: string;
      emailPh: string;
      phone: string;
      phonePh: string;
      service: string;
      servicePh: string;
      message: string;
      messagePh: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      privacy: string;
    };
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactTitle: string;
    languages: string;
    rights: string;
    built: string;
    credit: string;
  };
}

const tr: Dict = {
  meta: {
    title: "Başarı Bilgisayar | Alanya Laptop, PC ve Apple Servisi",
    description:
      "1999'dan beri Alanya'da bilgisayar, laptop, tablet ve Apple ürünleri tamiri. Teknik servis, yedek parça ve hızlı çözüm.",
  },
  nav: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetlerimiz",
    parts: "Yedek Parça",
    blog: "Blog",
    contact: "İletişim",
  },
  topbar: { support: "7/24 Destek Hattı", landline: "Sabit Telefon", menu: "Menü", language: "Dil" },
  hero: {
    badge: "1999'dan beri Alanya'da",
    titleTop: "BAŞARI",
    titleMain: "BİLGİSAYAR - LAPTOP - PC SERVİSİ",
    subtitle: "1999'dan beri bilgisayar, laptop, tablet ve Apple ürünleri tamirinde güvenilir adres.",
    ctaServices: "Hizmetlerimiz",
    ctaContact: "Bize Ulaşın",
    callNow: "Hemen Ara",
    tagline: "Cihazınız sıradan değil, servisi de öyle olmalı.",
  },
  badges: ["Garantili Hizmet", "7/24 Destek", "Ücretsiz Arıza Tespiti", "Orijinal Yedek Parça"],
  moved: {
    tag: "Yeni Adresimiz",
    title: "BAŞARI BİLGİSAYAR TAŞINDI!",
    body: "1999'dan beri bilgisayar, laptop, tablet ve Apple ürünleri tamirinde güvenilir adres olan Başarı Bilgisayar artık yeni yerinde sizlere hizmet veriyor. Aynı kalite, daha güçlü hizmet anlayışıyla sizleri bekliyoruz.",
    cta: "Yol Tarifi Al",
    call: "Bizi Arayın",
  },
  services: {
    eyebrow: "Hizmetlerimiz",
    title: "Cihazınız için tek adres",
    subtitle:
      "Teknik servisten yedek parçaya kadar tüm işlemler kendi atölyemizde, deneyimli teknik ekibimiz tarafından yapılır.",
    items: [
      {
        id: "technical",
        title: "Teknik Servis",
        short: "Deneyimli teknik ekibimizle hızlı ve garantili çözümler.",
        bullets: ["Ücretsiz arıza tespiti", "Anakart ve çip seviyesi onarım", "Format, kurulum ve virüs temizliği"],
      },
      {
        id: "laptop",
        title: "Laptop & Bilgisayar Tamiri",
        short: "Tüm marka ve modellerde bakım, onarım ve yükseltme.",
        bullets: ["Ekran, klavye ve batarya değişimi", "Isınma sorunu ve termal bakım", "SSD / RAM yükseltmesi"],
      },
      {
        id: "apple",
        title: "Tablet & Apple Ürünleri",
        short: "iPad, iPhone, MacBook ve iMac için profesyonel servis.",
        bullets: ["MacBook ve iMac onarımı", "iPhone / iPad ekran ve batarya", "macOS kurulum ve veri aktarımı"],
      },
      {
        id: "parts",
        title: "Yedek Parça & Hızlı Çözüm",
        short: "Orijinal yedek parçalar ve hızlı, kalıcı çözümler.",
        bullets: ["Geniş yedek parça stoğu", "Aynı gün çözüm imkanı", "Uyumlu parça danışmanlığı"],
      },
    ],
    cta: "Bu hizmet için bize yazın",
  },
  about: {
    eyebrow: "Hakkımızda",
    title: "1999'dan beri Alanya'nın teknik servisi",
    lead: "Çeyrek asrı aşan tecrübe, aynı ustalık, yeni adres.",
    body1:
      "Başarı Bilgisayar, 1999 yılından bu yana Alanya'da bilgisayar, laptop, tablet ve Apple ürünleri tamirinde hizmet veriyor. Her cihaz kendi atölyemizde, adım adım kontrol edilerek onarılır.",
    body2:
      "Yerli ve yabancı müşterilerimize Türkçe, İngilizce, Almanca ve Rusça destek veriyoruz. Yeni adresimizde daha geniş atölye ve daha güçlü yedek parça stoğu ile aynı kaliteyi sürdürüyoruz.",
    stats: [
      { value: "1999", label: "Kuruluş yılı" },
      { value: "25+", label: "Yıllık tecrübe" },
      { value: "4", label: "Dilde destek" },
      { value: "7/24", label: "Destek hattı" },
    ],
    points: [
      "Şeffaf fiyatlandırma, işlem öncesi bilgilendirme",
      "Verilerinizin güvenliği ve gizliliği",
      "Yapılan işlemlerde garanti",
      "Turistler için çok dilli hızlı destek",
    ],
  },
  parts: {
    eyebrow: "Yedek Parça",
    title: "Orijinal ve uyumlu yedek parça",
    subtitle: "Aradığınız parçayı stoğumuzda bulamazsak en kısa sürede temin ediyoruz.",
    items: [
      "Laptop ekranı & panel",
      "Batarya & pil",
      "Klavye & touchpad",
      "Şarj adaptörü & DC jack",
      "SSD & harddisk",
      "RAM & bellek",
      "Fan & soğutma sistemi",
      "Menteşe & kasa parçaları",
      "Ekran kablosu (flex)",
      "MacBook parçaları",
      "Tablet dokunmatik cam",
      "Anakart bileşenleri",
    ],
    note: "Aradığınız parça listede yok mu? Model bilgisiyle bize yazın, birlikte doğru parçayı bulalım.",
    cta: "Parça Sorgula",
  },
  why: {
    eyebrow: "Neden Başarı",
    title: "Servisiniz de sıradan olmasın",
    items: [
      { title: "Ücretsiz arıza tespiti", desc: "Cihazınızı inceleyip onay almadan işlem yapmıyoruz." },
      { title: "Garantili işçilik", desc: "Yapılan tüm onarımlar ve değişen parçalar garanti kapsamında." },
      { title: "Hızlı teslim", desc: "Basit arızalarda çoğu zaman aynı gün çözüm sağlıyoruz." },
      { title: "Deneyimli ekip", desc: "1999'dan bu yana binlerce cihazın onarım tecrübesi." },
      { title: "Çok dilli destek", desc: "Türkçe, İngilizce, Almanca ve Rusça iletişim." },
      { title: "Veri güvenliği", desc: "Onarım öncesi yedekleme ve gizlilik önceliğimiz." },
    ],
  },
  blog: {
    eyebrow: "Blog",
    title: "Teknik ipuçları",
    subtitle: "Cihazınızın ömrünü uzatacak, servise gelmeden önce işinize yarayacak kısa notlar.",
    posts: [
      {
        tag: "Bakım",
        title: "Laptopunuz aşırı ısınıyorsa",
        excerpt:
          "Fan sesi arttı, cihaz kapanıyorsa büyük olasılıkla toz ve kuruyan termal pasta suçlu. Yılda bir kez termal bakım, performansı belirgin şekilde geri kazandırır.",
      },
      {
        tag: "Yükseltme",
        title: "SSD yükseltmesi ne kadar fark eder?",
        excerpt:
          "Eski bir laptopta HDD'den SSD'ye geçiş, açılış ve program sürelerini kat kat kısaltır. Çoğu modelde en ekonomik hızlanma yöntemidir.",
      },
      {
        tag: "Acil",
        title: "Cihazınıza sıvı döktüyseniz",
        excerpt:
          "Hemen kapatın, şarjı çıkarın ve açmayı denemeyin. Cihazı ters çevirip kurumaya bırakın ve en kısa sürede servise getirin; erken müdahale anakartı kurtarır.",
      },
    ],
  },
  contact: {
    eyebrow: "İletişim",
    title: "Bize ulaşın",
    subtitle: "Arayın, WhatsApp'tan yazın ya da formu doldurun; en kısa sürede dönüş yapıyoruz.",
    supportLabel: "7/24 Destek Hattı",
    landlineLabel: "Sabit Telefon",
    addressLabel: "Adresimiz",
    directions: "Yol tarifi",
    whatsappCta: "WhatsApp'tan Yaz",
    form: {
      name: "Adınız Soyadınız",
      namePh: "Adınız Soyadınız",
      email: "E-posta",
      emailPh: "E-posta adresiniz",
      phone: "Telefon",
      phonePh: "Telefon numaranız",
      service: "Hizmet",
      servicePh: "Hizmet Seçiniz",
      message: "Mesajınız",
      messagePh: "Cihazınız ve sorununuz hakkında kısaca bilgi verin...",
      submit: "Gönder",
      sending: "Gönderiliyor...",
      success: "Mesajınız WhatsApp üzerinden iletilmek üzere hazırlandı.",
      error: "Lütfen adınızı, telefonunuzu ve mesajınızı doldurun.",
      privacy: "Bilgileriniz yalnızca size dönüş yapmak için kullanılır.",
    },
  },
  footer: {
    tagline: "Alanya'da bilgisayar, laptop, tablet ve Apple ürünleri teknik servisi.",
    quickLinks: "Hızlı Bağlantılar",
    contactTitle: "İletişim",
    languages: "Hizmet dillerimiz",
    rights: "Tüm hakları saklıdır.",
    built: "Cihazınız sıradan değil, servisi de öyle olmalı.",
    credit: "Tasarım ve geliştirme:",
  },
};

const en: Dict = {
  meta: {
    title: "Başarı Bilgisayar | Laptop, PC & Apple Repair in Alanya",
    description:
      "Trusted computer, laptop, tablet and Apple repair in Alanya since 1999. Technical service, spare parts and fast solutions.",
  },
  nav: { home: "Home", about: "About", services: "Services", parts: "Spare Parts", blog: "Blog", contact: "Contact" },
  topbar: { support: "24/7 Support Line", landline: "Landline", menu: "Menu", language: "Language" },
  hero: {
    badge: "In Alanya since 1999",
    titleTop: "BAŞARI",
    titleMain: "COMPUTER - LAPTOP - PC SERVICE",
    subtitle: "Your trusted address for computer, laptop, tablet and Apple repairs since 1999.",
    ctaServices: "Our Services",
    ctaContact: "Contact Us",
    callNow: "Call Now",
    tagline: "Your device isn't ordinary — its service shouldn't be either.",
  },
  badges: ["Warranted Service", "24/7 Support", "Free Diagnosis", "Original Spare Parts"],
  moved: {
    tag: "Our New Address",
    title: "BAŞARI BİLGİSAYAR HAS MOVED!",
    body: "Başarı Bilgisayar, the trusted name in computer, laptop, tablet and Apple repair since 1999, now serves you at a new location. Same quality, with an even stronger service setup.",
    cta: "Get Directions",
    call: "Call Us",
  },
  services: {
    eyebrow: "Our Services",
    title: "One address for every device",
    subtitle:
      "From technical service to spare parts, everything is handled in our own workshop by an experienced technical team.",
    items: [
      {
        id: "technical",
        title: "Technical Service",
        short: "Fast, warranted solutions from our experienced technicians.",
        bullets: ["Free fault diagnosis", "Motherboard & chip-level repair", "OS install, setup and virus removal"],
      },
      {
        id: "laptop",
        title: "Laptop & Computer Repair",
        short: "Maintenance, repair and upgrades for all brands and models.",
        bullets: ["Screen, keyboard and battery replacement", "Overheating and thermal service", "SSD / RAM upgrades"],
      },
      {
        id: "apple",
        title: "Tablet & Apple Products",
        short: "Professional service for iPad, iPhone, MacBook and iMac.",
        bullets: ["MacBook and iMac repair", "iPhone / iPad screen and battery", "macOS setup and data transfer"],
      },
      {
        id: "parts",
        title: "Spare Parts & Fast Solutions",
        short: "Original spare parts and fast, lasting solutions.",
        bullets: ["Wide spare parts stock", "Same-day solutions when possible", "Advice on compatible parts"],
      },
    ],
    cta: "Ask about this service",
  },
  about: {
    eyebrow: "About Us",
    title: "Alanya's technical service since 1999",
    lead: "Over a quarter century of experience, same craftsmanship, new address.",
    body1:
      "Başarı Bilgisayar has been repairing computers, laptops, tablets and Apple products in Alanya since 1999. Every device is diagnosed and repaired step by step in our own workshop.",
    body2:
      "We support local residents and visitors in Turkish, English, German and Russian. At our new address we keep the same quality with a larger workshop and a stronger spare parts stock.",
    stats: [
      { value: "1999", label: "Established" },
      { value: "25+", label: "Years of experience" },
      { value: "4", label: "Languages spoken" },
      { value: "24/7", label: "Support line" },
    ],
    points: [
      "Transparent pricing, always confirmed before work starts",
      "Your data kept safe and private",
      "Warranty on the work we do",
      "Fast multilingual support for tourists",
    ],
  },
  parts: {
    eyebrow: "Spare Parts",
    title: "Original and compatible spare parts",
    subtitle: "If the part you need isn't in stock, we source it as quickly as possible.",
    items: [
      "Laptop screens & panels",
      "Batteries",
      "Keyboards & touchpads",
      "Chargers & DC jacks",
      "SSD & hard drives",
      "RAM & memory",
      "Fans & cooling systems",
      "Hinges & casing parts",
      "Display flex cables",
      "MacBook parts",
      "Tablet touch glass",
      "Motherboard components",
    ],
    note: "Can't find your part in the list? Send us your model and we'll find the right one together.",
    cta: "Ask for a Part",
  },
  why: {
    eyebrow: "Why Başarı",
    title: "Service that matches your device",
    items: [
      { title: "Free diagnosis", desc: "We inspect your device and never start work without your approval." },
      { title: "Warranted workmanship", desc: "All repairs and replaced parts are covered by warranty." },
      { title: "Fast turnaround", desc: "Simple faults are often solved the very same day." },
      { title: "Experienced team", desc: "Thousands of devices repaired since 1999." },
      { title: "Multilingual support", desc: "Turkish, English, German and Russian." },
      { title: "Data safety", desc: "Backup before repair and privacy come first." },
    ],
  },
  blog: {
    eyebrow: "Blog",
    title: "Technical tips",
    subtitle: "Short notes that extend the life of your device — useful before you even visit us.",
    posts: [
      {
        tag: "Maintenance",
        title: "If your laptop is overheating",
        excerpt:
          "Loud fans and sudden shutdowns usually mean dust and dried thermal paste. A yearly thermal service brings performance noticeably back.",
      },
      {
        tag: "Upgrade",
        title: "How much difference does an SSD make?",
        excerpt:
          "Moving from HDD to SSD on an older laptop cuts boot and app loading times dramatically. It's the most affordable speed boost for most models.",
      },
      {
        tag: "Urgent",
        title: "If you spilled liquid on your device",
        excerpt:
          "Shut it down immediately, unplug the charger and don't try to turn it on. Turn it upside down to dry and bring it in fast — early action saves the motherboard.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Get in touch",
    subtitle: "Call us, message us on WhatsApp or fill in the form — we reply as soon as possible.",
    supportLabel: "24/7 Support Line",
    landlineLabel: "Landline",
    addressLabel: "Our Address",
    directions: "Directions",
    whatsappCta: "Message on WhatsApp",
    form: {
      name: "Full Name",
      namePh: "Your full name",
      email: "Email",
      emailPh: "Your email address",
      phone: "Phone",
      phonePh: "Your phone number",
      service: "Service",
      servicePh: "Select a service",
      message: "Message",
      messagePh: "Tell us briefly about your device and the problem...",
      submit: "Send",
      sending: "Sending...",
      success: "Your message is ready to be sent via WhatsApp.",
      error: "Please fill in your name, phone and message.",
      privacy: "Your details are used only to get back to you.",
    },
  },
  footer: {
    tagline: "Computer, laptop, tablet and Apple technical service in Alanya.",
    quickLinks: "Quick Links",
    contactTitle: "Contact",
    languages: "Languages we speak",
    rights: "All rights reserved.",
    built: "Your device isn't ordinary — its service shouldn't be either.",
    credit: "Designed & built by",
  },
};

const de: Dict = {
  meta: {
    title: "Başarı Bilgisayar | Laptop-, PC- & Apple-Reparatur in Alanya",
    description:
      "Seit 1999 zuverlässige Reparatur von Computern, Laptops, Tablets und Apple-Geräten in Alanya. Technischer Service, Ersatzteile und schnelle Lösungen.",
  },
  nav: {
    home: "Startseite",
    about: "Über uns",
    services: "Leistungen",
    parts: "Ersatzteile",
    blog: "Blog",
    contact: "Kontakt",
  },
  topbar: { support: "24/7 Support-Hotline", landline: "Festnetz", menu: "Menü", language: "Sprache" },
  hero: {
    badge: "Seit 1999 in Alanya",
    titleTop: "BAŞARI",
    titleMain: "COMPUTER - LAPTOP - PC SERVICE",
    subtitle: "Seit 1999 Ihre vertrauenswürdige Adresse für Computer-, Laptop-, Tablet- und Apple-Reparaturen.",
    ctaServices: "Unsere Leistungen",
    ctaContact: "Kontakt",
    callNow: "Jetzt anrufen",
    tagline: "Ihr Gerät ist nicht gewöhnlich – der Service sollte es auch nicht sein.",
  },
  badges: ["Service mit Garantie", "24/7 Support", "Kostenlose Fehlerdiagnose", "Original-Ersatzteile"],
  moved: {
    tag: "Unsere neue Adresse",
    title: "BAŞARI BİLGİSAYAR IST UMGEZOGEN!",
    body: "Başarı Bilgisayar, seit 1999 die vertrauenswürdige Adresse für Computer-, Laptop-, Tablet- und Apple-Reparaturen, ist jetzt an einem neuen Standort für Sie da. Gleiche Qualität, noch stärkerer Service.",
    cta: "Route anzeigen",
    call: "Rufen Sie uns an",
  },
  services: {
    eyebrow: "Unsere Leistungen",
    title: "Eine Adresse für jedes Gerät",
    subtitle:
      "Vom technischen Service bis zum Ersatzteil: alles in unserer eigenen Werkstatt, durch ein erfahrenes Technikerteam.",
    items: [
      {
        id: "technical",
        title: "Technischer Service",
        short: "Schnelle Lösungen mit Garantie von erfahrenen Technikern.",
        bullets: ["Kostenlose Fehlerdiagnose", "Mainboard- und Chip-Reparatur", "Installation und Virenentfernung"],
      },
      {
        id: "laptop",
        title: "Laptop- & Computerreparatur",
        short: "Wartung, Reparatur und Aufrüstung aller Marken und Modelle.",
        bullets: ["Display-, Tastatur- und Akkuwechsel", "Überhitzung und Thermal-Service", "SSD- / RAM-Aufrüstung"],
      },
      {
        id: "apple",
        title: "Tablet & Apple-Produkte",
        short: "Professioneller Service für iPad, iPhone, MacBook und iMac.",
        bullets: ["MacBook- und iMac-Reparatur", "iPhone- / iPad-Display und Akku", "macOS-Setup und Datenübertragung"],
      },
      {
        id: "parts",
        title: "Ersatzteile & schnelle Lösung",
        short: "Original-Ersatzteile und schnelle, dauerhafte Lösungen.",
        bullets: ["Großes Ersatzteillager", "Lösung oft am selben Tag", "Beratung zu passenden Teilen"],
      },
    ],
    cta: "Zu dieser Leistung schreiben",
  },
  about: {
    eyebrow: "Über uns",
    title: "Alanyas technischer Service seit 1999",
    lead: "Über ein Vierteljahrhundert Erfahrung, gleiche Handwerkskunst, neue Adresse.",
    body1:
      "Başarı Bilgisayar repariert seit 1999 Computer, Laptops, Tablets und Apple-Produkte in Alanya. Jedes Gerät wird in unserer eigenen Werkstatt Schritt für Schritt geprüft und repariert.",
    body2:
      "Wir betreuen Einheimische und Gäste auf Türkisch, Englisch, Deutsch und Russisch. An unserer neuen Adresse bieten wir dieselbe Qualität mit größerer Werkstatt und stärkerem Ersatzteillager.",
    stats: [
      { value: "1999", label: "Gegründet" },
      { value: "25+", label: "Jahre Erfahrung" },
      { value: "4", label: "Sprachen" },
      { value: "24/7", label: "Support-Hotline" },
    ],
    points: [
      "Transparente Preise, Freigabe vor jeder Arbeit",
      "Ihre Daten bleiben sicher und privat",
      "Garantie auf unsere Arbeit",
      "Schneller mehrsprachiger Support für Touristen",
    ],
  },
  parts: {
    eyebrow: "Ersatzteile",
    title: "Original- und kompatible Ersatzteile",
    subtitle: "Ist das gesuchte Teil nicht vorrätig, besorgen wir es schnellstmöglich.",
    items: [
      "Laptop-Displays & Panels",
      "Akkus & Batterien",
      "Tastaturen & Touchpads",
      "Netzteile & DC-Buchsen",
      "SSD & Festplatten",
      "RAM & Speicher",
      "Lüfter & Kühlsysteme",
      "Scharniere & Gehäuseteile",
      "Display-Flexkabel",
      "MacBook-Teile",
      "Tablet-Touchglas",
      "Mainboard-Komponenten",
    ],
    note: "Ihr Teil ist nicht in der Liste? Schicken Sie uns Ihr Modell – wir finden das richtige Teil.",
    cta: "Teil anfragen",
  },
  why: {
    eyebrow: "Warum Başarı",
    title: "Ein Service auf Höhe Ihres Geräts",
    items: [
      { title: "Kostenlose Diagnose", desc: "Wir prüfen Ihr Gerät und arbeiten nur nach Ihrer Freigabe." },
      { title: "Garantierte Arbeit", desc: "Alle Reparaturen und getauschten Teile sind abgedeckt." },
      { title: "Schnelle Bearbeitung", desc: "Einfache Defekte lösen wir oft noch am selben Tag." },
      { title: "Erfahrenes Team", desc: "Tausende reparierte Geräte seit 1999." },
      { title: "Mehrsprachig", desc: "Türkisch, Englisch, Deutsch und Russisch." },
      { title: "Datensicherheit", desc: "Backup vor der Reparatur und Diskretion haben Priorität." },
    ],
  },
  blog: {
    eyebrow: "Blog",
    title: "Technische Tipps",
    subtitle: "Kurze Hinweise, die die Lebensdauer Ihres Geräts verlängern – schon vor Ihrem Besuch.",
    posts: [
      {
        tag: "Wartung",
        title: "Wenn Ihr Laptop überhitzt",
        excerpt:
          "Laute Lüfter und plötzliches Abschalten deuten meist auf Staub und ausgetrocknete Wärmeleitpaste hin. Ein jährlicher Thermal-Service bringt die Leistung deutlich zurück.",
      },
      {
        tag: "Aufrüstung",
        title: "Wie viel bringt eine SSD?",
        excerpt:
          "Der Wechsel von HDD auf SSD verkürzt Startzeiten und Programmladezeiten enorm. Für die meisten Modelle die günstigste Beschleunigung.",
      },
      {
        tag: "Notfall",
        title: "Flüssigkeit über dem Gerät verschüttet?",
        excerpt:
          "Sofort ausschalten, Ladegerät abziehen und nicht wieder einschalten. Gerät umgedreht trocknen lassen und schnell zu uns bringen – schnelles Handeln retten das Mainboard.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Schreiben Sie uns",
    subtitle: "Rufen Sie an, schreiben Sie per WhatsApp oder nutzen Sie das Formular – wir antworten schnell.",
    supportLabel: "24/7 Support-Hotline",
    landlineLabel: "Festnetz",
    addressLabel: "Unsere Adresse",
    directions: "Route",
    whatsappCta: "Per WhatsApp schreiben",
    form: {
      name: "Vor- und Nachname",
      namePh: "Ihr Name",
      email: "E-Mail",
      emailPh: "Ihre E-Mail-Adresse",
      phone: "Telefon",
      phonePh: "Ihre Telefonnummer",
      service: "Leistung",
      servicePh: "Leistung wählen",
      message: "Nachricht",
      messagePh: "Beschreiben Sie kurz Ihr Gerät und das Problem...",
      submit: "Senden",
      sending: "Wird gesendet...",
      success: "Ihre Nachricht ist zum Senden per WhatsApp vorbereitet.",
      error: "Bitte Name, Telefon und Nachricht ausfüllen.",
      privacy: "Ihre Angaben nutzen wir nur, um Sie zu kontaktieren.",
    },
  },
  footer: {
    tagline: "Technischer Service für Computer, Laptops, Tablets und Apple-Geräte in Alanya.",
    quickLinks: "Schnellzugriff",
    contactTitle: "Kontakt",
    languages: "Unsere Sprachen",
    rights: "Alle Rechte vorbehalten.",
    built: "Ihr Gerät ist nicht gewöhnlich – der Service sollte es auch nicht sein.",
    credit: "Gestaltet & entwickelt von",
  },
};

const ru: Dict = {
  meta: {
    title: "Başarı Bilgisayar | Ремонт ноутбуков, ПК и Apple в Алании",
    description:
      "С 1999 года надёжный ремонт компьютеров, ноутбуков, планшетов и техники Apple в Алании. Сервис, запчасти и быстрые решения.",
  },
  nav: {
    home: "Главная",
    about: "О нас",
    services: "Услуги",
    parts: "Запчасти",
    blog: "Блог",
    contact: "Контакты",
  },
  topbar: { support: "Поддержка 24/7", landline: "Городской телефон", menu: "Меню", language: "Язык" },
  hero: {
    badge: "В Алании с 1999 года",
    titleTop: "BAŞARI",
    titleMain: "КОМПЬЮТЕРЫ - НОУТБУКИ - СЕРВИС ПК",
    subtitle: "С 1999 года надёжный адрес для ремонта компьютеров, ноутбуков, планшетов и техники Apple.",
    ctaServices: "Наши услуги",
    ctaContact: "Связаться",
    callNow: "Позвонить",
    tagline: "Ваше устройство не обычное — и сервис не должен быть обычным.",
  },
  badges: ["Гарантия на работы", "Поддержка 24/7", "Бесплатная диагностика", "Оригинальные запчасти"],
  moved: {
    tag: "Наш новый адрес",
    title: "BAŞARI BİLGİSAYAR ПЕРЕЕХАЛ!",
    body: "Başarı Bilgisayar — надёжный адрес по ремонту компьютеров, ноутбуков, планшетов и техники Apple с 1999 года — теперь работает на новом месте. То же качество и ещё более сильный сервис.",
    cta: "Построить маршрут",
    call: "Позвоните нам",
  },
  services: {
    eyebrow: "Наши услуги",
    title: "Один адрес для любой техники",
    subtitle: "От диагностики до запчастей — все работы выполняет наша опытная команда в собственной мастерской.",
    items: [
      {
        id: "technical",
        title: "Технический сервис",
        short: "Быстрые решения с гарантией от опытных мастеров.",
        bullets: ["Бесплатная диагностика", "Ремонт материнских плат и чипов", "Установка систем и удаление вирусов"],
      },
      {
        id: "laptop",
        title: "Ремонт ноутбуков и ПК",
        short: "Обслуживание, ремонт и апгрейд любых марок и моделей.",
        bullets: ["Замена экрана, клавиатуры, батареи", "Перегрев и замена термопасты", "Апгрейд SSD / RAM"],
      },
      {
        id: "apple",
        title: "Планшеты и техника Apple",
        short: "Профессиональный сервис iPad, iPhone, MacBook и iMac.",
        bullets: ["Ремонт MacBook и iMac", "Экран и батарея iPhone / iPad", "Установка macOS и перенос данных"],
      },
      {
        id: "parts",
        title: "Запчасти и быстрое решение",
        short: "Оригинальные запчасти и надёжный результат.",
        bullets: ["Большой склад запчастей", "Часто решаем в тот же день", "Подбор совместимых деталей"],
      },
    ],
    cta: "Написать об этой услуге",
  },
  about: {
    eyebrow: "О нас",
    title: "Технический сервис Алании с 1999 года",
    lead: "Более четверти века опыта, то же мастерство, новый адрес.",
    body1:
      "Başarı Bilgisayar с 1999 года ремонтирует компьютеры, ноутбуки, планшеты и технику Apple в Алании. Каждое устройство проверяется и ремонтируется в нашей мастерской шаг за шагом.",
    body2:
      "Мы общаемся с местными жителями и гостями города на турецком, английском, немецком и русском языках. На новом адресе — та же качество, больше мастерская и больше запчастей.",
    stats: [
      { value: "1999", label: "Год основания" },
      { value: "25+", label: "Лет опыта" },
      { value: "4", label: "Языка общения" },
      { value: "24/7", label: "Линия поддержки" },
    ],
    points: [
      "Прозрачные цены и согласование до начала работ",
      "Безопасность и конфиденциальность ваших данных",
      "Гарантия на выполненные работы",
      "Быстрая многоязычная поддержка для туристов",
    ],
  },
  parts: {
    eyebrow: "Запчасти",
    title: "Оригинальные и совместимые запчасти",
    subtitle: "Если нужной детали нет в наличии, мы привезём её в кратчайшие сроки.",
    items: [
      "Матрицы и экраны ноутбуков",
      "Аккумуляторы",
      "Клавиатуры и тачпады",
      "Зарядные устройства и разъёмы",
      "SSD и жёсткие диски",
      "Оперативная память",
      "Вентиляторы и система охлаждения",
      "Петли и детали корпуса",
      "Шлейфы матрицы",
      "Детали MacBook",
      "Тачскрин для планшетов",
      "Компоненты материнских плат",
    ],
    note: "Не нашли нужную деталь? Напишите нам модель — подберём подходящую вместе.",
    cta: "Запросить деталь",
  },
  why: {
    eyebrow: "Почему Başarı",
    title: "Сервис под уровень вашей техники",
    items: [
      { title: "Бесплатная диагностика", desc: "Осматриваем устройство и не начинаем работы без вашего согласия." },
      { title: "Гарантия на работы", desc: "На все ремонты и заменённые детали действует гарантия." },
      { title: "Быстрый ремонт", desc: "Простые неисправности часто устраняем в тот же день." },
      { title: "Опытная команда", desc: "Тысячи отремонтированных устройств с 1999 года." },
      { title: "Многоязычная поддержка", desc: "Турецкий, английский, немецкий и русский." },
      { title: "Сохранность данных", desc: "Резервная копия до ремонта и полная конфиденциальность." },
    ],
  },
  blog: {
    eyebrow: "Блог",
    title: "Технические советы",
    subtitle: "Короткие заметки, которые продлят жизнь вашей технике ещё до визита в сервис.",
    posts: [
      {
        tag: "Обслуживание",
        title: "Если ноутбук перегревается",
        excerpt:
          "Громкий вентилятор и внезапные выключения обычно означают пыль и засохшую термопасту. Чистка раз в год заметно возвращает производительность.",
      },
      {
        tag: "Апгрейд",
        title: "Насколько помогает SSD?",
        excerpt:
          "Переход с HDD на SSD в старом ноутбуке многократно ускоряет загрузку системы и программ. Самый доступный способ ускорения.",
      },
      {
        tag: "Срочно",
        title: "Если на устройство попала жидкость",
        excerpt:
          "Сразу выключите, отсоедините зарядку и не включайте снова. Переверните для просушки и как можно быстрее привезите в сервис — это спасает материнскую плату.",
      },
    ],
  },
  contact: {
    eyebrow: "Контакты",
    title: "Свяжитесь с нами",
    subtitle: "Позвоните, напишите в WhatsApp или заполните форму — ответим как можно быстрее.",
    supportLabel: "Линия поддержки 24/7",
    landlineLabel: "Городской телефон",
    addressLabel: "Наш адрес",
    directions: "Маршрут",
    whatsappCta: "Написать в WhatsApp",
    form: {
      name: "Имя и фамилия",
      namePh: "Ваше имя",
      email: "E-mail",
      emailPh: "Ваш e-mail",
      phone: "Телефон",
      phonePh: "Ваш номер телефона",
      service: "Услуга",
      servicePh: "Выберите услугу",
      message: "Сообщение",
      messagePh: "Кратко опишите устройство и проблему...",
      submit: "Отправить",
      sending: "Отправка...",
      success: "Сообщение подготовлено для отправки через WhatsApp.",
      error: "Пожалуйста, заполните имя, телефон и сообщение.",
      privacy: "Ваши данные используются только для ответа вам.",
    },
  },
  footer: {
    tagline: "Технический сервис компьютеров, ноутбуков, планшетов и техники Apple в Алании.",
    quickLinks: "Быстрые ссылки",
    contactTitle: "Контакты",
    languages: "Языки обслуживания",
    rights: "Все права защищены.",
    built: "Ваше устройство не обычное — и сервис не должен быть обычным.",
    credit: "Дизайн и разработка:",
  },
};

export const translations: Record<Locale, Dict> = { tr, en, de, ru };

export const HTML_LANG: Record<Locale, string> = { tr: "tr", en: "en", de: "de", ru: "ru" };
