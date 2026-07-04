function openFormulas() {
            document.getElementById('formulas-modal').classList.remove('hidden');
            if (window.renderMathInElement) {
                document.querySelectorAll('.format-formulas').forEach(el => {
                    renderMathInElement(el, {
                        delimiters: [
                            {left: '$$', right: '$$', display: true},
                            {left: '$', right: '$', display: false}
                        ],
                        throwOnError: false
                    });
                });
            }
        }

        function closeFormulas() {
            document.getElementById('formulas-modal').classList.add('hidden');
        }

        function printPDF() {
            const originalTitle = document.title;
            document.title = "Fórmulas Estadística";
            
            // Forzar modo claro para impresión
            const htmlElement = document.documentElement;
            const wasDark = htmlElement.classList.contains('dark');
            if (wasDark) {
                htmlElement.classList.remove('dark');
            }
            
            window.print();
            
            // Restaurar modo oscuro si estaba activo
            if (wasDark) {
                htmlElement.classList.add('dark');
            }
            
            setTimeout(() => {
                document.title = originalTitle;
            }, 1000);
        }

        // Sistema para chequear la selección de temas en los ejercicios del Parcial
        window.checkTopic = function(baseId, correctValue, hintBtnId, solveBtnId, unitId, topicId, exIndex) {
            const select = document.getElementById(baseId + '-select');
            const status = document.getElementById(baseId + '-status');
            
            let topicHint = "Lee bien el enunciado y busca las palabras clave.";
            let topicExplanation = "Puedes proceder a resolverlo.";
            
            // Buscar los textos de feedback específicos del ejercicio
            if (unitId && topicId && exIndex !== undefined) {
                const unit = appData.units.find(u => u.id === unitId);
                if (unit) {
                    const topic = unit.topics.find(t => t.id === topicId);
                    if (topic && topic.exercises[exIndex]) {
                        if (topic.exercises[exIndex].topicHint) topicHint = topic.exercises[exIndex].topicHint;
                        if (topic.exercises[exIndex].topicExplanation) topicExplanation = topic.exercises[exIndex].topicExplanation;
                    }
                }
            }

            if(select.value === correctValue) {
                status.innerHTML = `✅ <span class="text-green-700 text-sm font-bold">¡Correcto!</span> <span class="text-green-600 text-sm">${topicExplanation}</span>`;
                select.classList.add('border-green-500', 'bg-green-50');
                select.classList.remove('border-red-500', 'bg-red-50');
                // Habilitar la visibilidad de los botones de ayuda
                document.getElementById(hintBtnId)?.classList.remove('opacity-50', 'pointer-events-none');
                document.getElementById(solveBtnId)?.classList.remove('opacity-50', 'pointer-events-none');
            } else if(select.value !== "") {
                status.innerHTML = `❌ <span class="text-red-700 text-sm font-bold">Casi...</span> <span class="text-red-600 text-sm">${topicHint}</span>`;
                select.classList.add('border-red-500', 'bg-red-50');
                select.classList.remove('border-green-500', 'bg-green-50');
                // Ocultar o deshabilitar
                document.getElementById(hintBtnId)?.classList.add('opacity-50', 'pointer-events-none');
                document.getElementById(solveBtnId)?.classList.add('opacity-50', 'pointer-events-none');
            } else {
                status.innerHTML = '';
                select.className = 'w-full md:w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-indigo-500 focus:border-indigo-500';
                document.getElementById(hintBtnId)?.classList.add('opacity-50', 'pointer-events-none');
                document.getElementById(solveBtnId)?.classList.add('opacity-50', 'pointer-events-none');
            }
        }

        let userStats = { learnedTopics: [], quizGrades: {} };
        let currentUnitId = null;
        let currentTopicId = null;
        let currentChart = null;
        let testState = { mode: null, submode: null, activeItems: [], currentIndex: 0, score: 0, flashMistakes: [] };


// --- EXAM SIMULATOR LOGIC 2.0 ---
let examTimerInterval = null;
let examTimeRemaining = 5400; // 90 minutos
let examQuestions = [];
let currentExamIndex = 0;
let examScore = 0;
let userAnswers = []; 

