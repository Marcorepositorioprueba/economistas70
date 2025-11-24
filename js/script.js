document.addEventListener('DOMContentLoaded', function () {
    // --- Lógica para el menú móvil ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
        });
    }

    // --- Lógica para la animación de aparición al desplazar ---
    const sectionsToFade = document.querySelectorAll('.fade-in-section');

    if (sectionsToFade.length > 0) {
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -100px 0px' // El elemento aparecerá cuando esté a 100px de la parte inferior de la pantalla
        });

        sectionsToFade.forEach(section => {
            sectionObserver.observe(section);
        });
    }
});
