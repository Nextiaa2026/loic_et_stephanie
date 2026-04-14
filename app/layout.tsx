import type { Metadata } from "next";
import {
  Geist_Mono,
  Plus_Jakarta_Sans,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const lato = Plus_Jakarta_Sans({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serifFont = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Loïc & Stéphanie — Notre Mariage",
  description: "Rejoignez-nous pour célébrer l'union de Loïc et Stéphanie. Découvrez les détails de notre mariage, notre histoire et toutes les informations pratiques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${geistMono.variable} ${serifFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
