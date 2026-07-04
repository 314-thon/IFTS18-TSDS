const fs = require('fs');
const filePath = 'js/data.js';
let content = fs.readFileSync(filePath, 'utf8');

const renderNavStart = content.indexOf('function renderNav() {');
const renderNavEnd = content.indexOf('}', content.indexOf('});', renderNavStart)) + 1;
const updateNavStart = content.indexOf('function updateNavClasses() {');
const updateNavEnd = content.indexOf('}', content.indexOf('});', updateNavStart)) + 1;

let newRenderNav = `        function renderNav() {
            const nav = document.getElementById('unit-nav');
            nav.innerHTML = ''; 
            appData.units.forEach(unit => {
                const btn = document.createElement('button');
                const baseClasses = "px-2 py-1 md:px-3 md:py-2 rounded-md text-xs md:text-sm font-medium transition-colors whitespace-nowrap ";
                if (unit.id === 'usimulador') {
                    btn.className = baseClasses + \`bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container \${currentUnitId === unit.id ? 'ring-2 ring-outline font-bold shadow-lg' : ''}\`;
                    btn.innerHTML = \`🚀 \${unit.title}\`;
                } else if (unit.id === 'uparcial') {
                    btn.className = baseClasses + \`bg-tertiary text-on-tertiary hover:bg-tertiary-container hover:text-on-tertiary-container \${currentUnitId === unit.id ? 'ring-2 ring-outline font-bold' : ''}\`;
                    btn.innerHTML = \`📝 \${unit.title}\`;
                } else {
                    btn.className = baseClasses + \`text-on-surface hover:bg-primary/20 hover:text-primary \${currentUnitId === unit.id ? 'bg-primary/10 font-bold' : ''}\`;
                    btn.innerText = \`\${unit.title}\`;
                }
                
                btn.onclick = () => goToUnit(unit.id);
                nav.appendChild(btn);
            });
        }`;

let newUpdateNav = `        function updateNavClasses() {
            const nav = document.getElementById('unit-nav');
            Array.from(nav.children).forEach((btn, idx) => {
                const uId = appData.units[idx].id;
                
                if (uId === 'usimulador') {
                    if (uId === currentUnitId) {
                        btn.classList.add('ring-2', 'ring-outline', 'font-bold', 'shadow-lg');
                    } else {
                        btn.classList.remove('ring-2', 'ring-outline', 'font-bold', 'shadow-lg');
                    }
                } else if (uId === 'uparcial') {
                    if (uId === currentUnitId) {
                        btn.classList.add('ring-2', 'ring-outline', 'font-bold');
                    } else {
                        btn.classList.remove('ring-2', 'ring-outline', 'font-bold');
                    }
                } else {
                    if(uId === currentUnitId) {
                        btn.classList.add('bg-primary/10', 'font-bold');
                        btn.classList.remove('text-on-surface', 'hover:bg-primary/20', 'hover:text-primary');
                    } else {
                        btn.classList.remove('bg-primary/10', 'font-bold');
                        btn.classList.add('text-on-surface', 'hover:bg-primary/20', 'hover:text-primary');
                    }
                }
            });
        }`;

if (renderNavStart !== -1 && updateNavStart !== -1) {
    const before = content.substring(0, renderNavStart);
    const middle = content.substring(renderNavEnd, updateNavStart);
    const after = content.substring(updateNavEnd);

    fs.writeFileSync(filePath, before + newRenderNav + middle + newUpdateNav + after, 'utf8');
    console.log('Nav logic updated!');
} else {
    console.log('Functions not found');
}
