module.exports = {

  "extends": "eslint:recommend",
  // extends:"eslint:recommend" -> relates to possible syntax or logic errors in js code.
  /* to find out what is in the extends: "eslint:recommend"
     go to this web site https://eslint.org/docs/rules/
   */
  "env" : {
    "browser": true,
    "es6": true,
    "mocha": true
  },
  "plugins": ["mocha"],
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
//!! no-console: ["off", { allow: ["warn", "error"] }] put in custom.
// no-control-regex: "off"
// no-debugger: "off", "error" -> turn off while working then on in dev.
// no-irregular-whitespace: [{"skipStrings": true,"skipComments": true,"skipRegExps":
// true,"skipTemplates": true}]

