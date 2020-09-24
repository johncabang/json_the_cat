const request = require('request');

// request('http://example.edu/', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  // console.log('error:', error);
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body', body);
  // console.log(typeof body);
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  console.log(data[0].description);
});