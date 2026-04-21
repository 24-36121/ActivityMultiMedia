// FADE IN
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// FADE OUT ON LINK CLICK
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        const target = this.getAttribute("href");

        if (target && target.endsWith(".html")) {
            e.preventDefault();
            document.body.classList.remove("loaded");

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        }
    });
});