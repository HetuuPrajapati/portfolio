import React from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const navLinks = [
    { id: "home", text: "Home" },
    { id: "about", text: "About" },
    { id: "skills", text: "Skills" },
    { id: "experience", text: "Experience" },
    { id: "education", text: "Education" },
    { id: "projects", text: "Projects" },
    { id: "contact", text: "Contact" },
  ];

  return (
    <nav className="fixed w-full top-0 bg-white dark:bg-gray-900 shadow z-50 transition">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-400">Hetvi</h1>
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-3 py-1 rounded bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
