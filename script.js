// ==== PARTICULAS ====
// Aquí estamos cargando las partículas de fondo como antes.
tsParticles.load("particles-js", {
  particles: {
    number: { value: 70, density: { enable: true, value_area: 800 } },
    color: { value: ["#8a2be2", "#d4af37"] },
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
    },
    links: {
      enable: true,
      distance: 120,
      color: "#d4af37",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// ==== TEXTO DETALLADO EN PILARES ====
// Cargar el contenido del modal de los pilares.
document.querySelectorAll(".pilar").forEach(pilar => {
  pilar.addEventListener("click", () => {
    const contenido = {
      tiempo: "El pilar del Tiempo refleja el dominio sobre lo eterno y lo efímero. Comprender el tiempo es dominar la percepción, trascender las estaciones y renacer con cada ciclo.",
      vida: "La Vida representa la energía primaria. Es el pulso de la creación, donde todo comienza. Entenderla es nutrir la chispa divina dentro de uno mismo.",
      muerte: "Muerte no es final, sino transformación. Es la llama que purifica, el umbral hacia la sabiduría ancestral. Solo a través de la muerte renace el Fénix.",
      poder: "El Poder no se impone, se convoca. Surge del equilibrio entre los otros pilares, manifestándose cuando el propósito es claro y el espíritu está alineado."
    };

    const id = pilar.id;
    mostrarModal(contenido[id] || "Este pilar aún guarda secretos.");
  });
});

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

// ==== GENERACIÓN DE RUNAS ====
// Función para generar la runa basada en el nombre
function generarRuna(nombre) {
  const runas = [
    "ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ",
    "ᛁ", "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛋ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛜ", "ᛞ", "ᛟ"
  ];
  nombre = nombre.toLowerCase().replace(/[^a-z]/g, "");
  let codigo = 0;
  for (let i = 0; i < nombre.length; i++) {
    codigo += nombre.charCodeAt(i);
  }
  return runas[codigo % runas.length];
}

// ==== FORMULARIO RITUAL ====
// Manejo de formularios para rituales y guardar en localStorage.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#formulario-ritual");
  const lista = document.querySelector("#lista-rituales");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.querySelector("#nombre").value;
      const telefono = document.querySelector("#telefono").value;
      const razon = document.querySelector("#razon").value;
      const pilar = document.querySelector("#pilar").value;

      const runa = generarRuna(nombre);
      const ritual = document.createElement("li");
      ritual.innerHTML = `
        <strong>${nombre}</strong> (Teléfono: ${telefono}) - Razon: <em>${razon}</em> - Runa: <span class="runa">${runa}</span>
      `;

      lista.appendChild(ritual);

      // Guardar ritual en localStorage
      guardarRitual(nombre, telefono, razon, pilar, runa);

      form.reset();
    });
  }
});

// Guardar rituales en localStorage
function guardarRitual(nombre, telefono, razon, pilar, runa) {
  let ritualesGuardados = JSON.parse(localStorage.getItem("rituales")) || [];
  ritualesGuardados.push({
    nombre,
    telefono,
    razon,
    pilar,
    runa
  });
  localStorage.setItem("rituales", JSON.stringify(ritualesGuardados));
}

// Cargar rituales guardados al cargar la página
window.onload = function () {
  const ritualesGuardados = JSON.parse(localStorage.getItem("rituales")) || [];
  const listaRituales = document.getElementById("lista-rituales");
  listaRituales.innerHTML = ""; // Limpiar la lista antes de agregar

  ritualesGuardados.forEach(ritual => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${ritual.nombre}</strong> (Teléfono: ${ritual.telefono}) - Razón: <em>${ritual.razon}</em> - Runa: <span class="runa">${ritual.runa}</span>
    `;
    listaRituales.appendChild(li);
  });
};

// ==== FORMULARIO EN CONTACTO: RUNA EN NOMBRE ====
document.addEventListener("DOMContentLoaded", () => {
  // Agregar automáticamente la runa generada al campo del nombre si el ritual está registrado.
  const ritualesGuardados = JSON.parse(localStorage.getItem("rituales")) || [];
  const nombreInput = document.querySelector("#nombre");

  if (ritualesGuardados.length > 0) {
    const nombreRitual = ritualesGuardados[ritualesGuardados.length - 1].nombre;
    const runaGenerada = generarRuna(nombreRitual);
    nombreInput.value = runaGenerada;
  }
});
