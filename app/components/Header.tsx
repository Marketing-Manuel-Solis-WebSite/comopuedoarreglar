'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { 
      name: 'OFICINAS', href: '/oficinas'},
    { 
      name: 'ÁREAS LEGALES', 
      href: '/servicios',
      submenu: [
        { name: 'Accidentes', href: '/servicios/accidentes' },
        { name: 'Migración', href: '/servicios/migracion' },
        { name: 'Seguros', href: '/servicios/seguros' },
        { name: 'Ley Criminal', href: '/servicios/criminal' },
        { name: 'Familia', href: '/servicios/familia' },
      ]
    },
    { name: 'CLIENTES DETENIDOS', href: '/clientes-detenidos' },
    { name: 'TESTIMONIOS', href: '/Testimonios' },
    { 
      name: 'ABOGADOS', 
      href: '/abogados',
    },
    { name: 'INFORMACIÓN', href: '#recursos', submenu:[
        { name: 'Recursos', href: '/informacion/recursos' },
        { name: 'Noticias', href: '/informacion/noticias' },
        { name: 'Preguntas Frecuentes', href: '/informacion/faq' }
      ] 
    },
  ]

  return (
    <header className="fixed top-0 w-full bg-[#B2904D] z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-manuel-solis.png"
              alt="Logo Manuel Solis"
              width={276}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-white hover:text-gray-200 font-medium transition-colors text-sm"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-64 bg-[#B2904D] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-white hover:bg-[#9a7a3d] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/en"
              className="flex items-center text-white hover:text-gray-200 font-medium text-sm"
            >
              <span className="mr-2">🇺🇸</span>
              ENGLISH
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-4">
            {menuItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2 text-white hover:text-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 text-white hover:text-gray-200 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}