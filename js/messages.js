  

export const tiposError =[
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError",
    ]
    
    export const mensajes = {
    "product-name": {
    valueMissing: "El campo nombre no puede estar vacío.",
    patternMismatch: "Por favor, ingrese un nombre válido.",
    tooShort: "El nombre del producto debe contener 3 caracteres o más.",
    },
    "product-category":{
        valueMissing: "El campo de categoría no puede estar vacío.",
        patternMismatch: "Por favor, ingrese una categoría válida.",
        tooShort: "La categoría del producto debe contener 3 caracteres o más.",
    },
    "product-price": {
        valueMissing: "El campo de precio no puede estar vacío.",
        patternMismatch: "Por favor, ingresa un formato del precio válido.",
        tooShort: "El precio del producto debe contener 3 caracteres o más.",
    },
    "product-image":{
        valueMissing: "El campo para la imagen no puede estar vacío.",
        patternMismatch: "Por favor, ingresa una URL válida.",
        tooShort: "La URL de la imagen debe contener 3 caracteres o más.",
    }
    
    
    };