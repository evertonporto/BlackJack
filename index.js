let player = {
    name: "Everton",
    chips: 145
}

let cards = [];
let cardDealer= [];
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let dealerEl = document.getElementById("dealer-el")

playerEl.textContent = player.name + ": $ " + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    let fourthCard = getRandomCard();
    let fifthCard = getRandomCard();
    cards = [firstCard, secondCard]
    cardDealer = [fourthCard, fifthCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
    
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    dealerEl.textContent = "Dealer Hand: " + cardDealer
    
    for (let i = 0; i < cardDealer.length; i++) {
        cardDealer.textContent += " " + cardDealer[i]
    }

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
    
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "YOU GOT BLACKJACK, YOU WON!"
        hasBlackJack = true
    } else {
        isAlive = false
        message = "You're out of the game!"

    }
    messageEl.innerHTML = message
}

function drawCard() {
    if (!hasBlackJack && isAlive) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }
}

// function dealerHand(){
//     getRandomCard()
    
// }