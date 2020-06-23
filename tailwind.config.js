module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.ts'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        skeleton: 'var(--color-skeleton)',
        gradient100: 'var(--color-gradient100)',
        gradient200: 'var(--color-gradient200)',
        gradient300: 'var(--color-gradient300)',
        paper: 'var(--color-paper)',
        primaryText: 'var(--color-primaryText)',
        secondaryText: 'var(--color-secondaryText)',
        disabled: 'var(--color-disabled)',
        hint: 'var(--color-hint)',
        divider: 'var(--color-divider)',
        yellow: 'var(--color-yellow)',
        blue: 'var(--color-blue)',
        bioret: 'var(--color-bioret)',
        red: 'var(--color-red)',
        green: 'var(--color-green)',
        html: '#ffffff',
      },
      fontFamily: {
        body: ['Montserrat', 'Sans-serif'],
        display: ['Signika', 'Sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
      },
    },
  },
  variants: {},
  plugins: [],
};
