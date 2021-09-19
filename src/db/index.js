const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "Anna3953!",
    database: "pokeapi"
  }
});

knex.schema.createTable("pokemon", (table) => {
  table.increments();
  table.string("name");
}).then(() => console.log("table created"))
  .catch((err) => { console.log(err); throw err; })
  .finally(() => {
    knex.destroy();
  });

module.exports = knex;
