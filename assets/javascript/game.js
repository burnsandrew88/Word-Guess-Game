var wins = 0 ;
var losses = 0;

var maxErrors = 0;

var wordDisplayLetters = document.getElementById("word-display-letters");
var guessedLetters = document.getElementById("guessed-letters");
var errorCountElement = document.getElementById("error-count");
var winCount = document.getElementById("win-count");
var lossCount = document.getElementById("loss-count");

var validGuesses = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']