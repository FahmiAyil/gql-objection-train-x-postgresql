
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('interviews', (table) => {
      table.increments('id').primary();
      table.integer("user_id").index().notNull();
      table.integer("recruitor_id").index().notNull();
      table.string('place');
      table.string('time');
      table.string('type');

      table.foreign('user_id').references('id').inTable('users');
      table.foreign('recruitor_id').references('id').inTable('recruitors');

      table.unique("user_id", "recruitor_id");
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('interviews')
};
