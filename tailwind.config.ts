/** @type {import('tailwindcss').Config} */
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: withOpacityValue('--color-primary'),
        secondary: withOpacityValue('--color-secondary'),
        tertiary: withOpacityValue('--color-tertiary'),
      },
      fontFamily: {
        SpecialElite: ["'Special Elite'", 'system-ui'],
        StardosStencil: ["'Stardos Stencil'", 'system-ui'],
        Teko: ["'Teko'", 'system-ui'],
        Sono: ["'Sono'", 'system-ui'],
      },
      width: {
        '7xl': '1172px',
      },
    },
  },
  plugins: [],
};
