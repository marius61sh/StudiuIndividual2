let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCartItems() {
    const orderItemsContainer = document.querySelector('.order-items');
    orderItemsContainer.innerHTML = '';

    let totalItems = 0;
    for (let item of cart) {
        totalItems += item.quantity;
    }
    const summaryHeader = document.createElement('p');
    
    if (totalItems >= 1) {
        summaryHeader.textContent = `${totalItems} item(s) in Cart`;
    }
    
    orderItemsContainer.appendChild(summaryHeader);

    cart.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <img src="${item.image || 'Images/placeholder.jpg'}" alt="${item.name}">
            <div class="item-details">
                <p>${item.name}</p>
                <p>Qty: ${item.quantity} <span class="summary-price"> $${(item.price * item.quantity).toFixed(2)}</span></p>
            </div>
        `;

        orderItemsContainer.appendChild(orderItem);
    });
}



document.addEventListener('DOMContentLoaded', function() {
    renderCartItems();
});