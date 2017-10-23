module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: "compDB",
      host: "localhost"
    },
    migration: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
  production: {
     client: 'pg',
     connection: process.env.DATABASE_URL,
     migrations: {
       directory: __dirname + '/db/migrations',
     },
     seeds: {
        directory: __dirname + '/db/seeds/production',
     },
  },
};
