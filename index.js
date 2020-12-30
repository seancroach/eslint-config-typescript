"use strict";

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.eslint.json",
  },
  plugins: ["@typescript-eslint", "eslint-comments", "import", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:eslint-comments/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
};
