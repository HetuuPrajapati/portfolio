import React from "react";

const jobs = [
  {
    role: "Co-op Software Developer",
    company: "Greenovate",
    date: "May 2023 – August 2023",
    details: [
      "Developed and maintained a full-stack React-based website highlighting the company’s carbon-negative initiatives",
      "Designed and implemented backend systems and APIs to manage data securely and efficiently",
      "Collaborated with research teams to translate requirements into UI mockups using Figma",
      "Improved responsiveness and UX, increasing page engagement on key sections",
      "Contributed to project planning and agile development in a small, fast-moving team",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "MapleAI",
    date: "August 2025 – Current",
    details: [
      "Developed, debugged, and deployed full-stack applications using Python and React",
      "Built and maintained frontend components for web pages, enhancing user experience and responsiveness",
      "Leveraged AWS cloud services for hosting, deployment, and scalability",
      "Participated in cross-functional agile teams, contributing to design, implementation, and continuous improvement of projects",
    ],
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
