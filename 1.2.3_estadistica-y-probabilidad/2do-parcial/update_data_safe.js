const fs = require('fs');
const filePath = 'js/data.js';
let content = fs.readFileSync(filePath, 'utf8');

const uparcialData = {
    id: "uparcial",
    title: "Simulacros de Parcial",
    topics: [
        {
            id: "tema1",
            title: "Simulacro Tema 1",
            exercises: [
                {
                    q: "1. Se hizo un estudio a 1000 dispositivos móviles. Se dividen en Sistema Operativo (Android (A) o iOS (I)) y Tipo (Teléfono (P) o Tablet (B)). Probabilidades:<br><br><table class='w-full text-center border-collapse border border-outline-variant mt-2 mb-4'><thead><tr class='bg-surface-variant text-on-surface-variant font-bold'><th></th><th class='border border-outline-variant p-2'>Teléfono (P)</th><th class='border border-outline-variant p-2'>Tablet (B)</th><th class='border border-outline-variant p-2'>Total</th></tr></thead><tbody><tr><td class='border border-outline-variant font-bold p-2'>Android (A)</td><td class='border border-outline-variant p-2'>0.50</td><td class='border border-outline-variant p-2'>0.15</td><td class='border border-outline-variant p-2'>0.65</td></tr><tr><td class='border border-outline-variant font-bold p-2'>iOS (I)</td><td class='border border-outline-variant p-2'>0.25</td><td class='border border-outline-variant p-2'>0.10</td><td class='border border-outline-variant p-2'>0.35</td></tr><tr class='bg-surface-variant/30'><td class='border border-outline-variant font-bold p-2'>Total</td><td class='border border-outline-variant p-2'>0.75</td><td class='border border-outline-variant p-2'>0.25</td><td class='border border-outline-variant p-2'>1.00</td></tr></tbody></table>Calcule las siguientes probabilidades:",
                    subA: "a. $$P(I \\cup B)$$",
                    subB: "b. $$P(P|A)$$",
                    optionsA: ["0.5000", "0.6000", "0.4500", "0.3500"],
                    optionsB: ["0.7692", "0.5000", "0.6500", "0.2500"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "Para 'a', la unión es P(I) + P(B) - P(I ∩ B) = 0.35 + 0.25 - 0.10 = 0.50. Para 'b', la condicional es P(P ∩ A) / P(A) = 0.50 / 0.65 = 0.7692."
                },
                {
                    q: "2. Un clúster con 4 servidores principales recibe ráfagas de tráfico. El sistema de balanceo acepta un máximo de 6 peticiones por segundo. Según los registros, el 10% de las peticiones fallan (timeout) de forma independiente.<br><br>Sea X el número de peticiones que NO fallan (éxito).",
                    subA: "a. Si entran 6 peticiones, ¿cuál es la probabilidad de que al menos un servidor quede sobrecargado (es decir, que haya más de 4 peticiones exitosas)?",
                    subB: "b. Si entran 6 peticiones, ¿cuál es el número esperado de servidores inactivos cuando el tráfico se distribuye?",
                    optionsA: ["0.8857", "0.5314", "0.1143", "0.9841"],
                    optionsB: ["0.017", "0.100", "0.540", "0.885"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "a: X~Bi(6, 0.9). P(X>4) = P(X=5) + P(X=6) = 0.3543 + 0.5314 = 0.8857. b: Inactivos = max(0, 4-X). E[inactivos] = 4*P(X=0) + ... + 1*P(X=3) ≈ 0.017."
                },
                {
                    q: "3. En promedio, 8 peticiones por minuto llegan a la API de un sistema. Suponga que la llegada sigue una distribución de Poisson.",
                    subA: "a. ¿Cuál es la probabilidad de que exactamente 8 peticiones lleguen durante un minuto aleatoriamente seleccionado?",
                    subB: "b. ¿Cuál es la probabilidad de que 3 peticiones lleguen durante un periodo de 30 segundos?",
                    optionsA: ["0.1396", "0.2500", "0.0800", "0.1125"],
                    optionsB: ["0.1954", "0.0183", "0.3678", "0.1042"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "a: λ=8, P(X=8) = (e^-8 * 8^8)/8! ≈ 0.1396. b: Para 30 seg, λ=4. P(X=3) = (e^-4 * 4^3)/3! ≈ 0.1954."
                },
                {
                    q: "4. El tiempo de vida útil de un disco SSD bajo carga intensiva tiene una distribución normal cuya media es 50 meses con desviación estándar de 5 meses.",
                    subA: "a. ¿Cuál es la probabilidad de que un disco falle en más de 40 meses pero en menos de 45 meses?",
                    subB: "b. Suponga que en el datacenter hay 1000 discos instalados. ¿Cuántos discos piensa usted que fallarán antes de los 35 meses?",
                    optionsA: ["0.1359", "0.3413", "0.1587", "0.4772"],
                    optionsB: ["1 disco", "13 discos", "3 discos", "15 discos"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "a: Z1=(40-50)/5=-2, Z2=(45-50)/5=-1. P(-2 < Z < -1) = 0.1587 - 0.0228 = 0.1359. b: Z=(35-50)/5=-3. P(Z < -3) = 0.00135. En 1000 discos: 1000*0.00135 = 1.35 ≈ 1 disco."
                },
                {
                    q: "5. Dada una distribución normal estándar, encuentre:<br><br><div class='w-full max-w-sm mx-auto my-4 text-center'><svg viewBox='0 0 400 200' class='w-full h-auto stroke-on-surface fill-transparent'><path d='M20 180 Q 200 -50 380 180' stroke-width='2'/><line x1='20' y1='180' x2='380' y2='180' stroke-width='2'/><line x1='200' y1='180' x2='200' y2='20' stroke-width='2' stroke-dasharray='5,5'/><text x='195' y='195' class='fill-on-surface stroke-none font-bold text-lg'>μ</text></svg></div>",
                    subA: "a. El área bajo la curva que yace entre $$P(-1.5 \\le Z \\le 0.8)$$",
                    subB: "b. El valor de k tal que $$P(Z < k) = 0.9500$$",
                    optionsA: ["0.7213", "0.7881", "0.0668", "0.8549"],
                    optionsB: ["1.645", "1.960", "1.280", "1.555"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "a: P(Z <= 0.8) - P(Z <= -1.5) = 0.7881 - 0.0668 = 0.7213. b: Buscando en tabla área 0.9500, el valor de k es aproximadamente 1.64 o 1.65 (1.645)."
                }
            ]
        },
        {
            id: "tema2",
            title: "Simulacro Tema 2",
            exercises: [
                {
                    q: "1. Es frecuente que hombres y mujeres no estén de acuerdo en qué piensan acerca de seleccionar una pareja. Suponga que una encuesta hecha a 1000 personas de entre 20 y 30 años dio las siguientes respuestas, a la pregunta de si es más importante para su futura pareja ser capaz de comunicar sus sentimientos (F) de lo que es para esa persona vivir bien (G):<br><br><table class='w-full text-center border-collapse border border-outline-variant mt-2 mb-4'><thead><tr class='bg-surface-variant text-on-surface-variant font-bold'><th></th><th class='border border-outline-variant p-2'>Sentimientos (F)</th><th class='border border-outline-variant p-2'>Vivir bien (G)</th><th class='border border-outline-variant p-2'>Totales</th></tr></thead><tbody><tr><td class='border border-outline-variant font-bold p-2'>Hombres (M)</td><td class='border border-outline-variant p-2'>.35</td><td class='border border-outline-variant p-2'>.20</td><td class='border border-outline-variant p-2'>.55</td></tr><tr><td class='border border-outline-variant font-bold p-2'>Mujeres (W)</td><td class='border border-outline-variant p-2'>.36</td><td class='border border-outline-variant p-2'>.09</td><td class='border border-outline-variant p-2'>.45</td></tr><tr class='bg-surface-variant/30'><td class='border border-outline-variant font-bold p-2'>Totales</td><td class='border border-outline-variant p-2'>.71</td><td class='border border-outline-variant p-2'>.29</td><td class='border border-outline-variant p-2'>1.00</td></tr></tbody></table>Si al azar se selecciona una persona de este grupo de 1000, calcule las siguientes probabilidades:",
                    subA: "a. $$P(M \\cap F)$$",
                    subB: "b. $$P(F|M)$$",
                    optionsA: ["0.3500", "0.5500", "0.7100", "0.2000"],
                    optionsB: ["0.6364", "0.3500", "0.4930", "0.7100"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "Para 'a', la intersección directa en la tabla es 0.35. Para 'b', es condicional: P(F ∩ M) / P(M) = 0.35 / 0.55 = 0.6364."
                },
                {
                    q: "2. Una combi ejecutiva que sale del microcentro hacia Zona Norte puede transportar hasta 5 pasajeros en cualquier viaje. La empresa acepta un máximo de 7 reservaciones por viaje, y cada pasajero debe tener reservación. Según registros previos, el 15% de quienes reservan no se presentan al viaje. Suponga independencia entre los pasajeros.<br><br>Sea X el número de pasajeros que se presentan al viaje.",
                    subA: "a. Si se hacen 7 reservaciones, ¿cuál es la probabilidad de que al menos un pasajero con reservación no pueda ser acomodado en el viaje?",
                    subB: "b. Si se hacen 7 reservaciones, ¿cuál es el número esperado de lugares sin ocupar cuando la combi parte?",
                    optionsA: ["0.7166", "0.3960", "0.3206", "0.2834"],
                    optionsB: ["0.086", "0.850", "0.150", "1.050"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "a: X~Bi(7, 0.85). 'Al menos uno no acomodado' significa que se presentan 6 o 7. P(X=6)+P(X=7) = 0.396 + 0.3206 = 0.7166. b: Lugares sin ocupar = max(0, 5-X). Multiplicando las probabilidades P(X=x) por los lugares vacíos (5, 4, 3, 2, 1) se obtiene la esperanza ~0.086."
                },
                {
                    q: "3. En promedio 6 personas por hora hacen alguna transacción en un cajero electrónico ubicado en un supermercado. Suponga una distribución de Poisson.",
                    subA: "a. ¿Cuál es la probabilidad de que exactamente 6 usen el cajero durante una hora aleatoriamente seleccionada?",
                    subB: "b. ¿Cuál es la probabilidad de que dos personas lo utilicen durante un periodo de 10 minutos?",
                    optionsA: ["0.1606", "0.1490", "0.0025", "0.3679"],
                    optionsB: ["0.1839", "0.3679", "0.0803", "0.1606"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "a: λ=6, P(X=6) = (e^-6 * 6^6)/6! ≈ 0.1606. b: Para 10 minutos (1/6 de hora), λ=1. P(X=2) = (e^-1 * 1^2)/2! ≈ 0.1839."
                },
                {
                    q: "4. El tiempo necesario para hacer un examen final en un determinado curso de una universidad tiene una distribución normal cuya media es 80 minutos con desviación estándar de 10 minutos.",
                    subA: "a. ¿Cuál es la probabilidad de que un estudiante termine el examen en más de 60 minutos pero en menos de 75 minutos?",
                    subB: "b. Suponga que en la clase hay 60 estudiantes y que el tiempo para resolver el examen es de 90 minutos. ¿Cuántos estudiantes piensa usted que no podrán terminar el examen en este tiempo?",
                    optionsA: ["0.2857", "0.3085", "0.0228", "0.6915"],
                    optionsB: ["10 estudiantes", "9 estudiantes", "5 estudiantes", "15 estudiantes"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "a: Z1=(60-80)/10=-2, Z2=(75-80)/10=-0.5. Área = 0.3085 - 0.0228 = 0.2857. b: Z=(90-80)/10=1. P(Z>1) = 1 - 0.8413 = 0.1587. En 60 estudiantes: 60 * 0.1587 = 9.522 ≈ 10 estudiantes."
                },
                {
                    q: "5. Dada una distribución normal estándar, encuentre:<br><br><div class='w-full max-w-sm mx-auto my-4 text-center'><svg viewBox='0 0 400 200' class='w-full h-auto stroke-on-surface fill-transparent'><path d='M20 180 Q 200 -50 380 180' stroke-width='2'/><line x1='20' y1='180' x2='380' y2='180' stroke-width='2'/><line x1='280' y1='180' x2='280' y2='100' stroke-width='2'/><path d='M280 180 L280 100 Q 320 150 380 180 Z' class='fill-primary/20 stroke-none'/><text x='310' y='170' class='fill-on-surface stroke-none text-sm font-bold'>0.1867</text><text x='195' y='195' class='fill-on-surface stroke-none font-bold text-lg'>μ</text><text x='275' y='195' class='fill-on-surface stroke-none font-bold text-lg'>K</text></svg></div>",
                    subA: "a. El área bajo la curva que yace entre $$P(-2.43 \\le Z \\le -0.3)$$",
                    subB: "b. El valor de k tal que $$P(Z > k) = 0.1867$$",
                    optionsA: ["0.3746", "0.3821", "0.0075", "0.6179"],
                    optionsB: ["0.89", "0.85", "1.05", "-0.89"],
                    correctA: 0,
                    correctB: 0,
                    explanation: "a: P(Z<=-0.3) - P(Z<=-2.43) = 0.3821 - 0.0075 = 0.3746. b: P(Z>k)=0.1867 implica P(Z<=k)=0.8133. Buscando en tabla, z=0.89."
                }
            ]
        }
    ]
};

const startIndex = content.indexOf('{\\n                    id: "uparcial",');
const matchStr = 'id: "uparcial",';
const indexStart = content.indexOf(matchStr);

if (indexStart !== -1) {
    // Busca el corchete de apertura '{' antes del id
    const trueStart = content.lastIndexOf('{', indexStart);
    
    // El final de la unidad es antes de `];` de la unidad, o bien podemos buscar el string fijo del original:
    const endStr = '                            exercises: []\\n                        }\\n                    ]\\n                }';
    const trueEnd = content.indexOf(endStr) + endStr.length;
    
    if (trueStart !== -1 && trueEnd !== -1) {
        const newContent = content.substring(0, trueStart) + JSON.stringify(uparcialData, null, 4).split('\\n').map(l => '                ' + l).join('\\n') + content.substring(trueEnd);
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('done');
    } else {
        console.log('Could not find start or end exactly');
    }
} else {
    console.log('Could not find uparcial match');
}
