import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, MessageCircle, MapPin, Clock, ChevronLeft, CheckCircle2, Star,
  Truck, Construction, Hammer, Wrench, Layers, Building2, Route as RouteIcon,
  Settings, ShieldCheck, Award, Users, Quote,
} from "lucide-react";
import { useEffect, useState } from "react";
import logoMark from "@/assets/logo-mark.png";
import heroImg from "@/assets/hero-paving.jpg";
import projectRoad from "@/assets/project-road.jpg";
import projectInterlock from "@/assets/project-interlock.jpg";
import equipmentFleet from "@/assets/equipment-fleet.jpg";

const PHONE = "+966549473772";
const WHATSAPP = "966549473772";
const PHONE_DISPLAY = "+966 54 947 3772";

const SITE_URL = "https://asir-road-crafts.lovable.app";
const OG_IMAGE = `${SITE_URL}${heroImg}`;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "ما هي المناطق التي تغطيها الشركة؟", acceptedAnswer: { "@type": "Answer", text: "نغطي كامل منطقة عسير: أبها، خميس مشيط، أحد رفيدة، محايل، بيشة، النماص، رجال ألمع، تثليث، المجاردة، سراة عبيدة، بلقرن، سبت العلاية، وادي الدواسر نجد، نجران، العديد، النقيع، جيزان، الباحة، ظهران، الجنوب، الجوف، بللحمر، بللسمر، طريب." } },
    { "@type": "Question", name: "هل تقدمون خدمة تأجير معدات الرصف؟", acceptedAnswer: { "@type": "Answer", text: "نعم، نوفر تأجير شامل لمعدات الرصف والسفلتة (فارشات، حدالات، شاحنات) بأحدث الموديلات وبأسعار تنافسية." } },
    { "@type": "Question", name: "هل تمنحون ضمان على الأعمال؟", acceptedAnswer: { "@type": "Answer", text: "جميع أعمالنا مغطاة بضمان فني وفق نوع المشروع، مع متابعة دورية للتأكد من جودة الأداء." } },
    { "@type": "Question", name: "كم تستغرق دراسة عرض السعر؟", acceptedAnswer: { "@type": "Answer", text: "نوفر عرض سعر مبدئي خلال ٢٤ ساعة من زيارة الموقع، ودراسة تفصيلية خلال ٣ إلى ٥ أيام عمل." } },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "مقاول أسفلت بيشة",
  provider: {
    "@type": "LocalBusiness",
    name: "مقاول أسفلت بيشة",
    telephone: "+966549473772",
    areaServed: "منطقة عسير — بيشة",
    address: { "@type": "PostalAddress", addressLocality: "بيشة", addressRegion: "عسير", addressCountry: "SA" },
  },
  areaServed: [
    "بيشة", "أبها", "خميس مشيط", "أحد رفيدة", "محايل عسير", "سراة عبيدة",
    "النماص", "بلقرن", "رجال ألمع", "تثليث", "المجاردة", "سبت العلاية",
    "وادي الدواسر نجد", "نجران", "جازان", "العديد", "النقيع", "الجوف",
    "الجنوب", "ظهران", "الباحة", "بللحمر", "بللسمر", "طريب",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات الأسفلت والرصف",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "رصف الطرق" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "سفلتة ساخنة وباردة" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "أعمال الإنترلوك" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "تأجير معدات الرصف" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "صيانة وترميم الأسفلت" } },
    ],
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "مقاول أسفلت بيشة | مداخل فلل ومزارع ومنازل" },
      {
        name: "description",
        content:
          "مقاول أسفلت بيشة لتنفيذ مداخل الفلل والمزارع والمنازل باحترافية، من أعمال التأسيس حتى السفلتة النهائية، بجودة عالية وأسعار تنافسية وضمان على التنفيذ.",
      },
      {
        name: "keywords",
        content:
          "مقاول أسفلت بيشة, سفلتة بيشة, رصف مداخل الفلل بيشة, رصف مزارع بيشة, سفلتة منازل بيشة, مقاول أسفلت عسير, رصف طرق بيشة, تأجير معدات رصف بيشة, مقاول سفلتة الباحة, مقاول سفلتة جازان, مقاول سفلتة نجران, اسفلت أبها, اسفلت خميس مشيط, اسفلت محايل, اسفلت النماص, اسفلت بللسمر, اسفلت بللحمر, اسفلت العديد, اسفلت النقيع, اسفلت الجوف, اسفلت الجنوب, اسفلت ظهران, اسفلت طريب",
      },
      { name: "geo.region", content: "SA-14" },
      { name: "geo.placename", content: "بيشة" },
      { name: "geo.position", content: "19.9843;42.5983" },
      { name: "ICBM", content: "19.9843, 42.5983" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: "مقاول أسفلت بيشة | مداخل فلل ومزارع ومنازل" },
      { property: "og:description", content: "مقاول أسفلت بيشة لتنفيذ مداخل الفلل والمزارع والمنازل باحترافية، من أعمال التأسيس حتى السفلتة النهائية، بجودة عالية وأسعار تنافسية وضمان على التنفيذ." },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:site_name", content: "مقاول أسفلت بيشة" },
      { property: "og:locale", content: "ar_SA" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "أعمال سفلتة ورصف مداخل الفلل في بيشة" },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:title", content: "مقاول أسفلت بيشة | مداخل فلل ومزارع ومنازل" },
      { name: "twitter:description", content: "مقاول أسفلت بيشة لتنفيذ مداخل الفلل والمزارع والمنازل باحترافية، من أعمال التأسيس حتى السفلتة النهائية، بجودة عالية وأسعار تنافسية وضمان على التنفيذ." },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: Home,
});

