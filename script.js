// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/\\+=";
var chosenCharacters = "";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value=password;

}

function enterPassword() {
    var password = generatePassword;
     var passwordText = document.querySelector("#password");
     passwordText.value=password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
    var result=""
    var length = prompt("how many characters would you like? choose between 8and 128");
    //isNaN function if no input displays message'please inpu number'
    if(isNaN(length)){
        alert("please input number");
        return generatePassword()
    }
    if(length<8 || length >128){
        alert("please input number between 8 and 128");
        return generatePassword()
    }

var hasUpper = confirm("Include upper case letters?");
var hasLower = confirm("Include lower case letters?");
var hasNumbers = confirm("Include numbers?");
var hasSpecial = confirm("Include special characters?");
//makes sure you use at least one option thats given
if(!hasUpper&&!hasLower&&!hasNumbers&&!hasSpecial){
  alert("You must at least choose 1 character type!");
  return generatePassword()
}

if(hasUpper){
  chosenCharacters += upper
}
if(hasLower){
  chosenCharacters += lower
}

if(hasNumbers) {
  chosenCharacters += numbers
}

if(hasSpecial) {
  chosenCharacters += special
}

for (var i = 0; i < length; i++) {
result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;

}
