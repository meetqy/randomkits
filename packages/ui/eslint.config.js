import baseConfig from "@randomkits/eslint-config/base";
import reactConfig from "@randomkits/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
