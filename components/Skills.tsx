'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const categories = [
  { 
    image: '/image/blood.jpeg', // Public/images folder mein ye file honi chahiye
    title: 'Healthcare Hub', 
    description: 'Leading massive medical camps and blood donation drives across the Haryana industrial belt.',
    skills: [
      { name: 'Medical Camps', pct: 95 }, 
      { name: 'Blood Donation', pct: 88 }, 
      { name: 'Health Awareness', pct: 85 }
    ] 
  },
  { 
    image: '/image/school.jpeg', 
    title: 'Vocational Skill', 
    description: 'Empowering local youth in Sector-14 with professional industrial training workshops.',
    skills: [
      { name: 'Industrial Training', pct: 82 }, 
      { name: 'Youth Mentorship', pct: 78 }, 
      { name: 'Skill Development', pct: 85 }
    ] 
  },
  { 
    image: '/image/study.jpeg', 
    title: 'Education First', 
    description: 'Developing scholarship programs for the families of industrial workers in Faridabad.',
    skills: [
      { name: 'Scholarships', pct: 90 }, 
      { name: 'Worker Support', pct: 88 }, 
      { name: 'Academic Grants', pct: 72 }
    ] 
  },
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
      <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
        <div className="flex items-center justify-center gap-3 text-gray-500 text-xs tracking-widest uppercase font-syne mb-3">
          <span className="w-8 h-px bg-gray-500" /> Impact & Skills
        </div>
        <h2 className="font-syne font-black text-3xl md:text-5xl text-white">SERVICE ABOVE SELF</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-white">
        {categories.map((cat, i) => (
          <div key={cat.title}
            className="reveal opacity-0 translate-y-8 transition-all duration-700 border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#555] hover:-translate-y-2 group"
            style={{ background: '#141414', transitionDelay: `${i * 0.1}s` }}>
            
            {/* Image Section */}
            <div className="relative w-full h-40 mb-6 overflow-hidden rounded-xl bg-[#2a2a2a]">
               <Image 
                src={cat.image} 
                alt={cat.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <h3 className="font-syne font-bold text-xl mb-3">{cat.title}</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {cat.description}
            </p>

            <div className="space-y-4">
              {cat.skills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between text-[11px] mb-1 uppercase tracking-wider">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-500">{skill.pct}%</span>
                  </div>
                  <div className="h-1 rounded bg-[#2a2a2a] overflow-hidden">
                    <div 
                      data-width={skill.pct} 
                      style={{ 
                        height: '100%', 
                        width: 0, 
                        background: 'linear-gradient(90deg, #fff, #888)', 
                        borderRadius: 2, 
                        transition: 'width 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)' 
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}