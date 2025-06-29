'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function HeroSection() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/waitlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });
        const result = await res.json();
        setStatus(result.success ? 'Submitted!' : result.error || 'Error');
        setEmail('');
    };
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
                {/* <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 bg-white rounded-full px-3 py-1.5 shadow-xl">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 rounded-full text-gray-800 placeholder-gray-500 bg-white focus:outline-none text-sm"
                    />
                    <button
                        type="submit"
                        className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition text-sm"
                    >
                        Join Waitlist
                    </button>
                </form> */}
                {status && <p className="text-sm text-green-400 mt-2">{status}</p>}
            </motion.div>
        </section>
    );
}
