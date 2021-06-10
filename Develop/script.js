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
  var passwordChoice = "";

  // User generates the desired length of password

  var passwordLength = prompt("Enter a number from 8 to 128 for password length");
  passwordLength = parseInt(passwordLength);

  // If user doesn't a length between 8 & 128 ask them to try again. 

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Your password length must be between 8 & 128 characters. Please try again.") 
    return ""
    }
  
  // creating variable "yes/no" boolean confirmations which add the variables into a string if true

  var lowerChoice = confirm("Would you like to throw in a few lowercase characters?");

  if (lowerChoice) {
    passwordChoice += lowerCase; 
  }

  var upperChoice = confirm("How about some uppercase characters?");

  if (upperChoice) {
    passwordChoice += upperCase;
  } 

  var numbersChoice = confirm("Spice things up with some numbers?");

  if (numbersChoice) {
    passwordChoice += numbers; 
  }

  var symbolChoice = confirm("Secure yourself with symbols?");

  if (symbolChoice) {
    passwordChoice += symbols;
  }

  // This for loop is used to generate the password by replacing password with passwordChoice

  for (var i = 0; i < passwordLength; i++) {
    password += passwordChoice[Math.floor(Math.random() * passwordChoice.length)];
  }
  
  return password; 
}

