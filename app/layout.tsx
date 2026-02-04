import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Frontyr | 24/7 Banking Infrastructure",
  description: "Legacy cores close at 5pm. Your customers don't. Frontyr is stablecoin-native banking infrastructure that settles in seconds, not days.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable} font-sans antialiased bg-canvas text-obsidian`}
      >
        {children}
      </body>
    </html>
  );
}
