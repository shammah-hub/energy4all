"use client";
import { Navbar, Footer } from "../components/shared";
export default function NotFound() {
  return (
    <>
      <Navbar light />
      <main className="min-h-screen bg-[#0a1628] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-black text-white/5 select-none" style={{ fontSize: "clamp(120px,25vw,300px)", fontFamily: "'Helvetica Neue',sans-serif", lineHeight: 1 }}>404</p>
          <h1 className="font-black text-white -mt-4 mb-4" style={{ fontSize: "clamp(28px,4vw,48px)", fontFamily: "'Helvetica Neue',sans-serif", letterSpacing: "-0.02em" }}>PAGE NOT FOUND.</h1>
          <p className="text-white/30 text-sm mb-10 font-light">The page you're looking for doesn't exist.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="bg-[#22c55e] text-white px-8 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-[#16a34a] transition-colors">Go Home</a>
            <a href="/contact" className="border border-white/20 text-white px-8 py-4 text-[10px] font-bold tracking-widest uppercase hover:border-white/50 transition-colors">Contact Us</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

