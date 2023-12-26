module.exports = {
   root: true,
   env: { browser: true, es2020: true },
   extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'prettier',
   ],
   ignorePatterns: ['node_modules', '.eslintrc.cjs'],
   parser: '@typescript-eslint/parser',
   plugins: ['prettier'],
   rules: {
      'no-redeclare': 'off',
      'no-unused-vars': 'off',
      'prefer-const': 'off',
      'linebreak-style': 'off',
      'react/prop-types': 'off',
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/semi': 'error',
      /// bullshit
      'no-undef': 'off',
      '@typescript-eslint/no-var-requires': 'off',
   },
};
