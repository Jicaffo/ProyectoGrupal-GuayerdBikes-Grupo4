/*Pagina: Home
1. Identificar si tiene el nombre guardado en el localStorage
2. Solo si esta guardado mandar un saludo personalizado.
- 3. Obtener la hora actual.
- 4. Enviar el saludo correspondiente en funcion de ella. */


if(localStorage.getItem("nombre")){
    let fecha = new Date();
    let hora = fecha.getHours();

    if(hora>=0 && hora<6){
        alert("Buenas madrugadas, " + localStorage.getItem("nombre"));
    } else if(hora>=6 && hora<12){
        alert("Buen día, " + localStorage.getItem("nombre"));
    } else if(hora>=12 && hora<19){
        alert("Buenas tardes, " + localStorage.getItem("nombre"));
    } else if(hora>=19 && hora<=23){
        alert("Buenas noches, " + localStorage.getItem("nombre"));
    } 
}