import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Cerrar menú después de navegar
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo alineado a la izquierda */}
          <div>
            <h1 
              className="text-2xl md:text-3xl font-bold tracking-wider"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #C0C0C0 50%, #007BFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 20px rgba(0, 123, 255, 0.3)'
              }}
            >
              WALT.CAR.DETAILING
            </h1>
          </div>

          {/* Botón menú móvil */}
          <button 
            onClick={toggleMenu}
            className="text-white hover:text-[#007BFF] transition-colors duration-300 z-50 relative"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            // 🔹 Fondo más oscuro y definido
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-lg"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              // 🔹 Panel con degradado azul sutil y mejor contraste
              className="absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-[#141414] to-black border-l border-[#007BFF]/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full pt-20 px-8">
                <nav className="space-y-8">
                  {[
                    { id: 'inicio', label: 'Inicio', delay: 0.1 },
                    { id: 'servicios', label: 'Servicios', delay: 0.2 },
                    { id: 'galeria', label: 'Galería', delay: 0.3 },
                    { id: 'contacto', label: 'Contacto', delay: 0.4 },
                  ].map((item) => (
                    <motion.button
                      key={item.id}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: item.delay, duration: 0.3 }}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-2xl text-white hover:text-[#007BFF] transition-colors duration-300 font-medium tracking-wide py-4 border-b border-gray-800 hover:border-[#007BFF]"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>

                {/* Línea decorativa inferior */}
                <div className="mt-auto py-6 border-t border-gray-800 text-center text-sm text-gray-500">
                  © {new Date().getFullYear()} WALT.CAR.DETAILING
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
