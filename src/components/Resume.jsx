// import React from 'react'
// import resumeImg from '../assets/resume.jpg'
// import resume from "../assets/adminResume.pdf"

// export default function Resume() {
//   const config = {
//     link: resume
//   }

//   return (
//     <div
//       id="resume"
//       className="w-full bg-blue-950 flex flex-col-reverse md:flex-row items-center justify-center 
//                  px-6 py-12 md:px-16 md:py-20 gap-15 md:gap-25"
//     >
//       {/* Left Text Section */}
//       <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-left text-white space-y-4">
//         <h1 className="text-3xl md:text-4xl font-semibold underline decoration-blue-500 underline-offset-4 text-center">
//           Resume
//         </h1>
//         <p className="text-base md:text-lg">
//           You can view my resume
//         </p>
//         <a href={config.link} className="flex justify-center">
//           <button className="btn flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               width="22"
//               height="22"
//               className="fill-current"
//             >
//               <path fill="none" d="M0 0h24v24H0z"></path>
//               <path
//                 fill="currentColor"
//                 d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
//               ></path>
//             </svg>
//             Download
//           </button>
//         </a>
//       </div>

//       {/* Right Image Section */}
//       <div className="w-full md:w-1/2 flex justify-center md:justify-start">
//         <img
//           className="w-64 sm:w-72 md:w-[320px] rounded-lg shadow-lg"
//           src={resumeImg}
//           alt="Resume Preview"
//         />
//       </div>
//     </div>
//   )
// }
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
                <span className="font-medium">React</span>
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
