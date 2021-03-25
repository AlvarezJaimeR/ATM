"use strict"
//import atm.js file into index.js file

const {balance, startWithdraw, startDeposit, pin, valueBalance, validateInput} = require('./atm.js')
const prompt = require('prompt-sync')({sigint: true});

let currentBalance = valueBalance;
console.log(currentBalance);


mainMenu();
function mainMenu(){
    const userInputPin = prompt('What is your 4 digit pin? ');
    let intValid = validateInput(userInputPin);
    console.log(intValid);
    console.log('Correct amount of digits and all numbers');
    let trialInputs = pin(userInputPin, intValid);
    console.log('Correct Pin');
    console.log('You entered ' + trialInputs);

    let mainLoop = true;
    while (mainLoop === true){
    console.log('What would you like to do?' + '\n' + 'Balance' + '\n' + 'Withdraw' + '\n' + 'Deposit' + '\n' + 'Exit');
    let userButton = prompt().toLowerCase();
    console.log(userButton);

        switch(userButton){
            case 'balance':
                console.log(currentBalance);
                break;
            case 'withdraw':
                break;
            case 'deposit':
                break;
            case 'exit':
                mainLoop = false;
                return mainLoop;
        }
    }
}