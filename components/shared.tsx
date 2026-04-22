"use client";
import { useState, useEffect, useRef } from "react";

// ─── Hooks ────────────────────────────────────────────────────────────────────
export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

export function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.1) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    slug: "energy-infrastructure",
    title: "Energy & Infrastructure Advisory",
    short: "Energy & Infrastructure",
    icon: "⚡",
    color: "from-blue-900 to-blue-800",
    accent: "#22c55e",
    summary: "Feasibility studies, O&M strategies, market entry, and distribution planning for high-impact energy projects.",
  },
  {
    slug: "legal-regulatory",
    title: "Legal & Regulatory Advisory",
    short: "Legal & Regulatory",
    icon: "⚖️",
    color: "from-navy-900 to-slate-800",
    accent: "#38bdf8",
    summary: "Energy law compliance, contract negotiations, permits, and regulatory framework navigation.",
  },
  {
    slug: "investment-financial",
    title: "Investment & Financial Advisory",
    short: "Investment & Financial",
    icon: "📈",
    color: "from-emerald-900 to-teal-800",
    accent: "#22c55e",
    summary: "Private equity structuring, financial modeling, and project valuation for bankable outcomes.",
  },
  {
    slug: "logistics",
    title: "Supply Chain, Logistics & Transportation",
    short: "Logistics & Supply Chain",
    icon: "🚚",
    color: "from-slate-800 to-blue-900",
    accent: "#38bdf8",
    summary: "Supply chain optimization for energy and mining — ensuring reliability across challenging terrains.",
  },
  {
    slug: "agribusiness",
    title: "Agribusiness & Agro-Services",
    short: "Agribusiness",
    icon: "🌾",
    color: "from-green-900 to-emerald-800",
    accent: "#86efac",
    summary: "Farm-to-market strategies, agri-finance structuring, and supply optimization across Africa's food systems.",
  },
];

