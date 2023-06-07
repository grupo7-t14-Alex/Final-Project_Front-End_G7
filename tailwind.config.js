/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'brand-1': '#4529E6',
        'brand-2': '#5126EA',
        'brand-3': '#B0A6F0',
        'brand-4': '#EDEAFD',
        'alert-1': '#CD2B31',
        'alert-2': '#FDD8D8',
        'alert-3': '#FFE5E5',
        'sucess-1': '#18794E',
        'sucess-2': '#CCEBD7',
        'sucess-3': '#DDF3E4',
        'random-1': '#E34D8C',
        'random-2': '#C04277',
        'random-3': '#7D2A4D',
        'random-4': '#7000FF',
        'random-5': '#6200E3',
        'random-6': '#36007D',
        'random-7': '#349974',
        'random-8': '#2A7D5F',
        'random-9': '#153D2E',
        'random-10': '#6100FF',
        'random-11': '#5700E3',
        'random-12': '#30007D'
      },
      colors: {
        'gray': {
          000: '#0B0D0D',
          100: '#212529',
          200: '#495057',
          300: '#868E96',
          400: '#ADB5BD',
          500: '#CED4DA',
          600: '#DEE2E6',
          700: '#E9ECEF',
          800: '#F1F3F5',
          900: '#F8F9FA',
          1000: '#FDFDFD'
        },
        'brand-1': '#4529E6',
        'brand-2': '#5126EA',
        'brand-3': '#B0A6F0',
        'brand-4': '#EDEAFD',
        'alert-1': '#CD2B31',
        'alert-2': '#FDD8D8',
        'alert-3': '#FFE5E5',
        'sucess-1': '#18794E',
        'sucess-2': '#CCEBD7',
        'sucess-3': '#DDF3E4',
        'random-1': '#E34D8C',
        'random-2': '#C04277',
        'random-3': '#7D2A4D',
        'random-4': '#7000FF',
        'random-5': '#6200E3',
        'random-6': '#36007D',
        'random-7': '#349974',
        'random-8': '#2A7D5F',
        'random-9': '#153D2E',
        'random-10': '#6100FF',
        'random-11': '#5700E3',
        'random-12': '#30007D'

      },
      width: {
        19.5: 312,
        28.125: 200,
      }

    },
  },
  plugins: [],
}
