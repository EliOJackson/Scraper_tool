let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');

// axios.get('http://games.espn.com/flb/freeagency?leagueId=691&teamId=8&seasonId=2018')
//     .then((response) => {
//         if (response.status === 200) {
//             const html = response.data;
//             const $ = cheerio.load(html);
//             let playerArray = [];
//             $('.pncPlayerRow').each(function (i, elem) {
//                 playerArray[i] = {
//                     player: $(this).find('.playertablePlayerName').text().trim(),
//                     stats: $(this).find('.playertableStat').text(),
//                     research: $(this).find('.playertableData').text().trim(),
//                     // tags: $(this).find('.tags').text().split('#')
//                     //     .map(tag => tag.trim())
//                     //     .filter(function (n) { return n != "" })
//                 }
//             });
//             const playerArrayTrimmed = playerArray.filter(n => n != undefined)
//             fs.writeFile('players.json',
//                 JSON.stringify(playerArrayTrimmed, null, 4),
//                 (err) => console.log('File successfully written!'))
//         }
//     }, (error) => console.log(err));


// axios.get('http://games.espn.com/flb/freeagency?leagueId=691&teamId=8&seasonId=2018')
//     .then((response) => {
//         if (response.status === 200) {
//             const html = response.data;
//             const $ = cheerio.load(html);
//             let playerArray = [];
//             let statArray = [];
//             $('.pncPlayerRow').each(function (i, elem) {
//                 playerArray[i] = {
//                     player: $(this).find('.playertablePlayerName').text().trim(),
//                     h_ab: $(this).find('.playertableStat').eq(0).text(),
//                     r: $(this).find('.playertableStat').eq(1).text(),
//                     hr: $(this).find('.playertableStat').eq(2).text(),
//                     rbi: $(this).find('.playertableStat').eq(3).text(),
//                     sb: $(this).find('.playertableStat').eq(4).text(),
//                     avg: $(this).find('.playertableStat').eq(5).text(),
//                     ops: $(this).find('.playertableStat').eq(6).text(),
//                     research: $(this).find('.playertableData').text().trim(),
//                     // tags: $(this).find('.tags').text().split('#')
//                     //     .map(tag => tag.trim())
//                     //     .filter(function (n) { return n != "" })
//                 }
//             });
//             const playerArrayTrimmed = playerArray.filter(n => n != undefined)
//             console.log (playerArrayTrimmed);
//             fs.writeFile('players.json',
//                 JSON.stringify(playerArrayTrimmed, null, 4),
//                 (err) => console.log('File successfully written!'))
//         }
//     }, (error) => console.log(err));

// axios.get("http://games.espn.com/flb/freeagency?leagueId=691&teamId=8&seasonId=2018&version=currSeason&slotCategoryGroup=2&startIndex=50")
//     .then((response) => {
//         if (response.status === 200) {
//             const html = response.data;
//             const $ = cheerio.load(html);
//             let playerArray = [];
//             let statArray = [];
//             $('#playerTableContainerDiv').find('.pncPlayerRow').each(function (i, elem) {
//                     playerArray.push( {
//                     // player: $(this).find('.playertablePlayerName').text().split(",").slice(1)[0].slice(4, 15),
//                     gat: $(this).find('.playertablePlayerName').text().split(" "),
//                         name: $(this).find('.flexpop').eq(0).text().trim(),
//                         cool: $(this).find('.flexpop').eq(5).text().trim(),
//                         guy: $(this).find('.flexpop').eq(6).text().trim(),
//                         ip: $(this).find('.playertableStat').eq(0).text(),
//                         hits: $(this).find('.playertableStat').eq(1).text(),
//                         er: $(this).find('.playertableStat').eq(2).text(),
//                         walks: $(this).find('.playertableStat').eq(3).text(),
//                         k: $(this).find('.playertableStat').eq(4).text(),
//                         qs: $(this).find('.playertableStat').eq(5).text(),
//                         wins: $(this).find('.playertableStat').eq(6).text(),
//                         saves: $(this).find('.playertableStat').eq(7).text(),
//                         era: $(this).find('.playertableStat').eq(8).text(),
//                         whip: $(this).find('.playertableStat').eq(9).text(),
//                         pr15: $(this).find('.playertableData').eq(0).text(),
//                         ownedPercentage: $(this).find('.playertableData').eq(1).text(),
//                         addrate: $(this).find('.playertableData').eq(2).text()
//                     })
//                 })
//             ;
//             const playerArrayTrimmed = playerArray.filter(n => n != undefined)
//             console.log(playerArrayTrimmed);
//             fs.writeFile('batters.json',
//                 JSON.stringify(playerArrayTrimmed, null, 4),
//                 (err) => console.log('File successfully written!'))
//         }
//     }, (error) => console.log(err));

