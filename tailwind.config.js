/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aksana: {
          primary: '#064e3b',
          accent: '#047857',
          'accent-strong': '#065f46',
          'accent-soft': '#d1fae5',
          'accent-mint': '#ecfdf5',
          success: '#10b981',
          info: '#0891b2',
          ids: '#7c3aed',
        },
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        info: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: [
          'Plus Jakarta Sans Variable',
          'Plus Jakarta Sans',
          'Inter Variable',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono Variable',
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      fontSize: {
        kicker: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.14em', fontWeight: '800' }],
        micro: ['0.625rem', { lineHeight: '1.2', letterSpacing: '0.1em', fontWeight: '700' }],
        'table-head': ['0.6875rem', { lineHeight: '1.1', letterSpacing: '0.08em', fontWeight: '800' }],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 23, 42, 0.12)',
        'card-hover': '0 2px 4px rgba(15, 23, 42, 0.05), 0 16px 32px -16px rgba(15, 23, 42, 0.18)',
        nav: '0 -1px 2px rgba(15, 23, 42, 0.03), 0 -12px 32px -20px rgba(15, 23, 42, 0.25)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-urgent': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(239, 68, 68, 0.35)' },
          '50%': { boxShadow: '0 0 0 8px rgba(239, 68, 68, 0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-out',
        'slide-in': 'slide-in 240ms cubic-bezier(0.22, 1, 0.36, 1)',
        'pulse-urgent': 'pulse-urgent 1.8s ease-in-out infinite',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
}
