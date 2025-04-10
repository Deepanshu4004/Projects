// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Select all the input fields and buttons in the form
    const inputs = document.querySelectorAll('.input, .form-btn, .apple-login-button, .google-login-button');

    // Fade-in animation for inputs
    inputs.forEach((input, index) => {
        input.style.opacity = 0;
        input.style.transform = 'translateY(20px)';
        setTimeout(() => {
            input.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            input.style.opacity = 1;
            input.style.transform = 'translateY(0)';
        }, index * 150); // Delay staggered for each input
    });

    // Scale effect on button hover
    const buttons = document.querySelectorAll('.form-btn, .apple-login-button, .google-login-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            button.style.transition = 'transform 0.2s ease';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Add a click event to the Sign Up link to trigger an alert
    const signUpLink = document.querySelector('.sign-up-link');
    signUpLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        alert("Redirecting to Sign Up page..."); // Placeholder alert for the actual functionality
        // Here you can redirect to the sign-up page, e.g.:
        // window.location.href = '/signup';
    });
});
