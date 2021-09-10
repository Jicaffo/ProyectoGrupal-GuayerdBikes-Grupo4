// Se necesita:
// - Preguntarle al visitante(Desde cualquier página) si podemos enviarle un email con novedades
// - Debemos guardar la respuesta para no tener que preguntar cada vez que ingrese.

// Paginas: Todas
// 0. Fijarse en localStorage si el cliente ya confirmó si quiere novedades.
// 1. Si no confirmó, preguntar si quiere recibir mails con novedades.
// 2. Guardar la respuesta en el localStorage.


//MOVIDO a one.js
/*function ofertarNovedades () {
    if (!localStorage.getItem("recibirNovedades") && localStorage.getItem("mail")) {

        let recibirNovedades = confirm("¿Quieres recibir novedades de nuestro sitio web en tu e-mail?");
        
        localStorage.setItem("recibirNovedades", recibirNovedades );
        
    }
}

setTimeout(ofertarNovedades,1000);*/