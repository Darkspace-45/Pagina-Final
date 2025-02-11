(() => {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');

    const toggleDarkMode = (forceMode = null) => {
        const isDarkMode = forceMode !== null ? forceMode : !body.classList.contains("dark-mode");

        body.classList.toggle("dark-mode", isDarkMode);

        // Aplicar a elementos específicos
        const elementsToToggle = [
            ".section-title h2",
            ".about-right h1",
            "#services .service-card h4",
            "#services-kichwa .service-card h4"
        ];

        elementsToToggle.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.classList.toggle("dark-mode", isDarkMode));
        });

        // Invertir el color de íconos e imágenes
        const invertElements = [
            ".testi-item img",
            "#services .service-card .icon-box i",
            "#services-kichwa .service-card .icon-box i" 
        ];

        invertElements.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.classList.toggle("invert-color", isDarkMode));
        });

        // Invertir fondo de secciones
        document.querySelector("#services-kichwa")?.classList.toggle("invert-color", isDarkMode);
        document.querySelector("#services-catellano")?.classList.toggle("invert-color", isDarkMode);

        // Cambiar el icono
        themeIcon.textContent = isDarkMode ? '🌙' : '☀️';

        // Guardar la preferencia en localStorage
        localStorage.setItem("darkMode", isDarkMode);
    };

    // Aplicar preferencia al cargar la página
    window.addEventListener('DOMContentLoaded', () => {
        let isDarkMode = localStorage.getItem("darkMode");

        if (isDarkMode === null) {
            // Si no hay preferencia guardada, activamos el modo oscuro por defecto
            isDarkMode = "true";
        }

        toggleDarkMode(isDarkMode === "true");
    });

    // Exponer la función globalmente
    window.toggleDarkMode = () => toggleDarkMode();
})();
