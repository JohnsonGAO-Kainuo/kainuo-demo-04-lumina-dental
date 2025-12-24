"use client";

import Image from "next/image";
import { Mail, Linkedin, Award } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-6">
        <h1 className="font-serif text-5xl lg:text-7xl text-center mb-20 text-slate-900">
          The <span className="italic text-teal-700">Artisans</span>
        </h1>

        <div className="space-y-32">
          {/* Doctor 1 */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 relative">
              <div className="aspect-[3/4] relative overflow-hidden transition-all duration-700">
                <Image 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dr. Sarah Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#FAFAF9] p-6 border border-stone-200">
                <p className="font-serif text-2xl">Dr. Sarah Chen</p>
                <p className="text-teal-600 text-sm font-bold tracking-wider uppercase">Lead Cosmetic Dentist</p>
              </div>
            </div>
            <div className="lg:w-2/3 lg:pt-12">
              <h2 className="font-serif text-4xl mb-8 leading-snug">"I believe a smile is the most powerful curve on a woman's body."</h2>
              <div className="grid md:grid-cols-2 gap-12 text-slate-500 leading-relaxed">
                <p>
                  With over 15 years of experience in high-end cosmetic dentistry, Dr. Chen has transformed thousands of smiles. She received her DDS from Columbia University and completed her residency at Mount Sinai Hospital.
                </p>
                <p>
                  She is a firm believer in the "less is more" philosophy, advocating for minimally invasive procedures that preserve the natural integrity of the tooth while maximizing aesthetic impact.
                </p>
              </div>
              <div className="mt-12 flex gap-8 border-t border-stone-200 pt-8">
                <div className="flex items-center gap-2 text-slate-800 font-medium">
                  <Award className="text-teal-600" />
                  AACD Accredited Member
                </div>
                <div className="flex items-center gap-2 text-slate-800 font-medium">
                  <Award className="text-teal-600" />
                  Top 40 Under 40
                </div>
              </div>
            </div>
          </div>

          {/* Doctor 2 (Reversed) */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/3 relative">
              <div className="aspect-[3/4] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" 
                  alt="Dr. Michael Ross"
                  fill
                  className="object-cover"
                />
              </div>
               <div className="absolute -bottom-6 -left-6 bg-[#FAFAF9] p-6 border border-stone-200 text-right">
                <p className="font-serif text-2xl">Dr. Michael Ross</p>
                <p className="text-teal-600 text-sm font-bold tracking-wider uppercase">Orthodontist</p>
              </div>
            </div>
            <div className="lg:w-2/3 lg:pt-12 text-right">
              <h2 className="font-serif text-4xl mb-8 leading-snug">"Precision is not just a requirement,<br/>it's an obsession."</h2>
              <div className="grid md:grid-cols-2 gap-12 text-slate-500 leading-relaxed text-left">
                <p>
                  Dr. Ross brings an engineering mindset to dentistry. Specializing in complex orthodontic cases, he uses state-of-the-art 3D modeling to predict tooth movement with micrometer accuracy.
                </p>
                <p>
                  Whether it's Invisalign or traditional ceramic braces, his goal is not just straight teeth, but a harmonious bite that ensures long-term oral health and function.
                </p>
              </div>
            </div>
          </div>

          {/* Doctor 3 */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 relative">
              <div className="aspect-[3/4] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image 
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop" 
                  alt="Dr. Emily White"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#FAFAF9] p-6 border border-stone-200">
                <p className="font-serif text-2xl">Dr. Emily White</p>
                <p className="text-teal-600 text-sm font-bold tracking-wider uppercase">Pediatric Specialist</p>
              </div>
            </div>
            <div className="lg:w-2/3 lg:pt-12">
              <h2 className="font-serif text-4xl mb-8 leading-snug">"Building healthy habits starts with a happy first visit."</h2>
              <div className="grid md:grid-cols-2 gap-12 text-slate-500 leading-relaxed">
                <p>
                  Dr. Emily creates a fun, fear-free environment for our youngest patients. She understands that early positive experiences shape a lifetime of dental health.
                </p>
                <p>
                  From preventive sealants to gentle cleanings, she works closely with parents to ensure every child leaves with a smile and a prize.
                </p>
              </div>
            </div>
          </div>

          {/* Doctor 4 (Reversed) */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/3 relative">
              <div className="aspect-[3/4] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dr. James Wilson"
                  fill
                  className="object-cover"
                />
              </div>
               <div className="absolute -bottom-6 -left-6 bg-[#FAFAF9] p-6 border border-stone-200 text-right">
                <p className="font-serif text-2xl">Dr. James Wilson</p>
                <p className="text-teal-600 text-sm font-bold tracking-wider uppercase">Oral Surgeon</p>
              </div>
            </div>
            <div className="lg:w-2/3 lg:pt-12 text-right">
              <h2 className="font-serif text-4xl mb-8 leading-snug">"Restoring function is the first step to restoring confidence."</h2>
              <div className="grid md:grid-cols-2 gap-12 text-slate-500 leading-relaxed text-left">
                <p>
                  As our specialist in implantology and oral surgery, Dr. Wilson handles complex restorative procedures. He is known for his gentle touch and expertise in sedation dentistry.
                </p>
                <p>
                  Using advanced guided surgery techniques, he ensures precise implant placement with minimal recovery time, giving patients their bite back faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
