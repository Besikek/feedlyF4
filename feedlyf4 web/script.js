//Készítette: F4 csoport

//declaring element variables
let unicornCard = document.querySelector("#unicorn-card");
let phoenixCard = document.querySelector("#phoenix-card");
let dragonCard = document.querySelector("#dragon-card");
let sampleCard = document.querySelector("#sample-card");



//random num function
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

let isVisible = [true, false, true, false];




function changeCard() {

    //declaring random bool variables
    let isVisible_unicorn = isVisible[getRandomInt(3)];
    let isVisible_phoenix = isVisible[getRandomInt(3)];
    let isVisible_dragon = isVisible[getRandomInt(3)];
    let isVisible_sample = isVisible[getRandomInt(3)];


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

    //sample
    if (isVisible_sample == true) {
        isVisible_sample = "block";
    }
    else {
        isVisible_sample = "none";
    }


    console.log(isVisible_sample, isVisible_dragon);


    unicornCard.style.display = isVisible_unicorn;
    phoenixCard.style.display = isVisible_phoenix;
    dragonCard.style.display = isVisible_dragon;
    sampleCard.style.display = isVisible_sample;
}

setInterval(function() {
    changeCard();
}, 20 * 1000); // 20 * 1000 milsec