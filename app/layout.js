import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>LocaLM – Privacy for AI. Reimagined.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Enterprise software leveraging local LLMs to ensure control, privacy, and reduced costs." />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@geist-font/geist@latest/dist/geist.min.css" />
      </head>
      <body className="bg-[#0e0e10] text-white font-geist">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
