// Example: Button Click Event
document.addEventListener("DOMContentLoaded", () => { //browser ke andar built-in hota hai.
    const orderBtn = document.getElementById("orderBtn");

    orderBtn.addEventListener("click", () => {
        alert("Redirecting to Menu Page...");
        window.location.href = "../menu/index.html";
    });
});
