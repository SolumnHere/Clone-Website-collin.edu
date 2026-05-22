document.addEventListener('DOMContentLoaded', () => {
    const loginSwitch = document.querySelector(".login-switch"); 
    const registerSwitch = document.querySelector(".register-switch");
    const loginForm = document.querySelector(".login");
    const registerForm = document.querySelector(".register");

    if (loginSwitch) {
        loginSwitch.addEventListener('click', (e) => {
            e.preventDefault();
            registerForm.classList.remove("active");
            loginForm.classList.add("active");
        })
    }

    if (registerSwitch) {
        registerSwitch.addEventListener('click', (e) => { 
            e.preventDefault();
            registerForm.classList.add("active");
            loginForm.classList.remove("active");
        })
    }
})