window.startExamMode = function() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('content-screen').classList.add('hidden');
    document.getElementById('exam-results-screen').classList.add('hidden');
    document.getElementById('exam-results-screen').classList.remove('flex');
    document.getElementById('exam-review-screen').classList.add('hidden');
    document.getElementById('exam-review-screen').classList.remove('flex');
    
    document.getElementById('exam-screen').classList.remove('hidden');
    document.getElementById('exam-screen').classList.add('flex');
    window.scrollTo(0,0);
    
    let pool = [...testData.quizPool];
    pool.sort(() => Math.random() - 0.5);
    examQuestions = pool.slice(0, Math.min(20, pool.length));
    
    currentExamIndex = 0;
    examScore = 0;
    examTimeRemaining = 5400; 
    userAnswers = Array(examQuestions.length).fill(-1);
    
    clearInterval(examTimerInterval);
    updateExamTimerDisplay();
    examTimerInterval = setInterval(() => {
        examTimeRemaining--;
        updateExamTimerDisplay();
        if (examTimeRemaining <= 0) {
            endExam(false);
        }
    }, 1000);
    
    renderExamQuestion();
}

function updateExamTimerDisplay() {
    const el = document.getElementById('exam-timer');
    if (!el) return;
    const mins = Math.floor(examTimeRemaining / 60);
    const secs = examTimeRemaining % 60;
    el.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function renderExamQuestion() {
    if (currentExamIndex >= examQuestions.length) {
        endExam(false);
        return;
    }
    
    const ex = examQuestions[currentExamIndex];
    
    const counterEl = document.getElementById('exam-question-counter');
    if (counterEl) counterEl.innerText = `Pregunta ${currentExamIndex + 1} de ${examQuestions.length}`;
    
    const textEl = document.getElementById('exam-question-text');
    if (textEl) textEl.innerHTML = ex.q;
    
    const prevAns = userAnswers[currentExamIndex];
    const container = document.getElementById('exam-options-container');
    if (container) {
        container.innerHTML = '';
        if (ex.options && ex.options.length > 0) {
            ex.options.forEach((opt, idx) => {
                const div = document.createElement('div');
                div.className = "flex items-start gap-4 p-4 border border-outline-variant/30 rounded-xl hover:bg-surface-variant/30 cursor-pointer transition-colors relative overflow-hidden group exam-opt-card";
                
                const isChecked = (idx === prevAns);
                if (isChecked) {
                    div.classList.add('border-primary', 'bg-primary/5');
                }
                
                div.onclick = () => {
                    document.getElementById(`exam-opt-${idx}`).checked = true;
                    document.querySelectorAll('.exam-opt-card').forEach(c => {
                        c.classList.remove('border-primary', 'bg-primary/5');
                        c.querySelector('.radio-fill').classList.add('opacity-0', 'scale-0');
                    });
                    div.classList.add('border-primary', 'bg-primary/5');
                    div.querySelector('.radio-fill').classList.remove('opacity-0', 'scale-0');
                };
                
                div.innerHTML = `
                    <div class="flex-shrink-0 mt-1 relative w-6 h-6">
                        <input type="radio" name="exam-opt" id="exam-opt-${idx}" value="${idx}" class="opacity-0 absolute inset-0 z-10 cursor-pointer" ${isChecked ? 'checked' : ''}>
                        <div class="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center pointer-events-none group-hover:border-primary transition-colors">
                            <div class="radio-fill w-3 h-3 rounded-full btn-primary-gradient ${isChecked ? '' : 'opacity-0 scale-0'} transition-all duration-200"></div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <label for="exam-opt-${idx}" class="font-body-md text-on-surface cursor-pointer w-full block">${opt}</label>
                    </div>
                `;
                container.appendChild(div);
            });
        }
    }
    
    const prevBtn = document.getElementById('exam-prev-btn');
    if (prevBtn) prevBtn.style.visibility = currentExamIndex === 0 ? 'hidden' : 'visible';
}

window.prevExamQuestion = function() {
    if (currentExamIndex > 0) {
        saveCurrentAnswers();
        currentExamIndex--;
        renderExamQuestion();
    }
}

function saveCurrentAnswers() {
    const radios = document.getElementsByName('exam-opt');
    let ans = -1;
    for (let r of radios) {
        if (r.checked) ans = parseInt(r.value);
    }
    userAnswers[currentExamIndex] = ans;
}

window.nextExamQuestion = function() {
    saveCurrentAnswers();
    const ans = userAnswers[currentExamIndex];
    
    if (ans === -1) {
        alert("Por favor selecciona una respuesta.");
        return;
    }
    
    currentExamIndex++;
    if (currentExamIndex < examQuestions.length) {
        renderExamQuestion();
    } else {
        endExam(false);
    }
}

window.endExam = function(abandoned) {
    clearInterval(examTimerInterval);
    document.getElementById('exam-screen').classList.add('hidden');
    document.getElementById('exam-screen').classList.remove('flex');
    
    if (abandoned) {
        showHome();
        return;
    }
    
    examScore = 0;
    for (let i = 0; i < examQuestions.length; i++) {
        if (userAnswers[i] === examQuestions[i].ans) examScore += 1;
    }
    
    const maxScore = examQuestions.length;
    const passScore = Math.ceil(maxScore * 0.6); 
    
    document.getElementById('exam-results-screen').classList.remove('hidden');
    document.getElementById('exam-results-screen').classList.add('flex');
    document.getElementById('exam-final-score').innerText = `${examScore} / ${maxScore}`;
    
    const resultMsg = examScore >= passScore 
        ? "¡Aprobado! Excelente trabajo." 
        : "No alcanzaste el mínimo, sigue repasando.";
    const msgEl = document.getElementById('exam-result-message');
    if (msgEl) {
        msgEl.innerText = resultMsg;
        if (examScore >= passScore) {
            msgEl.className = "text-green-400 font-bold text-lg mt-4 max-w-sm mx-auto";
        } else {
            msgEl.className = "text-yellow-400 font-bold text-lg mt-4 max-w-sm mx-auto";
        }
    }
    
    const timeTaken = 5400 - examTimeRemaining;
    const mins = Math.floor(timeTaken / 60);
    const secs = timeTaken % 60;
    document.getElementById('exam-time-taken').innerText = `${mins} minutos y ${secs} segundos`;
    
    window.scrollTo(0,0);
}

window.showExamReview = function() {
    document.getElementById('exam-results-screen').classList.add('hidden');
    document.getElementById('exam-results-screen').classList.remove('flex');
    document.getElementById('exam-review-screen').classList.remove('hidden');
    document.getElementById('exam-review-screen').classList.add('flex');
    
    const container = document.getElementById('exam-review-container');
    if (container) {
        container.innerHTML = '';
        examQuestions.forEach((ex, idx) => {
            const uA = userAnswers[idx];
            const isOk = (uA === ex.ans);
            
            const div = document.createElement('div');
            div.className = "glass p-6 rounded-2xl border border-outline-variant/30";
            div.innerHTML = `
                <h3 class="font-bold text-xl text-primary mb-2">Pregunta ${idx + 1}</h3>
                <div class="text-on-surface-variant mb-4 text-sm">${ex.q}</div>
                <div class="p-4 rounded-xl ${isOk ? 'bg-green-500/10 border border-green-500/30' : 'bg-error/10 border border-error/30'} mb-4">
                    <div class="text-sm">Tu respuesta: <span class="font-mono">${uA !== -1 ? ex.options[uA] : 'No respondida'}</span></div>
                    <div class="text-sm font-bold mt-1 text-on-surface">Correcta: <span class="font-mono text-primary">${ex.options[ex.ans]}</span></div>
                </div>
                <div class="bg-surface-variant/50 p-4 rounded-xl text-sm text-on-surface-variant border-l-4 border-primary">
                    <strong>Explicación:</strong> ${ex.exp}
                </div>
            `;
            container.appendChild(div);
        });
    }
}


// --- FLASHCARDS LOGIC ---
let activeFlashcards = [];
let currentFlashcard = null;
let isFlashcardFlipped = false;

window.startFlashcardsMode = function() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('exam-screen').classList.add('hidden');
    document.getElementById('exam-screen').classList.remove('flex');
    document.getElementById('exam-results-screen').classList.add('hidden');
    document.getElementById('exam-results-screen').classList.remove('flex');
    document.getElementById('exam-review-screen').classList.add('hidden');
    document.getElementById('exam-review-screen').classList.remove('flex');
    document.getElementById('flashcards-victory-screen').classList.add('hidden');
    document.getElementById('flashcards-victory-screen').classList.remove('flex');
    
    document.getElementById('flashcards-screen').classList.remove('hidden');
    document.getElementById('flashcards-screen').classList.add('flex');
    window.scrollTo(0,0);
    
    // Initialize pool
    activeFlashcards = [...testData.flashcardsPool];
    // Shuffle
    activeFlashcards.sort(() => Math.random() - 0.5);
    
    nextFlashcard();
}

