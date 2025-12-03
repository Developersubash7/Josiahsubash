import React from 'react'
import w1 from '../assets/ecomImg.png'
import w2 from '../assets/grosImg.png'
import w3 from '../assets/portImg.png'
import w4 from '../assets/web4.png'

const Projects = () => {
  const config = {
    projects: [
      {
        proName: "Luxovia Ecommerce",
        proImage: w1,
        proDescrip: "Luxovia Ecommerce Web page Developed by using MERN STACK & Redux",
        link: "https://luxovia-twdh.vercel.app/"
      },
      {
        proName: "Freshio Grocery",
        proImage: w2,
        proDescrip: "Freshio Grocery Web page Developed by using React & Tailwind",
        link: "https://github.com/Developersubash7/Grocery.git"
      },
      {
        proName: "My Portfolio",
        proImage: w3,
        proDescrip: "A Responsive portfolio developed by using React & Tailwind",
        link: "https://josiahsubash.vercel.app/"
      },
      {
        proName: "Udemy clone",
        proImage: w4,
        proDescrip: "A Udemy course application, Developed by using HTML, CSS, and JavaScript and core DOM Manipulation.",
        link: "https://developersubash7.github.io/Udemy-Clone-by-subash/"
      }
    ]
  }

  return (
    <section id='projects' className='flex flex-col justify-center px-5 py-10 md:py-10 md:mt-15'>
      <div className='flex w-1/3 justify-start pl-13 '>
        <div className='text-4xl font-extrabold tracking-wide drop-shadow-lg'>Projects</div>
      </div>

      <div className='w-full pt-10 flex justify-center p-10 '>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 items-start justify-center">
          {config.projects.map((project, idx) => (
            <div key={project.proName ?? idx} className='flex flex-col items-start w-full max-w-[450px]'>
              
              {/* Project Name on top-left */}
              <a className='text-xl font-semibold mb-7 text-left w-full text-blue-900 underline decoration-blue-900' href={project.link}>
                {project.proName}
              </a>

              {/* Card Image */}
              <div className='relative w-full'>
                <img
                  className='h-[200px] w-full object-center'
                  src={project.proImage}
                  alt={project.proName}
                />

                {/* Overlay */}
                <div className='project_box absolute inset-0 flex flex-col justify-end '>
                  <p className='text-center py-5 text-white'>{project.proDescrip}</p>
                  <div className='flex justify-center pb-4'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href={project.link}
                    >
                      <button className='btn1 inline-flex items-center'>
                        View Project
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
