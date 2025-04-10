    document.addEventListener("DOMContentLoaded", () => {
        const emailInput = document.querySelector('input[type="email"]');
        const emailSubmitButton = document.createElement("button");
        emailSubmitButton.textContent = "Get Started";
        emailSubmitButton.style.marginTop = "10px";
        emailInput.parentNode.insertBefore(emailSubmitButton, emailInput.nextSibling);

        emailSubmitButton.addEventListener("click", () => {
            const emailValue = emailInput.value.trim();
            if (validateEmail(emailValue)) {
                alert("Thank you for subscribing!");
                emailInput.value = ""; 
            } else {
                alert("Please enter a valid email address.");
            }
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    });
