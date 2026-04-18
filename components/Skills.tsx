'use client'
import { useEffect, useRef } from 'react'

const categories = [
  { icon: '⚡', title: 'Frontend', skills: [{ name: 'HTML / CSS', pct: 95 }, { name: 'JavaScript', pct: 88 }, { name: 'React.js', pct: 85 }, { name: 'Next.js', pct: 80 }] },
  { icon: '🛠', title: 'Backend', skills: [{ name: 'Node.js', pct: 82 }, { name: 'Express.js', pct: 78 }, { name: 'MongoDB', pct: 75 }, { name: 'SQL', pct: 70 }] },
  { icon: '🎨', title: 'Design & Tools', skills: [{ name: 'Figma', pct: 85 }, { name: 'Tailwind CSS', pct: 90 }, { name: 'Git / GitHub', pct: 88 }, { name: 'Framer Motion', pct: 72 }] },
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100', 'translate-y-0')
          e.target.querySelectorAll<HTMLElement>('[data-width]').forEach(bar => {
            bar.style.width = bar.dataset.width + '%'
          })
        }
      })
    }, { threshold: 0.15 })
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="px-6 md:px-16 py-16 md:py-24" style={{ background: '#0d0d0d' }}>
      <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-10">
        <div className="flex items-center justify-center gap-3 text-gray-500 text-xs tracking-widest uppercase font-syne mb-3">
          <span className="w-8 h-px bg-gray-500" /> What I Know
        </div>
        <h2 className="font-syne font-black text-3xl md:text-5xl">My Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {categories.map((cat, i) => (
          <div key={cat.title}
            className="reveal opacity-0 translate-y-8 transition-all duration-700 border border-[#2a2a2a] rounded-xl p-6 hover:border-[#555] hover:-translate-y-1"
            style={{ background: '#141414', transitionDelay: `${i * 0.1}s` }}>
            <h3 className="font-syne font-bold text-base mb-5 flex items-center gap-2">{cat.icon} {cat.title}</h3>
            {cat.skills.map(skill => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                  <span>{skill.name}</span>
                  <span className="text-gray-500">{skill.pct}%</span>
                </div>
                <div className="h-1 rounded bg-[#2a2a2a] overflow-hidden">
                  <div data-width={skill.pct} style={{ height: '100%', width: 0, background: 'white', borderRadius: 2, transition: 'width 1.2s ease' }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
