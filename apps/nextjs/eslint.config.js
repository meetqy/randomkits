import baseConfig, { restrictEnvAccess } from "@randomkits/eslint-config/base";
import nextjsConfig from "@randomkits/eslint-config/nextjs";
import reactConfig from "@randomkits/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
