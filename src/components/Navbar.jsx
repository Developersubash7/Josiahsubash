import React, { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="text-white">
            <nav className="flex justify-between items-center max-w-8xl mx-auto px-6 py-6 fixed w-full 
                            bg-gradient-to-r from-[#0A0F33] to-[#3F1C85]
                            z-50 border-b-4 border-fuchsia-500 shadow-xl backdrop-blur-md md:rounded-b-2xl">
                
                {/* Logo */}
                <a
                    href="/"
                    className="text-2xl font-urbanist hover:text-fuchsia-400 transition duration-300 transform hover:scale-105"
                >
                    Josiah Subash
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <ul className="flex space-x-10 text-lg font-urbanist">
                        {["Home", "About", "Projects", "Contact"].map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                                    className=" transition duration-300 transform hover:scale-105 relative group"
                                >
                                    {item}
                                    {/* Underline animation */}
                                    <span className="absolute left-0 -bottom-1 h-1 w-0 bg-fuchsia-400 transition-all group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu */}
                {toggleMenu && (
                    <div className="block md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-[#0A0F33] to-[#3F1C85] border-t border-fuchsia-500 shadow-lg">
                        <ul className="flex flex-col space-y-1.5 text-md font-urbanist p-4">
                            {["Home", "About", "Projects", "Contact"].map((item, index) => (
                                <li key={index} onClick={() => setToggleMenu(!toggleMenu)}>
                                    <a
                                        href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                                        className="block hover:text-fuchsia-400 transition duration-300 transform hover:scale-105 py-2"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Hamburger Icon */}
                <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
                    <Bars3Icon className="text-white h-8 transition-transform duration-300 hover:rotate-90 hover:scale-110" />
                </button>

            </nav>
        </header>
    );
};

export default Navbar;
