var randomNumber = require('./randomNumber');
var convertToUSD = require('./convertToUSD');

var accountBalance = function() {
    //var numberPicked = randomNumber(100, 1000000);
    //var convertedNumber = convertToUSD(numberPicked);
    return convertToUSD(randomNumber(100, 1000000));
};

var accountBalanceText = function(){
    return "Account balance: \n";
};

module.exports.accountBalanceText = accountBalanceText;
module.exports.accountBalance = accountBalance;


