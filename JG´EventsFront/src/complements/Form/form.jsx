import React from "react";

function Form() {
  return (
    <>
      <div className="text-3xl mb-6 text-white text-center font-bold">
        <h1>Completá tus datos para comunicarnos!</h1>
      </div>
      <div className="p-8 bg-gray-950 rounded-2xl shadow-lg max-w-3xl mx-auto mt-4">
        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="first_name" className="block text-base font-medium text-white mb-1">
                Nombre completo *
              </label>
              <input
                type="text"
                id="first_name"
                placeholder="Tu nombre..."
                required
                className="w-full bg-gray-900 p-3 border border-gray-700 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block text-base font-medium text-white mb-1">
                Apellido *
              </label>
              <input
                type="text"
                id="last_name"
                placeholder="Tu apellido..."
                required
                className="w-full bg-gray-900 p-3 border border-gray-700 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-base font-medium text-white mb-1">
                Teléfono *
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Tu número de teléfono..."
                required
                className="w-full bg-gray-900 p-3 border border-gray-700 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
              />
            </div>
            <div>
              <label htmlFor="visitors" className="block text-base font-medium text-white mb-1">
                Invitados estimados *
              </label>
              <input
                type="number"
                id="visitors"
                required
                className="w-full bg-gray-900 p-3 border border-gray-700 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="event_type" className="block text-base font-medium text-white mb-1 text-center">
                Tipo de evento *
              </label>
              <div className="flex justify-center">
                <select
                  id="event_type"
                  required
                  className="w-full md:w-1/2 bg-gray-900 p-3 border border-gray-700 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                >
                  <option value="">Seleccionar tipo de evento</option>
                  <option value="fiesta15">Fiesta de 15</option>
                  <option value="casamiento">Casamiento</option>
                  <option value="aniversario">Aniversarios</option>
                  <option value="recepcion">Recepciones</option>
                  <option value="corporativo">Eventos corporativos</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-base font-medium text-white mb-1">
              Correo electrónico *
            </label>
            <input
              type="email"
              id="email"
              placeholder="tucorreo@gmail.com"
              required
              className="w-full bg-gray-900 p-3 border border-gray-700 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white text-base font-medium py-3 px-6 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;