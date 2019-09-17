$(document).ready(function() {

    var userName = $('#username');
    var password = $('#password');
    var rememberMe = $('#rememberMe');

    $(".alert").hide();
    $("#btnLogin").on('click', (e) => {

        event.preventDefault();
        if (!validator.validate("#frmLogin")) {
            return;
        }
        if (localStorargeSupported()) {
            localStorage.setItem('persistedData', JSON.stringify({ "userName": userName.val(), "rememberMe": rememberMe.is(':checked') }));
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



    function localStorargeSupported() {
        if (typeof(Storage) !== "undefined") {
            return true;
        } else {
            return false;
        }
    }

    // on page load
    if (localStorargeSupported()) {
        var persistedData = localStorage.getItem('persistedData');

        if (persistedData !== null) {
            var parsedData = JSON.parse(persistedData);
            if (parsedData.rememberMe === true) {
                userName.val(parsedData.userName);
                rememberMe.prop('checked', true);
                password.focus();
            }
        }
    }
});