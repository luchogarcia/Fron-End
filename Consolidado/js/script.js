
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if (username === "" || password === "") {
    document.getElementById("error-message").innerHTML = "Por favor ingrese su nombre de usuario y contraseña";
  } else if (username !== "juan" || password !== "1234") {
    document.getElementById("error-message").innerHTML = "Nombre de usuario o contraseña incorrectos";
  } else {
    alert("¡Bienvenido, " + username + "!");
    window.location.href = 'Catalogo.html';
  }
}

function recuperar() {
  window.location.href = 'RecuperarClave.html';
}

function regresar() {
  window.location.href = 'index.html';
}

function sendResetEmail() {
  var email = document.getElementById("email").value;
  
  if (email === "") {
    document.getElementById("error-message").innerHTML = "Por favor ingrese su nombre de usuario";
  } else {
    // Aquí podrías agregar la lógica para enviar un correo electrónico con el enlace de restablecimiento de contraseña
    // En este ejemplo, simplemente mostramos un mensaje de éxito
    document.getElementById("success-message").innerHTML = "Temporalmente entregamos el valor quemado, su clave es: 1234";
  }
}


alert('El producto ha sido agregado al carrito.');