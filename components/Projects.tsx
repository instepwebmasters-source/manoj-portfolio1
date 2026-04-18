'use client'
import { useEffect, useRef } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  { emoji: '🛒', gradient: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)', tags: ['Next.js', 'MongoDB', 'Tailwind'], title: 'E-Commerce Platform', desc: 'Full-stack e-commerce platform with cart, authentication, and payment integration.', demo: '#', code: '#' },
  { emoji: '📊', gradient: 'linear-gradient(135deg, #0d2137, #163a52, #1d5064)', tags: ['React', 'Node.js', 'Chart.js'], title: 'Analytics Dashboard', desc: 'Interactive admin dashboard with real-time data visualization and analytics.', demo: '#', code: '#' },
  { emoji: '💬', gradient: 'linear-gradient(135deg, #1a0a2e, #2d1b69, #11998e)', tags: ['React', 'Socket.io', 'Express'], title: 'Real-Time Chat App', desc: 'Real-time messaging app with rooms, file sharing, and emoji support.', demo: '#', code: '#' },
]

export default function Projects() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('opacity-100', 'translate-y-0') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="px-6 md:px-16 py-16 md:py-24" style={{ background: '#0d0d0d' }}>
      <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-10">
        <div className="flex items-center justify-center gap-3 text-gray-500 text-xs tracking-widest uppercase font-syne mb-3">
          <span className="w-8 h-px bg-gray-500" /> My Work
        </div>
        <h2 className="font-syne font-black text-3xl md:text-5xl">Featured Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div key={p.title}
            className="reveal opacity-0 translate-y-8 transition-all duration-700 border border-[#2a2a2a] rounded-xl overflow-hidden hover:-translate-y-2 hover:border-[#555]"
            style={{ background: '#141414', transitionDelay: `${i * 0.1}s` }}>
            <div className="h-40 flex items-center justify-center text-5xl" style={{ background: p.gradient }}>{p.emoji}</div>
            <div className="p-5">
              <div className="flex gap-2 flex-wrap mb-3">
                {p.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 border border-[#2a2a2a] rounded-full text-xs text-gray-400 font-syne">{tag}</span>
                ))}
              </div>
              <h3 className="font-syne font-bold text-base mb-2">{p.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">{p.desc}</p>
              <div className="flex gap-4">
                <a href={p.demo} className="flex items-center gap-1 text-white text-xs font-syne font-semibold hover:opacity-60 transition-opacity">
                  <FaExternalLinkAlt size={10} /> Live Demo
                </a>
                <a href={p.code} className="flex items-center gap-1 text-white text-xs font-syne font-semibold hover:opacity-60 transition-opacity">
                  <FaGithub size={12} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
