import type { Metadata } from "next";
import { Urbanist } from "next/font/google";


import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BSales Store",
  description: "Best E-commerce store in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
