const axios = require('axios');
const cheerio = require('cheerio');

axios
  .get(
    'https://www.google.de/webhp?hl=ko&sa=X&ved=0ahUKEwjjsqr0msP2AhXCSvEDHfc0D9MQPAgI'
  )
  .then((response) => {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month + '-' + day;

    console.log(dateString);
  })
  .catch((Error) => {
    console.log(Error);
  });
