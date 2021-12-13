module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: [
      "./*.html",
    ],
    options: {
      safelist: [
        /(bg|ring)-(.*)-(\d{1}0{1,2})/
      ]
    }

  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: { //min-width(手機優先)，覆寫
      xs: '320px',
      sm: '360px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: { //額外加入

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
