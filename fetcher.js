const request = require('request');
const fs = require('fs');
const { exit } = require('process');
let myArgs = process.argv.slice(2);


if (myArgs.length > 2) {
  console.log("Too many arguments given. Exiting...");
  exit();
}

// get byte size
const byteSize = str => new Blob([str]).size;

request(myArgs[0], (error, response, body) => {

//console.log('error:', error); // Print the error if one occurred
//console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
fs.writeFile(myArgs[1], body, () => {
   // Print the HTML for the Google homepage.
  console.log(`Downloaded and saved ${Buffer.byteLength(body, 'utf-8')} bytes to ${myArgs[1]}`);
});

});
