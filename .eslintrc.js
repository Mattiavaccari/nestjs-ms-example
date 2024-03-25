const isFixMode = process.argv.includes("--fix");

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "xo",
    "xo-space",
    "xo-typescript",
    "prettier",
    "plugin:import/typescript",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["**/dist/*", "**/node_modules/*"],
  overrides: [
    {
      plugins: ["jest"],
      files: [
        "test/**/*.ts",
        "tests/**/*.ts",
        "**/*.spec.ts",
      ],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": "off",
        "max-nested-callbacks": "off",
        "jest/no-focused-tests": "error",
        ...(isFixMode && {
          "jest/no-focused-tests": "warn",
        }),
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "unused-imports",
    "unicorn",
    "prettier",
  ],
  rules: {
    "prettier/prettier": ["error"],
    "no-console": "off",
    "comma-dangle": ["error", "always-multiline"],
    "unicorn/no-new-array": "off",
    "unicorn/no-reduce": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          props: false,
          args: false,
          params: false,
          env: false,
        },
      },
    ],
    "import/prefer-default-export": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc" },
        groups: ["builtin", "external", "internal", "parent", "sibling"],
      },
    ],
    "unused-imports/no-unused-imports-ts": "error",
    "unused-imports/no-unused-vars-ts": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["variable"],
        modifiers: ["const"],
        format: ["strictCamelCase", "StrictPascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
    ],
    "new-cap": [
      "error",
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
  },
  settings: {
    "import/ignore": ["node_modules"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};