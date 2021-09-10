// Traído código de archivos "two.js" y "dos_traerBaner.js"

const traerBanner = () =>{

    console.log("Se está ejecutando traerBanner()")

    const banner = document.querySelector("#ancho-imagen-banner");

    // let infoBanner;
    // const reqBanner = new XMLHttpRequest();
    // const method = 'GET';
    // const address = 'http://demo2420474.mockable.io/getHomeBanner';
    
    // reqBanner.onreadystatechange = e => {
    //         if (reqBanner.readyState == 4) {
    //             if (reqBanner.status == 200) {
    //                 console.log(reqBanner)
    //                 infoBanner = JSON.parse(reqBanner.responseText)
    //                 console.log(infoBanner.imgUrl)
    //                 banner.src = infoBanner.imgUrl
    //                 banner.alt = infoBanner.title
                    
    //             } else if (reqBanner.status === 404) {
    //                     console.log("Error");
    //             } else {
        
    //             }
    //         } 
    // }
    // reqBanner.open(method, address);
    // reqBanner.send();
    
    
    const isResponseOk = response => {
        if (!response.ok)
            throw new Error(response.status);
        return response.json()    
        }
    
    return fetch('https://demo2420474.mockable.io/getHomeBanner')
        .then( response => isResponseOk(response))
        .then( data => {
            // console.log(data.imgUrl);
            // console.log(data.link);
            // console.log(data.title);
            banner.src = data.imgUrl;
            banner.alt = data.title;
            document.querySelector("#link-banner").href = data.link;

            return "Banner Actualizado"
        })
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

function ofertarNovedades() {

    console.log("Se está ejecutando ofertarNovedades()");

    if (!localStorage.getItem("recibirNovedades") && localStorage.getItem("mail")) {

        let recibirNovedades = confirm("¿Quieres recibir novedades de nuestro sitio web en tu e-mail?");
        
        localStorage.setItem("recibirNovedades", recibirNovedades );
        
    }
}

const sendUserData = () => {

    console.log("Se está ejecutando sendUserData()");
    // Para la tarjeta 3 del Proyecto:

    // Se mantiene el guardado en localStorage y se agrega ** enviar los datos al servidor del cliente**

    // URL: https://demo2420474.mockable.io/userData (POST)
    // https://ptsv2.com/t/r10gd-1618538020/post

    // Formato del objeto:
    // `{
    //     token:"",
    //     name:"",
    //     email:"",
    //     sendEmail: boolean
    //    }`

    const tokenGen = () => {
        console.log("Se está ejecutando tokenGen()");
        return parseInt(Math.random() * (1500) + 1) ;
    }
    
    const userData = {
        token : tokenGen(),
        name : localStorage.getItem('nombre'),
        email :localStorage.getItem('mail'),
        sendEmail : localStorage.getItem('recibirNovedades'),
    }
    
    console.log("userData:")
    console.log(userData)
    
    if ( !localStorage.getItem("tokenEnvio") && localStorage.getItem("recibirNovedades") === "true" ){
        console.log("Intentando enviar al servidor");
        fetch("https://ptsv2.com/t/r10gd-1618538020/post", {
            method: "post",
            body : JSON.stringify(userData),
            headers : {
                // "content-type" : "application/json",   //No se pueden enviar datos de tipo JSON 
                // "access-control-allow-origin" : "*"    //Esta propiedad tiene que estar seteada en el server y se ve en la resp.
            }
        })
        .then(response => {
            if (response.ok) {
                localStorage.setItem("tokenEnvio", userData.token);
                console.log(`Se enviaron los siguientes datos: ${JSON.stringify(userData)}`)
                //return response.text(); //Si no usamos el 2do "then" para mostrar nada en la consola, no necesitamos devolver nada.
            } else {
                console.log("Problema al enviar");
                throw "Error en la llamada Ajax";
            }
        })
        // .then (text => {
        //     console.log(text);
        // })
        .catch (error => console.log(error));
    
        
    }
}

const afterLoad = () => {
    // Funciona, pero ejecutándose todo simultáneamente, y no en el orden que necesitamos.
    // (pregunta datos antes de traer el banner, e intenta enviar los datos antes de preguntar por los mismos [como la propiedad recibirNovedades no esta cargada aún, la primer carga del sitio no los envía])
    traerBanner();
    preguntarGuardarDatos();
    ofertarNovedades();
    sendUserData();
    

    //ZONA DE PRUEBAS
    /*new Promise( (resolve) => {
        
        return traerBanner();
        
    }).then( (msj) => {

        console.log(msj);
        /*promesaTraerBanner.then(
            console.log("Banner cargado")
            preguntarGuardarDatos();
            console.log("Datos solicitados")
        );/
        

    /*}).then( () => {

        //sendUserData();
        console.log("Datos enviados al servidor")
    
    });
    */
}


//Pasamos la función preguntarGuardarDatos (como callback) al evento window.onload, que se dispara al terminar de cargar el DOM planteado en el HTML.
//No reemplaza al 100% el uso anterior ("setTimeout(preguntarGuardarDatos,1000);") porque la carga de imagen es dinámica desde JS, falta encadenar las acciones.
window.onload = afterLoad;

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


