/**
 * Description: Supporting functions for register pages
 * Author: Sudesh Pamidi
 */
"use strict"
$(document).ready(function() {

    $(".alert").hide();
    $("#btnRegister").on('click', (e) => {
        event.preventDefault();

        if (!(validator.validate("#frmRegister") && validatePassword())) {
            return;
        }
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


    /**
     * validates whether password and confirm password are same
     */
    function validatePassword() {
        if ($("#password").val() !== $("#confirmPassword").val()) {
            popover($(".card-header"), "Password and Confirm passwords are not maching.");
            return false;
        }
        return true;
    }

    /**
     * Supportin function for popover
     * @param {*} element 
     * @param {*} message 
     */
    function popover(element, message) {
        element.popover('dispose');
        element.popover({
            trigger: 'click',
            placement: 'bottom',
            content: message
        });
        element.popover('show');
    }
});