const config = require("../../knexfile");

//console.log(config);
module.exports = require("knex")(config);