const services = [
  { icon: RouteIcon, title: "رصف الطرق", desc: "رصف طرق رئيسية وفرعية بأحدث المعدات وفق المواصفات السعودية." },
  { icon: Layers, title: "أعمال السفلتة", desc: "سفلتة بأنواعها — ساخنة وباردة — لأعلى تحمّل ومتانة." },
  { icon: Construction, title: "رصف الشوارع", desc: "تنفيذ شوارع الأحياء والمخططات بجودة ودقة عالية." },
  { icon: Hammer, title: "أعمال الإنترلوك", desc: "تركيب البلاط المتداخل بأشكال هندسية متنوعة." },
  { icon: Building2, title: "رصف الواجهات", desc: "تشطيب واجهات المنشآت التجارية والسكنية باحترافية." },
  { icon: Truck, title: "تأجير المعدات", desc: "أسطول كامل من معدات الرصف والسفلتة بأحدث الموديلات." },
  { icon: Wrench, title: "صيانة الأسفلت", desc: "ترميم وصيانة الطرق المتضررة بأحدث التقنيات." },
  { icon: Settings, title: "خدمات المقاولات", desc: "حلول مقاولات متكاملة للمشاريع الكبرى والصغرى." },
];

const cities = [
  "أبها", "خميس مشيط", "أحد رفيدة", "محايل عسير", "بيشة",
  "سراة عبيدة", "النماص", "بلقرن", "رجال ألمع", "تثليث", "المجاردة",
  "سبت العلاية", "وادي الدواسر نجد", "نجران", "جازان", "العديد",
  "النقيع", "جيزان", "الباحة", "ظهران", "الجنوب", "الجوف",
  "بللحمر", "بللسمر", "طريب",
];

const features = [
  { icon: Award, title: "خبرة تتجاوز ١٥ عام", desc: "سجل حافل في تنفيذ مشاريع البنية التحتية في عسير." },
  { icon: ShieldCheck, title: "ضمان جودة معتمد", desc: "نلتزم بالمعايير السعودية ونوفّر ضمان على جميع الأعمال." },
  { icon: Truck, title: "أسطول معدات حديث", desc: "معدات أوروبية متطورة لإنجاز أسرع وجودة أعلى." },
  { icon: Users, title: "فريق متخصص", desc: "مهندسون وفنيون مؤهلون بخبرة عميقة في الرصف والأسفلت." },
];

