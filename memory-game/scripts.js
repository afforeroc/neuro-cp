const cards = document.querySelectorAll('.memory-card'); // Constant list of all memory-cards.


let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.add('flip'); // Do this in this way: 'memory-card => 'memory-card flip'.
    if (!hasFlippedCard) { // First click.
        hasFlippedCard = true;
        firstCard = this;
    } else { // Second click.
        hasFlippedCard = false;
        secondCard = this;
        console.log({firstCard, secondCard});

        // Do cards match?

    }
}


cards.forEach(card => card.addEventListener('click', flipCard)); // Link each memory-card a listen a event.

