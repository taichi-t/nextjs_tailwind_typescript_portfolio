module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.ts'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
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
      },
    },
  },
  variants: {},
  plugins: [],
};
