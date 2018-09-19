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