// Initialize cart items array and total price
let cartItems = [];
let cartTotal = 0;

// Function to add a product to the cart
function addToCart(productId) {
    // Simulate fetching product details from a database
    let product;
    if (productId === 1) {
        product = { id: 1, name: 'Product 1', price: 100 };
    } else if (productId === 2) {
        product = { id: 2, name: 'Product 2', price: 80 };
    }
    
    // Add product to cart
    cartItems.push(product);
    cartTotal += product.price;

    // Update cart UI
    renderCart();
}

// Function to render the cart
function renderCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartList.appendChild(li);
    });

    // Update total price
    const totalElement = document.getElementById('cart-total');
    totalElement.textContent = cartTotal.toFixed(2);

    // Update cart button with number of items
    const cartButton = document.getElementById('cart-btn');
    cartButton.textContent = `Cart (${cartItems.length})`;
}

// Function to simulate checkout (clearing the cart)
function checkout() {
    cartItems = [];
    cartTotal = 0;
    renderCart();
    alert('Thank you for your purchase!');
}

// Initial render of cart
renderCart();
