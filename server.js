const rp = require('request-promise');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
var app = require('express')();


// const options = {
//     uri: `http://games.espn.com/flb/freeagency?leagueId=691&teamId=8&seasonId=2018`,
//     transform: function (body) {
//         return cheerio.load(body);
//     }
// };
// const options = {
//     uri: `http://www.espn.com/mlb/scoreboard`,
//     transform: function (body) {
//         return cheerio.load(body);
//     }
// };

// rp(options)
//     .then(($) => {
//         console.log($('.playertableFrameBorder').find('.playertablePlayerName').text());
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// rp(options)
//     .then(($) => {
//         console.log($('#scoreboard-page').find('.scoreboard-top').text());
//     })
//     .catch((err) => {
//         console.log(err);
//     });



// var scraperjs = require('scraperjs');

// scraperjs.DynamicScraper.create('http://www.amazon.com')
//     .scrape(function ($) {
//         return $("title").map(function () {
//             return $(this).text();
//         }).get();
//     })
//     .then(function (news) {
//         console.log(news);
//     })

// var phantom = require('phantom');

// phantom.create(function (ph) {
//     ph.createPage(function (page) {
//         var url = "http://www.bdtong.co.kr/index.php?c_category=C02";
//         page.open(url, function () {
//             page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function () {
//                 page.evaluate(function () {
//                     $('.listMain > li').each(function () {
//                         console.log($(this).find('a').attr('href'));
//                     });
//                 }, function () {
//                     ph.exit()
//                 });
//             });
//         });
//     });
// });

const devices = require('puppeteer/DeviceDescriptors');


const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.emulate(devices['iPhone 6']);
await page.goto('https://www.nytimes.com/');
await page.screenshot({ path: 'full.png', fullPage: true });
await browser.close();