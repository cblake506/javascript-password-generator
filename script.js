"use strict";
var generateBtn = document.querySelector("#generate");

function generatePassword(length, restrictions){
  let lower = "abcdefghijklmnop";
  let upper = "ABCDEFGHIJKLMNOP";
  let numbers = "123456789";
  let special = "~`!@#$%^&*()_+[{]}\\|;:\'\",<.>/?";

  
  let password = "";
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
  let lowerCase = window.confirm("Should it include lowercase characters?");
  let upperCase = window.confirm("Should it include uppercase characters?");
  let numeric = window.confirm("Should it include numeric characters?");
  let special = window.confirm("Should it include special characters?");
  return [lowerCase, upperCase, numeric, special];
}

// Write password to the #password input
function writePassword() {
  // prompt user and cast the input value as a number
  let passLength = promptLength();
  let restrictions = promptRestrictions();

  // if the input value isn't a number or within 8-128 then re-prompt the user
  while(!Number.isInteger(passLength) || passLength < 8 || passLength > 128){
    passLength = Number(window.prompt("Error. Please choose password length from 8 to 128:"));
  }


  var password = generatePassword(passLength, restrictions);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

