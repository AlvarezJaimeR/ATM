"use strict"
//import atm.js file into index.js file

const {balance, startWithdraw, startDeposit, pin, valueBalance, validateInput} = require('./atm.js')
const prompt = require('prompt-sync')({sigint: true});

let currentBalance = valueBalance;
console.log(currentBalance);

const userInputPin = prompt('What is your 4 digit pin? ');
let intValid = validateInput(userInputPin);
console.log(intValid);
console.log('Correct amount of digits and all numbers');
let trialInputs = pin(userInputPin, intValid);
console.log('Correct Pin');

console.log('You entered ' + trialInputs);