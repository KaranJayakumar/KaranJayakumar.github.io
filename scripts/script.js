function onMenuClick() {
    hamburger = document.querySelector(".hamburger");
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
function scrollDown(section) {
    const element = document.querySelector(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
function loadPage(page) {
    // Use AJAX to fetch the content of the selected page
    fetch(page + '.html')
        .then(response => response.text())
        .then(html => {
            // Update content-container with the fetched HTML
            document.getElementById('content-container').innerHTML = html;
        });
}

// Load the "home" page by default when the page loads
window.onload = function() {
    console.log("reached onLoad");
    loadPage('/src/home');
};
