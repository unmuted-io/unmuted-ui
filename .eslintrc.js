module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "standard-kit/prettier",
        "standard-kit/prettier/node",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "only-warn"
    ],
    "rules": {
      "camelcase": "warn",
      "no-throw-literal": "error",
      "no-var": "error",
      "prefer-const": "error",
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-no-duplicate-props": ["error", { "ignoreCase": true }],
      "react/no-array-index-key": "error",
      "react/no-string-refs": 0,
      "react/no-typos": "error",
      "react/prop-types": 0,
      "react/self-closing-comp": ["error", { "component": true }],
      "simple-import-sort/sort": "error"
      "max-len": ["error", 120]
    }
};