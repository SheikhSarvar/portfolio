import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      /* ── FONTS ───────────────────────────────────────────────── */
      fontFamily: {
        display: ['Syne', 'SF Pro Display', ...fontFamily.sans],
        body:    ['Inter', 'SF Pro Text', ...fontFamily.sans],
        mono:    ['JetBrains Mono', 'SF Mono', ...fontFamily.mono],
      },

      /* ── COLORS ─────────────────────────────────────────────── */
      colors: {
        base: {
          50:  '#F8FAFB',
          100: '#F1F4F6',
          200: '#E2E8ED',
          300: '#C8D3DC',
          400: '#8EA4B4',
          500: '#5A7389',
          600: '#3A5468',
          700: '#1E3344',
          800: '#0F1E29',
          900: '#060D12',
        },
        signal: {
          300: '#7FFFDA',
          400: '#3BFFD0',
          500: '#00E5B4',  /* primary accent */
          600: '#00C49A',
          700: '#009A78',
          800: '#006B54',
        },
        depth: {
          800: '#0A1628',
          900: '#050D1A',
          950: '#020810',
        },
      },

      /* ── SPACING ─────────────────────────────────────────────── */
      spacing: {
        section: 'clamp(5rem, 8vw, 8rem)',
      },

      /* ── BORDER RADIUS ───────────────────────────────────────── */
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },

      /* ── BOX SHADOW ──────────────────────────────────────────── */
      boxShadow: {
        accent: '0 0 0 1px #00E5B4, 0 0 20px 0 rgb(0 229 180 / 0.2)',
        'accent-strong': '0 0 0 1px #00E5B4, 0 0 40px 0 rgb(0 229 180 / 0.35)',
        glass: '0 4px 24px rgb(0 0 0 / 0.06)',
        card: '0 1px 3px rgb(0 0 0 / 0.04), 0 4px 12px rgb(0 0 0 / 0.04)',
        'card-hover': '0 4px 24px rgb(0 0 0 / 0.08), 0 8px 32px rgb(0 0 0 / 0.06)',
      },

      /* ── ANIMATIONS ──────────────────────────────────────────── */
      animation: {
        'fade-in':        'fadeIn 0.4s cubic-bezier(0.0, 0.0, 0.2, 1) both',
        'slide-up':       'slideUp 0.5s cubic-bezier(0.0, 0.0, 0.2, 1) both',
        'slide-down':     'slideDown 0.3s cubic-bezier(0.0, 0.0, 0.2, 1) both',
        'scale-in':       'scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'glow-pulse':     'glowPulse 3s ease-in-out infinite',
        'float':          'float 6s ease-in-out infinite',
        'aurora':         'aurora 12s ease-in-out infinite alternate',
        'text-shimmer':   'textShimmer 3s ease-in-out infinite',
        'spin-slow':      'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%':   { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0 1px #00E5B4, 0 0 20px 0 rgb(0 229 180 / 0.2)' },
          '50%':       { boxShadow: '0 0 0 1px #00E5B4, 0 0 40px 0 rgb(0 229 180 / 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        aurora: {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        textShimmer: {
          '0%':   { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },

      /* ── TYPOGRAPHY ──────────────────────────────────────────── */
      letterSpacing: {
        tighter: '-0.04em',
        tight:   '-0.02em',
        wider:    '0.05em',
        widest:   '0.15em',
      },

      /* ── BACKDROP BLUR ───────────────────────────────────────── */
      backdropBlur: {
        xs: '4px',
      },

      /* ── SCREENS ─────────────────────────────────────────────── */
      screens: {
        'xs':   '375px',
        'sm':   '640px',
        'md':   '768px',
        'lg':   '1024px',
        'xl':   '1280px',
        '2xl':  '1440px',
        '3xl':  '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}

export default config
