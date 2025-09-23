import React from "react";

const projects = [
  {
    name: "Portfolio Website",
    tech: "React, Tailwind CSS, AOS",
    desc: "A personal portfolio website showcasing projects, skills, and experience with dark mode and scroll animations.",
  },
  {
    name: "Task Manager App",
    tech: "Node.js, MongoDB, Express",
    desc: "A full-stack task management app with user authentication, CRUD operations, and responsive UI.",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 px-6 bg-purple-50 dark:bg-gray-900">
    <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">Projects</h2>
    <div className="max-w-4xl mx-auto space-y-6">
      {projects.map((proj, idx) => (
        <div
          key={idx}
          data-aos="fade-up"
          data-aos-delay={idx * 100}
          className="bg-white dark:bg-gray-800 shadow rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400">{proj.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{proj.tech}</p>
          <p className="mt-2 text-gray-700 dark:text-gray-200">{proj.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
