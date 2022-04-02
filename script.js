"use strict";
var generateBtn = document.querySelector("#generate");

function generatePassword(length, haveLowerCase, haveUpperCase, haveNumbers, haveSpecial){
  let lower = "abcdefghijklmnop";
  let upper = "ABCDEFGHIJKLMNOP";
  let numbers = "123456789";
  let special = "~`!@#$%^&*()_+[{]}\\|;:\'\",<.>/?";
  
  let password = "fdsa";
  return password;
}

// Write password to the #password input
function writePassword() {
  // prompt user and cast the input value as a number
  var passLength = Number(window.prompt("Choose password length from 8 to 128:"));

  // if the input value isn't a number or within 8-128 then re-prompt the user
  while(!Number.isInteger(passLength) || passLength < 8 || passLength > 128){
    passLength = Number(window.prompt("Error. Please choose password length from 8 to 128:"));
  }

  // lowercase, uppercase, numeric, and/or special characters
  var lowerCase = window.confirm("Should it include lowercase characters?");
  var upperCase = window.confirm("Should it include uppercase characters?");
  var numeric = window.confirm("Should it include numeric characters?");
  var special = window.confirm("Should it include special characters?");



  
  var password = generatePassword(passLength, lowerCase, upperCase, numeric, special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

