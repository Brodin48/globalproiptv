/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      colors: {
        // Modern Green Brand Colors (from your palette)
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#00DF82', // Bright green #00DF82
          600: '#00c76f', // Slightly darker
          700: '#00b35c',
          800: '#00a049',
          900: '#006030',
        },
        // Deep teal/green for trust and professionalism
        trust: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#030F0F', // Dark green from palette
          600: '#03624C', // Your hex #03624C
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Bright accent colors using your green palette
        action: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#00DF82', // Main bright green CTA
          600: '#00c76f', // Hover state
          700: '#00b35c',
          800: '#00a049',
          900: '#006030',
        },
        // Urgent action colors (Red)
        urgent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626', // Main urgent red
          700: '#b91c1c', // Darker red for hover
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Success colors (Green)
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // Main success green
          600: '#059669', // Darker green for hover
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Premium/Value colors (Gold)
        premium: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24', // Main gold for premium
          500: '#f59e0b',
          600: '#d97706', // Darker gold
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Supporting colors
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#f0f5ff',
          100: '#d6e4ff',
          200: '#adc6ff',
          300: '#85a5ff',
          400: '#597ef7',
          500: '#2f54eb', // Indigo accent
          600: '#1d39c4',
          700: '#10239e',
          800: '#061178',
          900: '#030852',
        },
        // Dark background colors matching your palette
        dark: {
          900: '#000000', // Pure black
          800: '#030F0F', // Your dark green
          700: '#1a1a1a',
          600: '#262626',
          500: '#374151',
          400: '#4b5563',
        },
        // Text colors for dark theme
        light: {
          50: '#ffffff',
          100: '#f9fafb',
          200: '#f3f4f6',
          300: '#e5e7eb',
        },
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
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
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'pulse-cta': 'pulseCTA 2s ease-in-out infinite',
        'scroll-infinite': 'scrollInfinite 30s linear infinite',
        'scroll-infinite-reverse': 'scrollInfiniteReverse 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseCTA: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 223, 130, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(0, 223, 130, 0)' },
        },
        scrollInfinite: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollInfiniteReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // High-converting gradients with your green palette
        'gradient-hero': 'linear-gradient(135deg, #03624C 0%, #030F0F 100%)', // Trust green to dark
        'gradient-cta': 'linear-gradient(135deg, #00DF82 0%, #00c76f 100%)', // Bright green action
        'gradient-brand': 'linear-gradient(135deg, #03624C 0%, #00DF82 100%)', // Brand gradient
        'gradient-success': 'linear-gradient(135deg, #00DF82 0%, #00b35c 100%)', // Success green
        'gradient-premium': 'linear-gradient(135deg, #00DF82 0%, #03624C 100%)', // Premium green
        'gradient-primary': 'linear-gradient(135deg, #03624C 0%, #00DF82 100%)', // Primary green
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'outline-primary': '0 0 0 3px rgba(0, 223, 130, 0.1)',
        'outline-action': '0 0 0 3px rgba(0, 223, 130, 0.1)',
        'cta-glow': '0 0 20px rgba(0, 223, 130, 0.3)',
        'brand-glow': '0 0 20px rgba(3, 98, 76, 0.3)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [],
}