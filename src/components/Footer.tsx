import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Instagram, Facebook, Video } from "lucide-react";

const exampleVideo = "/fondo web 1.mp4";

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
              Transformamos tu vehículo con la más alta calidad en detailing automotriz premium.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-3">
              
              {/* Instagram */}
              <a
                href="https://www.instagram.com/waltcardetaily/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61581658996087"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-[#1877F2] to-[#0A58CA] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@waltcardetaily?lang=es-419"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-[#000000] via-[#69C9D0] to-[#EE1D52] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Video className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Navegación */}
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

          {/* Servicios */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-lg">Servicios</h4>
            <div className="space-y-3 text-[#C0C0C0]">
              <p>Detailing Premium</p>
              <p>Nano Cerámico</p>
              <p>Restauración</p>
              <p>Protección</p>
              <p>Pulido Completo</p>
            </div>
          </motion.div>

          {/* Contacto */}
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
                <p className="text-[#C0C0C0] text-sm">
                  Medellín, Colombia
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#007BFF]" />
                <div className="text-[#C0C0C0] text-sm">
                  <p>+57 311 774 9365</p>
                  <p>+57 313 202 0301</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#007BFF]" />
                <p className="text-[#C0C0C0] text-sm">waltcardetaily@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pie inferior */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#C0C0C0] text-sm text-center md:text-left">
              © 2024 Walt Car Detaily. Todos los derechos reservados. <br />
              <a
                href="https://waltcardetailing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007BFF] hover:underline"
              >
                
              </a>
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#C0C0C0] hover:text-[#007BFF] transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#" className="text-[#C0C0C0] hover:text-[#007BFF] transition-colors duration-300">
                Política de Privacidad
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
