

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	return db.schema.createTable("customer", (table) => {
		table.increments("id").primary();
		table.text("firstName");
        table.text("lastName");
        table.text("email");
	});
}).then(() => {
	console.log("Created Table!");
}).then(() => {
	return db("customer").insert([{
		firstName: "Joe",
		lastName: "Bloggs",
		email: "joebloggs@jhg.com"
	}, {
		firstName: "Amy",
		lastName: "Blyer",
		email: "blyer@jhg.com"
	}]);
}).then(() => {
	console.log("Inserted records!");
}).then(() => {
	return db("customer");
}).then((customers) => {
	console.log("All the people:", customers);
}).finally(() => {
	db.destroy();
});