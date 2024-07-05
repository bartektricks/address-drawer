import plugin from "tailwindcss/plugin";

export default function hideScrollbarPlugin() {
	return plugin(({ addUtilities }) => {
		addUtilities({
			".no-scrollbar::-webkit-scrollbar": {
				display: "none" /* Chrome, Safari, Opera */,
			},
			".no-scrollbar": {
				"-ms-overflow-style": "none" /* IE and Edge */,
				"scrollbar-width": "none" /* Firefox */,
			},
		});
	});
}
