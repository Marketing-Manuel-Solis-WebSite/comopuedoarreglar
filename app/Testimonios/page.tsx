'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Quote, Star, ChevronRight, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import ContactForm from '../components/ContactForm'; // Asumiendo que tienes este componente
import Header from '../components/Header';
import Footer from '../components/Footer';

// --- DATOS DE TESTIMONIOS ---
// He extraído las imágenes y datos de tu HTML original.
// Para el demo, usaré el video de Alma para todos, pero puedes cambiar la URL en 'videoUrl'.
const testimonialsData = [
  {
    id: 'alma-garcia',
    name: 'Alma García',
    category: 'Inmigración',
    image: 'https://manuelsolis.com/wp-content/uploads/2023/12/866963ca424e7b42258ff5da5f5f0426-1024x576.png',
    videoUrl: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4',
    quote: "Gracias a la experiencia del equipo, pude alcanzar el resultado que tanto anhelaba.",
    fullStory: `Enfrentar un proceso de inmigración puede ser abrumador, pero contar con el apoyo adecuado hace toda la diferencia. Alma García, como muchos inmigrantes en Estados Unidos, soñaba con regularizar su estatus y asegurar un mejor futuro para su familia.
    
    En su testimonio, Alma expresa su profundo agradecimiento por la ayuda recibida. Gracias a la experiencia, compromiso y dedicación del equipo legal, pudo enfrentar el proceso con confianza.
    
    Uno de los aspectos más destacados fue la atención personalizada y la asesoría clara y honesta que recibió. El equipo legal no solo se encargó de su proceso con profesionalismo, sino que también le brindó tranquilidad y apoyo en cada etapa.`
  },
  {
    id: 'alma-alvarado',
    name: 'Alma Alvarado',
    category: 'Accidentes',
    image: 'https://manuelsolis.com/wp-content/uploads/2023/12/d7695fc0fb2a14bad98487f70444d63c-1024x572.png',
    videoUrl: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4', // Placeholder
    quote: "Recuperé la tranquilidad después de mi accidente gracias a Manuel Solís.",
    fullStory: "Después de un grave accidente automovilístico, Alma se sentía perdida entre facturas médicas y aseguradoras agresivas. Nuestro equipo intervino de inmediato, asegurando que recibiera la compensación máxima permitida por la ley, permitiéndole concentrarse únicamente en su recuperación."
  },
  {
    id: 'carlos-zuniga',
    name: 'Carlos Zúñiga',
    category: 'Ley Criminal',
    image: 'https://manuelsolis.com/wp-content/uploads/2023/12/ad195c8834bedc323ce1960b0f43a331-1024x576.png',
    videoUrl: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4', // Placeholder
    quote: "Pelearon por mis derechos cuando nadie más quería escucharme.",
    fullStory: "Carlos enfrentaba cargos que amenazaban su libertad y su permanencia en el país. La defensa agresiva y estratégica de nuestros abogados penalistas logró desestimar los cargos más graves, devolviéndole su vida y su libertad."
  },
  {
    id: 'cecilia-limon',
    name: 'Cecilia Limón',
    category: 'Familia',
    image: 'https://manuelsolis.com/wp-content/uploads/2024/01/cecilia-limon-1024x521.jpg',
    videoUrl: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4', // Placeholder
    quote: "Unieron a mi familia de nuevo. No tengo palabras para agradecerles.",
    fullStory: "Cecilia buscaba la reunificación familiar después de años de separación. A través de una petición familiar compleja, logramos aprobar su caso en tiempo récord."
  },
  {
    id: 'dagoberto',
    name: 'Dagoberto Limón',
    category: 'Inmigración',
    image: 'https://SolisPullZone.b-cdn.net/dagoberto-limon.jpeg',
    videoUrl: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4', // Placeholder
    quote: "El proceso fue claro y rápido. Ahora soy residente permanente.",
    fullStory: "Dagoberto pensó que su caso estaba perdido debido a una entrada antigua. Nuestros expertos analizaron su historial y encontraron una vía legal que otros abogados habían pasado por alto."
  },
  {
    id: 'doris',
    name: 'Doris Licona',
    category: 'Visa U',
    image: 'https://SolisPullZone.b-cdn.net/images/doris-licona.jpeg',
    videoUrl: 'https://SolisPullZone.b-cdn.net/alma-garcia-testimonial.mp4', // Placeholder
    quote: "Me ayudaron a obtener mi Visa U después de ser víctima de un crimen.",
    fullStory: "Como víctima de un crimen violento, Doris tenía miedo de denunciar. Nosotros la guiamos, le brindamos protección y tramitamos su Visa U exitosamente."
  }
];

