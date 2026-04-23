import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ─────────────────────────────────────────────────────────────
   ContactUs — M-Track Research Website
   Aesthetic: Dark sci / neural-signal lab
   Fonts: Manrope (display) + Inter (body)
   Accent: #00FFA3 cyan-green on deep navy
───────────────────────────────────────────────────────────────── */

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@500;600;700;800&display=swap');`;

const STYLES = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --green:   #00FFA3;
    --green-d: #00cc82;
    --navy:    #050c14;
    --navy2:   #071018;
    --card:    #0b1624;
    --card2:   #0e1c2b;
    --border:  rgba(0,255,163,0.15);
    --border2: rgba(255,255,255,0.07);
    --text:    #e8f0f8;
    --muted:   #6b8299;
    --ff-d:    'Manrope', sans-serif;
    --ff-b:    'Inter', sans-serif;
  }
  body { background: var(--navy); color: var(--text); font-family: var(--ff-b); }

  .cu-page { min-height: 100vh; overflow-x: hidden; }

  .scanlines { position: relative; }
  .scanlines::before {
    content: ''; position: absolute; inset: 0; z-index: 2; pointer-events: none;
    background: repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px);
  }

  .tag {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: var(--ff-d); font-size: 10px; font-weight: 800;
    letter-spacing: 0.22em; text-transform: uppercase; color: var(--green);
    padding: 6px 14px; border-radius: 100px;
    background: rgba(0,255,163,0.06); border: 1px solid rgba(0,255,163,0.22);
  }
  .tag::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%;
    background: var(--green); box-shadow: 0 0 8px var(--green);
    animation: blink 2s ease-in-out infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.25} }

  .reveal { opacity: 0; transform: translateY(28px); transition: opacity .65s ease, transform .65s ease; }
  .reveal.in { opacity: 1; transform: none; }
  .d1 { transition-delay:.1s } .d2 { transition-delay:.2s }
  .d3 { transition-delay:.3s } .d4 { transition-delay:.4s }

  .cu-hero {
    position: relative; overflow: hidden;
    padding: 130px 40px 80px;
    background: var(--navy2);
    border-bottom: 1px solid var(--border2);
  }
  .cu-hero-glow {
    position: absolute; border-radius: 50%; pointer-events: none; filter: blur(90px);
  }
  .g1 { width:500px;height:500px;background:rgba(0,255,163,.07);top:-120px;left:-80px; }
  .g2 { width:340px;height:340px;background:rgba(0,180,255,.05);bottom:0;right:5%; }

  .cu-circuit {
    position: absolute; right: 0; top: 0; width: 520px; height: 100%;
    opacity: .07; pointer-events: none;
  }

  .cu-hero-inner {
    position: relative; z-index: 3;
    max-width: 1280px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
  }
  .cu-hero-eyebrow { display:flex;align-items:center;gap:14px;margin-bottom:24px; }
  .cu-hero-line { flex:1;max-width:56px;height:1px;background:linear-gradient(90deg,var(--green),transparent); }
  .cu-hero-h1 {
    font-family: var(--ff-d); font-size: clamp(2.2rem,4.5vw,3.6rem);
    font-weight: 800; line-height: 1.1; letter-spacing: -.03em; margin-bottom: 20px;
  }
  .cu-hero-h1 .acc {
    background: linear-gradient(130deg,var(--green),#00d4ff);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
  }
  .cu-hero-sub { font-size:15px;line-height:1.8;color:var(--muted);max-width:480px; }

  .cu-info-strip {
    display: grid; grid-template-columns: repeat(3,1fr); gap:16px; margin-top: 40px;
  }
  .cu-info-card {
    border-radius: 16px; border: 1px solid var(--border2);
    background: rgba(255,255,255,.02); padding: 20px;
    transition: border-color .3s, transform .3s;
  }
  .cu-info-card:hover { border-color: var(--border); transform: translateY(-3px); }
  .cu-info-icon { font-size: 22px; margin-bottom: 12px; }
  .cu-info-label { font-family: var(--ff-d); font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; color: var(--green); margin-bottom: 6px; }
  .cu-info-val { font-size: 13px; color: var(--muted); line-height: 1.6; }

  .cu-terminal {
    border-radius: 20px; border: 1px solid var(--border);
    background: rgba(11,22,36,.75); backdrop-filter: blur(18px);
    overflow: hidden; box-shadow: 0 32px 80px rgba(0,0,0,.5);
  }
  .cu-terminal-bar {
    display: flex; align-items: center; gap: 8px;
    padding: 14px 20px; background: rgba(0,0,0,.35);
    border-bottom: 1px solid var(--border2);
  }
  .dot { width:10px;height:10px;border-radius:50%; }
  .dot-r{background:#ff5f57;} .dot-y{background:#febc2e;} .dot-g{background:#28c840;}
  .cu-terminal-title {
    margin-left: auto; margin-right: auto;
    font-family: var(--ff-d); font-size: 11px; font-weight: 800;
    letter-spacing: .15em; text-transform: uppercase; color: var(--muted);
  }
  .cu-terminal-body { padding: 28px 28px 32px; }
  .cu-terminal-line {
    font-family: 'Courier New', monospace; font-size: 12px; line-height: 2;
    color: var(--muted);
  }
  .cu-terminal-line .prompt { color: var(--green); }
  .cu-terminal-line .key { color: #7dd3fc; }
  .cu-terminal-line .val { color: #e2e8f0; }
  .cu-cursor {
    display: inline-block; width: 8px; height: 14px;
    background: var(--green); vertical-align: middle; margin-left: 2px;
    animation: cursor-blink .9s step-end infinite;
  }
  @keyframes cursor-blink { 0%,100%{opacity:1} 50%{opacity:0} }

  .cu-main {
    max-width: 1280px; margin: 0 auto;
    padding: 90px 40px 100px;
    display: grid; grid-template-columns: 1fr 380px; gap: 56px; align-items: start;
  }

  .cu-form-wrap {
    border-radius: 24px; border: 1px solid var(--border2);
    background: var(--card); padding: 48px;
  }
  .cu-form-head { margin-bottom: 40px; }
  .cu-form-h2 {
    font-family: var(--ff-d); font-size: clamp(1.5rem,2.5vw,2rem);
    font-weight: 800; margin-top: 14px; margin-bottom: 10px;
    letter-spacing: -.02em;
  }
  .cu-form-sub { font-size: 14px; line-height: 1.7; color: var(--muted); }

  .cu-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
  .cu-field { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
  .cu-field:last-child { margin-bottom: 0; }
  .cu-label {
    font-family: var(--ff-d); font-size: 11px; font-weight: 800;
    letter-spacing: .12em; text-transform: uppercase; color: var(--muted);
  }
  .cu-label span { color: var(--green); margin-left: 2px; }
  .cu-input, .cu-select, .cu-textarea {
    background: rgba(255,255,255,.03); border: 1px solid var(--border2);
    border-radius: 12px; padding: 14px 16px;
    color: var(--text); font-family: var(--ff-b); font-size: 14px;
    transition: border-color .25s, box-shadow .25s;
    outline: none; width: 100%;
  }
  .cu-input::placeholder, .cu-textarea::placeholder { color: #3d5166; }
  .cu-input:focus, .cu-select:focus, .cu-textarea:focus {
    border-color: var(--green); box-shadow: 0 0 0 3px rgba(0,255,163,.08);
  }
  .cu-select { appearance: none; cursor: pointer; }
  .cu-select-wrap { position: relative; }
  .cu-select-wrap::after {
    content: '▾'; position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
    color: var(--muted); pointer-events: none; font-size: 13px;
  }
  .cu-textarea { resize: vertical; min-height: 130px; }

  .cu-submit {
    margin-top: 32px; width: 100%;
    display: inline-flex; align-items: center; justify-content: center; gap: 10px;
    padding: 16px 32px; border-radius: 100px;
    background: var(--green); color: #000;
    font-family: var(--ff-d); font-size: 14px; font-weight: 800; letter-spacing: .05em;
    border: none; cursor: pointer;
    transition: background .25s, transform .2s, box-shadow .25s;
    box-shadow: 0 0 0 0 rgba(0,255,163,.4);
  }
  .cu-submit:hover {
    background: var(--green-d); transform: translateY(-2px);
    box-shadow: 0 10px 36px rgba(0,255,163,.28);
  }
  .cu-submit:disabled { opacity: .5; cursor: not-allowed; transform: none; }

  .cu-success {
    display: flex; align-items: flex-start; gap: 14px;
    margin-top: 24px; padding: 18px 20px; border-radius: 14px;
    border: 1px solid rgba(0,255,163,.25); background: rgba(0,255,163,.06);
    animation: fadeUp .4s ease;
  }
  @keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
  .cu-success-icon { font-size: 20px; flex-shrink: 0; }
  .cu-success-text { font-size: 13px; line-height: 1.7; color: var(--text); }
  .cu-success-text strong { color: var(--green); display: block; margin-bottom: 4px; font-family: var(--ff-d); }

  .cu-sidebar { display: flex; flex-direction: column; gap: 20px; }

  .cu-sidebar-card {
    border-radius: 20px; border: 1px solid var(--border2);
    background: var(--card); padding: 28px;
    transition: border-color .3s;
  }
  .cu-sidebar-card:hover { border-color: var(--border); }

  .cu-sidebar-h { font-family: var(--ff-d); font-size: 15px; font-weight: 800; margin-bottom: 6px; }
  .cu-sidebar-sub { font-size: 13px; color: var(--muted); line-height: 1.6; margin-bottom: 20px; }

  .cu-qlink {
    display: flex; align-items: center; gap: 12px;
    padding: 12px 14px; border-radius: 12px;
    border: 1px solid var(--border2); background: rgba(0,0,0,.15);
    margin-bottom: 10px; text-decoration: none;
    transition: border-color .25s, background .25s;
  }
  .cu-qlink:last-child { margin-bottom: 0; }
  .cu-qlink:hover { border-color: var(--border); background: rgba(0,255,163,.04); }
  .cu-qlink-icon {
    width: 34px; height: 34px; border-radius: 10px; flex-shrink: 0;
    background: rgba(0,255,163,.08); display: flex; align-items: center; justify-content: center; font-size: 15px;
  }
  .cu-qlink-label { font-family: var(--ff-d); font-size: 12px; font-weight: 800; color: var(--text); }
  .cu-qlink-sub { font-size: 11px; color: var(--muted); margin-top: 2px; }
  .cu-qlink-arrow { margin-left: auto; color: var(--muted); font-size: 13px; transition: color .25s, transform .25s; }
  .cu-qlink:hover .cu-qlink-arrow { color: var(--green); transform: translateX(3px); }

  @media(max-width:1024px) {
    .cu-hero-inner { grid-template-columns: 1fr; }
    .cu-hero-inner > div:last-child { display:none; }
    .cu-info-strip { grid-template-columns: 1fr 1fr; }
    .cu-main { grid-template-columns: 1fr; }
  }
  @media(max-width:680px) {
    .cu-hero { padding: 110px 20px 60px; }
    .cu-main { padding: 60px 20px 80px; }
    .cu-form-wrap { padding: 28px 20px; }
    .cu-row { grid-template-columns: 1fr; }
    .cu-info-strip { grid-template-columns: 1fr; }
  }
`;

function useReveal() {
  const refs = useRef([]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.1 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (i) => (el) => { refs.current[i] = el; };
}

function Terminal() {
  const lines = [
    { prompt: "$", key: "module", val: "contact_us.init()" },
    { prompt: "→", key: "status", val: '"ready to receive"' },
    { prompt: "→", key: "email", val: '"mtrack@university.lk"' },
    { prompt: "→", key: "location", val: '"Colombo, Sri Lanka"' },
    { prompt: "→", key: "response_time", val: '"< 48 hours"' },
    { prompt: "→", key: "modules", val: "[facial, voice, music, eeg]" },
  ];
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= lines.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 420);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div className="cu-terminal">
      <div className="cu-terminal-bar">
        <div className="dot dot-r" /><div className="dot dot-y" /><div className="dot dot-g" />
        <div className="cu-terminal-title">mtrack — contact.js</div>
      </div>
      <div className="cu-terminal-body">
        {lines.slice(0, shown).map((l, i) => (
          <div key={i} className="cu-terminal-line">
            <span className="prompt">{l.prompt} </span>
            <span className="key">{l.key}</span>
            <span style={{ color: "var(--muted)" }}> : </span>
            <span className="val">{l.val}</span>
          </div>
        ))}
        {shown < lines.length && (
          <div className="cu-terminal-line">
            <span className="prompt">→ </span><span className="cu-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function ContactUs() {
  const r = useReveal();
  const [form, setForm] = useState({ name: "", email: "", affiliation: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1800);
  };

  const quickLinks = [
    { icon: "🧬", label: "Domain Overview", sub: "Research context & literature", to: "/domain" },
    { icon: "📍", label: "Milestones", sub: "Progress & deliverables", to: "/milestones" },
    { icon: "📄", label: "Documents", sub: "Reports & proposals", to: "/documents" },
    { icon: "🎤", label: "Presentations", sub: "Slides & defence materials", to: "/slides" },
  ];

  const infoCards = [
    { icon: "📧", label: "Email", val: "mtrack@sliit.lk" },
    { icon: "📍", label: "Location", val: "SLIIT, Malabe\nColombo, Sri Lanka" },
    { icon: "⏱", label: "Response Time", val: "Within 48 hours\nWeekdays only" },
  ];

  return (
    <main className="cu-page">
      <style>{FONTS}{STYLES}</style>

      <section className="cu-hero scanlines">
        <div className="cu-hero-glow g1" />
        <div className="cu-hero-glow g2" />
        <svg className="cu-circuit" viewBox="0 0 520 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 0 v120 h80 v60 h-40 v80 h200 v-40 h60 v200 h-100" stroke="#00FFA3" strokeWidth="1" fill="none"/>
          <path d="M200 0 v60 h-60 v120 h160 v-80 h80 v200" stroke="#00FFA3" strokeWidth="0.8" fill="none"/>
          <path d="M380 0 v80 h-100 v40 h60 v80 h-120 v60 h80 v160" stroke="#00FFA3" strokeWidth="0.6" fill="none"/>
          <circle cx="140" cy="180" r="5" fill="#00FFA3" opacity="0.6"/>
          <circle cx="280" cy="140" r="4" fill="#00FFA3" opacity="0.5"/>
          <circle cx="360" cy="320" r="5" fill="#00FFA3" opacity="0.4"/>
          <circle cx="220" cy="260" r="3" fill="#00d4ff" opacity="0.5"/>
        </svg>

        <div className="cu-hero-inner">
          <div>
            <div className="cu-hero-eyebrow">
              <span className="tag">M-Track · Contact</span>
              <div className="cu-hero-line" />
            </div>
            <h1 className="cu-hero-h1">
              Get in Touch<br />
              with the <span className="acc">M-Track</span><br />
              Research Team
            </h1>
            <p className="cu-hero-sub">
              Have questions about our research, collaboration opportunities, or want to learn
              more about our multi-modal mental health detection system? We'd love to hear from you.
            </p>
            <div className="cu-info-strip">
              {infoCards.map((c, i) => (
                <div key={i} className="cu-info-card">
                  <div className="cu-info-icon">{c.icon}</div>
                  <div className="cu-info-label">{c.label}</div>
                  <div className="cu-info-val" style={{ whiteSpace: "pre-line" }}>{c.val}</div>
                </div>
              ))}
            </div>
          </div>
          <Terminal />
        </div>
      </section>

      <div className="cu-main">
        <div className="cu-form-wrap reveal" ref={r(0)}>
          <div className="cu-form-head">
            <span className="tag">Send a Message</span>
            <h2 className="cu-form-h2">Start a conversation with us</h2>
            <p className="cu-form-sub">
              Fill out the form below and a member of the M-Track research team will respond
              within 48 hours on weekdays.
            </p>
          </div>

          <form onSubmit={submit}>
            <div className="cu-row">
              <div className="cu-field">
                <label className="cu-label">Full Name <span>*</span></label>
                <input
                  className="cu-input" name="name" required
                  placeholder="e.g. Kasun Perera"
                  value={form.name} onChange={handle}
                />
              </div>
              <div className="cu-field">
                <label className="cu-label">Email Address <span>*</span></label>
                <input
                  className="cu-input" name="email" type="email" required
                  placeholder="you@university.lk"
                  value={form.email} onChange={handle}
                />
              </div>
            </div>

            <div className="cu-row">
              <div className="cu-field">
                <label className="cu-label">Affiliation</label>
                <input
                  className="cu-input" name="affiliation"
                  placeholder="University / Organisation"
                  value={form.affiliation} onChange={handle}
                />
              </div>
              <div className="cu-field">
                <label className="cu-label">Subject <span>*</span></label>
                <div className="cu-select-wrap">
                  <select
                    className="cu-select" name="subject" required
                    value={form.subject} onChange={handle}
                    style={{ color: form.subject ? "var(--text)" : "#3d5166" }}
                  >
                    <option value="" disabled>Select a topic…</option>
                    <option>Research Collaboration</option>
                    <option>Academic Enquiry</option>
                    <option>Technical Question</option>
                    <option>Media & Press</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="cu-field">
              <label className="cu-label">Message <span>*</span></label>
              <textarea
                className="cu-textarea" name="message" required
                placeholder="Describe your enquiry in detail…"
                value={form.message} onChange={handle}
              />
            </div>

            <button className="cu-submit" type="submit" disabled={loading || sent}>
              {loading ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83">
                      <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite"/>
                    </path>
                  </svg>
                  Sending…
                </>
              ) : sent ? (
                <> ✓ Message Sent </>
              ) : (
                <>
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>

            {sent && (
              <div className="cu-success">
                <div className="cu-success-icon">✅</div>
                <div className="cu-success-text">
                  <strong>Message received — thank you!</strong>
                  A member of the M-Track team will get back to you within 48 hours on weekdays.
                  Check your inbox for a confirmation.
                </div>
              </div>
            )}
          </form>
        </div>

        <aside className="cu-sidebar">
          <div className="cu-sidebar-card reveal d2" ref={r(2)}>
            <span className="tag" style={{ marginBottom: 16, display: "inline-flex" }}>Quick Links</span>
            <h3 className="cu-sidebar-h">Explore M-Track</h3>
            <p className="cu-sidebar-sub">Jump directly to key sections of the research website.</p>

            {quickLinks.map((l, i) => (
              <Link key={i} to={l.to} className="cu-qlink">
                <div className="cu-qlink-icon">{l.icon}</div>
                <div>
                  <div className="cu-qlink-label">{l.label}</div>
                  <div className="cu-qlink-sub">{l.sub}</div>
                </div>
                <span className="cu-qlink-arrow">→</span>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
