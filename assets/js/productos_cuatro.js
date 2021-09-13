//Obtenemos el "padre" que contiene a todos los productos
const contenedorProductos = document.querySelector("#products-container");

function showProducts() {
    
    console.log("Mostrando productos en pantalla...");

    for (let i = 0; i < productos.length; i++) {
    
        //Armamos un string con el código HTML de cada producto, aprovechando "i" para generar los IDs dinámicamente
        let stringHTML = 
            `<div class = "product-img">
                <img class="product-style" src="${productos[i].imgUrl}" alt="Foto de ${productos[i].title}" id="imagen-producto${i}">`;
        
        //En cuanto al precio agregamos diferente código según tenga o no precio con descuento.

        const keyCount = Object.keys(productos[i]).length;

        if (keyCount === 6){
                    
            stringHTML +=
                `<p class="price-list" id="product${i}-price"> ${productos[i].currency} ${productos[i].price} </p>`;
                
        } else {
            
            stringHTML +=
                `<p class="price-list crossed" id="product${i}-price"> ${productos[i].currency} ${productos[i].price} </p>
                <p class="price-dto" id="product${i}-disc-price"> ${productos[i].currency} ${productos[i].discountPrice} </p>`;    
        }

        //Terminamos la ultima parte
        stringHTML +=
            `</div>
    
            <div class="description-container">
                <h3 id="product${i}-title"> ${productos[i].title} </h3>
                <p class="description" id="product${i}-description"> ${productos[i].description} </p> 
                <p class="stock" id="product${i}-stock"> ${productos[i].inStock} disponibles </p>
            </div>`;
    
        //console.log(stringHTML);
    
        //Agregamos el html al DOM, dentro del elemento "contenedorProductos" (al final)
        contenedorProductos.insertAdjacentHTML("beforeend", stringHTML);
    }
    console.log("...productos cargados en pantalla.");
}

const init = () => {
    return obtenerProductosDelServidor()
    .then( () => showProducts() ) // En chrome no termina de ca
}

/* document.querySelector("#imagen-producto").src = data[0].imgUrl;
document.querySelector("#ceroT").innerHTML = data[0].title;
document.querySelector("#ceroD").innerHTML = data[0].description;
document.querySelector("#ceroP").innerHTML = `$${data[0].price} ${data[0].currency}`;
document.querySelector("#ceroS").innerHTML = `${data[0].inStock} disponibles`;
document.querySelector("#ceroDe").innerHTML = `$${data[0].discountPrice} ${data[0].currency}`; */


    