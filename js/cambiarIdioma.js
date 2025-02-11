const flagImage = document.getElementById('flag-image');
const languageKey = "language";
const defaultLanguage = "es"; // Idioma por defecto
let currentLanguage = localStorage.getItem(languageKey) || defaultLanguage;

// Objeto con las rutas de las banderas y textos alternativos
const flagData = {
    es: { src: "img/bandera_Ecuador.png", alt: "English" },
    en: { src: "img/bandera_eu.png", alt: "Español" }
};

// Función para actualizar el contenido según el idioma
function updateLanguage() {
    // Actualizar textos
    document.querySelectorAll('[data-es][data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLanguage}`);
    });

    // Actualizar imagen de la bandera
    flagImage.src = flagData[currentLanguage].src;
    flagImage.alt = flagData[currentLanguage].alt;
}

// Función para cambiar el idioma
function toggleLanguage() {
    currentLanguage = currentLanguage === "es" ? "en" : "es"; // Cambiar idioma
    localStorage.setItem(languageKey, currentLanguage); // Guardar preferencia en localStorage
    updateLanguage(); // Aplicar cambios
}

// Asignar evento de clic a la bandera
flagImage.addEventListener('click', toggleLanguage);

// Cargar el idioma guardado al iniciar
updateLanguage();