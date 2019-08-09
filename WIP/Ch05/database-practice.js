const Promise = require('bluebird');
const knex = require('knex');
let db = knex(require("./db-config.js"));

Promise.try(() => {
    // return db.schema.createTable("customer", (table) => {
    //     table.text('firstname');
    //     table.text('lastname');
    //     table.text('email');
    // });

    // return db("customer").insert([
    //     {firstname: 'Jane', lastname: 'Smith', email: 'test@test.com'}
    // ]);

    return db('customer').where({
        firstname: 'Jane'
    });
}).then((res) => {
    console.log("Done!");
    console.log(res);
}).finally(() => {
    db.destroy();
});