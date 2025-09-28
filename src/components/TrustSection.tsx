import { motion } from 'motion/react';
import { Award, Clock, Shield, Star, Users, Zap } from 'lucide-react';

export function TrustSection() {
  const trustItems = [
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Productos y técnicas de la más alta calidad"
    },
    {
      icon: Clock,
      title: "Durabilidad",
      description: "Protección que perdura en el tiempo"
    },
    {
      icon: Shield,
      title: "Garantía",
      description: "Respaldamos nuestro trabajo al 100%"
    },
    {
      icon: Star,
      title: "Excelencia",
      description: "Resultados que superan expectativas"
    },
    {
      icon: Users,
      title: "Experiencia",
      description: "Años de experiencia en detailing premium"
    },
    {
      icon: Zap,
      title: "Innovación",
      description: "Tecnología de vanguardia en cada servicio"
    }
  ];

  const stats = [
    { number: "500+", label: "Vehículos Transformados" },
    { number: "5+", label: "Años de Experiencia" },
    { number: "100%", label: "Satisfacción Garantizada" },
    { number: "24/7", label: "Soporte al Cliente" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1C1C1C] to-black">
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
            CONFIANZA QUE
            <br />
            <span className="text-[#007BFF]">NOS RESPALDA</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#007BFF] to-[#C0C0C0] mx-auto"></div>
        </motion.div>

        {/* Trust Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-gradient-to-br from-[#1C1C1C] to-black p-8 rounded-xl border border-gray-800 hover:border-[#007BFF] transition-all duration-300 text-center"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#007BFF] to-[#0056b3] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-[#007BFF] transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-[#C0C0C0] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div 
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(135deg, #007BFF 0%, #C0C0C0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {stat.number}
              </div>
              <div className="text-[#C0C0C0] text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
<motion.div
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  viewport={{ once: true }}
  className="mt-16 text-center"
>
  <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#1C1C1C] to-black p-6 rounded-xl border border-gray-800">
    <div className="flex items-center gap-2">
      <Award className="w-6 h-6 text-[#007BFF]" />
      <span className="text-white font-semibold">Certificado</span>
    </div>
    <div className="w-px h-8 bg-gray-700"></div>
    <div className="flex items-center gap-2">
      <Shield className="w-6 h-6 text-[#007BFF]" />
      <span className="text-white font-semibold">Garantía Extendida</span>
    </div>
    <div className="w-px h-8 bg-gray-700"></div>
    <div className="flex items-center gap-2">
      <Star className="w-6 h-6 text-[#007BFF]" />
      <span className="text-white font-semibold">5 Estrellas</span>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}