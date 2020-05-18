if ($('#contact-form').length) {
    $('#contact-form').each(function(){
        $(this).validate({
            errorClass: 'error wobble-error',
            submitHandler: function(form){
                $.ajax({
                    type: "POST",
                    url:"mail.php",
                    data: $(form).serialize(),
                    success: function() {
                        document.querySelector('.alert-worked').style.display = 'block';
                        console.log("Success");
                    },

                    error: function(){
                        document.querySelector('.alert-not-worked').style.display = 'block';
                        console.log("Fail");
                    }
                });
            }
        });
    });
}
