import React from 'react'
import resumeImg from '../assets/resume.jpg'
import resume from "../assets/adminResume.pdf"
import resumeBanner from "../assets/resumeBanner.png"

export default function Resume() {
  const config = {
    link: resume
  }

  return (
    <div
      id="resume"
      style={{ backgroundImage: `url(${resumeBanner})` }}
      className="
    w-full flex flex-col-reverse md:flex-row items-center justify-center
    px-6 py-12 md:px-16 md:py-20
   bg-center bg-no-repeat
  "
    >

      <div className="max-w-5xl w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-2 md:gap-12">
          {/* Left Text Section */}
          <div className="w-full w-0.5/2 md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left text-white space-y-4">
            <h1 className=" hidden md:flex text-3xl md:text-4xl font-semibold underline decoration-blue-400 underline-offset-4">
              Resume
            </h1>

            <p className="text-sm md:text-base text-blue-100/90 max-w-xl  hidden md:flex ">
              You can view or download my resume. It contains my education, skills, projects and contact details — feel free to reach out for internships or collaborations.
            </p>

            {/* small highlights - optional but adds visual interest */}
            <ul className="flex flex-row gap-2 mt-1 text-sm">
              <li className="px-3 py-1 rounded-full bg-white/6 border border-white/8 backdrop-blur-sm">
                <span className="font-medium">MCA</span>
              </li>
              <li className="px-3 py-1 rounded-full bg-white/6 border border-white/8">
                <span className="font-medium">MERN</span>
              </li>
              <li className="px-3 py-1 rounded-full bg-white/6 border border-white/8">
                <span className="font-medium">Problem solver</span>
              </li>
            </ul>

            <a
              href={config.link}
              className="w-full md:w-auto flex justify-center md:justify-start"
              aria-label="Download resume PDF"
            >
              <button
                className="btn flex items-center gap-1 p-1 md:px-5 md:py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg shadow-lg transform hover:-translate-y-0.5 transition duration-200 ring-1 ring-white/10"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="flex-shrink-0"
                  aria-hidden="true"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M12 3v10m0 0 4-4m-4 4-4-4M5 21h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4"
                  />
                </svg>
                <span className="font-medium">Download</span>
              </button>
            </a>

            <p className="text-xs text-blue-100/80 mt-2 max-w-xs">
              PDF • 1 page • Last updated: <span className="font-semibold">Nov 2025</span>
            </p>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <img
                className="w-50 sm:w-72 md:w-[320px] rounded-xl shadow-2xl ring-1 ring-white/6 object-cover"
                src={resumeImg}
                alt="Resume Preview"
              />
              {/* decorative top-left badge */}
              <div className="absolute -top-3 -left-3 bg-white/6 border border-white/8 text-xs px-2 py-1 rounded-md text-white backdrop-blur-sm">
                Preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
