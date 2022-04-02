"use strict";
var generateBtn = document.querySelector("#generate");

function generatePassword(passLength, restrictions){
  let lower = "abcdefghijklmnop";
  let upper = "ABCDEFGHIJKLMNOP";
  let numbers = "123456789";
  let special = "~`!@#$%^&*()_+[{]}\\|;:\'\",<.>/?";
  let pool = [lower, upper, numbers, special];
  
  // create an ordered string with numbers from each eligible pool
  let orderedPass = "";
  let count = 0;
  let restrictionsIterator = 0;
  while(orderedPass.length < passLength){
    // evenly looping through only the user selected characters
    restrictionsIterator = count % restrictions.length;
    if(restrictions[restrictionsIterator]){
      // picking a random index
      let randIndex = Math.floor(Math.random() * pool[restrictionsIterator].length);
      // appending the next character
      orderedPass += pool[restrictionsIterator].charAt(randIndex);
    }
    count++;
  }

  let password = "";
  // shuffle the ordered password
  for(let i = 0; i < passLength; i++){
    let randIndex = Math.floor(Math.random() * orderedPass.length);
    password += orderedPass.charAt(randIndex);
    orderedPass = orderedPass.slice(0, randIndex) + orderedPass.slice(randIndex + 1);
  }

  return password;
}

function promptLength(){
  // prompt user and cast the input value as a number
  let passLength = Number(window.prompt("Choose password length from 8 to 128:"));

  // if the input value isn't a number or within 8-128 then re-prompt the user
  while(!Number.isInteger(passLength) || passLength < 8 || passLength > 128){
    passLength = Number(window.prompt("Error. Please choose password length from 8 to 128:"));
  }
  return passLength;
}

function promptRestrictions(){
  // lowercase, uppercase, numeric, and/or special characters
  let lowerCase = false;
  let upperCase = false;
  let numeric = false;
  let special = false;
  while(!lowerCase && !upperCase && !numeric && !special){
    lowerCase = window.confirm("Should it include lowercase characters?");
    upperCase = window.confirm("Should it include uppercase characters?");
    numeric = window.confirm("Should it include numeric characters?");
    special = window.confirm("Should it include special characters?");
    if(!lowerCase && !upperCase && !numeric && !special){
      window.alert("Error, please select at least 1 character type")
    } else{
      return [lowerCase, upperCase, numeric, special];
    }
  }
}

// Write password to the #password input
function writePassword() {
  // prompt user and cast the input value as a number
  let passLength = promptLength();
  let restrictions = promptRestrictions();

  var password = generatePassword(passLength, restrictions);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

