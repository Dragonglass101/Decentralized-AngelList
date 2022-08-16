var Client = require('coinbase').Client;
var client = new Client({'apiKey': U0RJojbQ3eKwzdae, 'apiSecret': nZPatoQMYzo0HOfcRBnK56WKfHYXdhnz});

client.getAccounts({}, function(err, accounts) {
  accounts.forEach(function(acct) {
    console.log('my bal: ' + acct.balance.amount + ' for ' + acct.name);
  });
});