import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      logo: MdEmail,
      logoName: "Email",
      reach: "subashegspmca@email.com",
      link: "mailto:subashegspmca@email.com",
      color:"text-blue-700",
      c:"border-blue-700"
    },
    {
      logo: MdPhone,
      logoName: "Phone",
      reach: "+91 7550398267",
      link: "tel:+917550398267",
      color:"text-green-600",
      c:"border-green-600"
    },
    {
      logo: FaGithub,
      logoName: "GitHub",
      reach: "github.com/Developersubash7",
      link: "https://github.com/Developersubash7",
      color:"text-black",
      c:"border-black"
    },
    {
      logo: FaLinkedin,
      logoName: "LinkedIn",
      reach: "linkedin.com/in/developersubash",
      link: "https://www.linkedin.com/in/developersubash/",
      color:"text-blue-600",
      c:"border-blue-600"
    },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-5 py-20 
                 bg-gradient-to-b from-gray-50 to-gray-200"
    >
      <h2 className="text-4xl font-bold underline decoration-blue-500 mb-3">
        Contact
      </h2>

      <p className="text-lg text-gray-600 mb-10 italic text-center">
        If you want to discuss more in detail
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-14 w-full max-w-6xl">
        {contacts.map((con, index) => {
          const Icon = con.logo;
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center bg-white shadow-xl p-6 rounded-2xl 
                         hover:shadow-2xl hover:scale-105 transform transition duration-300 
                         min-h-[120px] border-t-4 ${con.c}`}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon className={`${con.color} text-4xl`} />
                <p className="font-bold">{con.logoName}</p>
              </div>

              <a
                href={con.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${con.color} hover:underline text-center break-words`}
              >
                {con.reach}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
