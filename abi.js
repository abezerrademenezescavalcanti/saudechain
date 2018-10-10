const RegMedABI = [{"constant":true,"inputs":[{"name":"_pacientAddress","type":"address"},{"name":"_recordId","type":"uint32"}],"name":"getPatientRecordDetails","outputs":[{"name":"","type":"bytes10"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_acct","type":"address"},{"name":"_name","type":"string"},{"name":"_country","type":"string"}],"name":"newThirdPartyIssuer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"thirdPartyIssuersAvailable","outputs":[{"name":"name","type":"string"},{"name":"country","type":"string"},{"name":"exists","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_orderID","type":"uint248"}],"name":"getRecordOrderDetails","outputs":[{"name":"requester","type":"address"},{"name":"purpose","type":"string"},{"name":"recordId","type":"uint248"},{"name":"accepted","type":"bool"},{"name":"valuePaid","type":"uint256"},{"name":"reqName","type":"string"},{"name":"reqEmail","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_recordId","type":"uint248"},{"name":"_purpose","type":"string"},{"name":"_reqName","type":"string"},{"name":"_reqEmail","type":"string"}],"name":"askToBuy","outputs":[{"name":"newID","type":"uint248"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_orderId","type":"uint248"}],"name":"getRecordSoldDetails","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_recordId","type":"uint32"}],"name":"deleteRecord","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_pacientAddress","type":"address"},{"name":"_recordId","type":"uint32"},{"name":"_mediaUrl","type":"string"},{"name":"_externalIssuer","type":"address"}],"name":"addMediaToRecord","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_pacientAddress","type":"address"}],"name":"getTotalPatientRecords","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_recordId","type":"uint248"}],"name":"getRecordSellable","outputs":[{"name":"patient","type":"address"},{"name":"recordCategoryCode","type":"bytes10"},{"name":"price","type":"uint256"},{"name":"stillSellable","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_code","type":"bytes10"},{"name":"description","type":"string"}],"name":"newRecordCategory","outputs":[{"name":"status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_acct","type":"address"},{"name":"_dateOfBirth","type":"string"},{"name":"_genderOfBirth","type":"string"},{"name":"_cityOfBirth","type":"string"},{"name":"_countryOfBirth","type":"bytes2"},{"name":"_ethnicity","type":"string"}],"name":"newPatient","outputs":[{"name":"status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_pacientAddress","type":"address"},{"name":"_recordCategoryCode","type":"bytes10"},{"name":"_dateOfFact","type":"string"},{"name":"_details","type":"string"},{"name":"_externalIssuer","type":"address"}],"name":"newRecord","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recordId","type":"uint32"}],"name":"makeRecordNotSellable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalRecordCategories","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_orderID","type":"uint248"},{"name":"_recordDetails","type":"string"}],"name":"sell","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_acct","type":"address"}],"name":"allowIssuers","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"bytes10"}],"name":"getRecordCategory","outputs":[{"name":"code","type":"bytes10"},{"name":"description","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_acct","type":"address"}],"name":"removeIssuers","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recordId","type":"uint32"},{"name":"_price","type":"uint64"}],"name":"makeRecordSellable","outputs":[{"name":"newID","type":"uint248"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_acct","type":"address"}],"name":"getPatientDetails","outputs":[{"name":"dateOfBirth","type":"string"},{"name":"genderOfBirth","type":"string"},{"name":"cityOfBirth","type":"string"},{"name":"countryOfBirth","type":"bytes2"},{"name":"ethnicity","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"recordSellableId","outputs":[{"name":"","type":"uint248"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"recordOrderId","outputs":[{"name":"","type":"uint248"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_devContract","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_patient","type":"address"},{"indexed":false,"name":"_value","type":"uint256"},{"indexed":false,"name":"_recordOrderId","type":"uint248"}],"name":"NewRecordBuyed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"purpose","type":"string"},{"indexed":false,"name":"valueOffered","type":"uint256"},{"indexed":false,"name":"_recordOrderId","type":"uint248"}],"name":"NewOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"category","type":"bytes10"},{"indexed":false,"name":"price","type":"uint256"},{"indexed":false,"name":"recordSellableId","type":"uint248"}],"name":"NewRecordAvailableToBuy","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"patient","type":"address"},{"indexed":false,"name":"recordId","type":"uint32"}],"name":"NewRecordToPatient","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"patient","type":"address"},{"indexed":false,"name":"recordId","type":"uint32"}],"name":"NewMediaToPatientRecord","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"code","type":"bytes10"}],"name":"NewCategory","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"parter","type":"address"}],"name":"NewThirdPartyIssuer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"patientAddress","type":"address"}],"name":"NewPatient","type":"event"}];
const DevelopersABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint64"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"payComission","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint64"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint64"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint64"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalDevelopers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_devID","type":"address"}],"name":"getSingleDeveloper","outputs":[{"name":"devAccount","type":"address"},{"name":"comission","type":"uint256"},{"name":"balance","type":"uint248"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_devAccount","type":"address"},{"name":"_comission","type":"uint64"}],"name":"newDeveloper","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint64"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"developerAccounts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}];

var web3;
var contract;
var devContract;

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/QPF0qjGpH9OjFuuMrCse"))
}
contract = web3.eth.contract(RegMedABI).at("0x8aa729e6b7c4196f166dc352aaece0334879a15d"); 
devContract = web3.eth.contract(DevelopersABI).at("0xbed668F915ced99CCAbE607689C4Fd8208C13d4d"); 

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
