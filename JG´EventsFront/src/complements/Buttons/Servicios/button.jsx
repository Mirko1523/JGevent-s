import React from "react";

function Servicios() {

    return (
        <button
            className={`bg-yellow-400 text-white px-3 py-2.5 rounded transition duration-300 cursor-pointer hover:bg-yellow-500`}
        >
            <a href="/servicios" className="font-bold">
                Ver nuestros servicios
            </a>
        </button>
    )
}

export default Servicios