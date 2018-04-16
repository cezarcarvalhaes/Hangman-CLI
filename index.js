var inquirer = require('inquirer');

var Word = require('./Word.js');

var wordsArr = ['Afghanistan','Albania','Algeria', 'Andorra', 'Anguilla', 'Antigua and Barbuda',]

console.log("---------------------------Welcome to Nations of the World Hangman!---------------------------")

var guessesRemaining = 10;

inquirer.prompt([
    {
        name: 'play',
        type: 'confirm',
        message: 'Would you like to start playing?'
    }
]).then(function(answer){
    if (answer.play === true) {
        newWord();
    }
    else {
        console.log("Bummer, maybe next time.")
    }
}
);

function newWord() {
    var rdm = Math.floor(Math.random() * wordsArr.length);
    var tempWord = wordsArr[rdm];
    console.log(tempWord);
    var hangmanWord = new Word (tempWord);
    console.log ("Here's your new word:")
    hangmanWord.getLetters();
    hangmanWord.displayWord();
    guessALetter(hangmanWord);
    wordsArr.splice(rdm,1);
}

function guessALetter(word) {
    inquirer.prompt([
        {
            name: 'letter',
            type: 'input',
            message: "Guess a letter (then press 'Enter')"
        }
    ]).then(function(answer) {
        var letter = answer.letter;
        console.log(word.guessedWord);
        console.log(word.rightWord);
        word.letterGuess(letter)
        if (word.rightWord === word.guessedWord){
            console.log("Nice Job! You got the word!")
            console.log(wordsArr);
            playAgain();
        }
        else if (word.guessesRemaining === 0){
            console.log("You lose! Your word was: ")
            console.log(word.rightWord);
            playAgain();
        }
        else {
            guessALetter(word);
        }
    });
}

function playAgain () {
    inquirer.prompt([
        {
            name: 'play',
            type: 'confirm',
            message: 'Would you like to play again?'
        }
    ]).then(function(answer){
        if (answer.play === true) {
            newWord();
        }
        else {
            console.log("Bummer, maybe next time.")
        }
    }
    );

}