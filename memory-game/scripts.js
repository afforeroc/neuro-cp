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
        if (firstCard.dataset.framework === 
            secondCard.dataset.framework) {
            // It's a match!!!
            firstCard.removeEventListener('click', flipCard)
            secondCard.removeEventListener('click', flipCard)
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1500);
        }
    }
}


cards.forEach(card => card.addEventListener('click', flipCard)); // Link each memory-card a listen a event.

