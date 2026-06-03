/* ===================== STYLE OBJECT ===================== */
const S = {
  /* header */
  headerWrap: { position: "sticky", top: 0, zIndex: 50 },
  utility: { background: "var(--blue-900)", color: "rgba(255,255,255,.82)", fontSize: 13.5 },
  utilityRow: { display: "flex", justifyContent: "space-between", alignItems: "center", height: 40, whiteSpace: "nowrap" },
  utilityLeft: { display: "flex", alignItems: "center", gap: 13, minWidth: 0 },
  utilityItem: { display: "inline-flex", alignItems: "center", gap: 7, color: "rgba(255,255,255,.82)", whiteSpace: "nowrap" },
  utilityDot: { width: 3, height: 3, borderRadius: 9, background: "rgba(255,255,255,.3)" },
  navBar: { background: "rgba(255,255,255,.92)", backdropFilter: "blur(10px)", transition: "box-shadow .25s, border-color .25s" },
  navRow: { display: "flex", alignItems: "center", gap: 24, height: 78 },
  brand: { display: "flex", alignItems: "center", flexShrink: 0 },
  logo: { height: 56, width: "auto" },
  navLinks: { display: "flex", alignItems: "center", gap: 30, marginLeft: 8 },
  navLink: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15.5, color: "var(--slate-700)", position: "relative", padding: "6px 0" },
  navCtas: { display: "flex", alignItems: "center", gap: 12, marginLeft: "auto" },
  burger: { display: "none", flexDirection: "column", gap: 5, padding: 8, marginLeft: "auto" },
  burgerLine: { width: 24, height: 2.5, background: "var(--ink)", borderRadius: 3, transition: "transform .25s, opacity .25s" },
  drawer: { overflow: "hidden", background: "#fff", transition: "max-height .35s ease, opacity .25s", borderBottom: "1px solid var(--line)" },
  drawerLink: { display: "block", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, color: "var(--slate-800)", padding: "13px 0", borderBottom: "1px solid var(--line)" },

  /* hero */
  hero: { background: "linear-gradient(160deg, var(--blue-800) 0%, var(--blue-900) 70%)", color: "#fff", position: "relative", overflow: "hidden", paddingTop: 4 },
  heroGlow: { position: "absolute", top: "-30%", right: "-10%", width: 700, height: 700, background: "radial-gradient(circle, rgba(4,129,57,.34), transparent 62%)", pointerEvents: "none" },
  heroGrid: { display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 56, alignItems: "center", padding: "78px 28px 88px", position: "relative" },
  heroH1: { fontSize: "clamp(40px, 5vw, 66px)", fontWeight: 900, color: "#fff", margin: "20px 0 22px", letterSpacing: "-0.03em" },
  heroAccent: { color: "#5bd98a" },
  heroSub: { fontSize: 18.5, lineHeight: 1.62, color: "rgba(255,255,255,.84)", maxWidth: 520 },
  heroCtas: { display: "flex", gap: 14, flexWrap: "wrap", marginTop: 30 },
  heroTrust: { display: "flex", gap: 26, marginTop: 40, flexWrap: "wrap" },
  heroTrustItem: { display: "flex", alignItems: "center", gap: 11 },
  heroTrustIc: { width: 42, height: 42, borderRadius: 12, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.16)", display: "grid", placeItems: "center", color: "#5bd98a", flexShrink: 0 },
  heroTrustT: { fontFamily: "var(--font-display)", fontWeight: 800, color: "#fff", fontSize: 16, lineHeight: 1.15, whiteSpace: "nowrap" },
  heroTrustS: { fontSize: 13, color: "rgba(255,255,255,.66)", whiteSpace: "nowrap" },
  heroMedia: { position: "relative" },
  heroBadge: { position: "absolute", left: -18, bottom: 34, background: "#fff", borderRadius: 16, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12, boxShadow: "var(--shadow-lg)" },
  heroBadgeIc: { width: 38, height: 38, borderRadius: 10, background: "var(--green-tint)", color: "var(--green)", display: "grid", placeItems: "center", flexShrink: 0 },
  heroLicense: { position: "absolute", top: 18, right: 18, background: "rgba(0,42,82,.72)", color: "#fff", fontSize: 12.5, fontWeight: 700, fontFamily: "var(--font-display)", padding: "8px 14px", borderRadius: 999, backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,.18)" },

  /* stats */
  statsWrap: { background: "var(--blue-700)", position: "relative", zIndex: 2 },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, padding: "0" },
  statItem: { padding: "34px 20px", textAlign: "center", borderRight: "1px solid rgba(255,255,255,.12)" },
  statN: { fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 42, color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" },
  statL: { fontSize: 14, color: "rgba(255,255,255,.74)", marginTop: 8, fontWeight: 500 },

  /* generic section */
  section: { padding: "92px 0" },
  secHead: { maxWidth: 620, marginBottom: 52 },
  h2: { fontSize: "clamp(30px, 3.6vw, 46px)", fontWeight: 800, marginTop: 16 },
  secLede: { fontSize: 18, lineHeight: 1.62, color: "var(--slate-500)", marginTop: 18 },

  /* services */
  svcGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 },
  svcCard: { background: "#fff", border: "1px solid var(--line)", borderRadius: 18, padding: "30px 28px", transition: "transform .25s, box-shadow .25s, border-color .25s" },
  svcIc: { width: 56, height: 56, borderRadius: 15, background: "var(--blue-tint)", color: "var(--blue-700)", display: "grid", placeItems: "center", marginBottom: 20 },
  svcTitle: { fontSize: 21, fontWeight: 700, marginBottom: 10 },
  svcBlurb: { fontSize: 15.5, color: "var(--slate-500)", lineHeight: 1.6 },
  svcLink: { display: "inline-flex", alignItems: "center", gap: 7, marginTop: 18, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14.5, color: "var(--green-600)" },

  /* why */
  whyGrid: { display: "grid", gridTemplateColumns: ".95fr 1.05fr", gap: 60, alignItems: "center" },
  whyStat: { position: "absolute", right: -16, bottom: -16, background: "#fff", borderRadius: 18, padding: "20px 24px", boxShadow: "var(--shadow-lg)", textAlign: "center" },
  whyList: { display: "grid", gap: 22, marginTop: 30 },
  whyItem: { display: "flex", gap: 16 },
  whyItemIc: { width: 46, height: 46, borderRadius: 12, background: "var(--green-tint)", color: "var(--green-600)", display: "grid", placeItems: "center", flexShrink: 0 },
  whyItemT: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--ink)", marginBottom: 3 },
  whyItemS: { fontSize: 15, color: "var(--slate-500)", lineHeight: 1.55 },

  /* area */
  areaGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" },
  areaChips: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 28 },
  areaChip: { display: "inline-flex", alignItems: "center", gap: 6, padding: "9px 16px", borderRadius: 999, background: "var(--blue-tint)", color: "var(--blue-800)", fontWeight: 600, fontSize: 14.5, fontFamily: "var(--font-display)", border: "1px solid #dbe6f1" },

  /* reviews */
  revGlow: { position: "absolute", bottom: "-30%", left: "-8%", width: 620, height: 620, background: "radial-gradient(circle, rgba(4,129,57,.28), transparent 62%)", pointerEvents: "none" },
  revCard: { position: "relative", background: "#fff", borderRadius: 24, padding: "44px 48px 38px", maxWidth: 800, margin: "0 auto", boxShadow: "var(--shadow-lg)" },
  revStars: { display: "flex", gap: 3, marginBottom: 20 },
  revQuote: { fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(20px, 2.2vw, 26px)", lineHeight: 1.45, color: "var(--slate-800)", letterSpacing: "-0.01em", textWrap: "pretty" },
  revWho: { display: "flex", alignItems: "center", gap: 14, marginTop: 28 },
  revAvatar: { width: 50, height: 50, borderRadius: 999, background: "var(--blue-700)", color: "#fff", display: "grid", placeItems: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20 },
  revNav: { position: "absolute", top: 38, right: 40, display: "flex", gap: 8 },
  revArrow: { width: 44, height: 44, borderRadius: 999, border: "1px solid var(--line-strong)", display: "grid", placeItems: "center", color: "var(--slate-700)", background: "#fff", transition: "background .2s, color .2s, border-color .2s" },
  revDots: { display: "flex", gap: 8, justifyContent: "center", marginTop: 30 },
  revDot: { height: 8, borderRadius: 999, transition: "width .3s, background .3s", cursor: "pointer", border: "none" },

  /* contact */
  contactGrid: { display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 56, alignItems: "start" },
  contactCards: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 30 },
  contactCard: { display: "flex", alignItems: "center", gap: 14, background: "#fff", border: "1px solid var(--line)", borderRadius: 14, padding: "16px 18px", transition: "transform .2s, box-shadow .2s" },
  contactIc: { width: 44, height: 44, borderRadius: 11, background: "var(--blue-tint)", color: "var(--blue-700)", display: "grid", placeItems: "center", flexShrink: 0 },
  contactLbl: { fontSize: 12.5, color: "var(--slate-400)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".05em" },
  contactVal: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--ink)" },
  formCard: { background: "#fff", borderRadius: 22, padding: "36px 36px 32px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--line)" },
  fieldRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 },
  fieldLbl: { display: "block", fontSize: 14, fontWeight: 600, color: "var(--slate-700)", marginBottom: 7, fontFamily: "var(--font-display)" },
  input: { width: "100%", padding: "13px 15px", fontSize: 15.5, fontFamily: "var(--font-body)", color: "var(--ink)", background: "var(--paper)", border: "1.5px solid var(--line-strong)", borderRadius: 11, outline: "none", transition: "border-color .18s, box-shadow .18s" },
  fieldErr: { display: "block", fontSize: 13, color: "#d23b3b", marginTop: 6, fontWeight: 600 },
  sentBox: { textAlign: "center", padding: "30px 10px" },
  sentIc: { width: 64, height: 64, borderRadius: 999, background: "var(--green-tint)", color: "var(--green)", display: "grid", placeItems: "center", margin: "0 auto 22px" },

  /* footer */
  footer: { background: "var(--blue-900)", color: "rgba(255,255,255,.7)" },
  footerGrid: { display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr", gap: 40, padding: "64px 28px 48px" },
  footLogoWrap: { background: "#fff", display: "inline-flex", padding: "12px 16px", borderRadius: 14, marginBottom: 18 },
  footText: { fontSize: 15, lineHeight: 1.6, maxWidth: 320, color: "rgba(255,255,255,.66)" },
  footLic: { display: "inline-flex", alignItems: "center", gap: 8, marginTop: 18, fontSize: 13.5, fontWeight: 700, color: "#8fd0a3", fontFamily: "var(--font-display)" },
  footHead: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 16, textTransform: "uppercase", letterSpacing: ".06em" },
  footLink: { display: "block", fontSize: 15, color: "rgba(255,255,255,.66)", padding: "6px 0", transition: "color .18s" },
  footBottom: { borderTop: "1px solid rgba(255,255,255,.1)" },
  footBottomRow: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 28px", fontSize: 13.5, color: "rgba(255,255,255,.5)" },
};

