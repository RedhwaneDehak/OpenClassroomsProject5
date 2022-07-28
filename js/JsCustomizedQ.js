// quotes declaration
// object
let quotes = {

    Magic: [

        [

          " The quick brown fox jumps over the lazy dog. ",
        " Peanuts don't grow on trees, but cashews do. ",
        " All they could see was the blue water surrounding their sailboat. ",
        " He had unknowingly taken up sleepwalking as a nighttime hobby. ",
        " Mothers spend months of their lives waiting on their children. ",
        "Having fun is when we shouldn't do although we think we don't.",
        "He only earns his freedom and his life who takes them every day by storm",
        "Freedom, in any case, is only possible by constantly struggling for i",
        "If you’re not doing some things that are crazy, then you’re doing the wrong things",
        "Take risks. If you win you will be happy. If you lose, you will be wise."

        ],


    ]

        ,

    Wise: [

        [
        " In the truest sense freedom cannot be bestowed, it must be achieved. ~Franklin D. Roosevelt ",
        " We must be free not because we claim freedom, but because we practice it. ~William Faulkner ",
        " Do What You can With All You Have, Wherever You Are. ~Theodore Roosevelt ",
        " You Are Never too Old To Set Another Goal, Or To Dream A New Dream. ~C.S. Lewis ",
        " Reading Is to The Mind, As Exercise Is To The Body. ~Brian Tracy ",
        "It is never too late to be what you might have been. ~George Eliot",
        "Success usually comes to those who are too busy to be looking for it. ~Henry David",
        "You only live once, but if you do it right, once is enough. ~Mae West",
        "You miss 100 percent of the shots you don’t take. ~Wayne Gretzky",
        "The secret of getting ahead is getting started. ~Mark Twai"
        ],


    ]

}
// chose type of quotes from 2 buttons
function getTypeOfQuotes() {
    //let nomAuteur = document.querySelector("input[name = auteur]:checked").value;
    let NameTypeOfQuotes = document.getElementById("btn-s").value;

    return NameTypeOfQuotes;
}

document.querySelector(".btn-s1").style.backgroundColor = "white";
document.querySelector(".btn-s2").style.backgroundColor = "white";

document.querySelector(".btn-s1").onclick = function () {
    this.style.backgroundColor = "#3C4856";
    document.querySelector(".btn-s2").style.backgroundColor = "#fff";
};


document.querySelector(".btn-s2").onclick = function () {
    this.style.backgroundColor = "#3C4856";
    document.querySelector(".btn-s1").style.backgroundColor = "#fff";
};

// chose the Number of cuotes from  radio buttons

function getNrOFQuotes() {
    let NumberOfQuote = document.querySelector("input[name = NumberOfQuotes]:checked").value;
    return NumberOfQuote;
}


// generate quotes randomly
function randomeQuote(typeOfQuotes) {
    let phrase = "";
    typeOfQuotes.forEach(element => {
        phrase += element[Math.floor(Math.random() * element.length)];
    });
    return phrase;
}
// generate quotes
function generate() {
    let nrOFQuotes = getNrOFQuotes();
    let typeOfQuotes = getTypeOfQuotes();
    document.getElementById("playCitation").innerHTML = "";
    for (let i = 0; i < nrOFQuotes; i++) {
        document.getElementById("playCitation").innerHTML += "<blockquote>" + " \" " + randomeQuote(quotes[typeOfQuotes]) + " \" ";
    }
}



// Closing window (exit program)
function closeWindow() {
    if (confirm("Close window and exit program ?")) {
        window.location.href = "./index.html";
    }
}