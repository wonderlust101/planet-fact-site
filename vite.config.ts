/// <reference types="node" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "url";
import svgr from "vite-plugin-svgr";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler"]]
            }
        }),
        svgr()
    ],
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
                additionalData: `@use "/src/assets/styles/abstract/_index.scss" as *;`
            }
        }
    },
    base: "/planets-fact-site/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
});