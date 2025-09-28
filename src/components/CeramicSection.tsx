import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CeramicSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1C1C1C] to-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #C0C0C0 50%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                PRECISIÓN
                <br />
                <span className="text-[#007BFF]">MOLECULAR</span>
              </motion.h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-[#007BFF] to-[#C0C0C0] mb-6"></div>
              
              <p className="text-[#C0C0C0] text-lg leading-relaxed mb-8">
                Tecnología de nano cerámica que protege tu auto de manchas, rayaduras y el paso del tiempo.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                "Protección duradera hasta 5 años",
                "Resistencia a rayos UV y químicos",
                "Efecto hidrofóbico superior",
                "Brillo excepcional y profundo"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-[#007BFF] rounded-full"></div>
                  <span className="text-white">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Tech specs */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#1C1C1C] to-black p-6 rounded-xl border border-gray-800"
            >
              <h4 className="text-[#007BFF] font-semibold mb-3">Especificaciones Técnicas</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[#C0C0C0]">Grosor:</span>
                  <span className="text-white ml-2">2-5 micrones</span>
                </div>
                <div>
                  <span className="text-[#C0C0C0]">Dureza:</span>
                  <span className="text-white ml-2">9H</span>
                </div>
                <div>
                  <span className="text-[#C0C0C0]">Hidrofobicidad:</span>
                  <span className="text-white ml-2">110°</span>
                </div>
                <div>
                  <span className="text-[#C0C0C0]">Garantía:</span>
                  <span className="text-white ml-2">2 años</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1694678505383-676d78ea3b96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBjZXJhbWljJTIwY29hdGluZyUyMHdhdGVyJTIwYmVhZGluZ3xlbnwxfHx8fDE3NTg4Mjk3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ceramic Coating Water Beading Effect"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-8 right-8 bg-[#007BFF]/20 backdrop-blur-sm border border-[#007BFF]/30 rounded-lg p-4"
              >
                <div className="text-white text-sm font-semibold">Nano Ceramic</div>
                <div className="text-[#007BFF] text-xs">Molecular Level</div>
              </motion.div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/20 to-transparent rounded-2xl blur-xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}