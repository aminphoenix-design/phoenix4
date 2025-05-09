document.addEventListener("DOMContentLoaded", () => {
    const btnsVisiones = document.querySelectorAll(".btn-ver-vision");
    const modal = document.getElementById("vision-modal");
    const cerrarModal = document.querySelector(".cerrar");
    const nombrePilar = document.getElementById("nombre-pilar");
    const contenidoVision = document.getElementById("contenido-vision");

    // Definir las visiones de cada pilar
    const visiones = {
        tiempo: "El Pilar del Tiempo te revela cómo dominar el flujo del presente, aprender del pasado y proyectar tu poder hacia el futuro. El tiempo es una ilusión, y tú eres el arquitecto de tu destino.",
        vida: "El Pilar de la Vida te conecta con la energía primordial de la creación. Siente cómo fluye la fuerza vital, renovando todo lo que tocas. El ciclo de la vida y la muerte es solo un continuo renacer.",
        muerte: "La Muerte no es un final, sino una transformación. Al comprender su naturaleza, puedes transcender tus limitaciones y alcanzar una sabiduría ancestral que solo unos pocos alcanzan.",
        poder: "El Pilar del Poder es el equilibrio entre el conocimiento y la acción. El poder verdadero no se impone, sino que se cultiva. A través de la conexión con los otros pilares, el poder fluye con sabiduría y propósito."
    };

    // Mostrar visión cuando se hace clic en un pilar
    btnsVisiones.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const pilar = e.target.getAttribute("data-pilar");
            nombrePilar.textContent = pilar.charAt(0).toUpperCase() + pilar.slice(1);
            contenidoVision.textContent = visiones[pilar];
            modal.style.display = "block"; // Mostrar modal
        });
    });

    // Cerrar el modal cuando se hace clic en la 'X' o fuera del modal
    cerrarModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
