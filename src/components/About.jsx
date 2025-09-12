import React from "react";
import aboutImg from "../assets/about.png";

const About = () => {
  const config = {
    line1:
      "💻 Proficient in MERN Stack Development – Skilled in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js, with a solid understanding of web fundamentals (HTML, CSS, JavaScript) and responsive UI design.",
    line2:
      "🚀 Hands-on Project Experience – Developed multiple projects applying React.js for frontend, integrated with backend APIs, and used MongoDB/Mongoose for database management, showcasing the ability to design, develop, and deploy complete web solutions.",
    line3:
      "🧩 Problem-Solving & Programming Skills – Strong foundation in Python programming and problem-solving, with the ability to write efficient, optimized code; combined with an intermediate understanding of backend frameworks, enabling end-to-end application development.",
  };

  const highlights = [config.line1, config.line2, config.line3];

  return (
    <section
      id="about"
      className="bg-blue-950 text-white py-16 px-6 md:px-16"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutImg}
            alt="About me"
            className="w-72 md:w-110 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl font-medium underline decoration-blue-500 underline-offset-8">
            About Me
          </h1>

          {/* Paragraphs with background */}
          <div className="space-y-4 text-lg leading-relaxed">
            {highlights.map((text, idx) => (
              <p
                key={idx}
                className="bg-blue-900/40 p-4 rounded-lg shadow-md border border-blue-800 
                           backdrop-blur-sm transition-all duration-300
                           hover:bg-blue-800/60 hover:translate-x-2 
                           hover:shadow-xl hover:border-blue-500"
              >
                {text}
              </p>
            ))}
          </div>

          {/* Call to Action */}
          <div className="pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all duration-300"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
