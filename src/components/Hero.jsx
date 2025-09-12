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
      <section className='flex gap-2 md:gap-5 flex-col md:flex-row md:px-5 pt-30 px-10 md:py-42 bg-secondary md:justify-center md:items-center'>
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
            <a href="#contact">
              <button className="relative inline-block w-48 h-auto cursor-pointer outline-none border-0 bg-transparent p-0 font-semibold text-gray-900 group">
                {/* Circle */}
                <span className="relative block w-12 h-12 bg-[#282936] rounded-[1.625rem] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full">
                  {/* Arrow Icon */}
                  <span className="absolute top-1/2 left-2 transform -translate-y-1/2 w-4 h-0.5 bg-transparent transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:bg-white translate-x-0">
                    {/* Arrow Tip */}
                    <span className="absolute top-[-4.5px] right-[1px] w-2.5 h-2.5 border-t-[2px] border-r-[2px] border-white rotate-45"></span>
                  </span>
                </span>

                {/* Button Text */}
                <span className="absolute inset-0 flex items-center justify-start pl-20 text-[#282936] font-bold uppercase transition-colors duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-white">
                  More about
                </span>
              </button>
            </a>
          </div>

        </div>

        <img className='md:w-1/3' src={heroImg} alt="heroImg" />
      </section>
    </div>
  )
}

export default Hero
