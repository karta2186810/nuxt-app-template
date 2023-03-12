module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      files: [
        '**/pages/**/*.{js,ts,vue,.jsx,.tsx}',
        '**/layouts/**/*.{js,ts,vue,.jsx,.tsx}',
        '**/app.{js,ts,vue,.jsx,.tsx}',
        '**/error.{js,ts,vue,.jsx,.tsx}'
      ],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
