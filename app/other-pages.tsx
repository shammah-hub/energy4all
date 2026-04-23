"use client";
import { Footer, Navbar, SERVICES, useInView } from "@/components/shared";
import { IMG } from "@/components/shared";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { MapPin, Mail, Phone, Clock, Globe, Send, ArrowUpRight, CheckCircle2 } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

// ─── CONTACT ─────────────────────────────────────────────────────────────────
export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "", service: "", message: "" });
  const update = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));
  const INPUT = "w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 transition-colors placeholder-slate-300 font-light";

  return (
    <div className="bg-white text-slate-900 selection:bg-emerald-100">
      <Navbar transparent={false} />
      <main>

        {/* ── HEADER
            Split layout: text left, tall office image right (IMG.office — Abuja HQ context).
            Uses the dedicated office photo — appropriate, never used elsewhere.
        ── */}
        <section className="relative bg-[#F8FAFC] border-b border-slate-100 pt-40 pb-0 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 20% 60%, rgba(16,185,129,0.07) 0%, transparent 55%)" }} />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

            {/* Text */}
            <div className="lg:col-span-6 pb-20 z-10">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 font-bold text-[10px] tracking-[0.2em] uppercase">Get In Touch</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="text-[clamp(3rem,8vw,6rem)] font-light leading-[1] tracking-tighter mb-8 text-slate-900">
                Let's start a <br />
                <span className="italic font-serif text-emerald-600 underline decoration-emerald-200 underline-offset-8">conversation.</span>
              </motion.h1>
              <motion.p {...fadeInUp} className="text-slate-500 text-xl font-light leading-relaxed max-w-lg">
                Ready to power Africa's future? Tell us about your project and we'll get back to you within 24 hours.
              </motion.p>
            </div>

            {/* Office image — tall portrait, bleeds off bottom edge */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 self-end hidden lg:block"
            >
              <div className="aspect-[4/5] rounded-t-[3rem] overflow-hidden shadow-[0_-40px_80px_-20px_rgba(0,0,0,0.1)]">
                <img
                  src={IMG.office}
                  className="w-full h-full object-cover"
                  alt="Energy 4 All office, Abuja"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Info sidebar */}
            <motion.div {...fadeInUp} className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Our Office</h3>

              {[
                { icon: <MapPin size={20} />, title: "Address", body: "4 Franca Afegbua Crescent\nApo Zone E, Apo Legislative Quarters\nF.C.T Abuja, Nigeria" },
                { icon: <Phone size={20} />, title: "Phone", body: "+234 809 944 6206" },
                { icon: <Mail size={20} />, title: "Email", body: "info@en4al.com" },
                { icon: <Clock size={20} />, title: "Hours", body: "Monday – Friday\n8:00 AM – 6:00 PM WAT" },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-5 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                  <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm mb-1">{item.title}</p>
                    <p className="text-slate-500 font-light text-sm whitespace-pre-line leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}

              {/* Quick Response card — IMG.aboutTeam (people collaborating) with dark overlay */}
              <div className="relative p-8 rounded-[2rem] text-white overflow-hidden group">
                <img
                  src={IMG.aboutTeam}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt=""
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-slate-900/80" />
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                  <Globe size={80} />
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-light italic font-serif mb-3">Quick Response</h4>
                  <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">
                    We respond to all enquiries within 24 business hours. For urgent matters, call us directly.
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                    <Clock size={14} /> Response within 24 hours
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="lg:col-span-2">
              <div className="bg-[#F8FAFC] p-8 md:p-14 rounded-[3rem] border border-slate-100">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                      <CheckCircle2 size={36} className="text-emerald-500" />
                    </div>
                    <h3 className="text-3xl font-light tracking-tight text-slate-900 mb-3">Message Received.</h3>
                    <p className="text-slate-400 font-light">We'll respond within 24 hours. Thank you for reaching out.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Full Name *</label>
                        <input className={INPUT} placeholder="Your full name" value={form.name} onChange={e => update("name", e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Email Address *</label>
                        <input className={INPUT} type="email" placeholder="you@company.com" value={form.email} onChange={e => update("email", e.target.value)} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Organisation</label>
                      <input className={INPUT} placeholder="Your company or institution" value={form.org} onChange={e => update("org", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Service of Interest</label>
                      <select className={INPUT} value={form.service} onChange={e => update("service", e.target.value)}>
                        <option value="">Select a service...</option>
                        {SERVICES.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Your Message *</label>
                      <textarea className={`${INPUT} resize-none`} rows={6}
                        placeholder="Tell us about your project, challenge, or enquiry..."
                        value={form.message} onChange={e => update("message", e.target.value)} />
                    </div>
                    <button
                      onClick={() => form.name && form.email && form.message && setSent(true)}
                      className={`w-full py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${form.name && form.email && form.message ? "bg-slate-900 text-white hover:bg-emerald-600 shadow-xl shadow-slate-200" : "bg-slate-100 text-slate-300 cursor-not-allowed"}`}>
                      Send Message <Send size={16} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── MAP / LOCATION SECTION
            IMG.nigeria — city aerial view. Dark gradient, pin card floats on top.
            nigeria is the only city-scale image in the library — perfect here.
        ── */}
        <section className="py-8 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="h-[420px] rounded-[3rem] relative overflow-hidden shadow-2xl shadow-slate-100">
              <img
                src={IMG.nigeria}
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 40%" }}
                alt="Abuja, Nigeria"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
              {/* Floating location pin card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 bg-white rounded-2xl shadow-2xl text-center border border-slate-100 backdrop-blur-sm">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <p className="text-xs uppercase tracking-widest font-bold text-emerald-600 mb-1">Abuja HQ</p>
                  <p className="text-sm font-light text-slate-500 italic">4 Franca Afegbua Crescent, Apo Zone E.</p>
                </div>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Federal Capital Territory, Nigeria</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

// ─── MARKET ──────────────────────────────────────────────────────────────────
export function MarketPage() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <div className="bg-white text-slate-900 selection:bg-emerald-100">
      <Navbar transparent={false} />
      <main>

        {/* ── HEADER
            Dark full-bleed using IMG.africa (continent aerial/landscape).
            Sets a geographic, pan-African tone immediately.
            Opposite treatment to Contact (light) — every page feels distinct.
        ── */}
        <section className="relative min-h-[75vh] flex items-end bg-slate-900 border-b border-slate-800 pb-20 pt-40 px-6 overflow-hidden">
          <img
            src={IMG.africa}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            style={{ objectPosition: "50% 30%" }}
            alt=""
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-900/10 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(ellipse at 20% 100%, rgba(16,185,129,0.2) 0%, transparent 50%)" }} />

          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300 font-bold text-[10px] tracking-[0.2em] uppercase">The Opportunity</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-[clamp(3rem,8vw,6rem)] font-light leading-[1] tracking-tighter mb-8 text-white">
              The African <br />
              <span className="italic font-serif text-emerald-400 underline decoration-emerald-700 underline-offset-8">Market.</span>
            </motion.h1>
            <motion.p {...fadeInUp} className="text-slate-300 text-xl font-light leading-relaxed max-w-2xl">
              Nigeria and Sub-Saharan Africa represent one of the world's most critical frontiers for sustainable development.
            </motion.p>
          </div>
        </section>

        {/* ── TRANSITION: panoramic ruralSolar strip ── */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={IMG.ruralSolar}
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 50%" }}
            alt="Rural solar installation"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-white" />
        </div>

        {/* ── CHALLENGE + STATS
            Left copy. Right: 4-stat grid.
            Below: IMG.svcEnergy as a full-width atmospheric band.
        ── */}
        <section ref={ref} className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div>
                <span className="text-emerald-600 font-bold text-xs tracking-widest uppercase mb-6 block">The Challenge</span>
                <h2 className="text-5xl font-light tracking-tighter text-slate-900 mb-8 leading-tight">
                  Massive need. <br />
                  <span className="italic font-serif">Massive opportunity.</span>
                </h2>
                <p className="text-slate-500 text-lg font-light leading-relaxed mb-6">
                  With over 600 million people lacking reliable electricity, inadequate agricultural systems, weak infrastructure, and fragmented logistics networks, the demand for integrated, future-facing solutions is at an all-time high.
                </p>
                <p className="text-slate-400 text-base font-light leading-relaxed">
                  Nigeria alone requires over 30GW of additional power to meet current energy needs — yet less than a third is currently supplied.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "600M+", label: "People without reliable electricity", color: "text-emerald-600" },
                  { num: "30GW+", label: "Nigeria's energy deficit", color: "text-sky-500" },
                  { num: "$2.8T", label: "Africa's infrastructure investment need by 2040", color: "text-emerald-600" },
                  { num: "60%", label: "Of Africa's workforce in agriculture", color: "text-sky-500" },
                ].map((s, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-[#F8FAFC] border border-slate-100 text-center hover:shadow-xl transition-all">
                    <p className={`font-light text-5xl mb-3 tracking-tighter ${s.color}`}>{s.num}</p>
                    <p className="text-slate-400 text-xs leading-relaxed font-light">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EDITORIAL IMAGE BREAK
            IMG.svcWind (wind turbines) — wide cinematic crop.
            Shown nowhere else in the site. Geographic scale, renewable energy.
        ── */}
        <div className="px-6 py-4">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="h-72 rounded-[2.5rem] overflow-hidden relative">
              <img
                src={IMG.svcWind}
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 60%" }}
                alt="Wind energy potential in Africa"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-transparent" />
              <div className="absolute inset-0 flex items-center px-12">
                <div className="max-w-sm">
                  <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Renewable Potential</p>
                  <p className="text-white text-3xl font-light leading-tight tracking-tight">
                    Africa holds <span className="italic font-serif text-emerald-300">60% of the world's</span> best solar resources.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── HOW WE BRIDGE THE GAP
            Overlapping image layout: IMG.farming left-primary (agriculture) +
            IMG.svcLogistics bottom-right (logistics) — two totally different
            subjects, both relevant to E4A's sectors.
        ── */}
        <section className="py-32 px-6 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              {/* Overlapping images */}
              <div className="relative">
                <motion.div
                  initial={{ x: -80, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="w-4/5 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
                >
                  <img src={IMG.farming} className="w-full h-full object-cover" alt="African agriculture" />
                </motion.div>
                <motion.div
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-16 -right-6 w-3/5 aspect-square rounded-[2rem] overflow-hidden border-[12px] border-[#F8FAFC] shadow-2xl"
                >
                  <img src={IMG.svcLogistics} className="w-full h-full object-cover" alt="Logistics and supply chain" />
                </motion.div>
              </div>

              {/* Text */}
              <motion.div {...fadeInUp} className="pt-8">
                <span className="text-emerald-600 font-bold text-xs tracking-widest uppercase mb-6 block">Our Position</span>
                <h2 className="text-5xl font-light tracking-tighter text-slate-900 mb-8 leading-tight">
                  How we bridge <span className="italic font-serif">the gap.</span>
                </h2>
                <p className="text-slate-500 text-lg font-light leading-relaxed mb-10">
                  From solar mini-grids to investment structuring and regulatory navigation — our integrated advisory model means no gap is left unfilled.
                </p>
                <div className="flex items-center gap-6">
                  <div className="h-px w-20 bg-slate-200" />
                  <a href="/services" className="text-xs uppercase tracking-widest font-bold text-slate-900 flex items-center gap-2 group">
                    Explore Our Services <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 6-SECTOR CARDS ── */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="text-emerald-600 font-bold text-xs tracking-widest uppercase mb-4 block">What We Deliver</span>
              <h2 className="text-5xl font-light tracking-tighter text-slate-900">
                Six ways we <span className="italic font-serif">close the gap.</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "☀️", title: "Solar & Off-Grid", body: "Solar mini-grids projected to become the fastest-growing rural electrification solution in Africa by 2030.", img: IMG.svcSolar },
                { icon: "🏗️", title: "Infrastructure", body: "Building the roads, ports, and distribution networks that connect Africa's energy potential to its people.", img: IMG.svcEnergy },
                { icon: "💰", title: "Investment Structuring", body: "Designing bankable frameworks that attract domestic and international capital into African energy markets.", img: IMG.svcFinance },
                { icon: "⚖️", title: "Regulatory Navigation", body: "Ensuring projects stay legally sound across Africa's complex and evolving regulatory environments.", img: IMG.svcLegal },
                { icon: "🌾", title: "Agro-Processing", body: "Developing agro-processing hubs that add value to Africa's agricultural output and create jobs.", img: IMG.farming },
                { icon: "🔗", title: "Logistics Corridors", body: "Optimising supply chains that connect energy components, agricultural inputs, and finished goods.", img: IMG.svcLogistics },
              ].map((item, i) => (
                <motion.div key={item.title} {...fadeInUp} transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                  className="group rounded-[2rem] bg-[#F8FAFC] border border-slate-100 hover:shadow-2xl hover:shadow-slate-100 hover:border-emerald-100 transition-all duration-500 overflow-hidden">
                  {/* Each card's own contextual image */}
                  <div className="h-44 overflow-hidden">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      alt={item.title}
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                    <h3 className="font-medium text-slate-900 text-xl mb-3 group-hover:text-emerald-600 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA — IMG.svcHydro (water infrastructure) — used nowhere else ── */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeInUp} className="relative rounded-[4rem] overflow-hidden">
              <img
                src={IMG.svcHydro}
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-slate-900/80" />
              <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(16,185,129,0.3) 0%, transparent 60%)" }} />
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
              <div className="relative z-10 p-16 md:p-24 text-center">
                <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight text-white">
                  Explore the <span className="italic font-serif text-emerald-400">opportunity.</span>
                </h2>
                <p className="text-slate-300 font-light mb-10 max-w-xl mx-auto">
                  Solar mini-grids are projected to become the fastest-growing solution for rural electrification in Africa by 2030.
                </p>
                <a href="/contact"
                  className="inline-block px-12 py-5 bg-emerald-500 text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-emerald-400 transition-all">
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

// ─── INSIGHTS ────────────────────────────────────────────────────────────────
export function InsightsPage() {
  // Each article maps to a dedicated, contextually correct image
  const ARTICLES = [
    { title: "The Case for Solar Mini-Grids in Rural Nigeria", category: "Renewable Energy", date: "April 2025", read: "5 min", excerpt: "With over 30GW of unmet demand, Nigeria's rural communities represent the most significant opportunity for distributed solar energy on the continent.", img: IMG.ins1 },
    { title: "Navigating Nigeria's New Electricity Act", category: "Legal & Regulatory", date: "March 2025", read: "7 min", excerpt: "The 2023 Electricity Act marks a turning point for Nigeria's power sector. Here's what developers and investors need to know.", img: IMG.ins2 },
    { title: "Private Equity in African Energy: Trends for 2025", category: "Investment", date: "March 2025", read: "6 min", excerpt: "As global capital seeks emerging market returns, Africa's energy transition is attracting record levels of private equity interest.", img: IMG.ins3 },
    { title: "Agribusiness as Infrastructure: The Missing Link", category: "Agriculture", date: "February 2025", read: "4 min", excerpt: "Africa's food systems need more than farming advice — they need the same investment rigour applied to energy and transport infrastructure.", img: IMG.ins4 },
    { title: "Supply Chain Resilience in Energy Projects", category: "Logistics", date: "February 2025", read: "5 min", excerpt: "Component delivery failures are among the top causes of energy project delays in Africa. Here's how to build supply chains that hold.", img: IMG.ins5 },
    { title: "ESG Integration in African Infrastructure Finance", category: "Investment", date: "January 2025", read: "8 min", excerpt: "International lenders increasingly require ESG frameworks. We break down what African infrastructure developers need to demonstrate.", img: IMG.ins6 },
  ];

  const CATEGORIES = ["All", "Renewable Energy", "Legal & Regulatory", "Investment", "Agriculture", "Logistics"];
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? ARTICLES : ARTICLES.filter(a => a.category === active);

  return (
    <div className="bg-white text-slate-900 selection:bg-emerald-100">
      <Navbar transparent={false} />
      <main>

        {/* ── HEADER
            Two-image editorial layout: primary IMG.ins1 (solar) + secondary IMG.ins3
            (finance charts) side by side — like a magazine contents spread.
            Unique layout not used on any other page.
        ── */}
        <section className="relative bg-[#F8FAFC] border-b border-slate-100 pt-40 pb-0 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

              {/* Text */}
              <div className="lg:col-span-7 pb-16 z-10">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-8">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-700 font-bold text-[10px] tracking-[0.2em] uppercase">Thought Leadership</span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="text-[clamp(3rem,8vw,6rem)] font-light leading-[1] tracking-tighter mb-6 text-slate-900">
                  Insights & <br />
                  <span className="italic font-serif text-emerald-600 underline decoration-emerald-200 underline-offset-8">Analysis.</span>
                </motion.h1>
                <motion.p {...fadeInUp} className="text-slate-500 text-xl font-light leading-relaxed max-w-xl">
                  Expert perspectives on Africa's energy transition, investment landscape, and infrastructure development.
                </motion.p>
              </div>

              {/* Two stacked images — portrait pair bleeding off bottom */}
              <motion.div
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 self-end hidden lg:flex gap-4 items-end"
              >
                {/* Tall primary */}
                <div className="flex-1 aspect-[3/4] rounded-t-[2.5rem] overflow-hidden shadow-xl">
                  <img src={IMG.ins1} className="w-full h-full object-cover" alt="Solar energy insights" />
                </div>
                {/* Shorter secondary — starts lower */}
                <div className="flex-1 aspect-[3/5] rounded-t-[2.5rem] overflow-hidden shadow-xl mb-0" style={{ marginBottom: "-2rem" }}>
                  <img src={IMG.ins3} className="w-full h-full object-cover" alt="Investment analysis" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Category filter */}
            <div className="overflow-x-auto mb-12 -mx-6 px-6">
              <div className="flex gap-3 w-max pb-2">
                {CATEGORIES.map(c => (
                  <button key={c} onClick={() => setActive(c)}
                    className={`flex-shrink-0 px-5 py-2.5 rounded-full text-[10px] tracking-widest uppercase font-bold transition-all ${active === c ? "bg-slate-900 text-white" : "border border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600"}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured — full-bleed image hero, text overlay */}
            {active === "All" && (
              <motion.div {...fadeInUp}
                className="relative rounded-[3rem] mb-8 overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500">
                <div className="relative h-[500px]">
                  <img
                    src={ARTICLES[0].img}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    alt={ARTICLES[0].title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
                <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <span className="bg-emerald-500 text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full w-fit">Featured</span>
                    <span className="text-[10px] text-slate-300 tracking-wider">{ARTICLES[0].category} · {ARTICLES[0].date} · {ARTICLES[0].read} read</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4 leading-snug group-hover:text-emerald-300 transition-colors">
                    {ARTICLES[0].title}
                  </h2>
                  <p className="text-slate-300 font-light leading-relaxed mb-8 max-w-3xl">{ARTICLES[0].excerpt}</p>
                  <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                    Read Article <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Grid — each card has its own dedicated insights image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(active === "All" ? filtered.slice(1) : filtered).map((a, i) => (
                <motion.div key={a.title} {...fadeInUp} transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                  className="group rounded-[2rem] bg-[#F8FAFC] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-100 hover:border-emerald-100 transition-all duration-500 cursor-pointer overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={a.img}
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      alt={a.title}
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-5">
                      <span className="text-[9px] tracking-widest uppercase font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                        {a.category}
                      </span>
                    </div>
                    <h3 className="font-medium text-slate-900 text-lg mb-3 group-hover:text-emerald-600 transition-colors leading-snug">{a.title}</h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">{a.excerpt}</p>
                    <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                      <span className="text-[10px] text-slate-300 tracking-wide">{a.date} · {a.read} read</span>
                      <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

// ─── TEAM ─────────────────────────────────────────────────────────────────────
export function TeamPage() {
  // Each member gets their own dedicated portrait photo from IMG.team1–6
  const TEAM = [
    { name: "Dr. Adaeze Okonkwo", role: "Founder & CEO", focus: "Energy Strategy & Investment", bio: "15+ years in African energy markets. Former advisor to the Nigerian Ministry of Power.", initials: "AO", img: IMG.team1 },
    { name: "Emeka Nwosu", role: "Director, Legal & Regulatory", focus: "Energy Law & Compliance", bio: "Leading expert in Nigerian energy law with experience across 8 African jurisdictions.", initials: "EN", img: IMG.team2 },
    { name: "Fatima Al-Hassan", role: "Head of Investment Advisory", focus: "Project Finance & PE Structuring", bio: "Former investment banker with $500M+ in African energy deals structured.", initials: "FA", img: IMG.team3 },
    { name: "Chidi Obi", role: "Head of Infrastructure", focus: "Engineering & Project Management", bio: "Civil engineer with 20 years building energy and infrastructure projects across West Africa.", initials: "CO", img: IMG.team4 },
    { name: "Amina Diallo", role: "Agribusiness Lead", focus: "Agricultural Value Chains", bio: "Agro-economist specialising in smallholder finance and farm-to-market systems.", initials: "AD", img: IMG.team5 },
    { name: "Tunde Badmus", role: "Logistics Director", focus: "Supply Chain & Transportation", bio: "Supply chain specialist with deep expertise in energy sector logistics across challenging terrains.", initials: "TB", img: IMG.team6 },
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-emerald-100">
      <Navbar transparent={false} />
      <main>

        {/* ── HEADER
            Triptych of three team portrait thumbnails stacked to the right
            (team1, team2, team3) — like a magazine masthead.
            Light background but visually rich from the portrait grid.
        ── */}
        <section className="relative bg-[#F8FAFC] border-b border-slate-100 pt-40 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 80% 50%, rgba(16,185,129,0.06) 0%, transparent 60%)" }} />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Text */}
            <div className="lg:col-span-6 z-10">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 font-bold text-[10px] tracking-[0.2em] uppercase">Our People</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="text-[clamp(3rem,8vw,6rem)] font-light leading-[1] tracking-tighter mb-8 text-slate-900">
                The team <br />
                <span className="italic font-serif text-emerald-600 underline decoration-emerald-200 underline-offset-8">behind E4A.</span>
              </motion.h1>
              <motion.p {...fadeInUp} className="text-slate-500 text-xl font-light leading-relaxed max-w-xl">
                Seasoned experts across energy, law, finance, engineering, agriculture and logistics — united by a single mission.
              </motion.p>
            </div>

            {/* Portrait triptych — three tall portrait tiles */}
            <motion.div
              initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 hidden lg:flex gap-4 items-end h-80"
            >
              <div className="flex-1 h-full rounded-[2rem] overflow-hidden shadow-xl">
                <img src={IMG.team1} className="w-full h-full object-cover object-top" alt="" aria-hidden="true" />
              </div>
              <div className="flex-1 h-[90%] rounded-[2rem] overflow-hidden shadow-xl">
                <img src={IMG.team2} className="w-full h-full object-cover object-top" alt="" aria-hidden="true" />
              </div>
              <div className="flex-1 h-[75%] rounded-[2rem] overflow-hidden shadow-xl">
                <img src={IMG.team3} className="w-full h-full object-cover object-top" alt="" aria-hidden="true" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TEAM GRID
            Each member card now has their own real portrait (team1–6).
            Portrait fills the card top, name/bio below. Far more personal than initials alone.
        ── */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <motion.div key={member.name} {...fadeInUp} transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                className="group rounded-[2rem] bg-[#F8FAFC] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-100 hover:border-emerald-100 transition-all duration-500 overflow-hidden">

                {/* Portrait image — square crop, object-top to show faces */}
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={member.img}
                    className="w-full h-full object-cover object-top grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    alt={member.name}
                  />
                  {/* Subtle emerald overlay on hover */}
                  <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/5 transition-colors duration-500" />
                  {/* Role badge floating bottom-left */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 inline-block">
                      <p className="text-emerald-600 text-[9px] tracking-[0.2em] uppercase font-bold">{member.role}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-medium text-slate-900 text-xl mb-1 group-hover:text-emerald-600 transition-colors">{member.name}</h3>
                  <p className="text-slate-300 text-[10px] tracking-wider mb-5">{member.focus}</p>
                  <p className="text-slate-400 text-sm font-light leading-relaxed border-t border-slate-100 pt-5">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── MISSION BAND
            IMG.aboutTeam (team collaboration) — wide cinematic strip.
            Shows real teamwork energy. Not used elsewhere on this page.
        ── */}
        <div className="px-6 pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="h-64 rounded-[2.5rem] overflow-hidden relative">
              <img
                src={IMG.aboutTeam}
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 35%" }}
                alt="Team collaboration"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent" />
              <div className="absolute inset-0 flex items-center px-12">
                <div>
                  <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Our Culture</p>
                  <p className="text-white text-3xl font-light leading-tight tracking-tight max-w-sm">
                    Collaborative. Rigorous. <span className="italic font-serif text-emerald-300">Africa-driven.</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── JOIN CTA — IMG.svcOilGas (industry, ambition) — used nowhere else ── */}
        <section className="py-16 px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeInUp} className="relative rounded-[4rem] overflow-hidden">
              <img
                src={IMG.svcOilGas}
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-slate-900/80" />
              <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle at 70% 50%, rgba(16,185,129,0.25) 0%, transparent 55%)" }} />
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />

              <div className="relative z-10 p-16 md:p-24 text-center">
                <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
                  Want to be part <br />
                  <span className="italic font-serif text-emerald-400">of the mission?</span>
                </h2>
                <p className="text-slate-300 font-light mb-10 max-w-xl mx-auto">
                  We're always looking for exceptional talent who share our passion for powering Africa's future.
                </p>
                <a href="/contact"
                  className="px-12 py-6 bg-emerald-500 text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-emerald-400 transition-all inline-block">
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}