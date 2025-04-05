import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logoJG from "../../assets/logoJG.png";
import Presupuesto from "../Buttons/Presupuesto/button";

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const isActive = (path) => location.pathname === path;

    return (
        <div
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-xl -translate-y-1" : "shadow-lg"
                }`}
        >
            <nav className="bg-gray-950 p-6 rounded-1xl">
                <div className="container mx-auto flex items-center">
                    <div className="flex-1">
                        <a href="/" className="text-yellow-400 text-lg font-bold">
                            <img src={logoJG} alt="Logo" className="h-10" />
                        </a>
                    </div>
                    <ul className="flex space-x-6 text-xl font-medium">
                        <li>
                            <a
                                href="/"
                                className={`text-white ${isActive("/") ? "text-yellow-600" : "hover:text-yellow-600"
                                    }`}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/nosotros"
                                className={`text-white ${isActive("/nosotros") ? "text-yellow-600" : "hover:text-yellow-600"
                                    }`}
                            >
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a
                                href="/eventos"
                                className={`text-white ${isActive("/eventos") ? "text-yellow-600" : "hover:text-yellow-600"
                                    }`}
                            >
                                Eventos
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contacto"
                                className={`text-white ${isActive("/contacto") ? "text-yellow-600" : "hover:text-yellow-600"
                                    }`}
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                    <div className="flex-1 flex justify-end">
                        <Presupuesto />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;