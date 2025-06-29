'use client';

import { motion } from 'framer-motion';
import {useState} from 'react';

export default function CTASection() {
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
        <section className="relative bg-[#0e0e10] py-24 px-6 text-center font-geist" id='cta'>
            {/* Glowing Background Accent */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-pink-500 opacity-10 rounded-full blur-[100px]" />
            </div>

            <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-semibold text-white mb-6"
            >
                Eager to learn more?
            </motion.h3>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-8 text-lg"
            >
                Join the waitlist and be the first to experience AI that respects your privacy.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-md mx-auto"
            >
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 bg-white rounded-full px-3 py-1.5 shadow-xl">
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
                </form>
                {status && <p className="text-sm text-green-400 mt-2">{status}</p>}
            </motion.div>

            <p className="text-sm text-gray-500 mt-6">
                Contact us: <a href="mailto:bhavishyag2@gmail.com" className="underline hover:text-white">bhavishyag2@gmail.com</a>
            </p>
        </section>
    );
}
