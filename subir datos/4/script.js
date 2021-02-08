"use strict"

$(document).ready(function () {
    
    const persona={
        name:"juan",
        job:"Master Race"
    }

    $.ajax({
        type: "post",
        url: "https://reqres.in/api/users",
        data: persona,
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
        // success: response => console.log(response)
    });
});