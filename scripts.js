// ==== PARTICULAS ====
tsParticles.load("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
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

// ==== GENERADOR DE RUNAS ====
// Runas Futhark
const runas = [
  "ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ",
  "ᛁ", "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛋ", "ᛏ", "ᛒ", "ᛖ", "ᛗ",
  "ᛚ", "ᛜ", "ᛞ", "ᛟ"
];

// Convierte el nombre a una runa única
function generarRuna(nombre) {
  nombre = nombre.toLowerCase().replace(/[^a-z]/g, "");
  let codigo = 0;
  for (let i = 0; i < nombre.length; i++) {
    codigo += nombre.charCodeAt(i);
  }
  return runas[codigo % runas.length];
}

// ==== RITUAL FORM ====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#formulario-ritual");
  const lista = document.querySelector("#lista-rituales");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.querySelector("#nombre").value.trim();
      const pilar = document.querySelector("#pilar").value;
      const razon = document.querySelector("#razon").value.trim();

      if (!nombre || !pilar || !razon) return;

      const runa = generarRuna(nombre);

      const ritual = document.createElement("li");
      ritual.innerHTML = `
        <strong>${nombre}</strong> (${pilar}) - Runa: <span class="runa">${runa}</span><br>
        <em>"${razon}"</em>
      `;

      lista.appendChild(ritual);

      guardarRitual(nombre, pilar, razon, runa);
      form.reset();
    });
  }

  cargarRituales();
});

// Guardar rituales
function guardarRitual(nombre, pilar, razon, runa) {
  let ritualesGuardados = JSON.parse(localStorage.getItem("rituales")) || [];
  ritualesGuardados.push({
    nombre,
    pilar,
    razon,
    runa
  });
  localStorage.setItem("rituales", JSON.stringify(ritualesGuardados));
}

// Cargar rituales al entrar
function cargarRituales() {
  const ritualesGuardados = JSON.parse(localStorage.getItem("rituales")) || [];
  const lista = document.getElementById("lista-rituales");
  lista.innerHTML = "";

  ritualesGuardados.forEach(r => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${r.nombre}</strong> (${r.pilar}) - Runa: <span class="runa">${r.runa}</span><br>
      <em>"${r.razon}"</em>
    `;
    lista.appendChild(li);
  });
}
