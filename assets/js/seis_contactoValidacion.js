const validarDatos = () => {

    let datosValidados = { // Contiene los datos a enviar al servidor, con todos los campos ya validados
        "nombre" : "Juan",
        "email" : "juan@validado.com",
        "tema" : "Venta",
        "mensaje" : "Este es el contenido del mensaje"
    };


    //Lógica de validación

    return datosValidados; //Devuelve el objeto con todos los campos ya validados.
}


// Vos deberías hacer esto:

let datosCliente = validarDatos()

//Logica del envío de datos

//console.log(datosCliente.nombre); // Imprimiría por consola "Juan" por ejemplo
