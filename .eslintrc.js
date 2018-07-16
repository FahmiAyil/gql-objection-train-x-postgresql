module.exports = {
  // "extends": "airbnb"
  extends: ["airbnb", "plugin:prettier/recommended"],
  parser: "babel-eslint",
  plugins: ["babel"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-console": "off",
    "babel/no-invalid-this": 1,
    "babel/semi": 1
  }
};