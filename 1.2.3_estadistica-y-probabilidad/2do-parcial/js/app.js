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
            
            window.print();
            
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
