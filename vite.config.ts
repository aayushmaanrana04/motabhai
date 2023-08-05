import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// server: {
	// 	proxy: {
	// 		'/airshot': {
	// 			target: 'https://test.buyhatke.com/airshot',
	// 			changeOrigin: true,
	// 			secure: false
	// 		}
	// 	}
	// }
});
