"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/data/contact";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.25 },
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
    <section id="contact" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeIn}>
          <h2 className="text-6xl sm:text-7xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-20 max-w-2xl mx-auto text-xl leading-relaxed">
            I'm always open to discussing opportunities, collaborations, or interesting problems.
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-900/50 rounded-2xl p-10 lg:p-14 border border-gray-200 dark:border-gray-800 shadow-sm">
          <motion.div {...fadeIn} className="space-y-12">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="block text-lg text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">Location</p>
                  <p className="text-lg text-gray-900 dark:text-white">{contactInfo.location}</p>
                </div>

                <div className="space-y-3 pt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium mb-4">Connect</p>
                  {contactInfo.linkedin && (
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-base text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      → LinkedIn
                    </a>
                  )}
                  {contactInfo.github && (
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-base text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      → GitHub
                    </a>
                  )}
                  {contactInfo.medium && (
                    <a
                      href={contactInfo.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-base text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      → Medium
                    </a>
                  )}
                  {contactInfo.twitter && (
                    <a
                      href={contactInfo.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-base text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      → X (Twitter)
                    </a>
                  )}
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:border-gray-900 dark:focus:border-white outline-none transition text-base rounded-lg"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:border-gray-900 dark:focus:border-white outline-none transition text-base rounded-lg"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:border-gray-900 dark:focus:border-white outline-none transition resize-none text-base leading-relaxed rounded-lg"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black text-base font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors rounded-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
