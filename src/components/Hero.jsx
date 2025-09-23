import React from "react";

const Hero = () => (
  <section id="home" className="flex flex-col items-center justify-center text-center min-h-screen px-6">
    <h1 data-aos="fade-up" className="text-5xl font-bold mb-4">Hetvi Prajapati</h1>
    <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-700 dark:text-gray-300">
      Full-Stack Engineer | React | Python | Azure
    </p>
    <a
      href="#projects"
      data-aos="zoom-in"
      data-aos-delay="400"
      className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
    >
      View My Work
    </a>
  </section>
);

export default Hero;
