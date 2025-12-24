"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  return (
    <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden cursor-ew-resize select-none group"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        setSliderPosition((x / rect.width) * 100);
      }}
      onTouchMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        setSliderPosition((x / rect.width) * 100);
      }}
    >
      <Image 
        src="https://plus.unsplash.com/premium_photo-1661764570116-b1b0a2da78f5?q=80&w=2070&auto=format&fit=crop" 
        alt="After - Perfect Smile"
        fill
        className="object-cover"
        priority
      />
      
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ width: `${sliderPosition}%` }}
      >
        <Image 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1920&auto=format&fit=crop" 
          alt="Before - Dental Issues"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center group-hover:w-1 transition-all"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-slate-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/></svg>
        </div>
      </div>
      
      <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md text-white px-4 py-1 text-xs font-bold tracking-widest uppercase rounded-full">Before</div>
      <div className="absolute top-6 right-6 bg-teal-600/80 backdrop-blur-md text-white px-4 py-1 text-xs font-bold tracking-widest uppercase rounded-full">After</div>
    </div>
  );
};

export default function GalleryPage() {
  const galleryItems = [
    {
      title: "Invisalign Correction",
      desc: "12 months treatment",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Porcelain Veneers",
      desc: "Full upper arch restoration",
      image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2072&auto=format&fit=crop"
    },
    {
      title: "Teeth Whitening",
      desc: "Zoom whitening session",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#FDFBF7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-slate-900 mb-6">Smile Gallery</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Real results from our actual patients. Use the slider to see the transformative power of modern cosmetic dentistry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-4 block">Case Study 01</span>
            <h2 className="font-serif text-3xl mb-4 text-slate-800">Complete Smile Makeover</h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Patient presented with discoloration and spacing issues. We utilized 8 porcelain veneers to widen the buccal corridor and brighten the smile, resulting in a natural, confident appearance.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
               <div>
                 <h4 className="font-bold text-slate-800">Duration</h4>
                 <p className="text-slate-500 text-sm">3 Visits (2 weeks)</p>
               </div>
               <div>
                 <h4 className="font-bold text-slate-800">Procedure</h4>
                 <p className="text-slate-500 text-sm">8 E-max Veneers</p>
               </div>
            </div>
          </div>
          <div className="shadow-2xl shadow-teal-900/10 border-[10px] border-white">
            <BeforeAfterSlider />
          </div>
        </div>

        <div className="mt-32 grid md:grid-cols-3 gap-8">
           {galleryItems.map((item, index) => (
             <div key={index} className="relative group overflow-hidden bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-500">
               <div className="relative aspect-square overflow-hidden mb-4">
                 <Image 
                   src={item.image}
                   alt={item.title}
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-700"
                 />
               </div>
               <h3 className="font-serif text-xl text-slate-800">{item.title}</h3>
               <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
