module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "prettier",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "eslint:recommended",
  ],
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
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],

    "no-console": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx", ".ts"] },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "arrow-body-style": "off",
    "no-alert": "off",
    "react/react-in-jsx-scope": 0,
    "linebreak-style": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
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
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },

    "eslint.workingDirectories": ["Dir1", "Dir2"],
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact",
    ],
  },
};
