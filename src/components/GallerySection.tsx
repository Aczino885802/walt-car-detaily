import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1644749700856-a82a92828a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbSUyMHByZW1pdW18ZW58MXx8fHwxNzU4ODI5NzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Premium Car Showroom"
    },
    {
      src: "https://images.unsplash.com/photo-1699078844834-44f0475f1f34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBwcmVtaXVtJTIwZmluaXNofGVufDF8fHx8MTc1ODgyOTc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Premium Car Detailing"
    },
    {
      src: "https://images.unsplash.com/photo-1662414018932-402b6425faa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBNZXJjZWRlcyUyMGx1eHVyeSUyMGNhcnxlbnwxfHx8fDE3NTg4Mjk3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Luxury BMW Mercedes"
    },
    {
      src: "https://images.unsplash.com/photo-1676215733351-ed2522610128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBibGFjayUyMG1ldGFsbGljfGVufDF8fHx8MTc1ODgyOTc3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Black Metallic Sports Car"
    },
    {
      src: "https://images.unsplash.com/photo-1694678505383-676d78ea3b96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBjZXJhbWljJTIwY29hdGluZyUyMHdhdGVyJTIwYmVhZGluZ3xlbnwxfHx8fDE3NTg4Mjk3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Ceramic Coating Results"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-black to-[#1C1C1C]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #C0C0C0 50%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            EL PODER DE LA
            <br />
            <span className="text-[#007BFF]">TRANSFORMACIÓN</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#007BFF] to-[#C0C0C0] mx-auto mb-6"></div>
          <p className="text-[#C0C0C0] text-xl max-w-2xl mx-auto">
            Descubre los resultados extraordinarios que logramos con cada vehículo
          </p>
        </motion.div>

        {/* Gallery Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/80 hover:bg-[#007BFF] text-white rounded-full flex items-center justify-center transition-all duration-300 ${
              !canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
            }`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/80 hover:bg-[#007BFF] text-white rounded-full flex items-center justify-center transition-all duration-300 ${
              !canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
            }`}
            disabled={!canScrollRight}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Gallery */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative flex-shrink-0 w-80 h-64 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl h-full">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover content */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-semibold text-lg mb-1">Resultado Premium</h4>
                    <p className="text-sm text-[#C0C0C0]">Transformación completa</p>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>

                {/* Metallic border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#C0C0C0]/30 via-transparent to-[#C0C0C0]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#C0C0C0] text-lg mb-6">
            ¿Quieres que tu vehículo luzca así?
          </p>
          <button
            onClick={() => window.open('https://wa.me/573117749365?text=Quiero%20ver%20más%20ejemplos%20de%20trabajos', '_blank')}
            className="bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300 font-semibold"
          >
            Ver Más Trabajos
          </button>
        </motion.div>
      </div>
    </section>
  );
}