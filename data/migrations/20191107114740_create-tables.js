
exports.up = function (knex) {
  return knex.schema
    .createTable('species', table => {
      table.increments()
      table.string('species_name', 128)
    })
    .createTable('animals', table => {
      table.increments()
      table.string('animal_name', 128)
      table.integer('species_id')
        // we need positive integers
        .unsigned()
        // it should not be nullable
        .notNullable()
        // it needs to reference the id on the table
        .references('id')
        .inTable('species')
        // .onDelete('CASCADE')
    })
};

exports.down = function (knex) {
};
