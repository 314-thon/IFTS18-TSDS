const fs = require('fs');

// Fix app.js (avg/10 -> avg) and result messages
let app = fs.readFileSync('js/app.js', 'utf8');
app = app.replace('if (elText) elText.innerText = `${avg}/10`;', 'if (elText) elText.innerText = `${avg}`;');

const oldLogic = `const resultMsg = examScore >= 7 
        ? "¡Felicitaciones! Si mantenés estos resultados podés promocionar." 
        : "Casi, tenemos que seguir repasando.";`;
const newLogic = `const resultMsg = examScore >= 7 
        ? "¡Felicitaciones! Si mantenés estos resultados podés promocionar." 
        : (examScore < 4 ? "Tenemos que seguir repasando." : "Casi, tenemos que seguir repasando.");`;
app = app.replace(oldLogic, newLogic);
fs.writeFileSync('js/app.js', app, 'utf8');

// Fix index.html Â¡
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('Â¡Simulacro', '¡Simulacro');
fs.writeFileSync('index.html', html, 'utf8');

console.log('All 3 fixes applied!');
