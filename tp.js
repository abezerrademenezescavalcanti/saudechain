function loadTPCountryList() {
    $.getJSON("http://restcountries.eu/rest/v2/all?fields=name;alpha2Code", function(j) {
        let options = '<option value="" selected> </option>';
        for (var i=0; i< j.length; i++) {
            options += '<option value="' + j[i].alpha2Code + '">' + j[i].alpha2Code + ' - ' + j[i].name + '</option>';
        }
        $("select#tpCountry").html(options);
    })
    .error(function(jqXHR, textStatus, errorThrown) {
        console.log("error " + textStatus);
        console.log("incoming Text " + jqXHR.responseText);
        console.log(errorThrown);
    })
}

function startOverNewTP() {
    var frm = document.frmNewTP;
    frm.tpAddress.value = "";
    frm.tpName.value = "";
    frm.tpCountry.selectedIndex = "0";
    $("#btnStartOverNewTP").hide();
    $("#btnInsertNewTP").show();
    $("#statusFormTP").css("background-color", "lightgray");
    $("#statusFormTP").html("");
}

function insertNewTP() {
    var frm = document.frmNewTP;
    if (frm.tpAddress.value.length < 41 || frm.tpName.value.length < 5 || frm.tpCountry.selectedIndex == "0") {
        $("#statusFormTP").css("background-color", "Salmon");
        $("#statusFormTP").html("You must inform appropriate information");
        return
    }
    $("#statusFormTP").css("background-color", "lightblue");
    $("#statusFormTP").html("Waiting for you to confirm the transaction in MetaMask or another Ethereum wallet software");
    console.log("Sending..." + frm.tpAddress.value + " and " + frm.tpName.value + " and " + frm.tpCountry.value);
    contract.newThirdPartyIssuer(frm.tpAddress.value, frm.tpName.value, frm.tpCountry.value, {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
        if (!err) {
            $("#statusFormTP").css("background-color", "yellow");
            $("#statusFormTP").text("Transaction sent. Wait until it is mined. Transaction hash: " + result);
            waitForTxToBeMined(result, "#statusFormTP");
        } else {
            console.error(err);
        }
    });
    $("#btnStartOverNewTP").show();
    $("#btnInsertNewTP").hide();
}
