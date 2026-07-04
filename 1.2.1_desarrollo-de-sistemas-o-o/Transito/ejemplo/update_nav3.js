const fs = require('fs');
const filePath = 'js/data.js';
let content = fs.readFileSync(filePath, 'utf8');

const targetStr = `btn.onclick = () => goToUnit(unit.id);`;
const replacementStr = `btn.onclick = () => { if (unit.id === 'usimulador') { if(window.startExamMode) window.startExamMode(); } else { goToUnit(unit.id); } };`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Nav onclick updated!');
} else {
    console.log('Target not found!');
}
