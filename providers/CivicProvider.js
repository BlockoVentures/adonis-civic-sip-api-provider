'use strict'

const ServiceProvider = require('adonis-fold').ServiceProvider

class CivicProvider extends ServiceProvider {

  * register () {
    this.app.singleton('Adonis/Addons/Civic', function (app) {
      return require('../src')
    })
  }
}

module.exports = CivicProvider
