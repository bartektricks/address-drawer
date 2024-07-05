import type { Config } from "tailwindcss";
import hideScrollbarPlugin from "./src/helpers/hideScrollbarPlugin";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [hideScrollbarPlugin()],
} satisfies Config;
