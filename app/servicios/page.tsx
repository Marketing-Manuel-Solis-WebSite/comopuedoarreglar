'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CarFront, 
  Plane, 
  ShieldAlert, 
  Gavel, 
  Users, 
  FileSignature
} from 'lucide-react';

// --- IMPORTS DE TUS COMPONENTES ---
// Asegúrate de que las rutas sean correctas según tu proyecto
import Header from '../components/Header';       
import Footer from '../components/Footer';       
import ContactForm from '../components/ContactForm'; 
import ServiceCategory from '../components/ServiceCategory.'; 

// --- DATA ---
const legalData = [
  {
    title: "Accidentes",
    icon: CarFront,
    items: [
      "Accidentes de aviación",
      "Accidentes automovilísticos",
      "Accidentes de vehículos de 18 ruedas",
      "Negligencia médica",
      "Explosión de plantas industriales"
    ]
  },
  {
    title: "Inmigración",
    icon: Plane,
    items: [
      "Defensa contra la deportación",
      "Residencia por un familiar",
      "Petición de residencia por parte del empleador",
      "Asilo",
      "U-Visa / VAWA",
      "Naturalización"
    ]
  },
  {
    title: "Seguros (Aseguranza)",
    icon: ShieldAlert,
    items: [
      "Reclamaciones por granizo",
      "Reclamaciones por tormentas de viento",
      "Reclamaciones por incendio",
      "Reclamaciones por tornado"
    ]
  },
  {
    title: "Ley Criminal",
    icon: Gavel,
    items: [
      "Violencia Doméstica",
      "Asalto",
      "DWI - Manejo en estado de ebriedad",
      "Hurto",
      "Prostitución"
    ]
  },
  {
    title: "Familia",
    icon: Users,
    items: [
      "Divorcios",
      "Custodia",
      "Manutención de los hijos"
    ]
  },
  {
    title: "Planificación Patrimonial",
    icon: FileSignature,
    items: [
      "Testamentos"
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      
      {/* 1. HEADER */}
      <Header />

      {/* 2. HERO HEADER (Áreas Legales) */}
      <div className="bg-[#002342] text-white pt-42 pb-32 px-4 relative overflow-hidden">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#B2904D] font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Servicios Jurídicos Integrales
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Áreas Legales
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-[#B2904D] mx-auto rounded-full"
          />
        </div>
      </div>

      {/* 3. INTRODUCCIÓN */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-20 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-[#B2904D]"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-[#002342]">
              Áreas de representación de nuestros clientes
            </h2>
          </div>
          
          <div className="prose prose-lg text-gray-600 mx-auto text-justify leading-relaxed space-y-6">
            <p>
              Uno de los pilares de la sociedad es la familia. Nosotros insistimos mucho en eso. Por eso, desde el principio, hemos dedicado una rama muy importante de nuestras oficinas a defender a las familias en casos de inmigración. Nuestros abogados tienen una amplia experiencia en casos de familia para la obtención de la Residencia Permanente o la Ciudadanía, asilo, Visa U, VAWA y deportación.
            </p>
            <p>
              Después de que ocurrieran algunas de las tormentas más violentas que Texas había vivido en mucho tiempo, empezamos a recibir a numerosas personas que estaban sufriendo mucho por culpa de los reclamos a las compañías aseguradoras. Muchas personas se veían indefensas ante grandes corporaciones que les negaban sus derechos.
            </p>
            <p>
              Por este motivo, decidimos abrir una rama especializada en reclamos de seguros y accidentes, con el objetivo de defender a las víctimas para que solo tengan que centrarse en una pronta recuperación sabiendo que están en buenas manos.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 4. GRID DE SERVICIOS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legalData.map((area, index) => (
            <ServiceCategory
              key={area.title}
              title={area.title}
              icon={area.icon}
              items={area.items}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* 5. SECCIÓN FINAL CON FORMULARIO */}
      <section className="w-full bg-[#002342] py-20 relative overflow-hidden" id="contacto">
          {/* Fondo decorativo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#002342] to-[#003366]"></div>
          <div className="absolute -right-20 -bottom-20 opacity-5 text-white">
             <Gavel size={400} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Columna Izquierda: Texto */}
              <div className="text-white space-y-6 text-center lg:text-left">
                <motion.div
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                    ¿No encuentra lo que busca?
                  </h2>
                  <div className="w-20 h-1 bg-[#B2904D] mb-6 rounded-full mx-auto lg:mx-0"></div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Cada caso es único y entendemos que su situación puede no encajar en una categoría estándar. 
                    <br /><br />
                    Complete el formulario y uno de nuestros expertos legales analizará su caso de forma 
                    <span className="text-[#B2904D] font-bold"> gratuita y confidencial</span>.
                  </p>
                  
                  {/* Beneficios rápidos */}
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                      Evaluación sin costo
                    </span>
                    <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                      100% Confidencial
                    </span>
                    <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                      Rapidez y Respuesta Rápida
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Columna Derecha: El Formulario */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100"
              >
                 <h3 className="text-[#002342] font-bold text-xl mb-4 text-center">Cuéntenos su caso</h3>
                 <ContactForm />
              </motion.div>

            </div>
          </div>
      </section>

      {/* 6. FOOTER */}
      <Footer />

    </main>
  );
}