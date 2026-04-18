'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]

  const socials = [
    { icon: FaTwitter, href: '#' },
    { icon: FaGithub, href: '#' },
    { icon: FaLinkedinIn, href: '#' },
    { icon: FaInstagram, href: '#' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50"
      style={{ background: 'rgba(13,13,13,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #2a2a2a' }}>
      <div className="flex items-center justify-between px-6 md:px-16 py-4">

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-8 lg:gap-10">
          {links.map(link => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link key={link.href} href={link.href}
                className={`font-syne font-semibold text-sm tracking-wide transition-colors relative group ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            )
          })}
        </div>

        {/* Logo */}
        <Link href="/" className="rounded-full border-2 border-white flex items-center justify-center font-syne font-black text-sm tracking-wider" style={{ width: 46, height: 46 }}>
          MS
        </Link>

        {/* Desktop socials */}
        <div className="hidden md:flex gap-4 items-center">
          {socials.map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} className="text-gray-500 hover:text-white transition-colors text-base"><Icon /></a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white text-xl p-1" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-[#2a2a2a]">
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className={`font-syne font-semibold text-base py-1 ${pathname === link.href ? 'text-white' : 'text-gray-400'}`}>
              {link.label}
            </Link>
          ))}
          <div className="flex gap-5 mt-2">
            {socials.map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} className="text-gray-500 hover:text-white text-lg"><Icon /></a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
