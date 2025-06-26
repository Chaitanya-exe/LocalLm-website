'use client';

export default function Footer() {
  return (
    <footer className="bg-[#0e0e10] text-gray-500 text-sm text-center py-8 px-6 font-geist border-t border-white/10">
      <p>&copy; {new Date().getFullYear()} LocaLM. All rights reserved.</p>
    </footer>
  );
}
