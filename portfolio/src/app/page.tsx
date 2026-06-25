import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center bg-background border-t border-white/5 z-10 relative">
        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} Anikrit Ghosh. Built with Next.js & Framer Motion.
        </p>
      </footer>
    </main>
  );
}
