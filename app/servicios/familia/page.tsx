'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  PhoneCall,
  ArrowRight,
  Car, // Placeholder
  Truck, // Placeholder
  Stethoscope, // Placeholder
  Zap, // Placeholder
  HardHat, // Placeholder
  CheckCircle2, // Usado para Resultados Finales
  Scale, // Usado para Representación en Corte
  FileText, // Usado para Divorcio/Documentos/Pruebas
  HandCoins, // Usado para Manutención
  MessageSquare, // Usado para Custodia/Negociación
  Star, // Placeholder
  Quote // Placeholder
} from 'lucide-react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

// --- NUEVOS DATOS DE CASOS (DERECHO DE FAMILIA) ---
const mainCases = [
  {
    id: 'divorcio',
    title: "Divorcio",
    subtitle: "Separación Legal y Acuerdos Mutuos",
    icon: FileText,
    gradient: "from-red-500/10 via-orange-500/10 to-red-600/10",
    position: "col-span-3 lg:col-span-1",
    content: {
      intro: "¿Necesita un buen abogado de divorcio?",
      description: "Un matrimonio es un contrato legalmente establecido entre dos personas que debe resolverse de manera adecuada para proteger sus intereses futuros. Es recomendable acudir a un abogado para que le ayude a tomar las mejores decisiones.",
      solution: "Le podemos ayudar a preparar y entregar los documentos necesarios para un acuerdo de divorcio. Si fuera necesario, le representaremos en la corte ante un posible litigio para proteger sus derechos.",
    }
  },
  {
    id: 'custodia',
    title: "Custodia de los Hijos",
    subtitle: "Disputas, Visitas y Bienestar Infantil",
    icon: MessageSquare, 
    gradient: "from-blue-500/10 via-cyan-500/10 to-blue-600/10",
    position: "col-span-3 lg:col-span-1",
    content: {
      intro: "Permítanos apoyarle en las disputas por la custodia de sus hijos.",
      description: "Los niños son, indudablemente, los más perjudicados en la separación de sus padres. Es crucial que los abogados negocien en su nombre desde un punto de vista técnico y no emocional para lograr la mejor resolución.",
      subTitle: "Nuestra Defensa Incluye:",
      subPoints: [
        "Defenderle en un caso de custodia.",
        "Negociar la manutención y las visitas.",
        "Representarle en corte si no es posible llegar a un acuerdo.",
      ],
      solution: "Contamos con abogados preparados para defender sus intereses y el de sus hijos, buscando la mejor solución para la estabilidad familiar.",
    }
  },
  {
    id: 'manutencion',
    title: "Manutención de los Hijos",
    subtitle: "Cálculo y Cumplimiento de Pagos",
    icon: HandCoins, 
    gradient: "from-green-500/10 via-emerald-500/10 to-green-600/10",
    position: "col-span-3 lg:col-span-1",
    content: {
      intro: "La manutención infantil es un aspecto clave del derecho de familia.",
      description: "Los padres tienen el deber de mantener a sus hijos. La manutención les ayuda económicamente, asegurándose de que los niños tengan ropa en la espalda y comida en la mesa. La cantidad se calcula sobre la base de los recursos netos del padre.",
      subTitle: "Cómo se Calcula la Manutención (Base General):",
      subPoints: [
        "Se calcula a partir de los recursos netos (ingresos menos impuestos esenciales y gastos de seguro médico).",
        "La base es el 20% del ingreso neto mensual.",
        "Se agrega el 5% por cada hijo adicional.",
        "Puede embargarse del salario, ofreciendo tranquilidad a ambas partes.",
      ],
      solution: "Le asistimos en el cálculo preciso y la ejecución de la orden judicial de manutención, asegurando la estabilidad económica de sus hijos.",
    }
  },
];

const processSteps = [
  { id: 1, title: "Consulta Privada", icon: PhoneCall, desc: "Evaluamos su situación personal y sus objetivos familiares." },
  { id: 2, title: "Estrategia y Documentación", icon: FileText, desc: "Recopilamos pruebas, ingresos y preparamos los documentos legales." },
  { id: 3, title: "Negociación / Mediación", icon: MessageSquare, desc: "Buscamos un acuerdo amistoso fuera de la corte para reducir el impacto emocional." },
  { id: 4, title: "Representación en Corte", icon: Scale, desc: "Lo representamos si es necesario litigar para defender sus derechos." },
];

// Configuración de la rejilla para 3 elementos en un layout de 3 columnas
const responsiveCases = mainCases.map((item, index) => {
    // 3 items, todos toman 1 columna para una fila limpia e igualitaria (3/3)
    return { ...item, position: "col-span-3 lg:col-span-1 h-[450px]" }; 
});


// --- COMPONENTE PRINCIPAL ---

export default function FamilyLawPage() {
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

      {/* --- HERO SECTION - ACTUALIZADO A DERECHO DE FAMILIA --- */}
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
            <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">Protección Familiar y Patrimonial</span>
          </motion.div>

          {/* Título Principal: DERECHO DE FAMILIA */}
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
              FAMILIA
            </motion.span>
          </motion.h1>
          
          {/* Subtítulo */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-500 font-light max-w-4xl mx-auto leading-relaxed mb-10"
          >
            Expertos en Divorcio, Custodia y Manutención de los Hijos.<br/>
            <span className="text-[#002342] font-semibold">Protegemos sus derechos y el bienestar de sus hijos.</span>
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
              Servicios de Derecho Familiar
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-[#B2904D] to-[#D4AF37] mx-auto rounded-full"
            />
          </motion.div>

          {/* Bento Grid Layout: 3 columnas, 3 elementos */}
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
                className={`${item.position} group relative rounded-[2.5rem] p-8 cursor-pointer bg-white/70 backdrop-blur-xl border border-gray-100 transition-all duration-300 hover:scale-[1.01] overflow-hidden 
                            shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] 
                            hover:border-[#B2904D] hover:shadow-[0_30px_60px_-15px_rgba(0,35,66,0.5),_0_0_0_3px_rgba(178,144,77,0.5)]`}
              >
                
                {/* Degradado Sutil de Fondo (Dorado) */}
                <div 
                    className={`absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#B2904D]/10 to-transparent 80%`}
                />
                
                {/* Contenido/Resumen de Fondo */}
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

      {/* --- MODAL (CONTENIDO DE DERECHO DE FAMILIA) --- */}
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
                    Protegiendo su futuro y el de sus hijos durante transiciones difíciles.
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

                {/* Contenido Dinámico (Sub-Puntos: Custodia, Manutención) */}
                {selectedItem.content.subPoints && selectedItem.content.subTitle && (
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
                            <selectedItem.icon size={20} className="text-white"/> 
                          </div>
                          {selectedItem.content.subTitle}
                        </h5>
                        <div className="grid md:grid-cols-2 gap-3">
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
                      Solicitar Consulta
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
              Escucha directamente de nuestros socios cómo protegemos su estabilidad familiar.
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

      {/* --- PROCESS SECTION - ACTUALIZADO PARA FAMILIA --- */}
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
            <h2 className="text-4xl font-serif font-black text-white mb-6">El Proceso para su Resolución Familiar</h2>
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

      {/* --- CONTACT FORM - FONDO DORADO DE ANCHO COMPLETO --- */}
      <section id="contacto" className="relative py-32 z-10 bg-gradient-to-r from-[#B2904D] to-[#D4AF37]">
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10" 
          >
            <ContactForm /> 
            
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}