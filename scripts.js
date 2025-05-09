// Función para generar runas basadas en el nombre (en este caso, las marcas)
function generarRuna(nombre) {
    const runas = ['ᛞ', 'ᚱ', 'ᚹ', 'ᛇ', 'ᛉ', 'ᛋ', 'ᛒ', 'ᛗ'];
    let runaGenerada = '';
    for (let i = 0; i < nombre.length; i++) {
        const indice = nombre.charCodeAt(i) % runas.length;
        runaGenerada += runas[indice];
    }
    return runaGenerada;
}

// Función para guardar y mostrar runas generadas (ejemplo de renacimiento de marcas)
function guardarRuna() {
    const nombreMarca = document.getElementById('nombre').value.trim();
    if (nombreMarca !== '') {
        const runa = generarRuna(nombreMarca);
        const listaRituales = document.getElementById('lista-rituales');
        const itemRitual = document.createElement('li');
        itemRitual.innerHTML = `<h3>Runa para ${nombreMarca}</h3><p>${runa}</p><p><strong>Renace de sus cenizas.</strong></p>`;
        listaRituales.appendChild(itemRitual);
    }
}

// Función para mostrar el renacimiento de las marcas
function mostrarRenacimiento() {
    const mensaje = document.getElementById('mensaje-renacimiento');
    mensaje.innerHTML = '<p><strong>PhoenixFrame es la herramienta para que las marcas dejen de seguir las tendencias y comiencen a CREARLAS.</strong></p><p>Como el fénix renace de sus cenizas, las marcas que adoptan PhoenixFrame transforman su esencia y definen su propio futuro.</p>';
}

// Inicializar partículas (con colores dorados y violetas, como un renacer dorado)
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 700
            }
        },
        "color": {
            "value": "#9b6cd3" // Violeta, representando el renacimiento
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 0.5,
                "opacity_min": 0.1
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.1
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#9b6cd3", // Violeta
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "random",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles": {
                    "number": 4,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                }
            }
        }
    },
    "retina_detect": true
});
