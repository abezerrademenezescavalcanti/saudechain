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