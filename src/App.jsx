import { useMemo } from "react";
import Scene from "./three/Scene";
import Nav from "./components/Nav";
import Ticker from "./components/Ticker";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Process from "./sections/Process";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useActiveSection } from "./hooks/useActiveSection";
import "./styles.css";

const SECTION_IDS = ["hero", "about", "services", "process", "testimonials", "faq", "contact"];

function App() {
  const activeIndex = useActiveSection(SECTION_IDS);
  const sceneKey = useMemo(() => "scene", []);

  return (
    <>
      <Scene key={sceneKey} activeIndex={activeIndex} />
      <Nav />
      <main className="page">
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
