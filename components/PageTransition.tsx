'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [stage, setStage] = useState<'idle' | 'in' | 'out'>('idle')

  useEffect(() => {
    // On route change, play "out" (curtains close), then "in" (curtains open)
    setStage('in')
    const t1 = setTimeout(() => setStage('out'), 600)
    const t2 = setTimeout(() => setStage('idle'), 1200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [pathname])

  return (
    <>
      {/* Left curtain - teal */}
      <div
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '50%', height: '100vh',
          background: '#00c9b1',
          zIndex: 9999,
          transform: stage === 'idle' ? 'translateX(-100%)' : stage === 'in' ? 'translateX(0%)' : 'translateX(-100%)',
          transition: stage === 'in'
            ? 'transform 0.5s cubic-bezier(0.77,0,0.18,1)'
            : 'transform 0.5s cubic-bezier(0.77,0,0.18,1) 0.05s',
          pointerEvents: 'none',
        }}
      />
      {/* Right curtain - white */}
      <div
        style={{
          position: 'fixed', top: 0, right: 0,
          width: '50%', height: '100vh',
          background: '#f5f5f5',
          zIndex: 9999,
          transform: stage === 'idle' ? 'translateX(100%)' : stage === 'in' ? 'translateX(0%)' : 'translateX(100%)',
          transition: stage === 'in'
            ? 'transform 0.5s cubic-bezier(0.77,0,0.18,1)'
            : 'transform 0.5s cubic-bezier(0.77,0,0.18,1) 0.05s',
          pointerEvents: 'none',
        }}
      />
      {children}
    </>
  )
}
