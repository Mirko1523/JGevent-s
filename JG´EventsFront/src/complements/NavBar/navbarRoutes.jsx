import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importamos Link
import logo from "../../assets/logoJG.png";
import Presupuesto from "../Buttons/Presupuesto/button";

function NavBarR() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleServices = () => setServicesOpen(!servicesOpen);

    // Opciones de Servicios con rutas que redirigen a páginas distintas
    const serviceItems = [
        { title: "FIESTAS DE 15", desc: "Cumple tu sueño recibiendo un amor único", href: "/seccion15" },
        { title: "CASAMIENTOS", desc: "Todos tus sueños cumplidos en una fiesta", href: "/seccion15" },
        { title: "EVENTOS CORPORATIVOS", desc: "Conexiones que hacen de un encuentro un éxito", href: "/seccion15" },
        { title: "ANIVERSARIOS", desc: "Festeja el amor en un encuentro inolvidable", href: "/seccion15" },
        { title: "RECEPCIONES", desc: "Despedí esta etapa de la mejor manera", href: "/seccion15" },
        { title: "OTROS", desc: "Adaptamos este encuentro según tus gustos", href: "/seccion15" },
    ];

    return (
        <header className={`sticky top-0 z-50 lg:px-10 px-4 bg-white flex flex-wrap items-center py-4 transition-all duration-300 ${isScrolled ? "shadow-lg -translate-y-1" : "shadow-md"}`}>
            <div className="flex-1 flex justify-between items-center w-full">
                <div className="flex items-center space-x-2">
                    <a
                    href="/"
                    >
                    <img
                        src={logo}
                        alt="jgEvents"
                        width={40}
                        height={40}
                        className="cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        />
                        </a>
                </div>

                <div className="md:hidden block">
                    <Presupuesto />
                </div>

                <button onClick={toggleMenu} className="md:hidden block" aria-label="Toggle menu">
                    <svg className="fill-current text-gray-900 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="/" className="text-black font-bold hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg">Home</a>
                    
                    
                    {/* Dropdown Servicios */}
                    <div className="relative">
                        <button onClick={toggleServices} className="flex items-center text-black font-bold hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg">
                            <span>Servicios</span>
                            <svg 
                                className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${servicesOpen ? "rotate-180" : "rotate-0"}`} 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {servicesOpen && (
                            <div className="absolute bg-white shadow-lg rounded-lg mt-2 z-50 w-64 text-left">
                                {serviceItems.map(({ title, desc, href }, i) => (
                                    <Link key={i} to={href} className="block px-4 py-2 hover:bg-yellow-100 cursor-pointer">
                                        <p className="font-semibold">{title}</p>
                                        <p className="text-sm text-gray-600">{desc}</p>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex-1 flex justify-end">
                        <Presupuesto />
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${menuOpen ? "w-full max-h-screen py-4" : "w-full max-h-0"} overflow-hidden transition-all duration-300 ease-in-out absolute top-full right-0 px-2 mt-0.5 bg-white shadow-md z-10 md:hidden`}>
                <nav>
                    <ul className="flex flex-col items-center text-base text-gray-700">
                        <li className="py-3 border-b border-gray-300 w-full text-center">
                            <a href="/" className="text-black font-bold hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg">Home</a>
                        </li>
                        <li className="py-4 border-b border-gray-300 w-full text-center">
                            <button onClick={toggleServices} className="flex items-center justify-center text-black font-bold hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg w-full">
                                <span>Servicios</span>
                                <svg 
                                    className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${servicesOpen ? "rotate-180" : "rotate-0"}`} 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {servicesOpen && (
                                <div className="mt-2 space-y-2 text-left px-6">
                                    {serviceItems.map(({ title, desc, href }, i) => (
                                        <Link key={i} to={href} className="block py-2">
                                            <p className="font-semibold">{title}</p>
                                            <p className="text-sm text-gray-600">{desc}</p>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBarR;
