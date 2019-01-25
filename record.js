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
    if (frm.recCode.value.length < 2) {
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
    console.log("Sending..." + frm.recPatAddress.value + " - " + frm.recCode.value + " - " + frm.recDetails.value);
    contract.newRecord(frm.recPatAddress.value, frm.recCode.value, frm.recDate.value, frm.recDetails.value, frm.recTPAddress.value, {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
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


function startOverMediaToRecord() {
    var frm = document.frmMedia;
    frm.mediaPatAddress.value = "";
    frm.mediaRecID.value = "";
    frm.mediaURL.value = "";
    frm.mediaTPAddress.value = "";
    $("#btnStartOverMediaToRecord").hide();
    $("#btnInsertMediaToRecord").show();
    $("#statusFormMedia").css("background-color", "lightgray");
    $("#statusFormMedia").html("");
}

function insertMediaToRecord() {
    var frm = document.frmMedia;
    if (frm.mediaPatAddress.value.length < 41) {
        $("#statusFormMedia").css("background-color", "Salmon");
        $("#statusFormMedia").html("You must inform appropriate information");
        $("#mediaPatAddress").focus();
        return
    }
    if (frm.mediaRecID.value.length < 1) {
        $("#statusFormMedia").css("background-color", "Salmon");
        $("#statusFormMedia").html("You must inform appropriate information");
        $("#mediaRecID").focus();
        return
    }
    if (frm.mediaURL.value.length < 8) {
        $("#statusFormMedia").css("background-color", "Salmon");
        $("#statusFormMedia").html("You must inform appropriate information");
        $("#mediaURL").focus();
        return
    }    
    $("#statusFormMedia").css("background-color", "lightblue");
    $("#statusFormMedia").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    console.log("Sending..." + frm.mediaPatAddress.value + " - " + frm.mediaRecID.value + " - " + frm.mediaURL.value);
    contract.addMediaToRecord(frm.mediaPatAddress.value, frm.mediaRecID.value, frm.mediaURL.value, frm.mediaTPAddress.value, {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
        if (!err) {
            $("#statusFormMedia").css("background-color", "yellow");
            $("#statusFormMedia").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormMedia");
        } else {
            console.error(err);
            $("#statusFormMedia").css("background-color", "Salmon");
            $("#statusFormMedia").html("Error " + JSON.stringify(err));
        }
    });
    $("#btnStartOverMediaToRecord").show();
    $("#btnInsertMediaToRecord").hide();
}


/*******
 * 
 * Vaccination area
 * 
 */

function startOverNewVaccine() {
    var frm = document.frmNewVaccine;
    frm.recPatAddress.value = "";
    frm.recDate.value = "";
    frm.recCode.value = "";
    frm.recVaccine.value = "";
    frm.recProfessional.value = "";
    frm.recProfessionalStatus.selectedIndex = 0;
    frm.recManufacturer.value = "";
    frm.recBatchOfVaccine.value = "";
    frm.recValidUntil.value = "";
    frm.recVaccinatedAgainst.value = "";
    frm.recClinicCenter.value = "";
    frm.recTPAddress.value = "";
    $("#btnStartOverNewVaccine").hide();
    $("#btnInsertNewVaccine").show();
    $("#statusFormVaccine").css("background-color", "lightgray");
    $("#statusFormVaccine").html("");
}

function insertNewVaccine() {
    var frm = document.frmNewVaccine;
    if (frm.recPatAddress.value.length < 41) {
        $("#statusFormVaccine").css("background-color", "Salmon");
        $("#statusFormVaccine").html("You must inform appropriate information");
        $("#recPatAddress").focus();
        return
    }
    if (frm.recCode.value.length < 2) {
        $("#statusFormVaccine").css("background-color", "Salmon");
        $("#statusFormVaccine").html("You must inform appropriate information");
        $("#recCode").focus();
        return
    }
    if (frm.recDate.value.length != 10) {
        $("#statusFormVaccine").css("background-color", "Salmon");
        $("#statusFormVaccine").html("You must inform appropriate information");
        $("#recDate").focus();
        return
    }
    if (frm.recBatchOfVaccine.value.length < 3) {
        $("#statusFormVaccine").css("background-color", "Salmon");
        $("#statusFormVaccine").html("You must inform appropriate information");
        $("#recBatchOfVaccine").focus();
        return
    }
    $("#statusFormVaccine").css("background-color", "lightblue");
    $("#statusFormVaccine").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    let vaccineDetails = frm.recVaccine.value + ";" + frm.recProfessional.value + "(" + frm.recProfessionalStatus.value + ")" + ";" + frm.recManufacturer.value + ";" + frm.recBatchOfVaccine.value + ";" + frm.recDate.value + ";" + frm.recValidUntil.value + ";" + frm.recVaccinatedAgainst.value + ";" + frm.recClinicCenter.value;
    console.log("Sending..." + frm.recPatAddress.value + " - " + frm.recCode.value + " - " + vaccineDetails);
    contract.newRecord(frm.recPatAddress.value, frm.recCode.value, frm.recDate.value, vaccineDetails, frm.recTPAddress.value, {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
        if (!err) {
            $("#statusFormVaccine").css("background-color", "yellow");
            $("#statusFormVaccine").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormVaccine");
        } else {
            console.error(err);
            $("#statusFormVaccine").css("background-color", "Salmon");
            $("#statusFormVaccine").html("Error " + JSON.stringify(err));
        }
    });
    $("#btnStartOverNewVaccine").show();
    $("#btnInsertNewVaccine").hide();
}
