import React from 'react'
import w1 from '../assets/ecommerce-websites.jpg'
import w2 from '../assets/food-ecommerce.jpg'
import w3 from '../assets/website-blog.jpg'
import w4 from '../assets/web4.png'
const Projects = () => {
    const config = {
        projects: [
            {
                proImage: w1,
                proDescrip: "Ebay is a fully responsive, modern ECommerce web application",
                link: "https://developersubash7.github.io/miniEcommerceReact/"

            },
            {
                proImage: w2,
                proDescrip: "Freshio Grocery is responsive web application designed to make online grocery shopping efficient",
                link: "xxxxxxx"

            },
            {
                proImage: w3,
                proDescrip: "Commodi in iure veniam eum quos cupiditate ea assumenda ullam sed modi!",
                link: "xxxxxxx"

            },
            {
                proImage: w4,
                proDescrip: "A Udemy course application,Developed by using HTML, CSS, and JavaScript and core DOM Manipulation.",
                link: "https://developersubash7.github.io/Udemy-Clone-by-subash/"

            }
        ]
    }
    return (
        <section id='projects' className='flex flex-col justify-center px-5 py-10 md:py-10 md:mt-15'>
            <div className='flex w-1/3 justify-start pl-13 '>
                <div className='text-4xl pb-2 underline decoration-blue-500 font-medium'>Projects</div>
            </div>
            <div className='w-full pt-10 flex justify-center p-10 '>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-center ">
                    {config.projects.map((project) => (
                        <div className='relative'>
                            <img className='h-[200px] w-[450px] rounded-2xl ' src={project.proImage} alt="" />
                            <div className='project_box'>
                                <p className='text-center py-5 text-white '>{project.proDescrip}</p>
                                <div className='flex justify-center'>
                                    <a target='_blank' href={project.link} >
                                        <button className='btn1'>
                                            View Project
                                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </button>
                                    </a>
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
