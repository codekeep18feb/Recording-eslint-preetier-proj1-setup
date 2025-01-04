import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["src/**/*.{js,mjs,cjs,jsx}"], // Adjust to target files within the `src` folder
  },
  {
    languageOptions: {
      globals: {
        AudioWorkletGlobalScope: "readonly", // Explicitly add this if needed
        document: "readonly",
        window: "readonly",
        // Add more globals if required
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
  {
    rules: {
      // Custom rules can be added here
      "react/react-in-jsx-scope": "off", // Disable the rule for React 17+ JSX Transform
      "no-console": ["warn", { allow: ["warn", "error"] }],
      semi: ["error", "always"],
      quotes: ["error", "double"],

      // Prettier formatting rules
      "prettier/prettier": [
        "error",
        { singleQuote: false, semi: true, trailingComma: "all" },
      ],
    },
  },
  // Use Prettier config to turn off conflicting ESLint rules
  configPrettier,
  {
    plugins: {
      prettier: pluginPrettier, // Corrected to object format for plugin
    },
  },
];
