import eslint from "@eslint/js";

import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...nextTs,
  ...nextVitals,
  {
    ignores: [
      // Common directories
      "node_modules/**/*",
      ".next/**/*",

      // JavaScript files
      "**/*.js",
      "**/*.jsx",
      "**/*.cjs",
      "**/*.mjs",

      // Root TypeScript files
      "*.ts",
      "*.tsx",
      "*.d.ts",
    ],
  },
  {
    files: ["src/**/*.ts", "src/**/*.tsx", "**/*.d.ts"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // JavaScript rules
      "prefer-const": "warn",
      "no-else-return": "warn",
      eqeqeq: "warn",
      curly: "warn",
      "no-var": "error",

      // Too strict
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unnecessary-type-parameters": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: false },
      ],
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-confusing-void-expression": "off",

      // React rules
      "react-hooks/exhaustive-deps": "off",
    },
  },
]);
