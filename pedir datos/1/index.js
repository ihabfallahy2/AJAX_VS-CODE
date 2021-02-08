"use strict"

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=2",
        data: "data",
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });    
});