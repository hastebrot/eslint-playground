module.exports = {
  env: {
    browser: true,
    es6: true
  },
  plugins: ["html"],
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "linebreak-style": ["error", "unix"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0, maxBOF: 0 }]
  }
};
