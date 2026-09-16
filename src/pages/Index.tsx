import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  Blocks,
  Check,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  Github,
  Globe2,
  Hammer,
  Layers3,
  Mail,
  Menu,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

type Language = "pl" | "en";

const siteDomain = "BRTKMods.com";

const copy = {
  pl: {
    languageLabel: "Język",
    polish: "PL",
    english: "EN",
    home: "strona główna",
    nav: ["Start", "O mnie", "Moje mody", "Kontakt"],
    startProject: "Zacznijmy projekt",
    available: "Dostępny dla nowych projektów",
    heroTitle: <>Mody, które<br /><span className="text-gradient">ożywiają</span> światy.</>,
    heroDescription: "Tworzę dopracowane mody Minecraft — od pierwszej mechaniki po gotowy, stabilny produkt dla Twojego serwera.",
    seeMods: "Zobacz moje mody",
    tellIdea: "Opowiedz o pomyśle",
    stats: ["języki", "zaangażowania", "pomysłów"],
    scroll: "Scrolluj",
    cleanCode: "Clean code.",
    realImpact: "Real impact.",
    buildSuccessful: "build successful",
    aboutLabel: "O mnie",
    aboutTitle: <>Technologia jest środkiem. <span className="text-slate-500">Dobra rozgrywka — celem.</span></>,
    aboutLead: "Jestem twórcą modów Minecraft, który łączy inżynierskie podejście z wyczuciem detalu. Buduję rozwiązania, które nie tylko działają — sprawiają, że gracze chcą wracać.",
    aboutText: "Specjalizuję się w tworzeniu mechanik, narzędzi serwerowych i integracji, które są łatwe w utrzymaniu i gotowe do dalszego rozwoju.",
    modsLabel: "Moje mody",
    modsTitle: <>Projekty zbudowane<br /><span className="text-slate-500">z myślą o graczach.</span></>,
    github: "Zobacz GitHub",
    newIdea: "Masz pomysł na mod, którego tu jeszcze nie ma?",
    writeMe: "Napisz do mnie",
    demo: "Odtwórz prezentację moda",
    demoLabel: "YouTube showcase",
    openDemo: "Otwórz demo",
    download: "Pobierz",
    contactLabel: "Kontakt",
    contactTitle: <>Zróbmy coś,<br /><span className="text-gradient">w co chce się grać.</span></>,
    contactText: "Opowiedz mi o swoim serwerze, pomyśle albo problemie. Wspólnie zamienimy go w konkretny plan działania.",
    bestContact: "Najlepszy kontakt: formularz poniżej",
    offerChips: ["Nowy mod", "Rozwój projektu", "Audyt kodu"],
    formName: "Imię / nazwa",
    formNamePlaceholder: "Jak mam się do Ciebie zwracać?",
    formEmail: "E-mail",
    formEmailPlaceholder: "ty@email.com",
    formType: "Rodzaj współpracy",
    choose: "Wybierz opcję",
    formOptions: ["Nowy mod od podstaw", "Rozwój istniejącego moda", "Audyt lub optymalizacja", "Inna propozycja"],
    formMessage: "Opowiedz o projekcie",
    formMessagePlaceholder: "Jaki jest Twój pomysł? Dla jakiej wersji Minecrafta?",
    consent: "Wyrażam zgodę na kontakt w sprawie mojego zapytania. Wiem, że podanie danych jest dobrowolne i mogę wycofać zgodę.",
    send: "Wyślij zapytanie",
    privacyHint: "Twoje dane służą wyłącznie do odpowiedzi na wiadomość. Brak cookies marketingowych i analityki.",
    successTitle: "Dzięki za wiadomość!",
    successText: "Odezwę się, gdy tylko zapoznam się ze szczegółami Twojego pomysłu.",
    sendAnother: "Wyślij kolejną wiadomość",
    footer: "Tworzę z ciekawości, dostarczam z dbałością.",
    privacy: "Prywatność",
    privacyText: "Informacja o prywatności: formularz zbiera wyłącznie dane niezbędne do odpowiedzi na zapytanie. Dane nie są sprzedawane ani wykorzystywane do marketingu. Możesz poprosić o ich usunięcie, kontaktując się przez GitHub.",
    mobileMenu: "Menu mobilne",
    mainNav: "Główna nawigacja",
  },
  en: {
    languageLabel: "Language",
    polish: "PL",
    english: "EN",
    home: "home page",
    nav: ["Home", "About", "My mods", "Contact"],
    startProject: "Start a project",
    available: "Available for new projects",
    heroTitle: <>Mods that<br /><span className="text-gradient">bring worlds</span> to life.</>,
    heroDescription: "I create polished Minecraft mods — from the first mechanic to a stable, ready-to-ship product for your server.",
    seeMods: "See my mods",
    tellIdea: "Tell me your idea",
    stats: ["languages", "commitment", "ideas"],
    scroll: "Scroll down",
    cleanCode: "Clean code.",
    realImpact: "Real impact.",
    buildSuccessful: "build successful",
    aboutLabel: "About me",
    aboutTitle: <>Technology is the medium. <span className="text-slate-500">Great gameplay is the goal.</span></>,
    aboutLead: "I create Minecraft mods with an engineering mindset and an eye for detail. I build solutions that do more than work — they make players want to come back.",
    aboutText: "I specialize in gameplay mechanics, server tools and integrations that are easy to maintain and ready to grow with your project.",
    modsLabel: "My mods",
    modsTitle: <>Projects built<br /><span className="text-slate-500">with players in mind.</span></>,
    github: "View GitHub",
    newIdea: "Have an idea for a mod that is not here yet?",
    writeMe: "Talk to me",
    demo: "Play the mod showcase",
    demoLabel: "YouTube showcase",
    openDemo: "Open demo",
    download: "Download",
    contactLabel: "Contact",
    contactTitle: <>Let's build something<br /><span className="text-gradient">worth playing.</span></>,
    contactText: "Tell me about your server, idea or problem. Together, we will turn it into a clear plan of action.",
    bestContact: "Best contact: the form below",
    offerChips: ["New mod", "Project development", "Code audit"],
    formName: "Name / handle",
    formNamePlaceholder: "How should I address you?",
    formEmail: "Email",
    formEmailPlaceholder: "you@email.com",
    formType: "Type of collaboration",
    choose: "Choose an option",
    formOptions: ["New mod from scratch", "Develop an existing mod", "Audit or optimization", "Another proposal"],
    formMessage: "Tell me about the project",
    formMessagePlaceholder: "What is your idea? Which Minecraft version?",
    consent: "I agree to be contacted about my enquiry. I understand that providing my data is voluntary and that I can withdraw my consent.",
    send: "Send enquiry",
    privacyHint: "Your data is used only to reply to your message. No marketing cookies or analytics.",
    successTitle: "Thanks for your message!",
    successText: "I will get back to you as soon as I review the details of your idea.",
    sendAnother: "Send another message",
    footer: "Built out of curiosity, delivered with care.",
    privacy: "Privacy",
    privacyText: "Privacy note: the form collects only the data needed to reply to your enquiry. Data is not sold or used for marketing. You can request its removal by contacting me through GitHub.",
    mobileMenu: "Mobile menu",
    mainNav: "Main navigation",
  },
} as const;

