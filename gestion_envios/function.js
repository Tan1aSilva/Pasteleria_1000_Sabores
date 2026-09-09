let envios = [
    { codigo: "ENV-001", pedido: "PED-1001", direccion: "Calle 1 45", fecha: "2026-09-10", estado: "En Camino" }
];

document.addEventListener('DOMContentLoaded', () => {
    cargarTabla();

    document.getElementById('formEnvio').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nuevoCodigo = "ENV-" + Math.floor(100 + Math.random() * 900);
        const pedido = document.getElementById('idPedido').value;
        const direccion = document.getElementById('direccion').value;
        const fecha = document.getElementById('fechaEntrega').value;

        envios.push({
            codigo: nuevoCodigo,
            pedido: pedido,
            direccion: direccion,
            fecha: fecha,
            estado: "Preparando"
        });

        document.getElementById('formEnvio').reset();
        cargarTabla();
    });

    document.getElementById('btnBuscar').addEventListener('click', consultarEstado);
});

function cargarTabla() {
    const tbody = document.getElementById('tablaEnvios');
    tbody.innerHTML = "";

    envios.forEach((item, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${item.codigo}</td>
                <td>${item.pedido}</td>
                <td>${item.direccion}</td>
                <td>${item.fecha}</td>
                <td><span class="badge bg-warning text-dark">${item.estado}</span></td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="actualizarEstado(${index})">Avanzar Estado</button>
                </td>
            </tr>
        `;
    });
}

function actualizarEstado(index) {
    const estados = ["Preparando", "En Camino", "Entregado"];
    let actual = estados.indexOf(envios[index].estado);
    if (actual < estados.length - 1) {
        envios[index].estado = estados[actual + 1];
        cargarTabla();
    }
}

function consultarEstado() {
    const codigo = document.getElementById('buscarCodigo').value;
    const encontrado = envios.find(e => e.codigo === codigo);
    const divRes = document.getElementById('resultadoSeguimiento');

    if (encontrado) {
        document.getElementById('resPedido').innerText = encontrado.pedido;
        document.getElementById('resEstado').innerText = encontrado.estado;
        document.getElementById('resFecha').innerText = encontrado.fecha;
        divRes.classList.remove('d-none');
    } else {
        alert("Código de envío no encontrado");
        divRes.classList.add('d-none');
    }
}