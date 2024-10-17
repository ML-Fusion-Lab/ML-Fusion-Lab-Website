document.addEventListener("DOMContentLoaded", function() {
  const registerButton = document.getElementById("register");
  const loginButton = document.getElementById("login");
  const container = document.getElementById("container");
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  registerButton.addEventListener("click", (event) => {
    event.preventDefault();
    container.classList.add("right-panel-active");
    registerForm.scrollIntoView({ behavior: "smooth" });
  });
  loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    container.classList.remove("right-panel-active");
    loginForm.scrollIntoView({ behavior: "smooth" });
  });

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();


    //registration success
    document.getElementById("registerMessage").style.display = "block";
    setTimeout(() => {
      container.classList.remove("right-panel-active");
      loginForm.scrollIntoView({ behavior: "smooth" });
    }, 2000);
  });

});

function togglePasswordVisibility(buttonId, inputId, iconId) {
  const passwordInput = document.getElementById(inputId);
  const toggleButton = document.getElementById(buttonId);
  const icon = document.getElementById(iconId);

  // Initialize the icon to be a closed eye (fa-eye-slash) because the password is hidden initially
  icon.classList.add('fa-eye-slash');

  toggleButton.addEventListener('click', function () {
    // Toggle the type attribute between 'password' and 'text'
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Toggle the icon
    if (type === 'password') {
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  });
}

// Apply to both login and register
togglePasswordVisibility('toggleLoginPassword', 'loginPassword', 'loginIcon');
togglePasswordVisibility('toggleRegisterPassword', 'registerPassword', 'registerIcon');
