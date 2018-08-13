module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {

    // Possible errors
    "comma-dangle": 2,
    "curly": 2,
    "no-extra-parens": 2,
    "quote-props": [
      2,
      "as-needed"
    ],

    // Best practice
    "eqeqeq": 2,
    "no-alert": 2,
    "no-fallthrough": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-var": 1,
    "no-console": [
      2,
      { "allow": ["error"] }
    ],
    
    // Style
    "brace-style": 2,
    "camelcase": 1,
    "comma-spacing": [2, {"before": false, "after": true}],
    "comma-style": [1, "last"],
    "eol-last": [2, "always"],
    "indent": [2, 2],
    "key-spacing": [1, {"beforeColon": false, "afterColon": true}],
    "linebreak-style": [2, "unix"],
    "new-parens": 1,
    "no-lonely-if": 1,
    "no-multiple-empty-lines": [2, { "max": 2, "maxEOF": 1 }],
    "no-trailing-spaces": 1,
    "quotes": [2, "single"],
    "semi": [2, "always"],
    "semi-spacing": [2, {"before": false, "after": true}],
    "import/default": 0,

    // React and JSX    
    "jsx-quotes": [2, "prefer-single"],
    "react/forbid-prop-types": [1, {"forbid": ["any"]}],
    "react/jsx-curly-spacing": [2, {"when": "always"}],
    "react/jsx-equals-spacing":[2, "never"],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-key": 1,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/jsx-wrap-multilines": 0,
    "react/no-children-prop": 2,
    "react/no-direct-mutation-state": 1,
    "react/no-typos": 2,
    "react/no-unknown-property": 2,
    "react/no-unused-prop-types": 2,
    "react/prefer-es6-class": 1,
    "react/prefer-stateless-function": 1,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/prop-types": 2,
    "react/require-default-props": 2
  },
  "globals": {
    "__DEV__": true,
    "VERSION": true,
    "GIT_HASH": true,
    "GIT_SUMMARY": true,
    "Chart": true,
    "process": true,
    "_": true
  }
};
