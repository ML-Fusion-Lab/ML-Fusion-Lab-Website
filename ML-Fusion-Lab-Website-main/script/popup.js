// Function to handle form submission
// Show toast and redirect to signup page
function showToastAndRedirect() {
  const toast = document.getElementById('toast');
  toast.classList.add('active');

  // Start the progress bar animation
  toast.querySelector('.progress').classList.add('active');

  // Set a timeout to redirect after 3 seconds
  setTimeout(() => {
    redirectToSignup();
  }, 3000);
}

// Redirect function
function redirectToSignup() {
  // Assuming your login/signup page is at pages/login.html
  window.location.href = 'pages/login.html';
}

// Hide popup and update the navigation bar on successful login
function hidePopupAndShowLogout() {
  document.getElementById('popup').style.display = 'none'; // Hide the popup
  document.getElementById('login-btn').style.display = 'none'; // Hide the login button
  document.getElementById('logout-btn').style.display = 'block'; // Show the logout button
}

// Show popup automatically unless the user is logged in
window.onload = function () {
  const userLoggedIn = sessionStorage.getItem('userLoggedIn');
  if (!userLoggedIn) {
    // Only show the popup if the user is not logged in
    document.getElementById('popup').style.display = 'flex';
  }
};

// Close the pop-up when the user clicks the close button
document.querySelector('.close-btn').addEventListener('click', function () {
  document.getElementById('popup').style.display = 'none';
});

// Close the pop-up when the user clicks outside the popup content
document.getElementById('popup').addEventListener('click', function (event) {
  if (event.target === document.getElementById('popup')) {
    document.getElementById('popup').style.display = 'none';
  }
});

// Handle form submission
document.getElementById('emailForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  const email = document.getElementById('email').value;
  if (email) {
    alert(`Thank you! A 20% discount code has been sent to ${email}`);
    document.getElementById('popup').style.display = 'none';
  }
});

// Handle "No thanks" link
document.querySelector('.no-thanks').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('popup').style.display = 'none';
});

// Function to handle logout
function logout() {
  // Perform any logout operations here (e.g., clearing cookies/session)
  alert('You have logged out successfully!');

  // After logout, revert the login/logout buttons
  document.getElementById('login-btn').style.display = 'block'; // Show the login button
  document.getElementById('logout-btn').style.display = 'none'; // Hide the logout button

  // Remove login status from sessionStorage
  sessionStorage.removeItem('userLoggedIn');

  // Optionally reload the page or redirect the user
  window.location.href = 'index.html';
}

// Simulate user login for demonstration purposes
document.addEventListener('DOMContentLoaded', function () {
  // Check if user is logged in
  const userLoggedIn = sessionStorage.getItem('userLoggedIn');

  if (userLoggedIn === 'true') {
    hidePopupAndShowLogout(); // Hide the popup and switch login to logout
  }

  // Simulate login (this should be your actual login process)
  document.getElementById('login-btn').addEventListener('click', function () {
    // Store login status in sessionStorage
    sessionStorage.setItem('userLoggedIn', 'true');
    hidePopupAndShowLogout(); // Hide popup and update navigation
  });

  // Check if the user is logged out and update accordingly
  document.getElementById('logout-btn').addEventListener('click', function () {
    sessionStorage.removeItem('userLoggedIn');
    logout();
  });
});
