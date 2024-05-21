// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  // Obtiene el formulario de crear actividad por su etiqueta form
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

  // Función para validar el formulario de crear actividad
  function validateForm() {
    // Obtiene el valor del campo de actividad y elimina los espacios en blanco al principio y al final
    const actividad = document
      .querySelector('input[name="actividad"]')
      .value.trim();
    // Inicializa una variable para almacenar el resultado de la validación
    let valid = true;

    // Verifica si el campo de actividad está vacío
    if (actividad === "") {
      // Si el campo está vacío, muestra una alerta y establece la validación como falsa
      alert("Por favor, introduce la actividad.");
      valid = false;
    }

    // Devuelve el resultado de la validación del formulario
    return valid;
  }
});
