import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { ContactButton } from './ContactButton.tsx';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '3D Modeling',
    budget: '$5k - $10k',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate swift professional submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      service: '3D Modeling',
      budget: '$5k - $10k',
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-xl bg-[#111111] border-2 border-[#D7E2EA]/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl z-10 overflow-hidden"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 text-[#D7E2EA]/60 hover:text-[#D7E2EA] p-2 rounded-full hover:bg-white/5 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B600A8] mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Let's collaborate
                  </div>
                  <h3
                    id="contact-modal-title"
                    className="hero-heading text-2xl sm:text-3xl font-black uppercase tracking-tight"
                  >
                    Start a 3D Project
                  </h3>
                  <p className="text-sm text-[#D7E2EA]/70 mt-1">
                    Tell me about your vision, schedule, and goals. I typically respond within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@studio.design"
                        className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1"
                      >
                        Focus Area
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                      >
                        <option value="3D Modeling">3D Modeling</option>
                        <option value="Rendering">Rendering & Lighting</option>
                        <option value="Motion Design">Motion Graphics</option>
                        <option value="Branding">Brand Identity & 3D</option>
                        <option value="Web Design">Web & Interactive 3D</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1"
                      >
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                      >
                        <option value="Under $5k">Under $5k</option>
                        <option value="$5k - $10k">$5k - $10k</option>
                        <option value="$10k - $25k">$10k - $25k</option>
                        <option value="$25k+">$25k+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1"
                    >
                      Project Overview *
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you want to build or achieve..."
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="contact-btn inline-flex items-center gap-2 cursor-pointer rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 text-sm transition-transform active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-[#B600A8] mx-auto mb-4 animate-bounce" />
                <h3 className="hero-heading text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">
                  Message Dispatched!
                </h3>
                <p className="text-sm text-[#D7E2EA]/80 max-w-sm mx-auto mb-6">
                  Thanks for reaching out, {formData.name}. Mina will review your project details and get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-2.5 text-sm hover:bg-[#D7E2EA]/10 transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
