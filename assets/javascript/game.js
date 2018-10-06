// variables

var WordBank = ['cowboys', 'patriots', 'eagles', 'browns', 'raiders', 'bears', 'steelers', 'packersgross', 'giants', 'broncos', 'seahawks', 'chiefs', 'vikings', 'lions', 'chargers', 'rams', 'bucaneers', 'saints', 'cardinals', 'ravens', 'bengals', 'fortyniners', 'falcons', 'panthers', 'texans', 'jaguars', 'colts', 'titans']

var PlayerGuess = [];

var IncorrectLetterBank = "";

var currentGuess = "";

var guessesLeft = 10; 

var wins = 0;

var letterKeys = ("abcdefghijklmnopqrstuvwxyz").split("");

// Chooses random item from the WordBank Array

var randomInt =  WordBank [Math.floor(Math.random() * WordBank.length)];

var randomWord = randomInt;

console.log (randomWord)

// Functions
var displayedWord = [];
function answers(guess){
    var randomWords = randomWord.split('')
    for (var i = 0; i < randomWords.length; i++){
        if (randomWords[i]=== guess){
            displayedWord[i] === guess;

        } else{
            displayedWord[i] = "_";
        }
        
    }
    console.log(displayedWord)
}
var placeholders = document.getElementById("placeholders");
answers()
console.log(PlayerGuess)
placeholders.innerHTML = displayedWord.join('')

// function Displayedlives(livesnumber){
// document.getElementById("guesses-left").innerHTML = livesnumber;
// }

function UserDisplay (letter){

    document.getElementById("placeholders").textContent = letter;
}

function winDisplay (number) {
    document.getElementById("wins-count").textContent = number;
}




var PlayerGuessArr = PlayerGuess;

var GuessElements = [];

// choose letters 

document.onkeyup = function (event){
    var PlayerChoice = event.key;
    // what key is it?
    //     function 
    // // is key correct?
    //     function
    // // if so - write to DOM
    //     function
    // // if wrong - decrement guess count
    //     function
    // // has word been guessed?
    //     function
    // // OR have guesses been exhausted?
    //     function
    if (letterKeys.includes(PlayerChoice)){
        if (GuessElements.includes(PlayerChoice)){
            alert ("That letter was already guessed!")
        }  {
             if (guessesLeft > 0) {
                
            if (randomWord.includes(PlayerChoice)){
                // for (var z = 0; z < randomWord.length; z++){
                // if (PlayerChoice === letterKeys[z]) {
                    console.log('here')
                    // GuessElements[z] = PlayerChoice;
                    PlayerGuess.push(PlayerChoice);
                    answers(PlayerGuess);
                    placeholders.innerHTML = displayedWord.join('')
                    
                    // if(PlayerChoice.join("") === randomWord){
                    //     alert ("YOU WIN!!!");
                    //     wins++;
                    //     winDisplay(number);
                    // }
                // }
                // }
            } else {
                guessesLeft--;
                GuessElements.push(PlayerChoice);
                document.getElementById("guessed-letters").innerHTML = ("Incorrect Letters Guessed:" +  GuessElements)
                document.getElementById("guesses-left").innerHTML = "You have " + guessesLeft;
                if(guessesLeft === 0) {
                    alert ("You have Lost...")

                }
            }
            }
        }
    }

}
















// // Variables

// var placeholders = document.getElementById("placeholders");
// var guessedLetters = document.getElementById("guessed-letters");


// var losses = document.getElementById("loss-count");



// // Create Variables (WordBank, Wins, Losses, PickedWord, Guesses Left, WordPlaceHolder, GuessedLetterBank, IncorrectLetterBank)

// var WordBank = ["Cowboys", "Patriots", "Eagles", "Browns", "Raiders", "Bears", "Steelers", "PackersGross", "Giants", "Broncos", "Seahawks", "Chiefs", "Vikings",]

// var wins = 0;
// var losses = 0;
// var guessesLeft = 8;
// var maxWords = WordBank.length;
// var PickedWord = "";
// var letterCheck;
// var GuessedLetterBank = [];
// var IncorrectLetterBank = [];
// var PickedWordPlaceholderArr = [];
// var splitWord = [];
// // Functions

