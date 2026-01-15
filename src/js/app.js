import { questions, results } from './data.js';
import { copyToClipboard, downloadImage, shareImage } from './utils.js';

// --- APP STATE ---
let currentStep = 0;
let userAnswers = new Array(8).fill(null);
let currentResultData = null; // Store result for export

// --- CORE LOGIC ---

function startQuiz() {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('quiz-page').classList.remove('hidden');
    document.getElementById('quiz-page').classList.add('flex');
    currentStep = 1;
    renderQuestion();
}

function renderQuestion() {
    if (currentStep < 1) currentStep = 1;
    const q = questions[currentStep - 1];
    
    // Header Back Button Logic
    const backBtn = document.getElementById('back-btn');
    if (currentStep > 1) {
        backBtn.style.opacity = '1';
        backBtn.style.pointerEvents = 'auto';
    } else {
        backBtn.style.opacity = '0';
        backBtn.style.pointerEvents = 'none';
    }

    // Update Progress text
    document.getElementById('q-number').innerText = currentStep;
    
    // Update Question Text
    document.getElementById('q-text').innerText = q.text;
    
    // Image (Fade effect)
    const imgEl = document.getElementById('q-img');
    imgEl.style.opacity = 0;
    setTimeout(() => {
        imgEl.src = q.img;
        imgEl.style.opacity = 0.9;
    }, 200);

    // Hide Next Button initially
    const actionBar = document.getElementById('action-bar');
    actionBar.classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');

    // Scroll to top
    const content = document.getElementById('quiz-content');
    if(content) content.scrollTop = 0;

    // Options
    q.options.forEach((opt, idx) => {
        const char = ['A', 'B', 'C', 'D'][idx];
        const btn = document.getElementById(`opt-${char.toLowerCase()}`);
        const textSpan = document.getElementById(`opt-${char.toLowerCase()}-text`);
        
        // Reset Styles
        btn.classList.remove('selected');
        textSpan.innerText = opt.text;
        
        // Check if previously selected (for back navigation)
        if (userAnswers[currentStep-1] === opt.label) {
            btn.classList.add('selected');
            actionBar.classList.remove('hidden');
            document.getElementById('next-btn').classList.remove('hidden'); 
        }
    });

    // Finish button visibility
    const finishBtn = document.getElementById('finish-btn');
    if (currentStep < 8) {
        finishBtn.classList.add('hidden');
    } else {
        document.getElementById('next-btn').classList.add('hidden'); 
        if (userAnswers[currentStep-1]) {
            finishBtn.classList.remove('hidden');
        } else {
            finishBtn.classList.add('hidden');
        }
    }
}

function selectOption(char) {
    userAnswers[currentStep - 1] = char;
    
    // Update UI
    ['a','b','c','d'].forEach(c => document.getElementById(`opt-${c}`).classList.remove('selected'));
    document.getElementById(`opt-${char.toLowerCase()}`).classList.add('selected');
    
    // Show Button Logic
    const actionBar = document.getElementById('action-bar');
    actionBar.classList.remove('hidden');
    
    if (currentStep < 8) {
        document.getElementById('next-btn').classList.remove('hidden');
    } else {
        document.getElementById('finish-btn').classList.remove('hidden');
    }
}

function prevQuestion() {
    if (currentStep > 1) {
        currentStep--;
        renderQuestion();
    }
}

function nextQuestion() {
    if (currentStep < 8) {
        currentStep++;
        renderQuestion();
    }
}

function showResult() {
    // Logic Calculation
    let scores = { Fire: 0, Earth: 0, Wind: 0, Water: 0 };
    
    for(let i=0; i<7; i++) {
        const ans = userAnswers[i];
        const q = questions[i];
        const selectedOpt = q.options.find(o => o.label === ans);
        if (selectedOpt) {
            scores[selectedOpt.value]++;
        }
    }

    let maxScore = -1;
    let dominant = 'Fire';
    for (const [key, value] of Object.entries(scores)) {
        if (value > maxScore) {
            maxScore = value;
            dominant = key;
        }
    }

    const q8Ans = userAnswers[7];
    let resultKey = "";

    if (dominant === 'Fire') {
        if (q8Ans === 'A' || q8Ans === 'B') resultKey = "Domination";
        else resultKey = "Velocity";
    } else if (dominant === 'Earth') {
        if (q8Ans === 'A' || q8Ans === 'B') resultKey = "Refinement";
        else resultKey = "Strategy";
    } else if (dominant === 'Wind') {
        if (q8Ans === 'C') resultKey = "Popularity";
        else resultKey = "Harmony";
    } else { // Water
        if (q8Ans === 'D') resultKey = "Wisdom";
        else resultKey = "Breakthrough";
    }

    const res = results[resultKey];
    currentResultData = res; // Save for export

    // Render Result
    document.getElementById('quiz-page').classList.add('hidden');
    document.getElementById('result-page').classList.remove('hidden');
    document.getElementById('result-page').classList.add('flex');

    document.getElementById('result-title').innerText = res.title;
    document.getElementById('result-desc').innerText = res.desc;
    
    const imgEl = document.getElementById('product-img');
    imgEl.removeAttribute('crossOrigin'); 
    imgEl.src = res.img;
    
    document.getElementById('product-name').innerText = res.productName;
    document.getElementById('product-copy').innerText = res.productCopy;
    document.getElementById('product-link').href = res.link;
}

// --- EXPOSE TO WINDOW ---
window.startQuiz = startQuiz;
window.selectOption = selectOption;
window.prevQuestion = prevQuestion;
window.nextQuestion = nextQuestion;
window.showResult = showResult;

// Share Button: 分享圖片
window.shareResult = function() {
    if(currentResultData) {
        // Pass button ID for loading state
        // Assuming the button calling this has no specific ID or we use 'share-btn' logic inside
        // But better to pass element if possible. For simplicity here, we assume it's triggered by the share button.
        // Let's modify HTML to give share button an ID to be safer.
        shareImage(currentResultData, null); 
    }
};

// Download Button
window.downloadImage = function() {
    if(currentResultData) {
        downloadImage(currentResultData, 'dl-btn');
    }
};

window.locationReload = () => location.reload();