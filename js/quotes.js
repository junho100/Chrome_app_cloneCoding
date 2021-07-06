const quotes = [
    {
        quote : "Be yourself; everyone else is already taken.",
        author : "Oscar Wilde"
    },
    {
        quote : "So many books, so little time.",
        author : "Frank Zappa"
    },
    {
        quote : "A room without books is like a body without a soul.",
        author : "Marcus Tullius Cicero"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function displayQuotes(){
    const idx = Math.round(Math.random()*(quotes.length-1));
    quote.innerText = quotes[idx].quote;
    author.innerText = quotes[idx].author;
}
displayQuotes();