// function currentGuess() {
//     placeholders = PickedWord.length;
//     for (var i = 0; i < placeholders; i++) {
//         currentGuess.push("");
//     }
// }

// // Tests the letters to make sure they match up with picked word

// function doubleCheck() {
//     for (var i = 0; i < PickedWord.length; i++) {
//         if (PickedWord[i] = " ") {
//             PickedWordPlaceholderArr.push("");
//         } else {
//             PickedWordPlaceholderArr.push("");
//         }
//     }
//     // Wins and Losses Counter Functions        

//     function winnerWinner() {
//         wins++;
//         document.getElementById("win-count").innerHTML = wins;
//     }

//     function loser() {
//         losses++;
//         document.getElementById("loss-count").innerHTML = losses;
//     }
//     // Random Numbers
//     function randomNumber(max) {
//         return Math.floor(Math.random() * Math.floor(max));
//     }

//     // Checks if current guessed letter is already in GuessedLetterBank

//     var guessedLetters = function (element) {
//         return element === letterCheck;
//     }

//     // Display functions (Guesses Remaining, Incorrect Letters Guessed)

//     function displayGuessesRemaining() {
//         document.getElementById("guesses-left").innerHTML = guessesLeft;
//     }

//     function displayGuessedLetters() {
//         document.getElementById("guessed-letters").innerHTML = IncorrectLetterBank;
//     }

//     // selects a random word from my WordBank

//     function wordShuffle() {
//         let randomNumber = 0;
//         randomNumber = randomNumber(max);
//         PickedWord = words[randomNumber];
//         console.log(PickedWord);

//     }

//     function splitWord(value) {
//         PickedWordPlaceholderArr = value.split("");

//     }
//     function WordPlaceHolder() {
//         document.getElementById("placeholders").innerHTML = currentGuess;
//     }

//     //Tests to see if the player wins

//     function didIWin() {
//         let counter = 0;
//         for (t = 0; t < PickedWord.length; t++) {
//             if (currentGuess[t] === PickedWord[t]) {
//                 counter++;
//             }
//         }
//         if (counter === PickedWord.length) {
//             alert("You Win!")
//         } else {
//             alert("You Lose!")
//         }
//     }


//     // Continue Game
//     function keepPlaying() {
//         if (lettersGuessed.some(letterCheck)) { //if any checkletter matches any already in lettersguess array, true
//             console.log("Already guessed!");//debug
//         } else {
//             guessesLeft--;
//             GuessedLetterBank.push(event.key); // pushes the letter typed into the lettersGuessed array
//             console.log(GuessedLetterBank); // debug purposes
//             displayGuessedLetters();
//             doubleCheck(event.key);
//             wordShuffle();
//             splitWord();
//             WordPlaceHolder();
//             displayGuessesRemaining();
            
//         }
//     }

//     document.onkeyup = function (event) {
//         letterToCheck = (event.key); //set letterToCheck to the letter typed on keyboard
//         if (guessesLeft > 0 && didIWin === false) { // while there are still guesses remaining, do this:
//             keepPlaying();
//         } else      // once guesses are exhausted do this:
//             if (guessesLeft < 0) {
//                 winnerWinner();
//                 resetGame();
//             } else resetGame(); {
//         }
//     }
// }
// function resetGame() {
//     guessesLeft=8; // reset number of guesses   
//     GuessedLetterBank=[]; // reset letters guessed
//     currentGuess=[]; //resets guessInProgress
//     PickedWordPlaceholderArr=[]; // resets correct letters
//     splitWord=[]; // resets splitWord
//     wordSelector(); // selects the word
//     wordSplitter(wordSelected); //splits the selected word apart
//     prepareGuessInProgress(); // prepares the guessInProgress array with requisite number of blanks
//     displayGuessesRemaining(); // displays total number of guesses
//     printSpaces(); // displays contents of guessInProgress on page
// }










