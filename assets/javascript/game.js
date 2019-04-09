// DOM Items
var newGameButton = document.getElementById("new-game-button");
var placeholders = document.getElementById("placeholders");
var guessedLetters = document.getElementById("guessed-letters");
var guessesLeft = document.getElementById("guesses-left");
var wins = document.getElementById("win-count");
var losses = document.getElementById("loss-count");



// Game variables (WordBank, Wins, Losses, Picked Word, Guesses Left, game running, picked word placeholder, guessed letter bank, incorrect letter bank)

var WordBank = ['Cowboys', 'Patriots', 'Eagles', 'Browns', 'Raiders', 'Bears', 'Steelers', 'Packers', 'Giants', 'Broncos', 'Seahawks', 'Chiefs', 'Vikings', 'Lions', 'Chargers', 'Rams', 'Bucaneers', 'Saints', 'Cardinals', 'Ravens', 'Bengals', 'FortyNiners', 'Falcons', 'Panthers', 'Texans', 'Jaguars', 'Colts', 'Titans', 'Dolphins', 'Jets', 'Redskins', 'Bills']

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var gameRunning = false;
var pickedWord = ' ';
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];


// new game function to reset all stats, pick new word, and create placeholders

function newGame() {
    // Resets all game info
    gameRunning = true;
    guessesLeft = 10;
    guessedLetterBank = [];
    incorrectLetterBank = [];


    // pick a new word 

    pickedWord = WordBank[Math.floor(Math.random() * WordBank.length)];



    // create the placeholders out of the word 

    for (i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === ' ') {
            pickedWordPlaceholderArr.push("  ");
        } else {
            pickedWordPlaceholderArr.push("_ ");
        }
    }

    // write all new game info to the DOM 
    guessesLeft.textContent = guessesLeft;
    placeholders.textContent = pickedWordPlaceholderArr.join('');
    guessedLetters.textContent = incorrectLetterBank;
}





//letter guess function takes in the letter you pressed and see if its in the selected word

function letterGuess(letter) {
    console.log(letter);

    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
        // Run Game Logic
        guessedLetterBank.push(letter);

        // guess if letter is in my picked word
        for (var i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                pickedWordPlaceholderArr[i] = pickedWord[i];
            }

        }

        placeholders.textContent = pickedWordPlaceholderArr.join('');
        checkIncorrect(letter);
    }
    else {
        if (!gameRunning) {
            alert("The Game Isn't Running, Click on the Kick Button");
        } else {
            alert("You've Already Guessed this letter");
        }
    }

}

// check for incorrect (letter)

function checkIncorrect(letter){
    if(pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 && pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1){
        guessesLeft--;
        incorrectLetterBank.push(letter);
        guessedLetters.textContent = incorrectLetterBank.join(' ');
        guessesLeft.textContent = guessesLeft;
    }
    checkLoss();
}

// checkLose
function checkLoss (){
    if(guessesLeft === 0){
        losses++;
        gameRunning = false; 
        losses.textContent = losses;
        placeholders.textContent = pickedWord;
        pickedWordPlaceholderArr.empty();
        alert("Better Luck Next Time!");
    }
    checkWin();
}
//checkWin
function checkWin(){
    if(pickedWord.toLowerCase() === pickedWordPlaceholderArr.join('').toLowerCase()){
        wins++;
        gameRunning = false;
        wins.textContent = wins; 
        pickedWordPlaceholderArr.empty();
        alert("You Win the Game!");
    }
    
}

// add event listener for new game button
newGameButton.addEventListener("click", newGame);
// event onkeyup event to trigger letter guess

document.onkeyup = function(event){
    if (event.keyCode >= 65 && event.keyCode <= 90){
        letterGuess(event.key);
    }
    
}





















