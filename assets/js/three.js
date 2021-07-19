/*Pagina: Home
1. Identificar si tiene el nombre guardado en el localStorage
2. Solo si esta guardado mandar un saludo personalizado.
- 3. Obtener la hora actual.
- 4. Enviar el saludo correspondiente en funcion de ella. */

function saludar(){
    if(localStorage.getItem("nombre") && !sessionStorage.getItem("saludado")){
        let fecha = new Date();
        let hora = fecha.getHours();
        let nombre = localStorage.getItem("nombre");
        let saludo;
    
        if(hora>=0 && hora<6){
            saludo = "Buenas madrugadas, ";
        } else if(hora>=6 && hora<12){
            saludo = "Buenos días, ";
        } else if(hora>=12 && hora<19){
            saludo = "Buenas tardes, ";
        } else if(hora>=19 && hora<=23){
            saludo = "Buenas noches, ";
        } 
        alert(saludo + nombre + "!");

        sessionStorage.setItem("saludado", "true");
    }
}

setTimeout(saludar,1000); 