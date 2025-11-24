import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const articles = [
  {
    id: 12015,
    title: "Derechos Migratorios: Qué hacer si son transgredidos",
    url: "/derechos-de-migrantes/derechos-migratorios-que-hacer-si-son-transgredidos",
    author: "Julio César Sánchez",
    date: "noviembre 29, 2024",
    isoDate: "2024-11-29",
    excerpt: "El respeto a los derechos migratorios es un tema fundamental para la comunidad de migrantes latinoamericanos en Estados Unidos. Conocer y defender tus derechos es crucial, especialmente en situaciones donde puedes enfrentar abusos o discriminación..."
  },
  {
    id: 11960,
    title: "Asesoría Legal para Migrantes: Asegura tus Derechos",
    url: "/derechos-de-migrantes/asesoria-legal-para-migrantes-asegura-tus-derechos",
    author: "Julio César Sánchez",
    date: "noviembre 28, 2024",
    isoDate: "2024-11-28",
    excerpt: "Enfrentar un proceso migratorio en Estados Unidos puede ser un desafío complejo, especialmente cuando los derechos migratorios no siempre son claros para quienes los necesitan y se desconoce sobre la asesoría legal para migrantes..."
  },
  {
    id: 11883,
    title: "Derechos Migratorios para Víctimas de Crimen en EE.UU.",
    url: "/derechos-de-migrantes/derechos-migratorios-para-victimas-de-crimen",
    author: "Julio César Sánchez",
    date: "noviembre 28, 2024",
    isoDate: "2024-11-28",
    excerpt: "Si has sido víctima de un delito en Estados Unidos, comprender tus derechos migratorios puede ser clave para tu bienestar. En el Bufete de Abogados Manuel Solís reconocemos que ser víctima de un crimen puede ser abrumador y aterrador..."
  },
  {
    id: 11799,
    title: "Protección de Derechos Migratorios Durante el Proceso",
    url: "/derechos-de-migrantes/proteccion-de-derechos-migratorios",
    author: "Julio César Sánchez",
    date: "noviembre 27, 2024",
    isoDate: "2024-11-27",
    excerpt: "El proceso migratorio en los Estados Unidos puede ser complejo y lleno de desafíos. Más aún para quienes buscan regularizar su estatus legal o enfrentar situaciones de detención y deportación. Por ello, la protección de derechos..."
  },
  {
    id: 11529,
    title: "Derechos fundamentales de Migrantes en EE.UU.",
    url: "/derechos-de-migrantes/derechos-fundamentales-de-migrantes-en-ee-uu",
    author: "Julio César Sánchez",
    date: "noviembre 26, 2024",
    isoDate: "2024-11-26",
    excerpt: "Migrar a Estados Unidos es una decisión trascendental y, a menudo, un acto de valentía orillado por distintas situaciones. Muchas personas buscan un futuro mejor, estabilidad y oportunidades para ellas y sus familias..."
  },
  {
    id: 11319,
    title: "Protección Legal para Migrantes Víctimas de Abuso o Crimen",
    url: "/derechos-de-migrantes/proteccion-legal-para-migrantes",
    author: "Julio César Sánchez",
    date: "noviembre 25, 2024",
    isoDate: "2024-11-25",
    excerpt: "Llegar a un nuevo país trae consigo desafíos significativos, especialmente para quienes enfrentan situaciones de abuso, violencia o explotación. Sin embargo, en Estados Unidos, las víctimas de abuso o crimen..."
  }
];

export default function DerechosDeMigrantesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Header />

      <main className="flex-grow pt-42 pb-20 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <span className="block text-sm font-bold tracking-widest text-yellow-600 uppercase mb-2">
            Biblioteca Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
            Derechos de Migrantes
          </h1>
          <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Información esencial, guías y recursos legales para proteger tu estatus y bienestar en Estados Unidos.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link href={article.url} key={article.id} className="group">
              <article className="h-full flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-500/30 relative">
                
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-blue-700 transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0"></div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-yellow-600 uppercase tracking-wider">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                    Artículo Legal
                  </div>

                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-800 transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {article.excerpt}
                  </p>

                  <div className="pt-6 mt-auto border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                      </div>
                      <span className="font-medium text-gray-700">{article.author}</span>
                    </div>
                    <time dateTime={article.isoDate} className="text-gray-400 font-medium text-xs">
                      {article.date}
                    </time>
                  </div>
                </div>

                <div className="bg-gray-50 px-8 py-3 flex items-center justify-between group-hover:bg-blue-50 transition-colors duration-300">
                  <span className="text-sm font-bold text-blue-900 group-hover:text-blue-700">Leer artículo completo</span>
                  <svg className="w-5 h-5 text-blue-900 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}