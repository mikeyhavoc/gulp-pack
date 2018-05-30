module.exports = {

  "extends": "eslint:recommend",
  // extends:"eslint:recommend" -> relates to possible syntax or logic errors in js code.
  /*1.for-direction: "error" -> error if for-loop moves in wrong dir infin. loop
  | 2. getter-return: "error" -> all getters must have returns.
  | 3. no-compare-neg-zero: true -> -0 will pass for +0 or -0 rid confusion.
  | 4. no-cond-assign: "except-parens" -> allows assign only if closed in
    // parentheses. "always" -> disallows ALL assignment in test conditions.
  | 5. no-constant-condition: ["error:, {"checkLoops": true}] -> "true" allows constant
  / expressions in loops.
  | 6. no-dupe-args: "error" -> no duplicate arguments.
  | 7. no-dupe-keys: "error" -> no duplicate keys.
  | 8. no-duplicate-case: "error" -> no duplicate test expressions in cases of switch.
  | 9. no-empty: "error" -> disallows empty block ststaments...unless a comments is there.
  | 10. no-empty-character-class: "error" -> reg expressiosn no match anything are typos.
  | 11. no-ex-assign: "error" -> cant reassign exception in catch clause.
  | 12. no-extra-boolean-cast: "error" -> cant double negative KISS.
  | 13. no-extra-semi: "error" -> no extra semi's on stuff.
  | 14. no-func-assign: error -> must write a function expressions...function declarations bad.
  | 15. no-inner-declarations: "error" -> func declartion not good inside things.
  | 16. no-invalid-regexp: error -> invalid patterns give syntax errors.
  | 17.
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

