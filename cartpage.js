// cart.js
document.addEventListener('DOMContentLoaded', function() {
    const cartItemsList = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');

    // Retrieve cart items from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Render cart
    function renderCart() {
        cartItemsList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}
                            <button class="remove-from-cart" data-id="${item.id}">Remove</button>`;
            cartItemsList.appendChild(li);
            total += item.price * item.quantity;
        });

        cartTotal.innerText = total.toFixed(2);

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-id');
                removeFromCart(productId);
            });
        });
    }

    // Remove product from cart
    function removeFromCart(productId) {
        const index = cart.findIndex(item => item.id === productId);
        if (index !== -1) {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            } else {
                cart.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        }
    }

    renderCart();
});
