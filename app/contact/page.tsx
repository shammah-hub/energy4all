"use client";
import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/shared";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { 
    duration: 0.8, 
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number]  

}
};

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-900 selection:bg-emerald-100">
      <Navbar transparent={false} />

      <main className="pt-20">
        {/* ── SECTION 1: HEADER ── */}
        <section className="py-24 bg-[#F8FAFC] border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="text-emerald-600 font-bold text-xs tracking-[0.4em] uppercase mb-6 block">
                Connect With Us
              </span>
              <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-[1.1] text-slate-900 mb-8">
                Let’s Discuss Your <span className="italic font-serif text-emerald-600">Strategic Goals.</span>
              </h1>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Whether you are looking for technical advisory, project structuring, or 
                market entry support, our team in Abuja is ready to assist.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 2: THE INTERFACE ── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              
              {/* LEFT: Institutional Details */}
              <motion.div {...fadeInUp} className="lg:col-span-5 space-y-16">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10">Headquarters</h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 mb-1">Abuja Office</p>
                        <p className="text-slate-500 font-light leading-relaxed">
                          4 Franca Afegbua Crescent, Apo Zone E. <br />
                          Apo Legislative Quarters, F.C.T Abuja, Nigeria.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 mb-1">Electronic Inquiry</p>
                        <p className="text-slate-500 font-light">info@en4al.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 mb-1">Direct Liaison</p>
                        <p className="text-slate-500 font-light">+234 809 944 6206</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-slate-900 rounded-[2rem] text-white overflow-hidden relative group cursor-pointer">
                  <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:scale-110 transition-transform">
                    <Globe size={80} />
                  </div>
                  <h4 className="text-xl font-light italic font-serif mb-4">Regional Impact</h4>
                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                    Operating across Sub-Saharan Africa with a focus on sustainable infrastructure.
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                    <Clock size={14} /> Response Time: 24-48 Hours
                  </div>
                </div>
              </motion.div>

              {/* RIGHT: Refined Form */}
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="lg:col-span-7">
                <div className="bg-[#F8FAFC] p-8 md:p-16 rounded-[3rem] border border-slate-100">
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Full Name</label>
                        <input type="text" placeholder="John Doe" className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-emerald-500 transition-all font-light" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Email Address</label>
                        <input type="email" placeholder="john@company.com" className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-emerald-500 transition-all font-light" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Subject of Inquiry</label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-emerald-500 transition-all font-light appearance-none">
                        <option>Energy & Infrastructure Advisory</option>
                        <option>Investment & Financial Advisory</option>
                        <option>Legal & Regulatory Support</option>
                        <option>Agribusiness Solutions</option>
                        <option>Logistics & Supply Chain</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Message</label>
                      <textarea rows={5} placeholder="Describe your project or briefing requirements..." className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-emerald-500 transition-all font-light resize-none" />
                    </div>

                    <button className="w-full py-6 bg-slate-900 text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-200">
                      Send Strategy Briefing <Send size={16} />
                    </button>
                  </form>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── SECTION 3: MAP PLACEHOLDER (LUXURY STYLE) ── */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="h-[400px] bg-slate-100 rounded-[3rem] relative overflow-hidden group">
               {/* This would be where you embed a styled Google Map or a clean static map image */}
               <div className="absolute inset-0 bg-emerald-900/5 mix-blend-multiply" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 bg-white rounded-2xl shadow-2xl text-center border border-slate-100">
                    <p className="text-xs uppercase tracking-widest font-bold text-emerald-600 mb-2">Abuja HQ</p>
                    <p className="text-sm font-light text-slate-500 italic">4 Franca Afegbua Crescent, Apo Zone E.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}