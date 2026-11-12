import { useEffect, useRef, useState } from "react";
import {
  profile,
  stats,
  skillCategories,
  experience,
  education,
  projects,
} from "./data.js";

const navLinks = [
  ["summary", "Summary"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["contact", "Contact"],
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Section({ id, title, kicker, subtitle, children }) {
  const ref = useReveal();
  return (
    <section id={id} className="section reveal" ref={ref}>
      <div className="container">
        {kicker && <p className="kicker">{kicker}</p>}
        {title && <h2>{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

function Icon({ name }) {
  switch (name) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "location":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "palette":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.49 2 2 6.49 2 12c0 4.97 3.61 9.07 8.35 9.87.55.09.78-.24.78-.53v-1.68c0-.85.34-1.66.94-2.26l.41-.41c.42-.42 1-.66 1.6-.66h1.92c3.31 0 6-2.69 6-6 0-5.51-4.49-10-10-10z" />
        </svg>
      );
    case "tool":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "print":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 6 2 18 2 18 9" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
      );
    case "education":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
        </svg>
      );
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case "external":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      );
    default:
      return null;
  }
}

function Navbar({ theme, onToggle }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo">
          <span className="logo-accent">{"<"}</span>
          <span className="logo-name">{profile.shortName}</span>
          <span className="logo-badge">CV</span>
          <span className="logo-accent">{" />"}</span>
        </a>

        <nav className={open ? "links open" : "links"}>
          {navLinks.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="mobile-cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="btn sm cv-print-btn hide-sm"
            onClick={handlePrint}
            title="Print or Save CV as PDF"
          >
            <Icon name="print" /> Print CV (PDF)
          </button>
          <a href="#contact" className="btn sm primary hide-sm">
            Let's Talk
          </a>
          <button
            className="icon-btn"
            onClick={onToggle}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            className="icon-btn burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="top" className="hero cv-hero">
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="cv-pill-badge">
            <span className="dot pulse" />
            <span>Interactive Digital Resume • Available for Hire</span>
          </div>

          <h1 className="hero-name">
            <span className="grad">{profile.name}</span>
            <br />
            <span className="hero-subtitle">{profile.role}</span>
          </h1>

          {/* Quick Contact & CV Info Strip */}
          <div className="cv-contact-strip">
            <span className="cv-info-item">
              <Icon name="location" /> {profile.location}
            </span>
            <a className="cv-info-item" href={`tel:${profile.phoneClean}`}>
              <Icon name="phone" /> {profile.phone}
            </a>
            <a className="cv-info-item" href={`mailto:${profile.email}`}>
              <Icon name="email" /> {profile.email}
            </a>
            <a
              className="cv-info-item cv-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="linkedin" /> {profile.linkedinDisplay}
            </a>
            <a
              className="cv-info-item cv-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" /> {profile.githubDisplay}
            </a>
          </div>

          <p className="lead">{profile.summary}</p>

          <div className="cta">
            <button className="btn primary cv-download-btn" onClick={handlePrint}>
              <Icon name="print" /> Download / Print CV (PDF)
            </button>
            <a className="btn" href="#projects">
              Explore Projects ↓
            </a>
            <a
              className="btn ghost whatsapp-btn"
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="whatsapp" /> Chat on WhatsApp
            </a>
          </div>

          <div className="tech-pills">
            <span className="tech-label">Core Stack:</span>
            {[
              "React.js",
              "Next.js",
              "JavaScript (ES6+)",
              "Tailwind CSS",
              "Bootstrap",
              "State Management",
              "Git / GitHub",
            ].map((tech) => (
              <span className="pill" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Developer CV Card */}
        <div className="hero-card-wrapper">
          <div className="code-card cv-style-card">
            <div className="card-header">
              <span className="dot-win red" />
              <span className="dot-win yellow" />
              <span className="dot-win green" />
              <span className="file-name">developer-resume.json</span>
            </div>
            <pre className="code-block">
              <code>
                <span className="c-keyword">const</span>{" "}
                <span className="c-var">candidate</span> = {"{\n"}
                {"  "}name: <span className="c-str">"{profile.name}"</span>,
                {"\n"}
                {"  "}role: <span className="c-str">"{profile.role}"</span>,
                {"\n"}
                {"  "}degree: <span className="c-str">"B.Sc. Computers & AI (2026)"</span>,
                {"\n"}
                {"  "}coreFrameworks: [
                <span className="c-accent">"React.js"</span>,{" "}
                <span className="c-accent">"Next.js"</span>
                ],{"\n"}
                {"  "}styling: [
                <span className="c-str">"Tailwind CSS"</span>,{" "}
                <span className="c-str">"Bootstrap"</span>
                ],{"\n"}
                {"  "}projectsCount: <span className="c-num">4</span>,
                {"\n"}
                {"  "}status: <span className="c-bool">"Ready for Work"</span>,
                {"\n"}
                {"  "}location: <span className="c-str">"{profile.location}"</span>
                {"\n"}
                {"}"};
              </code>
            </pre>
            <div className="card-quick-actions">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="card-mini-btn"
              >
                <Icon name="github" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="card-mini-btn"
              >
                <Icon name="linkedin" /> LinkedIn
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="card-mini-btn wa-mini"
              >
                <Icon name="whatsapp" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container stats-container">
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <strong className="grad">{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfessionalSummary() {
  return (
    <Section
      id="summary"
      kicker="01 — Professional Summary"
      title="Summary & Core Background"
      subtitle="Computer Science foundation paired with modern React.js and Next.js front-end development."
    >
      <div className="cv-summary-card">
        <div className="cv-summary-header">
          <div className="cv-summary-badge">
            <Icon name="code" /> Profile Overview
          </div>
          <span className="cv-loc-tag">📍 Cairo, Egypt · Available Worldwide</span>
        </div>
        <p className="cv-summary-body">{profile.summary}</p>
        <div className="cv-highlights-grid">
          <div className="cv-highlight-box">
            <span className="ch-title">⚡ Modern Frameworks</span>
            <span className="ch-desc">
              Strong mastery of React.js, Next.js, and Single-Page Application (SPA / SSR) architectures.
            </span>
          </div>
          <div className="cv-highlight-box">
            <span className="ch-title">🎯 Component Architecture</span>
            <span className="ch-desc">
              Building modular, reusable, and maintainable UI components with clean separation of concerns.
            </span>
          </div>
          <div className="cv-highlight-box">
            <span className="ch-title">🎨 Pixel-Perfect Styling</span>
            <span className="ch-desc">
              Translating UI/UX designs into responsive web apps using Tailwind CSS, Bootstrap, and CSS Grid.
            </span>
          </div>
          <div className="cv-highlight-box">
            <span className="ch-title">🧠 Computer Science Base</span>
            <span className="ch-desc">
              Solid understanding of data structures, algorithms, and clean software engineering principles.
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

function TechnicalSkills() {
  return (
    <Section
      id="skills"
      kicker="02 — Technical Skills"
      title="Skills & Technologies"
      subtitle="Categorized breakdown of core languages, frameworks, UI systems, and development tools."
    >
      <div className="grid skills-grid">
        {skillCategories.map((cat) => (
          <div className="skill-group-card" key={cat.group}>
            <div className="group-header">
              <div className="group-icon">
                <Icon name={cat.icon} />
              </div>
              <h3>{cat.group}</h3>
            </div>
            <div className="chips">
              {cat.items.map((item) => (
                <span className="chip" key={item}>
                  <span className="chip-bullet">▪</span> {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function WorkExperience() {
  return (
    <Section
      id="experience"
      kicker="03 — Work Experience"
      title="Work Experience"
      subtitle="Practical track record delivering modern web interfaces and client solutions."
    >
      <div className="timeline">
        {experience.map((e) => (
          <div className="t-item" key={e.role}>
            <span className="t-period mono">{e.period}</span>
            <div className="t-role-row">
              <h3>{e.role}</h3>
              <span className="t-company">{e.company} | {e.type}</span>
            </div>
            <p className="t-place">📍 {e.location}</p>
            <p className="t-summary">{e.summary}</p>
            <ul className="t-achievements">
              {e.points.map((p, i) => (
                <li key={i}>
                  <span className="check-bullet">✓</span> {p}
                </li>
              ))}
            </ul>
            <div className="t-tech-used">
              <span className="tech-used-label">Applied Technologies:</span>
              <div className="chips">
                {["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "JavaScript (ES6+)", "REST APIs"].map(
                  (t) => (
                    <span className="chip sm mono" key={t}>
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* UI Previews for the 4 Featured Projects */
function RestaurantPreview() {
  return (
    <div className="mockup-ui restaurant-ui">
      <div className="mockup-bar">
        <div className="mockup-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="mockup-url">gourmet-admin.io/dashboard</span>
      </div>
      <div className="mockup-body">
        <div className="rest-stats-row">
          <div className="rest-stat-mini">
            <span className="rest-stat-lbl">Today's Sales</span>
            <span className="rest-stat-val">$3,840</span>
          </div>
          <div className="rest-stat-mini">
            <span className="rest-stat-lbl">Active Orders</span>
            <span className="rest-stat-val highlight-val">12 Kitchen</span>
          </div>
          <div className="rest-stat-mini">
            <span className="rest-stat-lbl">Tables Occupied</span>
            <span className="rest-stat-val">18 / 24</span>
          </div>
        </div>

        <div className="rest-orders-box">
          <div className="rest-order-row preparing">
            <div className="order-left">
              <span className="tbl-badge">Table 04</span>
              <span className="order-items">2x Angus Burger, 1x Truffle Fries</span>
            </div>
            <span className="order-status-badge prep">🍳 Preparing</span>
          </div>
          <div className="rest-order-row ready">
            <div className="order-left">
              <span className="tbl-badge">Table 09</span>
              <span className="order-items">1x Grilled Salmon, 2x Fresh Lemonade</span>
            </div>
            <span className="order-status-badge rdy">✅ Ready to Serve</span>
          </div>
        </div>

        <div className="rest-quick-bar">
          <span>📊 Live Analytics & KDS State Synchronized</span>
          <span className="rest-sync-dot" />
        </div>
      </div>
    </div>
  );
}

function EcommercePreview() {
  return (
    <div className="mockup-ui ecommerce-ui">
      <div className="mockup-bar">
        <div className="mockup-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="mockup-url">storefront-pro.com/shop</span>
      </div>
      <div className="mockup-body">
        <div className="ecom-top">
          <div className="ecom-search">🔍 Search 2,400+ products...</div>
          <div className="ecom-cart">🛒 Cart (3 items)</div>
        </div>
        <div className="ecom-filter-pills">
          <span className="active">All</span>
          <span>Electronics</span>
          <span>Audio</span>
          <span>Accessories</span>
        </div>
        <div className="ecom-card-mini">
          <div className="ecom-product-info">
            <div className="ecom-badge">Top Seller • Sale -20%</div>
            <div className="ecom-name">Wireless Noise-Canceling ANC Headset</div>
            <div className="ecom-rating">★★★★★ (4.9 / 5.0)</div>
          </div>
          <div className="ecom-buy-row">
            <span className="ecom-price">$129.99</span>
            <span className="ecom-add-btn">+ Add to Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TravelPreview() {
  return (
    <div className="mockup-ui travel-ui">
      <div className="mockup-bar">
        <div className="mockup-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="mockup-url">explore-travel.io/destinations</span>
      </div>
      <div className="mockup-body">
        <div className="travel-hero-card">
          <div className="travel-location-badge">📍 Santorini, Greece</div>
          <div className="travel-title">Aegean Luxury Sunset Expedition</div>
          <div className="travel-meta">
            <span>✈️ Direct Flight Included</span>
            <span>🏨 5★ Resort</span>
            <span>☀️ 26°C Sunny</span>
          </div>
          <div className="travel-booking-row">
            <div>
              <span className="travel-price">$590</span>
              <span className="travel-days"> / 5 Days Tour</span>
            </div>
            <span className="travel-book-btn">Book Flight ↗</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NutritionPreview() {
  return (
    <div className="mockup-ui nutrition-ui">
      <div className="mockup-bar">
        <div className="mockup-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="mockup-url">fitnutrition.app/plan</span>
      </div>
      <div className="mockup-body">
        <div className="nutri-top">
          <div>
            <div className="nutri-label">Daily Calorie Target</div>
            <div className="nutri-val">
              1,950 <span>/ 2,300 kcal</span>
            </div>
          </div>
          <span className="nutri-badge">85% Achieved</span>
        </div>
        <div className="nutri-progress-track">
          <div className="nutri-progress-fill" style={{ width: "85%" }} />
        </div>
        <div className="macro-row">
          <div className="macro-col">
            <span className="macro-title">Protein</span>
            <div className="macro-bar p-bar" style={{ width: "92%" }} />
            <span className="macro-num">145g / 160g</span>
          </div>
          <div className="macro-col">
            <span className="macro-title">Carbs</span>
            <div className="macro-bar c-bar" style={{ width: "78%" }} />
            <span className="macro-num">190g / 240g</span>
          </div>
          <div className="macro-col">
            <span className="macro-title">Fats</span>
            <div className="macro-bar f-bar" style={{ width: "68%" }} />
            <span className="macro-num">50g / 70g</span>
          </div>
        </div>
        <div className="meal-pill">
          <span>🥗 Grilled Chicken Quinoa Salad</span>
          <span className="meal-kcal">520 kcal · Logged</span>
        </div>
      </div>
    </div>
  );
}

function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <Section
      id="projects"
      kicker="04 — Featured Projects"
      title="Featured Projects"
      subtitle="Selected web applications built with React.js, Next.js, Tailwind CSS, and Bootstrap."
    >
      <div className="projects-wrapper">
        {projects.map((p, index) => (
          <article className="project-card" key={p.id}>
            <div className="project-preview-wrapper">
              {p.previewType === "restaurant" && <RestaurantPreview />}
              {p.previewType === "ecommerce" && <EcommercePreview />}
              {p.previewType === "travel" && <TravelPreview />}
              {p.previewType === "nutrition" && <NutritionPreview />}
            </div>

            <div className="project-info">
              <div className="project-top-meta">
                <span className="project-num">0{index + 1}</span>
                <span className="project-badge">{p.badge}</span>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-tagline">{p.tagline}</p>
              <p className="project-desc">{p.description}</p>

              <div className="project-highlights">
                <h4>Key Features & Highlights:</h4>
                <ul>
                  {p.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="chips tags-chips">
                {p.tags.map((t) => (
                  <span className="chip mono" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  className="btn primary sm"
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="github" /> View GitHub Repo ↗
                </a>
                <button
                  className="btn ghost sm"
                  onClick={() => setActiveProject(p)}
                >
                  Detailed Overview
                </button>
                <a
                  className="btn sm"
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(
                    `Inquiry: ${p.title}`
                  )}`}
                >
                  Request Walkthrough
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span className="project-badge">{activeProject.badge}</span>
                <h3>{activeProject.title}</h3>
                <p className="modal-tagline">{activeProject.tagline}</p>
              </div>
              <button
                className="modal-close"
                onClick={() => setActiveProject(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <h4>Project Summary</h4>
              <p>{activeProject.description}</p>

              <h4>Architecture & Key Features</h4>
              <ul className="modal-features">
                {activeProject.highlights.map((h, i) => (
                  <li key={i}>
                    <strong>Feature {i + 1}:</strong> {h}
                  </li>
                ))}
              </ul>

              <h4>Technologies Applied</h4>
              <div className="chips">
                {activeProject.tags.map((t) => (
                  <span className="chip mono" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="modal-footer-cta">
                <a
                  className="btn primary"
                  href={activeProject.code}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="github" /> Explore GitHub Codebase ↗
                </a>
                <a
                  className="btn"
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(
                    `Walkthrough: ${activeProject.title}`
                  )}`}
                >
                  Discuss Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

function Education() {
  return (
    <Section
      id="education"
      kicker="05 — Education"
      title="Academic Background"
      subtitle="Formal degree education in Computer Science and Artificial Intelligence."
    >
      <div className="cv-education-card">
        <div className="edu-top-row">
          <div className="edu-icon-wrap">
            <Icon name="education" />
          </div>
          <div className="edu-headings">
            <h3>{education.degree}</h3>
            <span className="edu-inst">{education.institution}</span>
            <span className="edu-meta">📍 {education.location} • {education.period}</span>
          </div>
          <div className="edu-badge-class">{education.period}</div>
        </div>

        <p className="edu-summary">{education.summary}</p>

        <div className="edu-courses-box">
          <h4>Key Areas of Study:</h4>
          <div className="chips">
            {education.courses.map((course) => (
              <span className="chip mono" key={course}>
                🎓 {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = encodeURIComponent(
      `Job / Project Inquiry from ${f.get("name")}`
    );
    const body = encodeURIComponent(
      `Hello Mohamed,\n\n${f.get("message")}\n\nBest regards,\n${f.get(
        "name"
      )} (${f.get("email")})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Section
      id="contact"
      kicker="06 — Contact & Inquiry"
      title="Get in Touch"
      subtitle="Available for Full-Time Front-End Roles, Next.js / React Contracts, and Freelance Projects."
    >
      <div className="contact-wrapper">
        <div className="contact-info">
          <p className="contact-lead">
            Whether you are looking for a dedicated Front-End React.js & Next.js Developer to join your engineering team or need a responsive web application built from scratch, I'd love to connect!
          </p>

          <div className="contact-quick-cards">
            <div className="quick-contact-card">
              <span className="qc-label">Direct Email</span>
              <div className="qc-row">
                <a className="qc-link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <button
                  className="btn ghost sm copy-btn"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                >
                  {copied ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
            </div>

            <div className="quick-contact-card">
              <span className="qc-label">WhatsApp Direct</span>
              <div className="qc-row">
                <span className="qc-link">{profile.phone}</span>
                <a
                  className="btn sm primary-green"
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="whatsapp" /> Message on WhatsApp
                </a>
              </div>
            </div>

            <div className="quick-contact-card">
              <span className="qc-label">LinkedIn & Professional Network</span>
              <div className="qc-row">
                <span className="qc-link">{profile.linkedinDisplay}</span>
                <a
                  className="btn sm"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="linkedin" /> View Profile
                </a>
              </div>
            </div>

            <div className="quick-contact-card">
              <span className="qc-label">GitHub Repository</span>
              <div className="qc-row">
                <span className="qc-link">{profile.githubDisplay}</span>
                <a
                  className="btn sm"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="github" /> Visit GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <form className="card form contact-form" onSubmit={onSubmit}>
          <h3>Send a Direct Message</h3>
          <label>
            Your Name
            <input
              name="name"
              required
              placeholder="e.g. John Doe / Recruiter"
              autoComplete="name"
            />
          </label>
          <label>
            Your Email
            <input
              name="email"
              type="email"
              required
              placeholder="name@company.com"
              autoComplete="email"
            />
          </label>
          <label>
            Message / Opportunity Details
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Tell me about the role, project scope, or questions..."
            />
          </label>
          <button className="btn primary submit-btn" type="submit">
            {submitted ? "✓ Opening your email client..." : "Send Message ✉"}
          </button>
        </form>
      </div>
    </Section>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio_theme");
      if (saved) return saved;
    } catch {}
    return window.matchMedia?.("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio_theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-shell">
      <Navbar theme={theme} onToggle={toggleTheme} />
      <main>
        <Hero />
        <ProfessionalSummary />
        <TechnicalSkills />
        <WorkExperience />
        <FeaturedProjects />
        <Education />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-left">
            <span className="footer-brand">
              {"<"}
              {profile.name}
              {" />"}
            </span>
            <p>{profile.role} · Cairo, Egypt</p>
          </div>
          <div className="footer-links">
            <a href="#top">Back to top ↑</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} {profile.name} — Front-End React.js & Next.js Developer. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
