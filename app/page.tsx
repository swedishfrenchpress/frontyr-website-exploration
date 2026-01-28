import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Logos } from './components/Logos';
import { Features } from './components/Features';
import { Defensibility } from './components/Defensibility';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="w-full relative bg-canvas min-h-screen text-obsidian font-sans">
      <div className="relative z-10 flex flex-col w-full">
        <Navigation />
        <Hero />
        <Logos />
        <Features />
        <Defensibility />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
