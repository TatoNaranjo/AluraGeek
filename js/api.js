
import { handleDelete } from "./products.js";
export default async function callingFunction(){

    let url = "http://localhost:3000/productos";
    try {
        let bringProducts = await fetch (url). then (response => response.json());
        const card = document.querySelector("[data-productList]");
        bringProducts.forEach((product)=>{
            const producto = `
            <div class="card" data-product-id="${product.id}">
            <div class="card-image"><img src = ${product.imagen} alt=${product.titulo} class="imagen"></div>
            <div class="category"><p>${product.categoria}</p></div>
            <div class="heading">${product.titulo}</div>
            <div class="price">${product.precio} $</div>

            <button class = "delete-button button" data-id = "${product.id}" ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"/></svg></button>
            
            </div>
            `

            card.innerHTML += producto;
        })

        const deleteButtons = document.querySelectorAll(".delete-button");

        deleteButtons.forEach((button)=>{
            button.addEventListener("click",handleDelete);
        })


    } catch (error)
    {
        const message = `<div>
        <h3>Los Datos No se Trajeron Correctamente</h3>
        </div>`
        const card = document.querySelector("[data-productList]");
        card.innerHTML = message;
        console.log(error);
        console.log("Los Datos No se Trajeron Correctamente")
    }


}