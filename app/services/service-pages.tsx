"use client";
import { useRef } from "react";
import { Navbar, Footer, useInView, SERVICES } from "../../../components/shared";

// ─── Services Overview ────────────────────────────────────────────────────────
export function ServicesPage() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <>
      <Navbar light />
      <main className="bg-[#0a1628]">
        <section className="relative pt-32 sm:pt-44 pb-20 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="max-w-7xl mx-auto relative z-10">
            <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-6">— What We Do</p>
            <h1 className="font-black text-white leading-none mb-8"
              style={{ fontSize: "clamp(48px,9vw,120px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.03em" }}>
              OUR<br /><span className="text-white/20">SERVICES</span>
            </h1>
            <p className="text-white/50 text-lg font-light max-w-2xl leading-relaxed">
              Five core practice areas. One unified mission — to empower investors, developers, and communities across Africa.
            </p>
          </div>
        </section>

        <section ref={ref} className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto space-y-4">
            {SERVICES.map((s, i) => (
              <a key={s.slug} href={`/services/${s.slug}`}
                className={`group flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 border border-white/10 p-8 sm:p-10 hover:border-[#22c55e]/40 hover:bg-white/3 transition-all duration-300 block transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="font-black text-white/10 text-5xl sm:text-6xl flex-shrink-0"
                  style={{ fontFamily: "'Helvetica Neue',sans-serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="text-3xl flex-shrink-0 hidden sm:block">{s.icon}</div>
                <div className="flex-1">
                  <h2 className="font-black text-white text-xl sm:text-2xl mb-3 group-hover:text-[#22c55e] transition-colors leading-snug"
                    style={{ fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.01em" }}>
                    {s.title}
                  </h2>
                  <p className="text-white/40 text-sm leading-relaxed font-light">{s.summary}</p>
                </div>
                <div className="flex items-center gap-2 text-[#22c55e] text-[10px] tracking-widest uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  <span className="hidden sm:block">Learn More</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#0d1f3c] py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-4">— Integrated Approach</p>
            <h2 className="font-black text-white leading-none mb-6"
              style={{ fontSize: "clamp(28px,4vw,52px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>
              NEED A CUSTOMISED<br />SOLUTION?
            </h2>
            <p className="text-white/40 font-light mb-8">Our services are designed to work together. Talk to us about a tailored multi-sector engagement.</p>
            <a href="/contact" className="inline-block bg-[#22c55e] text-white px-10 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-[#16a34a] transition-colors">
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// ─── Individual Service Detail Page ──────────────────────────────────────────
export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = SERVICES.find(s => s.slug === slug) || SERVICES[0];
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

  return (
    <>
      <Navbar light />
      <main className="bg-[#0a1628]">
        {/* Hero */}
        <section className="relative pt-32 sm:pt-44 pb-20 px-4 sm:px-6 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-8">
              <a href="/services" className="text-[10px] tracking-widest text-white/30 uppercase hover:text-white transition-colors">Services</a>
              <span className="text-white/20">/</span>
              <span className="text-[10px] tracking-widest text-[#22c55e] uppercase font-bold">{service.short}</span>
            </div>
            <div className="text-5xl mb-6">{service.icon}</div>
            <h1 className="font-black text-white leading-none mb-8"
              style={{ fontSize: "clamp(36px,7vw,90px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.03em" }}>
              {service.title.toUpperCase()}
            </h1>
            <p className="text-white/50 text-lg font-light max-w-2xl leading-relaxed">{service.summary}</p>
          </div>
        </section>

        {/* Content */}
        <section ref={ref} className="py-20 sm:py-28 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {/* What */}
              <div className="border border-white/10 p-8">
                <p className="text-[10px] tracking-[0.3em] text-[#22c55e] uppercase font-bold mb-6">What We Offer</p>
                <ul className="space-y-4">
                  {detail.what.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] mt-2 flex-shrink-0" />
                      <span className="text-white/60 text-sm font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How */}
              <div className="border border-white/10 p-8">
                <p className="text-[10px] tracking-[0.3em] text-[#0ea5e9] uppercase font-bold mb-6">How We Do It</p>
                <ul className="space-y-4">
                  {detail.how.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] mt-2 flex-shrink-0" />
                      <span className="text-white/60 text-sm font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why */}
              <div className="border border-[#22c55e]/30 bg-[#22c55e]/5 p-8 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-[#22c55e] uppercase font-bold mb-6">Why It Matters</p>
                  <p className="text-white/60 text-base font-light leading-relaxed italic mb-8">"{detail.why}"</p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/40 text-xs mb-4 font-light">Ready to get started?</p>
                  <a href="/contact"
                    className="block w-full bg-[#22c55e] text-white py-3.5 text-center text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#16a34a] transition-colors">
                    Discuss This Service
                  </a>
                </div>
              </div>
            </div>

            {/* Related services */}
            <div className={`mt-16 pt-16 border-t border-white/10 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "300ms" }}>
              <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-8">— Other Services</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {SERVICES.filter(s => s.slug !== slug).slice(0, 4).map(s => (
                  <a key={s.slug} href={`/services/${s.slug}`}
                    className="border border-white/10 p-5 hover:border-[#22c55e]/40 hover:bg-white/3 transition-all duration-200 group block">
                    <div className="text-xl mb-3">{s.icon}</div>
                    <p className="text-xs text-white/50 group-hover:text-white font-semibold transition-colors leading-snug">{s.short}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
