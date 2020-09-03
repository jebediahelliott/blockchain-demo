const { Blockchain } = require("./blockchain");
const { Transaction } = require("./transaction");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const PUBLIC_KEY = "04b8e7f91b3578857d25e73dbb8122d359fa743918dc0e97017cd9abdeb09f0b02e65cc0aec57cb05b19a952ab6d0db29d05577fca04a0ee3c9317222576598bc7";
const PRIVATE_KEY = "3dbae0821b7bc79012700ac87ccd5558c2147c1966697a9ce04f11f53dd85807";

const myKey = ec.keyFromPrivate(PRIVATE_KEY);
const myWalletAddress = myKey.getPublic("hex");

let chain = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "other public key", 10);
tx1.signTransaction(myKey);
chain.addTransaction(tx1);

console.log("\nStarting the Miner...");
chain.minePendingTransactions(myWalletAddress);

console.log("\nMiners balance: ", chain.getBalanceOfAddress(myWalletAddress));






