/** @type {import('tailwindcss').Config} */
module.exports = {
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
        // Add custom colors here
      },
      fontFamily: {
        // Add custom fonts here
      },
      spacing: {
        // Add custom spacing values here
      },
      screens: {
        // Add custom breakpoints here
      },
    },
  },
  plugins: [
    // Add Tailwind plugins here
  ],
}
