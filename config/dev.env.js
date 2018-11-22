'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://www.guaishou.com"'
  BASE_API: '"http://39.105.203.57:9999"'
})
