import React from 'react'
import heroImg from '../assets/hero.png'
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";

const Hero = () => {

  const config = {
    subTit: "A Mern Stack Developer"
  }

  const socials = [
    {
      name: "FaLinkedin",
      icon: <FaLinkedin size={20} />,
      color: "bg-[#1877f2] hover:bg-[#145dbf]",
      media: "https://www.linkedin.com/in/developersubash/"
    },
    {
      name: "SiLeetcode",
      icon: <SiLeetcode size={20} />,
      color: "bg-yellow-500 hover:bg-yellow-600",
      media: "https://leetcode.com/u/hKXahrPika/"
    },
    {
      name: "FaGithubSquare",
      icon: <FaGithubSquare size={20} />,
      color: "bg-black hover:bg-black",
      media: "https://github.com/Developersubash7"
    }
  ]

  return (
    <div id='hero'>
      <section className='flex gap-6 flex-col md:flex-row md:px-5 pt-30 md:py-42 bg-secondary md:justify-center md:items-center'>
        <div className='md:w-1/2 flex flex-col space-y-5'>
          <h1 className='text-5xl md:text-6xl'>
            <span className='sriracha-regular'>Hi, <br /> I'm Josiah</span>
            <span className='text-fuchsia-700 sriracha-regular'> Subash </span><br />
            <p className='text-2xl font-light mt-3'>{config.subTit}</p>
          </h1>

          {/* Social Icons + Hire Me Button */}
          <div className="flex flex-col gap-4 py-4">
            <div className="flex gap-6">
              {socials.map((social, idx) => (
                <div key={idx} className="relative group">
                  {/* Social Button */}
                  <a href={social.media}>
                    <button
                      className={`flex items-center justify-center w-12 h-12 rounded-full text-white shadow-md transition-all duration-300 ${social.color}`}
                    >
                      {social.icon}
                    </button>
                  </a>

                  {/* Tooltip */}
                  <span className={`absolute -bottom-10 left-1/2 -translate-x-1/2 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 ${social.color}`}>
                    {social.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Hire Me Button */}
            <button className="relative group px-5 py-3 overflow-hidden rounded-full cursor-pointer transition-transform duration-200 active:scale-95">
              {/* Background Circle/Effect */}
              <span className="absolute top-0 left-0 w-11 h-11 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-1/47"></span>

              {/* Button Text and Icon */}
              <span className="relative flex items-center font-bold text-blue-900">
                Hire me
                <svg
                  className="ml-2 w-4 h-4 stroke-current transition-transform duration-300 transform -translate-x-1 group-hover:translate-x-0"
                  viewBox="0 0 13 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1,5 L11,5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="8 1 12 5 8 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>

        </div>

        <img className='md:w-1/3' src={heroImg} alt="heroImg" />
      </section>
    </div>
  )
}

export default Hero
