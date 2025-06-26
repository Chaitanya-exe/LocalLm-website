'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700 opacity-30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500 opacity-20 rounded-full filter blur-2xl animate-spin-slow" />

      {/* Main Content */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }} 
        className="text-5xl md:text-7xl font-extrabold leading-tight mb-4"
      >
        LocaLM
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3, duration: 1 }} 
        className="text-xl md:text-2xl text-gray-300 mb-8"
      >
        Privacy for AI. Reimagined.
      </motion.h2>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.5, duration: 1 }} 
        className="w-full max-w-md"
      >
        <form className="flex flex-col sm:flex-row items-center gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full px-4 py-3 rounded-full text-gray-800 placeholder-gray-500 bg-white focus:outline-none"
          />
          <button 
            type="submit" 
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Join Waitlist
          </button>
        </form>
      </motion.div>
    </section>
  );
}
