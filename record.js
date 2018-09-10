function startOverNewRecord() {
    var frm = document.frmNewRecord;
    frm.recPatAddress.value = "";
    frm.recDate.value = "";
    frm.recCode.value = "";
    frm.recDetails.value = "";
    frm.recTPAddress.value = "";
    $("#btnStartOverNewRecord").hide();
    $("#btnInsertNewRecord").show();
    $("#statusFormRecord").css("background-color", "lightgray");
    $("#statusFormRecord").html("");
}

function insertNewRecord() {
    var frm = document.frmNewRecord;
    if (frm.recPatAddress.value.length < 41) {
        $("#statusFormRecord").css("background-color", "Salmon");
        $("#statusFormRecord").html("You must inform appropriate information");
        $("#recPatAddress").focus();
        return
    }
    if (frm.recCode.value.length < 4) {
        $("#statusFormRecord").css("background-color", "Salmon");
        $("#statusFormRecord").html("You must inform appropriate information");
        $("#recCode").focus();
        return
    }
    if (frm.recDate.value.length != 10) {
        $("#statusFormRecord").css("background-color", "Salmon");
        $("#statusFormRecord").html("You must inform appropriate information");
        $("#recDate").focus();
        return
    }
    if (frm.recDetails.value.length < 3) {
        $("#statusFormRecord").css("background-color", "Salmon");
        $("#statusFormRecord").html("You must inform appropriate information");
        $("#recDetails").focus();
        return
    }
    $("#statusFormRecord").css("background-color", "lightblue");
    $("#statusFormRecord").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    console.log("Sending..." + frm.recPatAddress.value + " - " + web3.fromAscii(frm.recCode.value, 10));
    contract.newRecord(frm.recPatAddress.value, web3.fromAscii(frm.recCode.value, 10), frm.recDate.value, frm.recDetails.value, frm.recTPAddress.value, {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
        if (!err) {
            $("#statusFormRecord").css("background-color", "yellow");
            $("#statusFormRecord").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormRecord");
        } else {
            console.error(err);
            $("#statusFormRecord").css("background-color", "Salmon");
            $("#statusFormRecord").html("Error " + JSON.stringify(err));
        }
    });
    $("#btnStartOverNewRecord").show();
    $("#btnInsertNewRecord").hide();
}