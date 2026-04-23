"use client";
import { motion } from "framer-motion";
import { Navbar, Footer, IMG, } from "@/components/shared";
import { ArrowUpRight, Shield, Landmark, Truck, Leaf, Zap, CheckCircle2 } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar transparent={true} />

      <main>
        {/* ── SECTION 1: FULL-BLEED HERO
            IMG.hero — wide cinematic solar/wind landscape.
            Dark gradient overlay, white text. Transparent navbar floats on top.
            Split: headline left, portrait worker image right bleeds to edge.
        ── */}
        <section className="relative min-h-[100vh] flex items-end bg-slate-900 pb-20 pt-40 overflow-hidden">
          {/* Full-bleed background */}
          <img
            src={IMG.hero}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            style={{ objectPosition: "50% 40%" }}
            alt=""
            aria-hidden="true"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20 pointer-events-none" />
          {/* Emerald radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(ellipse at 15% 90%, rgba(16,185,129,0.25) 0%, transparent 55%)" }}
          />

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

              {/* Left: headline */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full mb-8"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-300 font-bold text-[10px] tracking-[0.2em] uppercase">
                    Energy 4 All Limited • Abuja, Nigeria
                  </span>
                </motion.div>

                {/* FIX 1: Reduced min clamp from 3rem to 2rem for small screens */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[clamp(2rem,8vw,6.5rem)] font-light leading-[1] tracking-tighter mb-8 text-white"
                >
                  Access to Energy <br />
                  is a{" "}
                  <span className="italic font-serif text-emerald-400 underline decoration-emerald-700 underline-offset-8">
                    Right.
                  </span>
                </motion.h1>

                <motion.p
                  {...fadeInUp}
                  className="text-slate-300 text-xl font-light leading-relaxed mb-10 max-w-xl"
                >
                  A multi-disciplinary advisory firm delivering sustainable solutions across
                  Africa's Renewable Energy, Logistics, and Agriculture sectors.
                </motion.p>

                <motion.div {...fadeInUp} className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="px-10 py-5 bg-emerald-500 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-900/40"
                  >
                    Request Strategy Session
                  </a>
                  <a
                    href="/about"
                    className="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:border-white/50 transition-all"
                  >
                    Our Mandate
                  </a>
                </motion.div>
              </div>

              {/* Right: floating worker portrait card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                className="lg:col-span-5 hidden lg:block self-end"
              >
                <div className="aspect-[3/4] rounded-t-[3rem] overflow-hidden shadow-[0_-40px_80px_-20px_rgba(0,0,0,0.4)]">
                  <img
                    src={IMG.heroWorker}
                    className="w-full h-full object-cover"
                    alt="Energy professional"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── TRANSITION STRIP: ruralSolar ── */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={IMG.ruralSolar}
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 60%" }}
            alt="Rural solar installation"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-white" />
        </div>

        {/* ── SECTION 2: ADVISORY PILLARS
            Light background. Left sticky editorial text. Right 2-col service cards
            each with their own IMG from shared — svcEnergy, svcLegal, svcFinance,
            svcAgri, svcLogistics.
        ── */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

              {/* Sticky left column */}
              <motion.div {...fadeInUp} className="lg:sticky lg:top-32">
                <span className="text-emerald-600 font-bold text-xs tracking-widest uppercase mb-6 block">
                  What We Do
                </span>
                <h2 className="text-4xl font-light tracking-tight text-slate-900 mb-6 leading-tight">
                  Expertise meets{" "}
                  <span className="italic font-serif">Innovation.</span>
                </h2>
                <p className="text-slate-500 font-light text-lg mb-8 leading-relaxed">
                  We provide the legal, financial, and technical scaffolding required for
                  high-impact projects in Africa's dynamic markets.
                </p>
                <div className="space-y-4 mb-10">
                  {["Energy Transition", "Infrastructure Law", "ESG Integration"].map((check) => (
                    <div key={check} className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 size={18} className="text-emerald-500" />
                      <span className="text-sm uppercase tracking-wider">{check}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-900 group"
                >
                  All Services{" "}
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>
              </motion.div>

              {/* Service cards — each with its own image */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Energy & Infrastructure", icon: <Zap />, desc: "Feasibility studies, market entry, and power generation advisory.", img: IMG.svcEnergy },
                  { title: "Legal & Regulatory", icon: <Shield />, desc: "Compliance, contract negotiations, and regulatory frameworks.", img: IMG.svcLegal },
                  { title: "Investment & Financial", icon: <Landmark />, desc: "Private equity, financial modeling, and project valuation.", img: IMG.svcFinance },
                  { title: "Agribusiness", icon: <Leaf />, desc: "Farm-to-market strategies and agri-finance structuring.", img: IMG.svcAgri },
                  { title: "Logistics & Supply Chain", icon: <Truck />, desc: "Operational optimization for energy and mining sectors.", img: IMG.svcLogistics },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    {...fadeInUp}
                    transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                    className="group rounded-[2rem] bg-[#F8FAFC] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-100 hover:border-emerald-100 transition-all duration-500 overflow-hidden"
                  >
                    {/* Service image */}
                    <div className="h-40 overflow-hidden">
                      <img
                        src={s.img}
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        alt={s.title}
                      />
                    </div>
                    <div className="p-8">
                      <div className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform inline-block">
                        {s.icon}
                      </div>
                      <h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-slate-400 text-sm font-light leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: IMPACT STATS
            Full-bleed IMG.svcWind — wind turbines, cinematic scale.
            Dark overlay. White stats. Emerald accents.
            Much more atmospheric than the old opacity-20 treatment.
        ── */}
        <section className="relative py-40 overflow-hidden">
          <img
            src={IMG.svcWind}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "50% 60%" }}
            alt=""
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(ellipse at 50% 100%, rgba(16,185,129,0.2) 0%, transparent 60%)" }}
          />
          <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="text-center mb-20">
              <span className="text-emerald-400 font-bold text-[10px] tracking-[0.4em] uppercase mb-4 block">
                The Scale of Opportunity
              </span>
              <h2 className="text-5xl font-light text-white tracking-tighter">
                Africa's energy gap is{" "}
                <span className="italic font-serif text-emerald-400">our mandate.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { label: "Energy Deficit", val: "30GW", sub: "Targeting Africa's Power Gap" },
                { label: "Population Impact", val: "600M+", sub: "People Without Reliable Power" },
                { label: "Strategy Pillars", val: "05", sub: "Integrated Advisory Sectors" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                  
                  /* FIX 3: Reduced the padding from p-10 to p-6 md:p-10 for mobile */ 
                  className="p-6 md:p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <p className="text-[10px] uppercase tracking-[0.4em] text-emerald-400 mb-4">{stat.label}</p>
                  {/* FIX 3: Reduced stat number from text-7xl to text-5xl md:text-7xl for mobile */}
                  <h4 className="text-5xl md:text-7xl font-light text-white mb-4 tracking-tighter">{stat.val}</h4>
                  <p className="text-slate-400 text-sm italic font-light">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: CORPORATE IDENTITY — OVERLAPPING IMAGES
            IMG.team1 (primary portrait) + IMG.aboutSolar (technical).
            Matches the same overlapping-image pattern used on Market page.
        ── */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

              {/* Overlapping images */}
              {/* FIX 1: Increased bottom margin from mb-16 to mb-32 lg:mb-16 to prevent clipping on mobile */}
              <div className="relative order-2 lg:order-1 mb-32 lg:mb-16">
                <motion.div
                  initial={{ x: -80, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                  className="w-4/5 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
                >
                  <img src={IMG.aboutOffice} className="w-full h-full object-cover" alt="Energy 4 All office" />
                </motion.div>
                <motion.div
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                  className="absolute -bottom-10 -right-6 w-3/5 aspect-square rounded-[2rem] overflow-hidden border-[12px] border-white shadow-2xl"
                >
                  <img src={IMG.aboutSolar} className="w-full h-full object-cover" alt="Solar infrastructure" />
                </motion.div>
              </div>

              {/* Text */}
              <motion.div {...fadeInUp} className="order-1 lg:order-2">
                <span className="text-emerald-600 font-bold text-xs tracking-widest uppercase mb-6 block">
                  Our Mandate
                </span>
                <h2 className="text-5xl font-light tracking-tighter text-slate-900 mb-8 leading-tight">
                  Driving Innovation <br /> to Deliver{" "}
                  <span className="italic font-serif text-emerald-600">Energy for All.</span>
                </h2>
                <p className="text-slate-500 text-lg font-light leading-relaxed mb-10">
                  Every community deserves clean, accessible power. At Energy 4 All, expertise meets
                  innovation to empower stakeholders to scale production and maximize returns across
                  Africa's most dynamic markets.
                </p>
                <div className="flex items-center gap-6">
                  <div className="h-px w-20 bg-slate-200" />
                  <a
                    href="/about"
                    className="text-xs uppercase tracking-widest font-bold text-slate-900 flex items-center gap-2 group"
                  >
                    The Manifesto{" "}
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── EDITORIAL STRIP: svcOilGas ── */}
        <div className="px-6 py-4">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="h-72 rounded-[2.5rem] overflow-hidden relative">
              <img
                src={IMG.svcOilGas}
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 50%" }}
                alt="Oil and gas infrastructure"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/20" />
              {/* FIX 5: Reduced horizontal padding from px-12 to px-6 md:px-12 for mobile */}
              <div className="absolute inset-0 flex items-center px-6 md:px-12">
                <div className="max-w-lg">
                  <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
                    Integrated Advisory
                  </p>
                  <p className="text-white text-3xl font-light leading-tight tracking-tight">
                    From energy law compliance to{" "}
                    <span className="italic font-serif text-emerald-300">
                      private equity structuring
                    </span>{" "}
                    — one firm, end to end.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── SECTION 5: TEAM SOCIAL PROOF
            IMG.aboutTeam as atmospheric background.
            Shows real people, builds trust. Unique treatment on homepage.
        ── */}
        <section className="py-32 px-6 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

              <motion.div {...fadeInUp}>
                <span className="text-emerald-600 font-bold text-xs tracking-widest uppercase mb-6 block">
                  Our People
                </span>
                <h2 className="text-5xl font-light tracking-tighter text-slate-900 mb-8 leading-tight">
                  A Multi-Disciplinary <br />
                  <span className="italic font-serif text-emerald-600">Advisory Powerhouse.</span>
                </h2>
                <p className="text-slate-500 text-lg font-light leading-relaxed mb-10">
                  Legal, Engineering, Finance, and Logistics experts united by a single mission —
                  powering Africa's future with integrity and technical rigour.
                </p>

                {/* Team avatar stack */}
                <div className="flex -space-x-4 mb-10">
                  {[IMG.team1, IMG.team2, IMG.team3, IMG.team4, IMG.team5].map((img, i) => (
                    <div
                      key={i}
                      className="w-14 h-14 rounded-full border-4 border-[#F8FAFC] overflow-hidden shadow-lg"
                    >
                      <img src={img} className="w-full h-full object-cover object-top" alt="Team member" />
                    </div>
                  ))}
                  <div className="w-14 h-14 rounded-full border-4 border-[#F8FAFC] bg-emerald-500 flex items-center justify-center text-white font-bold text-xs shadow-lg">
                    +20
                  </div>
                </div>

                <a
                  href="/team"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-900 group"
                >
                  Meet the Team{" "}
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>
              </motion.div>

              {/* Team image with floating stats */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img
                    src={IMG.aboutTeam}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "50% 30%" }}
                    alt="Energy 4 All team"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>

                {/* Floating discipline cards */}
                <div className="absolute bottom-8 left-6 right-6 space-y-3">
                  {[
                    { role: "Legal & Regulatory", label: "Energy Law Compliance" },
                    { role: "Investment & Financial", label: "Private Equity Structuring" },
                    { role: "Engineering & ESG", label: "HSE Standards Integration" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3"
                    >
                      <p className="font-medium text-slate-900 text-sm">{item.role}</p>
                      <p className="text-[9px] uppercase tracking-widest text-emerald-600 font-bold">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: FINAL CTA
            IMG.svcHydro as background — water infrastructure, ambition.
            Dark overlay, emerald glow. Consistent with Market/Team CTA treatment.
        ── */}
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
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(16,185,129,0.3) 0%, transparent 60%)" }}
              />
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />

              {/* FIX 4: Reduced padding from p-16 md:p-24 to p-8 md:p-16 lg:p-24 for mobile */}
              <div className="relative z-10 p-8 md:p-16 lg:p-24 text-center">
                <span className="text-emerald-400 font-bold text-[10px] tracking-[0.4em] uppercase mb-6 block">
                  Partner With Us
                </span>
                <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight text-white">
                  Partner with the leading catalyst <br />
                  <span className="italic font-serif text-emerald-400">for sustainable growth.</span>
                </h2>
                <p className="text-slate-300 font-light mb-10 max-w-xl mx-auto">
                  Ready to power Africa's future? Our Abuja team is ready to discuss your project,
                  investment, or strategic goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="/contact"
                    className="px-12 py-5 bg-emerald-500 text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-emerald-400 transition-all"
                  >
                    Contact Abuja HQ
                  </a>
                  <p className="text-slate-400 font-light text-sm">info@en4al.com</p>
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