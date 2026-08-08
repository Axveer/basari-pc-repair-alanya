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
  seoTitle: string;
  seoDescription: string;
  intro: string;
  body: string;
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
  services: { eyebrow: string; title: string; subtitle: string; items: ServiceItem[]; cta: string; more: string };
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
  wizard: {
    eyebrow: string;
    title: string;
    subtitle: string;
    deviceTitle: string;
    issueTitle: string;
    summaryTitle: string;
    devices: Record<"laptop" | "macbook" | "pc" | "tablet", string>;
    issues: Record<"screen" | "liquid" | "power" | "slow", string>;
    waIntro: string;
    cta: string;
    call: string;
    back: string;
    restart: string;
  };
  servicePage: { included: string; ctaTitle: string; ctaBody: string; otherServices: string };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    supportLabel: string;
    landlineLabel: string;
    addressLabel: string;
    hoursLabel: string;
    hoursValue: string;
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
    title: "Alanya Laptop & PC Tamiri | Başarı Bilgisayar (1999'dan Beri)",
    description:
      "Alanya'da laptop, PC, MacBook tamiri ve yedek parça servisi. Ücretsiz arıza tespiti, garantili çip onarımı ve hızlı teslimat. Kadıpaşa Mahallesinde hizmetinizdeyiz.",
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
        seoTitle: "Teknik Servis Alanya | Ücretsiz Arıza Tespiti | Başarı Bilgisayar",
        seoDescription:
          "Alanya'da bilgisayar teknik servisi: ücretsiz arıza tespiti, anakart ve çip seviyesi onarım, format, kurulum ve virüs temizliği. 1999'dan beri garantili hizmet.",
        intro:
          "Bilgisayarınız açılmıyor, donuyor ya da hata mı veriyor? Her cihaza kendi atölyemizde ücretsiz arıza tespiti yapıyor, onayınız olmadan hiçbir işleme başlamıyoruz.",
        body:
          "Anakart ve çip seviyesi onarım, sıvı teması sonrası kurtarma, işletim sistemi kurulumu, virüs temizliği ve veri kurtarma işlemlerinin tamamı kendi atölyemizde yapılır. 1999'dan beri Alanya'da binlerce cihazı garantili olarak onardık.",
      },
      {
        id: "laptop",
        title: "Laptop & Bilgisayar Tamiri",
        short: "Tüm marka ve modellerde bakım, onarım ve yükseltme.",
        bullets: ["Ekran, klavye ve batarya değişimi", "Isınma sorunu ve termal bakım", "SSD / RAM yükseltmesi"],
        seoTitle: "Alanya Laptop Tamiri | Ekran Değişimi & SSD Yükseltme | Başarı Bilgisayar",
        seoDescription:
          "Alanya'da tüm marka laptop tamiri: ekran değişimi, klavye ve batarya değişimi, ısınma sorunu, termal bakım, SSD ve RAM yükseltme. Hızlı ve garantili.",
        intro:
          "Kırık ekran, bozuk klavye, şarj sorunu ya da yavaşlayan bir laptop — tüm marka ve modellerde bakım, onarım ve yükseltmeyi çoğu zaman aynı gün tamamlıyoruz.",
        body:
          "Laptop ekran değişimi, menteşe onarımı, şarj soketi (DC jack) değişimi, fan temizliği ve termal macun yenileme, HDD'den SSD'ye geçiş ve RAM yükseltme her gün yaptığımız işlerdir. Orijinal ve uyumlu parçalarla, işçilik garantisiyle çalışıyoruz.",
      },
      {
        id: "apple",
        title: "Tablet & Apple Ürünleri",
        short: "iPad, iPhone, MacBook ve iMac için profesyonel servis.",
        bullets: ["MacBook ve iMac onarımı", "iPhone / iPad ekran ve batarya", "macOS kurulum ve veri aktarımı"],
        seoTitle: "Alanya MacBook Tamiri | Apple, iPhone & iPad Servisi | Başarı Bilgisayar",
        seoDescription:
          "Alanya'da MacBook, iMac, iPhone ve iPad tamiri: ekran ve batarya değişimi, macOS kurulumu, veri aktarımı ve anakart onarımı. Apple ürünlerinde uzman servis.",
        intro:
          "MacBook anakartından iPhone ekranına kadar tüm Apple ailesine, bu cihazların hak ettiği özenle bakıyoruz — Türkçe, İngilizce, Almanca ve Rusça destekle.",
        body:
          "MacBook ve iMac onarımı, iPhone ve iPad ekran veya batarya değişimi, macOS kurulumu, veri taşıma ve sıvı teması müdahalesi kendi atölyemizde yapılır. Önce ücretsiz arıza tespiti, sonra net fiyat.",
      },
      {
        id: "parts",
        title: "Yedek Parça & Hızlı Çözüm",
        short: "Orijinal yedek parçalar ve hızlı, kalıcı çözümler.",
        bullets: ["Geniş yedek parça stoğu", "Aynı gün çözüm imkanı", "Uyumlu parça danışmanlığı"],
        seoTitle: "Alanya Laptop Yedek Parça | Ekran, Batarya, Klavye | Başarı Bilgisayar",
        seoDescription:
          "Alanya'da orijinal ve uyumlu laptop yedek parçaları: ekran, batarya, klavye, adaptör, SSD, RAM, fan ve MacBook parçaları. Aynı gün montaj imkanı.",
        intro:
          "Geniş orijinal ve uyumlu yedek parça stoğumuz sayesinde onarımlar kargo beklemez; montaj çoğu zaman aynı gün tamamlanır.",
        body:
          "Laptop ekranı ve panel, batarya, klavye, şarj adaptörü ve DC soket, SSD ve RAM, fan, menteşe ve MacBook parçaları stoğumuzda mevcuttur. Aradığınız parça yoksa hızlıca temin ediyor, doğru ve uyumlu seçim için danışmanlık veriyoruz.",
      },
    ],
    cta: "Bu hizmet için bize yazın",
    more: "Detaylı bilgi",
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
    hoursLabel: "Çalışma Saatleri",
    hoursValue: "Pazartesi – Cumartesi, 09:00 – 19:00",
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
  wizard: {
    eyebrow: "Hızlı Teklif",
    title: "Arızanızı seçin, fiyat teklifi alın",
    subtitle: "İki adımda cihazınızı ve sorununuzu seçin; seçiminiz hazır bir WhatsApp mesajına dönüşsün.",
    deviceTitle: "Cihazınız hangisi?",
    issueTitle: "Sorun nedir?",
    summaryTitle: "Seçiminiz",
    devices: { laptop: "Laptop", macbook: "MacBook", pc: "Masaüstü PC", tablet: "Tablet / iPad" },
    issues: {
      screen: "Ekran kırık / görüntü yok",
      liquid: "Sıvı teması",
      power: "Açılmıyor / şarj olmuyor",
      slow: "Yavaş / ısınıyor",
    },
    waIntro: "Merhaba, cihazım için fiyat teklifi almak istiyorum.",
    cta: "WhatsApp'tan Teklif Al",
    call: "Ya da hemen arayın",
    back: "Geri",
    restart: "Baştan başla",
  },
  servicePage: {
    included: "Neler dahil?",
    ctaTitle: "Cihazınızı bize getirin",
    ctaBody: "Ücretsiz arıza tespiti için arayın ya da WhatsApp'tan yazın; aynı gün dönüş yapalım.",
    otherServices: "Diğer hizmetlerimiz",
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
    title: "Laptop Repair Alanya | PC & MacBook Service | Başarı Computer",
    description:
      "Professional laptop, MacBook & PC repair in Alanya & Antalya. Free diagnosis, fast turnaround, motherboard repair & screen replacement. English service available.",
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
        seoTitle: "Technical Service Alanya | Free Computer Diagnosis | Başarı Bilgisayar",
        seoDescription:
          "Computer technical service in Alanya: free fault diagnosis, motherboard & chip-level repair, OS installation and virus removal. Warranted work since 1999.",
        intro:
          "Computer won't boot, freezes or throws random errors? We diagnose every device free of charge in our own workshop and never start work without your approval.",
        body:
          "Motherboard and chip-level repair, liquid damage recovery, operating system installation, virus removal and data recovery are all done in-house. Since 1999 we have repaired thousands of devices in Alanya — always with a warranty on our work.",
      },
      {
        id: "laptop",
        title: "Laptop & Computer Repair",
        short: "Maintenance, repair and upgrades for all brands and models.",
        bullets: ["Screen, keyboard and battery replacement", "Overheating and thermal service", "SSD / RAM upgrades"],
        seoTitle: "Laptop Repair Alanya | Screen Replacement & SSD Upgrade | Başarı Bilgisayar",
        seoDescription:
          "All-brand laptop repair in Alanya: screen replacement, keyboard & battery swap, overheating fix, thermal service, SSD and RAM upgrades. Fast and warranted.",
        intro:
          "A cracked screen, a failing keyboard, charging problems or a laptop that got slow — we maintain, repair and upgrade all brands and models, often the same day.",
        body:
          "Laptop screen replacement, hinge repair, DC jack replacement, fan cleaning with fresh thermal paste, HDD-to-SSD migration and RAM upgrades are our daily work. We use original and compatible parts and back every job with a workmanship warranty.",
      },
      {
        id: "apple",
        title: "Tablet & Apple Products",
        short: "Professional service for iPad, iPhone, MacBook and iMac.",
        bullets: ["MacBook and iMac repair", "iPhone / iPad screen and battery", "macOS setup and data transfer"],
        seoTitle: "MacBook Repair Alanya | Apple, iPhone & iPad Service | Başarı Bilgisayar",
        seoDescription:
          "MacBook, iMac, iPhone and iPad repair in Alanya: screen and battery replacement, macOS setup, data transfer and logic board repair. Apple specialists since 1999.",
        intro:
          "From MacBook logic boards to iPhone screens, we service the whole Apple family with the care these devices deserve — in English, German, Russian or Turkish.",
        body:
          "MacBook and iMac repair, iPhone and iPad screen or battery replacement, macOS installation, data migration and liquid damage treatment are handled in our own workshop. Free diagnosis first, clear pricing before any work begins.",
      },
      {
        id: "parts",
        title: "Spare Parts & Fast Solutions",
        short: "Original spare parts and fast, lasting solutions.",
        bullets: ["Wide spare parts stock", "Same-day solutions when possible", "Advice on compatible parts"],
        seoTitle: "Laptop Spare Parts Alanya | Screens, Batteries, Keyboards | Başarı Bilgisayar",
        seoDescription:
          "Original and compatible laptop spare parts in Alanya: screens, batteries, keyboards, chargers, SSDs, RAM, fans and MacBook parts. Same-day fitting available.",
        intro:
          "We keep a wide stock of original and compatible spare parts, so most repairs don't have to wait for shipping — and fitting is often done the same day.",
        body:
          "Laptop screens and panels, batteries, keyboards, chargers and DC jacks, SSDs and RAM, cooling fans, hinges and MacBook parts are available from stock. If a part is missing, we source it quickly and advise you on the right, compatible choice.",
      },
    ],
    cta: "Ask about this service",
    more: "Learn more",
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
    hoursLabel: "Opening Hours",
    hoursValue: "Monday – Saturday, 09:00 – 19:00",
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
  wizard: {
    eyebrow: "Quick Quote",
    title: "Pick your issue, get an instant quote",
    subtitle: "Choose your device and problem in two steps — we turn it into a ready WhatsApp message.",
    deviceTitle: "Which device is it?",
    issueTitle: "What's the problem?",
    summaryTitle: "Your selection",
    devices: { laptop: "Laptop", macbook: "MacBook", pc: "Desktop PC", tablet: "Tablet / iPad" },
    issues: {
      screen: "Broken screen / no display",
      liquid: "Liquid spill",
      power: "Won't turn on / not charging",
      slow: "Slow / overheating",
    },
    waIntro: "Hello, I'd like a repair quote for my device.",
    cta: "Get Quote on WhatsApp",
    call: "Or call us now",
    back: "Back",
    restart: "Start over",
  },
  servicePage: {
    included: "What's included",
    ctaTitle: "Bring your device to us",
    ctaBody: "Call or message us on WhatsApp for a free diagnosis — we reply the same day.",
    otherServices: "Other services",
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
    title: "Laptop Reparatur Alanya | PC & MacBook Werkstatt | Başarı",
    description:
      "Professionelle Laptop-, PC- & MacBook-Reparatur in Alanya. Kostenlose Diagnose, Garantie auf Reparaturen & schneller Service. Deutschsprachige Betreuung.",
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
        seoTitle: "Technischer Service Alanya | Kostenlose Diagnose | Başarı Bilgisayar",
        seoDescription:
          "Computer-Service in Alanya: kostenlose Fehlerdiagnose, Mainboard- und Chip-Reparatur, Systeminstallation und Virenentfernung. Garantierte Arbeit seit 1999.",
        intro:
          "Ihr Computer startet nicht, friert ein oder zeigt Fehler? Wir diagnostizieren jedes Gerät kostenlos in unserer eigenen Werkstatt — und arbeiten nur nach Ihrer Freigabe.",
        body:
          "Mainboard- und Chip-Reparaturen, Rettung nach Flüssigkeitsschäden, Systeminstallation, Virenentfernung und Datenrettung erledigen wir komplett im Haus. Seit 1999 haben wir in Alanya tausende Geräte repariert — immer mit Garantie.",
      },
      {
        id: "laptop",
        title: "Laptop- & Computerreparatur",
        short: "Wartung, Reparatur und Aufrüstung aller Marken und Modelle.",
        bullets: ["Display-, Tastatur- und Akkuwechsel", "Überhitzung und Thermal-Service", "SSD- / RAM-Aufrüstung"],
        seoTitle: "Laptop Reparatur Alanya | Display-Tausch & SSD-Upgrade | Başarı Bilgisayar",
        seoDescription:
          "Laptop-Reparatur aller Marken in Alanya: Display-Tausch, Tastatur- und Akkuwechsel, Überhitzung, Thermal-Service, SSD- und RAM-Upgrade. Schnell und mit Garantie.",
        intro:
          "Gebrochenes Display, defekte Tastatur, Ladeprobleme oder ein langsamer Laptop — wir warten, reparieren und rüsten alle Marken und Modelle auf, oft noch am selben Tag.",
        body:
          "Display-Tausch, Scharnier-Reparatur, Wechsel der Ladebuchse, Lüfterreinigung mit frischer Wärmeleitpaste, Umstieg von HDD auf SSD und RAM-Erweiterung gehören zu unserem Alltag. Wir verwenden Original- und kompatible Teile — mit Garantie auf die Arbeit.",
      },
      {
        id: "apple",
        title: "Tablet & Apple-Produkte",
        short: "Professioneller Service für iPad, iPhone, MacBook und iMac.",
        bullets: ["MacBook- und iMac-Reparatur", "iPhone- / iPad-Display und Akku", "macOS-Setup und Datenübertragung"],
        seoTitle: "MacBook Reparatur Alanya | Apple, iPhone & iPad Service | Başarı Bilgisayar",
        seoDescription:
          "MacBook-, iMac-, iPhone- und iPad-Reparatur in Alanya: Display- und Akkuwechsel, macOS-Installation, Datenübernahme und Logicboard-Reparatur. Apple-Spezialisten.",
        intro:
          "Vom MacBook-Logicboard bis zum iPhone-Display: Wir betreuen die ganze Apple-Familie mit der nötigen Sorgfalt — auf Deutsch, Englisch, Russisch oder Türkisch.",
        body:
          "MacBook- und iMac-Reparatur, Display- oder Akkuwechsel bei iPhone und iPad, macOS-Installation, Datenmigration und Behandlung von Flüssigkeitsschäden erfolgen in unserer eigenen Werkstatt. Erst die kostenlose Diagnose, dann ein klarer Preis.",
      },
      {
        id: "parts",
        title: "Ersatzteile & schnelle Lösung",
        short: "Original-Ersatzteile und schnelle, dauerhafte Lösungen.",
        bullets: ["Großes Ersatzteillager", "Lösung oft am selben Tag", "Beratung zu passenden Teilen"],
        seoTitle: "Laptop Ersatzteile Alanya | Displays, Akkus, Tastaturen | Başarı Bilgisayar",
        seoDescription:
          "Original- und kompatible Ersatzteile in Alanya: Displays, Akkus, Tastaturen, Netzteile, SSDs, RAM, Lüfter und MacBook-Teile. Einbau oft am selben Tag.",
        intro:
          "Wir führen ein großes Lager an Original- und kompatiblen Ersatzteilen — so muss Ihre Reparatur nicht auf den Versand warten, der Einbau erfolgt oft am selben Tag.",
        body:
          "Displays und Panels, Akkus, Tastaturen, Netzteile und Ladebuchsen, SSDs und RAM, Lüfter, Scharniere und MacBook-Teile sind ab Lager verfügbar. Fehlt ein Teil, besorgen wir es schnell und beraten Sie zur passenden, kompatiblen Wahl.",
      },
    ],
    cta: "Zu dieser Leistung schreiben",
    more: "Mehr erfahren",
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
    hoursLabel: "Öffnungszeiten",
    hoursValue: "Montag – Samstag, 09:00 – 19:00",
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
  wizard: {
    eyebrow: "Schnelles Angebot",
    title: "Problem wählen, Angebot erhalten",
    subtitle: "Wählen Sie in zwei Schritten Gerät und Problem — daraus wird eine fertige WhatsApp-Nachricht.",
    deviceTitle: "Welches Gerät ist es?",
    issueTitle: "Was ist das Problem?",
    summaryTitle: "Ihre Auswahl",
    devices: { laptop: "Laptop", macbook: "MacBook", pc: "Desktop-PC", tablet: "Tablet / iPad" },
    issues: {
      screen: "Display defekt / kein Bild",
      liquid: "Flüssigkeitsschaden",
      power: "Startet nicht / lädt nicht",
      slow: "Langsam / überhitzt",
    },
    waIntro: "Hallo, ich möchte ein Reparaturangebot für mein Gerät.",
    cta: "Angebot per WhatsApp",
    call: "Oder rufen Sie uns an",
    back: "Zurück",
    restart: "Neu beginnen",
  },
  servicePage: {
    included: "Was ist enthalten?",
    ctaTitle: "Bringen Sie Ihr Gerät vorbei",
    ctaBody: "Rufen Sie an oder schreiben Sie per WhatsApp für eine kostenlose Diagnose — Antwort noch am selben Tag.",
    otherServices: "Weitere Leistungen",
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
    title: "Ремонт Ноутбуков Аланья | Компьютерный Сервис | Başarı",
    description:
      "Качественный ремонт ноутбуков, MacBook и ПК в Аланье. Бесплатная диагностика, замена экранов, чистка и чип-ремонт. Говорим по-русски. Звоните!",
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
        seoTitle: "Технический Сервис Аланья | Бесплатная Диагностика | Başarı Bilgisayar",
        seoDescription:
          "Компьютерный сервис в Аланье: бесплатная диагностика, ремонт материнских плат и чипов, установка системы и удаление вирусов. Гарантия на работы с 1999 года.",
        intro:
          "Компьютер не включается, зависает или выдаёт ошибки? Мы бесплатно диагностируем каждое устройство в собственной мастерской и не начинаем работы без вашего согласия.",
        body:
          "Ремонт материнских плат и чипов, восстановление после попадания жидкости, установка операционной системы, удаление вирусов и восстановление данных — всё выполняется в нашей мастерской. С 1999 года мы отремонтировали в Аланье тысячи устройств — всегда с гарантией.",
      },
      {
        id: "laptop",
        title: "Ремонт ноутбуков и ПК",
        short: "Обслуживание, ремонт и апгрейд любых марок и моделей.",
        bullets: ["Замена экрана, клавиатуры, батареи", "Перегрев и замена термопасты", "Апгрейд SSD / RAM"],
        seoTitle: "Ремонт Ноутбуков Аланья | Замена Экрана и Апгрейд SSD | Başarı Bilgisayar",
        seoDescription:
          "Ремонт ноутбуков всех марок в Аланье: замена экрана, клавиатуры и батареи, чистка от пыли, замена термопасты, апгрейд SSD и RAM. Быстро и с гарантией.",
        intro:
          "Разбитый экран, неисправная клавиатура, проблемы с зарядкой или медленный ноутбук — обслуживаем, ремонтируем и модернизируем все марки и модели, часто в тот же день.",
        body:
          "Замена экрана, ремонт петель, замена разъёма зарядки, чистка от пыли с заменой термопасты, переход с HDD на SSD и расширение памяти — наша ежедневная работа. Используем оригинальные и совместимые детали, даём гарантию на работу.",
      },
      {
        id: "apple",
        title: "Планшеты и техника Apple",
        short: "Профессиональный сервис iPad, iPhone, MacBook и iMac.",
        bullets: ["Ремонт MacBook и iMac", "Экран и батарея iPhone / iPad", "Установка macOS и перенос данных"],
        seoTitle: "Ремонт MacBook Аланья | Сервис Apple, iPhone и iPad | Başarı Bilgisayar",
        seoDescription:
          "Ремонт MacBook, iMac, iPhone и iPad в Аланье: замена экрана и батареи, установка macOS, перенос данных и ремонт платы. Специалисты по технике Apple.",
        intro:
          "От платы MacBook до экрана iPhone — обслуживаем всю технику Apple с должной аккуратностью. Говорим по-русски, по-английски, по-немецки и по-турецки.",
        body:
          "Ремонт MacBook и iMac, замена экрана или батареи iPhone и iPad, установка macOS, перенос данных и восстановление после попадания жидкости выполняются в нашей мастерской. Сначала бесплатная диагностика, затем понятная цена.",
      },
      {
        id: "parts",
        title: "Запчасти и быстрое решение",
        short: "Оригинальные запчасти и надёжный результат.",
        bullets: ["Большой склад запчастей", "Часто решаем в тот же день", "Подбор совместимых деталей"],
        seoTitle: "Запчасти для Ноутбуков Аланья | Экраны, Батареи, Клавиатуры | Başarı",
        seoDescription:
          "Оригинальные и совместимые запчасти в Аланье: матрицы, батареи, клавиатуры, зарядки, SSD, RAM, вентиляторы и детали MacBook. Установка в день обращения.",
        intro:
          "У нас большой склад оригинальных и совместимых запчастей — ремонт не ждёт доставку, установка часто выполняется в тот же день.",
        body:
          "Матрицы и экраны, батареи, клавиатуры, зарядные устройства и разъёмы, SSD и память, вентиляторы, петли и детали MacBook — в наличии на складе. Если детали нет, быстро привезём её и поможем подобрать правильный совместимый вариант.",
      },
    ],
    cta: "Написать об этой услуге",
    more: "Подробнее",
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
    hoursLabel: "Часы работы",
    hoursValue: "Понедельник – Суббота, 09:00 – 19:00",
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
  wizard: {
    eyebrow: "Быстрая оценка",
    title: "Выберите проблему — получите расчёт",
    subtitle: "Выберите устройство и проблему в два шага — мы превратим выбор в готовое сообщение WhatsApp.",
    deviceTitle: "Какое у вас устройство?",
    issueTitle: "В чём проблема?",
    summaryTitle: "Ваш выбор",
    devices: { laptop: "Ноутбук", macbook: "MacBook", pc: "Настольный ПК", tablet: "Планшет / iPad" },
    issues: {
      screen: "Разбит экран / нет изображения",
      liquid: "Попала жидкость",
      power: "Не включается / не заряжается",
      slow: "Тормозит / перегревается",
    },
    waIntro: "Здравствуйте, хочу узнать стоимость ремонта.",
    cta: "Расчёт в WhatsApp",
    call: "Или позвоните нам",
    back: "Назад",
    restart: "Начать заново",
  },
  servicePage: {
    included: "Что входит",
    ctaTitle: "Привозите устройство к нам",
    ctaBody: "Позвоните или напишите в WhatsApp для бесплатной диагностики — ответим в тот же день.",
    otherServices: "Другие услуги",
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
