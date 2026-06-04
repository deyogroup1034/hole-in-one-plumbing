/* ===================== HEADER ===================== */
function Header({ showEmergency }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    ["Services", "#services"],
    ["Why Us", "#why"],
    ["Service Area", "#area"],
    ["Reviews", "#reviews"],
    ["Contact", "#contact"],
  ];

  return (
    <header style={S.headerWrap}>
      {/* utility bar */}
      <div style={S.utility}>
        <div className="wrap" style={S.utilityRow}>
          <div style={S.utilityLeft}>
            <span style={S.utilityItem}><Icon name="pin" className="ut-ic" /> Serving Dallas–Ft. Worth Metroplex</span>
            <span style={S.utilityDot} />
            <span style={S.utilityItem}><Icon name="clock" className="ut-ic" /> {BIZ.hours}</span>
          </div>
          <div style={S.utilityLeft}>
            <a href={"mailto:" + BIZ.email} style={S.utilityItem}><Icon name="mail" className="ut-ic" /> {BIZ.email}</a>
            <span style={S.utilityDot} />
            <span style={S.utilityItem}><Icon name="award" className="ut-ic" /> {BIZ.license}</span>
          </div>
        </div>
      </div>

      {/* main nav */}
      <div style={{ ...S.navBar, boxShadow: scrolled ? "0 6px 24px rgba(15,23,34,.08)" : "none", borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent" }}>
        <div className="wrap" style={S.navRow}>
          <a href="#top" style={S.brand}>
            <img src="assets/logo.png" alt="Hole in One Plumbing" style={S.logo} />
          </a>

          <nav style={S.navLinks} className="desk-nav">
            {nav.map(([label, href]) => (
              <a key={href} href={href} style={S.navLink} className="nav-link">{label}</a>
            ))}
          </nav>

          <div style={S.navCtas} className="desk-nav">
            <a href={"tel:" + BIZ.phones[0].replace(/\D/g, "")} className="btn btn-ghost" style={{ padding: "12px 18px", fontSize: 15 }}>
              <Icon name="phone" /> {BIZ.phones[0]}
            </a>
            <a href="#contact" className="btn btn-accent" style={{ padding: "12px 20px", fontSize: 15 }}>Schedule Service</a>
          </div>

          <button className="mob-btn" style={S.burger} onClick={() => setOpen(o => !o)} aria-label="Menu">
            <span style={{ ...S.burgerLine, transform: open ? "translateY(6px) rotate(45deg)" : "none" }} />
            <span style={{ ...S.burgerLine, opacity: open ? 0 : 1 }} />
            <span style={{ ...S.burgerLine, transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }} />
          </button>
        </div>

        {/* mobile drawer */}
        <div className="mob-drawer" style={{ ...S.drawer, maxHeight: open ? 460 : 0, opacity: open ? 1 : 0 }}>
          <div style={{ padding: "8px 28px 22px" }}>
            {nav.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} style={S.drawerLink}>{label}</a>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
              <a href={"tel:" + BIZ.phones[0].replace(/\D/g, "")} className="btn btn-ghost"><Icon name="phone" /> {BIZ.phones[0]}</a>
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-accent">Schedule Service</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ===================== HERO ===================== */
function Hero() {
  const trust = [
    { ic: "award", t: BIZ.years + " years", s: "in business" },
    { ic: "shield", t: "Licensed", s: "& insured" },
    { ic: "star", t: "5-star", s: "rated locally" },
  ];
  return (
    <section id="top" style={S.hero}>
      <div style={S.heroGlow} />
      <div className="wrap hero-grid" style={S.heroGrid}>
        <div className="reveal in">
          <span className="eyebrow" style={{ color: "#9fd3ff" }}>Family-run · Dallas–Ft. Worth</span>
          <h1 style={S.heroH1}>Honest plumbing,<br/>done right the<br/><span style={S.heroAccent}>first time.</span></h1>
          <p style={S.heroSub}>
            From hidden leaks and gas lines to stubborn drains, the team at {BIZ.name} brings {BIZ.years} years of straight-talking, fairly-priced service to homeowners across North Texas.
          </p>
          <div style={S.heroCtas}>
            <a href={"tel:" + BIZ.phones[0].replace(/\D/g, "")} className="btn btn-accent btn-lg"><Icon name="phone" /> Call {BIZ.phones[0]}</a>
            <a href="#contact" className="btn btn-lg" style={{ background: "#fff", color: "var(--blue-800)" }}>Schedule online <Icon name="arrow" /></a>
          </div>
          <div style={S.heroTrust}>
            {trust.map((b, i) => (
              <div key={i} style={S.heroTrustItem}>
                <div style={S.heroTrustIc}><Icon name={b.ic} /></div>
                <div><div style={S.heroTrustT}>{b.t}</div><div style={S.heroTrustS}>{b.s}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal in hero-media" style={S.heroMedia}>
          <Placeholder label="Photo · plumber on the job" style={{ height: "100%", minHeight: 420, borderRadius: 20 }} />
          <div style={S.heroBadge}>
            <div style={S.heroBadgeIc}><Icon name="check" /></div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "var(--ink)", fontSize: 16 }}>Up-front pricing</div>
              <div style={{ fontSize: 13.5, color: "var(--slate-500)" }}>No surprises on the bill</div>
            </div>
          </div>
          <div style={S.heroLicense}>{BIZ.license}</div>
        </div>
      </div>
    </section>
  );
}

/* ===================== STATS STRIP ===================== */
function Stats() {
  const stats = [
    { n: BIZ.years, l: "Years of experience" },
    { n: "14+", l: "Cities served" },
    { n: "5.0", l: "Average review" },
    { n: "100%", l: "Licensed & insured" },
  ];
  return (
    <section style={S.statsWrap}>
      <div className="wrap stats-grid reveal" style={S.statsGrid}>
        {stats.map((s, i) => (
          <div key={i} style={S.statItem}>
            <div style={S.statN}>{s.n}</div>
            <div style={S.statL}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===================== SERVICES ===================== */
function Services() {
  return (
    <section id="services" style={S.section}>
      <div className="wrap">
        <div className="reveal" style={S.secHead}>
          <span className="eyebrow">What we do</span>
          <h2 style={S.h2}>Full-service plumbing for<br/>every corner of your home</h2>
          <p style={S.secLede}>One trusted crew for the small fixes and the big emergencies — with the right tools to diagnose the real problem the first time.</p>
        </div>
        <div className="svc-grid" style={S.svcGrid}>
          {SERVICES.map((s, i) => (
            <article key={s.key} className="reveal svc-card" style={{ ...S.svcCard, transitionDelay: (i % 3) * 70 + "ms" }}>
              <div style={S.svcIc}><Icon name={s.icon} /></div>
              <h3 style={S.svcTitle}>{s.title}</h3>
              <p style={S.svcBlurb}>{s.blurb}</p>
              <a href="#contact" className="svc-link" style={S.svcLink}>Request this service <Icon name="arrow" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, Stats, Services });
