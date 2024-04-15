// script.js
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Event listener for add to cart buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Add product to cart
    function addToCart(event) {
        const product = event.target.parentElement;
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('h3').innerText;
        const productPrice = parseFloat(product.querySelector('p').innerText.slice(1));

        // Add item to cart in local storage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});
