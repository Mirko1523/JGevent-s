import { Facebook, Instagram } from "lucide-react";
import whatsapp from "../../assets/whatsapp.png";

const Footer = () => {
    return (
        <footer className="bg-gray-950 shadow p-6 xl:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-center sm:text-left text-white">
                © 2015-2025{" "}
                <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    JG' Events
                </a>
                . All rights reserved.
            </p>

            <p className="text-sm text-center text-white">
                created by 
                <a
                    href="https://www.instagram.com/_mkmagency/"
                    className="hover:underline ml-1"
                >
                    <span className="font-semibold">MkmAgency</span>
                </a>
            </p>

            <div className="flex justify-center gap-2">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white rounded-lg hover:bg-gray-700"
                    aria-label="Facebook"
                >
                    <Facebook className="w-4 h-4" />
                </a>

                <a
                    href="https://www.instagram.com/julietagomezvera.eventos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white rounded-lg hover:bg-gray-700"
                    aria-label="Instagram"
                >
                    <Instagram className="w-4 h-4" />
                </a>

                <a
                    href="https://l.instagram.com/?u=https%3A%2F%2Fjulietagomezveraeventos.taplink.ws%2F%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaezpj8Z1Z2vULKvq3IYxjJVTI4qaP4bnVifv7FHjAB4u_Qsk43Mj47mdn6uZw_aem_Hkb02BlQDsWEkCYK9tt1Ng&e=AT1xVTOzRIsu94-UT70fgJXpH9TltnP24IpRRsS-e_j4vQgMILOXvwjZeOBldgmnGpe4oGmI4uFHGvqIGod-2ZqZ38vfx09vh5MUQA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white rounded-lg hover:bg-gray-700"
                    aria-label="WhatsApp"
                >
                    <img
                        src={whatsapp}
                        alt="WhatsApp"
                        className="w-4 h-4"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
