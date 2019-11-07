
exports.up = function (knex) {
  return knex.schema.createTable('species', table => {
    table.increments()
    table.string('species_name', 128)
  })
};

exports.down = function (knex) {

};
