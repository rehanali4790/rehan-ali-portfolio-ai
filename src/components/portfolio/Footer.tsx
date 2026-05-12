'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-xl font-bold text-gradient">&lt;RA /&gt;</span>
            <p className="text-gray-500 text-sm mt-1">
              Engineering Intelligence, At Scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/rehanaliaiml' },
              { label: 'GitHub', href: 'https://github.com/rehanali4790' },
              { label: 'Email', href: 'mailto:rehanalikhan4790@gmail.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Rehan Ali. Crafted with AI & passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
