
// <div id="myval"></div>
  $( document ).ready(function() {
    let Web3 = require('web3');
    let web3 = new Web3(new Web3.providers.HttpProvider('https://api.myetherapi.com/eth'));
    let vendingJson = '[{"constant":true,"inputs":[],"name":"available","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"amountRaised","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"CloseVending","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"claimFunding","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"holdingAddress","type":"address"},{"name":"token","type":"address"},{"name":"budget","type":"uint256"},{"name":"rate","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"}]';
    let contractABI = JSON.parse(vendingJson);
    console.log(contractABI);

    let MyContract = web3.eth.contract(contractABI);

    // input values here
    let card10addr   = "0x72b34d637C0d14acE58359Ef1bF472E4b4c57125";
    let card10vend1addr = "0x46C4723111e2bAFeF7d5d0664B3F7BC68D875DeA";

    let card27addr   = "0xfb9f3fa2502d01d43167a0a6e80be03171df407e";
    let card27vend1addr = "0x87767E3aa2479b3faF5FbbB7C7C6874E9e3aB14e";
    let card28addr   = "0x59D190e8A2583C67E62eEc8dA5EA7f050d8BF27e";
    let card28vend1addr = "0x3273eF350E9ffC8f33eA80971650c7c627B43120";
    let card29addr   = "0xD3540bCD9c2819771F9D765Edc189cBD915FEAbd";
    let card29vend1addr = "0x39B058eC8B2fa19Cec655A87EaC127Ba434111b1";

    //outputs
    //vending machine quantity values output
    $('#output10vend1supply').html(MyContract.at(card10vend1addr).available().toString());

    $('#output27vend1supply').html(MyContract.at(card27vend1addr).available().toString());
    $('#output28vend1supply').html(MyContract.at(card28vend1addr).available().toString());
    $('#output29vend1supply').html(MyContract.at(card29vend1addr).available().toString());

    //card address output for site
    $('#outputcard10addr').html(card10addr);
    $('#outputcard10vend1addr').html(card10vend1addr);

    $('#outputcard27addr').html(card27addr);
    $('#outputcard27vend1addr').html(card27vend1addr);

    $('#outputcard28addr').html(card28addr);
    $('#outputcard28vend1addr').html(card28vend1addr);

    $('#outputcard29addr').html(card29addr);
    $('#outputcard29vend1addr').html(card29vend1addr);

  });
