
const traerBanner = () =>{

    console.log("Se está ejecutando traerBanner()")

    const banner = document.querySelector("#ancho-imagen-banner");
 
    const isResponseOk = response => {
        if (!response.ok)
            throw new Error(response.status);
        return response.json()    
        }
    
    fetch('https://demo2420474.mockable.io/getHomeBanner')
        .then( response => isResponseOk(response))
        .then( data => {
            banner.src = data.imgUrl;
            banner.alt = data.title;
            document.querySelector("#link-banner").href = data.link;
        })
}

traerBanner();