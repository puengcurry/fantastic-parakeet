
const generateBtn = document.getElementById('generate');
const lottoDisplay = document.querySelector('lotto-display');
const themeToggle = document.getElementById('theme-toggle');

generateBtn.addEventListener('click', () => {
    lottoDisplay.generateNumbers();
});

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.checked = true;
    } else {
        themeToggle.checked = false;
    }
});
