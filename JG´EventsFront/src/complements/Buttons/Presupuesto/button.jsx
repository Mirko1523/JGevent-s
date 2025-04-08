import React from "react";

function Presupuesto() {
    return (
        <button
            className={`bg-yellow-600 text-white px-2 py-2.5 rounded-2xl transition duration-300 cursor-pointer hover:bg-yellow-500`}
        >
            <a href="/contacto" className="font-bold">
                Pedí tu presupuesto
            </a>
        </button>

    )
}

export default Presupuesto;