/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', 'sans-serif'], // SF Pro Display를 기본 sans 글꼴로 설정
      },
      fontSize: {
        sm: [],
        base: ['20.921px'], // 이게 넷플 기본 폰트
        lg: [],
        xl: [],
      },
      fontWeight: {
        bold: '700', // 글꼴 두께를 bold로 설정
      },
      lineHeight: {
        tight: '15.643px', // line-height를 특정 픽셀 값으로 설정
      },
      letterSpacing: {
        tighter: '-0.057px', // letter-spacing 설정
      },
    },
  },
  plugins: [],
};
