import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SkillsOrbit from '@/components/SkillsOrbit'

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen px-6 md:px-16 py-20 md:py-28" style={{ background: '#0d0d0d' }}>

        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-3 text-gray-500 text-xs tracking-widest uppercase font-syne mb-3">
            <span className="w-8 h-px bg-gray-500 inline-block" /> Who I Am
          </div>
          <h1 className="font-syne font-black text-4xl md:text-6xl leading-tight">About Me</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start max-w-5xl">
          <div>
            <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-5">
              Hello! I'm <span className="text-white font-semibold">Manoj Sachdev</span>, a passionate
              Full Stack Developer and UI/UX Designer with a strong eye for clean, modern interfaces.
            </p>
            <p className="text-gray-400 leading-relaxed mb-5 text-sm md:text-base">
              With experience in React, Next.js, Node.js and more, I bring ideas to life through clean
              code and thoughtful design. Every project is an opportunity to create something meaningful.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
              Always eager to take on new challenges, collaborate with creative teams, and push the boundaries of the web.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: '3+', label: 'Years Experience' },
                { num: '20+', label: 'Projects Completed' },
                { num: '15+', label: 'Happy Clients' },
                { num: '5+', label: 'Technologies' },
              ].map(s => (
                <div key={s.label} className="border border-[#2a2a2a] p-4 md:p-6 rounded-lg hover:border-white hover:-translate-y-1 transition-all cursor-default">
                  <div className="font-syne font-black text-3xl md:text-4xl">{s.num}</div>
                  <div className="text-gray-500 text-xs md:text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="border border-[#2a2a2a] rounded-2xl p-6 md:p-8" style={{ background: '#141414' }}>
              <h3 className="font-syne font-bold text-lg mb-5">Personal Info</h3>
              {[
                { key: 'Name', val: 'Manoj Sachdev' },
                { key: 'Role', val: 'Full Stack Developer' },
                { key: 'Location', val: 'India' },
                { key: 'Email', val: 'manoj@email.com' },
                { key: 'Phone', val: '+91 98765 43210' },
                { key: 'Available', val: '✔ For Hire', green: true },
              ].map((item: any) => (
                <div key={item.key} className="flex justify-between py-2.5 border-b border-[#2a2a2a] last:border-0">
                  <span className="text-gray-500 text-sm">{item.key}</span>
                  <span className={`text-sm font-medium ${item.green ? 'text-green-400' : 'text-white'}`}>{item.val}</span>
                </div>
              ))}
            </div>
            <a href="#" className="flex items-center justify-center gap-2 w-full py-3.5 bg-white text-black font-syne font-bold rounded-lg hover:-translate-y-0.5 transition-transform text-sm">
              Download CV ↓
            </a>
          </div>
        </div>

        {/* Skills Orbit */}
        <div className="mt-16 md:mt-24 max-w-5xl">
          <h2 className="font-syne font-black text-3xl md:text-4xl mb-4 text-center">Skills</h2>
          <SkillsOrbit />
        </div>

      </section>
      <Footer />
    </main>
  )
}
