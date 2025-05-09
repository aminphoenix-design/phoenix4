// Configuración de partículas (Partículas moradas y doradas)
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#9b6cd3" // Violeta
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 0.3,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#facc15", // Dorado
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

// Función para generar una runa basada en el nombre
function generarRuna(nombre) {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let runa = "";
  for (let i = 0; i < nombre.length; i++) {
    runa += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return runa;
}

// Guardar rituales
let ritualesGuardados = JSON.parse(localStorage.getItem("ritualesGuardados")) || [];

function guardarRitual() {
  const nombre = document.getElementById("nombre").value;
  const runaGenerada = generarRuna(nombre);
  const ritual = {
    nombre: nombre,
    runa: runaGenerada,
    fecha: new Date().toLocaleString()
  };
  ritualesGuardados.push(ritual);
  localStorage.setItem("ritualesGuardados", JSON.stringify(ritualesGuardados));
  mostrarRitualesGuardados();
}

// Mostrar rituales guardados
function mostrarRitualesGuardados() {
  const ritualesLista = document.getElementById("lista-rituales");
  ritualesLista.innerHTML = "";
  ritualesGuardados.forEach(ritual => {
    const li = document.createElement("li");
    li.innerHTML = `Ritual de ${ritual.nombre} - Runa: ${ritual.runa} - Fecha: ${ritual.fecha}`;
    ritualesLista.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", mostrarRitualesGuardados);

// Mostrar las publicaciones de Profecía
function mostrarPublicaciones() {
  const publicacionesContainer = document.getElementById("publicaciones");
  const publicaciones = [
    { titulo: "El amanecer del ciclo", contenido: "Un nuevo ciclo comienza, cargado de nuevas energías y posibilidades para todos." },
    { titulo: "Los tres pilares de la transformación", contenido: "Solo aquellos que dominen los pilares podrán reescribir su destino." },
    { titulo: "La sombra se alza", contenido: "Las fuerzas oscuras emergen, pero su destino está atado al de los valientes." }
  ];

  publicaciones.forEach(publicacion => {
    const div = document.createElement("div");
    div.classList.add("publicacion");
    div.innerHTML = `
      <h3>${publicacion.titulo}</h3>
      <p>${publicacion.contenido}</p>
    `;
    publicacionesContainer.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", mostrarPublicaciones);
