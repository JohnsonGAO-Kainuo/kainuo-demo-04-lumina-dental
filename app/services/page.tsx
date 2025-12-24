"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const ServiceItem = ({ title, description, price, features, index }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-stone-200 last:border-0"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between group text-left"
      >
        <span className="font-serif text-3xl text-slate-800 group-hover:text-teal-700 transition-colors">
          {title}
        </span>
        <div className={`w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center transition-all ${isOpen ? 'bg-teal-700 border-teal-700 text-white' : 'text-slate-400'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pb-10 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-500 leading-relaxed mb-6 text-lg">{description}</p>
            <ul className="space-y-3">
              {features.map((f: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F8F8F6] p-8 rounded-2xl">
            <h4 className="font-serif text-xl mb-4">Investment</h4>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-teal-800">{price}</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Including consultation and follow-up care.</p>
            <button className="w-full py-3 border border-teal-700 text-teal-700 rounded-lg hover:bg-teal-700 hover:text-white transition-colors uppercase text-sm font-bold tracking-wider">
              Book Consultation
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h1 className="font-serif text-5xl lg:text-6xl text-slate-900 mb-6">Treatment Menu</h1>
          <p className="text-xl text-slate-500">
            Tailored solutions for your perfect smile. We believe in transparency and minimally invasive techniques.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ServiceItem 
            index={0}
            title="Porcelain Veneers"
            description="Ultra-thin shells of ceramic that bond directly to the front surfaces of the teeth. They are an ideal choice for improving your smile and have become increasingly popular due to their simplicity and versatility."
            price="From $1,200 / tooth"
            features={["Custom shade matching", "Minimal prep required", "Stain resistant", "Lasts 15-20 years"]}
          />
          <ServiceItem 
            index={1}
            title="Invisalign Clear Aligners"
            description="The clear alternative to metal braces for adults and teens. These clear aligners are the virtually invisible way to improve your smile."
            price="$3,500 - $6,000"
            features={["Removable for eating", "No metal wires", "3D treatment planning", "Faster than braces"]}
          />
          <ServiceItem 
             index={2}
             title="Professional Whitening"
             description="Our in-office whitening system is a revolutionary tooth whitening procedure. It's safe, effective and fast, very fast."
             price="$599"
             features={["1 hour treatment", "Up to 8 shades whiter", "Low sensitivity formula", "Take-home kit included"]}
           />
           <ServiceItem 
             index={3}
             title="Dental Implants"
             description="The gold standard for replacing missing teeth. Implants provide a permanent solution that looks, feels, and functions just like natural teeth."
             price="From $2,500 / implant"
             features={["Lifetime warranty", "Prevents bone loss", "Natural appearance", "Titanium or Zirconia options"]}
           />
        </div>
      </div>
    </div>
  );
}

