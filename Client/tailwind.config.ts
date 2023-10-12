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
          450: '#F57224',
          550: '#F85606',
          650: '#DF4D05'
        },
        neutral: {
          650: '#424242',
          450: '#3757575'
        },
        blue: {
          350: '#51A7CD',
          550: '#3B5998'
        },
        red: {
          450: '#D34836'
        }
      },
      padding: {
        '85': '85px',
        '13': '13px',
        '19': '19px',
        '68': '270px'
      },
      height: {
        'LogoImageHeight': '48px',
        'SearchHeight': '38px',
        '183': '183px',
        '265': '265px',
        '344': '344px',
        '322':'322px'  
        
      },
      width: {
        'LogoImageWidth': '120px',
        '90%': '90%',
        '84%': '84%',
        '60%': '60%',
        '40%': '40%',
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
