let player = {
    name : "Jatin",
    chips :"223"
}
let card = [];
let sum = 0;
let hasBlackJack = false;
let isalive = false;
let message = "";
let message_el = document.getElementById("message-el");
let sumel = document.getElementById("summ");
let cardsEl = document.getElementById("cards-el");

let playerhold = document.getElementById("player-el");
playerhold.textContent = " name: " + player.name + " ____ " + "Money: " + player.chips + "$";

function randomcard() {
    let x = (Math.floor(Math.random() * 13)) + 1;
    if (x > 10) {
        return 10;
    }
    else if (x === 1) {
        return 11;
    }
    else {
        return x;
    }
}
function startgame() {
    isalive = true;
    card = [randomcard(), randomcard()];
    sum = card[0] + card[1];
    rendergame();
}

function rendergame() {
    sumel.innerText = "Sum: " + sum;
    cardsEl.innerText = "cards: ";
    for (let i = 0; i < card.length; i++) {
        cardsEl.textContent += card[i] + " ";
    }

    if (sum <= 20) {
        message = "draw new card?";
    }
    else if (sum === 21) {
        message = "won";
        hasBlackJack = true;
    }
    else {
        message = "we lost";
        isalive = false;
    }
    message_el.innerText = message;
    console.log(message);
}
function newCard() {
    if (isalive === true && hasBlackJack === false) {
        let ncard = randomcard();
        card.push(ncard);
        sum += ncard;
        rendergame();
    }

}