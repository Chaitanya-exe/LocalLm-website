'use client';

import { useEffect, useState } from 'react';

export default function EmailsPage() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const res = await fetch('api/waitlist');
      const data = await res.json();

      setEmails(data.data);
    };
    fetchEmails();
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0e10] text-white px-6 py-12 font-geist">
      <h1 className="text-3xl font-bold mb-8 text-center">Waitlist Emails</h1>
      <div className="overflow-auto rounded-lg shadow border border-white/10">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email, index) => (
              <tr key={index} className="border-t border-white/5 hover:bg-white/5">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
