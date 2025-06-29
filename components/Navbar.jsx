'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-[#0e0e10]/70 backdrop-blur border-b border-white/10 shadow' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center font-geist">
        <h1 className="text-xl font-semibold text-white">LocaLM</h1>
        <a
          href="#cta"
          className="text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 px-5 py-2 rounded-full shadow"
        >
          Join Waitlist
        </a>
      </nav>
    </header>
  );
}
