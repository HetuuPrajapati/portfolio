import React from "react";

const projects = [
  {
    name: "Quick Cash App",
    tech: "Java, Android Studio, Google Maps API, PayPal API",
    desc: "Developed an Android app connecting users for small paid tasks, implementing secure login, personalized dashboards, job posting/search functionalities, and payment processing. Integrated Google Maps for location-based job searches and PayPal for secure transactions.",
  },
  {
    name: "Travel Advisory Platform",
    tech: "React, JavaScript, Google Maps API, REST APIs, Material-UI",
    desc: "Built a responsive map-based platform to visualize and explore global locations with real-time weather overlays. Engineered custom search, marker filtering, and external data fetching using REST APIs for dynamic user interactions.",
  },
  {
    name: "Event Management Data System",
    tech: "SQL, Python, Azure Data Factory, React",
    desc: "Designed and deployed a secure event management platform with JWT authentication for user login and access control. Created data pipelines using Azure Data Factory and optimized database performance with triggers, indexes, joins, and subqueries.",
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
