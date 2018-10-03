module.exports = {
   "rules": {
     "extends": "eslint:recommend", // learn about @ eslint.org/doc/rules/
     "env" : { "browser": true, "es6": true, "mocha": true },
     "plugins": ["mocha"],
     "parserOptions": { "sourceType": "module" },
     "no-console": ["off", { allow: ["warn", "error"] }],
     "no-control-regex": "off",
     "no-debugger": "off", //, "error" -> turn off while working then on in dev.
     "no-irregular-whitespace": ["warn", {skipStrings: true,skipComments: true,skipRegExps: true}],
     "block-scoped-var": "error",
     "curly": "error",
     "dot-notation": "error",
     "eqeqeq": "error",
     "guard-for-in": "error",
     "no-alert": "warn", // "error" in production
     "no-fallthrough": "error",
     "no-floating-decimal": "error",
     "no-return-assign": "error",
     "yoda": "error",
     "strict": ["error", "function"],
     "block-spacing": "error", // block spacing one before and after inside { }.
     "brace-style": "error",
     "camelcase": ["error", { "properties": "never" }],
     "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
     "no-tabs": "error",
     "one-var": ["error", {initialized : "always"}],
     "padding-line-between-statements": "warn",
     "quotes": ["error", "single", {allowTemplateLiterals: true}],
     "semi": "error",
     "space-in-parens": ["error", "never", {"exceptions": ["{}"]}],
     "spaced-comment": ["error", "always"],
     "arrow-body-style": ["error", "as-needed"], // curlys {} only when needed.
     "no-duplicate-imports": ["error", {includeExports: true}],
     "no-var": "error",
     "prefer-template": "warn",
     "global-require": "error"
   }

};



