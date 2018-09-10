var express    = require("express"),
    app        = express(),
    ejs        = require("ejs"),
    request    = require("request"),
    fs         = require("fs");

app.use(express.static(__dirname + "/public"));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.get("/singlecard", function(req, res){
    var oneCard = deckId();
    console.log("This is the singleCard url " + oneCard);
    request(oneCard, function(error, response, body){
    if(!error && response.statusCode === 200){
            var data1 = JSON.parse(body, null, 2);
            res.render("singlecard", {data1: data1})
        }
    });
});

app.get("/allcards", function(req, res){
    var cards = allCards();
    console.log("This is allCards url " + cards);
    request(cards, function(error, response, body){
    if(!error && response.statusCode === 200){
            var data1 = JSON.parse(body, null, 2);
            res.render("allcards", {data1: data1})
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});

//requests a new deck of cards and writes it to deck.json
function createFile(){
    var url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    request(url, function(error, response, body){
        if(!error && response.statusCode === 200){
            var data = JSON.stringify(body, null, 2);
            var data1 = JSON.parse(data, null, 2);
            fs.writeFileSync('deck.json', data1);
        }
    });
}

//reads deck.json and returns the new url with one card key parsed in
function deckId(){
    createFile();
    var data = fs.readFileSync('deck.json');
    var dataParsed = JSON.parse(data);
    var keys = dataParsed[Object.keys(dataParsed)[0]];
    var oneCard = "https://deckofcardsapi.com/api/deck/" + keys + "/draw/?count=1";
    return oneCard;
}

//reads deck.json and returns the new url with all 52 card key parsed in
function allCards(){
    createFile();
    var data = fs.readFileSync('deck.json');
    var dataParsed = JSON.parse(data);
    var keys = dataParsed[Object.keys(dataParsed)[0]];
    var allCards = "https://deckofcardsapi.com/api/deck/" + keys + "/draw/?count=52";
    return allCards;
}

module.exports = app.listen();

//run using npm test