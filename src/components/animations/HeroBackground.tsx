import { useEffect, useState, useMemo } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { type ISourceOptions, type Engine } from '@tsparticles/engine'
import { loadFull } from 'tsparticles'
import { useReducedMotion } from '../../hooks'
import { AuroraBackground } from './AuroraBackground'
import { cn } from '../../lib/utils'

interface HeroBackgroundProps {
  theme: 'light' | 'dark'
}

export function HeroBackground({ theme }: HeroBackgroundProps) {
  const [init, setInit] = useState(false)
  const reduced = useReducedMotion()
  const isDark = theme === 'dark'

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false, zIndex: 1 },
      fpsLimit: reduced ? 30 : 120,
      interactivity: {
        events: {
          onHover: {
            enable: !reduced,
            mode: 'grab',
          },
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: isDark ? 0.7 : 0.5,
              color: isDark ? '#00E5B4' : '#0EA5E9',
            },
          },
        },
      },
      particles: {
        color: {
          value: isDark ? '#ffffff' : '#0EA5E9',
        },
        links: {
          color: isDark ? '#ffffff' : '#38bdf8',
          distance: 150,
          enable: true,
          opacity: isDark ? 0.15 : 0.3,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: !reduced,
          outModes: {
            default: 'bounce',
          },
          random: true,
          speed: 0.8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 1000,
            height: 1000
          },
          value: 60,
        },
        opacity: {
          value: isDark ? 0.3 : 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    [isDark, reduced]
  )

  return (
    <div className={cn(
      "fixed inset-0 z-0 overflow-hidden pointer-events-auto transition-colors duration-500",
      isDark ? 'bg-depth-950' : 'bg-[#f8fbfd]'
    )}>
      {/* Base Aurora Background */}
      <AuroraBackground intensity={isDark ? 0.35 : 0.15} theme={theme} className="!absolute" />
      
      {/* Particle Constellation Network */}
      {init && (
        <Particles
          id="tsparticles-hero"
          options={options}
          className="absolute inset-0 z-10 opacity-70"
        />
      )}
    </div>
  )
}
