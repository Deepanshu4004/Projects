// Script for basic animations and interactivity

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('main input');

    // Add initial styles for the search input
    searchInput.style.borderRadius = '20px'; // Curve the corners
    searchInput.style.padding = '10px 15px'; // Add some padding
    searchInput.style.border = '2px solid #ccc'; // Border style
    searchInput.style.outline = 'none'; // Remove default outline
    searchInput.style.transition = 'width 0.5s ease, border-color 0.3s ease'; // Add transition for width and border color

    // Animate input field on focus
    searchInput.addEventListener('focus', function () {
        searchInput.style.width = '350px'; // Expand width on focus
        searchInput.style.borderColor = '#007bff'; // Change border color on focus
    });

    // Return to normal size when not in focus
    searchInput.addEventListener('blur', function () {
        searchInput.style.width = '300px'; // Shrink width on blur
        searchInput.style.borderColor = '#ccc'; // Reset border color
    });
});
