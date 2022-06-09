import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
	server: {
		port: 3000,
	},
	preview: {
		port: 3000,
	},
	plugins: [
		react(),
	],
	resolve: {
		alias: [
			{
				find: "@context", replacement: path.resolve(__dirname, "source", "app", "context"),
			}, {
				find: "@styles", replacement: path.resolve(__dirname, "source", "app", "styles"),
			}, {
				find: "@router", replacement: path.resolve(__dirname, "source", "app", "router"),
			}, {
				find: "@app", replacement: path.resolve(__dirname, "source", "app"),
			}, {
				find: "@", replacement: path.resolve(__dirname, "source"),
			},
		],
	},
});
