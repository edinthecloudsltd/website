module.exports = {
  darkMode: "class",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    colors: {
      red: {
        300: '#fe4632',
      },
      gray: {
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#201e1e',
      },
      white: {
        DEFAULT: "#ffffff"
      }
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme("colors.red.300"),
              "&:hover": {
                color: "#a33327",
              },
            },
            h1: {
              color: theme("colors.gray.700"),
            },
            h2: {
              color: theme("colors.gray.700"),
            },
            "h2 a": {
              color: theme("colors.gray.700"),
              textDecoration: "none",
            },
            h3: {
              color: theme("colors.gray.700"),
            },
            ".tag a": {
              textDecoration: "none",
            },
            p: {
              color: theme("colors.gray.700"),
              fontSize: "20px"
            },
            li: {
              zIndex: 0,
            }
          },
        },

        dark: {
          css: {
            color: theme("colors.gray.300"),

            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
            },

            "h2 a": {
              color: theme("colors.gray.300"),
            },

            h1: {
              color: theme("ƒ"),
            },
            h2: {
              color: theme("colors.gray.300"),
            },
            h3: {
              color: theme("colors.gray.300"),
            },
            h4: {
              color: theme("colors.gray.300"),
            },
            h5: {
              color: theme("colors.gray.300"),
            },
            h6: {
              color: theme("colors.gray.300"),
            },

            p: {
              color: theme("colors.gray.300"),
            },

            strong: {
              color: theme("colors.gray.300"),
            },

            code: {
              color: theme("colors.gray.300"),
            },

            figcaption: {
              color: theme("colors.gray.500"),
            },

            blockquote: {
              color: theme("colors.gray.500"),
            },

            "::selection": {
              backgroundColor: "#6f7bb635",
            },

            ":root": {
              backgroundColor: theme("colors.gray.200"),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
  corePlugins: {
    backgroundImage: false,
  }
};
