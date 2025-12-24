"use client";

import { useState } from 'react';
import { MessageCircle, Linkedin, Instagram, Facebook, MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SocialWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: MessageCircle, href: "#", color: "bg-[#25D366]", label: "WhatsApp" },
    { icon: Linkedin, href: "#", color: "bg-[#0077B5]", label: "LinkedIn" },
    { icon: Instagram, href: "#", color: "bg-[#E4405F]", label: "Instagram" },
    { icon: Facebook, href: "#", color: "bg-[#1877F2]", label: "Facebook" },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer`}
                title={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-sky-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-sky-600 hover:scale-105 transition-all"
      >
        <AnimatePresence mode='wait'>
            {isOpen ? (
                <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                >
                    <X size={28} />
                </motion.div>
            ) : (
                <motion.div
                    key="chat"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                >
                    <MessageSquare size={28} fill="currentColor" />
                </motion.div>
            )}
        </AnimatePresence>
      </button>
    </div>
  );
}

