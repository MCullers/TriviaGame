//questions and answers
var questions = [
    {
        question: "Which one of these metal bands is not considered one of the Big Four of Thrash?",
        choices: ["Anthrax", "Metallica", "Megadeth", "Pantera"],
        answer: "Pantera"
    },
    {
        question: "Which one of these is not considered a gerne of Metal?",
        choices: ["Grundge", "Black", "Doom", "Trash"],
        answer: "Grundge"
    },
    {
        question: "Which one of these is not a Metallica album?",
        choices: ["Kill 'Em All", "Enter the Sandman", "Master of Puppets", "Ride the Lightning"],
        answer: "Enter the Sandman"
    },
    {
        question: "Which band is gernerally attributed with the birth of Metal?",
        choices: ["Slayer", "Led Zepplin", "Iron Maiden", "Black Sabbath"],
        answer: "Black Sabbath"
    },
    {
        question: "Which one of these is a famous Metal singer",
        choices: ["Paul Mccartney", "Kurt Cobain", "Madonna", "Ronnie James Dio"],
        answer: "Ronnie James Dio"
    },
]
//create timer
var counter = 30

//generate start page with button
//when button is pushed move to page with questions and start timer
//cycle to first array in questions
//if timer runs out move to next array and add 1 to unaswered, reset timer
//if right answer guessed move to next array and and 1 to correct, reset timer
//if wrong answer guessed move to next array and add 1 to wrong, reset timer
//when all questions are answered display results