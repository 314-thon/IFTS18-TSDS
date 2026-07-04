const fs = require('fs');
const filePath = 'js/data.js';
let content = fs.readFileSync(filePath, 'utf8');

const usimuladorData = {
    id: "usimulador",
    title: "SIMULADOR",
    subtitle: "EXAMEN",
    desc: "Simulador cronometrado con puntaje sobre 10.",
    topics: [
        {
            id: "tema1",
            title: "Simulacro Tema 1",
            exercises: [
                {
                    q: "1. Se analizan 1200 encuestados sobre el sistema operativo y el formato de su PC. Se dividen en Sistema Operativo (Windows (W) o Mac (M)) y Formato (Desktop (D) o Laptop (L)). Probabilidades:<br><br><table class='w-full text-center border-collapse border border-outline-variant mt-2 mb-4'><thead><tr class='bg-surface-variant text-on-surface-variant font-bold'><th></th><th class='border border-outline-variant p-2'>Desktop (D)</th><th class='border border-outline-variant p-2'>Laptop (L)</th><th class='border border-outline-variant p-2'>Total</th></tr></thead><tbody><tr><td class='border border-outline-variant font-bold p-2'>Windows (W)</td><td class='border border-outline-variant p-2'>0.15</td><td class='border border-outline-variant p-2'>0.45</td><td class='border border-outline-variant p-2'>0.60</td></tr><tr><td class='border border-outline-variant font-bold p-2'>Mac (M)</td><td class='border border-outline-variant p-2'>0.15</td><td class='border border-outline-variant p-2'>0.25</td><td class='border border-outline-variant p-2'>0.40</td></tr><tr class='bg-surface-variant/30'><td class='border border-outline-variant font-bold p-2'>Total</td><td class='border border-outline-variant p-2'>0.30</td><td class='border border-outline-variant p-2'>0.70</td><td class='border border-outline-variant p-2'>1.00</td></tr></tbody></table>Calcule las siguientes probabilidades:",
                    subA: "a. $$P(M \\cup D)$$",
                    subB: "b. $$P(L|W)$$",
                    optionsA: ["0.5500", "0.7000", "0.4500", "0.2500"],
                    optionsB: ["0.7500", "0.4500", "0.6400", "0.8500"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "Para 'a', la unión es P(M) + P(D) - P(M ∩ D) = 0.40 + 0.30 - 0.15 = 0.55. Para 'b', la condicional es P(W ∩ L) / P(W) = 0.45 / 0.60 = 0.75."
                },
                {
                    q: "2. Un firewall recibe intentos de acceso anómalos. El sistema soporta un máximo de 8 ataques por minuto antes de colapsar puertos. Según los registros, el 12% de los ataques logran penetrar la capa inicial de forma independiente.<br><br>Sea X el número de ataques que son BLOQUEADOS (éxito).",
                    subA: "a. Si entran 8 ataques, ¿cuál es la probabilidad de que al menos 7 sean bloqueados exitosamente?",
                    subB: "b. Si entran 8 ataques, ¿cuál es el número esperado de ataques que logran penetrar la capa inicial?",
                    optionsA: ["0.7519", "0.3596", "0.8800", "0.2481"],
                    optionsB: ["0.960", "7.040", "1.120", "0.120"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "a: X~Bi(8, 0.88). P(X>=7) = P(X=7) + P(X=8) = 0.3923 + 0.3596 = 0.7519. b: Penetrados Y = 8 - X. E[Y] = n * p_fallo = 8 * 0.12 = 0.96."
                },
                {
                    q: "3. En promedio, 12 correos de spam por hora evaden los filtros de un servidor. Suponga que la llegada sigue una distribución de Poisson.",
                    subA: "a. ¿Cuál es la probabilidad de que exactamente 10 correos lleguen durante una hora aleatoriamente seleccionada?",
                    subB: "b. ¿Cuál es la probabilidad de que 4 correos lleguen durante un periodo de 15 minutos?",
                    optionsA: ["0.1048", "0.0825", "0.1200", "0.1143"],
                    optionsB: ["0.1680", "0.2240", "0.0498", "0.1008"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "a: λ=12, P(X=10) = (e^-12 * 12^10)/10! ≈ 0.1048. b: Para 15 min, λ=3. P(X=4) = (e^-3 * 3^4)/4! ≈ 0.1680."
                },
                {
                    q: "4. El tiempo de vida útil de una batería de un dron tiene una distribución normal cuya media es 45 minutos con desviación estándar de 4 minutos.",
                    subA: "a. ¿Cuál es la probabilidad de que una batería dure más de 40 minutos pero menos de 48 minutos?",
                    subB: "b. Suponga que se compran 200 baterías. ¿Cuántas piensa usted que fallarán antes de los 36 minutos?",
                    optionsA: ["0.6678", "0.7734", "0.5521", "0.1056"],
                    optionsB: ["2 baterías", "5 baterías", "10 baterías", "1 batería"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "a: Z1=(40-45)/4=-1.25, Z2=(48-45)/4=0.75. P(-1.25 < Z < 0.75) = 0.7734 - 0.1056 = 0.6678. b: Z=(36-45)/4=-2.25. P(Z < -2.25) = 0.0122. En 200: 200 * 0.0122 = 2.44 ≈ 2."
                },
                {
                    q: "5. Dada una distribución normal estándar, encuentre:<br><br><div class='w-full max-w-sm mx-auto my-4 text-center'><svg viewBox='0 0 400 200' class='w-full h-auto stroke-on-surface fill-transparent'><defs><path id='bell-curve-new1' d='M 20 180 C 100 180, 140 20, 200 20 C 260 20, 300 180, 380 180' /><clipPath id='shade-left-new1'><rect x='0' y='0' width='260' height='200' /></clipPath></defs><use href='#bell-curve-new1' class='fill-primary/20 stroke-none' clip-path='url(#shade-left-new1)' /><path d='M 20 180 C 100 180, 140 20, 200 20 C 260 20, 300 180, 380 180' stroke-width='2' class='fill-none stroke-on-surface' /><line x1='20' y1='180' x2='380' y2='180' stroke-width='2' class='stroke-on-surface' /><line x1='200' y1='180' x2='200' y2='20' stroke-width='2' stroke-dasharray='5,5' class='stroke-on-surface' /><line x1='260' y1='180' x2='260' y2='60' stroke-width='2' class='stroke-on-surface' /><text x='110' y='140' class='fill-on-surface stroke-none text-xl font-bold'>0.9000</text><text x='195' y='198' class='fill-on-surface stroke-none font-bold text-lg'>μ</text><text x='255' y='198' class='fill-on-surface stroke-none font-bold text-lg'>K</text></svg></div>",
                    subA: "a. El área bajo la curva que yace entre $$P(-1.8 \\le Z \\le 0.5)$$",
                    subB: "b. El valor de k tal que $$P(Z < k) = 0.9000$$",
                    optionsA: ["0.6556", "0.6915", "0.7274", "0.5843"],
                    optionsB: ["1.28", "1.64", "1.96", "1.55"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "a: P(Z <= 0.5) - P(Z <= -1.8) = 0.6915 - 0.0359 = 0.6556. b: Buscando en tabla área 0.9000, el valor de k es 1.28."
                }
            ]
        },
        {
            id: "tema2",
            title: "Simulacro Tema 2",
            exercises: [
                {
                    q: "1. Se testea un grupo de 500 pacientes clínicos. Se dividen en Medicamento Administrado (A o B) y Efecto Secundario (Sí(S) o Nada(N)):<br><br><table class='w-full text-center border-collapse border border-outline-variant mt-2 mb-4'><thead><tr class='bg-surface-variant text-on-surface-variant font-bold'><th></th><th class='border border-outline-variant p-2'>Sí (S)</th><th class='border border-outline-variant p-2'>Nada (N)</th><th class='border border-outline-variant p-2'>Totales</th></tr></thead><tbody><tr><td class='border border-outline-variant font-bold p-2'>Medicamento A</td><td class='border border-outline-variant p-2'>.15</td><td class='border border-outline-variant p-2'>.45</td><td class='border border-outline-variant p-2'>.60</td></tr><tr><td class='border border-outline-variant font-bold p-2'>Medicamento B</td><td class='border border-outline-variant p-2'>.10</td><td class='border border-outline-variant p-2'>.30</td><td class='border border-outline-variant p-2'>.40</td></tr><tr class='bg-surface-variant/30'><td class='border border-outline-variant font-bold p-2'>Totales</td><td class='border border-outline-variant p-2'>.25</td><td class='border border-outline-variant p-2'>.75</td><td class='border border-outline-variant p-2'>1.00</td></tr></tbody></table>Calcule las siguientes probabilidades:",
                    subA: "a. $$P(B \\cap N)$$",
                    subB: "b. $$P(S|A)$$",
                    optionsA: ["0.3000", "0.4000", "0.1000", "0.7500"],
                    optionsB: ["0.2500", "0.1500", "0.6000", "0.4500"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "Para 'a', la intersección directa en la tabla es 0.30. Para 'b', es condicional: P(S ∩ A) / P(A) = 0.15 / 0.60 = 0.25."
                },
                {
                    q: "2. Un ascensor soporta hasta 8 personas. Un grupo de 10 personas realiza reservas. Según registros previos, el 20% de quienes reservan cancelan independientemente.<br><br>Sea X el número de personas que se presentan.",
                    subA: "a. Si se hacen 10 reservaciones, ¿cuál es la probabilidad de que al menos una persona quede afuera?",
                    subB: "b. Si se hacen 10 reservaciones, ¿cuál es el número esperado de lugares vacíos en el ascensor?",
                    optionsA: ["0.3758", "0.2684", "0.1074", "0.6242"],
                    optionsB: ["0.483", "2.000", "0.200", "1.250"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "a: X~Bi(10, 0.80). 'Quedar afuera' significa que se presentan 9 o 10. P(X=9)+P(X=10) = 0.2684 + 0.1074 = 0.3758. b: Sumando (8-x)*P(X=x) para x de 0 a 7 da la esperanza ~0.483."
                },
                {
                    q: "3. En promedio 4 camiones por hora llegan a un depósito logístico. Suponga una distribución de Poisson.",
                    subA: "a. ¿Cuál es la probabilidad de que exactamente 2 camiones lleguen durante una hora seleccionada?",
                    subB: "b. ¿Cuál es la probabilidad de que 1 camión llegue durante un periodo de 30 minutos?",
                    optionsA: ["0.1465", "0.1954", "0.0733", "0.1839"],
                    optionsB: ["0.2707", "0.1353", "0.5413", "0.1465"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "a: λ=4, P(X=2) = (e^-4 * 4^2)/2! ≈ 0.1465. b: Para 30 minutos, λ=2. P(X=1) = (e^-2 * 2^1)/1! ≈ 0.2707."
                },
                {
                    q: "4. El volumen de llenado de una embotelladora tiene una distribución normal cuya media es 100 ml con desviación estándar de 2 ml.",
                    subA: "a. ¿Cuál es la probabilidad de que una botella se llene con menos de 97 ml?",
                    subB: "b. Suponga que se revisan 500 botellas. ¿Cuántas botellas piensa usted que superarán los 103 ml?",
                    optionsA: ["0.0668", "0.9332", "0.1336", "0.0228"],
                    optionsB: ["33 botellas", "67 botellas", "10 botellas", "15 botellas"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "a: Z=(97-100)/2=-1.5. P(Z<-1.5) = 0.0668. b: Z=(103-100)/2=1.5. P(Z>1.5) = 0.0668. En 500 botellas: 500 * 0.0668 = 33.4 ≈ 33 botellas."
                },
                {
                    q: "5. Dada una distribución normal estándar, encuentre:<br><br><div class='w-full max-w-sm mx-auto my-4 text-center'><svg viewBox='0 0 400 200' class='w-full h-auto stroke-on-surface fill-transparent'><defs><path id='bell-curve-new2' d='M 20 180 C 100 180, 140 20, 200 20 C 260 20, 300 180, 380 180' /><clipPath id='shade-right-new2'><rect x='255' y='0' width='145' height='200' /></clipPath></defs><use href='#bell-curve-new2' class='fill-primary/20 stroke-none' clip-path='url(#shade-right-new2)' /><path d='M 20 180 C 100 180, 140 20, 200 20 C 260 20, 300 180, 380 180' stroke-width='2' class='fill-none stroke-on-surface' /><line x1='20' y1='180' x2='380' y2='180' stroke-width='2' class='stroke-on-surface' /><line x1='200' y1='180' x2='200' y2='20' stroke-width='2' stroke-dasharray='5,5' class='stroke-on-surface' /><line x1='255' y1='180' x2='255' y2='65' stroke-width='2' class='stroke-on-surface' /><text x='270' y='160' class='fill-on-surface stroke-none text-sm font-bold'>0.1000</text><text x='195' y='198' class='fill-on-surface stroke-none font-bold text-lg'>μ</text><text x='250' y='198' class='fill-on-surface stroke-none font-bold text-lg'>K</text></svg></div>",
                    subA: "a. El área bajo la curva que yace entre $$P(-2.1 \\le Z \\le -0.5)$$",
                    subB: "b. El valor de k tal que $$P(Z > k) = 0.1000$$",
                    optionsA: ["0.2906", "0.3085", "0.0179", "0.3264"],
                    optionsB: ["1.28", "1.64", "2.33", "1.96"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "a: P(Z<=-0.5) - P(Z<=-2.1) = 0.3085 - 0.0179 = 0.2906. b: P(Z>k)=0.1000 implica P(Z<=k)=0.9000. Buscando en tabla, z=1.28."
                }
            ]
        }
    ]
};

const newStr = JSON.stringify(usimuladorData, null, 4).split('\n').map(l => '                ' + l).join('\n');
const insertPos = content.indexOf('        // Ñepyrũ (Init)');

if (insertPos !== -1) {
    const arrEndPos = content.lastIndexOf(']', insertPos);
    if (arrEndPos !== -1) {
        const newData = content.substring(0, arrEndPos) + ',\n' + newStr + '\n            ' + content.substring(arrEndPos);
        fs.writeFileSync(filePath, newData, 'utf8');
        console.log('done');
    }
}
