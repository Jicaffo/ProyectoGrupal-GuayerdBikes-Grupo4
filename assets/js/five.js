/*1. Verificar en localStorage si desea recibir mails (punto 2)
2. Si puso que sí, avisarle que tenemos ofertas personalizadas y preguntarle en un confirm si quiere acceder a ellas.
3. Si pone que sí redirigirlo. */

function preguntaOfertas(){
    if(localStorage.getItem("recibirNovedades")){
        let accederOfertas = confirm("En este momento contamos con ofertas personalizadas, ¿Quieres acceder a ellas?");
        if(accederOfertas){
            window.location.replace("ofertasPersonalizadas.html");
        }
    }
}

setTimeout(preguntaOfertas,1000);