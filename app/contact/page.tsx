'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen px-6 md:px-16 py-20 md:py-28" style={{ background: '#0d0d0d' }}>
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-3 text-gray-500 text-xs tracking-widest uppercase font-syne mb-3">
            <span className="w-8 h-px bg-gray-500 inline-block" /> Get In Touch
          </div>
          <h1 className="font-syne font-black text-4xl md:text-6xl leading-tight">Let's Work<br />Together</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-5xl">
          <div>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
            </p>
            {[
              { icon: FaEnvelope, label: 'Email', value: 'manoj@email.com' },
              { icon: FaPhone, label: 'Phone', value: '+91 98765 43210' },
              { icon: FaMapMarkerAlt, label: 'Location', value: 'India' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 mb-5 group cursor-default">
                <div className="w-11 h-11 border border-[#2a2a2a] rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <Icon />
                </div>
                <div>
                  <p className="font-syne font-semibold text-xs">{label}</p>
                  <p className="text-gray-400 text-sm">{value}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-4 mt-6">
              {[FaTwitter, FaGithub, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-[#2a2a2a] rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all hover:-translate-y-1">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-gray-500 font-syne font-semibold tracking-widest uppercase">Name</label>
                <input type="text" placeholder="Your name" className="bg-[#141414] border border-[#2a2a2a] text-white px-3 py-3 rounded-lg outline-none focus:border-white transition-colors placeholder:text-gray-600 text-sm" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-gray-500 font-syne font-semibold tracking-widest uppercase">Email</label>
                <input type="email" placeholder="Your email" className="bg-[#141414] border border-[#2a2a2a] text-white px-3 py-3 rounded-lg outline-none focus:border-white transition-colors placeholder:text-gray-600 text-sm" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-500 font-syne font-semibold tracking-widest uppercase">Subject</label>
              <input type="text" placeholder="Project enquiry" className="bg-[#141414] border border-[#2a2a2a] text-white px-3 py-3 rounded-lg outline-none focus:border-white transition-colors placeholder:text-gray-600 text-sm" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-500 font-syne font-semibold tracking-widest uppercase">Message</label>
              <textarea rows={5} placeholder="Tell me about your project..." className="bg-[#141414] border border-[#2a2a2a] text-white px-3 py-3 rounded-lg outline-none focus:border-white transition-colors placeholder:text-gray-600 resize-y text-sm" />
            </div>
            <button type="submit" className="flex items-center gap-2 self-start px-6 py-3.5 bg-white text-black font-syne font-bold rounded-lg hover:-translate-y-0.5 transition-transform text-sm">
              Send Message <FaArrowRight size={11} />
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  )
}
