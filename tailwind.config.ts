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
      }
    }
  },
  plugins: []
}
export default config
