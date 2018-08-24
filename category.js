function insertNewCategory() {
    var frm = document.frmCategory;
    if (frm.catCode.value.length < 8 || frm.catDescription.value.length < 5) {
        $("#statusFormCategory").css("background-color", "Salmon");
        $("#statusFormCategory").html("You must inform appropriate information");
        return
    }
    $("#statusFormCategory").css("background-color", "lightblue");
    $("#statusFormCategory").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    console.log("Sending..." + frm.catCode.value + " and " + frm.catDescription.value);
    contract.newRecordCategory(frm.catCode.value, frm.catDescription.value, {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
        if (!err) {
            $("#statusFormCategory").css("background-color", "yellow");
            $("#statusFormCategory").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormCategory");
        } else {
            console.error(err);
        }
    });
    $("#btnStartOverNewCategory").show();
    $("#btnInsertNewCategory").hide();
}

function startOverNewCategory() {
    var frm = document.frmCategory;
    frm.catCode.value = "";
    frm.catDescription.value = "";
    $("#btnStartOverNewCategory").hide();
    $("#btnInsertNewCategory").show();
    $("#statusFormCategory").css("background-color", "lightgray");
    $("#statusFormCategory").html("");
}