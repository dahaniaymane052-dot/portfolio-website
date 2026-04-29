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

// ============================================
// FILTRES DES PROJETS
// ============================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe "active" de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter "active" au bouton cliqué
            button.classList.add('active');

            // Récupérer le filtre choisi
            const filter = button.getAttribute('data-filter');

            // Parcourir tous les projets et les afficher/cacher
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category');
                
                if (filter === 'all' || categories.includes(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}