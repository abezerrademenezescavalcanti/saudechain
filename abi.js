const RegMedABI = [{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalDevelopers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_devID","type":"address"}],"name":"getSingleDeveloper","outputs":[{"name":"devAccount","type":"address"},{"name":"comission","type":"uint256"},{"name":"balance","type":"uint248"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_devAccount","type":"address"},{"name":"_comission","type":"uint64"}],"name":"newDeveloper","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"developerAccounts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"}];

var web3;
var contract;

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/QPF0qjGpH9OjFuuMrCse"))
}
contract = web3.eth.contract(RegMedABI).at("0x0C06aa8260DCE145Dd53fBb752C25936616141F5"); 

function waitForTxToBeMined(txHash, objStatus) {
    let txReceipt;
    web3.eth.getTransactionReceipt(txHash, function (err, result) {
        if (err) {
            console.error(err);
            return;
        }        
        txReceipt = result;
        let d = new Date();
        console.log("txHash: " + txHash + " at " + d);
        console.log(txReceipt); 
        if (txReceipt) {
            if (txReceipt.status == "0x1") {
                $(objStatus).css("background-color", "LawnGreen");
                $(objStatus).html("Record successfuly saved at block: " + txReceipt.blockNumber + " - Transaction hash: " + txHash);            
            } else {
                $(objStatus).css("background-color", "Salmon");
                $(objStatus).html("There was an error - Transaction hash: " + txHash + " final status: " + txReceipt.status);            
            }
        } else {
            window.setTimeout(waitForTxToBeMined, 1500, txHash, objStatus);
        }
    });
}
