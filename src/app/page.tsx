import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Now } from "@/components/Now";
import { Projects } from "@/components/Projects";
import { RevealObserver } from "@/components/RevealObserver";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Now />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
