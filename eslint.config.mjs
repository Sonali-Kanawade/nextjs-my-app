import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  
    // plugins: [
    //   "react",
    //   "prettier",
    //   ...
    // ]
  
  {
     ignores: [".next/*", 'public/*']
  },

  {
    // ignores: [".next/*", "node_modules/*"],
    rules: {
      // "prettier/prettier":[
      //   "error",
      //   {
      //     "endOfLine": "auto"
      //   }
      // ],
      'react/react-in-jsx-scope': 'off',
      "react/prop-types": 'off',
      "react/jsx-props-no-spreading": 'off',
      "@typescript-eslint/no-require-imports": "off",
      '@typescript-eslint/no-var-requires': 'off',
      "no-unused-vars": 1     
    }
  }
];