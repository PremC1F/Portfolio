"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/data/contact";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MarioBackground } from "@/components/mario-background";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function ContactMario() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integration with Formspree or similar service would go here
    // For now, using mailto as fallback
    const mailtoLink = `mailto:${contactInfo.email}?subject=Portfolio Contact from ${formState.name}&body=${formState.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <MarioBackground variant="underwater" interactive={false} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
            📬 Get In Touch 📬
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto font-semibold">
            Ready to start a new adventure? Let's team up and build something amazing!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#E8A838' }}>
              ⭐ Contact Information
            </h3>

            <div className="mario-card p-6 space-y-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 transition-colors group hover:scale-105 transition-transform"
                >
                  <div className="p-3 rounded-lg transition-colors" style={{ backgroundColor: 'rgba(232, 168, 56, 0.2)', border: '2px solid #E8A838' }}>
                    <Mail className="h-6 w-6" style={{ color: '#E8A838' }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: '#E8A838' }}>
                      📧 EMAIL
                    </p>
                    <p className="font-bold">{contactInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 transition-colors group hover:scale-105 transition-transform"
                >
                  <div className="p-3 rounded-lg transition-colors" style={{ backgroundColor: 'rgba(220, 20, 60, 0.2)', border: '2px solid #DC143C' }}>
                    <Phone className="h-6 w-6" style={{ color: '#DC143C' }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: '#DC143C' }}>
                      📞 PHONE
                    </p>
                    <p className="font-bold">{contactInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(50, 205, 50, 0.2)', border: '2px solid #32CD32' }}>
                    <MapPin className="h-6 w-6" style={{ color: '#32CD32' }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: '#32CD32' }}>
                      📍 LOCATION
                    </p>
                    <p className="font-bold">{contactInfo.location}</p>
                  </div>
                </div>
            </div>

            <div className="flex gap-4">
              {contactInfo.linkedin && (
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded text-sm font-bold text-white hover:scale-105 transition-transform"
                  style={{ backgroundColor: '#0A66C2', border: '3px solid #004182' }}
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              )}
              {contactInfo.github && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded text-sm font-bold text-white hover:scale-105 transition-transform"
                  style={{ backgroundColor: '#24292e', border: '3px solid #000' }}
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              )}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="mario-card p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-lg border-2 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white outline-none transition font-medium"
                      style={{ borderColor: '#E8A838' }}
                      onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(232, 168, 56, 0.2)'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-lg border-2 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white outline-none transition font-medium"
                      style={{ borderColor: '#E8A838' }}
                      onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(232, 168, 56, 0.2)'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border-2 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white outline-none transition resize-none font-medium"
                      style={{ borderColor: '#E8A838' }}
                      onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(232, 168, 56, 0.2)'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded text-base font-bold text-white hover:scale-105 transition-transform"
                    style={{ backgroundColor: '#E8A838', border: '3px solid #B8860B' }}
                  >
                    <Send className="h-5 w-5" />
                    🚀 Send Message
                  </button>
                </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
