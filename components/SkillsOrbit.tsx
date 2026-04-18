'use client'
import { useEffect, useRef } from 'react'

const skillRings = [
  // Ring 1 - closest (smallest circle)
  { ring: 1, skills: ['HTML', 'CSS'] },
  // Ring 2
  { ring: 2, skills: ['ReactJS', 'JavaScript'] },
  // Ring 3
  { ring: 3, skills: ['NextJS', 'Figma', 'GatsbyJS'] },
  // Ring 4 - outermost
  { ring: 4, skills: ['Github', 'Web Design', 'Firebase', 'Tailwind CSS'] },
]

// Flatten with ring info
const allSkills = skillRings.flatMap(r =>
  r.skills.map((name, i) => ({
    name,
    ring: r.ring,
    index: i,
    total: r.skills.length,
  }))
)

const RING_RADII = [120, 220, 320, 430]
const RING_SPEEDS = [0.4, 0.3, 0.2, 0.15] // degrees per frame

export default function SkillsOrbit() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const anglesRef = useRef(
    allSkills.map(s => {
      const baseAngle = (s.index / s.total) * Math.PI * 2
      return baseAngle
    })
  )
  const frameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const size = Math.min(window.innerWidth * 0.8, 900)
    canvas.width = size
    canvas.height = size
    const cx = size / 2
    const cy = size / 2
    const scale = size / 900

    function draw() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw rings
      RING_RADII.forEach(r => {
        ctx.beginPath()
        ctx.arc(cx, cy, r * scale, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(255,255,255,0.12)'
        ctx.lineWidth = 1.5
        ctx.stroke()
      })

      // Center circle
      ctx.beginPath()
      ctx.arc(cx, cy, 52 * scale, 0, Math.PI * 2)
      ctx.fillStyle = 'white'
      ctx.fill()
      ctx.font = `bold ${18 * scale}px Syne, sans-serif`
      ctx.fillStyle = '#0d0d0d'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('Web', cx, cy)

      // Draw skills
      allSkills.forEach((skill, i) => {
        const radius = RING_RADII[skill.ring - 1] * scale
        const angle = anglesRef.current[i]
        const x = cx + radius * Math.cos(angle)
        const y = cy + radius * Math.sin(angle)

        // Measure text
        const fontSize = Math.max(11, 13 * scale)
        ctx.font = `600 ${fontSize}px Syne, sans-serif`
        const textWidth = ctx.measureText(skill.name).width
        const padX = 16 * scale
        const padY = 9 * scale
        const bw = textWidth + padX * 2
        const bh = fontSize + padY * 2
        const br = bh / 2

        // Pill background
        ctx.beginPath()
        ctx.roundRect(x - bw / 2, y - bh / 2, bw, bh, br)
        ctx.fillStyle = 'white'
        ctx.fill()

        // Text
        ctx.fillStyle = '#0d0d0d'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(skill.name, x, y)

        // Update angle (rotate)
        anglesRef.current[i] += (RING_SPEEDS[skill.ring - 1] * Math.PI) / 180
      })

      frameRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  return (
    <div className="flex justify-center items-center w-full">
      <canvas ref={canvasRef} style={{ maxWidth: '100%' }} />
    </div>
  )
}
