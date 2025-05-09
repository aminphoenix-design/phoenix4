// ==== PARTICULAS ====
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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#formulario-ritual");
  const lista = document.querySelector("#lista-rituales");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.querySelector("#nombre").value;
      const pilar = document.querySelector("#pilar").value;

      const runa = generarRuna(nombre);
      const ritual = document.createElement("li");
      ritual.innerHTML = `
        <strong>${nombre}</strong> (${pilar}) - Runa: <span class="runa">${runa}</span>
      `;

      lista.appendChild(ritual);

      // Guardar ritual en localStorage
      guardarRitual(nombre, pilar, runa);

      form.reset();
    });
  }
});

// Guardar rituales en localStorage
function guardarRitual(nombre, pilar, runa) {
  let ritualesGuardados = JSON.parse(localStorage.getItem("rituales")) || [];
  ritualesGuardados.push(`${nombre} (${pilar}) - Runa: ${runa}`);
  localStorage.setItem("rituales", JSON.stringify(ritualesGuardados));
}

// Cargar rituales guardados al cargar la página
window.onload = function () {
  const ritualesGuardados = JSON.parse(localStorage.getItem("rituales")) || [];
  const listaRituales = document.getElementById("lista-rituales");
  listaRituales.innerHTML = ""; // Limpiar la lista antes de agregar

  ritualesGuardados.forEach(runa => {
    const li = document.createElement("li");
    li.textContent = runa;
    listaRituales.appendChild(li);
  });
};

// ==== CONTACTO ====
// Lógica para pre-rellenar el campo de nombre con la runa guardada
document.addEventListener("DOMContentLoaded", function() {
  // Recuperar la runa del localStorage
  let nombreRuna = localStorage.getItem("nombreRuna");
  
  // Si existe una runa almacenada, llenamos el campo de nombre con esa runa
  if (nombreRuna) {
    document.getElementById("nombre-contacto").value = nombreRuna;
  }
});

// Lógica del formulario de contacto
document.querySelector("#formulario-contacto")?.addEventListener("submit", function(e) {
  e.preventDefault();

  // Obtener los valores del formulario
  let telefono = document.getElementById("telefono").value;
  let runaContacto = document.getElementById("nombre-contacto").value;
  let razon = document.getElementById("razon").value;

  // Procesar el formulario (puedes enviar estos datos a un servidor o almacenarlos en localStorage)
  console.log("Contacto:", { telefono, runaContacto, razon });

  // Aquí podrías enviar la información a un servidor o realizar otra acción
});
