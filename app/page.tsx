import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <CaseStudies />
        <Contact />
      </main>
      <Terminal />
    </>
  );
}
