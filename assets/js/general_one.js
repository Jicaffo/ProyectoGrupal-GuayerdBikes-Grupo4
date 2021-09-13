// Traído código de archivos "two.js"

let productos;

const obtenerProductosDelServidor = () => {
    const isResponseOk = response => {
        if (!response.ok)
            throw new Error(response.status);
        return response.json()    
        }
    
    console.log("Obteniendo listado de productos del servidor...")

    return fetch('https://demo2420474.mockable.io/productList')
        .then( response => isResponseOk(response))
        .then( data => {
            console.log("Listado de productos obtenido:")    
            console.log(data);
            productos = data;
            //console.log("llega al final")
        }).catch(error => console.log("Error en la obtención de productos: "+error));

}

function preguntarGuardarDatos(){
    
    console.log("Se está ejecutando preguntarGuardarDatos()");

    if ( !localStorage.getItem("guardarDatos") ){

        let guardarDatos = confirm("¿Le gustaría registrarse en nuestro portal?");
    
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
    
                mail = prompt("Ingrese su dirección de e-mail");
    
                if ( mail === "" || mail === null || !mail.includes(".") || !mail.includes("@") ){
    
                    alert("Ingrese un e-mail válido.")
                }
            }
    
            localStorage.setItem("mail", mail);
        }
    }
}

function preguntarNovedades() {

    console.log("Se está ejecutando ofertarNovedades()");

    if (!localStorage.getItem("recibirNovedades") && localStorage.getItem("mail")) {

        let recibirNovedades = confirm("¿Quieres recibir novedades de nuestro sitio web en tu e-mail?");
        
        localStorage.setItem("recibirNovedades", recibirNovedades );
        
    }
}

const sendUserData = () => {

    console.log("Se está ejecutando sendUserData()");

    // Producción: https://demo2420474.mockable.io/userData (POST)
    // Pruebas: https://ptsv2.com/t/r10gd-1618538020/post

    const tokenGen = () => {
        //console.log("Se está ejecutando tokenGen()");
        return parseInt(Math.random() * (1500) + 1) ;
    }
    
    const userData = {
        token : tokenGen(),
        name : localStorage.getItem('nombre'),
        email :localStorage.getItem('mail'),
        sendEmail : localStorage.getItem('recibirNovedades'),
    }
    
    console.log("Datos de usuario guardados:")
    console.log(userData)
    
    if ( !localStorage.getItem("tokenEnvio") && localStorage.getItem("recibirNovedades") === "true" ){
        console.log("Intentando enviar al servidor");
        fetch("https://demo2420474.mockable.io/userData", {
            method: "post",
            body : JSON.stringify(userData),
        })
        .then(response => {
            if (response.ok) {
                localStorage.setItem("tokenEnvio", userData.token);
                console.log(`Se enviaron los siguientes datos: ${JSON.stringify(userData)}`);
            } else {
                console.log("Problema al enviar"); //Ver por que no está funcionando (en realidad no se si no está funcionando, para probarlo tendría que dar error la respuesta del servidor)
                throw "Error en la llamada Ajax";
            }
        })
        .catch (error => console.log(error));
    } else {
        console.log(`No se han enviado datos al servidor`);
    }
}

const afterLoad = () => {
    
    new Promise ( (resolve) => resolve())
    .then( () => init() )

    //Se acceden desde la función "init", que cada página carga con código diferente
    // .then( rta1 => traerBanner(rta1) ) // SOLO en index.html
    // .then( rta2 => obtenerProductosDelServidor(rta2)) // SOLO en productos.html y contacto.html
    // .then( rta3 => showProducts(rta3)) // SOLO en productos
    // .then( rta4 => cargarProductosEnSelect(rta4)) // SOLO en contacto

    //GENERAL (todas las páginas)
    .then( () => preguntarGuardarDatos()) // Espera correctamente a la carga del banner
    .then( () => preguntarNovedades()) // Espera correctamente
    .then( () => sendUserData()) // Espera correctamente
}


//Pasamos la función preguntarGuardarDatos (como callback) al evento window.onload, que se dispara al terminar de cargar el DOM planteado en el HTML.
//No reemplaza al 100% el uso anterior ("setTimeout(preguntarGuardarDatos,1000)") porque la carga de la imagen se hace desde JS (post carga del DOM).
window.onload = afterLoad;




//-----------------------------------------------------------------------------------




// Orden a lograr: Cargar el DOM básico definido en el HTML (evento window.onload) > Traer imágen del servidor (hasta acá OK)> Preguntar Datos (no está esperando a la imagen) > Preguntar si quiere recibir novedades > Enviar datos al servidor (sí está esperando a preguntar datos).


//EJEMPLO DE PROMESAS ENCADENADAS (TEMPORAL)

// const esperar = tiempo => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('ok');
//       }, tiempo);
//     })
//   } 

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then( response => response.json())
//   .then( json => console.log(json))
//   .then(() => esperar(5000))
//   .then( res => console.log(res))
//   .then(() => fetch("https://pokeapi.co/api/v2/pokemon/1"))
//   .then( response => response.json())
//   .then( json => console.log(json));


