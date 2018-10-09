function startOverNewMRS() {
    var frm = document.frmMRS;
    frm.mrsRecID.value = "";
    frm.mrsPrice.value = "10000000000000";
    $("#btnStartOverNewMRS").hide();
    $("#btnInsertNewMRS").show();
    $("#statusFormMRS").css("background-color", "lightgray");
    $("#statusFormMRS").html("");
}

function insertNewMRS() {
    var frm = document.frmMRS;
    if (frm.mrsRecID.value < 1) {
        $("#statusFormMRS").css("background-color", "Salmon");
        $("#statusFormMRS").html("You must inform appropriate information");
        $("#mrsRecID").focus();
        return
    } 
    if (frm.mrsPrice.value < 1) {
        $("#statusFormMRS").css("background-color", "Salmon");
        $("#statusFormMRS").html("You must inform appropriate information");
        $("#mrsPrice").focus();
        return
    }
    $("#statusFormMRS").css("background-color", "lightblue");
    $("#statusFormMRS").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    console.log("Sending... " + frm.mrsRecID.value + " and " + frm.mrsPrice.value);
    contract.makeRecordSellable(frm.mrsRecID.value, frm.mrsPrice.value, {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
        if (!err) {
            $("#statusFormMRS").css("background-color", "yellow");
            $("#statusFormMRS").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormMRS");
        } else {
            console.error(err);
            $("#statusFormMRS").css("background-color", "Salmon");
            $("#statusFormMRS").html("Error " + JSON.stringify(err));
        }
    });
    $("#btnStartOverNewMRS").show();
    $("#btnInsertNewMRS").hide();
}


//Make Patient's Medical Record not Sellable
function startOverNewMRNS() {
    var frm = document.frmMRNS;
    frm.mrnsRecID.value = "";
    $("#btnStartOverNewMRNS").hide();
    $("#btnInsertNewMRNS").show();
    $("#statusFormMRNS").css("background-color", "lightgray");
    $("#statusFormMRNS").html("");
}

function insertNewMRNS() {
    var frm = document.frmMRNS;
    if (frm.mrnsRecID.value < 1) {
        $("#statusFormMRNS").css("background-color", "Salmon");
        $("#statusFormMRNS").html("You must inform appropriate information");
        $("#mrnsRecID").focus();
        return
    } 
    $("#statusFormMRNS").css("background-color", "lightblue");
    $("#statusFormMRNS").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    console.log("Sending... " + frm.mrnsRecID.value);
    contract.makeRecordNotSellable(frm.mrnsRecID.value, {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
        if (!err) {
            $("#statusFormMRNS").css("background-color", "yellow");
            $("#statusFormMRNS").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormMRNS");
        } else {
            console.error(err);
            $("#statusFormMRNS").css("background-color", "Salmon");
            $("#statusFormMRNS").html("Error " + JSON.stringify(err));
        }
    });
    $("#btnStartOverNewMRNS").show();
    $("#btnInsertNewMRNS").hide();
}

//Handles new order request
function insertNewRequestToBuy() {
    var frm = document.frmATB;
    if ((frm.atbRecID.value < 1) || (frm.atbPurpose.value.length < 10) || (frm.atbReqName.value.length < 5) || (frm.atbReqEmail.value.length < 7)) {
        $("#statusFormATB").css("background-color", "Salmon");
        $("#statusFormATB").html("You must inform appropriate information");
        $("#atbRecID").focus();
        return
    } 
    $("#statusFormATB").css("background-color", "lightblue");
    $("#statusFormATB").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    console.log("Sending... " + frm.atbRecID.value + " - " + frm.atbPurpose.value + " - " + frm.atbReqName.value + " - " + frm.atbReqEmail.value);
    contract.askToBuy(frm.atbRecID.value, frm.atbPurpose.value, frm.atbReqName.value,frm.atbReqEmail.value, {from: web3.eth.accounts[0], gas: 3000000, value: frm.atbPrice.value}, function (err, result) {
        if (!err) {
            $("#statusFormATB").css("background-color", "yellow");
            $("#statusFormATB").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormATB");
        } else {
            console.error(err);
            $("#statusFormATB").css("background-color", "Salmon");
            $("#statusFormATB").html("Error " + JSON.stringify(err));
        }
    });
    $("#btnStartOverRequestToBuy").show();
    $("#btnInsertNewRequestToBuy").hide();
}

function startOverRequestToBuy() {
    var frm = document.frmATB;
    frm.atbRecID.value = "1";
    frm.atbPurpose.value = "";
    frm.atbReqName.value = "";
    frm.atbReqEmail.value = "";
    $("#btnStartOverRequestToBuy").hide();
    $("#btnInsertNewRequestToBuy").show();
    $("#statusFormATB").css("background-color", "lightgray");
    $("#statusFormATB").html("");
}


//Confirm Patient wants to sell
//Make Patient's Medical Record not Sellable
function startOverSell() {
    var frm = document.frmSell;
    frm.sellRecID.value = "1";
    $("#btnStartOverSell").hide();
    $("#btnInsertSell").show();
    $("#statusFormMRNS").css("background-color", "lightgray");
    $("#statusFormMRNS").html("");
}

function insertSell() {
    var frm = document.frmSell;
    if (frm.sellRecID.value < 1) {
        $("#statusFormSell").css("background-color", "Salmon");
        $("#statusFormSell").html("You must inform appropriate information");
        $("#sellRecID").focus();
        return
    } 
    if (frm.sellData.value < 10) {
        $("#statusFormSell").css("background-color", "Salmon");
        $("#statusFormSell").html("You must inform appropriate information");
        $("#sellData").focus();
        return
    } 
    $("#statusFormSell").css("background-color", "lightblue");
    $("#statusFormSell").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    console.log("Sending... " + frm.sellRecID.value + " - [" + frm.sellData.value + "]");
    contract.sell(frm.sellRecID.value, frm.sellData.value, {from: web3.eth.accounts[0], gas: 5000000, value: 0}, function (err, result) {
        if (!err) {
            $("#statusFormSell").css("background-color", "yellow");
            $("#statusFormSell").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormSell");
        } else {
            console.error(err);
            $("#statusFormSell").css("background-color", "Salmon");
            $("#statusFormSell").html("Error " + JSON.stringify(err));
        }
    });
    $("#btnStartOverSell").show();
    $("#btnInsertSell").hide();
}

//Developer withdraw her ethers

//Start over
function startOverDeveloperWithdraw() {
    var frm = document.frmWithdraw;
    $("#btnStartOverDeveloperWithdraw").hide();
    $("#btnDeveloperWithdraw").show();
    $("#statusFormWithdraw").css("background-color", "lightgray");
    $("#statusFormWithdraw").html("");
}

function developerWithdraw() {
    var frm = document.frmWithdraw;
    $("#statusFormWithdraw").css("background-color", "lightblue");
    $("#statusFormWithdraw").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    console.log("Sending... " + web3.eth.accounts[0]);
    devContract.withdraw({from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
        if (!err) {
            $("#statusFormWithdraw").css("background-color", "yellow");
            $("#statusFormWithdraw").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormWithdraw");
        } else {
            console.error(err);
            $("#statusFormWithdraw").css("background-color", "Salmon");
            $("#statusFormWithdraw").html("Error " + JSON.stringify(err));
        }
    });
    $("#btnStartOverSell").show();
    $("#btnInsertSell").hide();
}