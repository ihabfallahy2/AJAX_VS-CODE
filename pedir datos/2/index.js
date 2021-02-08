"use strict"

let padre=$("#contenedor");

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=2",
        data: "data",
        dataType: "json",
        success: function (response) {
            let datos=response.data;
            for(var elemento of datos){
                console.log(elemento);

                let hijo1=$("<div></div>");
                $(hijo1).html(elemento.id);
                $(contenedor).append(hijo1);

                let hijo2=$("<div></div>");
                $(hijo2).html(elemento.first_name);
                $(contenedor).append(hijo2);

                let hijo3=$("<div></div>");
                $(hijo3).html(elemento.last_name);
                $(contenedor).append(hijo3);

                let hijo4=$("<div></div>");
                $(hijo4).html(elemento.avatar);
                $(contenedor).append(hijo4);

            }
        }
    });    
});