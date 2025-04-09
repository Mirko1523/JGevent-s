import React from "react";
import temporal from "../../assets/salontemporal.jpg";

function Nosotros() {
  return (
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

      {/* Encabezado principal */}
      <div className="relative z-10 mb-8 ml-5">
        <h3 className="text-sm font-semibold text-gray-500">Sobre jg eventos:</h3>
        <h1 className="text-4xl font-semibold text-left mt-3">Nuestro propósito</h1>
      </div>

      {/* Contenido en dos columnas en pantallas md y superiores */}
      <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
        {/* Columna izquierda: imagen */}
        <div className="md:w-1/2 flex justify-center ml-8 md:justify-left">
          <img
            src={temporal}
            alt="Evento especial"
            className="w-full max-w-md h-auto object-contain rounded"
          />
        </div>

        {/* Columna derecha: textos */}
        <div className="md:w-1/2 flex flex-col justify-center">
          {/* Nuestra misión */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-left">Nuestra misión</h2>
            <p className="text-lg font-semibold text-gray-500 text-left mt-3">
              Queremos convertirnos en la empresa de eventos más confiable y reconocida de la región y del país, ofreciendo un servicio excepcional y experiencias inolvidables para nuestros clientes.
            </p>
          </div>

          {/* Nuestra visión */}
          <div>
            <h2 className="text-2xl font-semibold text-left">Nuestra visión</h2>
            <p className="text-lg font-semibold text-gray-500 text-left mt-3">
              Todo el tiempo estamos buscando ideas, destacarnos de los demás e intentar siempre innovar en el rubro de eventos. Nos esforzamos por ser la mejor y desafiar los límites y lo nunca antes visto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;