/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dashdash-pattern':'url(/images/accets/arrow_lines.png)',
        'whay-ai':'url(/images/accets/why-ai-bg.jpg)'

      },
      backgroundSize:{
        
      }
    },
  },
  plugins: [],
}
