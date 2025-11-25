'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Play, Quote, Star, 
  ChevronRight, MessageSquare, ShieldCheck, 
  ArrowRight, CheckCircle
} from 'lucide-react';
import Image from 'next/image';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import ContactForm from '../components/ContactForm'; // Asumiendo existencia

// --- DATOS EXTRAÍDOS DEL SITIO WEB ---
// Se han mapeado las imágenes encontradas en el HTML proporcionado.
// Nota: Las URLs de video son placeholders basados en tu ejemplo, 
// ya que el HTML estático no contenía las rutas directas a los .mp4.

const testimonials = [
  {
    id: 'alma-alvarado',
    name: 'Alma Alvarado',
    category: 'Accidentes',
    image: 'https://manuelsolis.com/wp-content/uploads/2023/12/d7695fc0fb2a14bad98487f70444d63c-1024x572.png',
    video: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4', // Placeholder
    quote: "Recuperé la tranquilidad después de mi accidente.",
    story: "Después de un grave accidente automovilístico, Alma se sentía perdida entre facturas médicas. Nuestro equipo intervino para asegurar la compensación máxima permitida."
  },
  {
    id: 'alma-garcia',
    name: 'Alma García',
    category: 'Inmigración',
    image: 'https://manuelsolis.com/wp-content/uploads/2023/12/866963ca424e7b42258ff5da5f5f0426-1024x576.png',
    video: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4',
    quote: "Gracias al equipo pude alcanzar el resultado que anhelaba.",
    story: "Enfrentar un proceso de inmigración puede ser abrumador. Alma soñaba con regularizar su estatus. Gracias a la experiencia y dedicación del equipo legal, pudo enfrentar el proceso con confianza y éxito."
  },
  {
    id: 'carlos-zuniga',
    name: 'Carlos Zúñiga',
    category: 'Ley Criminal',
    image: 'https://manuelsolis.com/wp-content/uploads/2023/12/ad195c8834bedc323ce1960b0f43a331-1024x576.png',
    video: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4', // Placeholder
    quote: "Pelearon por mis derechos cuando nadie más quería escucharme.",
    story: "Carlos enfrentaba cargos que amenazaban su libertad. La defensa agresiva y estratégica de nuestros abogados logró desestimar los cargos más graves."
  },
  {
    id: 'cecilia-limon',
    name: 'Cecilia Limón',
    category: 'Familia',
    image: 'https://manuelsolis.com/wp-content/uploads/2024/01/cecilia-limon-1024x521.jpg',
    video: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4', // Placeholder
    quote: "Unieron a mi familia de nuevo.",
    story: "Cecilia buscaba la reunificación familiar después de años de separación. Logramos aprobar su caso mediante una petición familiar compleja."
  },
  {
    id: 'dagoberto-limon',
    name: 'Dagoberto Limón',
    category: 'Inmigración',
    image: 'https://SolisPullZone.b-cdn.net/dagoberto-limon.jpeg',
    video: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4', // Placeholder
    quote: "El proceso fue claro y rápido.",
    story: "Dagoberto pensó que su caso estaba perdido. Nuestros expertos analizaron su historial y encontraron una vía legal que otros habían pasado por alto."
  },
  {
    id: 'doris-licona',
    name: 'Doris Licona',
    category: 'Visa U',
    image: 'https://SolisPullZone.b-cdn.net/images/doris-licona.jpeg',
    video: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4', // Placeholder
    quote: "Me ayudaron después de ser víctima de un crimen.",
    story: "Como víctima de un crimen, Doris tenía miedo. La guiamos, le brindamos protección y tramitamos su Visa U exitosamente."
  },
  {
    id: 'juana-edith',
    name: 'Juana Edith Pérez',
    category: 'Residencia',
    image: 'https://SolisPullZone.b-cdn.net/images/juana-edith-perez.jpeg',
    video: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4', // Placeholder
    quote: "Un servicio honesto y transparente.",
    story: "Juana Edith destaca la honestidad con la que se manejó su caso de residencia, permitiéndole planificar su futuro con seguridad."
  },
  {
    id: 'leonardo-aguirre',
    name: 'Leonardo Aguirre',
    category: 'Permiso de Trabajo',
    image: 'https://SolisPullZone.b-cdn.net/images/leonardo-aguirre.jpeg',
    video: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4', // Placeholder
    quote: "Ahora puedo trabajar legalmente en este país.",
    story: "Obtener su permiso de trabajo cambió la vida de Leonardo, abriéndole puertas a mejores oportunidades laborales."
  },
  {
    id: 'norma-mendoza',
    name: 'Norma Mendoza',
    category: 'Ciudadanía',
    image: 'https://SolisPullZone.b-cdn.net/images/norma-mendoza.jpeg',
    video: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4', // Placeholder
    quote: "El sueño americano hecho realidad.",
    story: "Norma completó su proceso de naturalización con nuestra guía, convirtiéndose orgullosamente en ciudadana estadounidense."
  },
  {
    id: 'xiomara-zamora',
    name: 'Xiomara Zamora',
    category: 'Inmigración',
    image: 'https://SolisPullZone.b-cdn.net/images/xiomara-zamora.jpeg',
    video: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4', // Placeholder
    quote: "No se rindieron con mi caso.",
    story: "A pesar de las dificultades iniciales, el equipo legal persistió hasta encontrar la solución adecuada para Xiomara."
  }
];

