import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ─────────────────────────────────────────────────────────────
   DESIGN DIRECTION
   Dark-sci / medical-research aesthetic.
   Professional typography:
   Display: Manrope
   Body: Inter
───────────────────────────────────────────────────────────────── */

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@500;600;700;800&display=swap');
`;

const STYLES = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --green:   #00FFA3;
    --green-d: #00cc82;
    --navy:    #050c14;
    --navy2:   #081019;
    --card:    #0b1624;
    --card2:   #0f1e2e;
    --border:  rgba(0,255,163,0.12);
    --border2: rgba(255,255,255,0.06);
    --text:    #e8f0f8;
    --muted:   #6b8299;
    --ff-disp: 'Manrope', sans-serif;
    --ff-body: 'Inter', sans-serif;
  }

  html { scroll-behavior: smooth; }
  body { background: var(--navy); color: var(--text); font-family: var(--ff-body); }

  .scanlines::before {
    content: '';
    position: absolute; inset: 0; z-index: 2; pointer-events: none;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px, transparent 3px,
      rgba(0,0,0,0.18) 3px, rgba(0,0,0,0.18) 4px
    );
  }

  .grain::after {
    content: '';
    position: absolute; inset: 0; z-index: 1; pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
    opacity: 0.4;
  }

  .reveal {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }
  .reveal-delay-4 { transition-delay: 0.4s; }

  .tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--ff-disp);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--green);
    padding: 7px 14px;
    border-radius: 999px;
    background: rgba(0,255,163,0.06);
    border: 1px solid rgba(0,255,163,0.25);
  }

  .tag::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 8px var(--green);
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.35; }
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 28px;
    border-radius: 999px;
    background: var(--green);
    color: #000;
    font-family: var(--ff-disp);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
    box-shadow: 0 0 0 0 rgba(0,255,163,0.4);
  }

  .btn-primary:hover {
    background: var(--green-d);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0,255,163,0.3);
  }

  .btn-ghost {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 13px 28px;
    border-radius: 999px;
    background: transparent;
    color: var(--text);
    font-family: var(--ff-disp);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-decoration: none;
    border: 1px solid var(--border2);
    cursor: pointer;
    transition: border-color 0.25s, color 0.25s, transform 0.2s;
  }

  .btn-ghost:hover {
    border-color: var(--green);
    color: var(--green);
    transform: translateY(-2px);
  }

  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
  }

  .hero-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      105deg,
      rgba(5,12,20,0.97) 0%,
      rgba(5,12,20,0.85) 55%,
      rgba(5,12,20,0.55) 100%
    );
  }

  .hero-glow {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(80px);
  }

  .hero-glow-1 {
    width: 600px;
    height: 600px;
    background: rgba(0,255,163,0.08);
    top: -100px;
    left: -100px;
  }

  .hero-glow-2 {
    width: 400px;
    height: 400px;
    background: rgba(0,180,255,0.05);
    bottom: 0;
    right: 10%;
  }

  .hero-inner {
    position: relative;
    z-index: 3;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 120px 40px 80px;
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 60px;
    align-items: center;
  }

  .hero-eyebrow {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 28px;
  }

  .hero-line {
    flex: 1;
    max-width: 60px;
    height: 1px;
    background: linear-gradient(90deg, var(--green), transparent);
  }

  .hero-h1 {
    font-family: var(--ff-disp);
    font-size: clamp(2.4rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -0.03em;
    margin-bottom: 24px;
  }

  .hero-h1 .accent {
    background: linear-gradient(135deg, var(--green) 0%, #00d4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-sub {
    font-size: 16px;
    line-height: 1.8;
    color: var(--muted);
    max-width: 560px;
    margin-bottom: 36px;
  }

  .hero-btns {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 48px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  .stat-card {
    border-radius: 16px;
    border: 1px solid var(--border2);
    background: rgba(255,255,255,0.03);
    padding: 16px;
    backdrop-filter: blur(8px);
    transition: border-color 0.3s, transform 0.3s;
  }

  .stat-card:hover {
    border-color: var(--border);
    transform: translateY(-3px);
  }

  .stat-val {
    font-family: var(--ff-disp);
    font-size: 24px;
    font-weight: 800;
    color: var(--green);
  }

  .stat-lbl {
    font-size: 11px;
    color: var(--muted);
    margin-top: 4px;
    letter-spacing: 0.05em;
  }

  .hero-card {
    border-radius: 24px;
    border: 1px solid var(--border);
    background: rgba(11,22,36,0.7);
    padding: 36px;
    backdrop-filter: blur(20px);
    position: relative;
    overflow: hidden;
  }

  .hero-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    background: radial-gradient(circle at top right, rgba(0,255,163,0.07), transparent 60%);
    pointer-events: none;
  }

  .hero-card-title {
    font-family: var(--ff-disp);
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 24px;
    margin-top: 12px;
    line-height: 1.35;
  }

  .check-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .check-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 14px 16px;
    border-radius: 14px;
    background: rgba(0,0,0,0.25);
    border: 1px solid var(--border2);
    transition: border-color 0.3s;
  }

  .check-item:hover {
    border-color: var(--border);
  }

  .check-icon {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 1px;
    background: var(--green);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 800;
    color: #000;
  }

  .check-text {
    font-size: 13px;
    line-height: 1.7;
    color: var(--muted);
  }

  .hero-card-foot {
    margin-top: 20px;
    font-size: 12px;
    line-height: 1.75;
    color: var(--muted);
    border-top: 1px solid var(--border2);
    padding-top: 20px;
  }

  .section-divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  .overview {
    max-width: 1280px;
    margin: 0 auto;
    padding: 100px 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
  }

  .overview-text {
    padding-right: 20px;
  }

  .section-h2 {
    font-family: var(--ff-disp);
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 800;
    line-height: 1.12;
    letter-spacing: -0.03em;
    margin-top: 16px;
    margin-bottom: 20px;
  }

  .section-p {
    font-size: 15px;
    line-height: 1.9;
    color: var(--muted);
    margin-bottom: 16px;
  }

  .overview-img {
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid var(--border2);
    aspect-ratio: 4 / 3;
    position: relative;
  }

  .overview-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease;
  }

  .overview-img:hover img {
    transform: scale(1.04);
  }

  .overview-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0,255,163,0.04), transparent 60%);
  }

  .modules-section {
    background: var(--navy2);
    border-top: 1px solid var(--border2);
    border-bottom: 1px solid var(--border2);
    padding: 100px 0;
  }

  .modules-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .modules-header {
    margin-bottom: 56px;
    max-width: 640px;
  }

  .modules-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .module-card {
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid var(--border2);
    background: var(--card);
    display: flex;
    flex-direction: column;
    transition: border-color 0.3s, transform 0.35s, box-shadow 0.35s;
    cursor: default;
  }

  .module-card:hover {
    border-color: rgba(0,255,163,0.3);
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,255,163,0.08);
  }

  .module-img {
    height: 200px;
    position: relative;
    overflow: hidden;
  }

  .module-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .module-card:hover .module-img img {
    transform: scale(1.08);
  }

  .module-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(11,22,36,0.9) 0%, rgba(11,22,36,0.2) 100%);
  }

  .module-badge {
    position: absolute;
    top: 14px;
    left: 14px;
    background: var(--green);
    color: #000;
    font-family: var(--ff-disp);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 999px;
  }

  .module-body {
    padding: 20px 22px 24px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .module-title {
    font-family: var(--ff-disp);
    font-size: 15px;
    font-weight: 800;
    margin-bottom: 10px;
    line-height: 1.45;
  }

  .module-desc {
    font-size: 13px;
    line-height: 1.75;
    color: var(--muted);
  }

  .focus-section {
    max-width: 1280px;
    margin: 0 auto;
    padding: 100px 40px;
  }

  .focus-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 56px;
  }

  .focus-card {
    border-radius: 20px;
    border: 1px solid var(--border2);
    background: var(--card);
    padding: 36px 32px;
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s, transform 0.3s;
  }

  .focus-card:hover {
    border-color: var(--border);
    transform: translateY(-4px);
  }

  .focus-card::before {
    content: '';
    position: absolute;
    top: -60px;
    right: -60px;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,255,163,0.07), transparent 70%);
    pointer-events: none;
  }

  .focus-num {
    font-family: var(--ff-disp);
    font-size: 48px;
    font-weight: 800;
    color: rgba(0,255,163,0.08);
    line-height: 1;
    margin-bottom: 20px;
    letter-spacing: -0.04em;
  }

  .focus-title {
    font-family: var(--ff-disp);
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 14px;
  }

  .focus-text {
    font-size: 14px;
    line-height: 1.85;
    color: var(--muted);
  }

  .cta-section {
    position: relative;
    overflow: hidden;
    border-top: 1px solid var(--border2);
  }

  .cta-bg {
    position: absolute;
    inset: 0;
  }

  .cta-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cta-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      105deg,
      rgba(5,12,20,0.97) 0%,
      rgba(5,12,20,0.88) 60%,
      rgba(5,12,20,0.7) 100%
    );
  }

  .cta-inner {
    position: relative;
    z-index: 2;
    max-width: 1280px;
    margin: 0 auto;
    padding: 100px 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  .cta-card {
    border-radius: 24px;
    border: 1px solid var(--border);
    background: rgba(11,22,36,0.6);
    padding: 48px;
    backdrop-filter: blur(20px);
  }

  .cta-h2 {
    font-family: var(--ff-disp);
    font-size: clamp(1.6rem, 2.5vw, 2.2rem);
    font-weight: 800;
    line-height: 1.18;
    margin-top: 14px;
    margin-bottom: 18px;
    letter-spacing: -0.03em;
  }

  .cta-p {
    font-size: 15px;
    line-height: 1.85;
    color: var(--muted);
    margin-bottom: 32px;
  }

  .cta-btns {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .cta-visual {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .cta-visual-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px 20px;
    border-radius: 16px;
    border: 1px solid var(--border2);
    background: rgba(255,255,255,0.02);
    backdrop-filter: blur(8px);
    transition: border-color 0.3s, transform 0.3s;
  }

  .cta-visual-item:hover {
    border-color: var(--border);
    transform: translateX(4px);
  }

  .cta-visual-icon {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    flex-shrink: 0;
    background: rgba(0,255,163,0.1);
    border: 1px solid rgba(0,255,163,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }

  .cta-visual-label {
    font-family: var(--ff-disp);
    font-size: 13px;
    font-weight: 700;
  }

  .cta-visual-sub {
    font-size: 12px;
    color: var(--muted);
    margin-top: 2px;
  }

  @media (max-width: 1100px) {
    .hero-inner { grid-template-columns: 1fr; }
    .hero-inner > div:last-child { display: none; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
    .modules-grid { grid-template-columns: repeat(2, 1fr); }
    .focus-grid { grid-template-columns: repeat(2, 1fr); }
    .cta-inner { grid-template-columns: 1fr; gap: 40px; }
    .overview { grid-template-columns: 1fr; }
    .overview-text { padding-right: 0; }
  }

  @media (max-width: 680px) {
    .hero-inner { padding: 100px 20px 60px; }
    .overview, .modules-inner, .focus-section, .cta-inner {
      padding-left: 20px;
      padding-right: 20px;
    }
    .modules-grid, .focus-grid, .stats-grid { grid-template-columns: 1fr; }
    .hero-btns { flex-direction: column; }
    .hero-h1 { font-size: 2rem; }
    .cta-card { padding: 32px 24px; }
  }
`;

