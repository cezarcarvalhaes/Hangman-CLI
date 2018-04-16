var Letter = function (correctLetter) {
    this.correctLetter = correctLetter;
    this.correctGuess = false;
    this.displayLetter = function() {
        //returns correctly guessed letters
        if (this.correctGuess === true) {
            return correctLetter;
        }
        //This will handle any spaces
        else if (correctLetter === ' ') {
            return ' '
        }
        //This will handle any dashes
        else if (correctLetter === '-') {
            return '-'
        }
        //returns '_' for hidden letters
        else {
            return '_'
        }
    }
    this.checkLetter = function (character) {
        if (character.toLowerCase() === correctLetter.toLowerCase()){ 
            this.correctGuess = true;
            return true;
        }
    }

}

module.exports = Letter;

// var check = new Letter ("a");
// console.log(check);
// check.displayLetter();
// check.checkLetter('c');
// check.displayLetter();
// console.log(check)