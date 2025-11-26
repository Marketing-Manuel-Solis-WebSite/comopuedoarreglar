'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  PhoneCall,
  ArrowRight,
  Car,
  Truck,
  Stethoscope,
  Zap,
  HardHat,
  CheckCircle2,
  Scale,
  FileText,
  HandCoins,
  MessageSquare,
  Star,
  Quote
} from 'lucide-react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

// --- DATA ORIGINAL (NO NEGOCIABLE) ---
const mainCases = [
  {
    id: 'auto',
    title: "Accidentes Automovilísticos",
    subtitle: "Colisiones y Lesiones Graves",
    icon: Car,
    gradient: "from-blue-500/10 via-cyan-500/10 to-blue-600/10",
    position: "col-span-2 row-span-2",
    content: {
      intro: "¿Herido y buscando compensación por un accidente de vehículo?",
      description: "Las lesiones causadas por una colisión pueden no mostrarse o sentirse durante días, o pueden ser obvias y requerir atención médica inmediata. Las lesiones, como las de la cabeza y, sobretodo, el cerebro, pueden causar sufrimiento de por vida. Incluso después de sanar físicamente, puedes experimentar un trauma emocional y ansiedad que pueden seguirte durante años.",
      solution: "En las Oficinas del Abogado Manuel Solís, le podemos ayudar a negociar con la compañía de seguros, encargando estudios médicos y pruebas independientes que permitan conocer los daños reales, tanto los actuales como los que puedan hacerse evidentes en el futuro, fruto de las lesiones sufridas durante el accidente."
    }
  },
  {
    id: 'trailer',
    title: "Accidentes de 18 Ruedas",
    subtitle: "Tráilers y Vehículos Comerciales",
    icon: Truck,
    gradient: "from-purple-500/10 via-pink-500/10 to-purple-600/10",
    position: "col-span-1 row-span-2",
    content: {
      intro: "¿Ha quedado usted o un miembro de su familia herido en un accidente con un camión de 18 ruedas?",
      description: "Es posible que tenga derecho a una indemnización significativa. Usted no debe verse destinado a un futuro de dolor, sufrimiento y deudas a causa de un accidente. Es un hecho que la calidad de su vida de ahora en adelante se verá afectada significativamente por la cantidad de indemnización que reciba.",
      extraInfo: "Podemos ayudar a descubrir las razones detrás del accidente para que usted pueda tener algo de resolución y seguir adelante.",
      quotes: [
        {
          text: "Su abuelo todavía les compra regalos de Navidad.",
          context: "Ella perdió a su papá. Ayudamos a su familia a conseguir una indemnización. Todos los años usan parte del dinero para comprar regalos a los nietos."
        }
      ],
      offerAlert: "Si ya ha recibido una oferta, llámenos. No es raro recibir ofertas de 10x o 20x más cuando nos contrata."
    }
  },
  {
    id: 'medica',
    title: "Negligencia Médica",
    subtitle: "Errores Médicos y Farmacéuticos",
    icon: Stethoscope,
    gradient: "from-red-500/10 via-orange-500/10 to-red-600/10",
    position: "col-span-1 row-span-2",
    content: {
      intro: "¿Herido por negligencia médica o por un producto farmacéutico?",
      description: "A veces, una mala experiencia debida a una enfermedad o un accidente puede ser aun peor si no recibimos un trato profesional por parte del médico o el hospital que supuestamente debe ayudarnos. Podría ser que incluso usted sospeche que el fallecimiento de un ser querido posiblemente se deba a una mala decisión.",
      solution: "Si usted cree que usted o un ser querido no ha recibido un trato profesional y ha sufrido daños, podemos estudiar su caso para saber si tiene derecho a reclamar una indemnización por su sufrimiento."
    }
  },
  {
    id: 'explosion',
    title: "Explosión de Plantas",
    subtitle: "Industriales y Refinerías",
    icon: Zap,
    gradient: "from-yellow-500/10 via-amber-500/10 to-yellow-600/10",
    position: "col-span-1 row-span-2",
    content: {
      intro: "Es posible que tenga derecho a una indemnización significativa.",
      description: "Las explosiones de plantas parecen estar ocurriendo con demasiada frecuencia en estos días. Las explosiones pueden ser causadas por muchos factores, por lo que es necesario realizar una investigación exhaustiva para determinar la causa.",
      solution: "Nuestro equipo de abogados con experiencia puede ayudar a investigar y ayudar a los heridos a comprender lo que sucedió y buscar justicia por sus lesiones."
    }
  },
  {
    id: 'trabajo',
    title: "Lesiones y Accidentes en el Trabajo",
    subtitle: "Construcción, Fábricas y Más",
    icon: HardHat,
    gradient: "from-green-500/10 via-emerald-500/10 to-green-600/10",
    position: "col-span-2 row-span-2",
    content: {
      intro: "¿Sufriste una lesión o accidente en tu trabajo?",
      description: "Ayudamos a trabajadores que se esfuerzan cada día. Miles de inmigrantes realizan trabajos físicos y lamentablemente sufren accidentes. Creemos que nadie debe enfrentar esto solo.",
      subTitle: "Atendemos reclamos por:",
      subPoints: [
        "Lesiones en construcción o demolición",
        "Caídas o golpes durante el trabajo",
        "Uso de maquinaria o herramientas defectuosas",
        "Lesiones de espalda, hombro o rodillas",
        "Accidentes en fábricas o bodegas",
        "Falta de equipo o medidas de seguridad"
      ],
      benefitsTitle: "Beneficios de una Compensación:",
      benefits: [
        "Cubrir tratamientos y rehabilitación",
        "Recuperar ingresos perdidos",
        "Recibir apoyo si no puedes trabajar",
        "Mantener estabilidad económica para tu familia"
      ],
      closing: "No es un favor, es tu derecho. No importa tu estatus migratorio."
    }
  }
];

