/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Include JSX files if needed
  theme: {
    extend: {
      transitionDelay: {
        100: '100ms',
        200: '200ms',
      },
      // Ensure transform and transition utilities are enabled
      transform: ['responsive', 'motion-safe', 'hover', 'focus'],
    },
  },
  plugins: [],
}
