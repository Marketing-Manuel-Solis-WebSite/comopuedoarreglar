'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Play, Quote, Star, 
  ShieldCheck, ArrowRight, CheckCircle, 
  MessageSquare
} from 'lucide-react';
import Image from 'next/image';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import ContactForm from '../components/ContactForm'; 

const testimonials = [
  {
    id: 'alma-alvarado',
    name: 'Alma Alvarado',
    category: 'Accidentes',
    image: 'https://manuelsolis.com/wp-content/uploads/2023/12/d7695fc0fb2a14bad98487f70444d63c.png',
    video: 'https://SolisPullZone.b-cdn.net/alma-alvarado.mp4',
    quote: "Recuperé la tranquilidad después de mi accidente.",
    story: "Después de un grave accidente, Alma se sentía perdida. Nuestro equipo intervino para asegurar la compensación máxima."
  },
  {
    id: 'alma-garcia',
    name: 'Alma García',
    category: 'Inmigración',
    image: 'https://manuelsolis.com/wp-content/uploads/2023/12/866963ca424e7b42258ff5da5f5f0426.png',
    video: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4',
    quote: "Gracias al equipo pude alcanzar el resultado que anhelaba.",
    story: "Alma soñaba con regularizar su estatus. Gracias a la experiencia del equipo legal, pudo enfrentar el proceso con éxito."
  },
  {
    id: 'carlos-zuniga',
    name: 'Carlos Zúñiga',
    category: 'Ley Criminal',
    image: 'https://manuelsolis.com/wp-content/uploads/2023/12/ad195c8834bedc323ce1960b0f43a331.png',
    video: 'https://SolisPullZone.b-cdn.net/carlos-zuniga-testimonial.mp4',
    quote: "Pelearon por mis derechos cuando nadie más quería escucharme.",
    story: "Carlos enfrentaba cargos que amenazaban su libertad. La defensa estratégica logró desestimar los cargos más graves."
  },
  {
    id: 'cecilia-limon',
    name: 'Cecilia Limón',
    category: 'Familia',
    image: 'https://manuelsolis.com/wp-content/uploads/2024/01/cecilia-limon.jpg',
    video: 'https://SolisPullZone.b-cdn.net/cecilia-limon.mp4',
    quote: "Unieron a mi familia de nuevo.",
    story: "Cecilia buscaba la reunificación familiar. Logramos aprobar su caso mediante una petición familiar compleja."
  },
  {
    id: 'dagoberto-limon',
    name: 'Dagoberto Limón',
    category: 'Inmigración',
    image: 'https://SolisPullZone.b-cdn.net/dagoberto-limon.jpeg',
    video: 'https://SolisPullZone.b-cdn.net/dagoberto-limon.mp4',
    quote: "El proceso fue claro y rápido.",
    story: "Dagoberto pensó que su caso estaba perdido. Nuestros expertos encontraron una vía legal que otros habían pasado por alto."
  },
  {
    id: 'doris-licona',
    name: 'Doris Licona',
    category: 'Visa U',
    image: 'https://SolisPullZone.b-cdn.net/images/doris-licona.jpeg',
    video: 'https://SolisPullZone.b-cdn.net/doris-licona-testimonial.mp4',
    quote: "Me ayudaron después de ser víctima de un crimen.",
    story: "Como víctima de un crimen, Doris tenía miedo. La guiamos y tramitamos su Visa U exitosamente."
  },
  {
    id: 'juana-edith',
    name: 'Juana Edith Pérez',
    category: 'Residencia',
    image: 'https://SolisPullZone.b-cdn.net/images/juana-edith-perez.jpeg',
    video: 'https://SolisPullZone.b-cdn.net/juana-edith-perez-testimonial.mp4',
    quote: "Un servicio honesto y transparente.",
    story: "Juana Edith destaca la honestidad con la que se manejó su caso, permitiéndole planificar su futuro con seguridad."
  },
  {
    id: 'leonardo-aguirre',
    name: 'Leonardo Aguirre',
    category: 'Permiso de Trabajo',
    image: 'https://SolisPullZone.b-cdn.net/images/leonardo-aguirre.jpeg',
    video: 'https://SolisPullZone.b-cdn.net/leonardo-aguirre-testimonial.mp4',
    quote: "Ahora puedo trabajar legalmente.",
    story: "Obtener su permiso de trabajo cambió la vida de Leonardo, abriéndole puertas a mejores oportunidades laborales."
  },
  {
    id: 'norma-mendoza',
    name: 'Norma Mendoza',
    category: 'Ciudadanía',
    image: 'https://SolisPullZone.b-cdn.net/images/norma-mendoza.jpeg',
    video: 'https://SolisPullZone.b-cdn.net/norma-mendoza.mp4',
    quote: "El sueño americano hecho realidad.",
    story: "Norma completó su proceso de naturalización con nuestra guía, convirtiéndose orgullosamente en ciudadana."
  },
  {
    id: 'xiomara-zamora',
    name: 'Xiomara Zamora',
    category: 'Inmigración',
    image: 'https://SolisPullZone.b-cdn.net/images/xiomara-zamora.jpeg',
    video: 'https://SolisPullZone.b-cdn.net/xiomara-zamora-testimonial.mp4',
    quote: "No se rindieron con mi caso.",
    story: "A pesar de las dificultades iniciales, el equipo legal persistió hasta encontrar la solución adecuada."
  }
];

