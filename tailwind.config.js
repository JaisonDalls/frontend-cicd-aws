/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0f172a',
        'bg-card': '#1e293b',
        'primary': '#6366f1',
        'primary-hover': '#4f46e5',
        'text-muted': '#94a3b8',
        'border-main': 'rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
