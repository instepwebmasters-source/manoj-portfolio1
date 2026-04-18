'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { num: '3+', label: 'Years Experience' },
  { num: '20+', label: 'Projects Completed' },
  { num: '15+', label: 'Happy Clients' },
  { num: '5+', label: 'Technologies' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('opacity-100', 'translate-y-0') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="px-6 md:px-16 py-16 md:py-24" style={{ background: '#0d0d0d' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">

        <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="flex items-center gap-3 text-gray-500 text-xs tracking-widest uppercase font-syne mb-3">
            <span className="w-8 h-px bg-gray-500" /> Who I Am
          </div>
          <h2 className="font-syne font-black text-3xl md:text-5xl leading-tight mb-5">
            About<br />Manoj Sachdev
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
            Hello! I'm Manoj Sachdev, a passionate Full Stack Developer and UI/UX Designer
            with a strong eye for clean, modern interfaces.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
            With experience in modern web technologies, I bring ideas to life through clean
            code and thoughtful design. Always eager to collaborate on meaningful projects.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {stats.map(s => (
              <div key={s.label} className="border border-[#2a2a2a] p-4 md:p-6 rounded-lg hover:border-white hover:-translate-y-1 transition-all cursor-default">
                <div className="font-syne font-black text-3xl md:text-4xl">{s.num}</div>
                <div className="text-gray-500 text-xs md:text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-150">
          <div className="border border-[#2a2a2a] rounded-2xl p-6 md:p-10" style={{ background: '#141414' }}>
            <h3 className="font-syne font-bold text-lg md:text-xl mb-5">Personal Info</h3>
            {[
              { key: 'Name', val: 'Manoj Sachdev' },
              { key: 'Role', val: 'Full Stack Developer' },
              { key: 'Location', val: 'India' },
              { key: 'Email', val: 'manoj@email.com' },
              { key: 'Available', val: '✔ For Hire', green: true },
            ].map(item => (
              <div key={item.key} className="flex justify-between py-3 border-b border-[#2a2a2a] last:border-0">
                <span className="text-gray-500 text-sm">{item.key}</span>
                <span className={`text-sm font-medium ${(item as any).green ? 'text-green-400' : 'text-white'}`}>{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
