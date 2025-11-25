import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'INICIO', href: '/' },
    { name: 'AREAS LEGALES', href: '/servicios' },
    { name: 'TESTIMONIALES', href: '/Testimonios' },
    { name: 'ABOGADOS', href: '/abogados' },
    { name: 'OFICINAS', href: '/oficinas' },
    { name: 'INFORMACIÓN', href: '/noticias' },
  ]

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/AbogadoManuelSolisOficial/', 
      icon: Facebook 
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/AbogadoMSolis', 
      icon: Twitter 
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/abogadomanuelsolisoficial/', 
      icon: Instagram 
    },
    { 
      name: 'YouTube', 
      href: 'https://www.youtube.com/channel/UCWD61mNBq6qJ0BMhj_-a4Vg', 
      icon: Youtube 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/manuel-solis-law-firm/', 
      icon: Linkedin 
    },
  ]

  return (
    <footer className="bg-[#B2904D] text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Logo and Social */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-8">
            <Image
              src="/logo-manuel-solis.png"
              alt="Logo Manuel Solis"
              width={276}
              height={80}
              className="h-20 w-auto hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <div className="flex justify-center gap-6 mb-10">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 p-4 rounded-full hover:bg-white hover:text-[#B2904D] 
                    transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mb-10">
          <ul className="flex flex-wrap justify-center gap-8 text-base">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-white/80 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Categories */}
        <div className="mb-12">
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li>
              <Link
                href="/category/proteccion-legal-para-migrantes"
                className="hover:text-white/80 transition-colors duration-300"
              >
                Protección legal para migrantes
              </Link>
            </li>
            <li className="text-white/40">|</li>
            <li>
              <Link
                href="/category/derechos-de-migrantes"
                className="hover:text-white/80 transition-colors duration-300"
              >
                Derechos de migrantes
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm border-t border-white/20 pt-8">
          <p className="text-white/90">
            Copyright © {currentYear} Todos los Derechos Reservados.{' '}
            <Link href="/" className="text-white hover:text-white/80 transition-colors duration-300 font-medium">
              ManuelSolis.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}