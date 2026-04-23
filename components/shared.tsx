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

export function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

// ─── Brand colours ────────────────────────────────────────────────────────────
export const BRAND = {
  green: "#22c55e",
  greenDark: "#16a34a",
  navy: "#0f2a4a",
  navyLight: "#1e3a5f",
  gray: "#f8fafc",
  text: "#1e293b",
  muted: "#64748b",
};

// ─── Real Unsplash images ─────────────────────────────────────────────────────
export const IMG = {
  // Hero
  hero: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=85",
  heroWorker: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=85",

  // About
  aboutSolar: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
  aboutOffice: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85",
  aboutTeam: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",

  // Services — image cards
  svcEnergy: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  svcSolar: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
  svcLegal: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
  svcFinance: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
  svcLogistics: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  svcAgri: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
  svcOilGas: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  svcWind: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
  svcHydro: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80",

  // Market
  africa: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=900&q=80",
  nigeria: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=900&q=80",
  farming: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
  ruralSolar: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=80",

  // Insights
  ins1: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80",
  ins2: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
  ins3: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
  ins4: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80",
  ins5: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
  ins6: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80",

  // Team
  team1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  team2: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  team3: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
  team4: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  team5: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80",
  team6: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",

  // Contact / office
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
};

// ─── Services data ────────────────────────────────────────────────────────────
export const SERVICES = [
  { slug: "energy-infrastructure", title: "Energy & Infrastructure Advisory", short: "Energy & Infrastructure", icon: "⚡", img: IMG.svcEnergy, summary: "Feasibility studies, O&M strategies, market entry and distribution planning for high-impact energy projects across Africa." },
  { slug: "legal-regulatory",      title: "Legal & Regulatory Advisory",     short: "Legal & Regulatory",      icon: "⚖️", img: IMG.svcLegal, summary: "Energy law compliance, contract negotiations, permits and regulatory framework navigation." },
  { slug: "investment-financial",  title: "Investment & Financial Advisory", short: "Investment & Financial",  icon: "📈", img: IMG.svcFinance, summary: "Private equity structuring, financial modelling and project valuation for bankable outcomes." },
  { slug: "logistics",             title: "Supply Chain & Logistics",        short: "Logistics & Supply Chain", icon: "🚚", img: IMG.svcLogistics, summary: "Supply chain optimisation for energy and mining — ensuring reliability across challenging terrains." },
  { slug: "agribusiness",          title: "Agribusiness & Agro-Services",   short: "Agribusiness",            icon: "🌾", img: IMG.svcAgri, summary: "Farm-to-market strategies, agri-finance structuring and supply optimisation across Africa's food systems." },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────
export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = scrollY > 80;
  const solid = !transparent || scrolled;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${solid ? "bg-white shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #22c55e, #0f2a4a)" }}>
              <span className="text-white font-black text-xs">E4</span>
            </div>
            <span className="font-black text-lg tracking-tight" style={{ color: solid ? BRAND.navy : "#fff", fontFamily: "'Helvetica Neue',sans-serif" }}>
              Energy <span style={{ color: BRAND.green }}>4</span> All
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "The Market", href: "/market" },
              { label: "Insights", href: "/insights" },
              { label: "Team", href: "/team" },
            ].map(l => (
              <li key={l.label}>
                <a href={l.href} className={`text-[11px] tracking-wider font-semibold uppercase transition-colors hover:text-green-500 ${solid ? "text-slate-600" : "text-white/90"}`}>{l.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold tracking-wider uppercase text-white rounded-full transition-all hover:opacity-90"
              style={{ background: BRAND.green }}>
              Contact Us
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-1 ${solid ? "text-slate-700" : "text-white"}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {menuOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 md:hidden bg-white flex flex-col transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex-1 flex flex-col justify-center px-6 pt-24 pb-10">
          <ul className="space-y-0 mb-10">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "The Market", href: "/market" },
              { label: "Insights", href: "/insights" },
              { label: "Team", href: "/team" },
              { label: "Contact", href: "/contact" },
            ].map(l => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setMenuOpen(false)}
                  className="block font-black leading-none py-4 border-b border-slate-100 active:opacity-40"
                  style={{ fontSize: "clamp(26px,7vw,40px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em", color: BRAND.navy }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="/contact" onClick={() => setMenuOpen(false)}
            className="block w-full py-4 text-center text-[11px] font-bold tracking-widest uppercase text-white rounded-full"
            style={{ background: BRAND.green }}>
            Get In Touch
          </a>
        </div>
        <div className="px-6 py-5 border-t border-slate-100 flex items-center justify-between">
          <span className="font-black text-sm" style={{ color: BRAND.navy, fontFamily: "'Helvetica Neue',sans-serif" }}>
            Energy <span style={{ color: BRAND.green }}>4</span> All
          </span>
          <span className="text-slate-400 text-[10px] tracking-widest uppercase">info@en4al.com</span>
        </div>
      </div>
    </>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="pt-16 pb-8 px-4 sm:px-6" style={{ background: BRAND.navy }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #22c55e, #0f2a4a)" }}>
                <span className="text-white font-black text-xs">E4</span>
              </div>
              <span className="font-black text-white text-lg" style={{ fontFamily: "'Helvetica Neue',sans-serif" }}>
                Energy <span style={{ color: BRAND.green }}>4</span> All
              </span>
            </div>
            <p className="text-white/40 text-xs leading-relaxed mb-5 font-light">
              Delivering innovative, sustainable solutions across Africa's essential sectors.
            </p>
            <div className="space-y-1.5 text-xs text-white/40 font-light">
              <p>📍 4 Franca Afegbua Crescent, Apo Zone E, FCT Abuja</p>
              <p>📞 +234 809 944 6206</p>
              <a href="mailto:info@en4al.com" className="block text-green-400 hover:text-green-300 transition-colors">✉️ info@en4al.com</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase mb-5 font-bold">Services</p>
            <ul className="space-y-3">
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}`} className="text-xs text-white/40 hover:text-white transition-colors">{s.short}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase mb-5 font-bold">Company</p>
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
            <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase mb-5 font-bold">Work With Us</p>
            <p className="text-white/40 text-xs leading-relaxed mb-5 font-light">
              Ready to power Africa's future? Let's discuss your project.
            </p>
            <a href="/contact"
              className="block w-full py-3 text-center text-[11px] font-bold tracking-wider uppercase text-white rounded-full mb-3 hover:opacity-90 transition-opacity"
              style={{ background: BRAND.green }}>
              Get In Touch
            </a>
            <a href="mailto:info@en4al.com"
              className="block w-full border border-white/20 py-3 text-center text-[11px] font-bold tracking-wider uppercase text-white/60 rounded-full hover:border-white/40 hover:text-white transition-all">
              Send Email
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 gap-3">
          <p className="text-[11px] text-white/20">© 2025 Energy 4 All Limited. All rights reserved.</p>
          <p className="text-[11px] text-white/20">Powering Africa's Future 🌍</p>
        </div>
      </div>
    </footer>
  );
}