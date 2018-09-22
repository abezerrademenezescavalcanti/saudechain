function loadPatientCountryList() {
    $.getJSON("https://restcountries.eu/rest/v2/all?fields=name;alpha2Code", function(j) {
        let options = '<option value="" selected> </option>';
        for (var i=0; i< j.length; i++) {
            options += '<option value="' + j[i].alpha2Code + '">' + j[i].alpha2Code + ' - ' + j[i].name + '</option>';
        }
        $("select#patCountry").html(options);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("error " + textStatus);
        console.log("incoming Text " + jqXHR.responseText);
        console.log(errorThrown);
    });
}

function startOverNewPatient() {
    var frm = document.frmNewPatient;
    frm.patAddress.value = "";
    frm.patDate.value = "";
    frm.patGender.value = "";
    frm.patCity.value = "";
    frm.patEtnicity.value = "";
    frm.patCountry.selectedIndex = "0";
    $("#btnStartOverNewPatient").hide();
    $("#btnInsertNewPatient").show();
    $("#statusFormPatient").css("background-color", "lightgray");
    $("#statusFormPatient").html("");
}

function insertNewPatient() {
    var frm = document.frmNewPatient;
    if (frm.patAddress.value.length < 41) {
        $("#statusFormPatient").css("background-color", "Salmon");
        $("#statusFormPatient").html("You must inform appropriate information");
        return
    }
    $("#statusFormPatient").css("background-color", "lightblue");
    $("#statusFormPatient").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    console.log("Sending... " + frm.patAddress.value);
    contract.newPatient(frm.patAddress.value, frm.patDate.value, frm.patGender.value, frm.patCity.value, web3.fromAscii(frm.patCountry.value), frm.patEtnicity.value, {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
        if (!err) {
            $("#statusFormPatient").css("background-color", "yellow");
            $("#statusFormPatient").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormPatient");
        } else {
            console.error(err);
            $("#statusFormPatient").css("background-color", "Salmon");
            $("#statusFormPatient").html("Error " + JSON.stringify(err));
        }
    });
    $("#btnStartOverNewPatient").show();
    $("#btnInsertNewPatient").hide();
}

//Allow a thrid-party to handle Patient's medical records
function thridPartyDisallowance() {
    var frm = document.frmDisallow;
    if (frm.disallowTPAddress.value.length < 41) {
        $("#statusFormDisallow").css("background-color", "Salmon");
        $("#statusFormDisallow").html("You must inform appropriate information");
        return
    }
    $("#statusFormDisallow").css("background-color", "lightblue");
    $("#statusFormDisallow").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    console.log("Sending... " + frm.disallowTPAddress.value);
    contract.removeIssuers(frm.disallowTPAddress.value, {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
        if (!err) {
            $("#statusFormDisallow").css("background-color", "yellow");
            $("#statusFormDisallow").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormDisallow");
        } else {
            console.error(err);
            $("#statusFormDisallow").css("background-color", "Salmon");
            $("#statusFormDisallow").html("Error " + JSON.stringify(err));
        }
    });
    $("#btnStartOverDisallowance").show();
    $("#btn3TPDisallowance").hide();
}

function startOverDisallowance() {
    var frm = document.frmDisallow;
    frm.disallowTPAddress.value = "";
    $("#btnStartOverDisallowance").hide();
    $("#btn3TPDisallowance").show();
    $("#statusFormDisallow").css("background-color", "lightgray");
    $("#statusFormDisallow").html("");
}


//Allow a thrid-party to handle Patient's medical records
function insertNew3TPAllowance() {
    var frm = document.frmAllow;
    if (frm.allowTPAddress.value.length < 41) {
        $("#statusFormAllow").css("background-color", "Salmon");
        $("#statusFormAllow").html("You must inform appropriate information");
        return
    }
    $("#statusFormAllow").css("background-color", "lightblue");
    $("#statusFormAllow").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    console.log("Sending... " + frm.allowTPAddress.value);
    contract.allowIssuers(frm.allowTPAddress.value, {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
        if (!err) {
            $("#statusFormAllow").css("background-color", "yellow");
            $("#statusFormAllow").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormAllow");
        } else {
            console.error(err);
            $("#statusFormAllow").css("background-color", "Salmon");
            $("#statusFormAllow").html("Error " + JSON.stringify(err));
        }
    });
    $("#btnStartOverNew3TPAllowance").show();
    $("#btnInsertNew3TPAllowance").hide();
}

function startOverNew3TPAllowance() {
    var frm = document.frmAllow;
    frm.allowTPAddress.value = "";
    $("#btnStartOverNew3TPAllowance").hide();
    $("#btnInsertNew3TPAllowance").show();
    $("#statusFormAllow").css("background-color", "lightgray");
    $("#statusFormAllow").html("");
}