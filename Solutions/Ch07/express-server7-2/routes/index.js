const express = require("express");
const moment = require("moment");

let studentArray = [{
	nameFirst: "Devin",
	nameLast: "Durgan",
	email: "Devin.Durgan@gmail.com",
	hireDate: moment("01/19/2015", "MM/DD/YYYY")
}, {
	nameFirst: "Cristal",
	nameLast: "Adams",
	email: "Cristal.Adams@live.com",
	hireDate: moment("07/29/2016", "MM/DD/YYYY")
}, {
	nameFirst: "Nettie",
	nameLast: "McGlynn",
	email: "Nettie.McGlynn@gmail.com",
	hireDate: moment("08/29/2015", "MM/DD/YYYY")
}];

let router = express.Router();

router.get("/", (req, res) => {
	res.render("index", {
		students: studentArray
	});
});

router.get("/class", (req, res) => {
	res.render("class", {
		students: studentArray
	});
});

router.get("/about", (req, res) => {
	res.render("about");
});


module.exports = router;
