"use strict"
//import account.js file into atm.js file
//import atm.js file to index.js file

const{accountBalance, userPin} = require("./account.js");
const prompt = require('prompt-sync')({sigint: true});

let totalBalance = accountBalance;

//getBalance function
function getBalance(){

}

//withdraw function
function withdraw(currentBalance, withdrawAmount, validInput){
    if (validInput == true){
        if (currentBalance > withdrawAmount){
            let userWithdraw = currentBalance - withdrawAmount;
            console.log('Your current balance after the withdraw is: $' + userWithdraw);
            return userWithdraw;
        }else {
            console.log('Insufficient funds in your account.');
            return currentBalance;
        }
    }else {
        return currentBalance;
    }
}

//deposit function
function deposit(currentBalance, depositAmount, validInput){
    if (validInput == true){
        let userDeposit = currentBalance + depositAmount;
        console.log('The amount you want to deposit is: $' + depositAmount);
        console.log(userDeposit);
        return userDeposit;
    }else {
        return currentBalance;
    }
}

//validate the withdraw amount to be a number
function validInputNumber(movingAmount, userButton){
    switch (userButton){
        case 'withdraw':
            let withdrawValid = validateIntegers(movingAmount);
            if (withdrawValid == true){
                return true;
            }else{
                console.log('Need to input only numbers.');
                return false;
            }
        case 'deposit':
            let depositValid = validateIntegers(movingAmount);
            if (depositValid == true){
                return true;
            }else{
                console.log('Need to input only numbers.');
                return false;
            }
    }
}

//validatePin function
function validatePin(userInput, trueOrFalse){
    if (userInput == userPin){
        return userInput;
    }
    else{
        console.log('Invalid Pin. Try again.');
        userInput = prompt('What is your 4 digit pin? ');
        validatePin(userInput, trueOrFalse);
        return userInput;
    }
}

//validate integers function
function validateIntegers(userInputPin){
    if(!isNaN(userInputPin)){
        return true;
    }
    else{
        return false;
    }
}

//validate that there are only 4 digits
function fourDigitValidation(userInputPin){
    if(userInputPin.length == 4){
        return true;
    }
    else{
        return false;
    }
}

//function to validate pin input
function validatePinInput(userInputPin){
    let int = validateIntegers(userInputPin);
    let fourDigit = fourDigitValidation(userInputPin);
    if (int == true && fourDigit == true){
        return true;
    }else{
        console.log('Warning: You must enter only numbers and 4 total digits.');
        return false;
    }
}

//export functions or values
module.exports.balance = getBalance;
module.exports.startWithdraw = withdraw;
module.exports.startDeposit = deposit;
module.exports.pin = validatePin;
module.exports.valueBalance = totalBalance;
module.exports.validateInput = validatePinInput;
module.exports.checkUserNumInput = validInputNumber;