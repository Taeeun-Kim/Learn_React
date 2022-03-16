const axios = require('axios');
const cheerio = require('cheerio');

axios
  .get('https://indeed.com/jobs?q=react')
  .then((response) => {
    const $ = cheerio.load(response.data);
    let data = $('#searchCountPages').text().replace('.', '').slice(31, -5);
    console.log(data);
  })
  .catch((Error) => {
    console.log(Error);
  });