const projects = [
  {
    number: "01",
    title: "ChunkGuard",
    type: { pl: "Narzędzie serwerowe", en: "Server tool" },
    description: {
      pl: "Lekki system ochrony chunków z prostą konfiguracją i czytelnym logowaniem zdarzeń dla administratorów serwerów.",
      en: "A lightweight chunk protection system with simple configuration and clear event logs for server admins.",
    },
    tags: ["Kotlin", "Fabric", "Server"],
    version: "1.20.4",
    color: "cyan",
  },
  {
    number: "02",
    title: "Questline",
    type: { pl: "Mechaniki rozgrywki", en: "Gameplay mechanics" },
    description: {
      pl: "Modularny silnik zadań z nagrodami, warunkami i progresją, który pozwala budować własne scenariusze dla graczy.",
      en: "A modular quest engine with rewards, conditions and progression for building your own player scenarios.",
    },
    tags: ["Java", "NeoForge", "API"],
    version: "1.21",
    color: "blue",
  },
  {
    number: "03",
    title: "Aether Tools",
    type: { pl: "Przedmioty i świat", en: "Items and world" },
    description: {
      pl: "Zestaw narzędzi i bloków z alternatywnego wymiaru — spójny design, nowe receptury i dopracowane efekty.",
      en: "A set of tools and blocks from an alternate dimension — cohesive design, new recipes and polished effects.",
    },
    tags: ["Kotlin", "Fabric", "Content"],
    version: "1.20.1",
    color: "violet",
  },
];

const skills = [
  { name: "Kotlin", detail: { pl: "Główny język", en: "Primary language" }, icon: "K" },
  { name: "Java", detail: { pl: "Ekosystem Minecraft", en: "Minecraft ecosystem" }, icon: "J" },
  { name: "JavaScript", detail: { pl: "Narzędzia i web", en: "Tools and web" }, icon: "JS" },
  { name: "Python", detail: { pl: "Automatyzacja", en: "Automation" }, icon: "Py" },
];

