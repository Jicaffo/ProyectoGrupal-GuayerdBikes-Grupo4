/*
Historia de usuario: "Como dueño del sitio, quiero mostrarle a los visitantes ofertas especiales de forma de motivarlos a realizar una compra".

Se necesita

En página de contacto, si tenemos el nombre del usuario guardado, mostrarle en pantalla el siguiente mensaje:
"Estimado/a (Nombre). Gracias por elegirnos! Le obsequiamos el código <PROMO> con su compra".
Siendo PROMO una selección aleatoria de siguiente lista:

1) "5HOTSALE para obtener un 5% de descuento"
2) "10HOTSALE para obtener un 10% de descuento"
3) "15HOTSALE para obtener un 15% de descuento"
4) "20HOTSALE para obtener un 20% de descuento"
5) "25HOTSALE para obtener un 25% de descuento"

Nota del arquitecto
Formula para obtener números aleatorios dentro de un rango:
Math.floor(Math.random() * MAX) + MIN;
Donde MAX es el valor máximo del rango y MIN el mínimo
*/

 

var max = 5;
var min = 1;
let opcion;
promo = Math.floor(Math.random() * max) + min;

if (promo === 1){
    opcion = "5HOTSALE para obtener un 5% de descuento";
    
}   
 if (promo === 2){
     opcion = "10HOTSALE para obtener un 10% de descuento";
     
 }
  if (promo === 3){
      opcion = "15HOTSALE para obtener un 15% de descuento"; 
        
  }
   if (promo === 4){
       opcion = "20HOTSALE para obtener un 20% de descuento";
       
   }
    if (promo === 5){
        opcion = "25HOTSALE para obtener un 25% de descuento";
        
    }


if (localStorage.getItem("nombre")){
    let nom = localStorage.getItem("nombre");
    let opc = opcion;
    alert("Estimado "+nom+" Gracias por elegirnos! \nLe obsequiamos el código "+opc+" con su compra");
}

/*
Version
*/

/*

function aleatorio(min,max){
    promo = Math.round(Math.random() * (max - min) + min); 
    return promo
}

function promocion(promo){
        if (promo === 1){
            opcion = "5HOTSALE para obtener un 5% de descuento";
        }   
        if (promo === 2){
            opcion = "10HOTSALE para obtener un 10% de descuento";
        }
        if (promo === 3){
            opcion = "15HOTSALE para obtener un 15% de descuento"; 
        }
        if (promo === 4){
            opcion = "20HOTSALE para obtener un 20% de descuento";
        }
            if (promo === 5){
                opcion = "25HOTSALE para obtener un 25% de descuento";
            }
        return opcion; 
}

function codigoPromo(opcion){
    if (localStorage.getItem("nombre")){
        let nombre = localStorage.getItem("nombre");
        alert("Estimado "+nombre+" Gracias por elegirnos! \nLe obsequiamos el código "+opcion+" con su compra");
    }
}



var min = 1;
var max = 5;
let promo;  
let nro;      
aleatorio(1,5);

promocion(promo);
setTimeout(codigoPromo(opcion),1000);


*/