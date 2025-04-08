import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logoJG.png";
import Presupuesto from "../Buttons/Presupuesto/button";

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const goToHome = () => navigate("/");
    const goToNosotros = () => navigate("/nosotros");
    const goToEventos = () => navigate("/eventos");
    const goToContacto = () => navigate("/contacto");

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
                        onClick={goToHome}
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
                    <span
                        className={`text-black font-bold cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg ${
                            isActive("/") ? "bg-yellow-600 text-white" : ""
                        }`}
                        onClick={goToHome}
                    >
                        Home
                    </span>
                    <span
                        className={`text-black font-bold cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg ${
                            isActive("/nosotros") ? "bg-yellow-600 text-white" : ""
                        }`}
                        onClick={goToNosotros}
                    >
                        Nosotros
                    </span>
                    <span
                        className={`text-black font-bold cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg ${
                            isActive("/eventos") ? "bg-yellow-400 text-white" : ""
                        }`}
                        onClick={goToEventos}
                    >
                        Eventos
                    </span>
                    <span
                        className={`text-black font-bold cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg ${
                            isActive("/contacto") ? "bg-yellow-400 text-white" : ""
                        }`}
                        onClick={goToContacto}
                    >
                        Contacto
                    </span>
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
                            <span
                                className={`text-black font-bold cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg ${
                                    isActive("/") ? "bg-yellow-600 text-white" : ""
                                }`}
                                onClick={goToHome}
                            >
                                Home
                            </span>
                        </li>
                        <li className="py-4 border-b border-gray-300 w-full text-center last:border-b-0">
                            <span
                                className={`text-black font-bold cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg ${
                                    isActive("/nosotros") ? "bg-yellow-600 text-white" : ""
                                }`}
                                onClick={goToNosotros}
                            >
                                Nosotros
                            </span>
                        </li>
                        <li className="py-4 border-b border-gray-300 w-full text-center last:border-b-0">
                            <span
                                className={`text-black font-bold cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg ${
                                    isActive("/eventos") ? "bg-yellow-600 text-white" : ""
                                }`}
                                onClick={goToEventos}
                            >
                                Eventos
                            </span>
                        </li>
                        <li className="py-4 border-b border-gray-300 w-full text-center last:border-b-0">
                            <span
                                className={`text-black font-bold cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg ${
                                    isActive("/contacto") ? "bg-yellow-600 text-white" : ""
                                }`}
                                onClick={goToContacto}
                            >
                                Contacto
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;
