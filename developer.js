function getDeveloperDetail(address) {    
    if (!web3.isAddress(address)) {
        console.error("Invalid address");
        return;
    }
    contract.getSingleDeveloper(address, function (err, result) {
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
    contract.totalDevelopers(function (err, result) {
        if (!err) {
            var nroDev = result*1;
            if (nroDev>0) {
                $("#statusConnectionContract").text("Yes");
            }
        } else {
            console.error(err);
            $("#dev").html(err);
        }
    });    
}

function startOverNewDeveloper() {
    var frm = document.frmDeveloper;
    frm.devVotes.value = "";
    frm.devCommission.value = "";
    frm.devAddress.value = "";
    $("#btnStartOverNewDeveloper").hide();
    $("#btnInsertNewDeveloper").show();
    $("#statusFormDeveloper").css("background-color", "lightgray");
    $("#statusFormDeveloper").html("");
}

function insertNewDeveloper() {
    var frm = document.frmDeveloper;
    if (frm.devAddress.value.length < 40 || frm.devCommission.value.length < 2 || frm.devVotes.value.length < 1) {
        $("#statusFormDeveloper").css("background-color", "Salmon");
        $("#statusFormDeveloper").html("You must inform appropriate information");
        return
    }
    $("#statusFormDeveloper").css("background-color", "lightblue");
    $("#statusFormDeveloper").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    console.log("Sending..." + frm.devAddress.value + " and " + frm.devCommission.value + " and " + frm.devVotes.value);
    contract.newDeveloper(frm.devAddress.value, frm.devCommission.value, frm.devVotes.value, {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
        if (!err) {
            $("#statusFormDeveloper").css("background-color", "yellow");
            $("#statusFormDeveloper").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormDeveloper");
        } else {
            console.error(err);
        }
    });
    $("#btnStartOverNewCategory").show();
    $("#btnInsertNewCategory").hide();
}