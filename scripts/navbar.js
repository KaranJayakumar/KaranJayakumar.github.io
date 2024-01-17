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
