$(document).ready(function() {

    $(".alert").hide();
    $("#btnLogin").on('click', (e) => {
        event.preventDefault();
        if (!validator.validate("#frmLogin")) {
            return;
        }
        $(".alert").show();
        let postData = $("#frmLogin").serialize();
        $.post("/users/login", postData, () => {

            })
            .done(function() {
                $(".alert").removeClass("alert-danger")
                    .addClass("alert-primary")
                    .html('Success');
                window.location = "/";
            })
            .fail(function() {
                $(".alert").removeClass("alert-primary")
                    .addClass("alert-danger")
                    .html('Invalid Credentials');
            });
    });
});