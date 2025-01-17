document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".titulo, .subtitulo");

    toggles.forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            const submenu = toggle.nextElementSibling;

            if (submenu && submenu.classList.contains("submenu")) {
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            }
        });
    });
});
