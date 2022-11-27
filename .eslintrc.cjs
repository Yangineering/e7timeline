module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ["**/*.config.js"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: ["reactive", "watch", "html", "r", "w", "t"] },
    ],
  },
};
