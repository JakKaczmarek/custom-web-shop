module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  overrides: [
    {
      files: ["**/*.test.js", "**/*.test.jsx"],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "arrow-body-style": "off",
    "no-alert": "off",
    "react/react-in-jsx-scope": 0,
    "linebreak-style": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test.{ts,tsx,js,jsx}",
          "test-*.{ts,tsx,js,jsx}",
          "**/*{.,_}{test,spec}.{ts,tsx,js,jsx}",
          "**/jest.config.{ts,js}",
          "**/jest.setup.{ts,js}",
          "**/*.stories.*",
          "**/.storybook/**/*.*",
        ],
      },
    ],
    "react/jsx-one-expression-per-line": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