// axios.get("http://www.espn.com/espn/print?id=22264663")
//     .then((response) => {
//         if (response.status === 200) {
//             const html = response.data;
//             const $ = cheerio.load(html);
//             let playerArray = [];
//             let statArray = [];
//             $('.mod-content').find('.last').each(function (i, elem) {
//                 // console.log("this", $(this).find('.last').text());
//                     playerArray[i] = {
//                         // player: $(this).find('.last').text().trim(),
//                         rank: $(this).find('td').eq(0).text(),
//                         status: $(this).find('td').eq(1).text(),
//                         name: $(this).find('td').eq(2).text(),
//                         team: $(this).find('td').eq(3).text(),
//                         // tt: $(this).find('.last').eq(2).text(),
//                         // bb: $(this).find('.last').eq(3).text(),
//                         // cc: $(this).find('.last').eq(4).text(),
//                         // hits: $(this).find('.playertableStat').eq(1).text(),
//                         // er: $(this).find('.playertableStat').eq(2).text(),
//                         // walks: $(this).find('.playertableStat').eq(3).text(),
//                         // k: $(this).find('.playertableStat').eq(4).text(),
//                         // qs: $(this).find('.playertableStat').eq(5).text(),
//                         // wins: $(this).find('.playertableStat').eq(6).text(),
//                         // saves: $(this).find('.playertableStat').eq(7).text(),
//                         // era: $(this).find('.playertableStat').eq(8).text(),
//                         // whip: $(this).find('.playertableStat').eq(9).text(),
//                         // pr15: $(this).find('.playertableData').eq(0).text(),
//                         // ownedPercentage: $(this).find('.playertableData').eq(1).text(),
//                         // addrate: $(this).find('.playertableData').eq(2).text()
//                     }
//                 })
//             ;
//             const playerArrayTrimmed = playerArray.slice(0, 300);
//             console.log(playerArrayTrimmed);
//             fs.writeFile('batters.json',
//                 JSON.stringify(playerArrayTrimmed, null, 4),
//                 (err) => console.log('File successfully written!'))
//         }
//     }, (error) => console.log(err));

// axios.get("https://www.baseball-reference.com/players/g/goldspa01.shtml")
//     .then((response) => {
//         if (response.status === 200) {
//             const html = response.data;
//             const $ = cheerio.load(html);
//             let statArray = [];
//             let scrapeObj = { 
//                 imgUrl: $('#meta').find('img').attr('src'),
                

//             };
axios.get("https://www.baseball-reference.com/players/gl.fcgi?id=colege01&t=p&year=2018")
    .then((response) => {
        if (response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);
            let statArray = [];
            $("#pitching_gamelogs").find('tr').each(function (i, elem) {
                console.log($(this).text());
                statArray.push ( {
                    date: $(this).find('td').eq(2).text(),
                    opponent: $(this).find('td').eq(5).text(),
                    result: $(this).find('td').eq(6).text(),
                    dec: $(this).find('td').eq(8).text(),
                    ip: $(this).find('td').eq(10).text(),
                    er: $(this).find('td').eq(12).text(),
                    bb: $(this).find('td').eq(13).text(),
                    k: $(this).find('td').eq(14).text(), 
                    imgUrl: $('#meta').find('img').attr('src'),
                    name: $('#meta').find('h1').text()
                });

            })
            
            // .each(function (i, elem) {
            //     // console.log("this", $(this).find('.last').text());
            //         playerArray[i] = {
            //             // player: $(this).find('.last').text().trim(),
            //             rank: $(this).find('img'),
            //             rank: $(this).find('img').text(),
            //             status: $(this).find('img').eq(1).text(),
            //             name: $(this).find('td').eq(2).text(),
            //             team: $(this).find('td').eq(3).text()
            //         }
            //     })
            ;
            // const playerArrayTrimmed = playerArray.slice(0, 300);
            console.log("tuck", statArray);
        //     fs.writeFile('batters.json',
        //         JSON.stringify(playerArrayTrimmed, null, 4),
        //         (err) => console.log('File successfully written!'))
        }
    }, (error) => console.log(err));