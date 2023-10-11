import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        orange: {
          550: '#F85606',
          650: '#DF4D05'
        }
      },
      padding: {
        '85': '85px',
        '13': '13px',
        '19': '19px'
      },
      height: {
        'LogoImageHeight': '48px',
        'SearchHeight': '38px',
        '344': '344px',
        '322':'322px'  
        
      },
      width: {
        'LogoImageWidth': '120px',
        '100%': '100%',
        '84%': '84%',
        '20%': '20%',
        '80%': '80%'
      },
      fontSize: {
        darazSize: ['13px', '27px']
      }
    },
  },
  plugins: [],
}
export default config
