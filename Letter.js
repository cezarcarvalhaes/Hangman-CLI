var Letter = function (correctLetter) {
    this.correctLetter = correctLetter;
    this.correctGuess = false;
    this.displayLetter = function() {
        // console.log("display letter:");
        if (this.correctGuess === true) {
            // console.log(correctLetter)
            return correctLetter;
        }
        else {
            // console.log('_')
            return '_'
        }
    }
    this.checkLetter = function (character) {
        //console.log("check letter:");
        if (character.toLowerCase() === correctLetter.toLowerCase()){ 
            this.correctGuess = true;
            return true;
            //console.log(this.correctGuess)
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