const fs = require('fs');

let dataJS = fs.readFileSync('js/data.js', 'utf8');
let temasJS = fs.readFileSync('temas adicionales.js', 'utf8');

const injectionPoint = '        function renderNav() {';

if (dataJS.includes(injectionPoint)) {
    const injectionStr = temasJS + "\n        appData.units.find(u => u.id === 'usimulador').topics.push(...nuevosTemas);\n\n        function renderNav() {";
    dataJS = dataJS.replace(injectionPoint, injectionStr);
    fs.writeFileSync('js/data.js', dataJS, 'utf8');
    console.log('Injected new themes into data.js');
} else {
    console.log('Injection point not found in data.js');
}

let appJS = fs.readFileSync('js/app.js', 'utf8');
const oldThemeSelection = `    const isTema1 = Math.random() < 0.5;
    const selectedTheme = simuladorUnit.topics.find(t => t.id === (isTema1 ? 'tema1' : 'tema2'));`;

const newThemeSelection = `    const randomIndex = Math.floor(Math.random() * simuladorUnit.topics.length);
    const selectedTheme = simuladorUnit.topics[randomIndex];`;

if (appJS.includes(oldThemeSelection)) {
    appJS = appJS.replace(oldThemeSelection, newThemeSelection);
    fs.writeFileSync('js/app.js', appJS, 'utf8');
    console.log('Updated app.js theme selection logic');
} else {
    console.log('Old theme selection not found in app.js');
}
