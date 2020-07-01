const cards = document.querySelectorAll('.memory-card'); // Constant list of all memory-cards.

let hasFlippedCard = false;
let lockBoard = false; // Avoid flip one more pairs of cards.
let firstCard, secondCard;

function flipCard(){
    if (lockBoard) return;
    if (this === firstCard) return; // Avoid match because doble click on one card

    this.classList.add('flip'); // Do this in this way: 'memory-card => 'memory-card flip'.
    if (!hasFlippedCard) { // First click.
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    // Second click.
    secondCard = this;
    checkForMath();
}

function checkForMath() {
    let isMatch = firstCard.dataset.framework === 
        secondCard.dataset.framework;
    
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => { // Wait time 1.5 seconds after last click.
        firstCard.classList.remove('flip'); // Return the selected cards to inicial state.
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard() { // Necessary to work fine avoid double click (line 10).
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor((Math.random() * 12))
        card.style.order = randomPos;
    });
})(); // This function will be executed inmediately invoked.

cards.forEach(card => card.addEventListener('click', flipCard)); // Link each memory-card a listen a event.


