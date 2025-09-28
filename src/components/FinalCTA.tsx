import { motion } from 'motion/react';

export function FinalCTA() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5213117749365?text=Estoy%20listo%20para%20transformar%20mi%20vehículo%20con%20Walt%20Car%20Detaily', '_blank');
  };

  const handleCall = () => {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Móvil → abrir llamada
    window.location.href = 'tel:3117749365';
  } else {
    // Escritorio → mostrar alerta o copiar número
    alert("Llámanos al +57 311 774 9365");
  }
};


  return (
    <section className="py-20 bg-gradient-to-b from-black via-[#1C1C1C] to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-radial from-[#007BFF]/20 to-transparent rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial from-[#C0C0C0]/15 to-transparent rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main heading */}
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #C0C0C0 50%, #007BFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 40px rgba(0, 123, 255, 0.3)'
            }}
          >
            ¿LISTO PARA TRANSFORMAR TU VEHÍCULO?
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-[#C0C0C0] mb-12 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Lleva tu vehículo al siguiente nivel con 
            <span className="text-[#007BFF] font-semibold"> Walt Car Detaily</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-10 py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold text-lg overflow-hidden"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/20 to-[#128C7E]/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              
              <div className="relative z-10 flex items-center gap-4">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.33"/>
                </svg>
                <span>WhatsApp Ahora</span>
              </div>
            </motion.button>

            <motion.button
              onClick={handleCall}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-4 bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white px-10 py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold text-lg overflow-hidden"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/20 to-[#0056b3]/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              
              <div className="relative z-10 flex items-center gap-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Llamar Ahora</span>
              </div>
            </motion.button>
          </motion.div>

          {/* Additional info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 text-[#C0C0C0]">
              <div className="w-2 h-2 bg-[#007BFF] rounded-full"></div>
              <span>Respuesta inmediata</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-[#C0C0C0]">
              <div className="w-2 h-2 bg-[#007BFF] rounded-full"></div>
              <span>Presupuesto comodo</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-[#C0C0C0]">
              <div className="w-2 h-2 bg-[#007BFF] rounded-full"></div>
              <span>Agenda tu cita hoy</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}