var quotes_mov= [
    "I'm only starting, watch me grow.",
    "Learning is what keeps my mind going.",
    "Give me a chance to Learn.",
    "I love Python.",
    "A positive environment is what makes a company great. It\'s something that I would love to be in.",
    "Challenge me, and I will succeed.",
    "Mistakes are part of the learning process.",
    "I love to learn new things. This makes me adapt quicker to new environments.",
    "I aspire to be a Software Devleoper/Engineer."

]

function newQuotee() {
    var randomNumber = Math.floor(Math.random() * (quotes_mov.length));
   document.getElementById('quotes').innerHTML = quotes_mov[randomNumber];
}