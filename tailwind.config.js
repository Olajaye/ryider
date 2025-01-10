/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins'
      },
      backgroundImage: {
        'onboardingBg': "url('/src/assets/onboard.png')",
        'heroBg': "url('/src/assets/herog.jpg')", 
        'stepOneBg': "url('/src/assets/steps/firststep.svg')",
        'stepSecondBg': "url('/src/assets/steps/secondstep.svg')",
        'stepThirdBg': "url('/src/assets/steps/thirdstep.svg')",
        'greenMoneyBg': "url('/src/assets/greenMoney.png')",
        'testimonialBg': "url('/src/assets/testimonialbg.png')"
      },
      colors:{
        "green" : '#128C7E'
      }
    },
  },
  plugins: [],
}