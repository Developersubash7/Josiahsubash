import React from "react";

const About = () => {
  const coreSkills = ["JavaScript (ES6+)", "React", "Redux", "Node.js", "Express.js"];
  const techStack = [
    "MongoDB",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git / GitHub",
    "REST APIs",
    "JWT Auth",
    "Vercel Deployment"
  ];

  return (
    <section id='about' className="min-h-screen w-full bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">
            About Me
          </h1>
          <p className="text-gray-300 text-lg mt-3">
            MERN Stack Developer | Full Stack Enthusiast
          </p>
        </div>

        {/* Core Skills */}
        <div className="bg-gray-900/60 p-6 rounded-2xl shadow-xl border border-gray-700 backdrop-blur">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            Core Skills
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
            {coreSkills.map((skill, i) => (
              <li
                key={i}
                className="bg-gray-800/70 p-3 rounded-lg border border-gray-700 
                           shadow hover:shadow-blue-500/20 hover:border-blue-500 
                           transition-all duration-300 text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-900/60 p-6 rounded-2xl shadow-xl border border-gray-700 backdrop-blur">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            Tech Stack
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
            {techStack.map((tech, i) => (
              <li
                key={i}
                className="bg-gray-800/70 p-3 rounded-lg border border-gray-700 
                           shadow hover:shadow-blue-500/20 hover:border-blue-500 
                           transition-all duration-300 text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Strengths & Work Style */}

        <div className="bg-gradient-to-r from-[#0A0F33] to-[#3F1C85] p-8 rounded-3xl shadow-2xl border border-purple-700 backdrop-blur-lg">
          <h2 className="text-2xl font-bold mb-4 text-white text-center">
            Strengths & Work Style
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed space-y-3">
            I have a <span className="text-purple-400 font-semibold">problem-solving attitude</span> that helps me tackle challenges efficiently.
            I write <span className="text-purple-400 font-semibold">clean and readable code</span> to ensure maintainability and clarity.
            My <span className="text-purple-400 font-semibold">debugging and error-handling skills</span> allow me to identify and fix issues quickly.
            I am also an <span className="text-purple-400 font-semibold">effective vibe coder</span>, bringing positivity and focus to the team.
          </p>
        </div>



      </div>
    </section>
  );
};

export default About;

