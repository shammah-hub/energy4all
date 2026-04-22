"use client";
import { useState, useRef } from "react";
import { Navbar, Footer, useInView, STATS, SERVICES } from "@/components/shared";

// ─── CONTACT ─────────────────────────────────────────────────────────────────
export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "", service: "", message: "" });
  const update = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));
  const INPUT = "w-full bg-white/5 border border-white/10 px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#22c55e] transition-colors placeholder-white/20 tracking-wide";

  return (
    <>
      <Navbar light />
      <main className="bg-[#0a1628]">
        <section className="pt-32 sm:pt-44 pb-20 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="max-w-7xl mx-auto relative z-10">
            <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-6">— Get In Touch</p>
            <h1 className="font-black text-white leading-none mb-8"
              style={{ fontSize: "clamp(48px,9vw,120px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.03em" }}>
              LET'S<br /><span className="text-white/20">TALK.</span>
            </h1>
            <p className="text-white/40 text-lg font-light max-w-xl">
              Ready to power Africa's future? Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>
        </section>

        <section className="pb-20 sm:pb-28 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="border border-[#22c55e]/30 bg-[#22c55e]/5 p-12 text-center">
                  <div className="w-16 h-16 border-2 border-[#22c55e] flex items-center justify-center mx-auto mb-6">
                    <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <h3 className="font-black text-white text-2xl mb-3" style={{ fontFamily: "'Helvetica Neue',sans-serif" }}>MESSAGE RECEIVED.</h3>
                  <p className="text-white/40 text-sm">We'll respond within 24 hours. Thank you for reaching out.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/40 mb-2 block">Full Name *</label>
                      <input className={INPUT} placeholder="Your full name" value={form.name} onChange={e => update("name", e.target.value)} />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/40 mb-2 block">Email Address *</label>
                      <input className={INPUT} type="email" placeholder="you@company.com" value={form.email} onChange={e => update("email", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/40 mb-2 block">Organisation</label>
                    <input className={INPUT} placeholder="Your company or institution" value={form.org} onChange={e => update("org", e.target.value)} />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/40 mb-2 block">Service of Interest</label>
                    <select className={INPUT} value={form.service} onChange={e => update("service", e.target.value)}>
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/40 mb-2 block">Your Message *</label>
                    <textarea className={`${INPUT} resize-none`} rows={6}
                      placeholder="Tell us about your project, challenge, or enquiry..."
                      value={form.message} onChange={e => update("message", e.target.value)} />
                  </div>
                  <button onClick={() => form.name && form.email && form.message && setSent(true)}
                    className={`w-full py-4 text-[10px] font-bold tracking-[0.35em] uppercase transition-all duration-200 ${form.name && form.email && form.message ? "bg-[#22c55e] text-white hover:bg-[#16a34a]" : "bg-white/5 text-white/20 cursor-not-allowed"}`}>
                    Send Message
                  </button>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              {[
                { icon: "📍", title: "Our Office", body: "4 Franca Afegbua Crescent\nApo Zone E, Apo Legislative Quarters\nF.C.T Abuja, Nigeria" },
                { icon: "📞", title: "Phone", body: "+234 809 944 6206" },
                { icon: "✉️", title: "Email", body: "info@en4al.com" },
                { icon: "⏰", title: "Hours", body: "Monday – Friday\n8:00 AM – 6:00 PM WAT" },
              ].map(item => (
                <div key={item.title} className="border border-white/10 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/40">{item.title}</p>
                  </div>
                  <p className="text-white/70 text-sm font-light whitespace-pre-line leading-relaxed">{item.body}</p>
                </div>
              ))}
              <div className="bg-[#22c55e] p-6">
                <p className="text-white font-black text-lg mb-2" style={{ fontFamily: "'Helvetica Neue',sans-serif" }}>Quick Response</p>
                <p className="text-white/80 text-xs font-light">We respond to all enquiries within 24 business hours. For urgent matters, call us directly.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// ─── MARKET ──────────────────────────────────────────────────────────────────
export function MarketPage() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);
  const ref2 = useRef<HTMLElement>(null);
  const inView2 = useInView(ref2);

  return (
    <>
      <Navbar light />
      <main className="bg-[#0a1628]">
        <section className="relative pt-32 sm:pt-44 pb-20 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="absolute right-0 top-1/2 w-96 h-96 bg-[#22c55e]/5 rounded-full blur-3xl -translate-y-1/2" />
          <div className="max-w-7xl mx-auto relative z-10">
            <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-6">— The Opportunity</p>
            <h1 className="font-black text-white leading-none mb-8"
              style={{ fontSize: "clamp(44px,9vw,110px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.03em" }}>
              THE<br /><span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #22c55e, #0ea5e9)" }}>AFRICAN</span><br />MARKET.
            </h1>
            <p className="text-white/50 text-lg font-light max-w-2xl leading-relaxed">
              Nigeria and Sub-Saharan Africa represent one of the world's most critical frontiers for sustainable development.
            </p>
          </div>
        </section>

        <section ref={ref} className="bg-[#0d1f3c] py-20 sm:py-28 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div>
                <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-6">— The Challenge</p>
                <h2 className="font-black text-white leading-none mb-8"
                  style={{ fontSize: "clamp(28px,4vw,52px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>
                  MASSIVE NEED.<br />MASSIVE OPPORTUNITY.
                </h2>
                <p className="text-white/50 text-base font-light leading-relaxed mb-6">
                  With over 600 million people lacking reliable electricity, inadequate agricultural systems, weak infrastructure, and fragmented logistics networks, the demand for integrated, future-facing solutions is at an all-time high.
                </p>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  Nigeria alone requires over 30GW of additional power to meet current energy needs — yet less than a third is currently supplied. Meanwhile, inefficiencies in transport, outdated farming practices, and limited access to financial and legal advisory services continue to hinder national progress.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "600M+", label: "People without reliable electricity", color: "#22c55e" },
                  { num: "30GW+", label: "Nigeria's energy deficit", color: "#0ea5e9" },
                  { num: "$2.8T", label: "Africa's infrastructure investment need by 2040", color: "#22c55e" },
                  { num: "60%", label: "Of Africa's workforce in agriculture", color: "#0ea5e9" },
                ].map((s, i) => (
                  <div key={i} className="border border-white/10 p-6 text-center hover:border-white/20 transition-colors">
                    <p className="font-black mb-2" style={{ fontSize: "clamp(24px,3vw,40px)", fontFamily: "'Helvetica Neue',sans-serif", color: s.color }}>{s.num}</p>
                    <p className="text-white/30 text-xs leading-relaxed font-light">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section ref={ref2} className="bg-[#0a1628] py-20 sm:py-28 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-700 ${inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-4">— Our Position</p>
              <h2 className="font-black text-white leading-none"
                style={{ fontSize: "clamp(28px,5vw,60px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>
                HOW WE BRIDGE<br /><span className="text-white/30">THE GAP</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "☀️", title: "Solar & Off-Grid", body: "Solar mini-grids projected to become the fastest-growing rural electrification solution in Africa by 2030." },
                { icon: "🏗️", title: "Infrastructure", body: "Building the roads, ports, and distribution networks that connect Africa's energy potential to its people." },
                { icon: "💰", title: "Investment Structuring", body: "Designing bankable frameworks that attract domestic and international capital into African energy markets." },
                { icon: "⚖️", title: "Regulatory Navigation", body: "Ensuring projects stay legally sound across Africa's complex and evolving regulatory environments." },
                { icon: "🌾", title: "Agro-Processing", body: "Developing agro-processing hubs that add value to Africa's agricultural output and create jobs." },
                { icon: "🔗", title: "Logistics Corridors", body: "Optimising supply chains that connect energy components, agricultural inputs, and finished goods." },
              ].map((item, i) => (
                <div key={item.title}
                  className={`border border-white/10 p-8 hover:border-[#22c55e]/30 transition-colors group transition-all duration-700 ${inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="text-3xl mb-5">{item.icon}</div>
                  <h3 className="font-black text-white text-lg mb-3 group-hover:text-[#22c55e] transition-colors"
                    style={{ fontFamily: "'Helvetica Neue',sans-serif" }}>{item.title}</h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#22c55e] py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/70 text-xs tracking-[0.3em] uppercase mb-3 font-bold">Did You Know?</p>
            <h3 className="font-black text-white text-2xl sm:text-3xl mb-4" style={{ fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>
              Solar mini-grids are projected to become the fastest-growing solution for rural electrification in Africa by 2030.
            </h3>
            <a href="/contact" className="inline-block bg-white text-[#22c55e] px-8 py-3.5 text-[10px] font-black tracking-widest uppercase hover:bg-white/90 transition-colors mt-4">
              Explore the Opportunity
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// ─── INSIGHTS ────────────────────────────────────────────────────────────────
export function InsightsPage() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  const ARTICLES = [
    { title: "The Case for Solar Mini-Grids in Rural Nigeria", category: "Renewable Energy", date: "April 2025", read: "5 min", excerpt: "With over 30GW of unmet demand, Nigeria's rural communities represent the most significant opportunity for distributed solar energy on the continent." },
    { title: "Navigating Nigeria's New Electricity Act", category: "Legal & Regulatory", date: "March 2025", read: "7 min", excerpt: "The 2023 Electricity Act marks a turning point for Nigeria's power sector. Here's what developers and investors need to know." },
    { title: "Private Equity in African Energy: Trends for 2025", category: "Investment", date: "March 2025", read: "6 min", excerpt: "As global capital seeks emerging market returns, Africa's energy transition is attracting record levels of private equity interest." },
    { title: "Agribusiness as Infrastructure: The Missing Link", category: "Agriculture", date: "February 2025", read: "4 min", excerpt: "Africa's food systems need more than farming advice — they need the same investment rigour applied to energy and transport infrastructure." },
    { title: "Supply Chain Resilience in Energy Projects", category: "Logistics", date: "February 2025", read: "5 min", excerpt: "Component delivery failures are among the top causes of energy project delays in Africa. Here's how to build supply chains that hold." },
    { title: "ESG Integration in African Infrastructure Finance", category: "Investment", date: "January 2025", read: "8 min", excerpt: "International lenders increasingly require ESG frameworks. We break down what African infrastructure developers need to demonstrate." },
  ];

  const CATEGORIES = ["All", "Renewable Energy", "Legal & Regulatory", "Investment", "Agriculture", "Logistics"];
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? ARTICLES : ARTICLES.filter(a => a.category === active);

  return (
    <>
      <Navbar light />
      <main className="bg-[#0a1628]">
        <section className="pt-32 sm:pt-44 pb-20 px-4 sm:px-6 relative">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="max-w-7xl mx-auto relative z-10">
            <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-6">— Thought Leadership</p>
            <h1 className="font-black text-white leading-none mb-8"
              style={{ fontSize: "clamp(48px,9vw,120px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.03em" }}>
              INSIGHTS &<br /><span className="text-white/20">ANALYSIS</span>
            </h1>
          </div>
        </section>

        <section ref={ref} className="pb-20 sm:pb-28 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Category filter */}
            <div className="overflow-x-auto mb-10 -mx-4 px-4">
              <div className="flex gap-2 w-max pb-2">
                {CATEGORIES.map(c => (
                  <button key={c} onClick={() => setActive(c)}
                    className={`flex-shrink-0 px-4 py-2 text-[10px] tracking-widest uppercase font-bold transition-all ${active === c ? "bg-[#22c55e] text-white" : "border border-white/10 text-white/40 hover:border-white/30 hover:text-white"}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured article */}
            {active === "All" && (
              <div className={`border border-[#22c55e]/30 bg-[#22c55e]/5 p-8 sm:p-12 mb-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <span className="bg-[#22c55e] text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5">Featured</span>
                  <span className="text-[10px] text-white/30 tracking-wider">{ARTICLES[0].category} · {ARTICLES[0].date} · {ARTICLES[0].read} read</span>
                </div>
                <h2 className="font-black text-white text-2xl sm:text-3xl mb-4 leading-snug"
                  style={{ fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.01em" }}>{ARTICLES[0].title}</h2>
                <p className="text-white/50 text-base font-light leading-relaxed mb-6">{ARTICLES[0].excerpt}</p>
                <a href="/insights" className="inline-flex items-center gap-2 text-[#22c55e] text-[10px] font-bold tracking-widest uppercase hover:gap-4 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            )}

            {/* Article grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(active === "All" ? filtered.slice(1) : filtered).map((a, i) => (
                <div key={a.title}
                  className={`border border-white/10 p-6 hover:border-[#22c55e]/30 hover:bg-white/3 transition-all duration-300 group cursor-pointer transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[9px] tracking-widest uppercase font-bold text-[#22c55e] border border-[#22c55e]/30 px-2.5 py-1">{a.category}</span>
                  </div>
                  <h3 className="font-black text-white text-base mb-3 group-hover:text-[#22c55e] transition-colors leading-snug"
                    style={{ fontFamily: "'Helvetica Neue',sans-serif" }}>{a.title}</h3>
                  <p className="text-white/40 text-xs font-light leading-relaxed mb-4">{a.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-[10px] text-white/20 tracking-wide">{a.date} · {a.read} read</span>
                    <span className="text-[#22c55e] text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Read →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// ─── TEAM ─────────────────────────────────────────────────────────────────────
export function TeamPage() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  const TEAM = [
    { name: "Dr. Adaeze Okonkwo", role: "Founder & CEO", focus: "Energy Strategy & Investment", bio: "15+ years in African energy markets. Former advisor to the Nigerian Ministry of Power.", initials: "AO" },
    { name: "Emeka Nwosu", role: "Director, Legal & Regulatory", focus: "Energy Law & Compliance", bio: "Leading expert in Nigerian energy law with experience across 8 African jurisdictions.", initials: "EN" },
    { name: "Fatima Al-Hassan", role: "Head of Investment Advisory", focus: "Project Finance & PE Structuring", bio: "Former investment banker with $500M+ in African energy deals structured.", initials: "FA" },
    { name: "Chidi Obi", role: "Head of Infrastructure", focus: "Engineering & Project Management", bio: "Civil engineer with 20 years building energy and infrastructure projects across West Africa.", initials: "CO" },
    { name: "Amina Diallo", role: "Agribusiness Lead", focus: "Agricultural Value Chains", bio: "Agro-economist specialising in smallholder finance and farm-to-market systems.", initials: "AD" },
    { name: "Tunde Badmus", role: "Logistics Director", focus: "Supply Chain & Transportation", bio: "Supply chain specialist with deep expertise in energy sector logistics across challenging terrains.", initials: "TB" },
  ];

  return (
    <>
      <Navbar light />
      <main className="bg-[#0a1628]">
        <section className="pt-32 sm:pt-44 pb-20 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="max-w-7xl mx-auto relative z-10">
            <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-6">— Our People</p>
            <h1 className="font-black text-white leading-none mb-8"
              style={{ fontSize: "clamp(48px,9vw,120px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.03em" }}>
              THE TEAM<br /><span className="text-white/20">BEHIND E4A.</span>
            </h1>
            <p className="text-white/40 text-lg font-light max-w-2xl leading-relaxed">
              Seasoned experts across energy, law, finance, engineering, agriculture and logistics — united by a single mission.
            </p>
          </div>
        </section>

        <section ref={ref} className="pb-20 sm:pb-28 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEAM.map((member, i) => (
              <div key={member.name}
                className={`border border-white/10 p-8 hover:border-[#22c55e]/30 hover:bg-white/3 transition-all duration-300 group transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}>
                {/* Avatar */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#22c55e]/30 to-[#0ea5e9]/30 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#22c55e]/50 transition-colors">
                  <span className="font-black text-white text-lg" style={{ fontFamily: "'Helvetica Neue',sans-serif" }}>{member.initials}</span>
                </div>
                <h3 className="font-black text-white text-lg mb-1 group-hover:text-[#22c55e] transition-colors"
                  style={{ fontFamily: "'Helvetica Neue',sans-serif" }}>{member.name}</h3>
                <p className="text-[#22c55e] text-[10px] tracking-[0.2em] uppercase font-bold mb-1">{member.role}</p>
                <p className="text-white/30 text-[10px] tracking-wider mb-4">{member.focus}</p>
                <p className="text-white/40 text-xs font-light leading-relaxed border-t border-white/10 pt-4">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join CTA */}
        <section className="bg-[#0d1f3c] py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-4">— Join Us</p>
            <h2 className="font-black text-white leading-none mb-6"
              style={{ fontSize: "clamp(28px,4vw,52px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>
              WANT TO BE PART<br />OF THE MISSION?
            </h2>
            <p className="text-white/40 font-light mb-8 text-sm leading-relaxed">
              We're always looking for exceptional talent who share our passion for powering Africa's future.
            </p>
            <a href="/contact" className="inline-block bg-[#22c55e] text-white px-10 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-[#16a34a] transition-colors">
              Get In Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
