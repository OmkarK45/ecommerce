module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
  ],
  parserOptions: {
    ecmaVersion: "2017",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["babel", "react", "import", "react-hooks"],
  rules: {
    "import/no-duplicates": "error",
    "import/no-unresolved": "off",
    "import/named": "error",
    "react/no-typos": "error",
    "react/no-unused-state": "error",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "array-callback-return": "error",
    "consistent-return": "error",
    "react/prop-types": "off",
    "babel/no-invalid-this": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
      flowVersion: "0.63.1",
    },
  },
};
