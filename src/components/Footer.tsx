import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import exampleVideo from "../assets/fondo-web.mp4";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contacto" className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 flex flex-col items-start"
          >
            <video
              src={exampleVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-32 md:h-40 lg:h-52 w-auto rounded-lg object-cover"
            />
            <p className="text-[#C0C0C0] leading-relaxed">
              Transformamos tu vehículo con la más alta calidad en detailing
              automotriz premium.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5213117749365"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-lg">Navegación</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block text-[#C0C0C0] hover:text-[#007BFF] transition-colors duration-300"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="block text-[#C0C0C0] hover:text-[#007BFF] transition-colors duration-300"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="block text-[#C0C0C0] hover:text-[#007BFF] transition-colors duration-300"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block text-[#C0C0C0] hover:text-[#007BFF] transition-colors duration-300"
              >
                Contacto
              </button>
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-lg">Servicios</h4>
            <div className="space-y-3">
              <p className="text-[#C0C0C0]">Detailing Premium</p>
              <p className="text-[#C0C0C0]">Nano Cerámico</p>
              <p className="text-[#C0C0C0]">Restauración</p>
              <p className="text-[#C0C0C0]">Protección</p>
              <p className="text-[#C0C0C0]">Pulido Completo</p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-lg">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#007BFF] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#C0C0C0] text-sm">
                    Medellin
                    <br />
                    Colombia
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#007BFF]" />
                <a
                  href="tel:+573117749365"
                  className="text-[#C0C0C0] hover:text-[#007BFF] transition-colors duration-300"
                >
                  +57 311 774 9365
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#007BFF]" />
                <a
                  href="https://wa.me/3117749365"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C0C0C0] hover:text-[#007BFF] transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#C0C0C0] text-sm">
              © 2024 Walt Car Detaily. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-[#C0C0C0] hover:text-[#007BFF] transition-colors duration-300"
              >
                Términos y Condiciones
              </a>
              <a
                href="#"
                className="text-[#C0C0C0] hover:text-[#007BFF] transition-colors duration-300"
              >
                Política de Privacidad
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

