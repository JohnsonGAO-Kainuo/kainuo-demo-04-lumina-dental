"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 min-h-screen flex flex-col">
      <div className="container mx-auto px-6 mb-20 flex-grow">
        <h1 className="font-serif text-5xl text-slate-900 mb-16 text-center">Get in Touch</h1>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-[#F8F8F6] p-12 rounded-3xl">
             <form className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">First Name</label>
                   <input type="text" className="w-full bg-white border-0 p-4 rounded-xl focus:ring-2 focus:ring-teal-500" placeholder="Jane" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Last Name</label>
                   <input type="text" className="w-full bg-white border-0 p-4 rounded-xl focus:ring-2 focus:ring-teal-500" placeholder="Doe" />
                 </div>
               </div>
               <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-white border-0 p-4 rounded-xl focus:ring-2 focus:ring-teal-500" placeholder="jane@example.com" />
               </div>
               <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-white border-0 p-4 rounded-xl focus:ring-2 focus:ring-teal-500" placeholder="How can we help you smile?" />
               </div>
               <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold tracking-wide hover:bg-teal-700 transition-colors">
                 Send Message
               </button>
             </form>
          </div>

          <div className="space-y-12 py-8">
            <div>
              <h3 className="font-serif text-2xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <MapPin size={20} />
                </div>
                Visit Us
              </h3>
              <p className="text-slate-500 text-lg ml-12">
                123 Medical Center Blvd, Suite 400<br/>
                Beverly Hills, CA 90210
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <Clock size={20} />
                </div>
                Hours
              </h3>
              <div className="ml-12 text-slate-500">
                <div className="flex justify-between max-w-xs border-b border-stone-100 py-2">
                  <span>Mon - Fri</span>
                  <span className="font-bold text-slate-700">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between max-w-xs py-2">
                  <span>Saturday</span>
                  <span className="font-bold text-slate-700">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <Phone size={20} />
                </div>
                Contact
              </h3>
              <p className="text-slate-500 text-lg ml-12">
                <a href="tel:+15551234567" className="hover:text-teal-600 transition-colors block mb-2">+1 (555) 123-4567</a>
                <a href="mailto:hello@luminadental.com" className="hover:text-teal-600 transition-colors">hello@luminadental.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Map */}
      <div className="w-full h-[400px] grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3690623377747!2d114.15656337595676!3d22.284381942846096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040063063f0367%3A0x6a025777dfb66e!2sTwo%20International%20Finance%20Centre!5e0!3m2!1sen!2shk!4v1703660000000!5m2!1sen!2shk" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

