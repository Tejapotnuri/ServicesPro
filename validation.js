document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');
    const userEmailSpan = document.getElementById('userEmail');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        clearErrorMessages();

        const fieldsToValidate = ['fname', 'lname', 'email', 'mobile', 'company', 'password', 'confirm-password'];

        let isValid = true;

        fieldsToValidate.forEach(fieldName => {
            const fieldElement = document.getElementById(fieldName);
            const errorElement = document.getElementById(`${fieldName}Error`);

            if (!fieldElement.value.trim()) {
                displayError(fieldElement, errorElement, 'This field is required.');
                isValid = false;
            }
        });

        const email = document.getElementById('email').value.trim();
        if (!isValidEmail(email)) {
            const errorElement = document.getElementById('emailError');
            displayError(document.getElementById('email'), errorElement, 'Invalid email format.');
            isValid = false;
        }

        const password = document.getElementById('password').value.trim();
        if (password.length < 8) {
            const errorElement = document.getElementById('passwordError');
            displayError(document.getElementById('password'), errorElement, 'Password must be at least 8 characters long.');
            isValid = false;
        }

        const confirmPassword = document.getElementById('confirm-password').value.trim();

        if (password !== confirmPassword) {
            const errorElement = document.getElementById('confirm-passwordError');
            displayError(null, errorElement, 'Passwords do not match. Please check and try again.');
            isValid = false;
        }

        const mobile = document.getElementById('mobile').value.trim();
        if (!isValidMobile(mobile)) {
            const errorElement = document.getElementById('mobileError');
            displayError(document.getElementById('mobile'), errorElement, 'Invalid mobile number format.');
            isValid = false;
        }

        if (isValid) {
            // Display success message and hide the form
            successMessage.style.display = 'block';
            userEmailSpan.innerText = email;
            form.style.display = 'none';
        }
    });

    const inputElements = document.querySelectorAll('.input-field');

    inputElements.forEach(inputElement => {
        inputElement.addEventListener('input', function () {
            const errorElement = document.getElementById(`${inputElement.id}Error`);
            if (errorElement) {
                errorElement.innerText = '';
                errorElement.style.visibility = 'hidden';
                inputElement.style.border = '1px solid #cdeaeb'; // Reset border
            }
        });
    });

    function displayError(fieldElement, errorElement, errorMessage) {
        if (fieldElement) {
            fieldElement.style.border = '1px solid red';
        }
        if (errorElement) {
            errorElement.innerText = errorMessage;
            errorElement.style.visibility = 'visible';
        }
    }

    function clearErrorMessages() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.innerText = '';
            element.style.visibility = 'hidden';
        });
    }

    function isValidEmail(email) {
        // You can use a more robust email validation regex if needed
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidMobile(mobile) {
        const mobileRegex = /^[6789]\d{9}$/; // Starts with 6, 7, 8, or 9 and has 10 digits
        return mobileRegex.test(mobile);
    }
});