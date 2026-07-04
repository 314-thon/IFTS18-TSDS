const fs = require('fs');
const filePath = 'js/data.js';
let content = fs.readFileSync(filePath, 'utf8');

// Update renderNav
const renderNavTarget = `                if (unit.id === 'uparcial') {
                    btn.className = baseClasses + \`bg-tertiary text-on-tertiary hover:bg-tertiary-container hover:text-on-tertiary-container \${currentUnitId === unit.id ? 'ring-2 ring-outline font-bold' : ''}\`;
                    btn.innerHTML = \`📝 \${unit.title}\`;
                } else {
                    btn.className = baseClasses + \`text-on-surface hover:bg-primary/20 hover:text-primary \${currentUnitId === unit.id ? 'bg-primary text-on-primary shadow-md' : ''}\`;
                    btn.innerText = \`\${unit.title}\`;
                }`;

const renderNavReplacement = `                if (unit.id === 'usimulador') {
                    btn.className = baseClasses + \`bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container \${currentUnitId === unit.id ? 'ring-2 ring-outline font-bold shadow-lg' : ''}\`;
                    btn.innerHTML = \`🚀 \${unit.title}\`;
                } else if (unit.id === 'uparcial') {
                    btn.className = baseClasses + \`bg-tertiary text-on-tertiary hover:bg-tertiary-container hover:text-on-tertiary-container \${currentUnitId === unit.id ? 'ring-2 ring-outline font-bold' : ''}\`;
                    btn.innerHTML = \`📝 \${unit.title}\`;
                } else {
                    btn.className = baseClasses + \`text-on-surface hover:bg-primary/20 hover:text-primary \${currentUnitId === unit.id ? 'bg-primary/10 font-bold' : ''}\`;
                    btn.innerText = \`\${unit.title}\`;
                }`;

// Update updateNavClasses
const updateNavTarget = `                if (uId === 'uparcial') {
                    if (uId === currentUnitId) {
                        btn.classList.add('ring-2', 'ring-outline', 'font-bold');
                    } else {
                        btn.classList.remove('ring-2', 'ring-outline', 'font-bold');
                    }
                } else {
                    if(uId === currentUnitId) {
                        btn.classList.add('bg-primary', 'text-on-primary', 'shadow-md');
                        btn.classList.remove('text-on-surface', 'hover:bg-primary/20', 'hover:text-primary');
                    } else {
                        btn.classList.remove('bg-primary', 'text-on-primary', 'shadow-md');
                        btn.classList.add('text-on-surface', 'hover:bg-primary/20', 'hover:text-primary');
                    }
                }`;

const updateNavReplacement = `                if (uId === 'usimulador') {
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
                }`;

if (content.includes(renderNavTarget) && content.includes(updateNavTarget)) {
    content = content.replace(renderNavTarget, renderNavReplacement);
    content = content.replace(updateNavTarget, updateNavReplacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('done');
} else {
    console.log('Targets not found');
}
