var jQuery     = require('jquery');
var $ = jQuery = require('jquery')(window);

var cardsArr;

//create a global array
function init(){
    cardsArr = [
    'cards/2.png',
    'cards/3.png',
    'cards/4.png',
    'cards/5.png',
    'cards/6.png',
    'cards/7.png',
    'cards/8.png',
    'cards/9.png',
    'cards/10.png',
    'cards/J.png',
    'cards/Q.png',
    'cards/K.png',
    'cards/A.png'
    ];
}

//RANDOMLY RETURN ONE CARD
function cardMath(){
    var oneCard = cardsArr[(Math.random() * cardsArr.length)|0];
    return oneCard;
};

//remove any existing cards, then append the selected card
function singleCard(){
    $("#singleCard").remove();
    $(".shuffledCards").remove();
    $("#single").append($('<div id="singleCard"><img class="rounded" src="/' + cardMath() + '"/></div>').hide().fadeIn(750));
}

//SHUFFLE ALL CARDS
function shuffleMath() {
    var m = cardsArr.length, t, i;
    //Fisher-Yates Shuffle
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = cardsArr[m];
        cardsArr[m] = cardsArr[i];
        cardsArr[i] = t;
    }
}

//remove any existing cards then append each shuffled card
function shuffleCards(){
    shuffleMath();
        $(".shuffledCards").remove();
        $("#singleCard").remove();
            cardsArr.forEach(function(cards){
                $(".multiple").append($('<div class="col-lg-4 col-sm-6 col-xs-16 shuffledCards"><img class="rounded" src="/' + cards + '"/></div>').hide().fadeIn(750));
    });
}