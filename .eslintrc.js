module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        $: "readonly",
    },
    parser: 'babel-eslint',
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
        "linebreak-style": "off",
        "func-names": "off",
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
    }
};