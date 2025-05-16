import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react({
        babel: {
            plugins: [["babel-plugin-react-compiler"]]
        }
    }), svgr()],
    css    : {
        preprocessorOptions: {
            scss: {
                api           : "modern-compiler",
                additionalData: `@use "/src/assets/styles/abstract/_index.scss" as *;`
            }
        }
    },
    base   : "/planets-fact-site/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
});