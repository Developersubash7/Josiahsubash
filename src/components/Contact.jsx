import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      logo: MdEmail,
      logoName: "Email",
      reach: "subashegspmca@email.com",
      link: "mailto:subashegspmca@email.com",
      color: "text-blue-400",
    },
    {
      logo: MdPhone,
      logoName: "Phone",
      reach: "+91 7550398267",
      link: "tel:+917550398267",
      color: "text-green-400",
    },
    {
      logo: FaGithub,
      logoName: "GitHub",
      reach: "github.com/Developersubash7",
      link: "https://github.com/Developersubash7",
      color: "text-gray-200",
    },
    {
      logo: FaLinkedin,
      logoName: "LinkedIn",
      reach: "linkedin.com/in/developersubash",
      link: "https://www.linkedin.com/in/developersubash/",
      color: "text-blue-300",
    },
  ];

  return (
    <section id='contact' className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* LEFT: Heading, paragraph, CTA */}
          <div className="md:col-span-7">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Let’s Talk
            </h2>

            <p className="text-gray-900 max-w-xl mb-8 leading-relaxed">
              Have an idea in mind? Let’s discuss it. I’m passionate about creating clean and user-focused web applications and would love to collaborate.
            </p>

            <a
              href="mailto:subashegspmca@email.com"
              className="inline-block"
              aria-label="Tell us about your project"
            >
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-md shadow-md transition transform hover:-translate-y-0.5">
                Tell us about your project
              </button>
            </a>
          </div>

          {/* RIGHT: Contact labels and social icons */}
          <div className="md:col-span-5">
            <div className="flex flex-col gap-6 md:items-end">
              <div className="w-full md:w-3/4">
                <div className="grid grid-cols-3 gap-2 items-start">
                  {/* labels */}
                  <div className="text-sm text-black col-span-1 space-y-4">
                    <div className="font-medium">Email</div>
                    <div className="font-medium">Phone</div>
                    <div className="font-medium">GitHub</div>
                    <div className="font-medium">LinkedIn</div>
                  </div>

                  {/* values spanning two columns */}
                  <div className="col-span-2 text-sm">
                    <div className="text-gray-800 break-words mb-4">
                      <a href={contacts[0].link} className="hover:underline">
                        {contacts[0].reach}
                      </a>
                    </div>

                    <div className="text-gray-800 mb-4">
                      <a href={contacts[1].link} className="hover:underline">
                        {contacts[1].reach}
                      </a>
                    </div>

                    <div className="text-gray-800 mb-4">
                      <a href={contacts[2].link} target="_blank" rel="noreferrer" className="hover:underline">
                        {contacts[2].reach}
                      </a>
                    </div>

                    <div className="text-gray-800">
                      <a href={contacts[3].link} target="_blank" rel="noreferrer" className="hover:underline">
                        {contacts[3].reach}
                      </a>
                    </div>
                  </div>
                </div>

                {/* optional small address / additional lines (kept empty or add if needed) */}
                {/* <div className="mt-4 text-sm text-gray-400">Your address line here</div> */}
              </div>

              {/* social icons row aligned to right */}
              <div className="w-full md:w-3/4 flex items-center md:justify-end gap-4 mt-2">
                <a
                  href="#"
                  className="text-gray-400 transition text-lg"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-400  transition text-lg"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href={contacts[2].link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400  transition text-lg"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={contacts[3].link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400  transition text-lg"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
