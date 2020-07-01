const cards = document.querySelectorAll('.memory-card'); // Constant list of all memory-cards.


let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.add('flip'); // Do this in this way: 'memory-card => 'memory-card flip'.
    if (!hasFlippedCard) { // First click.
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    // Second click.
    hasFlippedCard = false;
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
}

function unflipCards() {
    setTimeout(() => { // Wait time 1.5 seconds after last click.
        firstCard.classList.remove('flip'); // Return the selected cards to inicial state.
        secondCard.classList.remove('flip');
    }, 1500);
}

cards.forEach(card => card.addEventListener('click', flipCard)); // Link each memory-card a listen a event.

