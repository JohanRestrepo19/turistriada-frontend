/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        turistriada: {
          primary: '#4CAF50',
          'primary-focus': '#217724',
          'primary-content': '#FFFFFF',
          secondary: '#388E6F',
          'secondary-focus': '#14513B',
          'secondary-content': '#FFFFFF',
          accent: '#009688',
          'accent-focus': '#09514A',
          neutral: '#BDBDBD',
          'base-100': '#EEEEEE',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
          'error-content': '#FFFFFF'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}