$(document).ready(function() {


    $(".alert").hide();
    $("#btnRegister").on('click', (e) => {
        alert("register");
        event.preventDefault();
        $(".alert").show();
        let postData = $("#frmRegister").serialize();
        $.post("/users/register", postData, () => {})
            .done(function() {

                $(".alert").removeClass("alert-danger")
                    .addClass("alert-primary")
                    .html('Success');
                window.location = "/users/login";
            })
            .fail(function() {
                $(".alert").removeClass("alert-primary")
                    .addClass("alert-danger")
                    .html('User already exists!!');
            });
    });
});