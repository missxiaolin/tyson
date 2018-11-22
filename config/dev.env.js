'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"www.yiivue.com"'
  BASE_API: '"http://39.105.203.57:9999"'
})
