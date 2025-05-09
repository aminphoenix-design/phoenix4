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
      tiempo: "La visión del Tiempo muestra la capacidad de adaptarse, de comprender las fases y los ciclos. En tu marca, el tiempo se convierte en un aliado para el crecimiento sostenible.",
      vida: "La visión de la Vida es la creatividad, el impulso renovador. Para tu marca, esto se traduce en la energía vital que da origen a nuevas oportunidades y perspectivas.",
      muerte: "La visión de la Muerte es la transformación. La capacidad de desprenderse de lo viejo para dar paso a lo nuevo. Para tu marca, es la capacidad de renacer más fuerte y más enfocado.",
      poder: "La visión del Poder representa el dominio y el liderazgo. En tu marca, esto significa la autoridad, la influencia y la capacidad de crear un impacto duradero en el mundo."
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

// === Función para mostrar visión en los pilares de la página Visiones ===
document.addEventListener("DOMContentLoaded", () => {
  const contenidoVisiones = {
    tiempo: "La visión del Tiempo muestra la capacidad de adaptarse, de comprender las fases y los ciclos. En tu marca, el tiempo se convierte en un aliado para el crecimiento sostenible.",
    vida: "La visión de la Vida es la creatividad, el impulso renovador. Para tu marca, esto se traduce en la energía vital que da origen a nuevas oportunidades y perspectivas.",
    muerte: "La visión de la Muerte es la transformación. La capacidad de desprenderse de lo viejo para dar paso a lo nuevo. Para tu marca, es la capacidad de renacer más fuerte y más enfocado.",
    poder: "La visión del Poder representa el dominio y el liderazgo. En tu marca, esto significa la autoridad, la influencia y la capacidad de crear un impacto duradero en el mundo."
  };

  document.querySelectorAll(".pilar").forEach(pilar => {
    pilar.addEventListener("click", () => {
      const id = pilar.id;
      mostrarModalVision(contenidoVisiones[id] || "Este pilar aún guarda secretos.");
    });
  });

  function mostrarModalVision(texto) {
    const modal = document.getElementById("vision-modal");
    const textoModal = document.getElementById("vision-texto");
    textoModal.textContent = texto;
    modal.style.display = "block";

    document.querySelector(".cerrar-modal").onclick = () => {
      modal.style.display = "none";
    };
    modal.onclick = (e) => {
      if (e.target === modal) modal.style.display = "none";
    };
  }
});
