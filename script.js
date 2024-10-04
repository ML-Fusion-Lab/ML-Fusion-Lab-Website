const themeSwitch = document.getElementById('theme-switch'); // Ensure this matches your HTML button's ID
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Function to enable dark mode
function enableDarkMode() {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    themeSwitch.classList.add('dark-theme'); // Update the switch appearance
}

// Function to disable dark mode
function disableDarkMode() {
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    themeSwitch.classList.remove('dark-theme'); // Update the switch appearance
}

// Event listener for dark mode toggle button
themeSwitch.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode(); // Switch to light mode
        localStorage.removeItem('dark-mode'); // Remove from local storage
    } else {
        enableDarkMode(); // Switch to dark mode
        localStorage.setItem('dark-mode', 'enabled'); // Save in local storage
    }
});

// Optional: Check the initial mode on page load
if (localStorage.getItem('dark-mode') === 'enabled') {
    enableDarkMode();
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to ML Fusion Lab!");
});
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});