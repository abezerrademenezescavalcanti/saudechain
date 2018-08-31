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
    console.log("Sending..." + frm.patAddress.value);
    var countryBytes = [];
    for (var i = 0; i < frm.patCountry.value.length; i++) {
        countryBytes.push(frm.patCountry.value.charCodeAt(i));
    }
    contract.newPatient(frm.patAddress.value, frm.patDate.value, frm.patGender.value, frm.patCity.value, countryBytes, frm.patEtnicity.value, {from: web3.eth.accounts[0], gas: 3000000, value: 0}, function (err, result) {
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