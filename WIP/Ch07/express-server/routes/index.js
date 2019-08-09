const express = require('express');
// let router = express.Router();
let router = require('express-promise-router')();
const moment = require('moment');

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

router.get('/', (req, res) => {
    res.render('index', {
        students: studentArray
    });
});

router.get("/about", (req, res) => {
	res.render("about");
});

router.get("/class", (req, res) => {
    res.render("class", {
        students: studentArray
    });
});

router.get('/weather', (req, res) => {
    const temp1 = Math.floor(Math.random() * 110);
    const temp2 = Math.floor(Math.random() * 110);

    const high = temp1 > temp2 ? temp1 : temp2;
    const low = temp1 < temp2 ? temp1 : temp2;
    res.send(`Today's high is ${high} and the low is ${low}`);
});

module.exports = router;