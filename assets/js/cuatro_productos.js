let productos;

const isResponseOk = response => {
    if (!response.ok)
        throw new Error(response.status);
    return response.json()    
    }

fetch('https://demo2420474.mockable.io/productList')
    .then( response => isResponseOk(response))
    .then( data => {
        console.log(data);
        productos = data;
        data.forEach(item => {
        document.querySelector("#imagen-producto").src = item.imgUrl;
        document.querySelector("#ceroT").innerHTML = item.title;
        document.querySelector("#ceroD").innerHTML = item.description;
        document.querySelector("#ceroP").innerHTML = `$${item.price} ${item.currency}`;
        document.querySelector("#ceroS").innerHTML = `${item.inStock} disponibles`;
        document.querySelector("#ceroDe").innerHTML = `$${item.discountPrice} ${item.currency}`;
        } )
    }      
);
       
    
    

/* document.querySelector("#imagen-producto").src = data[0].imgUrl;
document.querySelector("#ceroT").innerHTML = data[0].title;
document.querySelector("#ceroD").innerHTML = data[0].description;
document.querySelector("#ceroP").innerHTML = `$${data[0].price} ${data[0].currency}`;
document.querySelector("#ceroS").innerHTML = `${data[0].inStock} disponibles`;
document.querySelector("#ceroDe").innerHTML = `$${data[0].discountPrice} ${data[0].currency}`; */


    /* document.querySelector("#unoT").innerHTML = productos[1].title;
        document.querySelector("#unoD").innerHTML = productos[1].description;
        document.querySelector("#unoP").innerHTML = `$${productos[1].price} ${productos[1].currency}`;
        document.querySelector("#unoS").innerHTML = `${productos[1].inStock} en stock`;

        document.querySelector("#dosT").innerHTML = productos[2].title;
        document.querySelector("#dosD").innerHTML = productos[2].description;
        document.querySelector("#dosP").innerHTML = `$${productos[2].price } ${productos[2].currency}`;
        document.querySelector("#dosS").innerHTML = `${productos[2].inStock} en stock`;
        document.querySelector("#dosDe").innerHTML = `$${productos[2].discountPrice} ${productos[2].currency}`;

        document.querySelector("#tresT").innerHTML = productos[3].title;
        document.querySelector("#tresD").innerHTML = productos[3].description;
        document.querySelector("#tresP").innerHTML = `$${productos[3].price} ${productos[3].currency}`;
        document.querySelector("#tresS").innerHTML = `${productos[3].inStock} en stock`;

        document.querySelector("#cuatroT").innerHTML = productos[4].title;
        document.querySelector("#cuatroD").innerHTML = productos[4].description;
        document.querySelector("#cuatroP").innerHTML = `$${productos[4].price} ${productos[4].currency}`;
        document.querySelector("#cuatroS").innerHTML = `${productos[4].inStock} en stock`;

        document.querySelector("#cincoT").innerHTML = productos[5].title;
        document.querySelector("#cincoD").innerHTML = productos[5].description;
        document.querySelector("#cincoP").innerHTML = `$${productos[5].price} ${productos[5].currency}`;
        document.querySelector("#cincoS").innerHTML = `${productos[5].inStock} en stock`;
        document.querySelector("#cincoDe").innerHTML = `$${productos[5].discountPrice} ${productos[5].currency}`; */