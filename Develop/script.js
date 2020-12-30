// Assignment code here
function generatePassword(a, b, c, d, e) {
  var length = a,
        charset = b + c + d + e,
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // ask player if they'd like to fight or run
  var promptNumberOfChar = window.prompt('Enter number of characters for password. Between 8 and 128.');
  while (promptNumberOfChar < 8 || promptNumberOfChar > 128 ) {
    window.alert('You must enter a number between 8 and 128!');
    var promptNumberOfChar = window.prompt('Enter number of characters for password. Between 8 and 128.');
  }

  var promptCharSet = window.prompt('Enter selection for password character set. Enter lowercase, uppercase, numbers, special characters.');

  //THEN I choose lowercase, uppercase, numeric, and/or special characters
  var userTurn = prompt('Enter r, p, or s to play!');
        userTurn = userTurn.toLowerCase();

        // Create the game logic to run if the user chooses a valid game choice
        if (userTurn === 'r' || userTurn === 'p' || userTurn === 's') {

  var password = generatePassword(promptNumberOfChar, charSetLower, charSetUpper, charSetNumber, charSetSpecial);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

