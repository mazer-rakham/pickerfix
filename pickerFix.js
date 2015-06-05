$("YOUR_DATEPICKER").datepicker({
    changeMonth: true,
    changeYear: true,
    showOtherMonths: true,
    selectOtherMonths: true,
    onClose: function () {
        var nextInput = $(this).parents().nextAll().find($(":input[type !='hidden']")).first();
        if ($(nextInput).hasClass('datepicker1')) {
            setTimeout(function () {
                nextInput.focus();
            }, 100);          
        } else {
            nextInput.focus();
            
        }
    }
});