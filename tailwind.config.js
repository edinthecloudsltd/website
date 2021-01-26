const { withTheme } = require("styled-components");

module.exports = {
  //darkMode: "media",
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
      }
    },

    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme("colors.red.300"),
              "&:hover": {
                color: "#a33327",
              },
            },
            h1: {
              color: theme("colors.gray.200"),
            },
            h2: {
              color: theme("colors.gray.200"),
            },
            "h2 a": {
              color: theme("colors.gray.200"),
              textDecoration: "none",
            },
            h3: {
              color: theme("colors.gray.200"),
            },
            ".tag a": {
              textDecoration: "none",
            },
            p: {
              color: theme("colors.gray.200"),
              fontSize: "20px"
            },
            li: {
              zIndex: 0,
            }
          },
        },

        dark: {
          css: {
            color: theme("colors.gray.400"),

            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
            },

            "h2 a": {
              color: theme("colors.gray.400"),
            },

            h1: {
              color: theme("colors.gray.400"),
            },
            h2: {
              color: theme("colors.gray.400"),
            },
            h3: {
              color: theme("colors.gray.400"),
            },
            h4: {
              color: theme("colors.gray.400"),
            },
            h5: {
              color: theme("colors.gray.400"),
            },
            h6: {
              color: theme("colors.gray.400"),
            },

            p: {
              color: theme("colors.gray.300"),
            },

            strong: {
              color: theme("colors.gray.400"),
            },

            code: {
              color: theme("colors.gray.400"),
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
