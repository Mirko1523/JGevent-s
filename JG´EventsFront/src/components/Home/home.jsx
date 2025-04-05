import React from "react";
import NavBar from "../../complements/NavBar/navbar";
import Footer from "../../complements/footer/footer";
import FondoImagenHome from "../../assets/FondoHm.png";
import Servicios from "../../complements/Buttons/Servicios/button";

function Home() {
    return (
        <>
            <NavBar />
            <div className="relative flex-grow container mx-auto px-4 py-10 flex flex-col min-h-screen">
                <svg
                    className="absolute inset-0 w-full h-full z-0"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 600"
                >
                    <rect width="1440" height="600" fill="#f7f7f7" />
                    <path
                        fill="#ffffff"
                        d="
                            M0,0
                            Q1080,600 1440,0
                            L1440,600
                            L0,600  
                            Z
                        "
                    />
                </svg>
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 mt-15">
                    <div className="flex-1 flex flex-col items-start justify-center ml-5">
                        <h3 className="text-sm font-semibold text-gray-500 text-left">Nuestro compromiso:</h3>
                        <h1 className="text-4xl font-semibold text-left ml-3 mt-3">
                            Que seamos tu mejor opción para eventos inolvidables.
                        </h1>
                        <p className="text-lg font-semibold text-gray-500 text-left ml-3 mt-3">
                            Contamos con la oferta más completa de servicios para eventos,
                            desde el mejor catering hasta decoración y entretenimiento.
                            Nos aseguramos de que cada detalle esté cuidado
                            para que tu evento sea un <strong className="text-black font-semibold">éxito rotundo.</strong>
                            <br />
                        </p>
                        <div className="flex justify-left mt-10 space-x-8">
                            <Servicios />
                        </div>
                    </div>
                    <div className="flex-2 flex items-center justify-center">
                        <img
                            src={FondoImagenHome}
                            alt="Logo"
                            className="w-2/3 h-auto object-contain transform -translate-y-30 mr-20"
                        />
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Home;