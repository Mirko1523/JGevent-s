import React from "react";

import Footer from "../../complements/footer/footer";

function Eventos() {
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
            </div>
           
        </>
    );
}

export default Eventos;