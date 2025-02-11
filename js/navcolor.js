// Selección de elementos
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.navbar-brand img');
const links = document.querySelectorAll('.navbar-nav li a');
const searchIcon = document.querySelector('.search-icon'); // Asegúrate de que existe en el HTML
const toggler = document.querySelector('.navbar-toggler');

// Verifica si estás en el index.html
const isIndex = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');

// Función para manejar el cambio de estilos en el navbar
const handleNavbarStyle = () => {
    const scrollPosition = window.scrollY;
    const isScrolled = scrollPosition > 100;

    navbar.classList.toggle('navbar-dark', isScrolled);
    navbar.classList.toggle('navbar-transparent', !isScrolled && isIndex);
    navbar.classList.toggle('navbar-light', !isScrolled && !isIndex);

    logo.classList.toggle('invert-logo', isScrolled);
    links.forEach(link => link.classList.toggle('text-white', isScrolled));
    links.forEach(link => link.classList.toggle('text-black', !isScrolled));
    
    if (searchIcon) {
        searchIcon.classList.toggle('text-white', isScrolled);
        searchIcon.classList.toggle('text-black', !isScrolled);
    }

    // Modificar el estilo del toggler
    if (toggler) {
        toggler.classList.toggle('navbar-toggler-dark', isScrolled);
        toggler.classList.toggle('navbar-toggler-light', !isScrolled);
    }
};

// Evento de desplazamiento
window.addEventListener('scroll', handleNavbarStyle);

// Aplicar estilos iniciales al cargar la página
document.addEventListener('DOMContentLoaded', handleNavbarStyle);
