import plugin from 'tailwindcss/plugin'
import animate from 'tailwindcss-animate'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/./components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/./modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/./app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        elh_screens: '1920px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        ibm: ['IBM_Plex_Sans', 'sans-serif'],
        iCielGotham: ['var(--iCielGotham)'],
      },
      borderColor: {
        btn: '#D0D5DD',
      },
      boxShadow: {
        // x: 0, y:1, blur: 2, spread: 0, color: 101828 5%
        btn: '0px 1px 2px 0px rgba(16, 24, 32, 0.05)',
        popup: '4px 4px 40px 0px #0000001F',
      },
      colors: {
        'primary-blue': '#1b2f50',
        'primary-orange': '#F6921E',
        'elh-gray': '#9e9e9f',
      },
      backgroundImage: {
        bg_header: "url('/images/bg_header.jpg')",
        bg_hero: "url('/images//photos/tong-hop-10.jpg')",
        bg_factory: "url('/images/factory.jpg')",
        bg_machine: "url('/images/machine.png')",
        bg_hero_about: "url('/images/photos/tong-hop-01.jpg')",
        bg_hero_contact: "url('/images/contact/banner1.jpg')",
      },
      animation: {
        'spin-rev': 'spinRev 1s linear infinite',
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
        spinRev: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    animate,
    plugin(function ({ addComponents }) {
      addComponents({
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.absolute-center-x': {
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        },
        '.absolute-center-y': {
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        },
        '.tb-btn': {
          color: '#fff',
          background: '#161B26',
          border: '1px solid #fff',
          'border-radius': '50px',
          padding: '6px 16px',
          display: 'flex',
          'justify-content': 'center',
          gap: '0 4px',
          'min-width': '200px',
          'font-size': '16px',
          'line-height': '1.5',
        },
        '.bg-fade': {
          background: 'linear-gradient( 0deg,rgba(255, 255, 255, 0.7) 40%,rgba(255, 255, 255, 0.00) 60% )',
        },
      })
    }),
  ],
}

export default config
