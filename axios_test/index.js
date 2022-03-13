const axios = require('axios');
const cheerio = require('cheerio');

axios
  .get('test')
  .then((response) => {
    const $ = cheerio.load(response.data);
    data = $('#test').text();
    console.log(data);
  })
  .catch((Error) => {
    console.log(Error);
  });
