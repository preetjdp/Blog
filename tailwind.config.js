// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily, boxShadow, fontSize } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          "custom-1": "#282c35",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.pink.700"),
              boxShadow: "0 1px 0 0 currentColor",
              textDecoration: "none",
              "&:hover": {
                boxShadow: "none",
              },
            },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.900") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.900") },
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            "h1,h2,h3,h4": {
              color: theme("colors.gray.200"),
            },
            blockquote: {
              color: theme("colors.gray.200"),
            },
            a: {
              color: theme("colors.pink.300"),
            },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.200") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.200") },
              },
            },
            strong: { color: theme("colors.gray.200") },
          },
        },
      }),
      fontFamily: {
        sans: ["montserrat"],
        serif: ["charter"],
        default: ["system-ui"],
        mono: ["monospace"],
        system: ["system-ui"],
      },
      boxShadow: {
        "3xl": "0 0px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
    // fontFamily: {
    //   sans: ["montserrat", ...fontFamily.sans],
    //   serif: ["charter", ...fontFamily.serif],
    //   default: ["system-ui"],
    //   mono: ["mono"],
    // },
    fontSize: {
      ...fontSize,
      xxl: "1.675rem",
    },
    boxShadow: {
      ...boxShadow,
      link: "0 1px 0 0 currentColor",
      cm: "0 2px 15px 0 rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
  },
  variants: {
    extend: {},
    typography: ["dark"],
  },
  important: true,
  plugins: [require("@tailwindcss/typography")],
};
