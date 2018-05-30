# ESlint

> The pluggable linting utility for JavaScript and JSX

ESLint is a pluggable linting utiltiy for JavaScript. If you are using a popular IDE it 
probably works with or there is a plugin for ESLint for it. 

## Why ESLint

Everything is pluggable: 
 - developer create own linting rules.
 - rules are all pluggable
 - default rules are written like any plugin rule would be
 
 Rules: 
  - each rule is stand alone
  - can be turned off or on
  - can be set to warning or error individually
  
 ESLint does not promote any particular coding style.
 All the rules are generalized and can be modded to your liking.
 So, if you want to change anything for your said project anything can be altered to your 
 liking or needs.
 
 ### Set Up
 
 ELINT has a large number of rules to choose from to use. 
 using either configuration comments or configuration files.<br>
 You set the rule ID equal to one of the following values: 
 - `"off"` or `0` - turn off the rule.
 - `"warn"` or `1` - turn the rule on as a warning (doesnt affect exit code)
 - `"error"` or `2` - turn the rule on as an error (exit code 1 when triggered)
 
 so to change one of of my rules you could change <br>
 `"prefer-template": "warning"` -> warns when not using template literals. alter to <br>
 `"prefer-template": "error"` -> now will error and exit code 1 when it hits somewhere
  should be a template literal but is not.
  
  You could also use `off` to turn a rule off completely and not have it run at all.
  or use the numbers that coincide with the words if that is what you prefer.
  
  
  To dive into ESLint more you can either use someone else's eslintrc.js file.
  or you can go to [ESLint site](eslint.org)  and read the documentation on how to fully 
  make your own. 
  

