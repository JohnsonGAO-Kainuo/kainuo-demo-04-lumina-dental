"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Asymmetrical Layout */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[45%] h-full bg-[#E0F2F1] -z-10 hidden lg:block" />
        
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row items-center">
            
            {/* Text Content */}
            <div className="lg:w-1/2 lg:pr-12 z-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block border-b border-teal-500 pb-1 mb-6 text-teal-700 font-bold tracking-widest text-xs uppercase"
              >
                Beverly Hills • New York • London
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-6xl lg:text-7xl font-medium text-slate-900 leading-[1.1] mb-8"
              >
                Designing <br/>
                <span className="italic text-teal-700">exquisite</span> <br/>
                smiles.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-500 leading-relaxed max-w-md mb-10"
              >
                We believe dentistry is an art form. Combining advanced technology with artisan craftsmanship to reveal your most authentic smile.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-6"
              >
                <Link href="/contact" className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full transition-all hover:bg-teal-700">
                  <span className="font-medium tracking-wide">Start Your Journey</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center -space-x-3">
                   {[
                     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60",
                     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
                     "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60"
                   ].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#FAFAF9] overflow-hidden relative">
                      <Image src={src} alt="Client" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Hero Image - Magazine Style */}
            <div className="lg:w-1/2 relative mt-16 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <div className="relative aspect-[3/4] lg:aspect-[4/5] w-full max-w-md mx-auto">
                  <Image 
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1974&auto=format&fit=crop" 
                    alt="Artistic Smile"
                    fill
                    className="object-cover rounded-tl-[100px] rounded-br-[100px] shadow-2xl"
                    priority
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-tr-3xl shadow-xl max-w-[200px] hidden md:block">
                     <div className="flex text-yellow-400 mb-2">
                       {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                     </div>
                     <p className="font-serif italic text-slate-800">"The most gentle experience I've ever had."</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <h2 className="font-serif text-4xl text-slate-900 mb-6">Not just a clinic.<br/>A sanctuary.</h2>
              <div className="h-1 w-20 bg-teal-600 mb-6" />
              <p className="text-slate-500 leading-relaxed mb-8">
                Gone are the days of clinical smells and harsh lighting. We've reimagined the dental experience to be as relaxing as a spa visit.
              </p>
              <Link href="/team" className="text-teal-700 font-bold tracking-wide uppercase text-sm hover:text-teal-900 border-b border-teal-200 pb-1">
                Meet our team
              </Link>
            </div>
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
               {[
                 { title: "Minimally Invasive", desc: "Preserving your natural tooth structure is our priority. We use magnification and micro-dentistry techniques." },
                 { title: "Digital Precision", desc: "3D scanning and printing allows us to preview your smile design before we even begin." },
                 { title: "Holistic Approach", desc: "We consider your overall health, not just your teeth. Using biocompatible materials safe for your body." },
                 { title: "Pain-Free Comfort", desc: "From sedation options to noise-cancelling headphones, your comfort is guaranteed." }
               ].map((item, idx) => (
                 <div key={idx} className="border-l border-slate-200 pl-8 hover:border-teal-500 transition-colors duration-500">
                   <h3 className="font-serif text-2xl text-slate-800 mb-3">{item.title}</h3>
                   <p className="text-slate-500">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service Preview */}
      <section className="py-20 bg-[#2C3E50] text-white overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row items-center justify-between mb-16">
             <h2 className="font-serif text-4xl lg:text-5xl">Curated Treatments</h2>
             <Link href="/services" className="mt-6 md:mt-0 px-8 py-3 border border-white/30 rounded-full hover:bg-white hover:text-[#2C3E50] transition-all">
               View All Services
             </Link>
           </div>
           
           <div className="grid md:grid-cols-3 gap-1">
             {[
               { name: "Porcelain Veneers", img: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=2070&auto=format&fit=crop" },
               { name: "Invisalign", img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop" },
               { name: "Dental Implants", img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070&auto=format&fit=crop" }
             ].map((service, i) => (
               <div key={i} className="group relative h-[400px] overflow-hidden cursor-pointer">
                 <Image 
                   src={service.img} 
                   alt={service.name} 
                   fill 
                   className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                 <div className="absolute bottom-8 left-8">
                   <h3 className="font-serif text-3xl font-light italic">{service.name}</h3>
                   <div className="h-[1px] w-0 bg-white mt-2 group-hover:w-full transition-all duration-500" />
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
