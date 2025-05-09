document.addEventListener("DOMContentLoaded", function() {
  const ritualForm = document.getElementById("ritual-form");
  const nombreRitualInput = document.getElementById("nombre-ritual");
  const tipoRitualSelect = document.getElementById("tipo-ritual");
  const listaRituales = document.getElementById("lista-rituales");

  // Cargar rituales guardados al cargar la página
  cargarRituales();

  // Función para guardar un ritual
  ritualForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombreRitual = nombreRitualInput.value.trim();
    const tipoRitual = tipoRitualSelect.value;

    if (nombreRitual === "") return;

    // Generar la runa única para el nombre
    const runaGenerada = generarRunaUnica(nombreRitual);

    // Crear el ritual
    const ritual = {
      nombre: nombreRitual,
      tipo: tipoRitual,
      runa: runaGenerada
    };

    // Guardar el ritual en el localStorage
    let rituales = JSON.parse(localStorage.getItem("rituales")) || [];
    rituales.push(ritual);
    localStorage.setItem("rituales", JSON.stringify(rituales));

    // Limpiar el formulario
    nombreRitualInput.value = "";
    tipoRitualSelect.selectedIndex = 0;

    // Volver a cargar los rituales
    cargarRituales();
  });

  // Función para cargar los rituales guardados
  function cargarRituales() {
    listaRituales.innerHTML = "";
    const rituales = JSON.parse(localStorage.getItem("rituales")) || [];
    rituales.forEach(ritual => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>Ritual de ${ritual.nombre}</strong> - Tipo: ${ritual.tipo}
        <br>Runas: ${ritual.runa}
      `;
      listaRituales.appendChild(li);
    });
  }

  // Función para generar una runa única
  function generarRunaUnica(nombre) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let runa = "";
    for (let i = 0; i < 6; i++) {
      runa += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return runa;
  }
});
