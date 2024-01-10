
    document.addEventListener('DOMContentLoaded', () => {

        const loginForm = document.querySelector("#login");
        const CreateAccountForm = document.querySelector("#CreateAccount");
        let container2 = document.getElementById("container2");

        // hide initially both forms
        container2.style.opacity = 0;
        loginForm.classList.add("form_hidden");
        CreateAccountForm.classList.add("form_hidden");
     
        let delay = 5000;
        setTimeout(() => {

container2.style.opacity = 1;
            loginForm.classList.add("form_hidden");
            CreateAccountForm.classList.remove("form_hidden");
        },delay);

        setTimeout(() => {
            container2.style.opacity = 1;
            CreateAccountForm.classList.add("form_hidden");
           loginForm.classList.remove("form_hidden");
        },delay);

        // Switch between Login and Create Account forms

        document.querySelector("#linkCreateAccount").addEventListener("click", (e) => {
            e.preventDefault();
            loginForm.classList.add("form_hidden");
            CreateAccountForm.classList.remove("form_hidden");
        });

        const closeButtonLogin = document.querySelector('#btnone');
        const closeButtonCreateAccount = document.querySelector('#btnone1');
        closeButtonLogin.addEventListener('click', function() {
       
            loginForm.style.display = 'none'; // Hide the login form
            container2.style.display = 'none';
            
        });

        closeButtonCreateAccount.addEventListener('click', function() {
            CreateAccountForm.style.display = 'none'; // Hide the create account form
            container2.style.display = 'none';
        });
    
        document.querySelector("#linkLogin").addEventListener("click", (e) => {
            e.preventDefault();
            loginForm.classList.remove("form_hidden");
            CreateAccountForm.classList.add("form_hidden");
        });
    
        loginForm.addEventListener("submit", e => {
            e.preventDefault();
            const username = document.querySelector("#username");
            const userpassword = document.querySelector("#password");
            const usernameValue = username.value.trim();
            const passwordValue = userpassword.value;
            let isValid = true;
    
            if (usernameValue.length === 0) {
                setInputError(username, "Username cannot be empty");
                isValid = false;
            }
            if (passwordValue.length < 8) {
                setInputError(userpassword, "Password must be at least 8 characters");
                isValid = false;
            }
            if (isValid) {
                setFormMessage(loginForm, "success", "login  successfully!");
                clearErrors(loginForm); 
            }
            else{
                setFormMessage(loginForm, "error", "Invalid Username/password combination");
            }
    
        });
    
        function clearErrors(formElement) {
            // Remove error styling from all input elements
            formElement.querySelectorAll(".form_input").forEach(inputElement => {
                inputElement.classList.remove("form_input-error");
            });
        
            // Clear error messages
            formElement.querySelectorAll(".form_input-error-message").forEach(errorMessageElement => {
                errorMessageElement.textContent = "";
            });
        
            // Clear form messages
            setFormMessage(formElement, "success", "Your account created Successfully!"); 
        }

        CreateAccountForm.addEventListener("submit", e => {
            e.preventDefault();
    
            const usernameInput = document.querySelector("#SignupUsername");
            const emailInput = document.querySelector("#email");
            const passwordInput = document.querySelector("#SignupPassword"); 
            const confirmPasswordInput = document.querySelector("#SignupConfirmPassword");
           
    
            const usernameValue = usernameInput.value.trim();
            const emailValue = emailInput.value.trim();
            const passwordValue = passwordInput.value;
            const confirmPasswordValue = confirmPasswordInput.value;
    
            let isValid = true;
    
            if (usernameValue.length === 0) {
                setInputError(usernameInput, "Username cannot be empty");
                isValid = false;
            }
    
            if (emailValue.length === 0 || !isValidEmail(emailValue)) {
                setInputError(emailInput, "Invalid email address");
                isValid = false;
            }
    
            if (passwordValue.length < 8) {
                setInputError(passwordInput, "Password must be at least 8 characters");
                isValid = false;
            }
    
            if (passwordValue !== confirmPasswordValue) {
                setInputError(confirmPasswordInput, "Passwords do not match");
                isValid = false;
            }
    
            if (isValid) {
                setFormMessage(CreateAccountForm, "success", "Account created successfully!");
                clearErrors(CreateAccountForm);
             
            }
        });
    
        // Validation on blur events for CreateAccountForm

        document.querySelectorAll(".form_input").forEach(inputElement => {
            inputElement.addEventListener("blur", e => {
                if (e.target.id === "SignupUsername" && (e.target.value.length > 0 && e.target.value.length < 10)) {
                    setInputError(inputElement, "Username must be 10 characters in length");
                }
    
                if (e.target.id === "email" && (e.target.value.length > 0 && e.target.value.length < 10)) {
                    setInputError(inputElement, "Email address must be 10 characters in length");
                }
            });
        });
    });
    
    function setFormMessage(formElement, type, message) {
        const messageElement = formElement.querySelector(".form_message");
    
        messageElement.textContent = message;
    
        messageElement.classList.remove("form_message--success", "form_message--error");
        messageElement.classList.add(`form_message--${type}`);
    }
    
    function setInputError(inputElement, message) {
        inputElement.classList.add("form_input-error");
        inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    let eyeclose = document.getElementById("eye-close");
    let password = document.getElementById("password");
    let signuppassword = document.getElementById("SignupPassword");
    eyeclose.onclick = function () {
         
        if (password.type === "password") {
               
            password.type = "text";
            eyeclose.src = "eye-open.png";
            }
    
             else {
                password.type = "password";
                eyeclose.src = "eye-close.png";
            }
        }
    
        // For the eye-close functionality
        let eyeclose1 = document.getElementById("eye-close2");
    eyeclose1.onclick = function () {
        if (signuppassword.type === "password") {
            signuppassword.type = "text";
            eyeclose1.src = "eye-open.png";
        } else {
            signuppassword.type = "password";
            eyeclose1.src = "eye-close.png";
        }
    };

