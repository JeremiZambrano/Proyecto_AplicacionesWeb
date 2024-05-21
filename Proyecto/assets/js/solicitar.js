// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  // Obtiene el formulario de postular para prácticas por su etiqueta form
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

  // Función para validar el formulario de postular para prácticas
  function validateForm() {
    // Obtiene el valor del campo de nombres y elimina los espacios en blanco al principio y al final
    const names = document.querySelector('input[name="name"]').value.trim();
    // Obtiene el valor del campo de C.I (Cédula de Identidad) y elimina los espacios en blanco al principio y al final
    const ci = document.querySelector('input[name="ci"]').value.trim();
    // Obtiene el valor del campo de celular y elimina los espacios en blanco al principio y al final
    const phone = document.querySelector('input[name="phone"]').value.trim();
    // Obtiene el valor del campo de correo institucional y elimina los espacios en blanco al principio y al final
    const email = document.querySelector('input[name="email"]').value.trim();
    // Inicializa una variable para almacenar el resultado de la validación
    let valid = true;

    // Verifica si el campo de nombres está vacío
    if (names === "") {
      // Si el campo está vacío, muestra una alerta y establece la validación como falsa
      alert("Por favor, introduce tu nombre.");
      valid = false;
    }

    // Verifica si el campo de C.I (Cédula de Identidad) está vacío o no es un número de 10 dígitos
    if (ci === "" || !validateNumberLength(ci, 10)) {
      // Si el campo está vacío o no cumple con la longitud especificada, muestra una alerta y establece la validación como falsa
      alert(
        "Por favor, introduce una Cédula de Identidad válida de 10 dígitos."
      );
      valid = false;
    }

    // Verifica si el campo de celular está vacío o no es un número de 10 dígitos
    if (phone === "" || !validateNumberLength(phone, 10)) {
      // Si el campo está vacío o no cumple con la longitud especificada, muestra una alerta y establece la validación como falsa
      alert("Por favor, introduce un número de celular válido de 10 dígitos.");
      valid = false;
    }

    // Verifica si el campo de correo institucional está vacío
    if (email === "") {
      // Si el campo está vacío, muestra una alerta y establece la validación como falsa
      alert("Por favor, introduce tu correo institucional.");
      valid = false;
    }

    // Devuelve el resultado de la validación del formulario
    return valid;
  }

  // Función para verificar si un valor es un número de una longitud específica
  function validateNumberLength(value, length) {
    // Expresión regular para verificar si el valor es un número de la longitud especificada
    const re = /^[0-9]{1,}$/;
    // Devuelve true si el valor es un número y tiene la longitud especificada, de lo contrario, devuelve false
    return re.test(value) && value.length === length;
  }
});