function nextFlashcard() {
    if (activeFlashcards.length === 0) {
        showFlashcardsVictory();
        return;
    }
    
    currentFlashcard = activeFlashcards[0]; // always take the first one
    isFlashcardFlipped = false;
    
    document.getElementById('flashcard-counter').innerText = `Tarjetas restantes: ${activeFlashcards.length}`;
    document.getElementById('flashcard-front').innerText = currentFlashcard.front;
    document.getElementById('flashcard-back').innerText = currentFlashcard.back;
    
    // Reset flip state
    document.getElementById('flashcard-inner').classList.remove('is-flipped');
    
    // Hide action buttons
    const actions = document.getElementById('flashcard-actions');
    actions.classList.add('opacity-0', 'pointer-events-none');
    actions.classList.remove('opacity-100', 'pointer-events-auto');
}

window.flipFlashcard = function() {
    if (isFlashcardFlipped) return; // already flipped
    isFlashcardFlipped = true;
    
    document.getElementById('flashcard-inner').classList.add('is-flipped');
    
    // Show actions
    const actions = document.getElementById('flashcard-actions');
    actions.classList.remove('opacity-0', 'pointer-events-none');
    actions.classList.add('opacity-100', 'pointer-events-auto');
}

window.answerFlashcard = function(knewIt) {
    if (!isFlashcardFlipped) return;
    
    // Remove the current card from the front of the array
    const card = activeFlashcards.shift();
    
    if (!knewIt) {
        // Put it at the back of the deck to see it again
        activeFlashcards.push(card);
    }
    
    nextFlashcard();
}

