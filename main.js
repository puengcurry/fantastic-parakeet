
const generateBtn = document.getElementById('generate');
const lottoDisplay = document.querySelector('lotto-display');

generateBtn.addEventListener('click', () => {
    lottoDisplay.generateNumbers();
});
