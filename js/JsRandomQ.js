const quotes = [
    [
        " While you're down ",
        " In life ",
        " In order to stay strong ",
        " On your journey ",
        " While life can get hard"
    ],
    [
        " always do your best ",
        " never look back ",
        " always think twice ",
        " make good decisions ",
        " don't lose focus "
    ],
    [
        " as you can do it. ",
        " because nothing can stop you. ",
        " and keep trying. ",
        " and stay positive. ",
        " because you can do it. "
    ],

];



function randomQuoteGenerator() {
    let randomQuote;
    for (let i = 0; i < quotes.length; i += 1) {
        randomQuote = Math.floor(Math.random() * quotes[i].length);
    }
    return randomQuote;
}


const btnQuoteGenerator = document.querySelector('#random-generator-btn');

btnQuoteGenerator.addEventListener('click', () => {
    document.getElementById('quote').innerHTML = "<p>" + " \" " + quotes[0][randomQuoteGenerator()] + quotes[1][randomQuoteGenerator()] + quotes[2][randomQuoteGenerator()] + " \" " + "<p>";
    console.log(quotes[0][randomQuoteGenerator()] + " " + quotes[1][randomQuoteGenerator()] + " " + quotes[2][randomQuoteGenerator()]);
});