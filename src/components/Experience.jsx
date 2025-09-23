import React from "react";

const jobs = [
  {
    role: "Software Developer Intern",
    company: "ABC Tech",
    date: "May 2024 – Aug 2024",
    details: ["Built web applications with React and Node.js", "Improved system performance by 20%", "Collaborated in Agile team"],
  },
  {
    role: "IT Support",
    company: "Dalhousie University",
    date: "Sep 2023 – Dec 2023",
    details: ["Managed student IT requests", "Resolved 95% tickets within SLA"],
  },
];

const Experience = () => (
  <section id="experience" className="py-20 px-6 bg-purple-50 dark:bg-gray-900">
    <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">Experience</h2>
    <div className="max-w-4xl mx-auto space-y-6">
      {jobs.map((job, idx) => (
        <div
          key={idx}
          data-aos="fade-right"
          data-aos-delay={idx * 100}
          className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400">
            {job.role} – {job.company}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{job.date}</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            {job.details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
