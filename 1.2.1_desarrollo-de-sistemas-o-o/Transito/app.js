import { studyData, questionPool } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  // --- Elementos del DOM ---
  const html = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');
  const lightIcon = document.getElementById('theme-toggle-light-icon');
  
  const navMenu = document.getElementById('nav-menu');
  const mobileNavMenu = document.getElementById('mobile-nav-menu');
  const headerTitle = document.getElementById('header-title');
  
  const welcomeSection = document.getElementById('welcome-section');
  const studySection = document.getElementById('study-section');
  const studyContent = document.getElementById('study-content');
  const quizSection = document.getElementById('quiz-section');
  
  const btnQuiz = document.getElementById('btn-quiz');
  const mobileBtnQuiz = document.getElementById('mobile-btn-quiz');
  
  // Menú móvil
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  // Quiz Elements
  const quizIntro = document.getElementById('quiz-intro');
  const quizArea = document.getElementById('quiz-area');
  const quizResults = document.getElementById('quiz-results');
  const startQuizBtn = document.getElementById('start-quiz-btn');
  const nextQuestionBtn = document.getElementById('next-question-btn');
  const restartQuizBtn = document.getElementById('restart-quiz-btn');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const feedbackContainer = document.getElementById('feedback-container');
  const quizProgress = document.getElementById('quiz-progress');
  const quizScoreDisplay = document.getElementById('quiz-score');
  const finalScoreDisplay = document.getElementById('final-score');
  let resultsChartInstance = null;

  // Estado del Quiz
  let currentQuestions = [];
  let currentQuestionIndex = 0;
  let score = 0;

  // --- Theme Management ---
  function initTheme() {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      html.classList.add('dark');
      darkIcon.classList.remove('hidden');
    } else {
      html.classList.remove('dark');
      lightIcon.classList.remove('hidden');
    }
  }

  themeToggleBtn.addEventListener('click', () => {
    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');

    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        html.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        html.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    } else {
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        html.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
    // Update chart colors if exists
    if (resultsChartInstance) renderChart();
  });

  // --- Navegación ---
  function renderNav() {
    const navItemsHTML = studyData.map(topic => `
      <button data-id="${topic.id}" class="nav-item w-full text-left px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-colors">
        📘 ${topic.title}
      </button>
    `).join('');
    
    navMenu.innerHTML = navItemsHTML;
    mobileNavMenu.innerHTML = navItemsHTML;

    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        showStudyTopic(id);
        closeMobileMenu();
      });
    });
  }

  function hideAllSections() {
    welcomeSection.classList.add('hidden');
    studySection.classList.add('hidden');
    quizSection.classList.add('hidden');
  }

  function showStudyTopic(id) {
    hideAllSections();
    const topic = studyData.find(t => t.id === id);
    if (!topic) return;

    headerTitle.textContent = topic.title;

    let contentHTML = topic.subtopics.map(sub => `
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 class="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">${sub.subtitle}</h3>
        <div class="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          ${sub.content}
        </div>
      </div>
    `).join('');

    studyContent.innerHTML = contentHTML;
    studySection.classList.remove('hidden');
    
    // Render equations if any
    renderMathInElement(studyContent, {
      delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false}
      ]
    });
  }

  function showQuizSection() {
    hideAllSections();
    headerTitle.textContent = "Cuestionario";
    quizSection.classList.remove('hidden');
    quizIntro.classList.remove('hidden');
    quizArea.classList.add('hidden');
    quizResults.classList.add('hidden');
    closeMobileMenu();
  }

  btnQuiz.addEventListener('click', showQuizSection);
  mobileBtnQuiz.addEventListener('click', showQuizSection);

  // --- Menú Móvil ---
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
    mobileMenuOverlay.classList.remove('hidden');
  });

  function closeMobileMenu() {
    mobileMenu.classList.add('-translate-x-full');
    mobileMenuOverlay.classList.add('hidden');
  }

  closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
  mobileMenuOverlay.addEventListener('click', closeMobileMenu);

  // --- Lógica del Quiz ---
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  startQuizBtn.addEventListener('click', () => {
    // Select 20 random questions (or all if less than 20)
    let shuffledPool = shuffleArray([...questionPool]);
    currentQuestions = shuffledPool.slice(0, 20);
    currentQuestionIndex = 0;
    score = 0;
    
    quizIntro.classList.add('hidden');
    quizArea.classList.remove('hidden');
    loadQuestion();
  });

  function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    quizProgress.textContent = \`Pregunta \${currentQuestionIndex + 1} de \${currentQuestions.length}\`;
    quizScoreDisplay.textContent = score;
    questionText.textContent = q.question;
    
    feedbackContainer.classList.add('hidden');
    nextQuestionBtn.classList.add('hidden');
    optionsContainer.innerHTML = '';

    const shuffledOptions = shuffleArray([...q.options]);

    shuffledOptions.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option w-full text-left p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none';
      btn.textContent = opt;
      btn.addEventListener('click', () => handleAnswer(opt, q.correctAnswer, q.explanation));
      optionsContainer.appendChild(btn);
    });
  }

  function handleAnswer(selectedAnswer, correctAnswer, explanation) {
    // Disable all options
    const buttons = optionsContainer.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.disabled = true;
      btn.classList.remove('hover:bg-gray-50', 'dark:hover:bg-gray-700');
      
      if (btn.textContent === correctAnswer) {
        btn.classList.add('correct');
      } else if (btn.textContent === selectedAnswer) {
        btn.classList.add('incorrect');
      }
    });

    feedbackContainer.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800', 'dark:bg-green-900', 'dark:text-green-200', 'dark:bg-red-900', 'dark:text-red-200');

    if (selectedAnswer === correctAnswer) {
      score++;
      quizScoreDisplay.textContent = score;
      feedbackContainer.classList.add('bg-green-100', 'text-green-800', 'dark:bg-green-900', 'dark:text-green-200');
      feedbackContainer.innerHTML = \`<p class="font-bold mb-1">¡Correcto!</p><p>\${explanation}</p>\`;
    } else {
      feedbackContainer.classList.add('bg-red-100', 'text-red-800', 'dark:bg-red-900', 'dark:text-red-200');
      feedbackContainer.innerHTML = \`<p class="font-bold mb-1">Incorrecto</p><p>\${explanation}</p>\`;
    }

    nextQuestionBtn.classList.remove('hidden');
  }

  nextQuestionBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  });

  function showResults() {
    quizArea.classList.add('hidden');
    quizResults.classList.remove('hidden');
    finalScoreDisplay.textContent = score;
    renderChart();
  }

  restartQuizBtn.addEventListener('click', () => {
    quizResults.classList.add('hidden');
    quizIntro.classList.remove('hidden');
  });

  // --- Chart.js Render ---
  function renderChart() {
    const ctx = document.getElementById('resultsChart').getContext('2d');
    const isDark = html.classList.contains('dark');
    const textColor = isDark ? '#e2e8f0' : '#1e293b';

    if (resultsChartInstance) {
      resultsChartInstance.destroy();
    }

    resultsChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Aciertos', 'Errores'],
        datasets: [{
          data: [score, currentQuestions.length - score],
          backgroundColor: [
            '#22c55e', // Green
            '#ef4444'  // Red
          ],
          borderWidth: 0,
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: textColor,
              font: {
                family: 'Inter',
                size: 14
              }
            }
          }
        }
      }
    });
  }

  // --- Inicialización ---
  initTheme();
  renderNav();
});
