function getDeveloperDetail(address) {    
    contract.getSingleDeveloper(address, function (err, result) {
        if (!err) {
            console.log(result);
            $("#dev").val(result);
        } else {
            console.error(err);
            $("#dev").val(err);
        }
    });    
}
