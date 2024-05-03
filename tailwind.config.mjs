/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 10s linear infinite',
				'spin-normal': 'spin 5s linear infinite',
				'spin-fast': 'spin 2s linear infinite',
			  },
			  keyframes: {
				spin: {
				  from: { transform: 'rotate(0deg)' },
				  to: { transform: 'rotate(360deg)' },
				},
			  },

		},
	},
	plugins: [],
}
