import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.mjs", "**/*.js", "**/*.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        URL: "readonly",
        Response: "readonly"
      }
    },
    rules: {
      "no-console": "off"
    }
  }
];
