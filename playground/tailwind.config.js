/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("@freeloop/tailwindcss-mask")],
};
