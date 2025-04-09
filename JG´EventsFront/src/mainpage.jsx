import React from "react";
import NavBar from "./complements/NavBar/navbar";
import Footer from "./complements/footer/footer";
import Nosotros from "./components/Nosotros/nosotros";
import Eventos from "./components/Eventos/eventos";
import Contactanos from "./components/Contacto/contacto";
import Home from "./components/Home/home";
import whatsappLogo from "./assets/whatsapp.png";

function MainPage() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <NavBar />
                {/* Sección Home */}
                <section
                    id="home"
                    className="relative flex-grow container mx-auto px-4 py-0" // Cambié py-10 a py-0
                >
                    <Home />
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

                {/* Botón flotante de WhatsApp */}
                <a
                    href="https://l.instagram.com/?u=https%3A%2F%2Fjulietagomezveraeventos.taplink.ws%2F%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAadWgmOnHl5gO_cimflXMENCNaiMasVRp9Jj6k5PCpIHX0R08xFwjFVmj2DrxQ_aem_4p4exVWwNsIIctmqYvAfTw&e=AT2tgLAL5zsm7Dq2Cfe65XIrnd3HVKfZKkXyeA5ZhEqlvNW8NZD52NiRDPc0fhnXvOrR6EST22D10HcHzH5RmIoReTV6-BIZLvHWyQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-10 right-10 z-50"
                >
                    <img
                        src={whatsappLogo}
                        alt="WhatsApp"
                        className="w-12 h-12 hover:scale-110 transition-transform duration-300"
                    />
                </a>
            </div>
        </>
    );
}

export default MainPage;