module.exports = {
  plugins: ['prettier', '@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'all',
        bracketSameLine: true,
        endOfLine: 'auto',
        singleAttributePerLine: true,
      },
    ],
    // Overwrite rules specified from the extended configs e.g.
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
      },
    ],
  },
}
