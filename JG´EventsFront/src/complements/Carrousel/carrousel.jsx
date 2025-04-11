import React, { useState, useEffect } from "react";
import fiesta1 from "../../assets/1.jpeg";
import fiesta2 from "../../assets/2.webp"; 
import fiesta3 from "../../assets/3.jpg"; 
import fiesta4 from "../../assets/4.jpg"; 
import fiesta5 from "../../assets/5.jpg";  

const images = [fiesta1, fiesta2, fiesta3, fiesta4, fiesta5];

function Carrousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Autoplay cada 4 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div
      id="animation-carousel"
      className="relative w-full max-w-full overflow-hidden rounded-lg"
    >
      <div className="relative min-h-[250px] sm:min-h-[300px] md:min-h-[380px] h-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              className="w-full h-full object-cover rounded-lg"
              alt={`fiesta ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Botón Anterior */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-20 flex items-center justify-center px-2 py-2 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      {/* Botón Siguiente */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-20 flex items-center justify-center px-2 py-2 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default Carrousel;
