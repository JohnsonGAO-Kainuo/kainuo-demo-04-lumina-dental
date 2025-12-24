"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Phone, Star, Shield, Users, ArrowRight, CheckCircle2, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Components (Inline for single-file demo structure, but should be separated in production)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-sky-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-sky-600 flex items-center gap-2">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white">
            <Shield size={18} fill="currentColor" />
          </div>
          Lumina
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
          <Link href="#services" className="hover:text-sky-600 transition-colors">Services</Link>
          <Link href="#doctors" className="hover:text-sky-600 transition-colors">Our Team</Link>
          <Link href="#results" className="hover:text-sky-600 transition-colors">Results</Link>
          <Link href="#contact" className="hover:text-sky-600 transition-colors">Contact</Link>
          <button className="bg-sky-500 text-white px-6 py-2.5 rounded-full hover:bg-sky-600 transition-all hover:shadow-lg hover:shadow-sky-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm font-semibold flex items-center gap-2">
            <Calendar size={16} />
            Book Online
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-sky-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <Link href="#services" className="text-lg font-medium text-slate-600">Services</Link>
              <Link href="#doctors" className="text-lg font-medium text-slate-600">Our Team</Link>
              <Link href="#results" className="text-lg font-medium text-slate-600">Results</Link>
              <Link href="#contact" className="text-lg font-medium text-slate-600">Contact</Link>
              <button className="bg-sky-500 text-white w-full py-3 rounded-xl font-semibold mt-2">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-sky-50/50 transition-all group"
  >
    <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{description}</p>
    <div className="mt-6 flex items-center text-sky-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
      Learn more <ChevronRight size={16} className="ml-1" />
    </div>
  </motion.div>
);

const DoctorCard = ({ name, role, image }: { name: string, role: string, image: string }) => (
  <div className="group relative overflow-hidden rounded-3xl">
    <div className="aspect-[3/4] relative">
      <Image 
        src={image} 
        alt={name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
    </div>
    <div className="absolute bottom-0 left-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-sky-200 text-sm font-medium">{role}</p>
      <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
        <button className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white hover:text-sky-600 transition-colors">
          <Phone size={16} />
        </button>
        <button className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white hover:text-sky-600 transition-colors">
          <Calendar size={16} />
        </button>
      </div>
    </div>
  </div>
);

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
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
        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1920&auto=format&fit=crop" // After image (Bright smile)
        alt="After Treatment"
        fill
        className="object-cover"
      />
      
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ width: `${sliderPosition}%` }}
      >
        <Image 
          src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1920&auto=format&fit=crop" // Before image (Slightly less perfect or darker)
          alt="Before Treatment"
          fill
          className="object-cover"
        />
      </div>

      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-3 bg-slate-400" />
            <div className="w-0.5 h-3 bg-slate-400" />
          </div>
        </div>
      </div>
      
      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold">BEFORE</div>
      <div className="absolute top-4 right-4 bg-sky-500/80 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold">AFTER</div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-50 rounded-bl-[100px] -z-10" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sky-600 font-medium text-sm border border-sky-100"
              >
                <Star size={16} fill="currentColor" />
                Voted Best Dental Clinic 2024
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight"
              >
                Smile with <br />
                <span className="text-sky-500">Confidence</span> again.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-500 leading-relaxed max-w-lg"
              >
                Experience the future of dentistry. Pain-free treatments, advanced technology, and a team that cares about your comfort.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-sky-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-sky-600 transition-all hover:shadow-xl hover:shadow-sky-200 active:scale-95 flex items-center gap-2">
                  Book Appointment <ArrowRight size={18} />
                </button>
                <button className="bg-white text-slate-700 px-8 py-4 rounded-full font-semibold border border-slate-200 hover:border-sky-200 hover:bg-sky-50 transition-all active:scale-95 flex items-center gap-2">
                  <Phone size={18} className="text-sky-500" /> +1 (555) 123-4567
                </button>
              </motion.div>

              <div className="flex items-center gap-4 pt-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden relative">
                      <Image src={`https://randomuser.me/api/portraits/thumb/women/${i + 20}.jpg`} alt="Reviewer" fill />
                    </div>
                  ))}
                </div>
                <p>Trusted by <span className="font-bold text-slate-900">2,000+</span> happy patients</p>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sky-100 transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <Image 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                  alt="Modern Dental Clinic"
                  width={600}
                  height={800}
                  className="w-full object-cover"
                />
              </div>
              
              {/* Floating Glassmorphism Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 top-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white z-20 max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Success Rate</p>
                    <p className="text-lg font-bold text-slate-900">99.8%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Google Reviews</p>
                    <p className="text-lg font-bold text-slate-900">5.0 / 5.0</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Comprehensive Dental Care</h2>
            <p className="text-slate-500 text-lg">From routine check-ups to complex cosmetic procedures, we have the expertise to handle all your dental needs.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Shield}
              title="General Dentistry"
              description="Regular check-ups, cleanings, and preventative care to keep your smile healthy and bright year-round."
            />
            <ServiceCard 
              icon={Star}
              title="Cosmetic Dentistry"
              description="Transform your smile with veneers, whitening, and bonding. Get the hollywood smile you've always wanted."
            />
            <ServiceCard 
              icon={Users}
              title="Orthodontics"
              description="Straighten your teeth with modern Invisalign solutions. No metal braces, just clear results."
            />
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section id="results" className="py-24 bg-sky-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Real Results, <br />Real Smiles</h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                See the difference our expert team can make. Drag the slider to compare the before and after results of our actual patients.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sky-500 shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Fast Treatment Time</h4>
                    <p className="text-sm text-slate-500">Most procedures completed in 1-2 visits</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sky-500 shadow-sm">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Lifetime Warranty</h4>
                    <p className="text-sm text-slate-500">On all major cosmetic procedures</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <BeforeAfterSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Team Section */}
      <section id="doctors" className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Meet Your Specialists</h2>
            <p className="text-slate-500 text-lg">A dedicated team of professionals committed to your dental health.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DoctorCard 
              name="Dr. Sarah Chen"
              role="Lead Dentist"
              image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
            />
            <DoctorCard 
              name="Dr. Michael Ross"
              role="Orthodontist"
              image="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
            />
            <DoctorCard 
              name="Dr. Emily White"
              role="Pediatric Dentist"
              image="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
            />
            <DoctorCard 
              name="Dr. James Wilson"
              role="Oral Surgeon"
              image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-900/20 blur-3xl rounded-full translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-indigo-900/20 blur-3xl rounded-full -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to brighten your smile?</h2>
              <p className="text-slate-400 text-lg mb-8">
                Book your appointment today. We accept most insurance plans and offer flexible payment options.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-sky-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Location</h4>
                    <p className="text-slate-400">123 Medical Center Blvd, Suite 400<br />Beverly Hills, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-sky-400">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Opening Hours</h4>
                    <p className="text-slate-400">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-sky-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Contact</h4>
                    <p className="text-slate-400">+1 (555) 123-4567<br />hello@luminadental.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-2 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3690623377747!2d114.15656337595676!3d22.284381942846096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040063063f0367%3A0x6a025777dfb66e!2sTwo%20International%20Finance%20Centre!5e0!3m2!1sen!2shk!4v1703660000000!5m2!1sen!2shk" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px', borderRadius: '1.5rem' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Lumina Dental Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
