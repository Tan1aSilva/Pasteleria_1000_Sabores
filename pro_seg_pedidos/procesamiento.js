const tarifasComunas = {
    "santiago": 2500,
    "providencia": 3000,
    "las_condes": 3500,
    "la_florida": 3000,
    "maipu": 4000
};

function actualizarOpcionesEnvio() {
    const esDomicilio = document.getElementById('envioDomicilio').checked;
    const selectComuna = document.getElementById('selectComuna');
    const inputDireccion = document.getElementById('inputDireccion');
    const contenedorDireccion = document.getElementById('contenedorDireccion');
    const costoEnvioTexto = document.getElementById('costoEnvioTexto');

    if (esDomicilio) {
        selectComuna.disabled = false;
        inputDireccion.required = true;
        contenedorDireccion.classList.remove('d-none');

        const costo = tarifasComunas[selectComuna.value] || 0;
        costoEnvioTexto.innerText = `$${costo.toLocaleString('es-CL')}`;
    } else {
        selectComuna.disabled = true;
        inputDireccion.required = false;
        contenedorDireccion.classList.add('d-none');
        
        costoEnvioTexto.innerText = '$0 (Retiro en Tienda)';
    }
}

function procesarEnvio(event) {
    event.preventDefault();

    const esDomicilio = document.getElementById('envioDomicilio').checked;
    const fecha = document.getElementById('fechaEntrega').value;
    const hora = document.getElementById('horaEntrega').value;

    if (esDomicilio) {
        const comuna = document.getElementById('selectComuna').selectedOptions[0].text;
        const direccion = document.getElementById('inputDireccion').value;
        
        alert(`¡Despacho registrado con éxito!\n\nDestino: ${direccion}, ${comuna}.\nFecha programada: ${fecha} a las ${hora} hrs.`);
    } else {
        alert(`¡Retiro programado con éxito!\n\nPunto de entrega: Tienda Central (1000 Sabores).\nFecha programada: ${fecha} a las ${hora} hrs.`);
    }
}

document.addEventListener('DOMContentLoaded', actualizarOpcionesEnvio);