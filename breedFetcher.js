const request = require('request');
const breed = process.argv.slice(2);

const breedDescription = function(breed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

    // console.log(data[0].name);
    // console.log(data[0].description);

    if (error) { // Edge Case: Request Failed
      console.log(error);
    }
    const data = JSON.parse(body);
    // let breedName = data[0].name;
    // let breedDescription = data[0].description;
    
    if (data.length === 0) { // Edge Case: breed not found
      console.log('Sorry breed not found.');
    } else {
      console.log(data[0].description); // Return breed description
    }
  });
};

breedDescription(breed);




// console.log('error:', error);
// console.log('statusCode:', response && response.statusCode);
// console.log('body', body);
// console.log(typeof body);
// console.log(data);
// console.log(typeof data);
// console.log(data[0].description);

