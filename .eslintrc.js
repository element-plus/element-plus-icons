const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['@sxzz'],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
})
