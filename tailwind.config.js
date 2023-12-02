module.exports = {
	darkMode: "class",
	content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				satoshi: ["Satoshi"],
			},
		},
	},
	safelist: ['list-disc','list-decimal']
	plugins: [
		// ...
	],
	// ...
};