export const STATS = [
  { num: "600M+", label: "People lacking reliable electricity in Sub-Saharan Africa" },
  { num: "30GW+", label: "Additional power Nigeria alone needs to meet demand" },
  { num: "5", label: "Core service sectors we operate across" },
  { num: "100%", label: "Committed to sustainable, inclusive energy solutions" },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────
export function Navbar({ light = false }: { light?: boolean }) {
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const solid = scrollY > 80 || light;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${solid ? "bg-[#0a1628]/97 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#22c55e] to-[#0ea5e9] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-xs">E4</span>
            </div>
            <div className="leading-none">
              <span className="font-black text-white text-sm tracking-wide" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
                Energy <span className="text-[#22c55e]">4</span> All
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services", hasDropdown: true },
              { label: "The Market", href: "/market" },
              { label: "Insights", href: "/insights" },
              { label: "Team", href: "/team" },
            ].map(item => (
              <li key={item.label} className="relative group/nav">
                <a href={item.href}
                  className="text-[11px] tracking-widest uppercase font-semibold text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-1">
                  {item.label}
                  {item.hasDropdown && (
                    <svg className="w-3 h-3 transition-transform duration-200 group-hover/nav:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  )}
                </a>
                {/* Services dropdown */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-[#0a1628] border border-white/10 shadow-2xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 translate-y-2 group-hover/nav:translate-y-0">
                    <div className="p-2">
                      {SERVICES.map(s => (
                        <a key={s.slug} href={`/services/${s.slug}`}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group/item">
                          <span className="text-lg">{s.icon}</span>
                          <span className="text-xs text-white/70 group-hover/item:text-white transition-colors font-medium">{s.short}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a href="/contact"
              className="hidden md:block bg-[#22c55e] text-white px-5 py-2.5 text-[10px] font-bold tracking-widest uppercase hover:bg-[#16a34a] transition-colors">
              Get In Touch
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                {menuOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
                }
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div className={`fixed inset-0 z-40 md:hidden bg-[#0a1628] flex flex-col transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex-1 flex flex-col justify-center px-6 pt-24 pb-10 overflow-y-auto">
          <ul className="space-y-0 mb-10">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "The Market", href: "/market" },
              { label: "Insights", href: "/insights" },
              { label: "Team", href: "/team" },
              { label: "Contact", href: "/contact" },
            ].map((item, i) => (
              <li key={item.label}>
                <a href={item.href} onClick={() => setMenuOpen(false)}
                  className="block font-black text-white leading-none py-4 border-b border-white/10 active:opacity-40"
                  style={{ fontSize: "clamp(26px,7vw,42px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>
                  {item.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile services grid */}
          <div className="grid grid-cols-2 gap-2 mb-8">
            {SERVICES.map(s => (
              <a key={s.slug} href={`/services/${s.slug}`} onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-3 border border-white/10 text-[10px] font-bold tracking-wider text-white/60 hover:text-white uppercase active:bg-white/5">
                <span>{s.icon}</span>
                <span className="leading-tight">{s.short}</span>
              </a>
            ))}
          </div>
          <a href="/contact" onClick={() => setMenuOpen(false)}
            className="block w-full bg-[#22c55e] text-white py-4 text-center text-[10px] font-bold tracking-[0.3em] uppercase">
            Get In Touch
          </a>
        </div>
        <div className="px-6 py-5 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#22c55e] to-[#0ea5e9] flex items-center justify-center">
              <span className="text-white font-black text-[9px]">E4</span>
            </div>
            <span className="text-white text-xs font-bold tracking-wider">Energy 4 All</span>
          </div>
          <p className="text-white/30 text-[10px] tracking-widest uppercase">info@en4al.com</p>
        </div>
      </div>
    </>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-[#060e1a] border-t border-white/10 px-4 sm:px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#22c55e] to-[#0ea5e9] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-sm">E4</span>
              </div>
              <div>
                <p className="font-black text-white tracking-wide text-base" style={{ fontFamily: "'Helvetica Neue',sans-serif" }}>
                  Energy <span className="text-[#22c55e]">4</span> All
                </p>
                <p className="text-white/30 text-[10px] tracking-widest uppercase">Limited</p>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed font-light mb-6">
              Delivering innovative, sustainable solutions across Africa's essential sectors.
            </p>
            <div className="space-y-2">
              <p className="text-white/40 text-xs">📍 4 Franca Afegbua Crescent, Apo Zone E, FCT Abuja</p>
              <p className="text-white/40 text-xs">📞 +234 809 944 6206</p>
              <a href="mailto:info@en4al.com" className="text-[#22c55e] text-xs hover:text-white transition-colors">✉️ info@en4al.com</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase mb-5 font-bold">Services</p>
            <ul className="space-y-3">
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}`} className="text-xs text-white/40 hover:text-white transition-colors leading-relaxed">{s.short}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase mb-5 font-bold">Company</p>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Team", href: "/team" },
                { label: "The Market", href: "/market" },
                { label: "Insights", href: "/insights" },
                { label: "Contact", href: "/contact" },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-xs text-white/40 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase mb-5 font-bold">Work With Us</p>
            <p className="text-white/40 text-xs leading-relaxed mb-6">
              Ready to power Africa's future? Let's discuss your project.
            </p>
            <a href="/contact"
              className="block w-full bg-[#22c55e] text-white py-3 text-center text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#16a34a] transition-colors mb-4">
              Get In Touch
            </a>
            <a href="mailto:info@en4al.com"
              className="block w-full border border-white/20 text-white/60 py-3 text-center text-[10px] font-bold tracking-[0.3em] uppercase hover:border-white/50 hover:text-white transition-colors">
              Send Email
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-[10px] text-white/20 tracking-widest uppercase">© 2025 Energy 4 All Limited. All rights reserved.</p>
          <p className="text-[10px] text-white/20 tracking-widest uppercase">Powering Africa's Future 🌍</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Section wrapper with reveal animation ────────────────────────────────────
export function Section({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);
  return (
    <section ref={ref} id={id}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </section>
  );
}
