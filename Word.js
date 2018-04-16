var Letter = require('./Letter.js')

var Word = function (input) {
    this.rightWord = input;
    this.wordLetters = [];
    this.getLetters = function() {
        for (i = 0; i < input.length; i++) {
            this.wordLetters.push(new Letter(input.charAt(i)))
        }
    }
    this.displayWord = function() {
        var word = [];
        for (i = 0; i < this.wordLetters.length; i++) {
            word.push(this.wordLetters[i].displayLetter())
        }
        var displayed = 'word: ' + word.join(' ');
        this.guessedWord = word.join('');
        console.log(displayed);
    }
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

// var checkWord = new Word ('foobar');
// checkWord.getLetters();
// checkWord.displayWord();
// checkWord.letterGuess('o');
// checkWord.displayWord();
// checkWord.letterGuess('b');
// checkWord.displayWord();