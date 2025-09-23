import React from "react";

const skills = [
  "Java", 
  "Python", 
  "C#", 
  ".NET", 
  "React", 
  "Android Studio", 
  "SQL",
  "MS SQL Server", 
  "NoSQL",
  "HTML", 
  "CSS", 
  "JavaScript",
  "Oracle", 
  "Node.js", 
  "Tailwind CSS", 
  "Git", 
  "Docker", 
  "Kubernetes", 
  "Azure", 
  "AWS", 
  "Flask", 
  "ASP.NET Core", 
  "RESTful APIs", 
  "Postman"
];

const Skills = () => (
  <section id="skills" className="py-20 px-6 bg-purple-50 dark:bg-gray-900">
    <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {skills.map((skill, i) => (
        <div
          key={skill}
          data-aos="flip-left"
          data-aos-delay={i * 50}
          className="p-3 bg-white dark:bg-gray-800 shadow rounded text-center 
                     text-gray-800 dark:text-gray-200 
                     hover:bg-purple-100 dark:hover:bg-gray-700 transition"
        >
          {skill}
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
