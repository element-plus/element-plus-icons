const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['@sxzz'],
  rules: {
    'import/named': 'off',
    'vue/multi-word-component-names': 'off',
  },
})
