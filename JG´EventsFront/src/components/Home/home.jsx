import React from "react";
import FondoImagenHome from "../../assets/FondoHm.png";
import fifteen from "../../assets/fifteen.png";
import goldenrings from "../../assets/goldenrings.png";
import corporativos from "../../assets/corporativos.png";
import aniversarios from "../../assets/aniversary.png";
import recepciones from "../../assets/recepcion.png";
import otros from "../../assets/others.png";
import Presupuesto from "../../complements/Buttons/Presupuesto/button";


const cardData = [
  {
    title: "Fiestas de 15",
    description: "Cumple tu sueño recibiendo un amor único.",
    image: fifteen,
  },
  {
    title: "Casamientos",
    description: "Todos tus sueños en una sola fiesta",
    image: goldenrings,
  },
  {
    title: "Eventos corporativos",
    description: "Conexiones que hacen de un encuentro un éxito.",
    image: corporativos,
  },
  {
    title: "Aniversarios",
    description: "Festeja el amor en un encuentro inolvidable.",
    image: aniversarios,
  },
  {
    title: "Recepciones",
    description: "Despedí esta etapa de la mejor manera.",
    image: recepciones,
  },
  {
    title: "Otros",
    description: "Adaptamos este encuentro según tus gustos.",
    image: otros,
  },
];

function Home() {
  return (
    <>
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
        <div className="relative z-5 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1 flex flex-col items-start justify-center ml-5">
            <h3 className="text-sm font-semibold text-gray-500 text-left">
              Nuestro compromiso:
            </h3>
            <h1 className="text-4xl font-semibold text-left ml-3 mt-3">
              Que seamos tu mejor opción para eventos inolvidables.
            </h1>
            <p className="text-lg font-semibold text-gray-500 text-left ml-3 mt-3">
              Contamos con la oferta más completa de servicios para eventos,
              desde el mejor catering hasta decoración y entretenimiento. Nos
              aseguramos de que cada detalle esté cuidado para que tu evento sea un{" "}
              <strong className="text-black font-semibold">éxito rotundo.</strong>
            </p>
            <div className="flex justify-left mt-10 space-x-8">
              <Presupuesto/>
            </div>
          </div>
          <div className="relative flex-2 flex items-center justify-center">
            <img
              src={FondoImagenHome}
              alt="Evento especial"
              className="w-2/3 h-auto object-contain absolute -top-10 right-0 -translate-y-18 mr-20"
            />
          </div>
        </div>
        <div className="relative z-10 mt-20 mb-4 px-5">
          <h1 className="text-3xl md:text-4xl font-semibold text-left">
            Siempre puede ser un día especial
          </h1>
        </div>
        <div className="relative z-10 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex items-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
            >
              {/* Imagen ubicada a la izquierda, de tamaño fijo */}
              <img
                src={card.image}
                alt={card.title}
                className="w-20 h-20 object-contain rounded mr-4"
              />
              <div>
                <h1 className="text-xl sm:text-2xl text-black mb-2 sm:mb-4">
                  {card.title}
                </h1>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
