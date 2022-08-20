// Assignment Code
var generateBtn = document.querySelector("#generate");

var capLetters = ["A" , "B", "C", "D", "E", "F", "G" , "H" , "I" , "J" , "K" , "L" ,
"M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"];
console.log (capLetters);

var lowLetters = ["a" , "b" , "c", "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" ,
"m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];
console.log (lowLetters);

var specChar = ["~" , "!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "_" , "+" , "{" ,
"}" , "(" , ")" , "-" , "=" , "'" , "," , "." , "/" , "<" , ">" , "?" , ":" ];
console.log (specChar);

var numbers = ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "0"]; 
console.log (numbers);

var newpasswordArray = [];

// User Choices
function generatePassword() {
    var userLength = prompt ("How many characters would you like in your password? \nChoose between 8 and 128 characters.");
    var userLowercase = confirm ("Click 'Ok' if you want LOWERCASE letters in your password. \nClick 'Cancel' for no.");
    var userUppercase = confirm ("Click 'Ok' if you want UPPERCASE letters in your password. \nClick 'Cancel' for no.");
    var userCharacters = confirm ("Click 'Ok' if you want special characters in your password. \nClick 'Cancel' for no.");
    var userNumbers = confirm ("Click 'Ok' if you want numbers in your password. \nClick 'Cancel' for no.");

// Alert 
    if (!userUppercase && !userLowercase && !userCharacters && !userNumbers) {
        alert ("You need to select at least one of the password criteria!");
        return generatePassword ();
        }

// Number of characters
    if (userLength <= 8  || userLength >= 128) {
        alert("Your password cannot be less than 8 or more than 128 characters");
        return generatePassword();
        }

// Push 

    if (userLowercase) {
        for (var i = 0; i < lowLetters.length; i++) {
            newpasswordArray.push(lowLetters[i]);
        }
    }

    if (userUppercase) {
        for (var i = 0; i < capLetters.length; i++) {
            newpasswordArray.push(capLetters[i]);
         }
    }

    if (userCharacters) {
        for (var i = 0; i < specChar.length; i++) {
            newpasswordArray.push(specChar[i]);
        }
    }

    if (userNumbers) {
        for (var i = 0; i < numbers.length; i++) {
            newpasswordArray.push(numbers[i]);
        }
    }


let userPassword = "";

for (var i = 0; i < userLength; i++) {
    userPassword = userPassword + newpasswordArray[Math.floor(Math.random() * newpasswordArray.length)];
    
}
console.log(userPassword);
console.log(newpasswordArray);
return userPassword;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
