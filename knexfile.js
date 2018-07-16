// Update with your config settings.

module.exports = {

  development: {
    client: "postgresql",
    connection: {
      database: "gqltrain",
      user: "postgres",
      password: "password",
      host: "localhost",
      port: 5432
    },
    pool: {
      min: 10,
      max: 100
    },
    migrations: {
      tableName: "knex_migrations"
    },
    debug: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'gqltrain',
      user:     'postgres',
      password: 'password',
      host: "localhost",
      port: 5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'gqltrain',
      user:     'postgres',
      password: 'password',
      host: "localhost",
      port: 5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
