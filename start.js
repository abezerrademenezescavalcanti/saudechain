//getDeveloperDetail("0x263C3Ab7E4832eDF623fBdD66ACee71c028Ff591");
jQuery(document).ready(function() {
    $("#btnStartOverNewCategory").hide();
    $("#btnStartOverNewDeveloper").hide();
    $("#btnStartOverNewTP").hide();
    $("#btnStartOverNewPatient").hide();
    $("#btnStartOverNewRecord").hide();
    $("#btnStartOverNewVaccine").hide();
    $("#btnStartOverNew3TPAllowance").hide();
    $("#btnStartOverMediaToRecord").hide();
    $("#btnStartOverNewMRS").hide();
    $("#btnStartOverNewMRNS").hide();
    $("#btnStartOverRequestToBuy").hide();
    $("#btnStartOverSell").hide();
    $("#btnStartOverDeveloperWithdraw").hide();
    $("#btnStartOverNewTransferTrader").hide();
    $("#btnStartOverNewApproval").hide();
    $("#btnStartOverNewTransferTrader").hide();
    $("#btnStartOverDisallowance").hide();
    getTotalDevelopers();
    loadPatientCountryList();
    loadTPCountryList();
    $('#patDate').datepicker({
        format: "yyyy-mm-dd",
        startView: 1,
        clearBtn: true,
        autoclose: true,
        beforeShowYear: function(date){
                      if (date.getFullYear() == 2007) {
                        return false;
                      }
                    }
    });
    $('#recDate').datepicker({
        format: "yyyy-mm-dd",
        startView: 1,
        clearBtn: true,
        autoclose: true,
        beforeShowYear: function(date){
                      if (date.getFullYear() == 2007) {
                        return false;
                      }
                    }
    });
});
