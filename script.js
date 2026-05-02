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




let currentIndex = 0;

function getProjects() {
    return document.querySelectorAll(".project");
}

function updateCarousel() {
    const projects = getProjects();

    projects.forEach((proj, i) => {
        proj.classList.remove("active", "left", "right");

        if (i === currentIndex) {
            proj.classList.add("active");
        } 
        else if (i === currentIndex - 1) {
            proj.classList.add("left");
        } 
        else if (i === currentIndex + 1) {
            proj.classList.add("right");
        }
    });
}

function nextProject() {
    const projects = getProjects();
    if (currentIndex < projects.length - 1) {
        currentIndex++;
        updateCarousel();
    }
}

function prevProject() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

window.addEventListener("DOMContentLoaded", updateCarousel);