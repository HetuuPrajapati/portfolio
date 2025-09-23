import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,   // animations repeat every scroll
      mirror: true,  // also animate when scrolling back up
    });
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="font-sans bg-gradient-to-b from-purple-200 via-purple-100 to-white text-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-gray-100 min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
