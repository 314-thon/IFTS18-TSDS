const fs = require('fs');

const replacements = {
    'Ã¡': 'á',
    'Ã©': 'é',
    'Ã­': 'í',
    'Ã³': 'ó',
    'Ãº': 'ú',
    'Ã±': 'ñ',
    'Ã ': 'Á',
    'Ã‰': 'É',
    'Ã\x8D': 'Í',
    'Ã“': 'Ó',
    'Ãš': 'Ú',
    'Ã‘': 'Ñ',
    'Âº': 'º',
    'Â©': '©',
    'ExÃ¡menes': 'Exámenes',
    'automÃ¡tica': 'automática',
    'correcciÃ³n': 'corrección',
    'CronÃ³metro': 'Cronómetro',
    'EstadÃ\xADstica': 'Estadística'
};

function fixEncoding(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    for (const [bad, good] of Object.entries(replacements)) {
        content = content.split(bad).join(good);
    }
    
    // Also specific user request for footer
    const targetFooter = 'Instituto de Formación Técnica Superior Nº 18. Especialización en Análisis de Sistemas y Ciencia de Datos.';
    const replacementFooter = 'INSTITUTO DE FORMACIÓN TÉCNICA SUPERIOR N° 18 - TÉCNICO SUPERIOR EN DESARROLLO DE SOFTWARE';
    content = content.split(targetFooter).join(replacementFooter);
    
    fs.writeFileSync(filePath, content, 'utf8');
}

fixEncoding('index.html');
fixEncoding('js/app.js');
console.log('All encodings fixed!');
