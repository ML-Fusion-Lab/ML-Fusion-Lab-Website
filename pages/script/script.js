const themeSwitch = document.getElementById('theme-switch'); // Ensure this matches your HTML button's ID
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// progress bar functioning 
  window.onscroll = function () { updateProgressBar() };

  function updateProgressBar() {
    var windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercentage = (windowScroll / windowHeight) * 100;

    document.getElementById('progress-bar').style.width = scrollPercentage + "%";
  }

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

// <!-- js for mouse cursor trail effect -->
  
       document.addEventListener("DOMContentLoaded", function () {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");
  
    circles.forEach(function (circle) {
      circle.x = 0;
      circle.y = 0;
    });
  
    window.addEventListener("mousemove", function (e) {
      coords.x = e.pageX;
      coords.y = e.pageY - window.scrollY; // Adjust for vertical scroll position
    });
  
    function animateCircles() {
      let x = coords.x;
      let y = coords.y;
  
      circles.forEach(function (circle, index) {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
  
        const nextCircle = circles[index + 1] || circles[0];
        circle.x = x;
        circle.y = y;
  
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });
  
      requestAnimationFrame(animateCircles);
    }
  
    animateCircles();
  });
