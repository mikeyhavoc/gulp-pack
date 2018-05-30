module.exports = {

  "extends": "eslint:recommend", // learn about @ eslint.org/doc/rules/
  "env" : { "browser": true, "es6": true, "mocha": true },
  "plugins": ["mocha"],
  "parserOptions": { "sourceType": "module" },
    "no-console": ["off", { allow: ["warn", "error"] }],
    "no-control-regex": "off",
    "no-debugger": "off", //, "error" -> turn off while working then on in dev.
    "no-irregular-whitespace": [{"skipStrings": true,"skipComments": true,"skipRegExps": true}],
    "block-scoped-var": "error",
    "curly": "error",
    "dot-notation": ["error", {"allowKeyWords": false }],
    "eqeqeq": "error",
    "guard-for-in": "error",
    "no-alert": "warning", // "error" in production
    "no-fallthrough": "error",
    "no-floating-deciaml": "error",
    "no-return-assign": "error", // EXCEPT IN PARENTHESES
    "yoda": ["error",{"onlyEquality": true, "exceptRange": true }],
    "strict": ["error", "function"],
    "block-spacing": "error", // block spacing one before and after inside { }.
    "brace-style": ["1tbs", { "allowSingleLine": true }],
    "camelcase": ["error", { "properties": "never" }],
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "no-tabs": "error",
    "one-var": ["error", {"initalized": "always"}],
    "padding-line-between-statements": [{ blankLine: "always", prev: "*", next: "return", blankLine: "always", prev: ["const", "let", "var"], next: "*"}, { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"], blankLine: "always", prev: "directive", next: "*" }, { blankLine: "any", prev: "directive", next: "directive"}],
    "quotes": ["error", "single", {"allowTemplateLiterals": true}],
    "semi": "error",
    "space-in-parens": ["error", {"exceptions": ["{}"]}],
    "spaced-comment": ["error", "always"],
    "arrow-body-style": ["error", "as-needed"], // curlys {} only when needed.
    "no-duplicate-imports": ["error", {"includeEports": true}],
    "no-var": "error",
    "prefer-template": "warning"
};


