const cards = document.querySelectorAll('.memory-card');
// Make a list of all memory-cards elements and store in a constant object

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.toggle('flip'); // Modify the name class of div in the html file. In this way: 'memory-card => 'memory-card flip'
    if (!hasFlippedCard) {
        // First click
        hasFlippedCard = true;
        firstCard = this;''

        console.log(hasFlippedCard, firstCard);
    } else {
        // Second click
        hasFlippedCard = false;
        secondCard = this;
        console.log({firstCard, secondCard});

        // Do cards match?

    }
}

// Link each memory-card a listen a event
// When is clicked one memory card, this will flip
cards.forEach(card => card.addEventListener('click', flipCard));

