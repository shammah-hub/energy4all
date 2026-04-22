"use client";
import { useRef } from "react";
import { Navbar, Footer, useInView } from "../../components/shared";

export default function AboutPage() {
  const missionRef = useRef<HTMLElement>(null);
  const missionInView = useInView(missionRef);
  const valuesRef = useRef<HTMLElement>(null);
  const valuesInView = useInView(valuesRef);
  const storyRef = useRef<HTMLElement>(null);
  const storyInView = useInView(storyRef);

  return (
    <>
      <Navbar light />
      <main className="bg-[#0a1628]">
        {/* Hero */}
        <section className="relative pt-32 sm:pt-44 pb-20 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#22c55e]/5 rounded-full blur-3xl -translate-y-1/2" />
          <div className="max-w-7xl mx-auto relative z-10">
            <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-6">— Who We Are</p>
            <h1 className="font-black text-white leading-none mb-8"
              style={{ fontSize: "clamp(48px,9vw,120px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.03em" }}>
              BUILT FOR<br /><span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #22c55e, #0ea5e9)" }}>AFRICA'S</span><br />AMBITION.
            </h1>
            <p className="text-white/50 text-lg font-light leading-relaxed max-w-2xl">
              Energy 4 All Limited is a multi-disciplinary advisory and consultancy firm delivering innovative, sustainable solutions across Africa's essential sectors.
            </p>
          </div>
        </section>

        {/* Story */}
        <section ref={storyRef} className="bg-[#0d1f3c] py-20 sm:py-28 px-4 sm:px-6">
          <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${storyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-6">— Our Story</p>
              <h2 className="font-black text-white leading-none mb-8"
                style={{ fontSize: "clamp(32px,5vw,60px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>
                BRIDGING THE<br />ENERGY GAP.
              </h2>
              <p className="text-white/50 text-base leading-relaxed font-light mb-6">
                Energy 4 All was founded on a simple but powerful belief: access to energy is a right, not a privilege. With over 600 million people in Sub-Saharan Africa lacking reliable electricity, we saw an urgent need for an advisory firm that truly understood the continent's challenges.
              </p>
              <p className="text-white/40 text-sm leading-relaxed font-light mb-8">
                From Abuja, we operate across Nigeria and the broader African continent — supporting investors, developers, and governments with the expertise they need to execute complex projects with precision, efficiency, and enduring impact.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "5", label: "Service Sectors" },
                  { num: "30GW+", label: "Nigeria's Energy Gap" },
                  { num: "600M+", label: "People Underserved" },
                  { num: "100%", label: "Africa-Focused" },
                ].map(s => (
                  <div key={s.label} className="border-l-2 border-[#22c55e] pl-4">
                    <p className="font-black text-[#22c55e] text-2xl" style={{ fontFamily: "'Helvetica Neue',sans-serif" }}>{s.num}</p>
                    <p className="text-white/40 text-xs tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Visual block */}
            <div className="relative">
              <div className="bg-[#0a1628] border border-white/10 aspect-square flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]"
                  style={{ backgroundImage: "linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                <div className="relative z-10 text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#22c55e] to-[#0ea5e9] flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-black text-3xl" style={{ fontFamily: "'Helvetica Neue',sans-serif" }}>E4</span>
                  </div>
                  <p className="font-black text-white text-2xl mb-2" style={{ fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>Energy 4 All</p>
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Limited</p>
                  <p className="text-white/50 text-sm font-light leading-relaxed italic">"Africa is rising — and we are building the roads, powering the farms, financing the future."</p>
                </div>
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#22c55e] flex items-center justify-center">
                <p className="text-white font-black text-center text-xs leading-tight">EST.<br />2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section ref={missionRef} className="bg-[#0a1628] py-20 sm:py-28 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-700 ${missionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-4">— What Drives Us</p>
              <h2 className="font-black text-white leading-none"
                style={{ fontSize: "clamp(32px,5vw,64px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>
                VISION &<br /><span className="text-white/30">MISSION</span>
              </h2>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${missionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "200ms" }}>
              <div className="border border-white/10 p-10 sm:p-14 relative overflow-hidden group hover:border-[#22c55e]/40 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e]/5 rounded-bl-full" />
                <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-6 font-bold">Our Vision</p>
                <h3 className="font-black text-white text-3xl mb-6 leading-snug"
                  style={{ fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>
                  LEADING CATALYST FOR CLEAN ENERGY
                </h3>
                <p className="text-white/50 text-base font-light leading-relaxed">
                  To be the leading catalyst for clean and sustainable energy solutions across Africa and emerging markets.
                </p>
              </div>
              <div className="border border-[#22c55e]/30 bg-[#22c55e]/5 p-10 sm:p-14 relative overflow-hidden group hover:bg-[#22c55e]/10 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e]/10 rounded-bl-full" />
                <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-6 font-bold">Our Mission</p>
                <h3 className="font-black text-white text-3xl mb-6 leading-snug"
                  style={{ fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>
                  EMPOWERING COMMUNITIES & INVESTORS
                </h3>
                <p className="text-white/60 text-base font-light leading-relaxed">
                  To empower communities and investors through expert advisory and tailored support in renewable energy and infrastructure — ensuring access, efficiency, and lasting impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="bg-[#0d1f3c] py-20 sm:py-28 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`mb-16 transition-all duration-700 ${valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-4">— Core Values</p>
              <h2 className="font-black text-white leading-none"
                style={{ fontSize: "clamp(32px,5vw,64px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>
                WHAT WE<br /><span className="text-white/30">STAND FOR</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "💡", title: "Innovation", body: "We apply cutting-edge thinking to Africa's oldest and most pressing challenges." },
                { icon: "🌱", title: "Sustainability", body: "Every solution we design considers long-term environmental and community impact." },
                { icon: "🤝", title: "Integrity", body: "We operate with full transparency, ethics, and accountability at every stage." },
                { icon: "🚀", title: "Impact", body: "Measurable outcomes — not just advice. We stay engaged until projects deliver." },
              ].map((v, i) => (
                <div key={v.title}
                  className={`border border-white/10 p-8 hover:border-[#22c55e]/40 hover:bg-white/3 transition-all duration-300 group transition-all duration-700 ${valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="text-3xl mb-6">{v.icon}</div>
                  <h4 className="font-black text-white text-lg mb-3 group-hover:text-[#22c55e] transition-colors"
                    style={{ fontFamily: "'Helvetica Neue',sans-serif" }}>
                    {v.title}
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed font-light">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0a1628] border-t border-white/10 py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase mb-4">— Partner With Us</p>
            <h2 className="font-black text-white leading-none mb-6"
              style={{ fontSize: "clamp(32px,5vw,60px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>
              LET'S BUILD<br />SOMETHING GREAT.
            </h2>
            <p className="text-white/40 text-base font-light mb-10">
              Whether you're an investor, developer, or government body — we're ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-[#22c55e] text-white px-10 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-[#16a34a] transition-colors">
                Get In Touch
              </a>
              <a href="/services" className="border border-white/20 text-white px-10 py-4 text-[10px] font-bold tracking-widest uppercase hover:border-white/50 transition-colors">
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
