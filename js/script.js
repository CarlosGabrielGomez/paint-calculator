/*solamente los string o arrays tiene la propiedad .lenght**/

$("#click").click(() => {
    // slideUp / slideDown / fadeIn / fadeOut
    // 400ms por default (0.4s)
    // callback (algo que sucede una vez que algo termina)
    /*cuando obtenemos los valores hay que castearlos */

    if (!isNaN($("#alto").val()) || !isNaN($("#alto").val())) {
        console.log($("#alto").val() + " es un numero: " + isNaN($("#alto").val()));
        console.log($("#ancho").val() + " es un numero: " + isNaN($("#ancho").val()));
    }

    if ($("#alto").val() == "" || $("#alto").val() == "") {
        confirm("no se pueden sumar casillas vacias o caracteres");
        //alert("no se pueden sumar casillas vacias o caracteres ");
        /*  preguntamos si ambos resultados son verdaderos */
    } else if (!isNaN($("#alto").val()) && !isNaN($("#alto").val())) {

        console.log("tiene numeros");

        let alto = parseInt($("#alto").val(), 10);

        let ancho = parseInt($("#ancho").val(), 10);
        console.log(alto * ancho / 5);
        /*math.ceil es un objeto estatico que redondea el valor al entero mas proximo*/
        $("#total").val(Math.ceil(alto * ancho / 5));

    } else {
        alert("ambos datos deben ser numeros");
    }

});


$("#limpiar").click(() => {
    $("#alto").val("");
    $("#ancho").val("");
    $("#total").val("");
});