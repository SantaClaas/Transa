import materialTailwind from "@claas.dev/material-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fly-in": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "shrink-walk": {
          //TODO how to access Tailwind CSS config?
          // h-56 to h-24
          from: { height: "14rem" },
          to: { height: "6rem" },
        },
        "grow-walk": {
          //TODO how to access Tailwind CSS config?
          // h-56 to h-24
          from: { height: "6rem" },
          to: { height: "14rem" },
        },
      },
      animation: {
        "fly-in": "fly-in 500ms ease-in-out",
        "shrink-walk": "shrink-walk 500ms ease-in-out",
        "grow-walk": "grow-walk 500ms ease-in-out",
      },
    },
  },
  plugins: [materialTailwind({ source: "#0c1445" })],
};
