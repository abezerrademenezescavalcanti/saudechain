function getDeveloperDetail(address) {    
    if (!web3.isAddress(address)) {
        console.error("Invalid address");
        return;
    }
    devContract.getSingleDeveloper(address, function (err, result) {
        if (!err) {
            console.log(result[2].toString());
            $("#dev").text($("#dev").html() + " - " + result);
        } else {
            console.error(err);
            $("#dev").text(err);
        }
    });    
}

function getTotalDevelopers() {    
    devContract.totalDevelopers(function (err, result) {
        console.log("qual contrato?");
        console.log(devContract);
        if (!err) {
            console.log("result: getTotalDevelopers");
            console.log(result);
            let nroDev = result*1;
            if (nroDev>0) {
                $("#statusConnectionContract").text("Yes");
            }
        } else {
            console.log("Erro: getTotalDevelopers");
            console.error(err);
            $("#dev").html(err);
        }
    });  
    return;  
}

function startOverNewDeveloper() {
    var frm = document.frmDeveloper;
    frm.devCommission.value = "1";
    frm.devAddress.value = "";
    $("#btnStartOverNewDeveloper").hide();
    $("#btnInsertNewDeveloper").show();
    $("#statusFormDeveloper").css("background-color", "lightgray");
    $("#statusFormDeveloper").html("");
}

function insertNewDeveloper() {
    var frm = document.frmDeveloper;
    if (frm.devAddress.value.length < 40 || frm.devCommission.value.length < 2) {
        $("#statusFormDeveloper").css("background-color", "Salmon");
        $("#statusFormDeveloper").html("You must inform appropriate information");
        return
    }
    $("#statusFormDeveloper").css("background-color", "lightblue");
    $("#statusFormDeveloper").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    console.log("Sending..." + frm.devAddress.value + " and " + frm.devCommission.value);
    devContract.newDeveloper(frm.devAddress.value, frm.devCommission.value, true, {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
        if (!err) {
            $("#statusFormDeveloper").css("background-color", "yellow");
            $("#statusFormDeveloper").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormDeveloper");
        } else {
            console.error(err);
        }
    });
    $("#btnStartOverNewDeveloper").show();
    $("#btnInsertNewDeveloper").hide();
}


//Approval 
function startOverNewApproval() {
    var frm = document.frmSA;
    frm.saAmount.value = "1";
    frm.saAddress.value = "";
    $("#btnStartOverNewApproval").hide();
    $("#btnInsertNewApproval").show();
    $("#statusFormSA").css("background-color", "lightgray");
    $("#statusFormSA").html("");
}

function insertNewApproval() {
    var frm = document.frmSA;
    if (frm.saAddress.value.length < 40 || frm.saAmount.value.length < 2) {
        $("#statusFormSA").css("background-color", "Salmon");
        $("#statusFormSA").html("You must inform appropriate information");
        return
    }
    $("#statusFormSA").css("background-color", "lightblue");
    $("#statusFormSA").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    console.log("Sending..." + frm.saAddress.value + " and " + frm.saAmount.value);
    devContract.approve(frm.saAddress.value, frm.saAmount.value, {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
        if (!err) {
            $("#statusFormSA").css("background-color", "yellow");
            $("#statusFormSA").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormSA");
        } else {
            console.error(err);
        }
    });
    $("#btnStartOverNewApproval").show();
    $("#btnInsertNewApproval").hide();
}



//Transfer from - For traders 
function startOverNewTransferTrader() {
    var frm = document.frmTF;
    frm.tfAmount.value = "1";
    frm.tfSellerAddress.value = "";
    frm.tfBuyerAddress.value = "";
    $("#btnStartOverNewTransferTrader").hide();
    $("#btnInsertNewTranferTrader").show();
    $("#statusFormTF").css("background-color", "lightgray");
    $("#statusFormTF").html("");
}

function insertNewTransferTrader() {
    var frm = document.frmTF;
    if (frm.tfSellerAddress.value.length < 40 || frm.tfBuyerAddress.value.length < 40 || frm.tfAmount.value.length < 2) {
        $("#statusFormTF").css("background-color", "Salmon");
        $("#statusFormTF").html("You must inform appropriate information");
        return
    }
    $("#statusFormTF").css("background-color", "lightblue");
    $("#statusFormTF").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    console.log("Sending..." + frm.tfSellerAddress.value + " and " + frm.tfBuyerAddress.value + " and " +  frm.tfAmount.value);
    devContract.transferFrom(frm.tfSellerAddress.value, frm.tfBuyerAddress.value, frm.tfAmount.value, {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
        if (!err) {
            $("#statusFormTF").css("background-color", "yellow");
            $("#statusFormTF").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormTF");
        } else {
            console.error(err);
        }
    });
    $("#btnStartOverNewTransferTrader").show();
    $("#btnInsertNewTranferTrader").hide();
}