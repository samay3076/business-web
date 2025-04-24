const themeToggle = document.getElementById('themeToggle');
const body = document.body;
let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

body.classList.toggle('dark', isDarkMode);

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark', isDarkMode);
});

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('.nav-link');

function navigateToPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    navButtons.forEach(button => {
        button.classList.remove('active');
    });

    const selectedPage = document.getElementById(pageId);
    const selectedButton = document.querySelector(`[data-page="${pageId}"]`);
    
    if (selectedPage && selectedButton) {
        selectedPage.classList.add('active');
        selectedButton.classList.add('active');
    }

    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
}

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const pageId = button.getAttribute('data-page');
        navigateToPage(pageId);
    });
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        contactForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.page.active').style.opacity = '1';
    }, 100);
});