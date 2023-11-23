module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'plugin:prettier/recommended',
        'eslint:recommended'
        // 'eslint-config-prettiers'
        // '@vue/prettier',
        // '@vue/eslint-config-prettier'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
        'vue/multi-word-component-names': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 'prettier/prettier': 'error', // 在prettier标记的地方保证,
        'no-unused-vars': 'warn'
    }
};
