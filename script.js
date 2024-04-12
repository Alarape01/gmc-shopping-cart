// script.js
document.addEventListener("DOMContentLoaded", function() {
    const decreaseButtons = document.querySelectorAll(".decrease");
    const increaseButtons = document.querySelectorAll(".increase");
    const deleteButtons = document.querySelectorAll(".delete-btn");
    const likeButtons = document.querySelectorAll(".like-btn");
    const totalPrice = document.querySelector(".total-price");

    let total = 40; // Initial total price

    updateTotalPrice();

    decreaseButtons.forEach(button => {
        button.addEventListener("click", function() {
            const quantityElement = button.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantityElement.textContent = --quantity;
                updateTotalPrice();
            }
        });
    });

    increaseButtons.forEach(button => {
        button.addEventListener("click", function() {
            const quantityElement = button.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = ++quantity;
            updateTotalPrice();
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
            const item = button.closest('.cart-item');
            const price = parseInt(item.querySelector(".item-price").textContent.slice(1)); // Remove '$' sign
            total -= price * parseInt(item.querySelector(".quantity").textContent);
            item.remove();
            updateTotalPrice();
        });
    });

    likeButtons.forEach(button => {
        button.addEventListener("click", function() {
            button.classList.toggle("liked");
        });
    });

    function updateTotalPrice() {
        let newTotal = 0;
        document.querySelectorAll(".cart-item").forEach(item => {
            const price = parseInt(item.querySelector(".item-price").textContent.slice(1)); // Remove '$' sign
            const quantity = parseInt(item.querySelector(".quantity").textContent);
            newTotal += price * quantity;
        });
        total = newTotal;
        totalPrice.textContent = total;
    }
});
