import React from "react";

function Presupuesto({}) {
  return (
    <button
      className="bg-yellow-600 text-white px-4 py-2.5 rounded-2xl transition duration-300 cursor-pointer hover:bg-yellow-500"
    >
      <a
      href="/seccion15"
      >
      <span className="font-bold">Pedí tu presupuesto</span>
      </a>
      
    </button>
  );
}

export default Presupuesto;