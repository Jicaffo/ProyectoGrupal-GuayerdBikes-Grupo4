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

fetch('https://demo2420474.mockable.io/getHomeBanner')
    .then( response => isResponseOk(response))
    .then( data => {
        // console.log(data.imgUrl);
        // console.log(data.link);
        // console.log(data.title);
        banner.src = data.imgUrl;
        banner.alt = data.title;
    })
