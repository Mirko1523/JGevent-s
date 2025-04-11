import React from "react";
import Form from "../../complements/Form/form";
import NavBarR from "../../complements/NavBar/navbarRoutes"
import fondo152 from "../../assets/fiestade152.jpeg";

function Seccion15() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fondo152})` }}
    >
      {/* navbar */}
      <NavBarR/>
      <div className="flex-grow flex flex-col md:flex-row p-10">
        {/* Texto a la izquierda */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-5">
          <h1 className="text-3xl font-bold mb-4 text-white">
            ¡FESTEJÁ CON NOSOTROS TU FIESTA!
          </h1>
          <p className="text-lg mb-4 text-white">
            Jg Eventos es la empresa número uno de eventos, cuenta con un salón
            totalmente equipado para que tu evento sea único. Descubrí nuestros
            servicios con una excelente locación.
          </p>
          <p className="text-lg font-bold text-white">
            ¡Lo mejor está por venir!
          </p>
        </div>
        {/* Formulario a la derecha con margen superior extra */}
        <div className="w-full md:w-1/2 p-5 mt-10">
          <Form />
        </div>
      </div>
      {/* <div className="mt-20">
        <Footer />
      </div> */}
    </div>
  );
}

export default Seccion15;
