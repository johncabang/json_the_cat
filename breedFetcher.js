const request = require('request');
const breed = process.argv.slice(2);


  // console.log('error:', error);
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body', body);
  // console.log(typeof body);
  // console.log(data);
  // console.log(typeof data);
  // console.log(data[0].description);


const breedDescription = function(breed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    const data = JSON.parse(body);
    let breedName = data[0].name;
    // let breedDescrip = data[0].description;

    if(breed !== breedName) {
      console.log('Sorry breed name is not found.');
    }
  });
};

breedDescription(breed);