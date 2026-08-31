/* =========================================
   MENÚ NAVEGACIÓN PARA CELULAR
========================================= */
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("activo");
    });
}

const enlaces = document.querySelectorAll("#menu a");
enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("activo");
    });
});


/* =========================================
   TALLER PASO 1, 3 Y 4: EVALUACIÓN DE RIESGO
========================================= */
const formulario = document.getElementById("formRiesgo");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        // PASO 1: Capturando la Realidad del Usuario mediante parseInt()
        const techo = parseInt(document.getElementById('select-techo').value);
        const drenaje = parseInt(document.getElementById('select-drenaje').value);
        const zona = parseInt(document.getElementById('select-zona').value);
        const antiguedad = parseInt(document.getElementById('select-antiguedad').value);
        const plan = parseInt(document.getElementById('select-plan').value);

        if (isNaN(techo) || isNaN(drenaje) || isNaN(zona) || isNaN(antiguedad) || isNaN(plan)) {
            alert("Por favor selecciona una opción en todas las preguntas.");
            return;
        }

        // Suma total de puntos
        const puntajeTotal = techo + drenaje + zona + antiguedad + plan;

        let claseEstilo = "";
        let textoResultado = "";

        // PASO 3: Codificando las Decisiones (if / else if / else)
        if (puntajeTotal <= 5) {
            claseEstilo = "alerta-verde";
            textoResultado = "Riesgo Bajo: Limpieza preventiva de canaletas.";
        } else if (puntajeTotal <= 9) {
            claseEstilo = "alerta-amarilla";
            textoResultado = "Riesgo Medio: Refuerzo de techos y mochilas de emergencia.";
        } else {
            claseEstilo = "alerta-roja";
            textoResultado = "Riesgo Alto: Protección urgente con sacos de arena y evacuación.";
        }

        // PASO 4: Inyectando Resultados en el DOM con Plantillas Literales
        const contenedor = document.getElementById("contenedor-resultado");

        contenedor.innerHTML = `
            <div class="tarjeta-resultado ${claseEstilo}">
                ${textoResultado}
            </div>
        `;

        contenedor.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
}