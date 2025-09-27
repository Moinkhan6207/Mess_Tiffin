// 🔎 Search Filter
const searchBar = document.getElementById("searchBar");
const cards = document.querySelectorAll(".menu-card");

searchBar.addEventListener("keyup", (e) => {
    let searchValue = e.target.value.toLowerCase();
    cards.forEach(card => {
        let name = card.querySelector("h3").textContent.toLowerCase();
        if (name.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// 🔖 Category Filter
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        let category = btn.dataset.category;
        cards.forEach(card => {
            if (category === "all" || card.dataset.category === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});


// 🔗 Auto-update Order Now buttons with dish name & price
const menuCards = document.querySelectorAll(".menu-card");

menuCards.forEach(card => {
    const dish = card.querySelector("h3").textContent.trim();
    const price = card.querySelector("span").textContent.replace("₹", "").trim();
    const orderBtn = card.querySelector("a");

    // Update the link dynamically
    orderBtn.href = `../order/index.html?item=${encodeURIComponent(dish)}&price=${price}`;
});





