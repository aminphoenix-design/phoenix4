// Función para generar la runa a partir del nombre
function generarRuna(nombre) {
  const runas = ["ᚠ", "ᚱ", "ᛏ", "ᛒ", "ᚷ", "ᚹ", "ᛇ", "ᛖ", "ᛗ", "ᛚ", "ᛟ", "ᛞ", "ᛃ", "ᛣ"]; // Lista de runas
  let runaGenerada = "";
  for (let i = 0; i < nombre.length; i++) {
    const index = nombre.charCodeAt(i) % runas.length;  // Usar el código del caracter para obtener un índice
    runaGenerada += runas[index];  // Generar runa por cada letra del nombre
  }
  return runaGenerada;
}

// Función para mostrar la runa generada
function mostrarRuna() {
  const nombreUsuario = prompt("Ingresa tu nombre para generar una runa:");
  const runa = generarRuna(nombreUsuario);
  document.getElementById("runa").innerText = runa;  // Asignar la runa al elemento con id "runa"

  // Guardar la runa en el localStorage
  let runasGuardadas = JSON.parse(localStorage.getItem('runas')) || []; // Obtener las runas guardadas
  runasGuardadas.push({ nombre: nombreUsuario, runa: runa }); // Guardar nueva runa
  localStorage.setItem('runas', JSON.stringify(runasGuardadas)); // Actualizar el localStorage
}

// Llamar a la función para mostrar la runa al cargar la página
window.onload = mostrarRuna;

// Mostrar las runas guardadas en la página de ritual
function mostrarRunasGuardadas() {
  const runasGuardadas = JSON.parse(localStorage.getItem('runas')) || []; // Obtener las runas guardadas
  const listaRituales = document.getElementById("lista-rituales");

  runasGuardadas.forEach((runaObj) => {
    const divRuna = document.createElement("div");
    divRuna.classList.add("runa-item");
    divRuna.innerHTML = `<p><strong>${runaObj.nombre}</strong>: ${runaObj.runa}</p>`;
    listaRituales.appendChild(divRuna);
  });
}

// Inicializar las partículas
tsParticles.load("particles-js", {
  particles: {
    number: {
      value: 80, // Número de partículas
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#8a2be2", "#ffcc00"] // Colores de partículas (violeta y dorado)
    },
    shape: {
      type: "circle", // Forma circular
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false
      }
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffcc00", // Color de los enlaces
      opacity: 0.4,
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
      onhover: {
        enable: true,
        mode: "repulse" // Modo repulsión al pasar el ratón
      },
      onclick: {
        enable: true,
        mode: "push" // Añadir más partículas al hacer clic
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
