function preguntarGuardarDatos(){

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

setTimeout(preguntarGuardarDatos,1000);


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
    return parseInt(Math.random() * (1500) + 1) ;
}

const userData = {
    token : tokenGen(),
    name : localStorage.getItem('nombre'),
    email :localStorage.getItem('mail'),
    sendEmail : localStorage.getItem('recibirNovedades'),
   }

// console.log(userData)

if ( !localStorage.getItem("datosEnviadosAlServidor") ){

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
            console.log(`Se enviaron los siguientes datos: ${JSON.stringify(userData)}`)
            return response.text();
        } else {
            throw "Error en la llamada Ajax";
        }
    })
    // .then (text => {
    //     console.log(text);
    // })
    .catch (error => console.log(error));

    localStorage.setItem("datosEnviadosAlServidor", true);
}
