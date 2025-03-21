module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    ignorePatterns: ['.eslintrc.js', '**/*.spec.ts', '**/*.test.ts'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
            },
        },
    },
    rules: {
        'import/extensions': ['error', 'ignorePackages', { js: 'never', ts: 'never' }],
        'import/prefer-default-export': 'off',
        'no-console': 'off',
    },
};
