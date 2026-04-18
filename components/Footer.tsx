import Link from 'next/link'
import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 md:px-16 py-6 text-center md:text-left"
      style={{ borderTop: '1px solid #2a2a2a', background: '#0d0d0d' }}>
      <p className="text-gray-500 text-sm">© 2024 Manoj Sachdev. All rights reserved.</p>
      <div className="flex gap-5">
        {[FaTwitter, FaGithub, FaLinkedinIn, FaInstagram].map((Icon, i) => (
          <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors text-base"><Icon /></a>
        ))}
      </div>
    </footer>
  )
}
