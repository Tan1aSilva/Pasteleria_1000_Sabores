document.addEventListener('DOMContentLoaded', function() {
  var formLogin = document.getElementById('formLogin');
  var formRegister = document.getElementById('formRegister');

  if (formLogin) {
    formLogin.addEventListener('submit', function(evento) {
      evento.preventDefault();
      var correo = document.getElementById('loginEmail').value;
      var clave = document.getElementById('loginPassword').value;

      if (correo === '' || clave === '') {
        alert('Por favor llena todos los campos');
      } else {
        window.location.href = 'perfil.html';
      }
    });
  }

  if (formRegister) {
    formRegister.addEventListener('submit', function(evento) {
      evento.preventDefault();
      var clave1 = document.getElementById('regPassword').value;
      var clave2 = document.getElementById('regConfirmPassword').value;

      if (clave1 !== clave2) {
        alert('Las contraseñas no coinciden, revisa de nuevo');
      } else if (clave1.length < 6) {
        alert('La contraseña debe tener minimo 6 caracteres');
      } else {
        alert('Cuenta creada con exito');
        window.location.href = 'perfil.html';
      }
    });
  }
});