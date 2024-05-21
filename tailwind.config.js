/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'main': "url('.//assets/main.jpg')",
        'petition2': "url('.//assets/petition2.jpg')",
        'donation': "url('.//assets/DonationCat.jpg')"
      }),
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.my-custom-background': {
          backgroundImage: 'url(".//assets/main.jpg")',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    
    
  

  ],
}

