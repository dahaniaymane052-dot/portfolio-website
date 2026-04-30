// ============================================
// MENU BURGER (Mobile)
// ============================================
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active'); // Pour animation X
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active'); // Reset animation X
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
// ============================================
// VALIDATION DU FORMULAIRE DE CONTACT
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêcher l'envoi par défaut

        // Récupérer les valeurs des champs
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        const successMessage = document.getElementById('successMessage');

        // Réinitialiser les erreurs
        clearErrors();

        let isValid = true;

        // 1. Validation du nom (au moins 3 caractères)
        if (name.value.trim().length < 3) {
            showError(name, 'nameError', 'Le nom doit contenir au moins 3 caractères');
            isValid = false;
        }

        // 2. Validation de l'email (regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            showError(email, 'emailError', 'Veuillez entrer un email valide');
            isValid = false;
        }

        // 3. Validation du sujet (au moins 5 caractères)
        if (subject.value.trim().length < 5) {
            showError(subject, 'subjectError', 'Le sujet doit contenir au moins 5 caractères');
            isValid = false;
        }

        // 4. Validation du message (au moins 10 caractères)
        if (message.value.trim().length < 10) {
            showError(message, 'messageError', 'Le message doit contenir au moins 10 caractères');
            isValid = false;
        }

        // Si tout est valide → afficher message de succès
        if (isValid) {
            successMessage.classList.add('show');
            contactForm.reset(); // Vider le formulaire
            
            // Cacher le message après 5 secondes
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        }
    });
}

// Fonction pour afficher une erreur
function showError(input, errorId, message) {
    input.classList.add('error');
    document.getElementById(errorId).textContent = message;
}

// Fonction pour effacer toutes les erreurs
function clearErrors() {
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    const errors = document.querySelectorAll('.error-message');
    
    inputs.forEach(input => input.classList.remove('error'));
    errors.forEach(error => error.textContent = '');
}