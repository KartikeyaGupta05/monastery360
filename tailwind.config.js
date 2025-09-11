/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', // muted brown
        input: 'var(--color-input)', // pure white
        ring: 'var(--color-ring)', // himalayan sky blue
        background: 'var(--color-background)', // warm off-white
        foreground: 'var(--color-foreground)', // deep brown
        primary: {
          DEFAULT: 'var(--color-primary)', // monastery brick brown
          foreground: 'var(--color-primary-foreground)' // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // temple gold
          foreground: 'var(--color-secondary-foreground)' // deep brown
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // deep red
          foreground: 'var(--color-destructive-foreground)' // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // light warm gray
          foreground: 'var(--color-muted-foreground)' // muted brown
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // himalayan sky blue
          foreground: 'var(--color-accent-foreground)' // white
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // pure white
          foreground: 'var(--color-popover-foreground)' // deep brown
        },
        card: {
          DEFAULT: 'var(--color-card)', // pure white
          foreground: 'var(--color-card-foreground)' // deep brown
        },
        success: {
          DEFAULT: 'var(--color-success)', // forest green
          foreground: 'var(--color-success-foreground)' // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // saffron orange
          foreground: 'var(--color-warning-foreground)' // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // deep red
          foreground: 'var(--color-error-foreground)' // white
        }
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'caption': ['Source Sans Pro', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }]
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px'
      },
      boxShadow: {
        'spiritual': '0 2px 12px rgba(139, 69, 19, 0.1)',
        'spiritual-lg': '0 8px 32px rgba(139, 69, 19, 0.15)',
        'breathing': '0 4px 20px rgba(139, 69, 19, 0.1)'
      },
      animation: {
        'contemplative-pulse': 'contemplative-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite'
      },
      keyframes: {
        'contemplative-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      transitionTimingFunction: {
        'spiritual': 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ],
}