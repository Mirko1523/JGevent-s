import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-950 shadow p-6 xl:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-center sm:text-left text-white mb-4 sm:mb-0">
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
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white rounded-lg hover:bg-gray-700"
                    aria-label="Instagram"
                >
                    <Instagram className="w-4 h-4" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;