const processSteps = [
  { id: 1, title: "Contacto", icon: PhoneCall, desc: "Llámanos y obtén orientación legal." },
  { id: 2, title: "Análisis", icon: FileText, desc: "Analizamos tu caso y revisamos la evidencia." },
  { id: 3, title: "Negociación", icon: Scale, desc: "Negociamos duramente con la aseguradora o empleador." },
  { id: 4, title: "Resultados", icon: HandCoins, desc: "Te acompañamos hasta que recibas tu compensación." },
];

const responsiveCases = mainCases.map((item, index) => {
    if (index === 0) return { ...item, position: "col-span-3 lg:col-span-1 h-[450px]" };
    if (index === 1) return { ...item, position: "col-span-3 lg:col-span-1 h-[450px]" };
    if (index === 2) return { ...item, position: "col-span-3 lg:col-span-1 h-[450px]" };
    if (index === 3) return { ...item, position: "col-span-3 lg:col-span-2 h-[450px]" };
    if (index === 4) return { ...item, position: "col-span-3 lg:col-span-1 h-[450px]" };
    return { ...item, position: "col-span-1 h-[450px]" };
});


// --- COMPONENTE PRINCIPAL ---

export default function WorkplaceInjuryPage() {
  // CORREGIDO: Usar string | null para el tipo de selectedId
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const selectedItem = mainCases.find(item => item.id === selectedId);

  useEffect(() => {
    if (selectedId) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedId]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#002342] font-sans selection:bg-[#B2904D] selection:text-white overflow-x-hidden">
      <Header />

      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-0 left-0 w-full h-[1000px] overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] bg-[#B2904D]/10 rounded-full blur-[120px] opacity-60" />
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-[#002342]/5 rounded-full blur-[100px]" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-60 pb-32 px-4 z-10">
        
        <div className="max-w-7xl mx-auto text-center relative">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-gray-200/60 backdrop-blur-xl shadow-sm mb-8"
          >
            <Star size={14} className="text-[#B2904D] fill-[#B2904D]" /> 
            <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">Representación Legal Especializada</span>
          </motion.div>

          {/* Título Principal: SOLO ACCIDENTES */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-serif font-black text-[#002342] mb-6 tracking-tight leading-tight drop-shadow-sm" 
          >
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#B2904D] to-[#D4AF37] tracking-tight"
            >
              ACCIDENTES
            </motion.span>
          </motion.h1>
          
          {/* Subtítulo */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-500 font-light max-w-4xl mx-auto leading-relaxed mb-10"
          >
            Ya sea en el trabajo, en la carretera o por negligencia médica.<br/>
            <span className="text-[#002342] font-semibold">Protegemos tus derechos y tu futuro.</span>
          </motion.p>

          {/* Botones */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a 
              href="#contacto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-[#002342] text-white rounded-xl font-bold overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#B2904D] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-3 text-lg">
                <PhoneCall size={20}/>
                Consulta Ahora
              </span>
            </motion.a>
            
            <motion.a 
              href="#casos"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white/80 backdrop-blur-xl text-[#002342] rounded-xl font-bold border border-gray-200 hover:border-[#B2904D] transition-all shadow-md hover:shadow-lg"
            >
              Ver Tipos de Casos
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* --- GRID DE CASOS --- */}
      <section className="px-4 pb-32 relative z-10 max-w-[1600px] mx-auto" id="casos">

        <div className="max-w-[1600px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-gray-200/60 backdrop-blur-xl shadow-sm mb-8"
            >
              <Scale size={14} className="text-[#B2904D]" />
              <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">Nuestras Especialidades</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#002342] mb-6">
              Tipos de Casos
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-[#B2904D] to-[#D4AF37] mx-auto rounded-full"
            />
          </motion.div>

          {/* Nuevo Bento Grid Layout: 3 columnas, 5 elementos */}
          <div className="grid grid-cols-3 gap-6">
            {responsiveCases.map((item, index) => (
              <motion.div
                layoutId={`card-container-${item.id}`}
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.05,
                  duration: 0.6,
                  ease: "easeOut" 
                }}
                onClick={() => setSelectedId(item.id)}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                // Sombra MUY AUMENTADA y borde Dorado/Azul en hover
                className={`${item.position} group relative rounded-[2.5rem] p-8 cursor-pointer bg-white/70 backdrop-blur-xl border border-gray-100 transition-all duration-300 hover:scale-[1.01] overflow-hidden 
                            shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] 
                            // Efecto Hover con sombra Azul más dramática y borde Dorado
                            hover:border-[#B2904D] hover:shadow-[0_30px_60px_-15px_rgba(0,35,66,0.5),_0_0_0_3px_rgba(178,144,77,0.5)]`}
              >
                
                {/* Degradado Sutil de Fondo (Dorado) */}
                <div 
                    className={`absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#B2904D]/10 to-transparent 80%`}
                />
                
                {/* Contenido/Resumen de Fondo (SIN ICONO GRANDE DE FONDO) */}
                <div 
                    className="absolute inset-0 flex items-center justify-center p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                >
                    <p className="text-center text-4xl font-serif font-bold text-[#002342]/10 leading-snug">
                        {item.content.intro}
                    </p>
                </div>


                <div className="relative z-10 h-full flex flex-col">
                  
                  {/* Icono Principal (EL QUE DEBE QUEDARSE) */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.4 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transition-all 
                                bg-[#002342] group-hover:bg-gradient-to-br group-hover:from-[#B2904D] group-hover:to-[#D4AF37]"
                  >
                    <item.icon size={30} strokeWidth={1.5} />
                  </motion.div>

                  {/* Contenido */}
                  <div className="flex-1">
                    <motion.h3 
                      layoutId={`card-title-${item.id}`}
                      className="text-3xl font-serif font-black mb-3 transition-colors leading-tight text-[#002342] group-hover:text-[#B2904D]"
                    >
                      {item.title}
                    </motion.h3>
                    
                    <motion.p 
                      layoutId={`card-subtitle-${item.id}`}
                      className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-6"
                    >
                      {item.subtitle}
                    </motion.p>
                    
                    {/* Texto Resumen */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {item.content.description.substring(0, 150)}...
                    </p>

                    {/* Separador - Dorado en hover */}
                    <div className="h-px bg-gray-200 mb-6 transition-all group-hover:bg-[#B2904D]"></div>
                  </div>

                  {/* CTA */}
                  <motion.div 
                    className="flex items-center justify-between mt-auto"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 + 0.3 }}
                  >
                    <span 
                        className="font-bold flex items-center gap-2 group-hover:gap-4 transition-all text-[#002342] group-hover:text-[#B2904D]"
                    >
                      Ver Detalles
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/>
                    </span>
                    {/* Botón Circular - Dorado en hover */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-md bg-[#002342]/10 group-hover:bg-[#B2904D]"
                    >
                      <ArrowRight size={16} className="text-[#002342] group-hover:text-white transition-colors"/>
                    </motion.div>
                  </motion.div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL (Correcciones de TypeScript aplicadas con encadenamiento opcional) --- */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-white/80 backdrop-blur-xl"
            />

            <motion.div
              layoutId={`card-container-${selectedItem.id}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-7xl h-[80vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row z-10 ring-1 ring-black/5"
            >
              
              {/* Close Button */}
              <motion.button
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 z-50 bg-white/20 hover:bg-[#002342] text-[#002342] hover:text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 border border-white/30"
              >
                <X size={24} />
              </motion.button>

              {/* LEFT SIDE - Identity (Oscuro) */}
              <div className="w-full lg:w-2/5 bg-gradient-to-br from-[#002342] via-[#003366] to-[#002342] p-10 md:p-12 flex flex-col justify-center text-white relative overflow-hidden">
                
                {/* Large Icon Background */}
                <motion.div 
                  className="absolute -right-20 -bottom-20 opacity-5"
                >
                  <selectedItem.icon size={450} strokeWidth={0.5} />
                </motion.div>

                <div className="relative z-10">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#B2904D] to-[#D4AF37] rounded-xl flex items-center justify-center mb-6 shadow-2xl"
                  >
                    <selectedItem.icon size={30} className="text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    layoutId={`card-title-${selectedItem.id}`}
                    className="text-4xl font-serif font-black mb-3 leading-tight"
                  >
                    {selectedItem.title}
                  </motion.h3>
                  
                  <motion.p 
                    layoutId={`card-subtitle-${selectedItem.id}`}
                    className="text-[#B2904D] text-xs font-bold uppercase tracking-widest mb-6"
                  >
                    {selectedItem.subtitle}
                  </motion.p>

                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: 60 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="h-1 bg-gradient-to-r from-[#B2904D] to-transparent rounded-full mb-6"
                  />

                  <p className="text-white/70 text-sm leading-relaxed">
                    Representación legal especializada con décadas de experiencia
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE - Content (Blanco Limpio) */}
              <div className="w-full lg:w-3/5 p-10 md:p-12 overflow-y-auto bg-white">
                
                {/* Header */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h4 className="text-3xl font-serif font-black text-[#002342] mb-4 leading-snug">
                    {selectedItem.content.intro}
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {selectedItem.content.description}
                  </p>
                </motion.div>

                {/* TRABAJO Case (Uso de encadenamiento opcional) */}
                {selectedItem.id === 'trabajo' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
                      <h5 className="font-black text-[#002342] mb-5 flex items-center gap-3 text-xl">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md bg-[#002342]" 
                        >
                          <HardHat size={20} className="text-white"/>
                        </div>
                        {selectedItem.content.subTitle}
                      </h5>
                      <div className="grid md:grid-cols-2 gap-3">
                        {/* Corrección: Uso de encadenamiento opcional ?. */}
                        {selectedItem.content.subPoints?.map((point, i) => ( 
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.05 }}
                            className="flex items-start gap-3 text-gray-600 bg-white p-3 rounded-lg border border-gray-100 shadow-xs"
                          >
                            <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-[#B2904D]"></div> 
                            <span className="text-sm font-medium">{point}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#002342] to-[#003366] p-6 md:p-8 rounded-2xl text-white shadow-xl">
                      <h5 className="font-black mb-5 flex items-center gap-3 text-xl">
                        <CheckCircle2 size={20} className="text-[#B2904D]"/>
                        {selectedItem.content.benefitsTitle}
                      </h5>
                      <div className="space-y-3">
                         {/* Corrección: Uso de encadenamiento opcional ?. */}
                        {selectedItem.content.benefits?.map((benefit, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + i * 0.05 }}
                            className="flex items-center gap-4 bg-white/10 p-3 rounded-lg"
                          >
                            <div 
                              className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 shadow-sm bg-[#B2904D]" 
                            >
                              <CheckCircle2 size={16} className="text-white"/>
                            </div>
                            <span className="font-medium text-base">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TRAILER Case - Quotes (Uso de encadenamiento opcional) */}
                {selectedItem.id === 'trailer' && selectedItem.content.quotes && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="my-8 space-y-6"
                  >
                    {selectedItem.content.quotes.map((quote, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="relative bg-gray-50 p-6 rounded-2xl border-l-4 border-[#B2904D] shadow-sm" 
                      >
                        <Quote size={24} className="absolute top-2 right-4 text-gray-200" />
                        <p className="italic text-xl text-[#002342] mb-3 font-serif font-medium">
                          "{quote.text}"
                        </p>
                        <p className="text-sm text-gray-500">
                          {quote.context}
                        </p>
                      </motion.div>
                    ))}
                    
                    {/* Offer Alert */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                      className="bg-[#B2904D]/10 p-5 rounded-2xl border border-[#002342]/20 flex gap-4 items-start shadow-sm"
                    >
                      <div 
                        className="w-10 h-10 rounded-md flex items-center justify-center shrink-0 shadow-lg bg-[#002342]" 
                      >
                        <Scale size={20} className="text-white"/>
                      </div>
                      <p className="text-[#002342] font-bold text-base">
                        {selectedItem.content.offerAlert}
                      </p>
                    </motion.div>
                  </motion.div>
                )}

                {/* Solution */}
                {selectedItem.content.solution && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 bg-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <p className="text-gray-700 leading-relaxed font-medium text-base">
                      {selectedItem.content.solution}
                    </p>
                  </motion.div>
                )}

                {/* CTA */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="mt-10 pt-6 border-t border-gray-100"
                >
                  <motion.a 
                    href="#contacto" 
                    onClick={() => setSelectedId(null)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full py-4 bg-[#002342] text-white rounded-xl font-black flex items-center justify-center gap-3 shadow-lg hover:bg-[#B2904D] transition-all"
                  >
                    <span className="relative flex items-center gap-3 text-lg">
                      <PhoneCall size={20}/>
                      Solicitar Evaluación
                    </span>
                  </motion.a>
                </motion.div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- VIDEO SECTION - Sin cambios --- */}
      <section className="py-32 relative overflow-hidden bg-gray-50"> 
        
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-gray-200/60 backdrop-blur-xl shadow-sm mb-8"
            >
              <div className="w-2 h-2 bg-[#B2904D] rounded-full animate-pulse"></div>
              <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">Conoce a Nuestro Equipo</span>
            </motion.div>
            
            {/* H2 */}
            <h2 className="text-4xl font-serif font-black text-[#002342] mb-6 leading-tight">
              Abogado <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B2904D] to-[#D4AF37]">Juan Solís</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Escucha directamente de nuestros socios cómo protegemos tus derechos con experiencia y dedicación.
            </p>
            
            <motion.a 
              href="tel:+18664200405"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-4 bg-[#002342] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#B2904D] transition-all"
            >
              <div className="relative w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <PhoneCall size={20} />
              </div>
              <span className="relative">Llámanos Ahora Mismo</span>
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative group p-6 bg-white/70 backdrop-blur-xl rounded-[2.5rem] shadow-xl border border-white/80"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black aspect-video"> 
              <motion.div 
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer bg-black/10 hover:bg-black/0 transition-colors"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/60"
                >
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </motion.div>
              </motion.div>
              <video 
                src="https://manuelsolis.com/wp-content/uploads/2023/12/pexels-john-hill-7049943-1080p.mp4" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS SECTION - Sin cambios --- */}
      <section className="py-32 relative overflow-hidden bg-[#002342]">
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8"
            >
              <FileText size={14} className="text-[#B2904D]" />
              <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">Nuestro Método</span>
            </motion.div>
            
            {/* H2 */}
            <h2 className="text-4xl font-serif font-black text-white mb-6">Cómo Funciona el Proceso</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-[#B2904D] to-transparent mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 hover:bg-white/20 hover:border-[#B2904D]/50 transition-all duration-300 h-full shadow-lg">
                  
                  {/* Step Number */}
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-[#B2904D] to-[#D4AF37] rounded-lg flex items-center justify-center font-black text-white text-lg shadow-md"
                  >
                    {step.id}
                  </motion.div>

                  {/* Icono */}
                  <motion.div 
                    className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#B2904D] transition-all"
                  >
                    <step.icon size={26} className="text-white"/>
                  </motion.div>

                  <h3 className="font-serif font-bold text-xl text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                </div>

                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
                    className="hidden md:block absolute top-[25%] -right-4 w-8 h-0.5 bg-gradient-to-r from-[#B2904D] to-transparent origin-left"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT FORM - ELIMINADO EL CONTENEDOR BLANCO Y AÑADIDO FONDO DORADO DE ANCHO COMPLETO --- */}
      {/* Añadido fondo de degradado al contenedor de sección para el efecto de ancho completo */}
      <section id="contacto" className="relative py-32 z-10 bg-gradient-to-r from-[#B2904D] to-[#D4AF37]">
        
        {/* El contenedor interno ahora solo controla el ancho máximo del contenido del formulario */}
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            // El formulario está centrado pero el fondo de la sección ahora es dorado completo.
            className="relative z-10" 
          >
            {/* ContactForm sin estilos de recuadro */}
            <ContactForm /> 
            
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}