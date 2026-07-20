import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Enforced project-wide per the EIP's coding standards (Section 16):
      // no `any` without an explicit, reviewed exception.
      "@typescript-eslint/no-explicit-any": "error",
      // Colocation and clarity: unused vars/imports are an error, not a
      // warning, so they never accumulate silently in a solo-maintained repo.
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
