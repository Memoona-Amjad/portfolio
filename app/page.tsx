import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { About, Contact, Footer, Projects, Skills } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