export default function TestimonialsPage() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonialsData[0] | null>(null);

  return (
    <main className="min-h-screen bg-[#002342] text-white selection:bg-[#B2904D] selection:text-white flex flex-col">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Fondo Decorativo Abstracto */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#B2904D] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
            <div className="absolute top-1/2 -right-24 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#B2904D]/20 border border-[#B2904D]/50 text-[#B2904D] text-sm font-bold tracking-widest mb-6 uppercase backdrop-blur-sm">
              Resultados Reales
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#B2904D]">
              Historias de Éxito
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Detrás de cada caso hay una familia, un sueño y un futuro. Estas son las voces de quienes confiaron en nosotros para luchar por sus derechos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- GRID DE TESTIMONIOS --- */}
      <section className="px-4 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedTestimonial(item)}
                className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#B2904D]/50 transition-all duration-500 shadow-2xl"
              >
                {/* Imagen de Fondo */}
                <Image 
                  src={item.image} 
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002342] via-[#002342]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Icono Play Central (aparece en hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                    <div className="w-16 h-16 rounded-full bg-[#B2904D]/90 backdrop-blur-md flex items-center justify-center shadow-lg pl-1">
                        <Play fill="white" size={32} />
                    </div>
                </div>

                {/* Contenido Texto (Bottom) */}
                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[#B2904D] text-xs font-bold tracking-wider uppercase mb-2 block">
                        {item.category}
                    </span>
                    <h3 className="text-3xl font-serif font-bold text-white mb-2 leading-tight">
                        {item.name}
                    </h3>
                    <div className="w-12 h-1 bg-[#B2904D] mb-4 rounded-full group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        "{item.quote}"
                    </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL DETALLE (WOW EFFECT) --- */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
          >
            {/* Botón Cerrar */}
            <button 
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-[#B2904D] text-white p-3 rounded-full transition-all duration-300 group"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform" />
            </button>

            {/* Contenedor del Modal */}
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-[#002342] w-full max-w-6xl h-auto max-h-[90vh] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row"
            >
                {/* COLUMNA IZQUIERDA: VIDEO */}
                <div className="w-full lg:w-2/3 bg-black relative group">
                    {selectedTestimonial.videoUrl ? (
                        <video 
                            src={selectedTestimonial.videoUrl} 
                            controls 
                            autoPlay 
                            className="w-full h-full object-contain bg-black"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-500">
                            Video no disponible
                        </div>
                    )}
                </div>

                {/* COLUMNA DERECHA: TEXTO */}
                <div className="w-full lg:w-1/3 p-8 md:p-10 overflow-y-auto bg-gradient-to-b from-[#002b52] to-[#002342]">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-[#B2904D]/20 rounded-lg">
                            <Quote className="text-[#B2904D]" size={24} />
                        </div>
                        <span className="text-[#B2904D] font-bold tracking-widest text-xs uppercase">
                            Testimonio Verificado
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                        {selectedTestimonial.name}
                    </h2>

                    <div className="prose prose-invert prose-p:text-gray-300 prose-p:font-light prose-p:leading-relaxed">
                        <p className="whitespace-pre-line">
                            {selectedTestimonial.fullStory}
                        </p>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                            <Star className="text-[#B2904D]" fill="#B2904D" size={18} />
                            Resultado
                        </h4>
                        <p className="text-sm text-gray-400 bg-black/20 p-4 rounded-xl border-l-4 border-[#B2904D]">
                            Gracias a la intervención de Manuel Solís, el caso fue resuelto favorablemente en tiempo récord.
                        </p>
                    </div>

                    {/* CTA dentro del modal */}
                    <a 
                        href="#consulta"
                        onClick={() => setSelectedTestimonial(null)} // Cierra modal y va al form
                        className="mt-8 w-full bg-[#B2904D] hover:bg-white hover:text-[#002342] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-[#B2904D]/20"
                    >
                        Quiero una consulta igual <ChevronRight size={20} />
                    </a>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SECCIÓN CTA Y FORMULARIO FINAL --- */}
      <section className="bg-white py-20 relative overflow-hidden" id="consulta">
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
                        Al igual que Alma, Carlos y Doris, usted merece ser escuchado y defendido. No deje que el miedo o la incertidumbre detengan su futuro. Llene el formulario y nuestro equipo analizará su caso de inmediato.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {['Evaluación Gratuita', 'Confidencialidad Total', 'Atención en su Idioma', 'Más de 30 años de experiencia'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-[#002342] font-medium">
                                <div className="w-6 h-6 rounded-full bg-[#B2904D]/20 flex items-center justify-center text-[#B2904D]">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Formulario */}
                <div className="bg-gray-50 p-8 rounded-3xl shadow-xl border border-gray-100 relative">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#B2904D] rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                    <h3 className="text-2xl font-bold text-[#002342] mb-6 text-center">Solicite su Consulta</h3>
                    <ContactForm />
                </div>

            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}