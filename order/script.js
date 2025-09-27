// ------------------ Populate Dish & Price from query string ------------------
const urlParams = new URLSearchParams(window.location.search);
const dishInput = document.getElementById("dish");
const priceInput = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const totalInput = document.getElementById("total");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");
const landmarkInput = document.getElementById("landmark");
const paymentInput = document.getElementById("payment");
const instructionsInput = document.getElementById("instructions");




// 🟢 AUTO-FILL DISH & PRICE FROM MENU PAGE
dishInput.value = urlParams.get("item") || "";
priceInput.value = urlParams.get("price") || 0;
totalInput.value = priceInput.value; // Total initially same as price

// 🟢 AUTO CALCULATE TOTAL PRICE ON QUANTITY CHANGE
quantityInput.addEventListener("input", () => {
    let total = Number(priceInput.value) * Number(quantityInput.value);
    totalInput.value = total;
});

// ------------------ FORM SUBMISSION ------------------
const orderForm = document.getElementById("orderForm");
const confirmationMsg = document.getElementById("confirmation");

orderForm.addEventListener("submit", (e) => {
    // e.preventDefault(); // prevent default form submission

    // Basic Validation
    const phone = document.getElementById("phone").value.trim();
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const quantity = quantityInput.value;
    const dish = dishInput.value;
    const total = totalInput.value;
    const price = priceInput.value;

    const cleanPhone = phone.replace(/\D/g, "");

    if (name === "" || cleanPhone.length !== 10 || address === "") {
        alert("Please fill all required fields correctly!");
        return;
    }

    // ✅ Date bhi add karenge
    const date = new Date().toLocaleString();



    // 🟢 DISPLAY ORDER CONFIRMATION WITH DETAILS
    confirmationMsg.style.display = "block";
    confirmationMsg.innerHTML = `
        ✅ Your Order has been placed successfully! <br>
        <strong>Dish:</strong> ${dish} <br>
        <strong>Quantity:</strong> ${quantity} <br>
        <strong>Total Price:</strong> ₹${total} <br>
        <strong>Name:</strong> ${name} <br>
        <strong>Price:</strong> ₹${price} <br>
        <strong>Address:</strong> ${address}
    `;
    confirmationMsg.style.color = "green";

    // // 🟢 RESET FORM (Quantity reset to 1, Total reset to Price)
    // orderForm.reset();
    // quantityInput.value = 1;
    // totalInput.value = priceInput.value;


    setTimeout(() => {
        orderForm.reset();
        quantityInput.value = 1;
        totalInput.value = priceInput.value;
    }, 2000); // 2 sec delay

});
