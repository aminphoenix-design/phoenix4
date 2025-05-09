// Función que se ejecuta al hacer clic en los pilares
function mostrarTexto(pilar) {
  const descripcion = document.getElementById('descripcion-texto');

  // Mostrar la descripción de cada pilar
  switch (pilar) {
    case 'tiempo':
      descripcion.innerHTML = `<strong>Tiempo:</strong> El tiempo no fluye. Se pliega. Solo aquellos que entienden su flujo pueden manipularlo, alterando el pasado y el futuro a su antojo. La adquisición del Pilar del Tiempo requiere paciencia y conocimiento profundo del universo.`;
      break;
    case 'vida':
      descripcion.innerHTML = `<strong>Vida:</strong> Una danza entre el caos y el soplo divino. La vida es un ciclo interminable de creación y destrucción. Para adquirir el Pilar de la Vida, es necesario tener un corazón puro y la capacidad de nutrir la esencia vital del mundo.`;
      break;
    case 'muerte':
      descripcion.innerHTML = `<strong>Muerte:</strong> La muerte te transforma. Es la puerta al más allá, donde se forjan las almas. El Pilar de la Muerte es un misterio, solo aquellos que aceptan su inevitable final pueden comprender su poder.`;
      break;
    case 'poder':
      descripcion.innerHTML = `<strong>Poder:</strong> El poder se invoca, no se impone. Solo quienes tienen el control de sí mismos pueden dominar este pilar. El Pilar del Poder es otorgado a aquellos que buscan la fuerza sin dejarse consumir por ella.`;
      break;
    default:
      descripcion.innerHTML = '';
  }

  // Desplegar la descripción con una animación
  const descripcionPilar = document.getElementById('descripcion-pilar');
  descripcionPilar.style.display = 'block';
  descripcionPilar.classList.add('fade-in');
}

// Función para generar una runa personalizada a partir del nombre
function generarRuna(nombre) {
  // Definimos un conjunto de caracteres para formar una runa única
  const runaBase = ["ᛗ", "ᛖ", "ᚱ", "ᛚ", "ᛟ", "ᚾ", "ᛁ", "ᚴ", "ᛋ", "ᚻ", "ᛇ", "ᚻ", "ᛒ"];
  
  // Transformamos el nombre en una runa combinando caracteres
  let runaGenerada = "";
  for (let i = 0; i < nombre.length; i++) {
    const indice = nombre.charCodeAt(i) % runaBase.length; // Usamos el código ASCII de la letra
    runaGenerada += runaBase[indice];
  }

  // Mostrar la runa generada
  const contenedorRuna = document.getElementById("runa-generada");
  contenedorRuna.textContent = `Runa Generada: ${runaGenerada}`;
  contenedorRuna.style.display = "block";

  // Guardar la runa en el almacenamiento local para que sea visible en otras sesiones
  localStorage.setItem("runaGenerada", runaGenerada);
}

// Función para cargar la runa previamente generada
function cargarRuna() {
  const runa = localStorage.getItem("runaGenerada");
  if (runa) {
    const contenedorRuna = document.getElementById("runa-generada");
    contenedorRuna.textContent = `Runa Generada: ${runa}`;
    contenedorRuna.style.display = "block";
  }
}

// Inicialización de tsParticles para las partículas de fondo
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
      value: ["#8a2be2", "#ffcc00"] // Colores de las partículas (violeta y dorado)
    },
    shape: {
      type: "circle", // Forma circular de las partículas
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
      color: "#ffcc00", // Color de los enlaces entre las partículas
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
        mode: "repulse" // Repulsión al pasar el ratón
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

// Llamar a la función para cargar la runa cuando la página se cargue
window.onload = function() {
  cargarRuna();
};
