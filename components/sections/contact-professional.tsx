"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/data/contact";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function ContactProfessional() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${contactInfo.email}?subject=Contact from ${formState.name}&body=${formState.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Email</p>
                  <p className="font-semibold">{contactInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Phone</p>
                  <p className="font-semibold">{contactInfo.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Location</p>
                  <p className="font-semibold">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {contactInfo.linkedin && (
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              )}
              {contactInfo.github && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-semibold transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              )}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 outline-none transition resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
