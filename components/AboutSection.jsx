'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative px-6 py-20 bg-[#141416] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Enterprise software powered by local LLMs.
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-pink-400">Pain Points</h4>
            <ul className="space-y-4 list-disc list-inside text-gray-300">
              <li>Data Privacy Concerns: Cloud AI tools may violate localization norms.</li>
              <li>Manual Errors: 85% accuracy in doc collection leads to compliance issues.</li>
              <li>Resource Intensive: Requires multiple FTEs for sourcing and drafting.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-purple-400">How Local LLM Helps</h4>
            <ul className="space-y-4 list-disc list-inside text-gray-300">
              <li>Privacy & Control: Data stays within infrastructure, ensuring compliance.</li>
              <li>Automation: Reduces manual effort by 78% via document analysis.</li>
              <li>Cost Savings: Saves ₹50L annually by removing consultant dependency.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Animated BG Accent */}
      <div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-purple-600 opacity-10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 right-0 w-[300px] h-[300px] bg-pink-400 opacity-10 rounded-full blur-[100px]" />
    </section>
  );
}
