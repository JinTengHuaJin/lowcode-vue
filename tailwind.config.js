const pxToRem = (px) => `${px / 16}rem`;
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    borderRadius: {
      base: '4px',
      small: '2px',
      round: '20px',
      circle: '100%',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 2px 6px 0 rgba(0, 0, 0, 0.08)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    fontSize: {
      'xs': '.75rem', // 12px
      'sm': '.875rem', // 14px
      'tiny': '.875rem', // 14px
      'base': '1rem', // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '4rem', // 64px
      '7xl': '5rem', // 80px
    },
    extend: {
      textColor: {
        primary: '#303133',
        secondary: '#909399',
        regular: '#606266',
        placeholder: '#c0c4cc',
        disabled: '#bbb',
        logo: '#355287'
      },
      borderColor: {
        base: 'transparent',
        light: '#e4e7ed',
        lighter: '#ebeef5',
        'extra-light': '#f2f6fc',
        disabled: '#e4e7ed',
      },
      colors: {
        white: '#ffffff',
        black: '#000000',
        primary: {
          DEFAULT: '#409eff',
          'light-1': '#53a8ff',
          'light-2': '#66b1ff',
          'light-3': '#79bbff',
          'light-4': '#8cc5ff',
          'light-5': '#a0cfff',
          'light-6': '#b3d8ff',
          'light-7': '#c6e2ff',
          'light-8': '#d9ecff',
          'light-9': '#ecf5ff',
          'dark-2': '#337ecc',
        },
        success: {
          DEFAULT: '#67c23a',
          'light-3': '#95d475',
          'light-5': '#b3e19d',
          'light-7': '#d1edc4',
          'light-8': '#e1f3d8',
          'light-9': '#f0f9eb',
          'dark-2': '#529b2e',
        },
        warning: {
          DEFAULT: '#e6a23c',
          'light-3': '#eebe77',
          'light-5': '#f3d19e',
          'light-7': '#f8e3c5',
          'light-8': '#faecd8',
          'light-9': '#fdf6ec',
          'dark-2': '#b88230',
        },
        danger: {
          DEFAULT: '#f56c6c',
          'light-3': '#f89898',
          'light-5': '#fab6b6',
          'light-7': '#fcd3d3',
          'light-8': '#fde2e2',
          'light-9': '#fef0f0',
          'dark-2': '#c45656',
        },
        error: {
          DEFAULT: '#f56c6c',
          'light-3': '#f89898',
          'light-5': '#fab6b6',
          'light-7': '#fcd3d3',
          'light-8': '#fde2e2',
          'light-9': '#fef0f0',
          'dark-2': '#c45656',
        },
        info: {
          DEFAULT: '#909399',
          'light-3': '#b1b3b8',
          'light-5': '#c8c9cc',
          'light-7': '#dedfe0',
          'light-8': '#e9e9eb',
          'light-9': '#f4f4f5',
          'dark-2': '#73767a',
        },
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '150': pxToRem(600),
        '300': pxToRem(1200),
      },
      lineHeight: {
        '16': pxToRem(64)
      }
    },
  },
  plugins: [],
}
