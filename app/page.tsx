"use client";
import { Navbar, Footer, useInView, STATS, SERVICES } from "@/components/shared";
import { useState, useEffect, useRef } from "react";

const MARQUEE = ["RENEWABLE ENERGY", "OIL & GAS", "LOGISTICS", "AGRICULTURE", "AFRICA", "SUSTAINABLE FUTURE", "INVESTMENT ADVISORY"];

// High-quality images mapped to each service
const SERVICE_IMAGES: Record<string, string> = {
  "energy-infrastructure": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
  "investment-financial": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  "legal-regulatory": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  "supply-chain": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  "agribusiness": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  "oil-gas": "https://images.unsplash.com/photo-1518704618243-b719e5d5f2b8?w=800&q=80",
};

// Fallback image per index if slug doesn't match
const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  "https://images.unsplash.com/photo-1518704618243-b719e5d5f2b8?w=800&q=80",
];

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const statsRef = useRef<HTMLElement>(null);
  const statsInView = useInView(statsRef);
  const servicesRef = useRef<HTMLElement>(null);
  const servicesInView = useInView(servicesRef);
  const whyRef = useRef<HTMLElement>(null);
  const whyInView = useInView(whyRef);

  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes pulse-glow { 0%,100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        @keyframes counter { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .service-card-img { transition: transform 0.6s ease; }
        .service-card:hover .service-card-img { transform: scale(1.07); }
        .why-img-overlay { background: linear-gradient(to right, rgba(13,31,60,0.85) 0%, rgba(13,31,60,0.4) 60%, transparent 100%); }
      `}</style>
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen bg-[#0a1628] flex items-center overflow-hidden">
          {/* HERO BACKGROUND IMAGE with lighter overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1800&q=80"
              alt="Solar energy field"
              className="w-full h-full object-cover"
            />
            {/* Lightened: was /80 → /50, gradient was /95//70//40 → /75//40//15 */}
            <div className="absolute inset-0 bg-[#0a1628]/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/75 via-[#0a1628]/40 to-[#0a1628]/15" />
          </div>

          {/* Animated background grid */}
          <div className="absolute inset-0 z-[1] opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

          {/* Glowing orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-3xl z-[1]" style={{ animation: "pulse-glow 4s ease-in-out infinite" }} />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#0ea5e9]/10 rounded-full blur-3xl z-[1]" style={{ animation: "pulse-glow 6s ease-in-out infinite 2s" }} />

          {/* Large background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-[1]">
            <span className="font-black text-white/[0.02] select-none whitespace-nowrap"
              style={{ fontSize: "clamp(120px,20vw,280px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.04em" }}>
              ENERGY
            </span>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 w-full">
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "200ms" }}>
                <div className="w-8 h-px bg-[#22c55e]" />
                <span className="text-[#22c55e] text-[10px] tracking-[0.4em] uppercase font-bold">Advisory & Consultancy</span>
              </div>

              {/* Main headline */}
              <h1 className={`font-black text-white leading-none mb-8 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ fontSize: "clamp(44px,8vw,100px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.03em", transitionDelay: "350ms" }}>
                POWERING<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #22c55e, #0ea5e9)" }}>
                  AFRICA'S
                </span><br />
                FUTURE.
              </h1>

              {/* Sub */}
              <p className={`text-white/50 text-base sm:text-lg font-light leading-relaxed max-w-2xl mb-12 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "500ms" }}>
                Multi-disciplinary advisory and consultancy delivering innovative, sustainable solutions across Renewable Energy, Oil & Gas, Logistics, and Agriculture.
              </p>

              {/* CTAs */}
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "650ms" }}>
                <a href="/services"
                  className="group inline-flex items-center justify-center gap-3 bg-[#22c55e] text-white px-8 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-[#16a34a] transition-all duration-200">
                  Explore Services
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="/about"
                  className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 text-[10px] font-bold tracking-widest uppercase hover:border-white/50 hover:bg-white/5 transition-all duration-200">
                  Who We Are
                </a>
              </div>
            </div>

            {/* Floating service pills */}
            <div className={`hidden lg:flex gap-3 mt-20 flex-wrap transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "800ms" }}>
              {SERVICES.map((s, i) => (
                <a key={s.slug} href={`/services/${s.slug}`}
                  className="flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2.5 hover:border-[#22c55e]/50 hover:bg-white/10 transition-all duration-200 group"
                  style={{ animation: `float ${3 + i * 0.3}s ease-in-out infinite ${i * 0.2}s` }}>
                  <span className="text-sm">{s.icon}</span>
                  <span className="text-[10px] text-white/60 group-hover:text-white font-semibold tracking-wider uppercase transition-colors">{s.short}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
            <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-[#22c55e] rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className="bg-[#22c55e] py-4 overflow-hidden">
          <div className="flex whitespace-nowrap" style={{ animation: "marquee 25s linear infinite" }}>
            {[...MARQUEE, ...MARQUEE].map((w, i) => (
              <span key={i} className="inline-flex items-center gap-6 mx-6">
                <span className="text-[10px] tracking-[0.4em] font-black text-white uppercase">{w}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </span>
            ))}
          </div>
        </div>

        {/* ── STATS ── with background image */}
        <section ref={statsRef} className="relative bg-[#0d1f3c] py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
          {/* Lightened: opacity-10 → opacity-25, overlay /80 → /55 */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1600&q=60"
              alt="Africa aerial"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-[#0d1f3c]/55" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-700 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-4">— The Opportunity</p>
              <h2 className="font-black text-white leading-none"
                style={{ fontSize: "clamp(32px,5vw,64px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>
                WHY AFRICA.<br /><span className="text-white/30">WHY NOW.</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((s, i) => (
                <div key={i}
                  className={`border border-white/10 p-6 sm:p-8 text-center hover:border-[#22c55e]/40 transition-all duration-300 group transition-all duration-700 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}>
                  <p className="font-black text-[#22c55e] mb-3"
                    style={{ fontSize: "clamp(28px,4vw,52px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>
                    {s.num}
                  </p>
                  <p className="text-white/40 text-xs leading-relaxed font-light">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── with per-card images */}
        <section ref={servicesRef} className="bg-[#0a1628] py-20 sm:py-28 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 transition-all duration-700 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div>
                <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-4">— What We Do</p>
                <h2 className="font-black text-white leading-none"
                  style={{ fontSize: "clamp(32px,5vw,64px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>
                  OUR<br /><span className="text-white/30">SERVICES</span>
                </h2>
              </div>
              <a href="/services"
                className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/40 hover:text-white transition-colors border-b border-white/20 pb-1 self-start md:self-auto">
                View All Services
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((s, i) => {
                const imgSrc = SERVICE_IMAGES[s.slug] || FALLBACK_IMAGES[i % FALLBACK_IMAGES.length];
                return (
                  <a key={s.slug} href={`/services/${s.slug}`}
                    className={`service-card group relative border border-white/10 overflow-hidden hover:border-[#22c55e]/40 transition-all duration-300 block transition-all duration-700 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: `${i * 80}ms` }}>

                    {/* Card image — lightened gradient so image is more visible */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={imgSrc}
                        alt={s.short}
                        className="service-card-img w-full h-full object-cover"
                      />
                      {/* Lightened: from-[#0a1628] via-[#0a1628]/40 → via-[#0a1628]/20, transparent stays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent" />
                      {/* Number badge */}
                      <span className="absolute top-4 right-4 font-black text-white/20 text-4xl select-none"
                        style={{ fontFamily: "'Helvetica Neue',sans-serif" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Card content */}
                    <div className="p-8 bg-[#0a1628] hover:bg-white/5 transition-colors duration-300">
                      <div className="text-2xl mb-4">{s.icon}</div>
                      <h3 className="font-black text-white text-lg mb-3 leading-snug group-hover:text-[#22c55e] transition-colors"
                        style={{ fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.01em" }}>
                        {s.short}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed font-light mb-6">{s.summary}</p>
                      <div className="flex items-center gap-2 text-[10px] text-[#22c55e] tracking-widest uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More
                        <svg className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                );
              })}

              {/* CTA card */}
              <a href="/contact"
                className="group border border-[#22c55e]/30 bg-[#22c55e]/5 p-8 hover:bg-[#22c55e]/10 transition-all duration-300 flex flex-col justify-between block">
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-[#22c55e] uppercase font-bold mb-4">Start a Project</p>
                  <h3 className="font-black text-white text-2xl leading-none mb-4"
                    style={{ fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>
                    READY TO<br />POWER UP?
                  </h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">
                    Let's discuss how we can support your next energy or infrastructure project across Africa.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#22c55e] text-[10px] font-bold tracking-widest uppercase mt-8 group-hover:gap-4 transition-all">
                  Get In Touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── WHY US ── with full-bleed split image */}
        <section ref={whyRef} className="bg-[#0d1f3c] py-20 sm:py-28 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${whyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div>
                <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-6">— Our Value</p>
                <h2 className="font-black text-white leading-none mb-8"
                  style={{ fontSize: "clamp(36px,5vw,72px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.03em" }}>
                  ENERGY IS A<br /><span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #22c55e, #0ea5e9)" }}>
                    RIGHT, NOT<br />A PRIVILEGE.
                  </span>
                </h2>
                <p className="text-white/50 text-base leading-relaxed font-light mb-8">
                  At Energy 4 All, we believe every community deserves access to clean, reliable, and inclusive energy solutions. From project inception to operation and maintenance, our team delivers measurable value.
                </p>
                <a href="/about"
                  className="inline-flex items-center gap-3 text-[#22c55e] text-[10px] tracking-[0.3em] uppercase font-bold border-b border-[#22c55e]/40 pb-2 hover:border-[#22c55e] transition-colors">
                  Our Story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              {/* Right col: 2x2 image grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { img: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80", title: "Multi-Sector", body: "Deep expertise spanning energy, legal, finance, logistics and agribusiness." },
                  { img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80", title: "Africa-First", body: "Built for the continent's unique challenges, opportunities and market dynamics." },
                  { img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", title: "End-to-End", body: "From strategy and feasibility through to execution and operations." },
                  { img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80", title: "ESG-Aligned", body: "Integrating sustainability and community impact into every engagement." },
                ].map((item, i) => (
                  <div key={item.title}
                    className="group relative overflow-hidden border border-white/10 hover:border-[#22c55e]/30 transition-colors"
                    style={{ transitionDelay: `${i * 80}ms` }}>
                    {/* Image — lightened: removed heavy gradient overlay */}
                    <div className="h-32 overflow-hidden relative">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      {/* Lightened: was /90 solid → /50 at bottom only */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/60 to-transparent" />
                    </div>
                    {/* Text */}
                    <div className="p-5 bg-[#0d1f3c]">
                      <h4 className="font-black text-white text-sm mb-1.5" style={{ fontFamily: "'Helvetica Neue',sans-serif" }}>{item.title}</h4>
                      <p className="text-white/40 text-xs leading-relaxed font-light">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="relative bg-[#22c55e] py-20 px-4 sm:px-6 overflow-hidden">
          {/* Background image behind green overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=70"
              alt="Solar panels"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 z-[1] opacity-10"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-white/70 text-[10px] tracking-[0.4em] uppercase mb-4">— Let's Work Together</p>
            <h2 className="font-black text-white leading-none mb-6"
              style={{ fontSize: "clamp(36px,6vw,80px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.03em" }}>
              READY TO BUILD<br />AFRICA'S FUTURE?
            </h2>
            <p className="text-white/70 text-base font-light mb-10 max-w-xl mx-auto">
              From solar mini-grids to investment structuring — let's discuss how Energy 4 All can support your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="bg-white text-[#22c55e] px-10 py-4 text-[10px] font-black tracking-widest uppercase hover:bg-white/90 transition-colors">
                Start a Conversation
              </a>
              <a href="/services"
                className="border-2 border-white text-white px-10 py-4 text-[10px] font-black tracking-widest uppercase hover:bg-white/10 transition-colors">
                Our Services
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}