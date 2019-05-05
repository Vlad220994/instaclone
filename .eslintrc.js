module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: "airbnb",
  globals: {
    $: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": off,
    "func-names": off,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  }
};
