//Készítette: F4 csoport

//creating the objects
let unicornCard = document.querySelector("#unicorn-card");
let phoenixCard = document.querySelector("#phoenix-card");
let dragonCard = document.querySelector("#dragon-card");
let griffCard = document.querySelector("#griff-card");
let sampleCard = document.querySelector("#sample-card");


//The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
//repository link to the algorithm: https://github.com/Daplie/knuth-shuffle
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

let isVisible = [true, true, false, false];

function changeCard() {

    isVisible = shuffle(isVisible);

    //declaring random bool variables
    let isVisible_unicorn = isVisible[0];
    let isVisible_phoenix = isVisible[1];
    let isVisible_dragon = isVisible[2];
    let isVisible_griff = isVisible[3];


    //decide logic

    //unicorn
    if (isVisible_unicorn == true) {
        isVisible_unicorn = "block";
    }
    else {
        isVisible_unicorn = "none";
    }

    //phoenix
    if (isVisible_phoenix == true) {
        isVisible_phoenix = "block";
    }
    else {
        isVisible_phoenix = "none";
    }

    //dragon
    if (isVisible_dragon == true) {
        isVisible_dragon = "block";
    }
    else {
        isVisible_dragon = "none";
    }

    //griff
    if (isVisible_griff == true) {
        isVisible_griff = "block";
    }
    else {
        isVisible_griff = "none";
    }

    unicornCard.style.display = isVisible_unicorn;
    phoenixCard.style.display = isVisible_phoenix;
    dragonCard.style.display = isVisible_dragon;
    griffCard.style.display = isVisible_griff;
}

//only two elements out of four will be seen
unicornCard.style.display = "none";
griffCard.style.display = "none";

//execute the changeCard function every 10 seconds
setInterval(function() {
    changeCard();
}, 10 * 1000); // 10 * 1000 milsec