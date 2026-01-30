
const generateBtn = document.getElementById('generate');
const lottoDisplay = document.querySelector('lotto-display');
const themeToggle = document.getElementById('theme-toggle');
const navLinks = document.querySelectorAll('nav a');

// Lotto Generator
if (generateBtn && lottoDisplay) {
    generateBtn.addEventListener('click', () => {
        lottoDisplay.generateNumbers();
    });
}

// Theme Switcher
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.remove('light-mode');
        themeToggle.checked = false;
    } else {
        document.body.classList.add('light-mode');
        themeToggle.checked = true;
    }
}

themeToggle.addEventListener('change', () => {
    const newTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});

document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme or default to light theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Smooth Scrolling for Nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
