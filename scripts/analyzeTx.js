const Web3 = require('web3');


//console.log(Web3);

//const web3 = new Web3('https://rpc.tau1.artis.network');
//const web3 = new Web3('https://rpc.sigma1.artis.network');
const web3Source = new Web3('https://main-rpc.linkpool.io');

web3Source.eth.getTransaction('0x803351deb6d745e91545a6a3e1c0ea3e9a6a02a1a4193b70edfcd2f40f71a01c')
.then(x=> {
  const createByteCode = x.raw;

  const web3Target = new Web3('https://rpc.tau1.artis.network');


  web3Target.eth.sendSignedTransaction(createByteCode)
    .once('receipt', function(receipt){ console.log('recept:', receipt); })
    .on('confirmation', function(confNumber, receipt){ console.log('confirmed:', receipt); })
    .on('error', function(error){  console.log('error:', error); })
});