window.endFlashcards = function() {
    document.getElementById('flashcards-screen').classList.add('hidden');
    document.getElementById('flashcards-screen').classList.remove('flex');
    showHome();
}

function showFlashcardsVictory() {
    document.getElementById('flashcards-screen').classList.add('hidden');
    document.getElementById('flashcards-screen').classList.remove('flex');
    document.getElementById('flashcards-victory-screen').classList.remove('hidden');
    document.getElementById('flashcards-victory-screen').classList.add('flex');
}


window.showHome = function() {
    document.getElementById('welcome-screen').classList.remove('hidden');
    if (document.getElementById('content-screen')) document.getElementById('content-screen').classList.add('hidden');
    
    if(document.getElementById('exam-screen')) {
        document.getElementById('exam-screen').classList.add('hidden');
        document.getElementById('exam-screen').classList.remove('flex');
    }
    if(document.getElementById('exam-results-screen')) {
        document.getElementById('exam-results-screen').classList.add('hidden');
        document.getElementById('exam-results-screen').classList.remove('flex');
    }
    if(document.getElementById('exam-review-screen')) {
        document.getElementById('exam-review-screen').classList.add('hidden');
        document.getElementById('exam-review-screen').classList.remove('flex');
    }
    
    if(document.getElementById('flashcards-screen')) {
        document.getElementById('flashcards-screen').classList.add('hidden');
        document.getElementById('flashcards-screen').classList.remove('flex');
    }
    if(document.getElementById('flashcards-victory-screen')) {
        document.getElementById('flashcards-victory-screen').classList.add('hidden');
        document.getElementById('flashcards-victory-screen').classList.remove('flex');
    }
    
    window.scrollTo(0,0);
}
