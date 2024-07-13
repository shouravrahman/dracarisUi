import { defineConfig } from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import packageJson from "./package.json" assert { type: "json" };
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import image from '@rollup/plugin-image';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default defineConfig({
  input: "src/index.ts", // Your library's entry point
  output: [
    {
      file: packageJson.main, // ES Module output format
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module, // CommonJS output format
      format: "esm",
      sourcemap: true,
      exports: "named", // Export individual components
    },
  ],
  plugins: [
    nodeResolve(), // Resolve dependencies from 'node_modules'
    commonjs(), // Transform CommonJS modules for Rollup
    peerDepsExternal(),
    terser(),
    image(),
    typescript({
      tsconfig: "./tsconfig.json",
      exclude: [
        "**/*.test.tsx",
        "**/*.test.ts",
        "**/*.stories.tsx",
        "**/*.stories.ts",
      ],
    }), // Convert TypeScript to JavaScript
    postcss({
      extensions: [".css"],
      extract: false, // Don't extract CSS to a separate file
      inject: true, // Inject postcss into the bundle
      minimize: true, // Minify CSS
      config: {
        path: "./postcss.config.js",
      },
      
      sourceMap: true, // Generate source maps
    }),

    {
      input: "dist/esm/types/index.d.ts",
      output: [{ file: "dist/index.d.ts", format: "esm" }],
      plugins: [dts()],
      external: [/\.css$/],
    },
  ],
});
