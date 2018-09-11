// var fs = require('fs');
// var express = require('express');
// var request = require("request");

// //requests a new deck of cards and writes it to deck.json
// module.exports.createFile = function createFile(){
//     var url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
//     request(url, function(error, response, body){
//         if(!error && response.statusCode === 200){
//             var data = JSON.stringify(body, null, 2);
//             var data1 = JSON.parse(data, null, 2);
//             fs.writeFileSync('deck.json', data1);
//         }
//     });
// }

// //reads deck.json and returns the new url with one card key parsed in
// module.exports.deckId = function deckId(){
//     module.exports.createFile;
//     var data = fs.readFileSync('deck.json');
//     var dataParsed = JSON.parse(data);
//     var keys = dataParsed[Object.keys(dataParsed)[0]];
//     var oneCard = "https://deckofcardsapi.com/api/deck/" + keys + "/draw/?count=1";
//     return oneCard;
// }

// //reads deck.json and returns the new url with all 52 card key parsed in
// module.exports.allCards = function allCards(){
//     module.exports.createFile;
//     var data = fs.readFileSync('deck.json');
//     var dataParsed = JSON.parse(data);
//     var keys = dataParsed[Object.keys(dataParsed)[0]];
//     var allCards = "https://deckofcardsapi.com/api/deck/" + keys + "/draw/?count=52";
//     return allCards;
// }

//----------------------------
//If you want to generate the link on its own, without the need
//to run a get request

// //requests the specific deck id to return the deck's cards
// function singleCard(){
//     // console.log("singleCard started")
//     var oneCard = deckId();
//     // console.log("This is the url " + oneCard);
//     request(oneCard, function(error, response, body){
//     if(!error && response.statusCode === 200){
//             // console.log("This is body " + body);
//             var data = JSON.stringify(body, null, 2);
//             // console.log("This is data + " + data);
//             var data1 = JSON.parse(data, null, 2);
//             // console.log("This is data1" + data1)
//             fs.writeFileSync('card.json', data1);
//         }
//     });
// };

// //reads deck.json and returns the new url with the key parsed in
// function cardImage(){
//     singleCard();
//     var data = fs.readFileSync('card.json');
//     var dataParsed = JSON.parse(data);
//     // console.log(dataParsed);
//     var keys = dataParsed[Object.keys(dataParsed)[3]];
//     // console.log(keys);
//     var result = keys.map(a => a.image);
//     // console.log("THIS IS RESULT " + result);
//     return result;
// }
//------------------------------------