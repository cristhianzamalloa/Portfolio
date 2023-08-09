//Tipos de Errores y mensajes a emitir según el tipo de error
const tipoErrores = ["valueMissing", "typeMismatch", "patternMismatch", "customError"];

const mensajesError = {
    nombre: {
        valueMissing: "Debe introducir un nombre",
        patternMismatch: "El nombre no debe exceder de 50 carácteres y solo debe contener letras",
    },
    correo: {
        valueMissing: "Debe introducir un correo electrónico",
        typeMismatch: "El formato de correo electrónico no es válido. Debe contener @ y dominio",
    },
    asunto: {
        valueMissing: "Debe introducir un asunto",
        patternMismatch: "El asunto no debe exceder de 50 carácteres y solo debe contener letras",
    },
    mensaje: {
        valueMissing: "Debe introducir un mensaje",
        patternMismatch: "El mensaje no debe exceder de 50 carácteres",
    },
}

//Funcion para determinar el mensaje a mostrar
function mostrarMensaje (inputType, input) {
    let mensaje = "";
    tipoErrores.forEach((error) => {
        if(input.validity[error]) {
            console.log(inputType, error);
            console.log(input.validity[error]);
            console.log(mensajesError[inputType][error]);
            mensaje = mensajesError[inputType][error];
        }
    });
    return mensaje;
}

//Función para validar los mensajes
function validar(input) {
    const inputType = input.dataset.type;
    if (input.validity.valid) {
        input.parentElement.classList.remove("containerInput--invalid");
        input.parentElement.querySelector(".messageError").innerHTML = "";
    } else {
        input.parentElement.classList.add("containerInput--invalid");
        input.parentElement.querySelector(".messageError").innerHTML = mostrarMensaje(inputType, input);
    }
}

//Para generar el mensaje cuando los inputs pierdan el foco
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validar(input.target);
    })
});

//Para Habilitar botón cuando todos los inputs estén llenados
function habilitar() {
    const inputNombre = document.getElementById("nombre").value;
    const inputCorreo = document.getElementById("correo").value;
    const inputAsunto = document.getElementById("asunto").value;
    const inputMensaje = document.getElementById("mensaje").value;
    val = 0

    if(inputNombre == ""){
        val++;
    }
    if(inputCorreo == ""){
        val++;
    }
    if(inputAsunto == ""){
        val++;
    }
    if(inputMensaje == ""){
        val++;
    } 
    if(val == 0){
        document.getElementById("enviar").disabled = false;
    } else {
        document.getElementById("enviar").disabled = true;
    }
}

document.getElementById("nombre").addEventListener("keyup", habilitar);
document.getElementById("correo").addEventListener("keyup", habilitar);
document.getElementById("asunto").addEventListener("keyup", habilitar);
document.getElementById("mensaje").addEventListener("keyup", habilitar);
document.getElementById("enviar").addEventListener("click", () => {
    alert("Gracias!!! Pronto me contactaré contigo");
});
