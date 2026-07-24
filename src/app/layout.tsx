import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import { Caveat } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Akshat Thakur — Software Engineer",
  description:
    "The digital sketchbook of a software engineer. Building products that begin as sketches.",
  openGraph: {
    title: "Akshat Thakur — Software Engineer",
    description:
      "The digital sketchbook of a software engineer. Building products that begin as sketches.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Thakur — Software Engineer",
    description:
      "The digital sketchbook of a software engineer. Building products that begin as sketches.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} ${ibmPlexMono.variable} ${caveat.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
