document.getElementById('registration-form').addEventListener('submit', validateForm);

function validateForm(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const state = document.getElementById('state').value.trim();
    const country = document.getElementById('country').value.trim();
    const language = document.querySelectorAll('input[name="language"]:checked');
    const declaration = document.getElementById('declaration').checked;

    const errorMessages = document.getElementsByClassName('error-message');
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].textContent = '';
    }

    let hasError = false;

    if (firstName === '') {
        displayErrorMessage('first-name', 'POOR');
        hasError = true;
    }

    if (lastName === '') {
        displayErrorMessage('last-name', 'POOR');
        hasError = true;
    }

    if (email === '') {
        displayErrorMessage('email', 'POOR');
        hasError = true;
    }

    if (password === '') {
        displayErrorMessage('password', 'POOR');
        hasError = true;
    }

    if (confirmPassword === '') {
        displayErrorMessage('confirm-password', 'POOR OR MISMATCH');
        hasError = true;
    } else if (password !== confirmPassword) {
        displayErrorMessage('confirm-password', 'POOR OR MISMATCH');
        hasError = true;
    }

    if (gender === '') {
        displayErrorMessage('gender', 'POOR');
        hasError = true;
    }

    if (age === '') {
        displayErrorMessage('age', 'POOR');
        hasError = true;
    }

    if (phone === '') {
        displayErrorMessage('phone', 'POOR');
        hasError = true;
    }

    if (address === '') {
        displayErrorMessage('address', 'POOR');
        hasError = true;
    }

    if (state === '') {
        displayErrorMessage('state', 'POOR');
        hasError = true;
    }

    if (country === '') {
        displayErrorMessage('country', 'POOR');
        hasError = true;
    }

    if (language.length === 0) {
        displayErrorMessage('language', 'POOR');
        hasError = true;
    }

    if (!declaration) {
        displayErrorMessage('declaration', 'POOR');
        hasError = true;
    }

    if (!hasError) {
        console.log('Form submitted!');
    }
}

function toggleSubmit() {
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = !submitButton.disabled;
}

function displayErrorMessage(inputId, message) {
    const errorMessage = document.querySelector(`#${inputId} + .error-message`);
    errorMessage.textContent = message;
}