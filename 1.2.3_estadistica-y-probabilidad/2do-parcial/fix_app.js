const fs = require('fs');
const filePath = 'js/app.js';
let content = fs.readFileSync(filePath, 'utf8');

// Replace startExamMode logic
const targetStart = `    if (!appData.simulacros) return;
    
    const themeIndex = Math.random() > 0.5 ? 0 : 1;
    const selectedTheme = appData.simulacros[themeIndex];`;
    
const replacementStart = `    const simuladorUnit = appData.units.find(u => u.id === 'usimulador');
    if (!simuladorUnit) return;
    
    const isTema1 = Math.random() < 0.5;
    const selectedTheme = simuladorUnit.topics.find(t => t.id === (isTema1 ? 'tema1' : 'tema2'));`;

if (content.includes(targetStart)) {
    content = content.replace(targetStart, replacementStart);
} else {
    // Maybe it has the old uparcial logic?
    const targetUparcial = `const uparcialUnit = appData.units.find(u => u.id === 'uparcial');`;
    const replacementUparcial = `const uparcialUnit = appData.units.find(u => u.id === 'usimulador');`;
    if (content.includes(targetUparcial)) {
        content = content.replace(targetUparcial, replacementUparcial);
    } else {
        console.log('Failed to find startExamMode logic');
    }
}

// Replace the history text in updateGlobalAverage or where it is rendered.
// "Basado en los últimos 200 simulacros realizados este mes." -> "Basado en los últimos N simulacros que hiciste."
const targetText = `Basado en los últimos 200 simulacros realizados este mes.`;
const replacementText = `Basado en los últimos \${historyArray.length} simulacros que hiciste.`;
if (content.includes(targetText)) {
    content = content.replace(targetText, replacementText);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('app.js updated');
