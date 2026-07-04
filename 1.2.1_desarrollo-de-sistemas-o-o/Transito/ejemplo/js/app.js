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
let examTheme = "";
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
    
    const simuladorUnit = appData.units.find(u => u.id === 'usimulador');
    if (!simuladorUnit) return;
    
    const randomIndex = Math.floor(Math.random() * simuladorUnit.topics.length);
    const selectedTheme = simuladorUnit.topics[randomIndex];
    examTheme = selectedTheme.title;
    
    examQuestions = [...selectedTheme.exercises];
    
    currentExamIndex = 0;
    examScore = 0;
    examTimeRemaining = 5400; 
    userAnswers = Array(5).fill(null).map(() => ({a: -1, b: -1}));
    
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
    const mins = Math.floor(examTimeRemaining / 60);
    const secs = examTimeRemaining % 60;
    document.getElementById('exam-timer').innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function renderExamQuestion() {
    if (currentExamIndex >= examQuestions.length) {
        endExam(false);
        return;
    }
    
    const ex = examQuestions[currentExamIndex];
    document.getElementById('exam-question-counter').innerText = `Pregunta ${currentExamIndex + 1} de ${examQuestions.length} (${examTheme})`;
    
    const progress = ((currentExamIndex) / examQuestions.length) * 100;
    document.getElementById('exam-progress-bar').style.width = `${progress}%`;
    
    document.getElementById('exam-question-text').innerHTML = ex.q;
    document.getElementById('exam-sub-a').innerHTML = ex.subA;
    document.getElementById('exam-sub-b').innerHTML = ex.subB;
    
    const prevAnsA = userAnswers[currentExamIndex].a;
    const prevAnsB = userAnswers[currentExamIndex].b;
    
    const renderOptions = (options, containerId, groupName, prevAns) => {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        if (options && options.length > 0) {
            options.forEach((opt, idx) => {
                const div = document.createElement('div');
                div.className = "flex items-start gap-4 p-4 border border-outline-variant/30 rounded-xl hover:bg-surface-variant/30 cursor-pointer transition-colors relative overflow-hidden group";
                div.onclick = () => {
                    document.getElementById(`${groupName}-opt-${idx}`).checked = true;
                    document.querySelectorAll(`.${groupName}-card`).forEach(c => {
                        c.classList.remove('border-primary', 'bg-primary/5');
                        c.querySelector('.radio-fill').classList.add('opacity-0', 'scale-0');
                    });
                    div.classList.add('border-primary', 'bg-primary/5');
                    div.querySelector('.radio-fill').classList.remove('opacity-0', 'scale-0');
                };
                div.classList.add(`${groupName}-card`);
                
                const isChecked = idx === prevAns;
                if (isChecked) {
                    div.classList.add('border-primary', 'bg-primary/5');
                }
                
                div.innerHTML = `
                    <div class="flex-shrink-0 mt-1 relative w-6 h-6">
                        <input type="radio" name="${groupName}" id="${groupName}-opt-${idx}" value="${idx}" class="opacity-0 absolute inset-0 z-10 cursor-pointer" ${isChecked ? 'checked' : ''}>
                        <div class="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center pointer-events-none group-hover:border-primary transition-colors">
                            <div class="radio-fill w-3 h-3 rounded-full btn-primary-gradient ${isChecked ? '' : 'opacity-0 scale-0'} transition-all duration-200"></div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <label for="${groupName}-opt-${idx}" class="font-body-md text-on-surface cursor-pointer w-full block format-math">${opt}</label>
                    </div>
                `;
                container.appendChild(div);
            });
        }
    };
    
    renderOptions(ex.optionsA, 'exam-options-a-container', 'exam-opt-a', prevAnsA);
    renderOptions(ex.optionsB, 'exam-options-b-container', 'exam-opt-b', prevAnsB);
    
    document.getElementById('exam-prev-btn').style.visibility = currentExamIndex === 0 ? 'hidden' : 'visible';
    
    if (window.renderMathInElement) {
        document.querySelectorAll('.format-math').forEach(el => {
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

window.prevExamQuestion = function() {
    if (currentExamIndex > 0) {
        saveCurrentAnswers();
        currentExamIndex--;
        renderExamQuestion();
    }
}

function saveCurrentAnswers() {
    const radiosA = document.getElementsByName('exam-opt-a');
    let ansA = -1;
    for (let r of radiosA) if (r.checked) ansA = parseInt(r.value);
    
    const radiosB = document.getElementsByName('exam-opt-b');
    let ansB = -1;
    for (let r of radiosB) if (r.checked) ansB = parseInt(r.value);
    
    userAnswers[currentExamIndex] = {a: ansA, b: ansB};
}

window.nextExamQuestion = function() {
    saveCurrentAnswers();
    const ansA = userAnswers[currentExamIndex].a;
    const ansB = userAnswers[currentExamIndex].b;
    
    if (ansA === -1 || ansB === -1) {
        alert("Por favor selecciona una respuesta para la parte A y B.");
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
        if (userAnswers[i].a === examQuestions[i].correctA) examScore += 1;
        if (userAnswers[i].b === examQuestions[i].correctB) examScore += 1;
    }
    
    const finalGrade = examScore;
    
    document.getElementById('exam-results-screen').classList.remove('hidden');
    document.getElementById('exam-results-screen').classList.add('flex');
    document.getElementById('exam-final-score').innerText = `${examScore}`;
    const resultMsg = examScore >= 7 
        ? "¡Felicitaciones! Si mantenés estos resultados podés promocionar." 
        : (examScore < 4 ? "Tenemos que seguir repasando." : "Casi, tenemos que seguir repasando.");
    const msgEl = document.getElementById('exam-result-message');
    if (msgEl) {
        msgEl.innerText = resultMsg;
        if (examScore >= 7) {
            msgEl.className = "text-green-400 font-bold text-lg mt-4 max-w-sm mx-auto";
        } else {
            msgEl.className = "text-yellow-400 font-bold text-lg mt-4 max-w-sm mx-auto";
        }
    }
    
    const timeTaken = 5400 - examTimeRemaining;
    const mins = Math.floor(timeTaken / 60);
    const secs = timeTaken % 60;
    document.getElementById('exam-time-taken').innerText = `${mins} minutos y ${secs} segundos`;
    
    let history = JSON.parse(localStorage.getItem('examHistory') || '[]');
    history.push(finalGrade);
    localStorage.setItem('examHistory', JSON.stringify(history));
    
    updateGlobalAverage(history);
    window.scrollTo(0,0);
}

window.showExamReview = function() {
    document.getElementById('exam-results-screen').classList.add('hidden');
    document.getElementById('exam-results-screen').classList.remove('flex');
    document.getElementById('exam-review-screen').classList.remove('hidden');
    document.getElementById('exam-review-screen').classList.add('flex');
    
    const container = document.getElementById('exam-review-container');
    container.innerHTML = '';
    
    examQuestions.forEach((ex, idx) => {
        const uA = userAnswers[idx].a;
        const uB = userAnswers[idx].b;
        
        const isAOk = uA === ex.correctA;
        const isBOk = uB === ex.correctB;
        
        const div = document.createElement('div');
        div.className = "glass p-6 rounded-2xl border border-outline-variant/30";
        const reviewQ = ex.q.replace(/shade-left-1/g, 'shade-left-1-review').replace(/shade-right-2/g, 'shade-right-2-review');
        div.innerHTML = `
            <h3 class="font-bold text-xl text-primary mb-2">Pregunta ${idx + 1}</h3>
            <div class="text-on-surface-variant mb-4 text-sm format-math">${reviewQ}</div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 rounded-xl ${isAOk ? 'bg-green-500/10 border border-green-500/30' : 'bg-error/10 border border-error/30'}">
                    <div class="font-bold mb-1 format-math">Parte A: ${ex.subA}</div>
                    <div class="text-sm">Tu respuesta: <span class="font-mono format-math">${uA !== -1 ? ex.optionsA[uA] : 'No respondida'}</span></div>
                    <div class="text-sm font-bold mt-1 text-on-surface">Correcta: <span class="font-mono text-primary format-math">${ex.optionsA[ex.correctA]}</span></div>
                </div>
                <div class="p-4 rounded-xl ${isBOk ? 'bg-green-500/10 border border-green-500/30' : 'bg-error/10 border border-error/30'}">
                    <div class="font-bold mb-1 format-math">Parte B: ${ex.subB}</div>
                    <div class="text-sm">Tu respuesta: <span class="font-mono format-math">${uB !== -1 ? ex.optionsB[uB] : 'No respondida'}</span></div>
                    <div class="text-sm font-bold mt-1 text-on-surface">Correcta: <span class="font-mono text-primary format-math">${ex.optionsB[ex.correctB]}</span></div>
                </div>
            </div>
            
            <div class="bg-surface-variant/50 p-4 rounded-xl text-sm text-on-surface-variant border-l-4 border-primary">
                <strong>Explicación:</strong> ${ex.explanation}
            </div>
        `;
        container.appendChild(div);
    });
    
    if (window.renderMathInElement) {
        document.querySelectorAll('.format-math').forEach(el => {
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

function updateGlobalAverage(historyArray) {
    if (!historyArray || historyArray.length === 0) return;
    const sum = historyArray.reduce((a, b) => a + b, 0);
    const avg = (sum / historyArray.length).toFixed(1);
    
    const elText = document.getElementById('global-average-text');
    const elBar = document.getElementById('global-average-bar');
    const elCount = document.getElementById('global-average-desc');
    if (elText) elText.innerText = `${avg}`;
    if (elBar) elBar.style.width = `${(avg/10)*100}%`;
    if (elCount) elCount.innerText = `Basado en los últimos ${historyArray.length} simulacros que hiciste.`;
}

document.addEventListener('DOMContentLoaded', () => {
    const originalShowHome = window.showHome;
    window.showHome = function() {
        document.getElementById('exam-screen')?.classList.add('hidden');
        document.getElementById('exam-screen')?.classList.remove('flex');
        document.getElementById('exam-results-screen')?.classList.add('hidden');
        document.getElementById('exam-results-screen')?.classList.remove('flex');
        document.getElementById('exam-review-screen')?.classList.add('hidden');
        document.getElementById('exam-review-screen')?.classList.remove('flex');
        
        let history = JSON.parse(localStorage.getItem('examHistory') || '[]');
        if (history.length > 0) {
            updateGlobalAverage(history);
        }
        if (typeof originalShowHome === 'function') {
            originalShowHome();
        }
    }

    let history = JSON.parse(localStorage.getItem('examHistory') || '[]');
    if (history.length > 0) {
        updateGlobalAverage(history);
    }
});

