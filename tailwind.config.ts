import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'light-black': '#111111',
        'light-blue': '#2960F8',
        'dark-blue': '#0043FE'
      },
      dropShadow: {
        blue: '0px 0px 4px rgba(41, 96, 248, 1)'
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(200%)' },
          '100%': { transform: 'translateY(0)' }
        },
        slideUpGreeting: {
          '0%': { transform: 'translateY(200%)' },
          '100%': { transform: 'translateY(-50%)' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        slideLeftMobile: {
          '0%': { transform: 'translateX(140%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideLeftDesktop: {
          '0%': { transform: 'translateX(300%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        slideUp: 'slideUp 1s',
        slideUpGreeting: 'slideUpGreeting 1s',
        slideDown: 'slideDown 1s',
        slideLeftMobile: 'slideLeftMobile 1s',
        slideLeftDesktop: 'slideLeftDesktop 1s'
      }
    }
  },
  plugins: []
}
export default config
