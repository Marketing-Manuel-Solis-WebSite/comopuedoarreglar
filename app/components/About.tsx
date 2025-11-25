import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold">
              Nuestra pasión es <span className="text-[#B2904D]">ayudarle.</span>
            </h2>
            
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p className="leading-relaxed">
                Para nosotros, &quot;50.000 casos&quot; no es solo una cifra; es el reflejo de vidas tocadas 
                por desafíos significativos. Cada caso representa a alguien que enfrentó obstáculos, 
                tragedias, injusticias o sentimientos de impotencia.
              </p>
              
              <p className="leading-relaxed">
                Cada persona confió en nuestra promesa de brindar ayuda, y cada una recibió el compromiso 
                y la experiencia de nuestro equipo de más de 200 profesionales.
              </p>
            </div>

            <Link
              href="/Testimonios"
              className="inline-block bg-[#B2904D] text-white px-10 py-4 rounded-lg font-semibold text-lg
                hover:bg-[#9a7a3d] transition-all duration-300 shadow-lg hover:shadow-xl 
                transform hover:scale-105"
            >
              Saber Más
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <Image
              src="/home-image.jpg"
              alt="Equipo de abogados ayudando a clientes"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}