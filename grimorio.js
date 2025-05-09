// Datos de los pilares y sus descripciones
const pilares = {
    tiempo: "El pilar del Tiempo refleja el dominio sobre lo eterno y lo efímero. Comprender el tiempo es dominar la percepción, trascender las estaciones y renacer con cada ciclo.",
    vida: "La Vida representa la energía primaria. Es el pulso de la creación, donde todo comienza. Entenderla es nutrir la chispa divina dentro de uno mismo.",
    muerte: "Muerte no es final, sino transformación. Es la llama que purifica, el umbral hacia la sabiduría ancestral. Solo a través de la muerte renace el Fénix.",
    poder: "El Poder no se impone, se convoca. Surge del equilibrio entre los otros pilares, manifestándose cuando el propósito es claro y el espíritu está alineado."
};

// Función para generar la runa basada en el nombre
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

// Mostrar la información del pilar cuando se hace clic en él
document.querySelectorAll(".pilar").forEach(pilar => {
    pilar.addEventListener("click", () => {
        const id = pilar.id;
        const descripcion = pilares[id] || "Este pilar aún guarda secretos.";
        mostrarModal(descripcion);
    });
});

// Función para mostrar el modal con la descripción del pilar
function mostrarModal(texto) {
    let modal = document.createElement("div");
    modal.className = "modal-pilar";
    modal.innerHTML = `
        <div class="modal-contenido">
            <span class="cerrar">&times;</span>
            <p>${texto}</p>
        </div>
    `;
    document.body.appendChild(modal);
    document.querySelector(".cerrar").onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
}

// Función para actualizar el nombre y generar la runa
function actualizarRuna(nombre) {
    const runaGenerada = generarRuna(nombre);
    const nombreInput = document.getElementById("nombre");
    nombreInput.value = `${nombre} (${runaGenerada})`; // Coloca la runa generada en el campo de nombre
}

// Inicializar el campo de nombre con la runa cuando el formulario se carga
document.addEventListener("DOMContentLoaded", () => {
    const nombreInput = document.getElementById("nombre");
    
    // Si hay un nombre previamente guardado en localStorage, actualizar el campo
    const nombreGuardado = localStorage.getItem("nombre");
    if (nombreGuardado) {
        actualizarRuna(nombreGuardado);
    }
});