/* ===================== RESPONSIVE + INTERACTION CSS ===================== */
const css = `
.nav-link::after { content:""; position:absolute; left:0; bottom:0; width:0; height:2px; background:var(--green); transition:width .22s; }
.nav-link:hover { color: var(--blue-700); }
.nav-link:hover::after { width:100%; }
.ut-ic { width:15px; height:15px; }
.svc-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); border-color: #d4e2f0; }
.svc-link .arrow, .svc-link svg { transition: transform .2s; }
.svc-card:hover .svc-link svg { transform: translateX(4px); }
.contact-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
.area-chip { transition: transform .18s, background .18s; }
.area-chip:hover { transform: translateY(-2px); background: var(--green-tint); }
.area-chip svg { width:14px; height:14px; }
.rev-arrow:hover { background: var(--blue-700); color:#fff; border-color: var(--blue-700); }
.rev-arrow .flip { transform: scaleX(-1); }
.footLink:hover, .footer a:hover { color:#fff !important; }
input:focus, select:focus, textarea:focus { border-color: var(--blue-600) !important; box-shadow: 0 0 0 3px rgba(21,101,168,.14); }
.mob-btn { display:none; }

@media (max-width: 980px) {
  .desk-nav { display:none !important; }
  .mob-btn { display:flex !important; }
  .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
  .hero-media { order: -1; }
  .why-grid, .area-grid, .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
  .footer-grid { grid-template-columns: 1fr 1fr !important; }
  .svc-grid { grid-template-columns: 1fr 1fr !important; }
  .stats-grid { grid-template-columns: 1fr 1fr !important; }
  .stats-grid > div:nth-child(2) { border-right: none !important; }
}
@media (max-width: 620px) {
  body { font-size: 16px; }
  .wrap { padding: 0 18px; }
  .utility { display:none; }
  .svc-grid { grid-template-columns: 1fr !important; }
  .footer-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
  .contact-cards, .field-row { grid-template-columns: 1fr !important; }
  .stat-item { }
  .rev-nav { position: static !important; }
  .revCard { padding: 32px 24px !important; }
  .contact-grid .contactCards { grid-template-columns: 1fr !important; }
  .footBottomRow { flex-direction: column; gap: 8px; text-align:center; }
}
@media (max-width: 480px) {
  .stats-grid { grid-template-columns: 1fr 1fr; }
}
`;

/* ===================== APP ===================== */
function App() {
  useReveal();
  useEffect(() => {
    const tag = document.createElement("style");
    tag.textContent = css;
    document.head.appendChild(tag);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <ServiceArea />
      <Testimonials />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

Object.assign(window, { S });
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
