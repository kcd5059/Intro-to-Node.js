/* Simple example: */

const rp = require("request-promise");
const cheerio = require('cheerio'); // Basically jQuery for node.js

const options = {
    uri: 'http://www.karmoxie.com',
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(options)
.then($ => {
  console.log("h1 html:", $("h1").text());
  return $("h1").text();
})
.then(html => {
	console.log(html);
})
.catch(function(err) {
	console.log(err)
});

/* Output:
   Status code: 200
*/
