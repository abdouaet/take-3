document.addEventListener('DOMContentLoaded', function() {
    const stickyCartBar = document.querySelector('.sticky-cart-bar');
    const expressCheckoutSection = document.getElementById('express-checkout-section');
    
    if (!stickyCartBar || !expressCheckoutSection) return;

    // Initially hide the sticky cart bar
    stickyCartBar.classList.remove('show');

    document.addEventListener('scroll', function() {
        const rect = expressCheckoutSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (!isVisible) {
            stickyCartBar.classList.add('show'); // Show the sticky button
        } else {
            stickyCartBar.classList.remove('show'); // Hide the sticky button
        }
    });
});

// Select the sticky quantity selector
const quantities = document.querySelectorAll('.quantity');
if (quantities.length > 1) {
    const stickyQuantity = quantities[1];  // Only access if there are at least two elements
    stickyQuantity.classList = "sticky quantity";
}