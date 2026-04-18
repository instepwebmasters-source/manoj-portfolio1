/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        bg: '#0d0d0d',
        bg2: '#141414',
        border: '#2a2a2a',
        muted: '#888888',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        rotateBadge: 'rotateBadge 12s linear infinite',
        counterRotate: 'counterRotate 12s linear infinite',
        morphBlob: 'morphBlob 8s ease-in-out infinite',
        slideUp: 'slideUp 0.8s ease both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        rotateBadge: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        counterRotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
        morphBlob: {
          '0%, 100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '50%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
