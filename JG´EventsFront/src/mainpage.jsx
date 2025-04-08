// MainPage.jsx
import React from "react";
import NavBar from "./complements/NavBar/navbar";
import Footer from "./complements/footer/footer";

import Nosotros from "./components/Nosotros/nosotros";
import Eventos from "./components/Eventos/eventos";
import Contactanos from "./components/Contacto/contacto";
import Home from "./components/Home/home";

function MainPage() {
    return (
        <>
            <NavBar />
            <div className="flex flex-col min-h-screen">
                {/* Sección Home */}
                <section id="home" className="relative flex-grow container mx-auto px-4 py-10">
                  <Home/>
                </section>

                {/* Sección Nosotros */}
                <section id="nosotros" className="py-10">
                    <Nosotros />
                </section>

                {/* Sección Eventos */}
                <section id="eventos" className="py-10">
                    <Eventos />
                </section>

                {/* Sección Contacto */}
                <section id="contacto" className="py-10">
                    <Contactanos />
                </section>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}

export default MainPage;