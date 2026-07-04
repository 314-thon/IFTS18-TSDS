const fs = require('fs');
const content = fs.readFileSync('js/data.js', 'utf8');
const match = [...content.matchAll(/options[AB]:\s*\[([^\]]+)\]/g)];
match.forEach(m => {
    const opts = m[1].split(',').map(s => s.trim().replace(/'|"/g, ''));
    const unique = new Set(opts);
    if (unique.size !== opts.length) {
        console.log('Duplicate found:', opts);
    }
});
