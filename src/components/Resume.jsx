import React from 'react'
import resumeImg from '../assets/resume.jpg'
import resume from "../assets/Updated_Subash_Resume.pdf"

export default function Resume() {
  const config = {
    link: resume
  }

  return (
    <div
      id="resume"
      className="w-full bg-blue-950 flex flex-col-reverse md:flex-row items-center justify-center 
                 px-6 py-12 md:px-16 md:py-20 gap-15 md:gap-25"
    >
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-left text-white space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold underline decoration-blue-500 underline-offset-4 text-center">
          Resume
        </h1>
        <p className="text-base md:text-lg">
          You can view my resume
        </p>
        <a href={config.link} className="flex justify-center">
          <button className="btn flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="22"
              className="fill-current"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
              ></path>
            </svg>
            Download
          </button>
        </a>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          className="w-64 sm:w-72 md:w-[320px] rounded-lg shadow-lg"
          src={resumeImg}
          alt="Resume Preview"
        />
      </div>
    </div>
  )
}
