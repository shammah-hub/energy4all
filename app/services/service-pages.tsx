"use client";
import { Footer, Navbar, SERVICES, useInView } from "@/components/shared";
import { IMG } from "@/components/shared";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

// Map each service slug to its dedicated image from IMG
const SERVICE_IMAGES: Record<string, string> = {
  "energy-infrastructure": IMG.svcEnergy,
  "legal-regulatory":      IMG.svcLegal,
  "investment-financial":  IMG.svcFinance,
  "logistics":             IMG.svcLogistics,
  "agribusiness":          IMG.svcAgri,
};

// Hero images used per detail page — distinct, thematic, never repeated across slugs
const SERVICE_HERO_IMAGES: Record<string, string> = {
  "energy-infrastructure": IMG.svcSolar,      // solar panels — on-topic
  "legal-regulatory":      IMG.svcLegal,       // legal/office context
  "investment-financial":  IMG.svcFinance,     // finance/charts context
  "logistics":             IMG.svcLogistics,   // shipping/supply chain
  "agribusiness":          IMG.farming,        // real farmland
};

// ─── SERVICES LIST PAGE ───────────────────────────────────────────────────────
export function ServicesPage() {
  return (
    <div className="bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar transparent={false} />

      <main>
        {/* ── HEADER
            Treatment: dark full-bleed background using svcEnergy (power lines at dusk)
            — completely different from every other page header which is light.
            Immediately signals "this is a different section of the site."
        ── */}
        <section className="relative min-h-[70vh] flex items-end bg-slate-900 border-b border-slate-800 pb-20 pt-40 px-6 overflow-hidden">
          <img
            src={IMG.svcEnergy}
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            alt=""
            aria-hidden="true"
          />
          {/* Bottom-up gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/10 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(ellipse at 70% 100%, rgba(16,185,129,0.18) 0%, transparent 55%)" }} />

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300 font-bold text-[10px] tracking-[0.2em] uppercase">What We Do</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[clamp(3rem,8vw,6rem)] font-light leading-[1] tracking-tighter mb-8 text-white"
            >
              Our Core <br />
              <span className="italic font-serif text-emerald-400 underline decoration-emerald-700 underline-offset-8">
                Advisory Sectors.
              </span>
            </motion.h1>

            <motion.p {...fadeInUp} className="text-slate-300 text-xl font-light leading-relaxed max-w-2xl">
              Five practice areas. One unified mission — to empower investors, developers,
              and communities across Africa.
            </motion.p>
          </div>
        </section>

        {/* ── CINEMATIC TRANSITION STRIP
            Uses heroWorker (worker on a solar site) — a mid-close human shot.
            Object position targets the worker, not the sky, making it feel editorial.
        ── */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={IMG.heroWorker}
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 40%" }}
            alt="Energy worker on site"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-white" />
        </div>

        {/* ── SERVICES LIST ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

              {/* Sticky left: copy + office image (aboutOffice — boardroom context) */}
              <motion.div {...fadeInUp} className="lg:sticky lg:top-32 space-y-8">
                <div>
                  <h2 className="text-4xl font-light tracking-tight text-slate-900 mb-6">
                    Expertise meets <span className="italic font-serif">Innovation.</span>
                  </h2>
                  <p className="text-slate-500 font-light text-lg mb-8 leading-relaxed">
                    We provide the legal, financial, and technical scaffolding required
                    for high-impact projects across Africa's dynamic markets.
                  </p>
                  <div className="space-y-4">
                    {["Energy Transition", "Infrastructure Law", "ESG Integration"].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 size={18} className="text-emerald-500" />
                        <span className="text-sm uppercase tracking-wider">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office/boardroom image — square crop, caption overlay */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-xl shadow-slate-100">
                  <img
                    src={IMG.aboutOffice}
                    className="w-full h-full object-cover"
                    alt="Advisory team at work"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Our Advisory Model</p>
                    <p className="text-slate-300 text-xs font-light">Integrated. Multi-sector. Africa-first.</p>
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
                </div>
              </motion.div>

              {/* Services cards — each uses its own dedicated service image as a left thumbnail */}
              <div className="lg:col-span-2 space-y-4">
                {SERVICES.map((s, i) => (
                  <motion.a
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    {...fadeInUp}
                    transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="group flex items-center gap-0 rounded-[2rem] border border-slate-100 bg-[#F8FAFC] hover:bg-white hover:shadow-2xl hover:shadow-slate-100 hover:border-emerald-100 transition-all duration-500 overflow-hidden"
                  >
                    {/* Left image thumbnail — unique per service */}
                    <div className="w-28 md:w-36 h-full min-h-[120px] flex-shrink-0 relative overflow-hidden">
                      <img
                        src={SERVICE_IMAGES[s.slug] || s.img}
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        alt={s.short}
                      />
                      {/* Emerald overlay on hover */}
                      <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/10 transition-colors duration-500" />
                    </div>

                    {/* Card body */}
                    <div className="flex items-center gap-6 px-6 md:px-8 py-8 flex-1">
                      <span
                        className="font-light text-slate-200 text-4xl flex-shrink-0 group-hover:text-emerald-200 transition-colors hidden sm:block"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="flex-1">
                        <h2 className="font-medium text-slate-900 text-xl mb-2 group-hover:text-emerald-600 transition-colors tracking-tight">
                          {s.title}
                        </h2>
                        <p className="text-slate-400 text-sm font-light leading-relaxed line-clamp-2">
                          {s.summary}
                        </p>
                      </div>

                      <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white transition-all flex-shrink-0">
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA
            Uses ruralSolar — a human-scale off-grid solar image, reinforces the
            "communities" mission and is used nowhere else on this page or others.
        ── */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              {...fadeInUp}
              className="relative rounded-[4rem] overflow-hidden"
            >
              <img
                src={IMG.ruralSolar}
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-slate-900/75" />
              <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(ellipse at 30% 50%, rgba(16,185,129,0.25) 0%, transparent 60%)" }} />
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />

              <div className="relative z-10 p-16 md:p-24">
                <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
                  Need a customised <br />
                  <span className="italic font-serif text-emerald-400">solution?</span>
                </h2>
                <p className="text-slate-300 font-light mb-10 max-w-xl mx-auto">
                  Our services are designed to work together. Talk to us about a tailored
                  multi-sector engagement.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <a href="/contact"
                    className="px-12 py-6 bg-emerald-500 text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-emerald-400 transition-all">
                    Contact Us
                  </a>
                  <p className="text-slate-300 font-medium text-sm">info@en4al.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// ─── SERVICE DETAIL PAGE ──────────────────────────────────────────────────────
export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = SERVICES.find((s) => s.slug === slug) || SERVICES[0];
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  const DETAILS: Record<string, { what: string[]; how: string[]; why: string }> = {
    "energy-infrastructure": {
      what: ["Feasibility studies and technical due diligence", "Operations & Maintenance (O&M) strategy", "Market entry and distribution planning", "Grid and off-grid solution design", "Solar mini-grid and renewable energy advisory", "Power Purchase Agreement (PPA) structuring"],
      how: ["Site assessment and resource evaluation", "Financial and technical modelling", "Stakeholder and regulatory engagement", "Project management and oversight", "Commissioning support and handover"],
      why: "Africa's energy deficit is a development emergency. Nigeria alone needs 30GW+ of additional power. We turn that challenge into investable opportunity.",
    },
    "legal-regulatory": {
      what: ["Energy law compliance advisory", "Contract drafting and negotiation", "Regulatory framework navigation", "Permit acquisition support", "Outsourcing and procurement legal advisory", "Dispute resolution support"],
      how: ["Legal landscape mapping per jurisdiction", "Multi-agency regulatory coordination", "Contract risk assessment and mitigation", "Policy monitoring and compliance updates"],
      why: "Operating in Africa's energy markets requires navigating complex, fast-evolving legal landscapes. We ensure your investments stay compliant, protected, and on track.",
    },
    "investment-financial": {
      what: ["Private equity structuring", "Financial modelling and scenario analysis", "Project valuation and bankability assessment", "Investor relations and roadshow support", "Capital raising strategy", "Return optimisation frameworks"],
      how: ["Comprehensive financial due diligence", "Risk-adjusted return modelling", "Debt and equity structuring", "Lender technical advisory", "Investment committee materials preparation"],
      why: "The right financial structure is the difference between a project that gets funded and one that doesn't. We build the frameworks that attract capital.",
    },
    "logistics": {
      what: ["Supply chain design and optimisation", "Last-mile logistics for energy components", "Fleet and transport management advisory", "Procurement and vendor management", "Warehousing and inventory strategy", "Cross-border trade facilitation"],
      how: ["End-to-end supply chain mapping", "Technology-enabled tracking solutions", "Carrier and vendor assessment", "Cost-efficiency and route optimisation", "Customs and import/export advisory"],
      why: "Even the best-designed energy projects fail without reliable component delivery. We ensure your supply chain is as resilient as your technology.",
    },
    "agribusiness": {
      what: ["Farm-to-market strategy development", "Agri-finance structuring", "Smallholder and commercial agro-advisory", "Agro-processing hub development", "Supply chain optimisation", "Agricultural input and output market access"],
      how: ["Value chain analysis and mapping", "Farmer and cooperative engagement", "Agri-finance product design", "Market linkage and off-take facilitation", "Technology adoption advisory"],
      why: "Agriculture employs 60%+ of Africa's workforce yet remains chronically underfinanced and under-advised. We're changing that — one value chain at a time.",
    },
  };

  const detail = DETAILS[slug] || DETAILS["energy-infrastructure"];
  const heroImg = SERVICE_HERO_IMAGES[slug] || SERVICE_IMAGES[slug];

  return (
    <div className="bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar transparent={false} />

      <main>
        {/* ── HERO
            Each slug gets its own dedicated image (svcSolar, svcLegal, svcFinance…)
            Split layout: text left, tall image right — mirrors homepage hero grid
            but uses a service-specific photo so every detail page looks unique.
        ── */}
        <section className="relative bg-[#F8FAFC] border-b border-slate-100 pt-40 pb-0 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 80% 50%, rgba(16,185,129,0.07) 0%, transparent 60%)" }} />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            {/* Text col */}
            <div className="lg:col-span-7 pb-20 z-10">
              <div className="flex items-center gap-3 mb-8">
                <a href="/services" className="text-[10px] tracking-widest text-slate-400 uppercase hover:text-slate-600 transition-colors">
                  Services
                </a>
                <span className="text-slate-300">/</span>
                <span className="text-[10px] tracking-widest text-emerald-600 uppercase font-bold">
                  {service.short}
                </span>
              </div>

              <div className="text-5xl mb-6">{service.icon}</div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] tracking-tighter mb-8 text-slate-900"
              >
                {service.title} <br />
                <span className="italic font-serif text-emerald-600">Advisory.</span>
              </motion.h1>

              <motion.p {...fadeInUp} className="text-slate-500 text-xl font-light leading-relaxed max-w-2xl">
                {service.summary}
              </motion.p>
            </div>

            {/* Tall image col — bleeds off bottom edge of header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative self-end hidden lg:block"
            >
              <div className="aspect-[3/4] rounded-t-[3rem] overflow-hidden shadow-[0_-40px_80px_-20px_rgba(0,0,0,0.1)]">
                <img
                  src={heroImg}
                  className="w-full h-full object-cover"
                  alt={service.title}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CONTENT ── */}
        <section ref={ref} className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

              {/* What */}
              <div className="p-10 rounded-[2rem] bg-[#F8FAFC] border border-slate-100">
                <p className="text-[10px] tracking-[0.3em] text-emerald-600 uppercase font-bold mb-8">What We Offer</p>
                <ul className="space-y-4">
                  {detail.what.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-500 text-sm font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How */}
              <div className="p-10 rounded-[2rem] bg-[#F8FAFC] border border-slate-100">
                <p className="text-[10px] tracking-[0.3em] text-sky-500 uppercase font-bold mb-8">How We Do It</p>
                <ul className="space-y-4">
                  {detail.how.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-sky-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-500 text-sm font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why — with a small atmospheric image above the quote */}
              <div className="rounded-[2rem] bg-emerald-50 border border-emerald-100 overflow-hidden flex flex-col justify-between">
                {/* Thematic image strip at the top of the Why card */}
                <div className="h-40 relative overflow-hidden flex-shrink-0">
                  <img
                    src={SERVICE_IMAGES[slug] || IMG.svcEnergy}
                    className="w-full h-full object-cover"
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-emerald-900/40" />
                  <p className="absolute bottom-4 left-6 text-[10px] tracking-[0.3em] text-emerald-200 uppercase font-bold">
                    Why It Matters
                  </p>
                </div>

                <div className="p-10 flex flex-col flex-1 justify-between">
                  <p className="text-slate-600 text-base font-light leading-relaxed italic mb-8">
                    "{detail.why}"
                  </p>
                  <div className="pt-6 border-t border-emerald-100">
                    <p className="text-slate-400 text-xs mb-4 font-light">Ready to get started?</p>
                    <a
                      href="/contact"
                      className="block w-full bg-slate-900 text-white py-4 text-center text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-emerald-600 transition-colors"
                    >
                      Discuss This Service
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── VISUAL BREAK between cards and related services
                Uses nigeria image — city/infrastructure — shown nowhere else on this page.
                Wide panoramic crop, fades to white below.
            ── */}
            <motion.div
              {...fadeInUp}
              className="mt-20 h-64 rounded-[2rem] overflow-hidden relative"
            >
              <img
                src={IMG.nigeria}
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 60%" }}
                alt="Nigeria infrastructure"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent" />
              <div className="absolute inset-0 flex items-center px-12">
                <div>
                  <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Our Reach</p>
                  <p className="text-white text-2xl font-light tracking-tight">
                    Operating across <span className="italic font-serif text-emerald-300">Nigeria & Sub-Saharan Africa.</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Related services */}
            <div
              className={`mt-16 pt-16 border-t border-slate-100 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-[10px] tracking-[0.4em] text-slate-400 uppercase mb-8">Other Services</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {SERVICES.filter((s) => s.slug !== slug).slice(0, 4).map((s) => (
                  <a
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group rounded-[1.5rem] border border-slate-100 bg-[#F8FAFC] hover:bg-white hover:shadow-xl hover:shadow-slate-100 hover:border-emerald-100 transition-all duration-300 overflow-hidden"
                  >
                    {/* Each related card has its own image thumbnail */}
                    <div className="h-24 overflow-hidden">
                      <img
                        src={SERVICE_IMAGES[s.slug] || s.img}
                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        alt={s.short}
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-xl mb-2 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
                      <p className="text-xs text-slate-500 group-hover:text-emerald-600 font-semibold transition-colors leading-snug">
                        {s.short}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA
            Uses africa — wide continent/landscape shot, never used on this page before.
            Dark overlay, emerald glow — consistent with the site's dark CTA pattern
            but with a geographically meaningful image.
        ── */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div {...fadeInUp} className="relative rounded-[4rem] overflow-hidden">
              <img
                src={IMG.africa}
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-slate-900/80" />
              <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(16,185,129,0.3) 0%, transparent 60%)" }} />
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />

              <div className="relative z-10 p-16 md:p-24">
                <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
                  Ready to architect <br />
                  <span className="italic font-serif text-emerald-400">the future?</span>
                </h2>
                <p className="text-slate-300 font-light mb-10 max-w-xl mx-auto">
                  Schedule a briefing with our advisory team to discuss project feasibility
                  and investment structuring.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <a href="/contact"
                    className="px-12 py-6 bg-emerald-500 text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-emerald-400 transition-all">
                    Request Strategy Session
                  </a>
                  <p className="text-slate-300 font-medium text-sm">info@en4al.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}