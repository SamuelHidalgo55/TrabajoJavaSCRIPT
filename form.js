const nombreInput=  document.getElementById("nombre");
const telefonoInput=  document.getElementById("telefono");
const emailInput=  document.getElementById("email");
const apellidosInput=  document.getElementById("apellidos");

const formulario=  document.getElementById("formulario");

function validarNombre(){
    const nombre= nombreInput.value;
    const nombrePattern= /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/;
    if(nombre.length >= 3 && nombrePattern.test(nombre)){
        nombreInput.classList.add("valido");
        nombreInput.classList.remove("invalido");
        document.getElementById("nombreError").textContent="";
    } else{
        nombreInput.classList.add("invalido");
        nombreInput.classList.remove("valido");
        document.getElementById("nombreError").textContent= 'El nombre debe tener mínimo 3 caracteres y máximo 15';
        
    }

}

function validarApellidos(){
    const apellidos= apellidosInput.value;
    const apellidosPattern= /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/ ;
    if(apellidos.length >= 5 && apellidosPattern.test(apellidos)){
        apellidosInput.classList.add("valido");
        apellidosInput.classList.remove("invalido");
        document.getElementById("apellidosError").textContent="";
    } else{
        apellidosInput.classList.add("invalido");
        apellidosInput.classList.remove("valido");
        document.getElementById("apellidosError").textContent= 'El apellido debe tener mínimo 5 caracteres y máximo 40.';
        
    }

}

function validarTelefono(){
    const telefono= telefonoInput.value;
    const telefonoPattern= /^\d{9}$/;
    if(telefonoPattern.test(telefono)){
        telefonoInput.classList.add("valido");
        telefonoInput.classList.remove("invalido");
        document.getElementById("telefonoError").textContent="";
    } else{
        telefonoInput.classList.add("invalido");
        telefonoInput.classList.remove("valido");
        document.getElementById("telefonoError").textContent= 'El número  debe tener 9 dígitos y solo números.';
        
    }

}

function validarEmail(){
    const email= emailInput.value;
    const emailPattern= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if(emailPattern.test(email)){
        emailInput.classList.add("valido");
        emailInput.classList.remove("invalido");
        document.getElementById("emailError").textContent="";
    } else{
        emailInput.classList.add("invalido");
        emailInput.classList.remove("valido");
        document.getElementById("emailError").textContent= 'Ingrese un correo electrónico válido';

    }

}



function resetFormulario(){
    formulario.reset();
    nombreInput.classList.remove("valido");
    telefonoInput.classList.remove("valido");
    emailInput.classList.remove("valido");
    apellidosInput.classList.remove("valido");
}

nombreInput.addEventListener("input", validarNombre);
telefonoInput.addEventListener("input", validarTelefono);
emailInput.addEventListener("input", validarEmail);
apellidosInput.addEventListener("input", validarApellidos);

formulario.addEventListener("submit", function(event){
    
    validarNombre();
    validarTelefono();
    validarEmail();
    validarapellidos();

    if(nombreInput.classList.contains("valido") && telefonoInput.classList.contains("valido") &&
    emailInput.classList.contains("valido") && apellidosInput.classList.contains("valido")){
    alert("Formulario enviado correctamente");
    resetFormulario();
    // falta poner aqui la url de donde lo quieres enviar
    } else {
    alert("Por favor corrija los errores para enviar el formulario");
    }

})

function calcularPresupuesto() {
    const producto = parseInt(document.getElementById('producto').value);
    const plazo = parseInt(document.getElementById('plazo').value);
    const extras = document.querySelectorAll('.extra:checked');

    // Descuento por plazo (1% por cada mes adicional)
    const descuento = plazo > 1 ? producto * (plazo * 0.01) : 0;

    // Calcular el total de extras
    let totalExtras = 0;
    extras.forEach(extra => totalExtras += parseInt(extra.value));

    // Calcular el total
    const total = producto + totalExtras - descuento;

    // Mostrar el total en el campo correspondiente
    document.getElementById('total').innerText = total.toFixed(2) + "€";
}

// Añadir eventos para actualizar el presupuesto en tiempo real
document.getElementById('producto').addEventListener('change', calcularPresupuesto);
document.getElementById('plazo').addEventListener('input', calcularPresupuesto);
document.querySelectorAll('.extra').forEach(checkbox => {
    checkbox.addEventListener('change', calcularPresupuesto);
});

// Calcular presupuesto inicial
calcularPresupuesto();






