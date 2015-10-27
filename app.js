var http = require('http');
var accountBalance = require('./accountBalance');

//var greeting = require('./greeting');
//var names = require('./names');
//var sum = require('./sumOfNumbers');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write(accountBalance.accountBalanceText() + accountBalance.accountBalance());
    //response.write(randomNumber(100,1000000).toString());
    response.end();
}).listen(8000);
