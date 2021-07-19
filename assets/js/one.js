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