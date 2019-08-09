

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	return db("people").delete().where({
		lastName: "Doe"
	});
}).then(() => {
	console.log("Deleted all Does!");

	return db("people");
}).then((people) => {
	console.log("Now, all the people:", people);
}).finally(() => {
	db.destroy();
});
