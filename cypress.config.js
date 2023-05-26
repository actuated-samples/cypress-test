const { defineConfig } = require('cypress')

module.exports = defineConfig({
  supportFile: false,
  e2e: {
    supportFile: false,
    baseUrl: 'http://google.com',
  },
})