function useReveal() {
  const refs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12 }
    );

    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (i) => (el) => {
    refs.current[i] = el;
  };
}

function Counter({ target }) {
  const [val, setVal] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const numTarget = parseInt(target.replace(/\D/g, ""), 10);
    if (!numTarget) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();

        let start = 0;
        const step = Math.ceil(numTarget / 40);

        const timer = setInterval(() => {
          start = Math.min(start + step, numTarget);
          setVal(start);
          if (start >= numTarget) clearInterval(timer);
        }, 35);
      },
      { threshold: 0.5 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  const prefix = target.replace(/[0-9]/g, "");
  const num = parseInt(target.replace(/\D/g, ""), 10);

  return <span ref={ref}>{num ? (prefix ? `${prefix}${val}` : val) : target}</span>;
}

export default function Home() {
  const r = useReveal();

  const modules = [
    {
      title: "Facial Emotion Recognition",
      description:
        "Detects facial expression patterns to identify emotional states that may reflect early psychological distress.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      num: "01",
    },
    {
      title: "Voice Emotion Recognition",
      description:
        "Analyzes pitch, tone, rhythm, and speech behaviour to detect emotionally significant vocal changes.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      num: "02",
    },
    {
      title: "Music Behaviour Analysis",
      description:
        "Studies listening patterns and preference shifts to uncover behavioural indicators linked to emotional well-being.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
      num: "03",
    },
    {
      title: "EEG Signal Analysis",
      description:
        "Uses brainwave-based signals to strengthen cognitive and emotional interpretation within the full system.",
      image:
        "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=800&q=80",
      num: "04",
    },
  ];

  const highlights = [
    "Multi-modal detection architecture",
    "Focused on Sri Lankan university students",
    "Research-led and academically structured",
    "Supports early and proactive risk identification",
  ];

  const stats = [
    { value: "04", label: "Core Modules" },
    { value: "AI", label: "Driven System" },
    { value: "24/7", label: "Monitoring Vision" },
    { value: "Local", label: "Context Fit" },
  ];

  const focusCards = [
    {
      title: "Research Focus",
      text: "A structured digital platform that presents the full project scope, research context, progress, and academic outputs in one unified space.",
      icon: "🔬",
    },
    {
      title: "Academic Presentation",
      text: "Organizes domain knowledge, milestones, documents, and presentation resources in a clean and evaluator-friendly format.",
      icon: "📐",
    },
    {
      title: "Project Identity",
      text: "Builds a professional online presence for the team and the complete multi-modal solution through a modern research website.",
      icon: "🧠",
    },
  ];

  const ctaLinks = [
    { icon: "🧬", label: "Domain Overview", sub: "Research background & literature" },
    { icon: "📍", label: "Milestones", sub: "Project progress & deliverables" },
    { icon: "📄", label: "Documents", sub: "Reports, proposals & papers" },
    { icon: "👥", label: "Meet the Team", sub: "Researchers & supervisors" },
  ];

  return (
    <main style={{ minHeight: "100vh", overflowX: "hidden", background: "var(--navy)" }}>
      <style>{FONTS}{STYLES}</style>

      <section className="hero scanlines grain">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80"
            alt=""
          />
        </div>

        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />

        <div className="hero-inner" style={{ position: "relative", zIndex: 3 }}>
          <div>
            <div className="hero-eyebrow">
              <span className="tag">M-Track · Research Project</span>
              <div className="hero-line" />
            </div>

            <h1 className="hero-h1">
              Early Detection of
              <br />
              <span className="accent">Mental Health Issues</span>
              <br />
              Among University Students
            </h1>

            <p className="hero-sub">
              A multi-modal intelligent system integrating facial expressions,
              voice patterns, music behaviour, and EEG signals to identify early
              psychological risk indicators in Sri Lankan university populations.
            </p>

            <div className="hero-btns">
              <a href="#overview" className="btn-primary">
                Explore Project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7h12M7 1l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <Link to="/domain" className="btn-ghost">
                View Domain
              </Link>
            </div>

            <div className="stats-grid">
              {stats.map((s, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-val">
                    <Counter target={s.value} />
                  </div>
                  <div className="stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-card">
            <span className="tag" style={{ marginBottom: 0 }}>
              Research Highlights
            </span>

            <h3 className="hero-card-title">
              A professional digital space for the complete project lifecycle
            </h3>

            <div className="check-list">
              {highlights.map((h, i) => (
                <div key={i} className="check-item">
                  <div className="check-icon">✓</div>
                  <p className="check-text">{h}</p>
                </div>
              ))}
            </div>

            <p className="hero-card-foot">
              The platform is designed to present the project domain,
              milestones, documents, slides, and team information through a
              clear, modern, and academically aligned interface.
            </p>
          </div>
        </div>
      </section>

      <section id="overview">
        <div className="overview">
          <div className="overview-text reveal" ref={r(0)}>
            <span className="tag">Project Overview</span>

            <h2 className="section-h2">
              A multi-modal approach to early mental health detection
            </h2>

            <p className="section-p">
              University students often experience academic stress, emotional
              pressure, and social challenges that affect their mental
              well-being. Traditional screening methods are useful, but they may
              not capture subtle early-stage signals in time.
            </p>

            <p className="section-p">
              M-Track addresses this by integrating four complementary research
              components into one intelligent framework — creating a stronger
              foundation for early detection through emotional, behavioural, and
              neurological data interpretation.
            </p>

            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#modules" className="btn-primary">
                See Modules
              </a>
              <Link to="/domain" className="btn-ghost">
                Learn More
              </Link>
            </div>
          </div>

          <div className="overview-img reveal reveal-delay-2" ref={r(1)}>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
              alt="Research collaboration"
            />
            <div className="overview-img-overlay" />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="modules" className="modules-section">
        <div className="modules-inner">
          <div className="modules-header reveal" ref={r(2)}>
            <span className="tag">Core Components</span>

            <h2 className="section-h2">
              Four integrated modules powering the research system
            </h2>

            <p className="section-p" style={{ marginBottom: 0 }}>
              Each module focuses on a distinct signal source, collectively
              forming a robust multi-modal framework for early mental health
              risk identification.
            </p>
          </div>

          <div className="modules-grid">
            {modules.map((m, i) => (
              <article
                key={i}
                className={`module-card reveal reveal-delay-${i + 1}`}
                ref={r(10 + i)}
              >
                <div className="module-img">
                  <img src={m.image} alt={m.title} />
                  <div className="module-img-overlay" />
                  <span className="module-badge">Module {m.num}</span>
                </div>

                <div className="module-body">
                  <h3 className="module-title">{m.title}</h3>
                  <p className="module-desc">{m.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section>
        <div className="focus-section">
          <div className="reveal" ref={r(20)}>
            <span className="tag">What This Website Does</span>
            <h2 className="section-h2" style={{ maxWidth: 560 }}>
              Three pillars behind the M-Track research platform
            </h2>
          </div>

          <div className="focus-grid">
            {focusCards.map((c, i) => (
              <div
                key={i}
                className={`focus-card reveal reveal-delay-${i + 1}`}
                ref={r(21 + i)}
              >
                <div className="focus-num">0{i + 1}</div>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{c.icon}</div>
                <h3 className="focus-title">{c.title}</h3>
                <p className="focus-text">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-bg">
          <img
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80"
            alt=""
          />
        </div>

        <div className="cta-inner">
          <div className="cta-card reveal" ref={r(30)}>
            <span className="tag">Continue Exploring</span>

            <h2 className="cta-h2">
              Discover the full research journey through M-Track
            </h2>

            <p className="cta-p">
              Explore the domain, milestones, project documents, presentation
              slides, team details, and communication channels through a
              structured and professional research website experience.
            </p>

            <div className="cta-btns">
              <Link to="/domain" className="btn-primary">
                Go to Domain
              </Link>
              <a href="#overview" className="btn-ghost">
                Back to Top
              </a>
            </div>
          </div>

          <div className="cta-visual reveal reveal-delay-2" ref={r(31)}>
            {ctaLinks.map((item, i) => (
              <div key={i} className="cta-visual-item">
                <div className="cta-visual-icon">{item.icon}</div>
                <div>
                  <div className="cta-visual-label">{item.label}</div>
                  <div className="cta-visual-sub">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}