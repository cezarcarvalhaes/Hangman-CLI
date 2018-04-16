var inquirer = require('inquirer');

var Word = require('./Word.js');

//Countries array. Probably should have put these in text file and dynamically created the array...
var wordsArr = ['Afghanistan','Albania','Algeria', 'Andorra', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia',
'Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan',
'Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde',
'Central African Repubic','Chad','Chile','China','Colombia','Comoros','Congo','Democratic Repubic of Congo','Costa Rica','Croatia','Cuba','Cyprus',
'Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','East Timor','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia',
'Ethiopia','Fiji','Finland','France','Gabon','Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala',
'Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland',
'Israel','Italy','Ivory Coast','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','North Korea','South Korea','Kosovo',
'Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macedonia',
'Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco',
'Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria',
'Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania',
'Russia','Rwanda','St Kitts & Nevis','Saint Vincent & the Grenadines','Samoa','San Marino','Sao Tome & Principe','Saudi Arabia','Senegal','Serbia',
'Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Sudan','Spain','Sri Lanka','Sudan',
'Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad & Tobago','Tunisia',
'Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela',
'Vietnam','Yemen','Zambia','Zimbabwe',]

console.log("\n\n---------------------------Welcome to Nations of the World Hangman!---------------------------\n\n")

//Starts our game up
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

//Function randomly selects a word from our array and creates a new Word object
function newWord() {
    var rdm = Math.floor(Math.random() * wordsArr.length);
    var tempWord = wordsArr[rdm];
    var hangmanWord = new Word (tempWord);
    console.log ("Here's your new word:")
    hangmanWord.getLetters();
    hangmanWord.displayWord();
    guessALetter(hangmanWord);
    //Deletes the current word from our array
    wordsArr.splice(rdm,1);
}

//Function for guessing letters
function guessALetter(word) {
    inquirer.prompt([
        {
            name: 'letter',
            type: 'input',
            message: "Guess a letter (then press 'Enter')"
        }
    ]).then(function(answer) {
        var letter = answer.letter;
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