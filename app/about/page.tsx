"use client";
import { motion } from "framer-motion";
import { Navbar, Footer, IMG } from "@/components/shared";
import { Target, Users, Zap, ArrowUpRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900 selection:bg-emerald-100">
      <Navbar transparent={true} />

      <main>
        {/* ── SECTION 1: HERO — FULL-BLEED MISSION STATEMENT
            IMG.aboutSolar — wide solar field, establishes the renewable energy tone immediately.
            Dark gradient. White headline floats left. Portrait office image bleeds right.
            Transparent navbar sits on top.
        ── */}
        <section className="relative min-h-[85vh] flex items-end bg-slate-900 pb-20 pt-40 overflow-hidden">
          {/* Background */}
          <img
            src={IMG.aboutSolar}
            className="absolute inset-0 w-full h-full object-cover opacity-45"
            style={{ objectPosition: "50% 60%" }}
            alt=""
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/55 to-slate-900/10 pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(ellipse at 10% 100%, rgba(16,185,129,0.22) 0%, transparent 55%)" }}
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
                    The Mission
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[clamp(2.8rem,7vw,5.5rem)] font-light leading-[1.05] tracking-tighter mb-8 text-white"
                >
                  To be the leading catalyst for{" "}
                  <span className="italic font-serif text-emerald-400 underline decoration-emerald-700 underline-offset-8">
                    clean and sustainable
                  </span>{" "}
                  energy across Africa.
                </motion.h1>

                <motion.div {...fadeInUp} className="flex items-center gap-6 mt-10">
                  <div className="h-px w-20 bg-emerald-500" />
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-emerald-400 group"
                  >
                    Work With Us{" "}
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </a>
                </motion.div>
              </div>

              {/* Right: tall office portrait bleeds off bottom */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                className="lg:col-span-5 hidden lg:block self-end"
              >
                <div className="aspect-[4/5] rounded-t-[3rem] overflow-hidden shadow-[0_-40px_80px_-20px_rgba(0,0,0,0.4)]">
                  <img
                    src={IMG.aboutOffice}
                    className="w-full h-full object-cover"
                    alt="Energy 4 All office"
                  />
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
            style={{ objectPosition: "50% 50%" }}
            alt="Rural solar electrification"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-white" />
        </div>

        {/* ── SECTION 2: VISION & CORE PHILOSOPHY
            Light bg. Overlapping-image layout left (aboutSolar primary +
            nigeria secondary) — different subjects, both relevant.
            Text right. Matches Market page's "How we bridge the gap" section.
        ── */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

              {/* Overlapping images */}
              <div className="relative mb-16">
                <motion.div
                  initial={{ x: -80, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                  className="w-4/5 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
                >
                  <img
                    src={IMG.aboutSolar}
                    className="w-full h-full object-cover"
                    alt="Solar infrastructure"
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                  className="absolute -bottom-10 -right-6 w-3/5 aspect-square rounded-[2rem] overflow-hidden border-[12px] border-white shadow-2xl"
                >
                  <img
                    src={IMG.nigeria}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "50% 40%" }}
                    alt="Nigeria — Abuja"
                  />
                </motion.div>
              </div>

              {/* Vision text */}
              <motion.div {...fadeInUp}>
                <span className="text-emerald-600 font-bold text-xs tracking-widest uppercase mb-6 block">
                  Our Vision
                </span>
                <h2 className="text-5xl font-light tracking-tighter text-slate-900 mb-8 leading-tight">
                  Energy is a right, <br />
                  <span className="italic font-serif">not a privilege.</span>
                </h2>
                <p className="text-slate-500 text-lg font-light leading-relaxed mb-12">
                  At Energy 4 All Ltd, our vision is a future where every community and industry in
                  Africa is powered by reliable, clean, and inclusive energy solutions. We bridge
                  the gap between regulatory hurdles and operational excellence.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2 italic font-serif text-lg">Mission</h4>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">
                      Empowering communities and investors through expert advisory and tailored support.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2 italic font-serif text-lg">Identity</h4>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">
                      A multi-disciplinary firm bridging Renewable Energy, Oil & Gas, and Agribusiness.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── EDITORIAL STRIP: svcSolar ── */}
        <div className="px-6 py-4">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="h-72 rounded-[2.5rem] overflow-hidden relative">
              <img
                src={IMG.svcSolar}
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 50%" }}
                alt="Solar energy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/20" />
              <div className="absolute inset-0 flex items-center px-12">
                <div className="max-w-sm">
                  <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
                    Our Focus
                  </p>
                  <p className="text-white text-3xl font-light leading-tight tracking-tight">
                    Clean energy is{" "}
                    <span className="italic font-serif text-emerald-300">Africa's greatest</span>{" "}
                    infrastructure opportunity.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── SECTION 3: CORE VALUES
            Dark slate section — but now each value card has a subtle image
            context. Uses IMG.svcEnergy atmospheric background across the section.
            Matches the Market page's dark wind-turbine editorial section.
        ── */}
        <section className="relative py-40 overflow-hidden">
          <img
            src={IMG.svcEnergy}
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            style={{ objectPosition: "50% 50%" }}
            alt=""
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-slate-900/90" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.15) 0%, transparent 60%)" }}
          />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="mb-20">
              <span className="text-emerald-400 font-bold text-[10px] tracking-[0.5em] uppercase mb-4 block">
                The Foundation
              </span>
              <h2 className="text-5xl font-light tracking-tighter text-white">
                Institutional{" "}
                <span className="italic font-serif text-emerald-400">Values.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Expertise",
                  desc: "Innovative, sustainable solutions across Africa's dynamic markets.",
                  icon: <Zap />,
                  img: IMG.svcEnergy,
                },
                {
                  title: "Integrity",
                  desc: "Building bankable project outcomes through transparency.",
                  icon: <Zap />,
                  img: IMG.svcLegal,
                },
                {
                  title: "Innovation",
                  desc: "Integrating ESG and modern technology into energy infrastructure.",
                  icon: <Target />,
                  img: IMG.svcSolar,
                },
                {
                  title: "Impact",
                  desc: "Ensuring every project contributes to a resilient, energy-secure future.",
                  icon: <Users />,
                  img: IMG.africa,
                },
              ].map((value, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                  className="group rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                >
                  {/* Value image */}
                  <div className="h-36 overflow-hidden">
                    <img
                      src={value.img}
                      className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500"
                      alt={value.title}
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="text-emerald-400 group-hover:scale-110 transition-transform inline-block">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-light italic font-serif text-white">{value.title}</h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: TEAM CONCEPT — ADVISORY DEPTH
            Full editorial layout. IMG.aboutTeam cinematic strip.
            Team portrait stack + discipline cards floating on team image.
            Consistent with homepage team section treatment.
        ── */}
        <section className="py-32 bg-[#F8FAFC] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

              {/* Text */}
              <motion.div {...fadeInUp}>
                <span className="text-emerald-600 font-bold text-xs tracking-widest uppercase mb-6 block">
                  Our People
                </span>
                <h2 className="text-5xl font-light tracking-tighter text-slate-900 mb-8 leading-tight">
                  A Multi-Disciplinary <br />
                  <span className="italic font-serif text-emerald-600">Advisory Powerhouse.</span>
                </h2>
                <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                  Our team brings together experts from Legal, Engineering, Finance, and Logistics.
                  This integrated approach allows us to handle energy law compliance and project
                  valuation with the same level of technical rigour.
                </p>

                {/* Avatar stack */}
                <div className="flex -space-x-4 mb-10">
                  {[IMG.team1, IMG.team2, IMG.team3, IMG.team4].map((img, i) => (
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
                  Meet the Full Team{" "}
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>
              </motion.div>

              {/* Team image with discipline cards floating */}
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img
                    src={IMG.aboutTeam}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "50% 30%" }}
                    alt="Energy 4 All team collaboration"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
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

        {/* ── SECTION 5: FINAL CTA
            IMG.svcWind — wide cinematic, used consistently for CTAs.
            Dark overlay, emerald glow. Same treatment as Market/Team CTA.
        ── */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeInUp} className="relative rounded-[4rem] overflow-hidden">
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
                style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(16,185,129,0.3) 0%, transparent 60%)" }}
              />
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />

              <div className="relative z-10 p-16 md:p-24 text-center">
                <span className="text-emerald-400 font-bold text-[10px] tracking-[0.4em] uppercase mb-6 block">
                  Get In Touch
                </span>
                <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight text-white">
                  Let's build a resilient, <br />
                  <span className="italic font-serif text-emerald-400">energy-secure future.</span>
                </h2>
                <p className="text-slate-300 font-light mb-10 max-w-xl mx-auto">
                  Ready to discuss your project, investment, or strategic advisory needs? Our Abuja
                  team is waiting to hear from you.
                </p>
                <a
                  href="/contact"
                  className="inline-block px-12 py-5 bg-emerald-500 text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-emerald-400 transition-all"
                >
                  Contact our Abuja Office
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