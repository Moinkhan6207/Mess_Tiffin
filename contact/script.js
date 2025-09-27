document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.textContent = menuToggle.textContent === "☰" ? "✖" : "☰";
    });

    // Contact form validation
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        contactForm.reset();
    });
});
