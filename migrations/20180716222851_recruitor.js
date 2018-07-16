
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('recruitors', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('email');
      table.string('hp');
      table.string('principal');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('recruitors')
};
