const fs = require('fs');

// Fix app.js
let appjs = fs.readFileSync('js/app.js', 'latin1');
if (appjs.includes('ExplicaciÃ³n')) {
    appjs = appjs.replace(/Explicaci\w*n/g, 'Explicación');
} else {
    appjs = fs.readFileSync('js/app.js', 'utf8');
    appjs = appjs.replace(/Explicaci[^\w]n/g, 'Explicación');
    appjs = appjs.replace(/Explicaci\uFFFDn/g, 'Explicación');
}
fs.writeFileSync('js/app.js', appjs, 'utf8');

// Fix index.html
let html = fs.readFileSync('index.html', 'latin1');
if (html.includes('ExplicaciÃ³n')) {
    html = html.replace(/Explicaci\w*n/g, 'Explicación');
} else {
    html = fs.readFileSync('index.html', 'utf8');
    html = html.replace(/Explicaci[^\w]n/g, 'Explicación');
    html = html.replace(/Explicaci\uFFFDn/g, 'Explicación');
}
fs.writeFileSync('index.html', html, 'utf8');

console.log('Fixed encodings!');
