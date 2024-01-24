function onMenuClick() {
    hamburger = document.querySelector(".hamburger");
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
function openLink(link) {
    window.open(link);
}
function scrollDown(section) {
    const element = document.querySelector(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
function onHome() {
    window.location.href = '/index.html';
}
function scrollToTop() {
    const nav = document.querySelector('.nav')
    if (nav) {
        nav.scrollIntoView({ behavior: 'smooth' });
    }
}
function downloadResume() {
    // Create a Blob with the file data
    const pdfPath = '/assets/resume.pdf';

    // Create a download link
    const a = document.createElement("a");
    a.href = pdfPath;
    a.download = "Resume-Kishor.pdf";

    // Append the link to the document
    document.body.appendChild(a);

    // Trigger a click event on the link
    a.click();

    // Remove the link from the document
    document.body.removeChild(a);
}
document.addEventListener("DOMContentLoaded", function() {
    let scrollButton = document.getElementById('scrollToTop');
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollButton.style.display = "flex";
            scrollButton.style.flexDirection = "column";
            scrollButton.style.alignItems = "center";
        } else {
            scrollButton.style.display = "none";
        }
    }
});
