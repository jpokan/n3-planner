// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	// css: ['@/assets/css/satoshi.css'],
	tailwindcss: {
		viewer: false,
	},
	colorMode: {
		classSuffix: ''
	},
	modules: ['@nuxtjs/tailwindcss']
})
