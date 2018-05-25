
const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
    uri: `https://www.kroger.com/pl/beverages/01003`,
    // headers: {
    //     'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4'
    // },
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(options)
    .then(($) => {
        console.log($);
    })
    .catch((err) => {
        console.log("ERROR", err);
    });

