// fetch("http://demo2420474.mockable.io/getHomeBanner")
// 	.then(response => {
//         console.log(response);
       
// 	})
// imgURL: https://dummyimage.com/1600x351/000000/ffff&text=Otro+Banner+Guayerd

const reqBanner = new XMLHttpRequest();
const method = 'GET';
const address = 'http://demo2420474.mockable.io/getHomeBanner';
const banner = document.querySelector("#ancho-imagen-banner");
let infoBanner;

reqBanner.onreadystatechange = e => {
        if (reqBanner.readyState == 4) {
            if (reqBanner.status == 200) {
                console.log(reqBanner)
                infoBanner = JSON.parse(reqBanner.responseText)
                console.log(infoBanner.imgUrl)
                banner.src = infoBanner.imgUrl
                banner.alt = infoBanner.title
                
            } else if (reqBanner.status === 404) {
                    console.log("Error");
            } else {
    
            }
        } 
}
reqBanner.open(method, address);
reqBanner.send();