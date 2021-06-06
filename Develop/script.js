// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// User clicks 'generate' and is promopted with variables to include in the randomly generated password

// AIM IS  to make the var password = generatePassword(); function work

// DEFINE the string options for password elements

var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


// CREATE THE FUNCTION

function generatePassword() {

  var password = "";
  var passwordLength = "";

  // User generates the desired length of password

  var length = prompt("Enter a number from 8 to 128 for password length");
  length = parseInt(length);

  if (length < 8 || length > 128) {
    window.alert("Your password length must be between 8 & 128 characters. Please try again.") 
    return ""
    }
  
  // creating variable "yes/no boolean comnfirmations"

  var lowerChoice = confirm("Would you like to throw in a few lowercase characters?");

  if (lowerChoice) {
    passwordLength += lowerChoice; 
  }

  var upperChoice = confirm("How about some uppercase characters?");

  if (upperChoice) {
    passwordLength += upperChoice;
  } 

  var numbersChoice = confirm("Spice things up with some numbers?");

  if (numbersChoice) {
    passwordLength += numbersChoice; 
  }

  var symbolChoice = confirm("Secure yourself with symbols?");

  if (symbolChoice) {
    passwordLength += symbolChoice;
  }

  for (var i = 0; i < length; i++) {
    password = passwordLength [Math.floor(Math.random() * passwordLength.length)]
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");
}