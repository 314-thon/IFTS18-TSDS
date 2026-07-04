const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// The corrupted emojis in the file based on the user's screenshot and previous output
html = html.replace(/<span class="text-3xl">.*?<\/span>/, '<span class="text-3xl">🧮</span>');
html = html.replace(/<span>.*?<\/span> Guardar PDF/, '<span>🖨️</span> Guardar PDF');

// And the bullet point
html = html.replace(/Unidad 3, 4 y 5 .*? Fórmulas clave/, 'Unidad 3, 4 y 5 • Fórmulas clave');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Emojis fixed!');
