// ============================================
// MENU BURGER (Mobile)
// ============================================
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ============================================
// DARK / LIGHT MODE
// ============================================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

let currentTheme = 'light';

themeToggle.addEventListener('click', () => {
    if (currentTheme === 'light') {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        currentTheme = 'dark';
    } else {
        htmlElement.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
        currentTheme = 'light';
    }
});

// ============================================
// MESSAGE CONSOLE (debug)
// ============================================
console.log('🚀 Portfolio chargé avec succès !');