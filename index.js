"use strict"
//import atm.js file into index.js file

const {balance, startWithdraw, startDeposit, pin, validateInput, checkUserNumInput} = require('./atm.js')
const prompt = require('prompt-sync')({sigint: true});


mainMenu();
function mainMenu(){
    const userInputPin = prompt('What is your 4 digit pin? ');
    let intValid = validateInput(userInputPin);
    let trialInputs = pin(userInputPin, intValid);
    console.log('Correct Pin');
    console.log('You entered ' + trialInputs);
    let mainLoop = true;
    while (mainLoop === true){
    console.log('What would you like to do?' + '\n' + 'Balance' + '\n' + 'Withdraw' + '\n' + 'Deposit' + '\n' + 'Exit');
    let userButton = prompt().toLowerCase();

        switch(userButton){
            case 'balance':
                balance();
                break;
            case 'withdraw':
                console.log('How much would you like to withdraw?: ');
                let withdrawAmount = prompt();
                let withdrawAmountInt = parseInt(withdrawAmount)
                let validInputW = checkUserNumInput(withdrawAmountInt, userButton);
                startWithdraw(withdrawAmountInt, validInputW);
                break;
            case 'deposit':
                console.log('How much would you like to deposit?: ');
                let depositAmount = prompt();
                let depositAmountInt = parseInt(depositAmount);
                let validInputD = checkUserNumInput(depositAmountInt, userButton);
                startDeposit(depositAmountInt, validInputD);
                break;
            case 'exit':
                mainLoop = false;
                return mainLoop;
        }
    }
}