'use client'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home"
      className="min-h-screen flex flex-col md:grid md:grid-cols-2 items-center gap-6 px-6 md:px-16 pt-20 pb-10"
      style={{ background: '#0d0d0d' }}>

      {/* Portrait - shows second on mobile */}
      <div className="flex justify-center items-center relative order-2 md:order-1 w-full">
        <div className="relative flex items-center justify-center"
          style={{
            width: 'clamp(220px, 55vw, 380px)',
            height: 'clamp(270px, 65vw, 460px)',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #e94560 100%)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            animation: 'float 6s ease-in-out infinite, morphBlob 8s ease-in-out infinite',
          }}>
        
          <Image 
  src="/image/manoj.jpeg" 
  alt="Hero Image" 
  width={400} 
  height={400} 
  className="rounded-full" // Agar aapko gol image chahiye
/>
         
        </div>

        {/* Hire Me Badge */}
        <div className="absolute" style={{ bottom: 10, left: 0 }}>
          <div style={{
            width: 90, height: 90, borderRadius: '50%',
            border: '2px solid white', position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'rotateBadge 12s linear infinite',
          }}>
            <svg viewBox="0 0 110 110" style={{ position: 'absolute', width: '100%', height: '100%' }}>
              <defs>
                <path id="cp" d="M55,55 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" />
              </defs>
              <text fontFamily="Syne" fontSize="11" fill="white" fontWeight="600" letterSpacing="3">
                <textPath href="#cp">UI/UX Designer • Web Developer •</textPath>
              </text>
            </svg>
            <div style={{
              width: 34, height: 34, borderRadius: '50%',
              background: 'white', color: '#0d0d0d',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Syne', fontWeight: 800, fontSize: '0.5rem',
              textAlign: 'center', lineHeight: 1.2, zIndex: 2,
              animation: 'counterRotate 12s linear infinite',
            }}>
              HIRE<br />ME
            </div>
          </div>
        </div>
      </div>

      {/* Content - shows first on mobile */}
      <div className="order-1 md:order-2 md:pl-8 text-center md:text-left" style={{ animation: 'slideUp 0.8s ease both' }}>
        <h1 className="font-syne font-black leading-tight mb-5"
          style={{ fontSize: 'clamp(0.9rem, 5vw, 2.8rem)' }}>
          MANOJ SACHDEVA.
        </h1>
        <p className="text-gray-400 leading-relaxed mb-8 mx-auto md:mx-0"
          style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', maxWidth: 480 }}>
         Revolutionizing Mod Scaff and leading the Rotary Club of Faridabad IMT with vision. </p>
        <div className="flex gap-5 items-center justify-center md:justify-start">
          <a href="#"
            className="flex items-center gap-2 px-6 py-3.5 bg-white text-black font-syne font-bold rounded-md hover:-translate-y-0.5 transition-transform text-sm">
            <FaExternalLinkAlt size={11} /> Resume
          </a>
          <Link href="/contact"
            className="text-white font-syne font-semibold border-b-2 border-white pb-0.5 hover:opacity-60 transition-opacity text-sm">
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}
