var ethers = require('ethers'); 
var url = 'https://speedy-nodes-nyc.moralis.io/dd038997fec2d7e8c252fad6/eth/kovan'; 
var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
var privateKey = "0x0111111111111111111122222222222222222223333333333333333333344455";
var wallet = new ethers.Wallet(privateKey);
console.log("Address: " + wallet.address);
tx = {
    to: "0x6761C21eB0B2eE818774A84dC2C7389a0eBe79Ed",
    value: ethers.utils.parseEther("0.05"),
    chainId: 42,
    nonce: 3
  }
  customHttpProvider.estimateGas(tx).then(function(estimate) {
      tx.gasLimit = estimate;
      tx.gasPrice = ethers.utils.parseUnits("0.14085197", "gwei");
      wallet.signTransaction(tx).then((signedTX)=>{
      customHttpProvider.sendTransaction(signedTX).then(console.log);
      });
  });