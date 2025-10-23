document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(drop => {
        // Buscamos preferentemente un toggle con clase .dropdown-toggle,
        // si no existe, usamos el primer <a> directo dentro de .dropdown
        let toggle = drop.querySelector('.dropdown-toggle');
        if (!toggle) {
            toggle = drop.querySelector(':scope > a') || drop.querySelector('a');
        }
        const menu = drop.querySelector('.dropdown-menu');

        if (!menu || !toggle) return;

        // accesibilidad: estado inicial
        toggle.setAttribute('aria-expanded', 'false');

        // Cuando se hace click en el toggle: prevenir navegación, mostrar y
        // detener propagación para que el listener de document no lo cierre.
        toggle.addEventListener('click', (e) => {
            // si el href es '#', prevenir salto; de lo contrario no prevenir la navegación
            if (toggle.getAttribute('href') === '#' || toggle.getAttribute('href') === null) {
                e.preventDefault();
            }

            e.stopPropagation(); // <-- lo importante: evita que document lo cierre
            menu.classList.toggle('show');

            const expanded = menu.classList.contains('show');
            toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        });

        // evitar que clicks dentro del menú se propaguen al document
        menu.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // (opcional) cerrar el menú al elegir un item dentro del dropdown
        menu.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.remove('show');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    });

    // Cerrar cualquier dropdown si se hace click fuera
    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-menu.show').forEach(openMenu => {
            openMenu.classList.remove('show');
            const parent = openMenu.closest('.dropdown');
            if (parent) {
                const a = parent.querySelector('.dropdown-toggle') || parent.querySelector('a');
                if (a) a.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => menu.classList.remove('show'));
            document.querySelectorAll('.dropdown a[aria-expanded="true"]').forEach(a => a.setAttribute('aria-expanded', 'false'));
        }
    });
});
