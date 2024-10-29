const scrollTopBtn = document.getElementById("scrollTopBtn");
scrollTopBtn.style.setProperty('visibility', 'hidden', 'important');

window.addEventListener('scroll', function() {

    if (window.scrollY > 100) {
        scrollTopBtn.style.setProperty('visibility', 'visible', 'important');
    } else {
        scrollTopBtn.style.setProperty('visibility', 'hidden', 'important');
    }
});

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
