document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        if (usernameInput === 'exampleUser' && passwordInput === 'examplePassword') {
            alert('Login successful!');
        } else {
            alert('Invalid username or password. Please try again.');
        }

        loginForm.reset();
    });
});