import { motion } from 'motion/react';
import { 
  Sparkles, 
  Shield, 
  Car, 
  Zap, 
  RefreshCw, 
  Settings, 
  Eye, 
  Droplets,
  Phone
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function ServicesSection() {
  const services = [
    {
      category: "EXTERIOR",
      icon: <Sparkles className="w-8 h-8 text-[#007BFF]" />,
      title: "Tratamiento de vidrios y rines",
      description: "Claridad total y acabado brillante.",
      features: ["Terminado impecable", "Eliminación de gotas secas", "capa protectora"]
    },
    {
      category: "RESTAURACIÓN",
      icon: <RefreshCw className="w-8 h-8 text-[#007BFF]" />,
      title: "Restauración de pinturas reales de brillo",
      description: "Recuperamos el brillo original de tu auto.",
      features: ["Pulido profesional", "Compuestos de calidad", "Acabado espejo"]
    },
    {
      category: "PROTECCIÓN",
      icon: <Shield className="w-8 h-8 text-[#007BFF]" />,
      title: "Protección diamantizada con nano cerámico",
      description: "Capa protectora y duradera para tu pintura.",
      features: ["Nano cerámica 9H", "Durabilidad 2-5 años", "Hidrofóbico extremo"]
    },
    {
      category: "INTERIOR",
      icon: <Car className="w-8 h-8 text-[#007BFF]" />,
      title: "Lavado de cojinería, techo y alfombras",
      description: "Limpieza profunda interior.",
      features: ["Extracción húmeda", "Productos especiales", "Desinfección total"]
    },
    {
      category: "RESTAURACIÓN",
      icon: <Zap className="w-8 h-8 text-[#007BFF]" />,
      title: "Restauración de partes negras",
      description: "Devuelve vida a plásticos y gomas.",
      features: ["Tratamiento UV", "Productos de restauración", "Acabado original"]
    },
    {
      category: "MECÁNICA",
      icon: <Settings className="w-8 h-8 text-[#007BFF]" />,
      title: "Restauración de motor",
      description: "Motor limpio y óptimo.",
      features: ["Desengrase total", "Protección anticorrosiva", "Acabado premium"]
    },
    {
      category: "ÓPTICOS",
      icon: <Eye className="w-8 h-8 text-[#007BFF]" />,
      title: "Restauración de farolas",
      description: "Mejora visibilidad y estética.",
      features: ["Lijado progresivo", "Pulido óptico", "Sellado UV"]
    },
    {
      category: "COMPLETO",
      icon: <Droplets className="w-8 h-8 text-[#007BFF]" />,
      title: "Pulido y lavado completo",
      description: "Tratamiento integral, brillo total.",
      features: ["Servicio completo", "Pulido 360°", "Encerado premium"]
    }
  ];

  return (
    <section id="servicios" className="premium-section bg-gradient-to-b from-[#000000] via-[#1C1C1C] to-[#000000]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-block">
            
            <h2 className="premium-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              PERFECCIÓN EN
              <span className="bg-gradient-to-r from-white to-[#C0C0C0] bg-clip-text text-transparent block">CADA SERVICIO</span>
            </h2>
          </div>
          <p className="text-xl text-[#C0C0C0] max-w-3xl mx-auto leading-relaxed">
            Transformamos tu vehículo con servicios profesionales de la más alta calidad, 
            utilizando productos premium y técnicas especializadas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="premium-glass border-[#808080] hover:border-[#0056b3]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group bg-[#000000]/40"
            >
              <CardHeader className="text-center pb-4">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide bg-gradient-to-r from-[#007BFF]/20 to-[#0056b3]/20 text-[#007BFF] rounded-full border border-[#0056b3]/30">
                    {service.category}
                  </span>
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-[#007BFF]/10 to-[#0056b3]/10 border border-[#0056b3]/20 group-hover:border-[#007BFF]/50 transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <CardTitle className="text-white text-sm font-bold leading-tight mb-3 min-h-[40px]">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-[#C0C0C0] text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-2">
                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-[#C0C0C0] text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#007BFF] to-[#0056b3] mt-2 mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* General CTA Button */}
        <div className="text-center mt-20">
          <Button 
            size="lg"
            className="premium-button text-white px-12 py-4 text-lg font-semibold flex items-center justify-center gap-3 mx-auto bg-gradient-to-r from-[#007BFF] to-[#0056b3] hover:from-[#0056b3] hover:to-[#007BFF] transition-all duration-500"
            onClick={() => window.open('https://wa.me/573117749365?text=Hola%2C%20quiero%20cotizar%20un%20servicio%20de%20detailing', '_blank')}
          >
            <Phone className="w-6 h-6" />
            COTIZAR
          </Button>
        </div>

      </div>
    </section>
  );
}