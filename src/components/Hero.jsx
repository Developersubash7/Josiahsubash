import React from 'react'
import heroImg from '../assets/profile.png'
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";

// This component keeps your original logic (socials, links, button behavior)
// but updates the layout, structure and Tailwind classes to match the provided
// hero design: dark radial gradient background, oversized heading, circular
// image with double neon ring, and pill CTA with gradient.

const Hero = () => {

  const config = {
    subTit: "A Mern Stack Developer"
  }

  const socials = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={18} />,
      color: "bg-[#0a66c2] hover:bg-[#084d9a]",
      media: "https://www.linkedin.com/in/developersubash/"
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode size={18} />,
      color: "bg-yellow-500 hover:bg-yellow-600",
      media: "https://leetcode.com/u/hKXahrPika/"
    },
    {
      name: "GitHub",
      icon: <FaGithubSquare size={18} />,
      color: "bg-black hover:bg-gray-800",
      media: "https://github.com/Developersubash7"
    }
  ]

  return (
    <div id="hero" className="w-full md:pt-15  min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_20%_30%,_rgba(124,58,237,0.18),_transparent_10%),linear-gradient(180deg,#0b0210_0%,#0e0220_100%)] text-white">

      <section className="container mx-auto px-6 lg:px-20 pt-39 pb-15 md:py-20 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT: Text Block */}
        <div className="lg:w-1.5/2 w-full">
          <div className="max-w-6xl">

            <h1 className="font-bold leading-tight text-6xl md:text-6xl lg:text-8xl tracking-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
              Hi,
              <br />
              <span className="block">I'm Josiah Subash</span>
            </h1>

            <p className="mt-6 text-md max-w-xl text-gray-300 font-urbanist">
              I’m a MERN Stack Developer with strong problem-solving skills, focused on building clean, responsive, and scalable web applications. I enjoy turning complex challenges into simple, efficient solutions.
            </p>

            {/* CTA Pill */}
            <div className="mt-8 flex items-center gap-6">
              <div className="rounded-full bg-white/5 px-4 py-3 flex items-center gap-4 shadow-lg">
                <span className="text-sm opacity-90">Passionate Web Developer</span>
                <a href="#about" className="ml-4 inline-block">
                  <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white font-medium shadow-md hover:to-pink-500 transition-all duration-300">
                    More About
                  </button>
                </a>
              </div>
            </div>
            
            {/* Social icons + About button (keeps your logic) */}
            <div className="mt-10 flex items-center justify-center md:justify-start gap-8">

              <div className="flex items-center gap-5 md:gap-4">
                {socials.map((social, idx) => (
                  <div key={idx} className="relative group">
                    <a href={social.media} target="_blank" rel="noreferrer">
                      <button
                        className={`flex items-center justify-center w-16 h-16 md:w-12 md:h-12 rounded-full text-white shadow-md transition-all duration-300 ${social.color}`}
                      >
                        {social.icon}
                      </button>
                    </a>

                    {/* Tooltip */}
                    <span className={`absolute -bottom-10 left-1/2 -translate-x-1/2 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300`}>
                      {social.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* RIGHT: Circular Image with neon rings */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 md:w-115 md:h-115 flex items-center justify-center">
            {/* Outer neon ring */}
            <div className="absolute rounded-full w-full h-full flex items-center justify-center">
              <div className="absolute rounded-full w-[92%] h-[92%] border-4 border-transparent bg-[conic-gradient(from_180deg_at_50%_50%,_rgba(99,102,241,0.0),rgba(139,92,246,0.06))]"></div>
              <div className="absolute rounded-full w-[84%] h-[84%] border-4 border-gradient-to-r from-[#3b82f6] to-[#ec4899] p-0" style={{boxShadow: '0 6px 40px rgba(236,72,153,0.12)'}}></div>
            </div>

            {/* actual image circle */}
            <div className="relative w-[76%] h-[76%] rounded-full overflow-hidden ring-4 ring-[#1f2937] shadow-2xl">
              <img src={heroImg} alt="hero" className="w-full h-full object-cover" />
            </div>

            {/* small decorative pill (top-left) */}
            <div className="absolute -left-6 -top-6 w-10 h-4 rounded-full bg-gradient-to-r from-blue-400 to-pink-500 opacity-90"></div>

          </div>
        </div>

      </section>

    </div>
  )
}

export default Hero
