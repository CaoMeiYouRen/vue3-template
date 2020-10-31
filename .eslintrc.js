const IS_PROD = process.env.NODE_ENV === 'production'
module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        commonjs: true,
        node: true,
        mocha: true,
    },
    extends: [
        'cmyr/vue'
    ],
    plugins: [
        'vue',
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: new Date().getFullYear(),
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
        },
    },
    parser: 'vue-eslint-parser',
    rules: {
    },
}
