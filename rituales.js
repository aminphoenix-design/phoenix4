// Función para generar la runa
function generarRuna(nombre) {
    const runas = [
        "ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ",
        "ᛁ", "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛋ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛜ", "ᛞ", "ᛟ"
    ];
    nombre = nombre.toLowerCase().replace(/[^a-z]/g, ""); // Convertir a minúsculas y quitar caracteres no alfabéticos
    let codigo = 0;
    for (let i = 0; i < nombre.length; i++) {
        codigo += nombre.charCodeAt(i); // Generar código basado en el nombre
    }
    return runas[codigo % runas.length]; // Generar la runa
}

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario-ritual");
    const mensajeExito = document.getElementById("mensaje-exito");
    const mensajeError = document.getElementById("mensaje-error");

    // Prellenar el campo de nombre con la runa generada
    const nombreInput = document.getElementById("nombre");
    const telefonoInput = document.getElementById("telefono");
    const razonInput = document.getElementById("razon");

    // Función que gestiona el formulario de ritual
    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); // Evitar recarga de página

        // Obtener el nombre, teléfono y razón
        const nombre = nombreInput.value;
        const telefono = telefonoInput.value;
        const razon = razonInput.value;

        // Validar que todos los campos estén completos
        if (nombre && telefono && razon) {
            mensajeExito.style.display = "block";
            mensajeError.style.display = "none";
            formulario.reset();
        } else {
            mensajeExito.style.display = "none";
            mensajeError.style.display = "block";
        }
    });

    // Función que asigna la runa automáticamente cuando el nombre cambia
    telefonoInput.addEventListener("input", () => {
        const nombre = telefonoInput.value;
        const runaGenerada = generarRuna(nombre);
        nombreInput.value = `${nombre} (${runaGenerada})`; // Coloca la runa generada en el campo de nombre
    });
});
