"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/services", label: "Treatments" },
    { href: "/gallery", label: "Smile Gallery" },
    { href: "/team", label: "Our Specialists" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-stone-200/50">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="group">
          <span className="font-serif text-3xl font-bold text-slate-800 tracking-tight">
            Lumina
            <span className="text-teal-600">.</span>
          </span>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 group-hover:text-teal-600 transition-colors">
            Esthetic Dentistry
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`text-sm font-medium tracking-wide transition-all hover:text-teal-600 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-teal-600 after:transition-all hover:after:w-full ${pathname === link.href ? 'text-teal-600 after:w-full' : 'text-slate-500'}`}
            >
              {link.label}
            </Link>
          ))}
          
          <Link href="/contact" className="bg-teal-700 text-white px-8 py-3 rounded-full hover:bg-teal-800 transition-all shadow-lg shadow-teal-700/20 text-sm font-bold tracking-wide flex items-center gap-2">
            Book Visit
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAFAF9] absolute top-24 left-0 w-full overflow-hidden border-t border-stone-100"
          >
            <div className="flex flex-col p-8 gap-6 text-center">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-3xl text-slate-800 hover:text-teal-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-8 border-t border-stone-200 pt-8">
                 <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-teal-700 text-white w-full block py-4 rounded-full font-bold shadow-xl">
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

