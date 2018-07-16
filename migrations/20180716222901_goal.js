
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('goals', (table) => {
      table.increments('id').primary();
      table.integer("user_id").index().notNull();
      table.integer("recruitor_id").index().notNull();
      table.integer("interview_id").index().notNull();
      table.integer("acceptor").index().notNull();
      table.string("referal").index().notNull();
      

      table.foreign('user_id').references('id').inTable('users');
      table.foreign('recruitor_id').references('id').inTable('recruitors');
      table.foreign('interview_id').references('id').inTable('interviews');
      table.foreign('acceptor').references('id').inTable('recruitors');
      table.foreign('referal').references('code').inTable('users');

    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('goals')
};
