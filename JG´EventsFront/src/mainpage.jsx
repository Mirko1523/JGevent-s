import React, { useEffect } from "react";
import NavBarS from "./complements/NavBar/navbarScroll";
import Footer from "./complements/footer/footer";
import Nosotros from "./components/Nosotros/nosotros";
import Home from "./components/Home/home";
import whatsappLogo from "./assets/whatsapp.png";

function MainPage() {
    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector(".footer");
            const logo = document.querySelector(".whatsapp-logo");
            if (footer && logo) {
                const footerTop = footer.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                const logoHeight = logo.offsetHeight; // Altura real del logo (48px)
                const margin = 50; // Aumentamos el margen a 40px para subir más el logo

                // Calcular el valor mínimo de bottom para evitar superposición
                const minBottom = windowHeight - footerTop + margin - logoHeight;
                // Asegurarse de que bottom sea al menos el margen original
                logo.style.bottom = Math.max(margin, minBottom) - "px";
            }
        };

        // Agregar el escuchador de scroll
        window.addEventListener("scroll", handleScroll);
        // Ejecutar una vez al montar para ajustar la posición inicial
        handleScroll();

        // Limpiar el escuchador al desmontar el componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <NavBarS />
                {/* Sección Home */}
                <section
                    id="home"
                    className="relative flex-grow container mx-auto px-4 py-0"
                >
                    <Home />
                </section>

                {/* Sección Nosotros */}
                <section id="nosotros" className="py-10">
                    <Nosotros />
                </section>
                {/* Footer */}
                <Footer className="footer" />

                {/* Botón flotante de WhatsApp */}
                <a
                    href="https://l.instagram.com/?u=https%3A%2F%2Fjulietagomezveraeventos.taplink.ws%2F%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAadWgmOnHl5gO_cimflXMENCNaiMasVRp9Jj6k5PCpIHX0R08xFwjFVmj2DrxQ_aem_4p4exVWwNsIIctmqYvAfTw&e=AT2tgLAL5zsm7Dq2Cfe65XIrnd3HVKfZKkXyeA5ZhEqlvNW8NZD52NiRDPc0fhnXvOrR6EST22D10HcHzH5RmIoReTV6-BIZLvHWyQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-10 right-10 z-50 whatsapp-logo"
                >
                    <img
                        src={whatsappLogo}
                        alt="WhatsApp"
                        className="w-12 h-12 hover:scale-150 hover:bg-gray-100 rounded-xl transition-transform duration-300"
                    />
                </a>
            </div>
        </>
    );
}

export default MainPage;