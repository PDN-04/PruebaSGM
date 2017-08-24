$(document).ready(function() {

    var ventana = $(window).width();

    $(window).resize(function() {
        ventana = $(window).width();
        if (ventana > 1383) {
            $(".menu-movil").css("display", "none");
        } else {
            $(".menu-movil").css("display", "block");
        }
        console.log(ventana);
    });

    $(".boton-menu").click(function(evento) {
        evento.preventDefault()
        if (ventana < 1383) {
            var posicion = $(".menu-movil").position().left;
            if (posicion == -2000) {
                $(".menu-movil").animate({
                    left: "0px"
                });
            }
            if (posicion == 0) {
                $(".menu-movil").animate({
                    left: "-2000px"
                });
            }
        }
    });

    $(".activo").append("<div class='forma'><div class='horizontal'></div><div class='diagonal-a'></div><div class='diagonal-b'></div></div>");
});