'use client'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  // 1. Define the data for each testimonial here
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Khanna",
      initials: "RK",
      role: "CEO, Homage Infratech",
      text: "The digital transformation Manoj brought to our real estate ventures was seamless. Our lead generation increased by 40% within the first quarter."
    },
    {
      id: 2,
      name: "Sandeep Gupta",
      initials: "SG",
      role: "Senior Partner, AKRV & Associates",
      text: "Manoj's ability to simplify complex accounting services into a clean, professional web presence is unmatched. A true asset for any corporate brand."
    },
    {
      id: 3,
      name: "Rotary District 3011",
      initials: "RC",
      role: "Community Leadership",
      text: "Manoj's presidency has seen unprecedented growth in community welfare. He truly balances business logic with human empathy."
    }
  ];

  return (
    <section id="social" className="py-24 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-4xl font-black #fff">Wall of Love</h2>
          <p className="text-slate-300">Industry insights and community leadership</p>
        </div>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3"
        >
          LinkedIn Profile <FaExternalLinkAlt size={20} />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* 2. Map through the testimonials array instead of [1, 2, 3] */}
        {testimonials.map((item) => (
          <div key={item.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all">
            <p className="text-slate-600 italic mb-8 leading-relaxed">
              &quot;{item.text}&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                {item.initials}
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm uppercase">
                  {item.name}
                </div>
                <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
                  {item.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}