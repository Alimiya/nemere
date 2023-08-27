window.onload = function() {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        usernameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
    });

    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const loginUsernameInput = document.getElementById('login-username');
        const loginPasswordInput = document.getElementById('login-password');

        loginUsernameInput.value = '';
        loginPasswordInput.value = '';
    });
};
