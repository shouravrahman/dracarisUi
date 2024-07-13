import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    // files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],

    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }], // Disallow console in production

      "no-duplicate-imports": "warn",

      "no-extra-semi": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"], // Enforce double quotes
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": ["error", { max: 1 }], // Allow one empty line
      "no-unneeded-ternary": "warn",

      "react/react-in-jsx-scope": "off",
    },
  },

  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];
