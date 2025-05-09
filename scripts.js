// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar partículas (para todas las páginas)
  if (document.getElementById("particles-js")) {
    tsParticles.load("particles-js", {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: ["#8a2be2", "#ffcc00"] },
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
          distance: 130,
          color: "#ffcc00",
          opacity: 0.5,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
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
  }

  // Funcionalidad de rituales solo si existe el formulario
  const formulario = document.getElementById("form-ritual");
  if (!formulario) return;

  const listaRituales = document.getElementById("lista-rituales");
  const elementos = ["Tiempo", "Vida", "Muerte", "Poder"];

  const rituales = JSON.parse(localStorage.getItem("rituales")) || [];
  rituales.forEach(r => agregarRitualALista(r));

  formulario.addEventListener("submit", e => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const intencion = document.getElementById("intencion").value.trim();

    if (!nombre || !intencion) return;

    const elemento = elementos[Math.floor(Math.random() * elementos.length)];
    const runa = generarRuna(nombre);

    const nuevoRitual = { nombre, intencion, elemento, runa };
    rituales.push(nuevoRitual);
    localStorage.setItem("rituales", JSON.stringify(rituales));

    agregarRitualALista(nuevoRitual);
    formulario.reset();
  });

  function generarRuna(nombre) {
    const runas = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛋᛏᛒᛖᛗ";
    let hash = 0;
    for (let i = 0; i < nombre.length; i++) {
      hash = nombre.charCodeAt(i) + ((hash << 5) - hash);
    }
    return [...nombre].map(c => runas[Math.abs((hash + c.charCodeAt(0)) % runas.length)]).join('');
  }

  function agregarRitualALista({ nombre, intencion, elemento, runa }) {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${nombre}</strong> — <em>${elemento}</em><br>
      Intención: <span>${intencion}</span><br>
      Runa: <span class="runa">${runa}</span>
    `;
    listaRituales.appendChild(li);
  }
});
