// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import stylisticTs from '@stylistic/eslint-plugin-ts'
export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.ts', '**/*.tsx', "**/*.vue"],
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    rules: {
      '@stylistic/ts/quotes': ["error", "double"],
      '@stylistic/ts/semi': ['error']
    }
  },
)
