const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const selectProduct = document.querySelector("#product-select");
const textAMensaje = document.querySelector("#message");

//Se inicializa un objeto definiendo todos los campos como vacíos.
let datosValidados = {
    name: "",
    email: "",
    product: "",
    message: "" 
};

//Valida cada campo por separado, se activa con el "blur"
const validateField = (e) => {
    //Infiero el evento al declararlo como parámetro de la función
    
    //Obtengo el elemento html en donde se originó el evento
    const campo = e.target; 

    if (campo.value.length < 1 || //Si el campo está vacío
        campo.id === "email" && ( !campo.value.includes("@") || !e.target.value.includes(".")) ){ //o es un mail inválido (sin arroba o punto)
        //Hacemos visible un parrafo informando el  error
        document.querySelector(`#${campo.id}-alert`).hidden = false;
        //y colocamos un string vacío en el campo correspondiente del objeto datosValidados
        datosValidados[campo.id] = "";
    } else {
        //De lo contrario ocultamos el parrafo (por defecto)
        document.querySelector(`#${campo.id}-alert`).hidden = true;
        //y cargamos el valor como un campo validado
        datosValidados[campo.id] = campo.value;
    }
}

//Verifica que TODOS los campos estén validados.
const validateSend = (e) => {

    //Evitamos que se comporte como lo haría por defecto
    e.preventDefault();

    //Si algun dato está vacío hace foco en el campo correspondiente
    if (datosValidados.name === ""){
        document.querySelector(`#${inputName.id}-alert`).hidden = false; //Nos asegura que al menos aparezca el primer mensaje de error si no activa ningun blur
        inputName.focus();
    } else if (datosValidados.email === ""){
        inputEmail.focus();
    } else if (datosValidados.subject === ""){
        selectProduct.focus();
    } else if (datosValidados.message === ""){
        textAMensaje.focus();
    } else {
        //Si todos los datos están presentes, envía los datos al servidor
        sendFormData();
    }
}

//Envía los datos al servidor
const sendFormData = () => {

    fetch("https://ptsv2.com/t/r10gd-1618538020/post",{
        method : "post",
        body : JSON.stringify(datosValidados),
    })
    .then(response => {
        if (response.ok) {
            location.href = "gracias.html";
            console.log(`Se enviaron los siguientes datos: ${JSON.stringify(datosValidados)}`)
            return response.text();
        } else {
            throw "Error en el envío de formulario"
        }
    })
}

const cargarProductosEnSelect = () => {
    console.log("Cargando productos en Select...");

    for (let i = 0; i < productos.length; i++) {
    
        //Armamos un string con el código HTML de cada producto, aprovechando "i" para generar los IDs dinámicamente
        let stringHTML = `<option value="${productos[i].title}">${productos[i].title}</option>`;
        
        //Agregamos el html al DOM, dentro del elemento "contenedorProductos" (al final)
        selectProduct.insertAdjacentHTML("beforeend", stringHTML);
    }

    console.log("Productos cargados OK!");
}

const init = () => {
    obtenerProductosDelServidor("prueba")
    .then( () => cargarProductosEnSelect() )
    .then( () => ofrecerPromo() )
}

inputName.addEventListener("blur", validateField);
inputEmail.addEventListener("blur", validateField);
selectProduct.addEventListener("blur", validateField);
textAMensaje.addEventListener("blur", validateField);
