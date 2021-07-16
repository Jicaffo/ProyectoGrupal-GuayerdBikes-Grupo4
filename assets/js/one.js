/*
- Cuando el usuario ingrese al sitio (desde cualquier página) debemos preguntarle si desea ingresar su nombre y su email. Debemos guardar esa información localmente.
- Validar que no ingrese datos vacíos. En el caso del email, solo validar que lo ingresado contenga "." y "@"
- Debemos recordar su decisión para no volver a preguntarle cada vez que ingrese.
*/


if ( !localStorage.getItem("guardarDatos") ){

    let guardarDatos = confirm("Desea guardar sus datos?");

    localStorage.setItem("guardarDatos", guardarDatos);   

    if (guardarDatos){

        let nombre = "";
    
        while( nombre === "" || nombre === null ){

            nombre = prompt("Ingrese su nombre");

            if ( nombre === "" || nombre === null ){
                alert("Ingrese un nombre válido.")
            }
        }

        localStorage.setItem("nombre", nombre);

        let mail = "";
        
        while( mail === "" || mail === null || !mail.includes(".") || !mail.includes("@") ){

            mail = prompt("Ingrese su mail");

            if ( mail === "" || mail === null || !mail.includes(".") || !mail.includes("@") ){

                alert("Ingrese un mail válido.")
            }
        }

        localStorage.setItem("mail", mail);
    }
}

