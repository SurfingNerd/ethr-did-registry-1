

const generateDeployTxs = require('./generateDeployTxs.js');

const Web3 = require('web3');

console.log(Web3);

//const web3 = new Web3('https://rpc.tau1.artis.network');
const web3 = new Web3('https://rpc.sigma1.artis.network');


//console.log(generateDeployTxs);

const all = generateDeployTxs();
console.log(all);


web3.eth.sendSignedTransaction(all.EthereumDIDRegistry.rawTx)
.once('receipt', function(receipt){ console.log('recept:', receipt); })
.on('confirmation', function(confNumber, receipt){ console.log('confirmed:', receipt); })
.on('error', function(error){  console.log('error:', error); })