module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6EC5E9',
        secondary: '#003A6F',
        danger: '#FF5959',
        warning: '#FFC56C',
        fade: '#F2F1F1',
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
        bounce800: 'bounce 2s infinite 600ms',
        pulse200: 'pulse 1s linear infinite 20ms',
      },
      boxShadow: {
        blue: '0 5px 5px -3px rgba(0, 0, 50, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
