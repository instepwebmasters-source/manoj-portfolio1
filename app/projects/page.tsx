import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  { emoji: '🛒', gradient: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)', tags: ['Next.js', 'MongoDB', 'Tailwind'], title: 'E-Commerce Platform', desc: 'A full-stack e-commerce platform with cart, authentication, and payment integration.', demo: '#', code: '#' },
  { emoji: '📊', gradient: 'linear-gradient(135deg, #0d2137, #163a52, #1d5064)', tags: ['React', 'Node.js', 'Chart.js'], title: 'Analytics Dashboard', desc: 'Interactive admin dashboard with real-time data visualization and analytics reports.', demo: '#', code: '#' },
  { emoji: '💬', gradient: 'linear-gradient(135deg, #1a0a2e, #2d1b69, #11998e)', tags: ['React', 'Socket.io', 'Express'], title: 'Real-Time Chat App', desc: 'Real-time messaging app with rooms, file sharing, and emoji support.', demo: '#', code: '#' },
  { emoji: '🌐', gradient: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', tags: ['Next.js', 'Tailwind', 'Framer Motion'], title: 'Portfolio Website', desc: 'Modern portfolio with smooth animations, dark theme, and fully responsive design.', demo: '#', code: '#' },
  { emoji: '📝', gradient: 'linear-gradient(135deg, #1a0a0a, #3b1f1f, #7b2d2d)', tags: ['React', 'Firebase', 'CSS'], title: 'Blog Platform', desc: 'Full-featured blogging platform with markdown support, categories, and comments.', demo: '#', code: '#' },
  { emoji: '🎵', gradient: 'linear-gradient(135deg, #0a1628, #1a3a5c, #00b4d8)', tags: ['React', 'Spotify API', 'Node.js'], title: 'Music Player App', desc: 'Spotify-integrated music player with playlists, search, and lyrics display.', demo: '#', code: '#' },
]

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen px-6 md:px-16 py-20 md:py-28" style={{ background: '#0d0d0d' }}>
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-3 text-gray-500 text-xs tracking-widest uppercase font-syne mb-3">
            <span className="w-8 h-px bg-gray-500 inline-block" /> My Work
          </div>
          <h1 className="font-syne font-black text-4xl md:text-6xl">Featured Projects</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl">
          {projects.map(p => (
            <div key={p.title} className="border border-[#2a2a2a] rounded-xl overflow-hidden hover:-translate-y-2 hover:border-[#555] transition-all" style={{ background: '#141414' }}>
              <div className="h-40 flex items-center justify-center text-5xl" style={{ background: p.gradient }}>{p.emoji}</div>
              <div className="p-5">
                <div className="flex gap-2 flex-wrap mb-3">
                  {p.tags.map(tag => <span key={tag} className="px-2 py-0.5 border border-[#2a2a2a] rounded-full text-xs text-gray-400 font-syne">{tag}</span>)}
                </div>
                <h3 className="font-syne font-bold text-base mb-2">{p.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">{p.desc}</p>
                <div className="flex gap-4">
                  <a href={p.demo} className="flex items-center gap-1 text-white text-xs font-syne font-semibold hover:opacity-60 transition-opacity"><FaExternalLinkAlt size={10} /> Live Demo</a>
                  <a href={p.code} className="flex items-center gap-1 text-white text-xs font-syne font-semibold hover:opacity-60 transition-opacity"><FaGithub size={12} /> Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
