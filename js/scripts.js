document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#61dafb';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = 'white';
        });
    });
});