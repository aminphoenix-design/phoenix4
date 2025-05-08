
document.addEventListener("DOMContentLoaded", function() {
    const botonViaje = document.querySelector('.boton');
    const revelacion = document.querySelector('.revelacion');
    const cerrarRevelacion = document.querySelector('#cerrar-revelacion');

    if (botonViaje) {
        botonViaje.addEventListener('click', function() {
            revelacion.style.display = 'flex';
            setTimeout(() => {
                revelacion.style.display = 'none';
            }, 5000);
        });
    }

    if (cerrarRevelacion) {
        cerrarRevelacion.addEventListener('click', function() {
            revelacion.style.display = 'none';
        });
    }
});
