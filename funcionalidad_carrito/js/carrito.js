document.addEventListener('DOMContentLoaded', function() {
  var inputsCantidad = document.querySelectorAll('input[type="number"]');
  for (var i = 0; i < inputsCantidad.length; i++) {
    inputsCantidad[i].addEventListener('change', calcularCarrito);
  }

  var botonesEliminar = document.querySelectorAll('.btn-outline-danger');
  for (var j = 0; j < botonesEliminar.length; j++) {
    botonesEliminar[j].addEventListener('click', function(e) {
      var fila = e.target.parentElement.parentElement;
      fila.remove();
      calcularCarrito();
    });
  }

  function calcularCarrito() {
    var filas = document.querySelectorAll('tbody tr');
    var totalSuma = 0;

    for (var k = 0; k < filas.length; k++) {
      var fila = filas[k];
      var input = fila.querySelector('input[type="number"]');
      
      if (input) {
        var cantidad = parseInt(input.value);
        if (isNaN(cantidad) || cantidad < 1) {
          cantidad = 1;
          input.value = 1;
        }

        var precioTexto = fila.children[1].innerText;
        var precio = 0;

        if (precioTexto.indexOf('18.990') !== -1) {
          precio = 18990;
        } else if (precioTexto.indexOf('19.500') !== -1) {
          precio = 19500;
        }

        var subtotal = precio * cantidad;
        fila.children[3].innerText = '$' + subtotal;

        totalSuma = totalSuma + subtotal;
      }
    }

    var elementoTotal = document.querySelector('.text-primary');
    if (elementoTotal) {
      var envio = 3000;
      if (totalSuma === 0) {
        envio = 0;
      }
      var granTotal = totalSuma + envio;
      elementoTotal.innerText = '$' + granTotal;
    }
  }
});