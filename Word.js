var Letter = require('./Letter.js')

var Word = function (input) {
    //saves string to check later
    this.rightWord = input;
    //empty array to be filled with Letter objects
    this.wordLetters = [];
    //this function will push new Letter objects into our wordLetters array
    this.getLetters = function() {
        for (i = 0; i < input.length; i++) {
            this.wordLetters.push(new Letter(input.charAt(i)))
        }
    }
    //Function for displaying correctly guessed and still hidden letters
    this.displayWord = function() {
        var word = [];
        for (i = 0; i < this.wordLetters.length; i++) {
            word.push(this.wordLetters[i].displayLetter())
        }
        //holds word with spaces in between for easier readability
        var displayed = 'word: ' + word.join(' ');
        //holds the word without spaces inbetween for checking accuracy later
        this.guessedWord = word.join('');
        console.log(displayed);
    }
    //This function checks letter guesses
    this.letterGuess = function (character) {
        var correct = false;
        for (i = 0; i < this.wordLetters.length; i++) {
            this.wordLetters[i].checkLetter(character);
            if (this.wordLetters[i].checkLetter(character)) {
                correct = true;
            }
        }
        if (correct) {
            console.log("Correct!")
        }
        else {
            this.guessesRemaining--;
            console.log ("Incorrect!")
            console.log ("You have "+ this.guessesRemaining+ " guesses remaining.")
        }
        this.displayWord();
    }
    this.guessedWord;
    this.guessesRemaining = 10;
}

module.exports = Word;

