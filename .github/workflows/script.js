const chakraData = [
    {
        id: 'crown',
        name: 'Sahasrara (Crown Chakra)',
        color: '#a457ff',
        position: { x: '50%', y: '8%' },
        gland: 'Pituitary Gland',
        keywords: 'Spirituality, Enlightenment, Connection',
        positive_moods: ['Connected', 'Blissful', 'Wise'],
        negative_moods: ['Cynical', 'Disconnected', 'Apathetic'],
    },
    {
        id: 'third-eye',
        name: 'Ajna (Third Eye Chakra)',
        color: '#5773ff',
        position: { x: '50%', y: '18%' },
        gland: 'Pineal Gland',
        keywords: 'Intuition, Imagination, Wisdom',
        positive_moods: ['Intuitive', 'Clear', 'Imaginative'],
        negative_moods: ['Confused', 'Indecisive', 'Unfocused'],
    },
    {
        id: 'throat',
        name: 'Vishuddha (Throat Chakra)',
        color: '#57c9ff',
        position: { x: '50%', y: '32%' },
        gland: 'Thyroid Gland',
        keywords: 'Communication, Self-Expression, Truth',
        positive_moods: ['Expressive', 'Honest', 'Clear'],
        negative_moods: ['Shy', 'Dishonest', 'Misunderstood'],
    },
    {
        id: 'heart',
        name: 'Anahata (Heart Chakra)',
        color: '#61e899',
        position: { x: '50%', y: '42%' },
        gland: 'Thymus Gland',
        keywords: 'Love, Compassion, Joy',
        positive_moods: ['Loved', 'Compassionate', 'Joyful'],
        negative_moods: ['Grief', 'Jealousy', 'Lonely'],
    },
    {
        id: 'solar-plexus',
        name: 'Manipura (Solar Plexus Chakra)',
        color: '#ffe357',
        position: { x: '50%', y: '55%' },
        gland: 'Pancreas',
        keywords: 'Personal Power, Self-Esteem, Confidence',
        positive_moods: ['Confident', 'Powerful', 'Motivated'],
        negative_moods: ['Shame', 'Powerless', 'Timid'],
    },
    {
        id: 'sacral',
        name: 'Svadhisthana (Sacral Chakra)',
        color: '#ff9f57',
        position: { x: '50%', y: '68%' },
        gland: 'Gonads (Ovaries/Testes)',
        keywords: 'Creativity, Pleasure, Emotions',
        positive_moods: ['Creative', 'Passionate', 'Joyful'],
        negative_moods: ['Guilty', 'Emotionally numb', 'Addicted'],
    },
    {
        id: 'root',
        name: 'Muladhara (Root Chakra)',
        color: '#ff5757',
        position: { x: '50%', y: '85%' },
        gland: 'Adrenal Glands',
        keywords: 'Survival, Grounding, Security',
        positive_moods: ['Grounded', 'Secure', 'Stable'],
        negative_moods: ['Anxious', 'Fearful', 'Insecure'],
    },
];

const chakraMap = document.getElementById('chakra-map');
const infoTitle = document.getElementById('info-title');
const infoContent = document.getElementById('info-content');

let activeChakra = null;

function displayChakraInfo(chakra) {
    infoTitle.textContent = chakra.name;
    infoTitle.style.color = chakra.color;
    infoTitle.style.textShadow = `0 0 10px ${chakra.color}`;

    const positiveMoodsHTML = chakra.positive_moods.map(mood => `<span>${mood}</span>`).join('');
    const negativeMoodsHTML = chakra.negative_moods.map(mood => `<span>${mood}</span>`).join('');

    infoContent.innerHTML = `
        <div class="fade-in">
            <h3>Associated Gland</h3>
            <p>${chakra.gland}</p>
        </div>
        <div class="fade-in" style="animation-delay: 0.1s;">
            <h3>Keywords</h3>
            <p>${chakra.keywords}</p>
        </div>
        <div class="fade-in" style="animation-delay: 0.2s;">
             <h3>Associated Moods</h3>
             <div class="moods-container">
                <div class="mood-list positive">
                    <h4>Balanced</h4>
                    ${positiveMoodsHTML}
                </div>
                <div class="mood-list negative">
                    <h4>Imbalanced</h4>
                    ${negativeMoodsHTML}
                </div>
             </div>
        </div>
    `;
}

function handleChakraClick(chakra, element) {
    // Deactivate previously active chakra
    if (activeChakra) {
        activeChakra.classList.remove('active');
    }

    // Activate new chakra
    element.classList.add('active');
    activeChakra = element;

    displayChakraInfo(chakra);
}


function createChakras() {
    chakraData.forEach(chakra => {
        const chakraEl = document.createElement('div');
        chakraEl.className = 'chakra';
        chakraEl.id = chakra.id;
        chakraEl.style.left = chakra.position.x;
        chakraEl.style.top = chakra.position.y;
        chakraEl.style.backgroundColor = chakra.color;
        // Custom property for active box shadow
        chakraEl.style.setProperty('--chakra-color', chakra.color);

        chakraEl.addEventListener('click', () => handleChakraClick(chakra, chakraEl));
        chakraMap.appendChild(chakraEl);
    });
}

// Initial state
document.addEventListener('DOMContentLoaded', () => {
    createChakras();
    // Pre-select heart chakra for initial view
    const initialChakraData = chakraData.find(c => c.id === 'heart');
    const initialChakraElement = document.getElementById('heart');
    if (initialChakraData && initialChakraElement) {
        handleChakraClick(initialChakraData, initialChakraElement);
    }
});

