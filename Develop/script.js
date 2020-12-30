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

  // ask the user for the number of characters they want for the password
  var promptNumberOfChar = window.prompt('Enter number of characters for password. Between 8 and 128.');
  while (promptNumberOfChar < 8 || promptNumberOfChar > 128 ) {
    window.alert('You must enter a number between 8 and 128!');
    promptNumberOfChar = window.prompt('Enter number of characters for password. Between 8 and 128.');
  }

  //ask the user for the types of character they want for 
  var promptCharSet = window.prompt('Enter selection for password character set. Enter lowercase, uppercase, numbers, special characters.');
  promptCharSet = promptCharSet.toLowerCase;
  while (promptCharSet != 'lowercase' || promptCharSet != 'uppercase' || promptCharSet != 'numbers' || promptCharSet != 'special characters') {
    window.alert('You must enter at least one of the following: lowercase, uppercase, numbers, special characters');
    promptCharSet = window.prompt('Enter selection for password character set. Enter lowercase, uppercase, numbers, special characters.');
  }
  // initialize charSetLower, charSetUpper, charSetNumber, charSetSpecial

  charSetLower = "";
  charSetUpper = "";
  charSetNumber = "";
  charSetSpecial = "";

  if (promptCharSet === 'lowercase') {
    charSetLower = "abcdefghijklmnopqrstuvwxyz"
  } if (promptCharSet === 'uppercase') {
    charSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } if (promptCharSet === 'numbers'){
    charSetNumber = "0123456789"
  } if (promptCharSet === 'special characters'){
    charSetSpecial = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }

  var password = generatePassword(promptNumberOfChar, charSetLower, charSetUpper, charSetNumber, charSetSpecial);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);