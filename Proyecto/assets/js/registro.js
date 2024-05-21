// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  // Obtiene el formulario de registro por su etiqueta form
  const form = document.querySelector("form");

  // Agrega un evento de escucha para el envío del formulario
  form.addEventListener("submit", function (event) {
    // Previene el comportamiento predeterminado del envío del formulario
    event.preventDefault();

    // Si la validación del formulario es exitosa, envía el formulario
    if (validateForm()) {
      form.submit();
    }
  });

  // Función para validar el formulario de registro
  function validateForm() {
    // Obtiene el valor del campo de correo electrónico y elimina los espacios en blanco al principio y al final
    const email = document.querySelector('input[name="email"]').value.trim();
    // Obtiene el valor del campo de contraseña y elimina los espacios en blanco al principio y al final
    const password = document
      .querySelector('input[name="password"]')
      .value.trim();
    // Obtiene el valor del campo de repetir contraseña y elimina los espacios en blanco al principio y al final
    const repeatPassword = document
      .querySelector('input[name="password2"]')
      .value.trim();
    // Inicializa una variable para almacenar el resultado de la validación
    let valid = true;

    // Valida el formato del correo electrónico utilizando una expresión regular
    if (!validateEmail(email)) {
      // Si el correo electrónico no es válido, muestra una alerta y establece la validación como falsa
      alert("Por favor, introduce un correo electrónico válido.");
      valid = false;
    }

    // Verifica si la contraseña tiene al menos 6 caracteres
    if (password.length < 6) {
      // Si la contraseña no cumple con la longitud mínima, muestra una alerta y establece la validación como falsa
      alert("La contraseña debe tener al menos 6 caracteres.");
      valid = false;
    }

    // Verifica si la contraseña y la repetición de la contraseña coinciden
    if (password !== repeatPassword) {
      // Si las contraseñas no coinciden, muestra una alerta y establece la validación como falsa
      alert("Las contraseñas no coinciden.");
      valid = false;
    }

    // Devuelve el resultado de la validación del formulario
    return valid;
  }

  // Función para validar el formato del correo electrónico utilizando una expresión regular
  function validateEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Devuelve true si el correo electrónico coincide con el formato de la expresión regular, de lo contrario, devuelve false
    return re.test(email);
  }
});
