const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

    // console.log(data[0].name);
    // console.log(data[0].description);

    if (error) { // Edge Case: Request Failed
      // console.log(error);
      callback(error, null);
    }
    const data = JSON.parse(body); // convert string into an object "deserialization"
    // let breedName = data[0].name;
    // let breedDescription = data[0].description;
    
    if (data.length === 0) { // Edge Case: breed not found
      // console.log('Sorry breed not found.');
      callback('Sorry breed not found.', null);
    } else {
      // console.log(data[0].description); // Return breed description
      callback(error, data[0].description.trim());
    }
  });
};

// fetchBreedDescription(breed); // Comment out function call!!

module.exports = { fetchBreedDescription };




// console.log('error:', error);
// console.log('statusCode:', response && response.statusCode);
// console.log('body', body);
// console.log(typeof body);
// console.log(data);
// console.log(typeof data);
// console.log(data[0].description);

