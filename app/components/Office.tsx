'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, Star, CheckCircle2, Play, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './ContactForm'; 

// --- UTILIDADES ---
const slugify = (text: string) => {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

// --- TIPOS DE DATOS ---
type TeamMember = {
  name: string;
  image: string;
  role: string;
};

type OfficeData = {
  id: string;
  city: string;
  state: string;
  title: string;
  quote: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapLink: string;
  videoUrl?: string;
  services: string[];
  managers: TeamMember[];
  attorneys: TeamMember[];
};

// --- DATA COMPLETA ---
const offices: OfficeData[] = [
  {
    id: 'houston',
    city: 'Houston',
    state: 'TX',
    title: 'Houston, TX Oficina Principal',
    quote: 'Bendecidos con la fuerza y la gracia de Dios, e inspirados por nuestro deseo de ayudar.',
    description: 'Nuestras oficinas de Houston en Navigation Boulevard son las primeras que abrimos hace ya más de 30 años. Aquí es donde está el centro neurálgico de nuestra firma y donde recibimos a más de 200 clientes a la semana.',
    address: '6657 Navigation Blvd, Houston, Texas 77011',
    phone: '(713) 701-1731',
    email: 'houston@manuelsolis.com',
    hours: 'Lun - Vie 9:00 AM - 7:00 PM | Sáb 9:00 AM - 4:00 PM',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=6657+Navigation+Blvd,+Houston,+Texas+77011',
    videoUrl: 'https://manuelsolis.com/wp-content/uploads/2023/12/houston-main.mp4',
    services: ['ACCIDENTES', 'FAMILIA', 'INMIGRACION', 'LEY CRIMINAL', 'SEGUROS (ASEGURANZA)'],
    managers: [
      { name: 'Flor Winter', role: 'Gerente', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-managers-houston-gray-10.png' },
      { name: 'Lucy Gomez', role: 'Gerente', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-managers-houston-gray-1.png' },
      { name: 'Luis Salazar', role: 'Gerente', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-managers-houston-gray-2.png' },
      { name: 'Roxana Santamaría', role: 'Gerente', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-managers-houston-gray-3.png' },
      { name: 'María Phan', role: 'Gerente', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-managers-houston-gray-4.png' },
      { name: 'Katty Carrascal', role: 'Gerente', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-managers-houston-gray-5.png' },
      { name: 'Nicolas Santamaría', role: 'Gerente', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-managers-houston-gray-6.png' },
      { name: 'Sonia Romero', role: 'Gerente', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-managers-houston-gray-7.png' },
      { name: 'Omar Cano', role: 'Gerente', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-managers-houston-gray-8.png' },
      { name: 'Francisco Sotomayor', role: 'Gerente', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-managers-houston-gray-9.png' },
      { name: 'Elizabeth Huertas', role: 'Gerente', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-managers-houston-gray-11.png' },
    ],
    attorneys: [
      { name: 'Manuel Solís', role: 'Abogado Principal', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/37490671-CAC5-4039-8A96-2680CC45304D.png' },
      { name: 'Manuel E. Solís III', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-10.png' },
      { name: 'Juan Solís', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-9.png' },
      { name: 'Ni Yan', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-8.png' },
      { name: 'Andrew Fink', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-11.png' },
      { name: 'Gregory Finney', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-15-1.png' },
      { name: 'Austen Gunnels', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-18.png' },
    ]
  },
  {
    id: 'dallas',
    city: 'Dallas',
    state: 'TX',
    title: 'Dallas, TX',
    quote: 'Bendecidos con la fuerza y la gracia de Dios, e inspirados por nuestro deseo de ayudar.',
    description: 'Dallas es una de las grandes ciudades de Texas en las que se concentra una buena cantidad de personas que han venido a este país a vivir y contribuir a su sociedad. Por eso, la firma del abogado Manuel Solís quiso abrir una oficina para ponernos al servicio de nuestros clientes. Nuestras oficinas de Dallas están abiertas de lunes a sábado en horario de 9 de la mañana a 9 de la noche, de manera ininterrumpida.',
    address: '1120 Empire Central Place, Dallas, Texas 75247',
    phone: '(214) 753-8315',
    email: 'dallas@manuelsolis.com',
    hours: 'Lun - Vie 9:00 AM - 6:00 PM | Sáb 8:00 AM - 3:00 PM',
    mapLink: 'https://goo.gl/maps/ze5VqZn4dLzCKKZp6',
    videoUrl: 'https://manuelsolis.com/wp-content/uploads/2023/12/dallas.mov',
    services: ['INMIGRACION', 'SEGUROS (ASEGURANZA)', 'ACCIDENTES'],
    managers: [
        { name: 'Maribel Degollado', role: 'Gerente', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-managers-houston-gray-12-233x300.png' }
    ],
    attorneys: [
        { name: 'Manuel Solís', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/37490671-CAC5-4039-8A96-2680CC45304D.png' },
        { name: 'Manuel E. Solís III', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-10.png' },
        { name: 'Juan Solís', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-9.png' },
        { name: 'Mark McBroom', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-12.png' },
        { name: 'Gregory Finney', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-15-1.png' },
    ]
  },
  {
    id: 'los-angeles',
    city: 'Los Angeles',
    state: 'CA',
    title: 'Los Angeles, CA',
    quote: 'Abogados de Inmigración en Los Ángeles con Experiencia',
    description: 'Si estás buscando abogados de inmigración en Los Ángeles, el Bufete de Abogados Manuel Solis es la solución perfecta para ti. Nuestro equipo tiene más de 20 años de experiencia ayudando a inmigrantes con una amplia gama de servicios legales. Desde la obtención de visas hasta la defensa en casos de deportación, nuestros abogados de inmigración en Los Ángeles te acompañarán en cada paso del proceso.',
    address: '8337 Telegraph Rd Unit 115, Pico Rivera, CA 90660',
    phone: '(213) 784-1554',
    email: 'losangeles@manuelsolis.com',
    hours: 'Lun - Vie 9:00 AM - 6:00 PM | Sáb 8:00 AM - 2:00 PM',
    mapLink: 'https://maps.app.goo.gl/s3zDpAmWvfZQdFt7A',
    videoUrl: 'https://manuelsolis.com/wp-content/uploads/2023/12/losangeles-final.mov',
    services: ['INMIGRACION', 'LEY CRIMINAL', 'ACCIDENTES'],
    managers: [
        { name: 'Morena Fernandez', role: 'Gerente', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-managers-houston-gray-13-233x300.png' }
    ],
    attorneys: [
        { name: 'Manuel Solís', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/37490671-CAC5-4039-8A96-2680CC45304D.png' },
        { name: 'Manuel E. Solís III', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-10.png' },
        { name: 'Juan Solís', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-9.png' },
        { name: 'Andrew Fink', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-11.png' },
        { name: 'Ana Patricia Rueda', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-13.png' },
        { name: 'Eduardo García', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2025/05/imagen-768x1024.jpeg' },
    ]
  },
  {
    id: 'harlingen',
    city: 'Harlingen',
    state: 'TX',
    title: 'Harlingen, TX',
    quote: 'Bendecidos con la fuerza y la gracia de Dios, e inspirados por nuestro deseo de ayudar.',
    description: 'Nuestras oficinas en la ciudad de Harlingen nos ayudan a estar más cerca de la frontera con México, sobretodo para los casos de detenidos en los centros de detención de la patrulla fronteriza y las peticiones de asilo.',
    address: '320 E. Jackson, Harlingen, Texas 78550',
    phone: '(956) 597-7090',
    email: 'harlingen@manuelsolis.com',
    hours: 'Lun - Vie 9:00 AM - 7:00 PM | Sáb (Solo con cita)',
    mapLink: 'https://goo.gl/maps/XbKCSSUBDDSibkAz6',
    videoUrl: 'https://manuelsolis.com/wp-content/uploads/2023/12/harlingen.mov',
    services: ['INMIGRACION', 'SEGUROS (ASEGURANZA)'],
    managers: [],
    attorneys: [
        { name: 'Manuel Solís', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/37490671-CAC5-4039-8A96-2680CC45304D.png' },
        { name: 'Manuel E. Solís III', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-10.png' },
        { name: 'Juan Solís', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-9.png' },
        { name: 'Andrew Fink', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-11.png' },
        { name: 'Ana Patricia Rueda', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-13.png' },
    ]
  },
  {
    id: 'chicago',
    city: 'Chicago',
    state: 'IL',
    title: 'Chicago, IL',
    quote: 'Bendecidos con la fuerza y la gracia de Dios, e inspirados por nuestro deseo de ayudar.',
    description: 'Nuestras oficinas en la ciudad de Chicago nos llevan a otra de las grandes urbes de los Estados Unidos donde se concentran una buena cantidad de inmigrantes a los que servimos a diario. Con un edificio de oficinas a disposición de nuestros clientes, nuestra oficina de Chicago atiende casos de Inmigración, familia, criminal y accidentes.',
    address: 'W. 6000 Cermak Rd, Cicero, Chicago, Illinois 60804',
    phone: '(312) 477-0389',
    email: 'chicago@manuelsolis.com',
    hours: 'Lun - Vie 9:00 AM - 6:00 PM | Sáb 8:00 AM - 4:00 PM',
    mapLink: 'https://maps.app.goo.gl/adcMEbA5fnTXEWA1A',
    videoUrl: 'https://manuelsolis.com/wp-content/uploads/2023/12/chicago-office.mp4',
    services: ['LEY CRIMINAL', 'FAMILIA', 'INMIGRACION', 'ACCIDENTES'],
    managers: [
        { name: 'Elizabeth Vazquez', role: 'Gerente', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-managers-houston-gray-14-233x300.png' }
    ],
    attorneys: [
        { name: 'Manuel Solís', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/37490671-CAC5-4039-8A96-2680CC45304D.png' },
        { name: 'Manuel E. Solís III', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-10.png' },
        { name: 'Juan Solís', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-9.png' },
        { name: 'Andrew Fink', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-11.png' },
        { name: 'Ana Patricia Rueda', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-13.png' },
        { name: 'Gregory Finney', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-15-1.png' },
        { name: 'Edwin Zavala', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-16.png' },
    ]
  },
  {
    id: 'arvada',
    city: 'Arvada',
    state: 'CO',
    title: 'Arvada, CO',
    quote: 'Bendecidos con la fuerza y la gracia de Dios, e inspirados por nuestro deseo de ayudar.',
    description: 'Nuestras oficinas de Arvada, Colorado, (Denver) sirven a una gran población de inmigrantes que se movieron a la parte interior de los Estados Unidos. Siendo Denver un gran centro industrial, muchos residentes permanentes han buscado allí mejor fortuna y ya están preparados para obtener su ciudadanía o están buscando traer a algún familiar a los Estados Unidos. Desde las Oficinas del Abogado Manuel Solís nos ponemos a su disposición para prestarles el servicio.',
    address: '5400 Ward Road, Building IV, Arvada, Colorado 80002',
    phone: '(720) 358-8973',
    email: 'denver@manuelsolis.com',
    hours: 'Lun - Vie 9:00 AM - 7:00 PM | Sáb: 9:00 AM - 2:00 PM',
    mapLink: 'https://maps.app.goo.gl/v8oPzNQr69oGFmpU9',
    videoUrl: 'https://manuelsolis.com/wp-content/uploads/2023/12/arvada.mov',
    services: ['INMIGRACION', 'SEGUROS (ASEGURANZA)'],
    managers: [],
    attorneys: [
        { name: 'Manuel Solís', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/37490671-CAC5-4039-8A96-2680CC45304D.png' },
        { name: 'Manuel E. Solís III', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-10.png' },
        { name: 'Juan Solís', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-9.png' },
        { name: 'Andrew Fink', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-11.png' },
        { name: 'Ana Patricia Rueda', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-13.png' },
        { name: 'Eduardo García', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2025/05/imagen-768x1024.jpeg' },
    ]
  },
  {
    id: 'el-paso',
    city: 'El Paso',
    state: 'TX',
    title: 'El Paso, TX',
    quote: 'Bendecidos con la fuerza y la gracia de Dios, e inspirados por nuestro deseo de ayudar.',
    description: 'Nuestras oficinas en la ciudad de El Paso, Texas, nos permiten tener una presencia estratégica en la frontera para atender de la manera más eficiente y rápida posible a nuestros clientes.',
    address: '1401 Montana Ave, El Paso, TX 79902',
    phone: '(915) 209-3389',
    email: 'elpaso@manuelsolis.com',
    hours: 'Lun - Vie 9:00 AM - 6:00 PM',
    mapLink: 'https://maps.google.com',
    videoUrl: 'https://manuelsolis.com/wp-content/uploads/2023/12/elpaso.mov',
    services: ['INMIGRACION', 'SEGUROS (ASEGURANZA)', 'ACCIDENTES', 'FAMILIA', 'LEY CRIMINAL'],
    managers: [],
    attorneys: [
        { name: 'Manuel Solís', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/37490671-CAC5-4039-8A96-2680CC45304D.png' },
        { name: 'Manuel E. Solís III', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-10.png' },
        { name: 'Juan Solís', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-9.png' },
        { name: 'Andrew Fink', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-11.png' },
        { name: 'Ana Patricia Rueda', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-13.png' },
    ]
  },
  {
    id: 'memphis',
    city: 'Memphis',
    state: 'TN',
    title: 'Memphis, TN Oficina',
    quote: 'Bendecidos con la fuerza y la gracia de Dios, e inspirados por nuestro deseo de ayudar.',
    description: 'Nuestras oficinas de Memphis en Airways Boulevard recién inauguradas listas para atender a nuevos clientes. Nuestra Abogada es Lupita Martínez.',
    address: '3385 Airways Blvd Suite 320, Memphis, Tennessee 38116',
    phone: '(901) 557-8357',
    email: 'memphis@manuelsolis.com',
    hours: 'Lun - Vie 9:00 AM - 5:00 PM | Sáb 9:00 AM - 1:00 PM',
    mapLink: 'https://maps.app.goo.gl/NfNAVvic9TzhRRY69',
    videoUrl: undefined,
    services: ['CIVIL', 'TICKETS', 'INMIGRACION', 'LEY CRIMINAL', 'DETENIDOS'],
    managers: [
        { name: 'Michelle Magdonald', role: 'Asistente Legal', image: 'https://manuelsolis.com/wp-content/uploads/2025/01/Media-8-225x300.jpg'}
    ],
    attorneys: [
        { name: 'Sara Jones', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2025/05/abogada-memphis-768x768.jpg'},
        { name: 'Peyton Barrow', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2025/05/Peyton-William-Barrow.jpg'}
    ]
  },
  {
    id: 'bellaire',
    city: 'Houston Bellaire',
    state: 'TX',
    title: 'Houston Bellaire (Servicio En Chino)',
    quote: 'Bendecidos con la fuerza y la gracia de Dios, e inspirados por nuestro deseo de ayudar.',
    description: 'Nuestra oficina de Bellaire es un satélite de nuestra oficina principal en Houston donde atendemos casos de inmigración en la parte norte de esta gran ciudad. Allí, nuestra letrada Ni Yan, atiende en su lengua materna a clientes provenientes de China en sus casos de inmigración.',
    address: '9188 Bellaire Blvd #E, Houston, Texas 77036',
    phone: '(281) 903-0462',
    email: 'bellaire@manuelsolis.com',
    hours: 'Lun - Vie 9:00 AM - 7:00 PM | Sáb 8:00 AM - 4:00 PM',
    mapLink: 'https://goo.gl/maps/g61U9JLhdEqqvvmv9',
    videoUrl: 'https://manuelsolis.com/wp-content/uploads/2023/12/houston-bellaire.mov',
    services: ['INMIGRACION', 'SEGUROS (ASEGURANZA)', 'ACCIDENTES', 'FAMILIA', 'LEY CRIMINAL'],
    managers: [],
    attorneys: [
        { name: 'Ni Yan', role: 'Abogado', image: 'https://manuelsolis.com/wp-content/uploads/2024/03/Backgound-lawyers-gray-8.png' },
    ]
  }
];

export default function Offices() {
  const [selectedId, setSelectedId] = useState(offices[0].id);
  const [activeOffice, setActiveOffice] = useState(offices[0]);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const found = offices.find(o => o.id === selectedId);
    if (found) {
      setActiveOffice(found);
      setIsVideoLoaded(false);
    }
  }, [selectedId]);

  return (
    <section className="w-full bg-white pb-20 overflow-x-hidden" id="oficinas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header de Sección --- */}
        <div className="text-center mb-8 pt-8 md:pt-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif font-bold text-[#002342] mb-3"
          >
            Nuestras Sedes
          </motion.h2>
          <div className="w-24 h-1 bg-[#B2904D] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            Selecciona una oficina para ver la información detallada, servicios y el equipo legal a tu disposición.
          </p>
        </div>

        {/* --- Layout Principal (Grid) --- */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 min-h-[800px]">
          
          {/* --- 1. Columna Navegación (Sidebar Estilo Premium) --- */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              
              {/* --- LISTA VERTICAL DE OFICINAS (GRID 2 COLUMNAS EN MOVIL) --- */}
              <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-col lg:gap-3">
                  {offices.map((office) => (
                    <button
                      key={office.id}
                      onClick={() => setSelectedId(office.id)}
                      className={`
                        w-full relative group px-3 py-3 md:px-5 md:py-4 rounded-lg text-left transition-all duration-300
                        flex items-center justify-between
                        ${selectedId === office.id 
                          ? 'bg-[#002342] text-white shadow-xl border-l-4 border-[#B2904D]' 
                          : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <span className={`block font-serif font-bold text-sm md:text-lg leading-tight truncate ${selectedId === office.id ? 'text-white' : 'text-[#002342]'}`}>
                          {office.city}
                        </span>
                        <span className={`text-[9px] md:text-[10px] uppercase tracking-widest mt-1 block ${selectedId === office.id ? 'text-[#B2904D]' : 'text-gray-400'}`}>
                          {office.state}
                        </span>
                      </div>
                      
                      {selectedId === office.id && (
                          <motion.div layoutId="activeIndicator" className="text-[#B2904D] hidden lg:block">
                            <Star fill="#B2904D" size={16} />
                          </motion.div>
                      )}
                    </button>
                  ))}
               </div>
            </div>
          </div>

          {/* --- 2. Columna Contenido (Main Card) --- */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOffice.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-full"
              >
                
                {/* A. Hero Area (Video/Imagen) */}
                {/* Altura controlada para móvil: h-[250px] */}
                <div className="relative h-[250px] md:h-[450px] w-full bg-[#002342] overflow-hidden group">
                    
                    {/* Video Background */}
                    {activeOffice.videoUrl ? (
                          <video 
                            autoPlay muted loop playsInline
                            onLoadedData={() => setIsVideoLoaded(true)}
                            // Ajuste seguro: scale-110 para eliminar bordes, object-cover para llenar
                            className={`absolute inset-0 w-full h-full object-cover scale-110 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-70' : 'opacity-0'}`} 
                        >
                            <source src={activeOffice.videoUrl} type="video/mp4" />
                            <source src={activeOffice.videoUrl.replace('.mp4', '.mov')} type="video/quicktime" />
                        </video>
                    ) : (
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    )}

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002342] via-transparent to-transparent opacity-90 md:opacity-80" />
                    
                    {/* Botón Play (Simplificado para móvil) */}
                    {activeOffice.videoUrl && (
                      <div className="absolute top-3 right-3 md:top-6 md:right-6 z-30">
                        <button 
                          onClick={() => setIsVideoOpen(true)}
                          className="flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 h-10 w-10 md:h-12 md:w-12 rounded-full hover:bg-[#B2904D] transition-colors"
                        >
                          <Play size={20} fill="white" className="text-white" />
                        </button>
                      </div>
                    )}

                    {/* Texto Hero Inferior */}
                    <div className="absolute bottom-0 left-0 w-full p-5 md:p-12 text-white z-10">
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.2 }}
                          >
                             <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="bg-[#B2904D] text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                                    <MapPin size={10} /> {activeOffice.city}, {activeOffice.state}
                                </span>
                             </div>
                             <h3 className="text-2xl md:text-5xl font-serif font-bold mb-1 md:mb-3 leading-tight text-white">
                                {activeOffice.title}
                             </h3>
                             <p className="text-[#B2904D] font-medium italic text-sm md:text-xl max-w-3xl line-clamp-2 md:line-clamp-none">
                                "{activeOffice.quote}"
                             </p>
                          </motion.div>
                    </div>
                </div>

                {/* B. Cuerpo del Contenido */}
                {/* Padding reducido en móvil: p-5 */}
                <div className="p-5 md:p-12 space-y-8 md:space-y-12">
                    
                    {/* 1. Descripción y Servicios */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12">
                        <div>
                            <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 text-justify">
                                {activeOffice.description}
                            </p>
                            
                            {/* Grid de Contacto */}
                            <div className="space-y-3 md:space-y-4 bg-gray-50 p-4 rounded-xl md:bg-transparent md:p-0">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white md:bg-gray-50 border border-gray-100 md:border-0 flex items-center justify-center text-[#002342] shrink-0"><MapPin size={16}/></div>
                                    <div>
                                        <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase">Dirección</p>
                                        <p className="text-[#002342] font-medium text-sm md:text-base">{activeOffice.address}</p>
                                        <a href={activeOffice.mapLink} target="_blank" className="text-[#B2904D] text-xs font-bold hover:underline mt-1 inline-block">Ver en mapa</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white md:bg-gray-50 border border-gray-100 md:border-0 flex items-center justify-center text-[#002342] shrink-0"><Phone size={16}/></div>
                                    <div>
                                        <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase">Teléfono</p>
                                        <a href={`tel:${activeOffice.phone}`} className="text-[#002342] font-bold hover:text-[#B2904D] text-sm md:text-base">{activeOffice.phone}</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white md:bg-gray-50 border border-gray-100 md:border-0 flex items-center justify-center text-[#002342] shrink-0"><Clock size={16}/></div>
                                    <div>
                                        <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase">Horario</p>
                                        <p className="text-[#002342] font-medium text-sm md:text-base">{activeOffice.hours}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lista de Servicios */}
                        <div className="bg-gray-50 rounded-xl p-5 md:p-8 border border-gray-100">
                            <h4 className="text-lg md:text-xl font-serif font-bold text-[#002342] mb-4 md:mb-6 flex items-center gap-2">
                                <Star className="text-[#B2904D]" size={18} fill="#B2904D" /> Servicios en esta sede
                            </h4>
                            <ul className="space-y-2 md:space-y-4">
                                {activeOffice.services.map((service, idx) => (
                                    <li key={idx} className="flex items-center gap-2 md:gap-3">
                                        <CheckCircle2 className="text-[#B2904D] shrink-0" size={16} />
                                        <span className="text-[#002342] font-bold text-xs md:text-sm tracking-wide">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-100" />

                    {/* 2. Equipo */}
                    <div>
                        {/* Abogados */}
                        {activeOffice.attorneys.length > 0 && (
                            <div className="mb-8 md:mb-12">
                                <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                                    <div className="w-1 h-6 md:h-8 bg-[#B2904D] rounded-full"></div>
                                    <h4 className="text-xl md:text-2xl font-serif font-bold text-[#002342]">Nuestros Abogados</h4>
                                </div>
                                {/* Grid adaptable: 2 columnas en móvil, 4 en desktop */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                                    {activeOffice.attorneys.map((person, idx) => (
                                        <Link href={`/abogados/${slugify(person.name)}`} key={idx} className="group block">
                                            <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 md:mb-4">
                                                <div className="absolute inset-0 rounded-full border-2 border-[#B2904D] opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>
                                                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-100 bg-gray-100 shadow-sm group-hover:shadow-md transition-all">
                                                    <Image src={person.image} alt={person.name} width={96} height={96} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                                                </div>
                                            </div>
                                            <div className="text-center px-1">
                                                <h5 className="font-bold text-[#002342] text-xs md:text-sm leading-tight group-hover:text-[#B2904D] transition-colors">{person.name}</h5>
                                                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1 block">{person.role}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Gerentes */}
                        {activeOffice.managers.length > 0 && (
                            <div>
                                <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                                    <div className="w-1 h-6 md:h-8 bg-gray-300 rounded-full"></div>
                                    <h4 className="text-xl md:text-2xl font-serif font-bold text-[#002342]">Nuestra Gerencia</h4>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                                    {activeOffice.managers.map((person, idx) => (
                                        <div key={idx} className="group block text-center cursor-default">
                                            <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden border-2 border-gray-100 bg-gray-100">
                                                <Image src={person.image} alt={person.name} width={80} height={80} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                                            </div>
                                            <h5 className="font-bold text-[#002342] text-xs md:text-sm leading-tight">{person.name}</h5>
                                            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1 block">{person.role}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {/* 3. FORMULARIO */}
                    <div className="mt-4 pt-4 md:mt-6 md:pt-6 border-t border-gray-100">
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl relative">
                             <div className="h-2 w-full bg-g radient-to-r from-[#002342] to-[#B2904D]"></div>
                             <div className="contact-form-container">
                                 <ContactForm />
                             </div>
                        </div>
                    </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* VIDEO LIGHTBOX MODAL */}
      <AnimatePresence>
        {isVideoOpen && activeOffice.videoUrl && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
          >
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
            >
              <X size={32} />
            </button>
            
            <div className="w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative ring-1 ring-white/20">
               <video 
                  controls 
                  autoPlay 
                  className="w-full h-full"
               >
                  <source src={activeOffice.videoUrl} type="video/mp4" />
                  <source src={activeOffice.videoUrl.replace('.mp4', '.mov')} type="video/quicktime" />
                  Tu navegador no soporta el elemento de video.
               </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}