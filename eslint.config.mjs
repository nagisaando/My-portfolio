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
      "vue/no-multiple-template-root": "off",
      '@stylistic/ts/quotes': ["error", "double"],
      '@stylistic/ts/semi': ['error']
    }
  },
)
