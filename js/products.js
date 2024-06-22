import { tiposError,mensajes } from "./messages.js";
export default function getFormElements(){

let fields = document.querySelectorAll("[required]");
let form = document.querySelector("[data-form]");
console.log(form);

let previousSize = localStorage.getItem("tamañoLista");
// Submit Handling Form


async function postJSON(data){
    try{
        const response = await fetch("http://localhost:3000/productos",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data),
        });

        const result = await response.json();

        

        console.log("Success",result);
    } catch(error){
        console.error("Error:",error)
    }
}

form.addEventListener("submit",(event)=>{
    let data = {
        id: (previousSize)+1,
        titulo: form["product-name"].value,
        categoria: form["product-category"].value,
        precio: form["product-price"].value,
        imagen: form["product-image"].value,
    };
    postJSON(data);
    event.preventDefault();
})




// Verify Fields
fields.forEach((field)=>{
    field.addEventListener("blur",()=>verifyField(field))
})


}

function verifyField(field){
    let mensaje = "";
tiposError.forEach((error)=>{
    if(field.validity[error]){
        mensaje = mensajes[field.name][error];
        console.log(mensaje);
        
    }
})

const messageError = field.parentNode.querySelector(".mensaje-error");
const validateInputCheck = field.checkValidity();

if(!validateInputCheck){
    messageError.textContent = mensaje;
    field.classList.add("error");
}
else {
    messageError.textContent = "";
}
}






export async function handleDelete(event){
const productID = event.target.getAttribute("data-id");
const url = `http://localhost:3000/productos/${productID}`;

try{
    const response = await fetch(url,{
        method: "DELETE"
    })

    if(response.ok){
        const productElement = document.querySelector(`[data-product-id = "${productID}]`);
        productElement.remove();
    }
}
catch(error){
    console.error("Error:",error);
}
}