module.exports = {
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": false,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },

    "env": {
        "browser": true,
        "node": true,
    },

    "settings": {
        "react": {
            "pragma": "React",
            "version": "16.4.2"
        }
    },

    "plugins": [
        "react"
    ],

    "rules": {
        "react/jsx-filename-extension": 0
    },
};