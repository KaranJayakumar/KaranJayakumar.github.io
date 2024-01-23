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
function onHome() {
    window.location.href = '/index.html';
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
