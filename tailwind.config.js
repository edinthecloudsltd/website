module.exports = {
  darkMode: "media",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      colors: {
        dark: "#24283b",
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.900"),
            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
            },

            "h2 a": {
              color: theme("colors.gray.900"),
              textDecoration: "none",
            },
            ".tag a": {
              textDecoration: "none",
            },

            p: {
              color: theme("colors.gray.800"),
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
              backgroundColor: theme("colors.gray.800"),
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
};
