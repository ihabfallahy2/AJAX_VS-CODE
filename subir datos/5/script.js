"use strict"

$(document).ready(function () {
    
    $("#enviar").click(function (e) { 

        let nombre=$("#name").val();
        let puesto=$("#job").val();

        const persona={
            name: nombre,
            job: puesto
        }
    
        $.ajax({
            type: "post",
            url: "https://reqres.in/api/users",
            data: persona,
            dataType: "json",
            success: function (response) {
                alert("Status::OK")
                console.log(response);
            }
            // success: response => console.log(response)
        });
        
    });


});