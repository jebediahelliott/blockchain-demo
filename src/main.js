const { Blockchain } = require("./blockchain");
const { Transaction } = require("./transaction");

let chain = new Blockchain();
chain.createTransaction(new Transaction("address1", "address2", 100));
chain.createTransaction(new Transaction("address2", "address1", 50));

console.log("\n Starting the Miner...");
chain.minePendingTransactions("miners-address");

console.log("\n Miners balance: ", chain.getBalanceOfAddress("miners-address"));

console.log("\n More mining...");
chain.minePendingTransactions("miners-address");

console.log("\n Miners balance: ", chain.getBalanceOfAddress("miners-address"));







