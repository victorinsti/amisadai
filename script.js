document.addEventListener("DOMContentLoaded", () => {

    const nav = document.getElementById("navbar");
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("nav-links");

    /* MENÚ MÓVIL */
    if (btn && menu) {

        // Mostrar el botón desde el inicio
        btn.textContent = "MENÚ";

        btn.addEventListener("click", () => {

            const abierto = menu.classList.toggle("active");

            btn.textContent = abierto ? "CERRAR" : "MENÚ";

        });

        // Cerrar menú al seleccionar una página
        menu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("active");
                btn.textContent = "MENÚ";

            });

        });
    }


    /* NAVBAR AL HACER SCROLL */

    const onScroll = () => {

        if (nav) {
            nav.classList.toggle("scrolled", window.scrollY > 30);
        }

    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
        passive: true
    });


    /* ANIMACIONES */

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.08
        }
    );


    document
        .querySelectorAll(".card, .course-card, .kids-card, .hero-content")
        .forEach(element => {

            element.style.opacity = "0";
            element.style.transform = "translateY(24px)";
            element.style.transition =
                "opacity .65s ease, transform .65s ease";

            observer.observe(element);

        });


    /* ESTILO PARA ELEMENTOS VISIBLES */

    const style = document.createElement("style");

    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;

    document.head.appendChild(style);

});