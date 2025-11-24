import React from 'react';
import Header from '../components/Header'; // Ajusta la ruta según tu estructura
import Footer from '../components/Footer'; // Ajusta la ruta según tu estructura
import Office from '../components/Office'; // Importamos el componente nuevo

export default function OficinasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />

      <main className="flex-grow pt-32">
        {/* Hero Section Simple para la página global */}
        <div className="bg-[#002342] py-20 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Nuestras Sedes</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Con presencia en múltiples estados, el Bufete Manuel Solís está cerca de ti para defender tus derechos con fuerza y experiencia.
                </p>
            </div>
        </div>

        {/* Componente Interactivo de Oficinas */}
        <Office />
      </main>

      <Footer />
    </div>
  );
}