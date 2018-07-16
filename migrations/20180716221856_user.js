
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments('id').primary().notNullable();;
      table.string('code');
      table.string('name');
      table.string('email');
      table.string('hp');
      table.string('skill');

      table.unique("code");
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
};
