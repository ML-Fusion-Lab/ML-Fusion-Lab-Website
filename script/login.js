// Add toggle password functionality to both login and register forms
document.addEventListener("DOMContentLoaded", function () {
  const registerButton = document.getElementById("register");
  const loginButton = document.getElementById("login");
  const container = document.getElementById("container");
  const loginForm = document.getElementById("loginForm");
  const forgotPasswordLink = document.getElementById("forgotPasswordLink");
  const forgotPasswordMessage = document.getElementById("forgotPasswordMessage");
  const loginSuccessBanner = document.getElementById("loginSuccessBanner");
  const loginDeclineBanner = document.getElementById("loginDeclineBanner");
  const registerSuccessBanner = document.getElementById("registerSuccessBanner");
  const registerDeclineBanner = document.getElementById("registerDeclineBanner");

  // Store original login form HTML for restoration later
  const originalLoginFormHTML = loginForm.innerHTML;

  // Switch to register form
  registerButton.addEventListener("click", (event) => {
    event.preventDefault();
    container.classList.add("right-panel-active");
    document.getElementById("registerForm").scrollIntoView({ behavior: "smooth" });
  });

  // Switch to login form
  loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    container.classList.remove("right-panel-active");
    document.getElementById("loginForm").scrollIntoView({ behavior: "smooth" });
  });

  // Forgot password logic
  forgotPasswordLink.addEventListener('click', function (event) {
    event.preventDefault();
    showForgotPasswordForm();
  });

  // Display forgot password form
  function showForgotPasswordForm() {
    loginForm.innerHTML = `
      <h1>Forgot Password</h1>
      <input type="email" placeholder="Enter your email" id="forgotPasswordEmail">
      <button type="button" id="forgotPasswordSubmit">Reset Password</button>
      <a href="#" id="backToLogin">Back to Login</a>
    `;

    const forgotPasswordSubmit = document.getElementById('forgotPasswordSubmit');
    const backToLoginLink = document.getElementById('backToLogin');

    // Handle password reset submission
    forgotPasswordSubmit.addEventListener('click', function () {
      const email = document.getElementById('forgotPasswordEmail').value;
      if (email === "") {
        forgotPasswordMessage.innerHTML = "<p style='color:red;'>Please enter your email.</p>";
      } else {
        forgotPasswordMessage.innerHTML = "<p style='color:green;'>A password reset link has been sent to your email.</p>";
      }
    });

    // Handle back to login click
    backToLoginLink.addEventListener('click', function (event) {
      event.preventDefault();
      restoreLoginForm();
    });
  }

  // Restore original login form
  function restoreLoginForm() {
    loginForm.innerHTML = originalLoginFormHTML;
    forgotPasswordMessage.innerHTML = ""; // Clear any previous messages
    reinitializeLoginForm(); // Reattach the event listeners
  }

  // Re-initialize event listeners for the login form
  function reinitializeLoginForm() {
    const toggleLoginPassword = document.getElementById('toggleLoginPassword');
    const loginPassword = document.getElementById('loginPassword');
    const loginIcon = document.getElementById('loginIcon');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');

    // Reattach toggle password visibility event listener
    toggleLoginPassword.addEventListener('click', function () {
      const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
      loginPassword.setAttribute('type', type);

      // Toggle the icon
      if (type === 'password') {
        loginIcon.classList.remove('fa-eye-slash');
        loginIcon.classList.add('fa-eye');
      } else {
        loginIcon.classList.remove('fa-eye');
        loginIcon.classList.add('fa-eye-slash');
      }
    });
    forgotPasswordLink.addEventListener('click', function (event) {
      event.preventDefault();
      showForgotPasswordForm();
    });

    // Re-attach login form submission event listener
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      validateForm("login");
    });
  }

  // Password visibility toggle function for both login and register forms
  function togglePasswordVisibility(buttonId, inputId, iconId) {
    const passwordInput = document.getElementById(inputId);
    const toggleButton = document.getElementById(buttonId);
    const icon = document.getElementById(iconId);

    toggleButton.addEventListener('click', function () {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);

      // Toggle the icon
      if (type === 'password') {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      }
    });
  }

  // Add toggle password functionality to both login and register forms
  togglePasswordVisibility('toggleLoginPassword', 'loginPassword', 'loginIcon');
  togglePasswordVisibility('toggleRegisterPassword', 'registerPassword', 'registerIcon');

  // Registration form validation and localStorage handling
  const trustedEmailDomains = ["gmail.com", "outlook.com", "yahoo.com", "hotmail.com"];

  // Handle form submission for both register and login forms
  document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm("register");
  });

  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm("login");
  });

  // Validation logic for registration and login forms
  function validateForm(formType) {
    let email, password, name;
    const spcharRegex = /[<>"/]/;

    if (formType === "register") {
      name = document.getElementById("registerName").value;
      email = document.getElementById("registerEmail").value;
      password = document.getElementById("registerPassword").value;

      if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields");
        return;
      }

      if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return;
      }

      if (!isTrustedDomain(email)) {
        alert("Email domain is not allowed. Please use a trusted provider (e.g., Gmail, Outlook).");
        return;
      }

      if (!validatePassword(password)) {
        alert(`Password must be at least 8 characters long and contain at least 
        * 1 uppercase letter,
        * 1 lowercase letter, 
        * 1 number, and
        * 1 special character.`);
        return;
      }

      if (spcharRegex.test(name) || spcharRegex.test(password)) {
        alert('Name or password cannot contain <, >, ", or /.');
        return;
      }

      if (localStorage.getItem("email") === email) {
        alert("This email is already registered.");
        registerDeclineBanner.style.display = 'block';
        setTimeout(() => {
          registerDeclineBanner.style.display = 'none';
        }, 3000);
        return;
      }

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      // Show registration success and redirect to login
      registerSuccessBanner.style.display = 'block';
      setTimeout(() => {
        registerSuccessBanner.style.display = 'none';
        container.classList.remove("right-panel-active"); // Switch to login form
        document.getElementById("loginForm").scrollIntoView({ behavior: "smooth" });
      }, 3000);
    }

    if (formType === "login") {
      email = document.getElementById("loginEmail").value;
      password = document.getElementById("loginPassword").value;

      if (localStorage.getItem("email") === email && localStorage.getItem("password") === password) {
        // Show login success and redirect to home
        loginSuccessBanner.style.display = 'block';
        setTimeout(() => {
          loginSuccessBanner.style.display = 'none';
          window.location.href = "../index.html"; // Redirect to home page
        }, 3000);
      } else {
        loginDeclineBanner.style.display = 'block';
        setTimeout(() => {
          loginDeclineBanner.style.display = 'none';
        }, 3000);
      }
    }
  }

  // Email validation regex
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Check for trusted email domains
  function isTrustedDomain(email) {
    const domain = email.split("@")[1];
    return trustedEmailDomains.includes(domain);
  }

  // Password validation regex
  function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  }
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      restoreLoginForm();
    }
  }); window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      restoreLoginForm();
    }
  });

});
