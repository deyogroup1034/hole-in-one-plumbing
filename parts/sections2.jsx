/* ===================== WHY US ===================== */
function WhyUs() {
  const points = [
    { ic: "award", t: "20+ years of experience", s: "Two decades diagnosing North Texas plumbing — we've seen it before." },
    { ic: "check", t: "Honest, up-front pricing", s: "You approve the quote before we start. Often the final bill comes in lower." },
    { ic: "clock", t: "Prompt, respectful service", s: "We show up when we say we will, and we leave your home clean." },
    { ic: "shield", t: "Licensed & insured", s: "Master Plumber #M37741 — every job done to code and guaranteed." },
  ];
  return (
    <section id="why" style={{ ...S.section, background: "var(--paper)" }}>
      <div className="wrap why-grid" style={S.whyGrid}>
        <div className="reveal why-media" style={{ position: "relative" }}>
          <Placeholder label="Photo · team & service van" style={{ height: 460, borderRadius: 20 }} />
          <div style={S.whyStat}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--green)", lineHeight: 1 }}>{BIZ.years}</div>
            <div style={{ fontSize: 14, color: "var(--slate-600)", fontWeight: 600, marginTop: 4 }}>years serving<br/>North Texas</div>
          </div>
        </div>
        <div className="reveal">
          <span className="eyebrow">Why homeowners call us</span>
          <h2 style={S.h2}>A plumber you'll<br/>actually want to call back</h2>
          <p style={S.secLede} className="why-lede">
            At {BIZ.name}, our goal is simple: top-notch service for every repair, treating each customer the way we'd want to be treated. We service the Dallas area from Rockwall to Frisco and Carrollton to Anna — and everything in between.
          </p>
          <div style={S.whyList}>
            {points.map((p, i) => (
              <div key={i} style={S.whyItem}>
                <div style={S.whyItemIc}><Icon name={p.ic} /></div>
                <div>
                  <div style={S.whyItemT}>{p.t}</div>
                  <div style={S.whyItemS}>{p.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== SERVICE AREA ===================== */
function ServiceArea() {
  return (
    <section id="area" style={S.section}>
      <div className="wrap area-grid" style={S.areaGrid}>
        <div className="reveal">
          <span className="eyebrow">Where we work</span>
          <h2 style={S.h2}>Proudly serving the<br/>DFW Metroplex</h2>
          <p style={S.secLede}>From our home base in Wylie, we cover communities across North Texas. Don't see your town? Give us a call — chances are we're already nearby.</p>
          <div className="area-chips" style={S.areaChips}>
            {AREAS.map((a) => (
              <span key={a} className="area-chip" style={S.areaChip}><Icon name="pin" /> {a}</span>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: "var(--slate-500)", marginTop: 22, display: "flex", alignItems: "center", gap: 8 }}>
            <Icon name="truck" /> Proud sponsor of the Wylie Pirates.
          </p>
        </div>
        <div className="reveal" style={{ position: "relative" }}>
          <Placeholder label="Map · DFW service area" style={{ height: 400, borderRadius: 20 }} />
        </div>
      </div>
    </section>
  );
}

/* ===================== TESTIMONIALS ===================== */
function Testimonials() {
  const [i, setI] = useState(0);
  const n = TESTIMONIALS.length;
  const go = (d) => setI((p) => (p + d + n) % n);
  const t = TESTIMONIALS[i];
  return (
    <section id="reviews" style={{ ...S.section, background: "var(--blue-900)", overflow: "hidden" }}>
      <div style={S.revGlow} />
      <div className="wrap" style={{ position: "relative" }}>
        <div className="reveal" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 44px" }}>
          <span className="eyebrow" style={{ color: "#8fd0a3", justifyContent: "center" }}>In their words</span>
          <h2 style={{ ...S.h2, color: "#fff" }}>What North Texas<br/>homeowners say</h2>
        </div>
        <div className="reveal" style={S.revCard}>
          <div style={S.revStars}>
            {[0,1,2,3,4].map((k) => <span key={k} style={{ color: "#f5b933", display: "inline-flex" }}><Icon name="star" /></span>)}
          </div>
          <p style={S.revQuote}>"{t.quote}"</p>
          <div style={S.revWho}>
            <div style={S.revAvatar}>{t.name.replace(/^(Mr|Mrs|Ms)\.\s/, "").charAt(0)}</div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--ink)" }}>{t.name}</div>
              <div style={{ fontSize: 14, color: "var(--slate-500)" }}>{t.city}</div>
            </div>
          </div>
          <div style={S.revNav}>
            <button onClick={() => go(-1)} style={S.revArrow} aria-label="Previous" className="rev-arrow"><Icon name="arrow" className="flip" /></button>
            <button onClick={() => go(1)} style={S.revArrow} aria-label="Next" className="rev-arrow"><Icon name="arrow" /></button>
          </div>
        </div>
        <div style={S.revDots}>
          {TESTIMONIALS.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={"Review " + (k+1)}
              style={{ ...S.revDot, width: k === i ? 26 : 8, background: k === i ? "var(--green)" : "rgba(255,255,255,.3)" }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== CONTACT / SCHEDULE ===================== */
function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = "Please enter your name";
    if (!/[0-9]{7,}/.test(form.phone.replace(/\D/g, ""))) er.phone = "Enter a valid phone number";
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = "Enter a valid email";
    if (!form.service) er.service = "Choose a service";
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

  return (
    <section id="contact" style={{ ...S.section, background: "var(--paper)" }}>
      <div className="wrap contact-grid" style={S.contactGrid}>
        {/* left info */}
        <div className="reveal">
          <span className="eyebrow">Get in touch</span>
          <h2 style={S.h2}>Schedule service<br/>or just call us</h2>
          <p style={S.secLede}>Tell us what's going on and we'll get back to you fast. Prefer to talk it through? Give us a ring — we're happy to help.</p>

          <div style={S.contactCards}>
            {BIZ.phones.map((p, idx) => (
              <a key={p} href={"tel:" + p.replace(/\D/g, "")} className="contact-card" style={S.contactCard}>
                <div style={S.contactIc}><Icon name="phone" /></div>
                <div>
                  <div style={S.contactLbl}>{idx === 0 ? "Call / text" : "Alternate line"}</div>
                  <div style={S.contactVal}>{p}</div>
                </div>
              </a>
            ))}
            <a href={"mailto:" + BIZ.email} className="contact-card" style={S.contactCard}>
              <div style={S.contactIc}><Icon name="mail" /></div>
              <div>
                <div style={S.contactLbl}>Email us</div>
                <div style={S.contactVal}>{BIZ.email}</div>
              </div>
            </a>
            <div style={S.contactCard}>
              <div style={S.contactIc}><Icon name="clock" /></div>
              <div>
                <div style={S.contactLbl}>Hours</div>
                <div style={S.contactVal}>{BIZ.hours}</div>
              </div>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="reveal" style={S.formCard}>
          {sent ? (
            <div style={S.sentBox}>
              <div style={S.sentIc}><Icon name="check" /></div>
              <h3 style={{ fontSize: 26, marginBottom: 10 }}>Request received!</h3>
              <p style={{ color: "var(--slate-500)", maxWidth: 340, margin: "0 auto 22px" }}>
                Thanks, {form.name.split(" ")[0]}. We'll reach out shortly to confirm your appointment. Need us sooner? Call {BIZ.phones[0]}.
              </p>
              <button onClick={() => { setSent(false); setForm({ name:"",phone:"",email:"",service:"",message:"" }); }} className="btn btn-ghost">Send another request</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <h3 style={{ fontSize: 23, marginBottom: 6 }}>Request your appointment</h3>
              <p style={{ fontSize: 14.5, color: "var(--slate-500)", marginBottom: 22 }}>We'll confirm by phone — usually same day.</p>
              <Field label="Full name" err={errors.name}>
                <input style={S.input} value={form.name} onChange={set("name")} placeholder="Jane Smith" />
              </Field>
              <div className="field-row" style={S.fieldRow}>
                <Field label="Phone" err={errors.phone}>
                  <input style={S.input} value={form.phone} onChange={set("phone")} placeholder="(972) 555-0123" inputMode="tel" />
                </Field>
                <Field label="Email (optional)" err={errors.email}>
                  <input style={S.input} value={form.email} onChange={set("email")} placeholder="jane@email.com" />
                </Field>
              </div>
              <Field label="Service needed" err={errors.service}>
                <select style={{ ...S.input, appearance: "none", backgroundImage: "linear-gradient(45deg, transparent 50%, var(--slate-500) 50%), linear-gradient(135deg, var(--slate-500) 50%, transparent 50%)", backgroundPosition: "calc(100% - 20px) 21px, calc(100% - 14px) 21px", backgroundSize: "6px 6px, 6px 6px", backgroundRepeat: "no-repeat", paddingRight: 40 }} value={form.service} onChange={set("service")}>
                  <option value="">Select a service…</option>
                  {SERVICES.map((s) => <option key={s.key} value={s.title}>{s.title}</option>)}
                  <option value="Other">Something else</option>
                </select>
              </Field>
              <Field label="What's going on? (optional)">
                <textarea style={{ ...S.input, minHeight: 96, resize: "vertical" }} value={form.message} onChange={set("message")} placeholder="Describe the problem…" />
              </Field>
              <button type="submit" className="btn btn-green btn-lg" style={{ width: "100%", marginTop: 6 }}>Request appointment <Icon name="arrow" /></button>
              <p style={{ fontSize: 12.5, color: "var(--slate-400)", textAlign: "center", marginTop: 12 }}>This is a demo form — submissions aren't sent anywhere yet.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, err, children }) {
  return (
    <label style={{ display: "block", marginBottom: 16 }}>
      <span style={S.fieldLbl}>{label}</span>
      {children}
      {err && <span style={S.fieldErr}>{err}</span>}
    </label>
  );
}

/* ===================== FOOTER ===================== */
function Footer() {
  return (
    <footer style={S.footer}>
      <div className="wrap footer-grid" style={S.footerGrid}>
        <div>
          <div style={S.footLogoWrap}><img src="assets/logo.png" alt="Hole in One Plumbing" style={{ height: 64 }} /></div>
          <p style={S.footText}>Honest, experienced plumbing for homeowners across the Dallas–Ft. Worth Metroplex. Done right the first time.</p>
          <div style={S.footLic}><Icon name="award" /> {BIZ.license}</div>
        </div>
        <div>
          <div style={S.footHead}>Services</div>
          {SERVICES.map((s) => <a key={s.key} href="#services" style={S.footLink}>{s.title}</a>)}
        </div>
        <div>
          <div style={S.footHead}>Company</div>
          <a href="#why" style={S.footLink}>Why choose us</a>
          <a href="#area" style={S.footLink}>Service area</a>
          <a href="#reviews" style={S.footLink}>Reviews</a>
          <a href="#contact" style={S.footLink}>Contact</a>
        </div>
        <div>
          <div style={S.footHead}>Get in touch</div>
          {BIZ.phones.map((p) => <a key={p} href={"tel:" + p.replace(/\D/g,"")} style={S.footLink}>{p}</a>)}
          <a href={"mailto:" + BIZ.email} style={S.footLink}>{BIZ.email}</a>
          <div style={{ ...S.footLink, color: "rgba(255,255,255,.5)" }}>{BIZ.hours}</div>
        </div>
      </div>
      <div style={S.footBottom}>
        <div className="wrap" style={S.footBottomRow}>
          <span>© {new Date().getFullYear()} {BIZ.name}, LLC. All rights reserved.</span>
          <span>{BIZ.license}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { WhyUs, ServiceArea, Testimonials, Contact, Field, Footer });