const testimonials = [
  { name: "م. عبدالله القحطاني", role: "مدير مشاريع — أبها", text: "تعاملنا مع مقاول اسفلت محايل عسير في رصف مخطط سكني كامل، الالتزام بالموعد والجودة فاق توقعاتنا." },
  { name: "أ. فهد الشهري", role: "مالك مجمع تجاري — خميس مشيط", text: "أفضل مقاول اسفلت تعاملنا معه في المنطقة. تنفيذ احترافي ومتابعة دقيقة في أعمال السفلتة والرصف." },
  { name: "م. سعد الأسمري", role: "بلدية بيشة", text: "مقاول موثوق في مشاريع البنية التحتية، وننصح بهم لكل عمل رصف وأسفلت في محايل عسير والجنوب." },
];

const faqs = [
  { q: "ما هي المناطق التي تغطيها الشركة؟", a: "نغطي كامل منطقة عسير والجنوب: أبها، خميس مشيط، أحد رفيدة، محايل، بيشة، النماص، رجال ألمع، تثليث، المجاردة، سراة عبيدة، بلقرن، سبت العلاية، وادي الدواسر نجد، نجران، جازان، العديد، النقيع، الباحة، ظهران، الجنوب، الجوف، بللحمر، بللسمر، طريب." },
  { q: "هل تقدمون خدمة تأجير معدات الرصف؟", a: "نعم، نوفر تأجير شامل لمعدات الرصف والسفلتة (فارشات، حدالات، شاحنات) بأحدث الموديلات وبأسعار تنافسية." },
  { q: "هل تمنحون ضمان على الأعمال؟", a: "جميع أعمالنا مغطاة بضمان فني وفق نوع المشروع، مع متابعة دورية للتأكد من جودة الأداء." },
  { q: "كم تستغرق دراسة عرض السعر؟", a: "نوفر عرض سعر مبدئي خلال ٢٤ ساعة من زيارة الموقع، ودراسة تفصيلية خلال ٣ إلى ٥ أيام عمل." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Equipment />
        <Projects />
        <WhyUs />
        <Coverage />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const nav = [
    { href: "#services", label: "خدماتنا" },
    { href: "#projects", label: "مشاريعنا" },
    { href: "#why", label: "لماذا نحن" },
    { href: "#coverage", label: "نطاق التغطية" },
    { href: "#contact", label: "تواصل" },
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logoMark} alt="شعار مقاول اسفلت محايل عسير" className="h-12 w-12 object-contain" width={48} height={48} />
          <div className="leading-tight">
            <div className="text-lg font-extrabold text-navy-deep">مقاول اسفلت</div>
            <div className="text-[11px] text-muted-foreground">عسير</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-navy-deep">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-orange transition-colors">{n.label}</a>
          ))}
        </nav>
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-orange)] bg-orange px-4 py-2 text-xs md:text-sm font-bold text-white shadow-[var(--shadow-soft)] hover:scale-105 transition-transform"
        >
          <Phone className="w-4 h-4" />
          اتصل الآن
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img src={heroImg} alt="معدات رصف الطرق في عسير" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.7_0.18_45/0.18),transparent_60%)]" />
      </div>

      <div className="container-page relative z-10 py-20">
        <div className="max-w-3xl text-white animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-medium mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-orange animate-pulse" />
            مقاول أسفلت معتمد في محايل عسير وأبها وخميس مشيط
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.15] text-balance">
            مقاول اسفلت محايل عسير
            <span className="block mt-3 text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-orange)" }}>
              رصف وسفلتة بأعلى الجودة
            </span>
          </h1>

          <p className="mt-5 md:mt-6 text-base md:text-xl text-white/85 max-w-2xl leading-relaxed">
            نقوم بجميع أعمال الأسفلت والرصف والتخطيط وتأجير المعدات في منطقة الجنوب
            — مقاول أبها وخميس ومحايل عسير بخبرة واسعة وأسطول حديث.
          </p>

          <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-orange)] bg-orange px-5 py-3 md:px-7 md:py-4 text-sm md:text-base font-bold text-white shadow-[var(--shadow-elegant)] hover:scale-[1.03] transition-transform">
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              اتصل الآن
            </a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 md:px-7 md:py-4 text-sm md:text-base font-bold text-white shadow-[var(--shadow-soft)] hover:scale-[1.03] transition-transform">
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              واتساب
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass-dark px-5 py-3 md:px-7 md:py-4 text-sm md:text-base font-bold text-white hover:bg-white/15 transition-colors">
              اطلب عرض سعر
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/80">
            {["ضمان جودة معتمد", "تنفيذ سريع", "أسعار تنافسية", "تغطية كاملة لعسير"].map((b) => (
              <span key={b} className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 road-stripe opacity-80" />
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "+١٥", l: "سنة خبرة" },
    { v: "+٥٠٠", l: "مشروع منفذ" },
    { v: "+٢٥", l: "مدينة مغطاة" },
    { v: "٢٤/٧", l: "خدمة العملاء" },
  ];
  return (
    <section className="relative -mt-12 z-20">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 rounded-3xl bg-card p-6 md:p-10 shadow-[var(--shadow-elegant)]">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl md:text-5xl font-black text-navy-deep">{s.v}</div>
              <div className="mt-2 text-sm md:text-base text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ tag, title, desc }: { tag: string; title: string; desc?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14">
      <div className="inline-flex items-center gap-2 rounded-full bg-orange/10 text-orange px-4 py-1.5 text-xs font-bold mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-orange" /> {tag}
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-navy-deep text-balance">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{desc}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          tag="خدماتنا"
          title="حلول رصف وسفلتة متكاملة"
          desc="نقدّم منظومة خدمات شاملة في رصف الطرق وأعمال الأسفلت لمشاريع الحكومة والقطاع الخاص في عسير."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative rounded-2xl bg-card p-7 border border-border hover:border-orange/40 hover:-translate-y-1 transition-all duration-300 shadow-[var(--shadow-soft)]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-[var(--gradient-orange)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-xl bg-navy-deep/5 flex items-center justify-center mb-5 group-hover:bg-orange group-hover:scale-110 transition-all">
                  <Icon className="w-7 h-7 text-navy-deep group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-navy-deep">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Equipment() {
  const fleetItems = [
    { title: "فارشات أسفلت", desc: "ساخنة وباردة لجميع الأحجام والمواصفات" },
    { title: "حدالات الضغط", desc: "هزّازة ومطاطية للدمك الأمثل" },
    { title: "شاحنات النقل", desc: "معزولة للحفاظ على درجة حرارة الأسفلت" },
    { title: "معدات التسوية", desc: "تجهيز الأرضيات بأعلى دقة" },
  ];

  return (
    <section className="py-24 md:py-32 bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.7_0.18_45/0.18),transparent_50%)]" />
      <div className="container-page relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-orange/20 text-orange px-4 py-1.5 text-xs font-bold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange" /> معداتنا
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-balance">
            أسطول حديث من معدات الرصف الأوروبية
          </h2>
          <p className="mt-5 text-white/75 text-lg leading-relaxed">
            نمتلك أحدث فارشات الأسفلت، حدالات الضغط، شاحنات النقل، ومعدات التسوية،
            ونوفّرها للتأجير أو ضمن مشاريع التنفيذ بأعلى مستويات الجاهزية والكفاءة.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fleetItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-10 h-10 rounded-xl bg-orange/20 text-orange flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <h4 className="font-bold text-white text-base">{item.title}</h4>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mr-13 pr-13">{item.desc}</p>
              </div>
            ))}
          </div>

          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-orange)] px-7 py-4 font-bold shadow-[var(--shadow-elegant)] hover:scale-[1.03] transition-transform">
            استفسر عن التأجير
            <ChevronLeft className="w-5 h-5" />
          </a>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-orange/20 blur-3xl" />
          <img src={equipmentFleet} alt="أسطول معدات الرصف" className="relative rounded-3xl shadow-[var(--shadow-elegant)] w-full" loading="lazy" width={1280} height={896} />
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const items = [
    { img: projectRoad, title: "طريق جبلي — السودة", tag: "رصف طرق", desc: "تنفيذ ٨ كم من الرصف الجبلي بمواصفات وزارة النقل." },
    { img: projectInterlock, title: "ساحة مجمع تجاري — أبها", tag: "إنترلوك", desc: "تركيب ٤٠٠٠ م² من البلاط المتداخل بنمط هندسي." },
    { img: equipmentFleet, title: "مخطط سكني — خميس مشيط", tag: "سفلتة شوارع", desc: "سفلتة كاملة لمخطط بمساحة ١٢٠ ألف م²." },
  ];
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary">
      <div className="container-page">
        <SectionHeader
          tag="مشاريعنا"
          title="مشاريع نفخر بها في عسير"
          desc="نماذج مختارة من أحدث مشاريعنا المنفذة بأعلى المعايير الفنية."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1280} height={896} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="inline-block rounded-full bg-orange px-3 py-1 text-[11px] font-bold mb-3">{p.tag}</span>
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/80">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          tag="لماذا نحن"
          title="نختار التميّز في كل تفاصيل العمل"
          desc="ما يميّز شركة دروب عسير عن غيرها في سوق رصف الطرق."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-8 text-center hover:border-orange/50 transition-colors">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-[image:var(--gradient-orange)] bg-orange flex items-center justify-center shadow-[var(--shadow-soft)] animate-float">
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-deep">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section id="coverage" className="py-24 md:py-32 bg-secondary">
      <div className="container-page">
        <SectionHeader
          tag="نطاق التغطية"
          title="نخدم كافة محافظات منطقة عسير"
          desc="حضور ميداني في جميع مدن ومحافظات عسير لضمان الاستجابة السريعة."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {cities.map((c) => (
            <div key={c} className="group flex items-center gap-3 rounded-2xl bg-card border border-border px-5 py-4 hover:border-orange/60 hover:-translate-y-0.5 transition-all">
              <span className="w-9 h-9 rounded-xl bg-orange/10 text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-colors">
                <MapPin className="w-4 h-4" />
              </span>
              <span className="font-bold text-navy-deep">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader tag="آراء العملاء" title="ثقة عملاءنا أساس نجاحنا" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-3xl bg-card p-8 border border-border shadow-[var(--shadow-soft)]">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-orange/20" />
              <div className="flex gap-1 mb-4 text-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed">«{t.text}»</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-bold text-navy-deep">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container-page max-w-4xl">
        <SectionHeader tag="الأسئلة الشائعة" title="إجابات لأكثر الاستفسارات تكراراً" />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl bg-card border border-border p-6 open:border-orange/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="font-bold text-navy-deep text-lg">{f.q}</h3>
                <span className="w-9 h-9 rounded-full bg-orange/10 text-orange flex items-center justify-center group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.7_0.18_45/0.25),transparent_55%)]" />
      <div className="container-page relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <h2 className="text-3xl md:text-6xl font-black leading-tight text-balance">
            ابدأ مشروعك معنا اليوم
          </h2>
          <p className="mt-5 text-white/80 text-lg leading-relaxed">
            تواصل معنا للحصول على عرض سعر مجاني خلال ٢٤ ساعة، وزيارة ميدانية مجانية لموقعك في أي محافظة بعسير.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href={`tel:${PHONE}`} className="flex items-center gap-3 rounded-2xl glass-dark p-5 hover:bg-white/15 transition-colors">
              <Phone className="w-5 h-5 text-orange" />
              <div>
                <div className="text-xs text-white/60">اتصل بنا</div>
                <div className="font-bold" dir="ltr">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="flex items-center gap-3 rounded-2xl glass-dark p-5 hover:bg-white/15 transition-colors">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <div>
                <div className="text-xs text-white/60">واتساب</div>
                <div className="font-bold">تواصل فوري</div>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-2xl glass-dark p-5">
              <MapPin className="w-5 h-5 text-orange" />
              <div>
                <div className="text-xs text-white/60">المقر الرئيسي</div>
                <div className="font-bold">بيشة — منطقة عسير</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl glass-dark p-5">
              <Clock className="w-5 h-5 text-orange" />
              <div>
                <div className="text-xs text-white/60">ساعات العمل</div>
                <div className="font-bold">السبت — الخميس · ٨ص – ٩م</div>
              </div>
            </div>
          </div>
        </div>

        <form
          className="rounded-3xl bg-white text-foreground p-8 shadow-[var(--shadow-elegant)] space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const msg = `طلب عرض سعر%0A الاسم: ${f.get("name")}%0A الجوال: ${f.get("phone")}%0A المدينة: ${f.get("city")}%0A الخدمة: ${f.get("service")}%0A التفاصيل: ${f.get("details")}`;
            window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
          }}
        >
          <h3 className="text-2xl font-black text-navy-deep">اطلب عرض سعر مجاني</h3>
          <p className="text-sm text-muted-foreground">سنتواصل معك خلال ساعات لتأكيد التفاصيل.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input name="name" required placeholder="الاسم الكامل" className="rounded-xl border border-input bg-background px-4 py-3 text-right focus:border-orange focus:outline-none" />
            <input name="phone" required type="tel" placeholder="رقم الجوال" className="rounded-xl border border-input bg-background px-4 py-3 text-right focus:border-orange focus:outline-none" />
          </div>
          <select name="city" required defaultValue="" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-right focus:border-orange focus:outline-none">
            <option value="" disabled>اختر المدينة</option>
            {cities.map((c) => <option key={c}>{c}</option>)}
          </select>
          <select name="service" required defaultValue="" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-right focus:border-orange focus:outline-none">
            <option value="" disabled>نوع الخدمة المطلوبة</option>
            {services.map((s) => <option key={s.title}>{s.title}</option>)}
          </select>
          <textarea name="details" rows={3} placeholder="تفاصيل المشروع" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-right focus:border-orange focus:outline-none" />
          <button
            type="submit"
            className="group w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-l from-[#25D366] via-[#1ebe57] to-[#128C7E] px-7 py-4 text-white shadow-[var(--shadow-elegant)] ring-1 ring-white/20 hover:shadow-[0_18px_40px_-12px_rgba(18,140,126,0.55)] hover:scale-[1.03] active:scale-[0.99] transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:-rotate-12" />
            <span className="font-extrabold tracking-wide text-lg drop-shadow-sm">
              إرسال الطلب عبر واتساب
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-page py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="مقاول اسفلت محايل عسير" className="h-12 w-12 object-contain bg-white rounded-xl p-1" width={48} height={48} />
            <div>
              <div className="text-xl font-extrabold text-white">مقاول اسفلت</div>
              <div className="text-xs text-white/60">محايل عسير — أبها — خميس مشيط</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed max-w-md">
            مقاول اسفلت محايل عسير متخصص في رصف الطرق وأعمال الأسفلت والإنترلوك وتأجير المعدات
            في كافة محافظات منطقة الجنوب، بخبرة تتجاوز ١٥ عاماً وأسطول حديث.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-orange">خدماتنا</a></li>
            <li><a href="#projects" className="hover:text-orange">مشاريعنا</a></li>
            <li><a href="#coverage" className="hover:text-orange">نطاق التغطية</a></li>
            <li><a href="#contact" className="hover:text-orange">تواصل معنا</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">تواصل</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange" /> <span dir="ltr">{PHONE_DISPLAY}</span></li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange" /> محايل عسير — منطقة عسير</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/60">
            © {new Date().getFullYear()} مقاول اسفلت عسير. جميع الحقوق محفوظة.
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#006C35]/20 border border-[#006C35]/30 px-4 py-1.5 text-xs font-bold text-white">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#006C35] ring-2 ring-white/30" />
            شركة سعودية 100٪ — صُنع في المملكة العربية السعودية
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener"
        aria-label="واتساب"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[var(--shadow-elegant)] hover:scale-110 transition-transform animate-float"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="اتصل"
        className="w-14 h-14 rounded-full bg-[var(--gradient-orange)] text-white flex items-center justify-center shadow-[var(--shadow-elegant)] hover:scale-110 transition-transform"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
