const fs = require('fs');

// 1. Fix text-slate-800 in index.html
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('text-2xl font-extrabold text-slate-800 tracking-tight', 'text-2xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight');
fs.writeFileSync('index.html', html, 'utf8');

// 2. Fix selectUnit in data.js to hide exam screens
let data = fs.readFileSync('js/data.js', 'utf8');
const oldSelectUnit = `        function selectUnit(unitId) {
            currentUnitId = unitId;
            updateNavClasses();
            
            const unit = appData.units.find(u => u.id === unitId);`;

const newSelectUnit = `        function selectUnit(unitId) {
            currentUnitId = unitId;
            updateNavClasses();
            
            // Hide exam screens when navigating to a unit
            const examScreen = document.getElementById('exam-screen');
            if(examScreen) { examScreen.classList.add('hidden'); examScreen.classList.remove('flex'); }
            const resultsScreen = document.getElementById('exam-results-screen');
            if(resultsScreen) { resultsScreen.classList.add('hidden'); resultsScreen.classList.remove('flex'); }
            const reviewScreen = document.getElementById('exam-review-screen');
            if(reviewScreen) { reviewScreen.classList.add('hidden'); reviewScreen.classList.remove('flex'); }
            
            const unit = appData.units.find(u => u.id === unitId);`;

if (data.includes(oldSelectUnit)) {
    data = data.replace(oldSelectUnit, newSelectUnit);
    fs.writeFileSync('js/data.js', data, 'utf8');
}

console.log('Final fixes applied!');
