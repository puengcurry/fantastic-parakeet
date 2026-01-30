class LottoDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                /* Lotto Numbers Container */
                .lotto-numbers-container {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    flex-wrap: wrap; /* Added for responsiveness */
                }

                /* Individual Lotto Number - Styled as a vibrant ball */
                .lotto-number {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.8em;
                    font-weight: bold;
                    color: white;
                    box-shadow: inset 0 3px 5px rgba(0,0,0,0.25), 0 5px 15px rgba(0,0,0,0.3);
                    border: 2px solid rgba(255, 255, 255, 0.2);
                    animation: appear 0.5s ease-out forwards;
                    transform: scale(0); /* Start scaled down for animation */
                }

                /* Animation for the number balls appearing */
                @keyframes appear {
                    to {
                        transform: scale(1);
                    }
                }

                /* Dynamic coloring for the lotto numbers */
                .lotto-number:nth-child(6n+1) { background: linear-gradient(135deg, #f39c12, #e67e22); }
                .lotto-number:nth-child(6n+2) { background: linear-gradient(135deg, #3498db, #2980b9); }
                .lotto-number:nth-child(6n+3) { background: linear-gradient(135deg, #e74c3c, #c0392b); }
                .lotto-number:nth-child(6n+4) { background: linear-gradient(135deg, #9b59b6, #8e44ad); }
                .lotto-number:nth-child(6n+5) { background: linear-gradient(135deg, #2ecc71, #27ae60); }
                .lotto-number:nth-child(6n+6) { background: linear-gradient(135deg, #1abc9c, #16a085); }
            </style>
            <div class="lotto-numbers-container"></div>
        `;
    }

    generateNumbers() {
        const lottoNumbersContainer = this.shadowRoot.querySelector('.lotto-numbers-container');
        lottoNumbersContainer.innerHTML = '';
        const numbers = [];
        while (numbers.length < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }
        numbers.sort((a, b) => a - b);
        numbers.forEach((number, index) => {
            const numberDiv = document.createElement('div');
            numberDiv.classList.add('lotto-number');
            numberDiv.textContent = number;
            numberDiv.style.animationDelay = `${index * 0.1}s`;
            lottoNumbersContainer.appendChild(numberDiv);
        });
    }
}

customElements.define('lotto-display', LottoDisplay);
