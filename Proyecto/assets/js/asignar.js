// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  // Obtiene el formulario de establecer tutor por su etiqueta form
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

  // Función para validar el formulario de establecer tutor
  function validateForm() {
    // Obtiene el valor del campo de nombre del tutor y elimina los espacios en blanco al principio y al final
    const tutorName = document
      .querySelector('input[name="tutor"]')
      .value.trim();
    // Obtiene el valor del campo de tópico o tema y elimina los espacios en blanco al principio y al final
    const topic = document.querySelector('input[name="tema"]').value.trim();
    // Inicializa una variable para almacenar el resultado de la validación
    let valid = true;

    // Verifica si el campo de nombre del tutor está vacío
    if (tutorName === "") {
      // Si el campo está vacío, muestra una alerta y establece la validación como falsa
      alert("Por favor, introduce el nombre del tutor.");
      valid = false;
    }

    // Verifica si el campo de tópico o tema está vacío
    if (topic === "") {
      // Si el campo está vacío, muestra una alerta y establece la validación como falsa
      alert("Por favor, introduce el tópico o tema.");
      valid = false;
    }

    // Devuelve el resultado de la validación del formulario
    return valid;
  }
});
