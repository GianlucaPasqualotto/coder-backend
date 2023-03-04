'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CupcakeSchema extends Schema {
  up () {
    this.create('cupcakes', (table) => {
      table.string("name", 40).notNull().unique()
      table.string("description", 150).notNull()
      table.string("price")
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cupcakes')
  }
}

module.exports = CupcakeSchema