function Logo({ language }: { language: Language }) {
  const text = copy[language];
  return (
    <a href="#start" className="flex items-center gap-3" aria-label={`BRTK Mods — ${text.home}`}>
      <span className="logo-mark" aria-hidden="true"><Blocks size={20} strokeWidth={2.4} /></span>
      <span className="text-[15px] font-semibold tracking-[-0.03em] text-white">BRTK <span className="text-cyan-300">Mods</span></span>
    </a>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300"><span className="h-px w-7 bg-cyan-400" />{children}</div>;
}

function ProjectCard({ project, language }: { project: (typeof projects)[number]; language: Language }) {
  const text = copy[language];
  return (
    <article className="project-card group overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0c1423]">
      <div className={`video-frame video-${project.color}`}>
        <div className="video-topline"><span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />BRTK MODS / DEMO</span><span>{project.version}</span></div>
        <iframe className="absolute inset-0 z-0 h-full w-full opacity-65" src={`https://www.youtube-nocookie.com/embed?listType=search&list=${encodeURIComponent(`${project.title} Minecraft mod showcase`)}`} title={`${text.demo} ${project.title} on YouTube`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        <div className="video-grid" />
        <div className="relative z-[1] flex h-full flex-col items-center justify-center gap-3 px-5 text-center">
          <a className="play-button" href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`${project.title} Minecraft mod showcase`)}`} target="_blank" rel="noreferrer" aria-label={`${text.openDemo} ${project.title} on YouTube`}><Play size={20} fill="currentColor" /></a>
          <p className="text-xs font-medium text-slate-300">{text.demo}</p><span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{text.demoLabel}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-[1] h-20 bg-gradient-to-t from-[#0c1423] to-transparent" />
      </div>
      <div className="p-6 sm:p-7">
        <div className="mb-4 flex items-start justify-between gap-4"><div><p className="mb-1 font-mono text-[11px] text-cyan-300/75">{project.number} / {project.type[language]}</p><h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{project.title}</h3></div><a href="https://github.com/brtk-ds" target="_blank" rel="noreferrer" className="icon-button" aria-label={`${text.github} ${project.title}`}><Github size={16} /></a></div>
        <p className="mb-6 min-h-[66px] text-sm leading-6 text-slate-400">{project.description[language]}</p>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-4"><div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="tag-pill">{tag}</span>)}</div><a href="https://github.com/brtk-ds" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 transition-colors hover:text-white">{text.download} <Download size={14} /></a></div>
      </div>
    </article>
  );
}

const Index = () => {
  const [language, setLanguage] = useState<Language>("pl");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const text = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${siteDomain} — Minecraft Mods`;
  }, [language]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const toggleLanguage = () => setLanguage((current) => current === "pl" ? "en" : "pl");
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#060b13] text-slate-200">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.07] bg-[#060b13]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-5 sm:px-8">
          <Logo language={language} />
          <nav className="hidden items-center gap-8 md:flex" aria-label={text.mainNav}>
            {text.nav.map((label, index) => <a key={label} href={["#start", "#o-mnie", "#mody", "#kontakt"][index]} className="nav-link">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <button type="button" onClick={toggleLanguage} className="language-toggle" aria-label={`${text.languageLabel}: ${language === "pl" ? text.english : text.polish}`}><Globe2 size={14} /><span className={language === "pl" ? "text-cyan-200" : "text-slate-600"}>PL</span><span className="text-slate-700">/</span><span className={language === "en" ? "text-cyan-200" : "text-slate-600"}>EN</span></button>
            <a href="#kontakt" className="nav-cta hidden sm:inline-flex">{text.startProject} <ArrowRight size={15} /></a>
            <button type="button" className="icon-button md:hidden" onClick={() => setMobileMenuOpen((open) => !open)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen}>{mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}</button>
          </div>
        </div>
        {mobileMenuOpen && <nav className="border-t border-white/[0.07] bg-[#080f1a] px-5 py-4 md:hidden" aria-label={text.mobileMenu}>{text.nav.map((label, index) => <a key={label} href={["#start", "#o-mnie", "#mody", "#kontakt"][index]} onClick={closeMobileMenu} className="block border-b border-white/[0.06] py-3 text-sm text-slate-300 last:border-0">{label}</a>)}</nav>}
      </header>

      <section id="start" className="hero-grid relative flex min-h-[720px] items-center pt-28 sm:min-h-[790px]">
        <div className="hero-glow" />
        <div className="mx-auto grid w-full max-w-[1180px] items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200"><span className="pulse-dot" />{text.available}</div>
            <h1 className="max-w-[680px] text-[clamp(3.2rem,8vw,6.8rem)] font-semibold leading-[0.93] tracking-[-0.075em] text-white">{text.heroTitle}</h1>
            <p className="mt-8 max-w-[520px] text-base leading-7 text-slate-400 sm:text-lg">{text.heroDescription}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4"><a href="#mody" className="primary-button">{text.seeMods} <ArrowRight size={16} /></a><a href="#kontakt" className="secondary-button">{text.tellIdea}</a></div>
            <div className="mt-14 flex items-center gap-7 border-t border-white/[0.08] pt-5 text-xs text-slate-500"><span><strong className="font-mono text-xl font-medium text-white">4</strong><br />{text.stats[0]}</span><span className="h-8 w-px bg-white/[0.12]" /><span><strong className="font-mono text-xl font-medium text-white">100%</strong><br />{text.stats[1]}</span><span className="h-8 w-px bg-white/[0.12]" /><span><strong className="font-mono text-xl font-medium text-white">∞</strong><br />{text.stats[2]}</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-[460px] lg:ml-auto"><div className="code-window"><div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4"><div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" /></div><span className="font-mono text-[10px] text-slate-600">modforge.kt</span><span className="w-9" /></div><div className="code-lines px-5 py-7 font-mono text-[12px] leading-[2.15] sm:px-8 sm:text-[13px]"><div><span className="text-slate-600">01</span> <span className="text-fuchsia-300">@Mod</span><span className="text-slate-300">(</span><span className="text-amber-200">"chunkguard"</span><span className="text-slate-300">)</span></div><div><span className="text-slate-600">02</span> <span className="text-purple-300">object</span> <span className="text-cyan-200">ChunkGuard</span> <span className="text-slate-300">{'{'}</span></div><div><span className="text-slate-600">03</span>   <span className="text-purple-300">fun</span> <span className="text-cyan-200">initialize</span><span className="text-slate-300">() {'{'}</span></div><div><span className="text-slate-600">04</span>     <span className="text-slate-500">// secure every block</span></div><div><span className="text-slate-600">05</span>     <span className="text-cyan-200">events</span><span className="text-slate-300">.register(</span></div><div><span className="text-slate-600">06</span>       <span className="text-amber-200">BlockBreakEvent</span><span className="text-slate-300">::</span><span className="text-cyan-200">protect</span></div><div><span className="text-slate-600">07</span>     <span className="text-slate-300">)</span></div><div><span className="text-slate-600">08</span>   <span className="text-slate-300">{'}'}</span></div><div><span className="text-slate-600">09</span> <span className="text-slate-300">{'}'}</span></div><div className="mt-3 flex items-center gap-2 text-emerald-300"><Check size={13} /> <span>{text.buildSuccessful}</span></div></div><div className="flex items-center justify-between border-t border-white/[0.08] px-5 py-3 font-mono text-[10px] text-slate-600"><span>main</span><span>UTF-8</span></div></div><div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border border-white/[0.1] bg-[#0b1422] px-4 py-3 shadow-2xl sm:flex"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300"><Sparkles size={15} /></span><span className="text-xs"><strong className="block text-white">{text.cleanCode}</strong><span className="text-slate-500">{text.realImpact}</span></span></div></div>
        </div>
        <a href="#o-mnie" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-600 transition-colors hover:text-cyan-300 sm:flex">{text.scroll} <ChevronDown size={15} className="animate-bounce" /></a>
      </section>

      <section id="o-mnie" className="border-y border-white/[0.07] bg-[#080f19] py-24 sm:py-32"><div className="mx-auto grid max-w-[1180px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24"><div><SectionLabel>{text.aboutLabel}</SectionLabel><h2 className="max-w-[430px] text-3xl font-semibold leading-tight tracking-[-0.055em] text-white sm:text-4xl">{text.aboutTitle}</h2><a href="https://github.com/brtk-ds" target="_blank" rel="noreferrer" className="github-link mt-9 inline-flex"><Github size={17} /> github.com/brtk-ds <ExternalLink size={13} /></a></div><div className="max-w-[620px]"><p className="text-lg leading-8 text-slate-300">{text.aboutLead}</p><p className="mt-5 text-base leading-7 text-slate-500">{text.aboutText}</p><div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">{skills.map((skill) => <div key={skill.name} className="skill-card"><span className="skill-icon">{skill.icon}</span><strong className="mt-4 block text-sm text-white">{skill.name}</strong><span className="mt-1 block text-[10px] text-slate-600">{skill.detail[language]}</span></div>)}</div></div></div></section>

      <section id="mody" className="py-24 sm:py-32"><div className="mx-auto max-w-[1180px] px-5 sm:px-8"><div className="mb-12 flex flex-col justify-between gap-7 sm:flex-row sm:items-end"><div><SectionLabel>{text.modsLabel}</SectionLabel><h2 className="text-3xl font-semibold tracking-[-0.055em] text-white sm:text-4xl">{text.modsTitle}</h2></div><a href="https://github.com/brtk-ds" target="_blank" rel="noreferrer" className="secondary-button self-start sm:self-auto">{text.github} <Github size={15} /></a></div><div className="grid gap-5 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.title} project={project} language={language} />)}</div><div className="mt-6 flex items-center gap-4 rounded-xl border border-dashed border-white/[0.1] px-6 py-5 text-sm text-slate-500"><Layers3 size={18} className="text-cyan-300/70" /><span>{text.newIdea}</span><a href="#kontakt" className="ml-auto inline-flex items-center gap-1 font-medium text-cyan-300 hover:text-white">{text.writeMe} <ArrowRight size={14} /></a></div></div></section>

      <section id="kontakt" className="contact-section border-t border-white/[0.07] bg-[#080f19] py-24 sm:py-32"><div className="mx-auto grid max-w-[1180px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24"><div><SectionLabel>{text.contactLabel}</SectionLabel><h2 className="max-w-[430px] text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-white sm:text-5xl">{text.contactTitle}</h2><p className="mt-7 max-w-[370px] text-base leading-7 text-slate-400">{text.contactText}</p><div className="mt-10 flex items-center gap-3 text-sm text-slate-400"><Mail size={17} className="text-cyan-300" /> {text.bestContact}</div><div className="mt-7 flex flex-wrap gap-2"><span className="contact-chip"><Hammer size={14} /> {text.offerChips[0]}</span><span className="contact-chip"><Code2 size={14} /> {text.offerChips[1]}</span><span className="contact-chip"><ShieldCheck size={14} /> {text.offerChips[2]}</span></div></div><div className="rounded-2xl border border-white/[0.1] bg-[#0c1423] p-6 sm:p-8">{submitted ? <div className="flex min-h-[390px] flex-col items-center justify-center text-center"><span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-300"><Check size={25} /></span><h3 className="text-2xl font-semibold text-white">{text.successTitle}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">{text.successText}</p><button type="button" onClick={() => setSubmitted(false)} className="mt-7 text-sm font-medium text-cyan-300 hover:text-white">{text.sendAnother}</button></div> : <form onSubmit={handleSubmit} className="space-y-5"><div className="grid gap-5 sm:grid-cols-2"><label className="field-label">{text.formName}<input required name="name" type="text" placeholder={text.formNamePlaceholder} className="field-input" /></label><label className="field-label">{text.formEmail}<input required name="email" type="email" placeholder={text.formEmailPlaceholder} className="field-input" /></label></div><label className="field-label">{text.formType}<select required name="type" defaultValue="" className="field-input"><option value="" disabled>{text.choose}</option>{text.formOptions.map((option) => <option key={option}>{option}</option>)}</select></label><label className="field-label">{text.formMessage}<textarea required name="message" rows={5} placeholder={text.formMessagePlaceholder} className="field-input resize-none" /></label><label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-500"><input required type="checkbox" className="consent-checkbox mt-0.5" /> <span>{text.consent}</span></label><button type="submit" className="primary-button w-full justify-center">{text.send} <Send size={15} /></button><p className="flex items-center gap-2 text-[10px] leading-4 text-slate-600"><ShieldCheck size={13} className="shrink-0 text-cyan-300/70" /> {text.privacyHint}</p></form>}</div></div></section>

      <footer className="border-t border-white/[0.07] bg-[#060b13]"><div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between"><Logo language={language} /><p className="text-center text-xs text-slate-600">© 2025 {siteDomain}. {text.footer}</p><div className="flex items-center justify-center gap-5 text-xs text-slate-500"><a href="#kontakt" className="hover:text-cyan-300">{text.contactLabel}</a><a href="https://github.com/brtk-ds" target="_blank" rel="noreferrer" className="hover:text-cyan-300">GitHub</a><a href="#prywatnosc" className="hover:text-cyan-300">{text.privacy}</a></div></div><div id="prywatnosc" className="mx-auto max-w-[1180px] border-t border-white/[0.05] px-5 py-5 text-center text-[11px] leading-5 text-slate-700 sm:px-8">{text.privacyText}</div></footer>
    </main>
  );
};

export default Index;