export default function TestimonialsPage() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

  const handleImageError = (e: any) => {
     e.target.src = 'https://manuelsolis.com/wp-content/uploads/2024/11/logo-manuelsolis.png';
     e.target.style.objectFit = 'contain';
     e.target.style.padding = '40px';
     e.target.style.backgroundColor = '#002342';
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#001529] text-white relative selection:bg-[#B2904D] selection:text-white font-sans">
      
      <Header />

      {/* --- HERO SECTION (Estilo AttorneysPage) --- */}
      <section className="relative pt-40 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[#002342] opacity-95"></div>
             {/* Decoración Gold Blur */}
             <div className="absolute top-0 right-1/4 w-[60vw] h-[500px] bg-[#B2904D] opacity-10 rounded-full blur-[120px] animate-pulse"></div>
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B2904D]/30 bg-[#B2904D]/10 backdrop-blur-md mb-6">
                <Star size={14} className="text-[#B2904D]" fill="#B2904D" />
                <span className="text-[#B2904D] text-xs font-bold tracking-widest uppercase">Resultados Comprobados</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Historias de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B2904D] to-[#e6c67e]">Éxito</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Detrás de cada caso hay una familia, un sueño y un futuro. Estas son las voces reales de quienes confiaron en nosotros.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- GRID DE TESTIMONIOS (Estilo Card de Abogados) --- */}
      <section className="px-4 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                onClick={() => setSelectedTestimonial(item)}
                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-[#002b52]/30 backdrop-blur-sm hover:border-[#B2904D]/50 hover:shadow-[0_0_30px_rgba(178,144,77,0.15)] transition-all duration-500"
              >
                {/* Imagen */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                   <Image 
                      src={item.image} 
                      alt={item.name}
                      fill
                      className="object-cover"
                      onError={handleImageError}
                      unoptimized
                   />
                </div>

                {/* Overlay Oscuro y Gradiente */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001529] via-[#001529]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Icono Play Central */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 z-20">
                    <div className="w-16 h-16 rounded-full bg-[#B2904D]/90 backdrop-blur-md flex items-center justify-center shadow-lg pl-1 border border-white/20">
                        <Play fill="white" size={28} className="text-white" />
                    </div>
                </div>

                {/* Contenido Texto */}
                <div className="absolute bottom-0 left-0 w-full p-6 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0 z-20">
                   <div className="w-12 h-1 bg-[#B2904D] mb-3 rounded-full group-hover:w-20 transition-all duration-500"></div>
                   
                   <p className="text-[#B2904D] text-xs font-bold tracking-widest uppercase mb-1 flex items-center gap-2">
                     <ShieldCheck size={14} /> {item.category}
                   </p>

                   <h3 className="text-2xl font-serif font-bold text-white leading-tight mb-3 drop-shadow-md">
                     {item.name}
                   </h3>
                   
                   <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                     <p className="text-gray-300 text-sm line-clamp-2 italic font-light">
                       "{item.quote}"
                     </p>
                   </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* --- MODAL DE DETALLE (Reutilizando Estructura Attorneys) --- */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-4 bg-black/90 backdrop-blur-xl overflow-hidden"
            onClick={() => setSelectedTestimonial(null)} 
          >
             <motion.div 
               initial={{ scale: 0.9, opacity: 0, y: 50 }}
               animate={{ scale: 1, opacity: 1, y: 0 }}
               exit={{ scale: 0.9, opacity: 0, y: 50 }}
               transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
               onClick={(e) => e.stopPropagation()} 
               className="bg-[#002342] w-full md:max-w-6xl h-full md:h-auto md:max-h-[90vh] md:rounded-3xl border-0 md:border border-white/10 shadow-2xl flex flex-col lg:flex-row relative overflow-hidden"
             >
                <button 
                  onClick={() => setSelectedTestimonial(null)}
                  className="absolute top-4 right-4 z-50 bg-black/40 hover:bg-[#B2904D] text-white p-2 rounded-full transition-all border border-white/10 group"
                >
                  <X size={24} className="group-hover:rotate-90 transition-transform" />
                </button>

                {/* Columna Izquierda: Video Player */}
                <div className="w-full lg:w-7/12 bg-black relative h-[40vh] lg:h-auto flex items-center justify-center group">
                    {selectedTestimonial.video ? (
                         <video 
                           src={selectedTestimonial.video} 
                           controls 
                           autoPlay 
                           playsInline
                           className="w-full h-full object-contain bg-black"
                           poster={selectedTestimonial.image} 
                         />
                    ) : (
                         <div className="text-center p-8">
                             <Image 
                               src={selectedTestimonial.image} 
                               alt={selectedTestimonial.name}
                               fill
                               className="object-cover opacity-50"
                             />
                             <div className="relative z-10 p-4 bg-black/50 rounded-xl">
                               <p className="text-white">Video no disponible momentáneamente.</p>
                             </div>
                         </div>
                    )}
                </div>

                {/* Columna Derecha: Historia y Detalles */}
                <div className="w-full lg:w-5/12 p-8 lg:p-10 overflow-y-auto bg-gradient-to-br from-[#002342] to-[#001a33] relative flex flex-col">
                    
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                             <div className="px-3 py-1 rounded bg-[#B2904D]/20 text-[#B2904D] text-xs font-bold uppercase tracking-wider border border-[#B2904D]/30 flex items-center gap-2">
                                 <CheckCircle size={12} /> Caso Exitoso
                             </div>
                        </div>
                        <h2 className="text-4xl font-serif font-bold text-white mb-1">
                          {selectedTestimonial.name}
                        </h2>
                        <p className="text-gray-400 text-lg font-light flex items-center gap-2">
                           <ShieldCheck size={18} className="text-[#B2904D]" /> {selectedTestimonial.category}
                        </p>
                    </div>

                    <div className="mb-8 relative">
                        <Quote className="absolute -left-2 -top-4 text-[#B2904D]/20 w-12 h-12 transform -scale-x-100" />
                        <p className="text-[#B2904D] text-xl italic font-medium pl-6 relative z-10 border-l-2 border-[#B2904D]/50 leading-relaxed">
                            "{selectedTestimonial.quote}"
                        </p>
                    </div>

                    <div className="prose prose-invert prose-p:text-gray-300 prose-p:font-light prose-p:leading-relaxed prose-sm mb-8">
                        <p>{selectedTestimonial.story}</p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/10">
                        <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">¿Tiene un caso similar?</h4>
                        <a href="#contacto" onClick={() => setSelectedTestimonial(null)} className="w-full bg-gradient-to-r from-[#B2904D] to-[#9f7d3d] hover:from-white hover:to-white hover:text-[#002342] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-black/40 group">
                            <MessageSquare size={20} />
                            Evaluación de Caso Gratuita
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SECCIÓN FORMULARIO --- */}
      <section id="contacto" className="bg-white py-20 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#002342] to-[#B2904D]"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Texto Inspirador */}
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-[#002342] flex items-center justify-center text-white shadow-xl">
                            <MessageSquare size={32} />
                        </div>
                        <div>
                            <span className="text-[#B2904D] font-bold uppercase tracking-wider text-sm">Su turno</span>
                            <h2 className="text-4xl font-serif font-bold text-[#002342]">Escriba su propia historia de éxito</h2>
                        </div>
                    </div>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Al igual que {testimonials[0].name} y {testimonials[1].name}, usted merece ser escuchado y defendido. No deje que el miedo o la incertidumbre detengan su futuro.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {['Evaluación Gratuita', 'Confidencialidad Total', 'Atención en su Idioma', 'Más de 30 años de experiencia'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-[#002342] font-medium">
                                <CheckCircle size={20} className="text-[#B2904D]" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Formulario */}
                <div className="bg-gray-50 p-8 rounded-3xl shadow-xl border border-gray-100 relative">
                    <h3 className="text-2xl font-bold text-[#002342] mb-6 text-center">Solicite su Consulta</h3>
                    <ContactForm />
                </div>

            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}