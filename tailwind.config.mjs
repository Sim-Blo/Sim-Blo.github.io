/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            fontFamily: {
                // On intègre la police qu'on a chargée dans le Layout
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
        },
	},
	plugins: [],
}