export default function TestimonialsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedTestimonial = testimonials.find(t => t.id === selectedId);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedId]);

  return (
    <div className="min-h-screen bg-white text-[#002342] font-sans selection:bg-[#B2904D] selection:text-white overflow-x-hidden">
      
      <Header />

      {/* --- BACKGROUND DECORATION (SOLO ARRIBA, NO FIXED) --- */}
      {/* Esto elimina la mancha blanca al bajar */}
      <div className="absolute top-0 left-0 w-full h-[1000px] overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] bg-[#B2904D]/10 rounded-full blur-[120px] opacity-60" />
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-[#002342]/5 rounded-full blur-[100px]" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-44 pb-16 px-4 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-gray-200/60 backdrop-blur-xl shadow-sm mb-8">
               <Star size={14} className="text-[#B2904D] fill-[#B2904D]" />
               <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">Casos Reales</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#002342] tracking-tight mb-6 drop-shadow-sm">
              Historias de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B2904D] to-[#D4AF37]">Éxito</span>
            </h1>
            
            <p className="text-gray-500 text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Resultados que cambian vidas. Personas reales que confiaron su futuro en nosotros.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- GRID FLOTANTE TIPO ESPEJO (GLASS) --- */}
      <section className="px-4 pb-32 relative z-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {testimonials.map((item, index) => (
            <motion.div
              layoutId={`card-${item.id}`}
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedId(item.id)}
              className="group cursor-pointer h-[480px]"
            >
              {/* TARJETA ESTILO ESPEJO / iOS */}
              <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-white border border-white/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(178,144,77,0.25)] transition-all duration-500 flex flex-col">
                
                {/* Imagen Superior */}
                <div className="relative h-[280px] w-full overflow-hidden bg-gray-50">
                   <Image 
                     src={item.image} 
                     alt={item.name} 
                     fill 
                     className="object-cover transition-transform duration-1000 group-hover:scale-105"
                     unoptimized
                   />
                   {/* Badge Flotante */}
                   <div className="absolute top-5 left-5">
                      <div className="bg-white/90 backdrop-blur-md border border-white/50 text-[#002342] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                         {item.category}
                      </div>
                   </div>
                   
                   {/* Play Button Overlay */}
                   <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors duration-500">
                      <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md border border-white/60 flex items-center justify-center text-white scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-lg">
                         <Play fill="white" size={20} className="ml-1" />
                      </div>
                   </div>
                </div>

                {/* Contenido Inferior (Blanco Puro) */}
                <div className="p-8 flex flex-col justify-between flex-grow bg-white relative">
                   {/* Degradado superior muy sutil para conectar */}
                   <div className="absolute top-[-20px] left-0 w-full h-20 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />
                   
                   <div className="relative z-20">
                     <h3 className="text-2xl font-serif font-bold text-[#002342] mb-3 group-hover:text-[#B2904D] transition-colors">
                       {item.name}
                     </h3>
                     <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className="text-[#B2904D] fill-[#B2904D]" />
                        ))}
                     </div>
                     <p className="text-gray-500 text-sm font-light italic line-clamp-2">
                       "{item.quote}"
                     </p>
                   </div>
                   
                   <div className="relative z-20 pt-4 flex items-center text-[#002342] text-xs font-bold uppercase tracking-wider group/btn">
                      Ver Historia Completa
                      <ArrowRight size={14} className="ml-2 text-[#B2904D] group-hover/btn:translate-x-1 transition-transform" />
                   </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* --- MODAL EXPANDIDO --- */}
      <AnimatePresence>
        {selectedId && selectedTestimonial && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
            
            {/* Backdrop Limpio */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-white/80 backdrop-blur-xl"
            />

            <motion.div 
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-7xl h-[80vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row z-10 ring-1 ring-black/5"
            >
              {/* Botón Cerrar */}
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                className="absolute top-6 right-6 z-50 bg-white/20 hover:bg-white text-white hover:text-[#002342] p-3 rounded-full backdrop-blur-md transition-all duration-300 border border-white/30"
              >
                <X size={24} />
              </button>

              {/* Video (Izq) */}
              <div className="w-full lg:w-2/3 h-full bg-black relative flex items-center justify-center">
                 <video 
                    ref={videoRef}
                    src={selectedTestimonial.video} 
                    className="w-full h-full object-contain bg-black"
                    controls
                    autoPlay
                    playsInline
                    poster={selectedTestimonial.image}
                 />
              </div>

              {/* Info (Der) - Fondo Blanco */}
              <div className="w-full lg:w-1/3 h-full bg-white p-10 flex flex-col relative overflow-y-auto border-l border-gray-100">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                      <span className="inline-block text-xs font-bold text-[#B2904D] uppercase tracking-widest mb-2">Testimonio</span>
                      <h2 className="text-4xl font-serif font-bold text-[#002342] mb-6">
                        {selectedTestimonial.name}
                      </h2>

                      <div className="relative pl-5 border-l-2 border-[#B2904D] mb-8">
                         <p className="text-lg italic text-gray-600 font-medium leading-relaxed">
                           "{selectedTestimonial.quote}"
                         </p>
                      </div>

                      <div className="mb-10">
                        <p className="text-gray-500 text-sm leading-relaxed">
                           {selectedTestimonial.story}
                        </p>
                      </div>

                      <div className="mt-auto">
                         <a href="#contacto" onClick={() => setSelectedId(null)} className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#002342] text-white font-bold shadow-lg hover:bg-[#B2904D] transition-colors duration-300">
                            <MessageSquare size={18} />
                            Solicitar Consulta
                         </a>
                      </div>
                  </motion.div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- FORMULARIO LIMPIO (Sin manchas, Fondo Blanco Puro) --- */}
      <section id="contacto" className="relative py-32 bg-white z-10">
         <div className="max-w-3xl mx-auto px-4">
            
            {/* Título Minimalista */}
            <div className="text-center mb-12">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#002342]">
                 Inicie su Consulta
               </h2>
            </div>

            {/* Contenedor del Formulario Elevado */}
            <div className="bg-white rounded-[2.5rem] shadow-[0_0_50px_-10px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-12">
                <ContactForm />
            </div>

         </div>
      </section>

      <Footer />
    </div>
  );
}