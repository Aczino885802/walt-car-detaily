import { Card, CardContent } from './ui/card';
import { Home, MapPin, Clock, Star } from 'lucide-react';

const features = [
  {
    highlight: "EXPERIENCIA",
    icon: <Star className="h-8 w-8 text-[#007BFF]" />,
    title: "5+ Años de Experiencia",
    description: "Especialistas en vehículos transformados"
  },
  {
    highlight: "CALIDAD",
    icon: <Star className="h-8 w-8 text-[#007BFF]" />,
    title: "Productos",
    description: "Solo utilizamos productos de la más alta calidad del mercado"
  },
  {
    highlight: "GARANTÍA",
    icon: <Star className="h-8 w-8 text-[#007BFF]" />,
    title: "100% Garantizado",
    description: "Todos nuestros servicios incluyen garantía de satisfacción"
  },
  {
    highlight: "TECNOLOGÍA",
    icon: <Star className="h-8 w-8 text-[#007BFF]" />,
    title: "Equipos de Última Generación",
    description: "Tecnología avanzada para resultados profesionales"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Inspección",
    description: "Evaluamos detalladamente el estado de tu vehículo"
  },
  {
    step: "2",
    title: "Planificación", 
    description: "Diseñamos el proceso específico para tu auto"
  },
  {
    step: "3",
    title: "Preparación",
    description: "Preparamos el vehículo y organizamos el espacio"
  },
  {
    step: "4",
    title: "Ejecución",
    description: "Aplicamos nuestros servicios con precisión técnica"
  },
  {
    step: "5",
    title: "Entrega",
    description: "Tu vehículo queda listo, transformado y protegido"
  }
];

const specialServices = [
  "Vehículos de colección y clásicos",
  "Motocicletas premium",
  "Vehículos comerciales",
  "Flotas empresariales",
  "Preparación para eventos",
  "Mantenimiento de concesionarios"
];

export function WhyChooseUsSection() {
  return (
    <section id="porque-elegirnos" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Mobile Service Highlight */}
        <div className="premium-glass p-12 rounded-3xl border border-[#0056b3]/30 text-center shadow-2xl mb-20 animate-on-scroll bg-[#1C1C1C]">
          <div className="w-20 h-20 bg-gradient-to-br from-[#007BFF]/20 to-[#0056b3]/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Home className="h-12 w-12 text-[#007BFF]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            SERVICIO
            <span className="bg-gradient-to-r from-white to-[#C0C0C0] bg-clip-text text-transparent block">A DOMICILIO</span>
          </h2>
          <p className="text-xl text-[#C0C0C0] mb-10 max-w-2xl mx-auto">
            La comodidad que tu vehículo merece, sin que tengas que moverte de casa
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="premium-glass p-6 rounded-2xl border border-[#808080]">
              <MapPin className="h-10 w-10 mx-auto mb-4 text-[#007BFF]" />
              <h3 className="text-white font-bold mb-2">Tu Casa</h3>
              <p className="text-[#C0C0C0] text-sm">Comodidad total en tu hogar</p>
            </div>
            <div className="premium-glass p-6 rounded-2xl border border-[#808080]">
              <MapPin className="h-10 w-10 mx-auto mb-4 text-[#0056b3]" />
              <h3 className="text-white font-bold mb-2">Tu Oficina</h3>
              <p className="text-[#C0C0C0] text-sm">Mientras trabajas, nosotros cuidamos tu auto</p>
            </div>
            <div className="premium-glass p-6 rounded-2xl border border-[#808080]">
              <MapPin className="h-10 w-10 mx-auto mb-4 text-[#007BFF]" />
              <h3 className="text-white font-bold mb-2">Donde Necesites</h3>
              <p className="text-[#C0C0C0] text-sm">Flexibilidad total para ti</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-20 animate-on-scroll">
          <span className="text-sm font-bold tracking-widest text-[#007BFF] uppercase mb-4 block">
            LA DIFERENCIA 
          </span>
          <h2 className="premium-title text-4xl md:text-5xl font-bold text-white mb-6">
            ¿POR QUÉ SOMOS
            <span className="bg-gradient-to-r from-white to-[#C0C0C0] bg-clip-text text-transparent block">LA MEJOR OPCIÓN?</span>
          </h2>
          <p className="text-xl text-[#C0C0C0] max-w-3xl mx-auto leading-relaxed">
            Años de experiencia transformando vehículos con los más altos estándares de calidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="premium-glass border-[#808080] hover:border-[#0056b3]/50 transition-all duration-500 transform hover:scale-105 bg-[#000000]/40 group"
            >
              <CardContent className="p-8 text-center">
                {/* Badge */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide bg-gradient-to-r from-[#007BFF]/20 to-[#0056b3]/20 text-[#007BFF] rounded-full border border-[#0056b3]/30">
                    {feature.highlight}
                  </span>
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-[#007BFF]/10 to-[#0056b3]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#0056b3]/20">
                  {feature.icon}
                </div>
                <h3 className="text-white font-bold mb-4">{feature.title}</h3>
                <p className="text-[#C0C0C0] leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process */}
        <div className="premium-glass p-12 rounded-3xl border border-[#808080] shadow-2xl mb-20 animate-on-scroll">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest text-[#007BFF] uppercase mb-4 block">
              PROCESO PROFESIONAL
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CÓMO TRABAJAMOS
            </h2>
            <p className="text-xl text-[#C0C0C0] max-w-2xl mx-auto">
              Cada paso está diseñado para obtener la perfección en tu vehículo
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#007BFF] to-[#0056b3] rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-white font-bold mb-3">{step.title}</h3>
                <p className="text-[#C0C0C0] text-sm leading-relaxed">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 transform translate-x-8 w-8 h-1 bg-gradient-to-r from-[#007BFF]/50 to-[#0056b3]/50 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-16 animate-on-scroll">
          {/* Schedule */}
          <div className="premium-glass p-8 rounded-3xl border border-[#808080] bg-[#000000]/40">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF]/20 to-[#0056b3]/20 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-[#007BFF]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Horarios de Atención</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 premium-glass rounded-xl border border-[#808080]/50">
                <span className="text-white font-medium">Lunes - Viernes</span>
                <span className="text-[#C0C0C0]">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-4 premium-glass rounded-xl border border-[#808080]/50">
                <span className="text-white font-medium">Sábados</span>
                <span className="text-[#C0C0C0]">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-4 premium-glass rounded-xl border border-[#808080]/50">
                <span className="text-white font-medium">Domingos</span>
                <span className="text-[#C0C0C0]">9:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Special Services */}
          <div className="premium-glass p-8 rounded-3xl border border-[#808080] bg-[#000000]/40">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF]/20 to-[#0056b3]/20 rounded-xl flex items-center justify-center">
                <Star className="h-6 w-6 text-[#C0C0C0]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Servicios Especializados</h3>
            </div>
            <div className="space-y-3">
              {specialServices.map((service, index) => (
                <div key={index} className="flex items-center gap-4 p-3 premium-glass rounded-xl border border-[#808080]/50 hover:border-[#0056b3]/30 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#007BFF] to-[#0056b3] flex-shrink-0"></div>
                  <span className="text-[#C0C0C0]">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}