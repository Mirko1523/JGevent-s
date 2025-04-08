// NavBar.jsx
import React, { useState, useEffect } from "react";
import logo from "../../assets/logoJG.png";
import Presupuesto from "../Buttons/Presupuesto/button";

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header
            className={`sticky top-0 z-50 lg:px-10 px-4 bg-white flex flex-wrap items-center py-2 transition-all duration-300 ${
                isScrolled ? "shadow-lg -translate-y-1" : "shadow-md"
            }`}
        >
            <div className="flex-1 flex justify-between items-center w-full">
                <div className="flex items-center space-x-2">
                    <img
                        src={logo}
                        alt="jgEvents"
                        width={40}
                        height={40}
                        className="cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    />
                </div>

                <div className="md:hidden block">
                    <Presupuesto />
                </div>

                <button
                    onClick={toggleMenu}
                    className="md:hidden block"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="fill-current text-gray-900 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>

                <div className="hidden md:flex items-center space-x-8">
                    <a
                        href="#home"
                        className="text-black font-bold cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg"
                    >
                        Home
                    </a>
                    <a
                        href="#nosotros"
                        className="text-black font-bold cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg"
                    >
                        Nosotros
                    </a>
                    <a
                        href="#eventos"
                        className="text-black font-bold cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg"
                    >
                        Eventos
                    </a>
                    <a
                        href="#contacto"
                        className="text-black font-bold cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg"
                    >
                        Contacto
                    </a>
                    <div className="flex-1 flex justify-end">
                        <Presupuesto />
                    </div>
                </div>
            </div>

            <div
                className={`${
                    menuOpen ? "w-full max-h-screen py-4" : "w-full max-h-0"
                } overflow-hidden transition-all duration-300 ease-in-out absolute top-full right-0 px-2 mt-0.5 bg-white shadow-md z-10 md:hidden`}
            >
                <nav>
                    <ul className="flex flex-col items-center text-base text-gray-700">
                        <li className="py-3 border-b border-gray-300 w-full text-center last:border-b-0">
                            <a
                                href="#home"
                                className="text-black font-bold cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg"
                            >
                                Home
                            </a>
                        </li>
                        <li className="py-4 border-b border-gray-300 w-full text-center last:border-b-0">
                            <a
                                href="#nosotros"
                                className="text-black font-bold cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg"
                            >
                                Nosotros
                            </a>
                        </li>
                        <li className="py-4 border-b border-gray-300 w-full text-center last:border-b-0">
                            <a
                                href="#eventos"
                                className="text-black font-bold cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg"
                            >
                                Eventos
                            </a>
                        </li>
                        <li className="py-4 border-b border-gray-300 w-full text-center last:border-b-0">
                            <a
                                href="#contacto"
                                className="text-black font-bold cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg"
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;