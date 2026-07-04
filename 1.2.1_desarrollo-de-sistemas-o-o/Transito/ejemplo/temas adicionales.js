const nuevosTemas = [
    {
        id: "tema3",
        title: "Simulacro Tema 3",
        exercises: [
            {
                q: "1. En una fábrica se analizan las piezas producidas según la máquina de origen y si presentan o no defectos. Se dividen en Máquina (A o B) y Estado (Defectuoso (Y) o Normal (N)):<br><br><table class='w-full text-center border-collapse border border-outline-variant mt-2 mb-4'><thead><tr class='bg-surface-variant text-on-surface-variant font-bold'><th></th><th class='border border-outline-variant p-2'>Defectuoso (Y)</th><th class='border border-outline-variant p-2'>Normal (N)</th><th class='border border-outline-variant p-2'>Total</th></tr></thead><tbody><tr><td class='border border-outline-variant font-bold p-2'>Máquina A</td><td class='border border-outline-variant p-2'>0.05</td><td class='border border-outline-variant p-2'>0.45</td><td class='border border-outline-variant p-2'>0.50</td></tr><tr><td class='border border-outline-variant font-bold p-2'>Máquina B</td><td class='border border-outline-variant p-2'>0.10</td><td class='border border-outline-variant p-2'>0.40</td><td class='border border-outline-variant p-2'>0.50</td></tr><tr class='bg-surface-variant/30'><td class='border border-outline-variant font-bold p-2'>Total</td><td class='border border-outline-variant p-2'>0.15</td><td class='border border-outline-variant p-2'>0.85</td><td class='border border-outline-variant p-2'>1.00</td></tr></tbody></table>Calcule las siguientes probabilidades:",
                subA: "a. $$P(B \\cup N)$$",
                subB: "b. $$P(Y|A)$$",
                optionsA: ["0.9500", "0.8500", "0.5000", "0.4000"],
                optionsB: ["0.1000", "0.0500", "0.2000", "0.1500"],
                correctA: 0,
                correctB: 0,
                explanation: "Para 'a', la unión es P(B) + P(N) - P(B ∩ N) = 0.50 + 0.85 - 0.40 = 0.95. Para 'b', la condicional es P(Y ∩ A) / P(A) = 0.05 / 0.50 = 0.10."
            },
            {
                q: "2. Una línea de producción automatizada tiene una tasa histórica de rechazo del 25% por defectos milimétricos. Se toma un lote aleatorio de 12 piezas para auditoría.<br><br>Sea X el número de piezas que resultan defectuosas.",
                subA: "a. ¿Cuál es la probabilidad de que al menos 2 piezas resulten defectuosas?",
                subB: "b. ¿Cuál es el número esperado de piezas defectuosas en la muestra?",
                optionsA: ["0.8416", "0.1584", "0.2834", "0.7166"],
                optionsB: ["3.000", "4.000", "2.500", "1.500"],
                correctA: 0,
                correctB: 0,
                explanation: "a: X~Bi(12, 0.25). P(X>=2) = 1 - P(X=0) - P(X=1) = 1 - 0.0317 - 0.1267 = 0.8416. b: Esperanza E[X] = n * p = 12 * 0.25 = 3."
            },
            {
                q: "3. Los servidores de una base de datos experimentan caídas de conexión a razón de 6 veces por hora, siguiendo un proceso de Poisson.",
                subA: "a. ¿Cuál es la probabilidad de que el servidor se caiga exactamente 5 veces en la próxima hora?",
                subB: "b. ¿Cuál es la probabilidad de que el servidor se caiga exactamente 2 veces en un lapso de 30 minutos?",
                optionsA: ["0.1606", "0.1339", "0.1008", "0.1755"],
                optionsB: ["0.2240", "0.1680", "0.1404", "0.2510"],
                correctA: 0,
                correctB: 0,
                explanation: "a: λ=6, P(X=5) = (e^-6 * 6^5)/5! ≈ 0.1606. b: Para 30 min, λ=3. P(X=2) = (e^-3 * 3^2)/2! ≈ 0.2240."
            },
            {
                q: "4. El peso de los paquetes despachados en un centro logístico se distribuye normalmente con una media de 200 gramos y una desviación estándar de 15 gramos.",
                subA: "a. ¿Cuál es la probabilidad de que un paquete elegido al azar pese entre 190 y 215 gramos?",
                subB: "b. De un lote de 400 paquetes, ¿cuántos se espera que pesen menos de 170 gramos?",
                optionsA: ["0.5899", "0.7486", "0.3413", "0.6826"],
                optionsB: ["9 paquetes", "15 paquetes", "4 paquetes", "22 paquetes"],
                correctA: 0,
                correctB: 0,
                explanation: "a: Z1=(190-200)/15=-0.67, Z2=(215-200)/15=1.00. P(-0.67 < Z < 1) = 0.8413 - 0.2514 = 0.5899. b: Z=(170-200)/15=-2.00. P(Z<-2) = 0.0228. En 400: 400 * 0.0228 = 9.12 ≈ 9."
            },
            {
                q: "5. Dada una distribución normal estándar, encuentre:<br><br><div class='w-full max-w-sm mx-auto my-4 text-center'><svg viewBox='0 0 400 200' class='w-full h-auto stroke-on-surface fill-transparent'><defs><path id='bell-curve-new3' d='M 20 180 C 100 180, 140 20, 200 20 C 260 20, 300 180, 380 180' /><clipPath id='shade-mid-new3'><rect x='110' y='0' width='180' height='200' /></clipPath></defs><use href='#bell-curve-new3' class='fill-primary/20 stroke-none' clip-path='url(#shade-mid-new3)' /><path d='M 20 180 C 100 180, 140 20, 200 20 C 260 20, 300 180, 380 180' stroke-width='2' class='fill-none stroke-on-surface' /><line x1='20' y1='180' x2='380' y2='180' stroke-width='2' class='stroke-on-surface' /><line x1='200' y1='180' x2='200' y2='20' stroke-width='2' stroke-dasharray='5,5' class='stroke-on-surface' /><text x='180' y='140' class='fill-on-surface stroke-none text-xl font-bold'>Área</text><text x='195' y='198' class='fill-on-surface stroke-none font-bold text-lg'>μ</text></svg></div>",
                subA: "a. El área bajo la curva que yace entre $$P(-1.5 \\le Z \\le 1.5)$$",
                subB: "b. El valor de k tal que $$P(Z < k) = 0.9500$$",
                optionsA: ["0.8664", "0.9332", "0.7745", "0.4332"],
                optionsB: ["1.64", "1.96", "1.28", "2.33"],
                correctA: 0,
                correctB: 0,
                explanation: "a: P(Z <= 1.5) - P(Z <= -1.5) = 0.9332 - 0.0668 = 0.8664. b: Buscando en tabla de Z un área acumulada de 0.9500, el valor de k es 1.64 (o 1.645)."
            }
        ]
    },
    {
        id: "tema4",
        title: "Simulacro Tema 4",
        exercises: [
            {
                q: "1. Se monitorean sistemas operativos de un datacenter (Sistema A y Sistema B) y su estado (Operativo (Up) o Caído (Down)):<br><br><table class='w-full text-center border-collapse border border-outline-variant mt-2 mb-4'><thead><tr class='bg-surface-variant text-on-surface-variant font-bold'><th></th><th class='border border-outline-variant p-2'>Operativo (Up)</th><th class='border border-outline-variant p-2'>Caído (Down)</th><th class='border border-outline-variant p-2'>Totales</th></tr></thead><tbody><tr><td class='border border-outline-variant font-bold p-2'>Sistema A</td><td class='border border-outline-variant p-2'>0.55</td><td class='border border-outline-variant p-2'>0.05</td><td class='border border-outline-variant p-2'>0.60</td></tr><tr><td class='border border-outline-variant font-bold p-2'>Sistema B</td><td class='border border-outline-variant p-2'>0.30</td><td class='border border-outline-variant p-2'>0.10</td><td class='border border-outline-variant p-2'>0.40</td></tr><tr class='bg-surface-variant/30'><td class='border border-outline-variant font-bold p-2'>Totales</td><td class='border border-outline-variant p-2'>0.85</td><td class='border border-outline-variant p-2'>0.15</td><td class='border border-outline-variant p-2'>1.00</td></tr></tbody></table>Calcule:",
                subA: "a. $$P(B \\cup Up)$$",
                subB: "b. $$P(Down|A)$$",
                optionsA: ["0.9500", "0.8500", "0.4000", "0.6000"],
                optionsB: ["0.0833", "0.0500", "0.1000", "0.1250"],
                correctA: 0,
                correctB: 0,
                explanation: "a: P(B) + P(Up) - P(B ∩ Up) = 0.40 + 0.85 - 0.30 = 0.95. b: P(Down ∩ A) / P(A) = 0.05 / 0.60 = 0.0833."
            },
            {
                q: "2. Una empresa proveedora de internet tiene una probabilidad del 10% de que un cliente experimente microcortes diarios. Se analizan 20 clientes independientes.",
                subA: "a. ¿Cuál es la probabilidad de que exactamente 0 clientes experimenten microcortes?",
                subB: "b. ¿Cuál es el número esperado de clientes con microcortes en este grupo de 20?",
                optionsA: ["0.1216", "0.2852", "0.0984", "0.1500"],
                optionsB: ["2", "4", "1", "0"],
                correctA: 0,
                correctB: 0,
                explanation: "a: X~Bi(20, 0.10). P(X=0) = (0.90)^20 = 0.1216. b: Esperanza = n*p = 20 * 0.10 = 2."
            },
            {
                q: "3. El departamento de soporte de IT recibe en promedio 8 tickets de máxima severidad al día. Asumiendo una distribución de Poisson:",
                subA: "a. ¿Cuál es la probabilidad de recibir exactamente 10 tickets en un día?",
                subB: "b. ¿Cuál es la probabilidad de recibir 0 tickets en un turno de 6 horas? (Considere un día de 24 hs)",
                optionsA: ["0.0993", "0.1221", "0.0815", "0.1502"],
                optionsB: ["0.1353", "0.2707", "0.0498", "0.1804"],
                correctA: 0,
                correctB: 0,
                explanation: "a: λ=8, P(X=10) = (e^-8 * 8^10)/10! ≈ 0.0993. b: Para 6 horas, λ = 8 * (6/24) = 2. P(X=0) = e^-2 ≈ 0.1353."
            },
            {
                q: "4. La vida útil de los LEDs de un monitor sigue una distribución normal con media de 500 días y desviación estándar de 20 días.",
                subA: "a. ¿Cuál es la probabilidad de que un LED dure más de 530 días?",
                subB: "b. En una sala con 1000 LEDs instalados, ¿cuántos se espera que fallen antes de los 460 días?",
                optionsA: ["0.0668", "0.9332", "0.1587", "0.0228"],
                optionsB: ["23", "67", "15", "5"],
                correctA: 0,
                correctB: 0,
                explanation: "a: Z = (530-500)/20 = 1.5. P(Z>1.5) = 1 - 0.9332 = 0.0668. b: Z = (460-500)/20 = -2. P(Z<-2) = 0.0228. Total = 1000 * 0.0228 = 22.8 ≈ 23."
            },
            {
                q: "5. Dada una distribución normal estándar, encuentre:<br><br><div class='w-full max-w-sm mx-auto my-4 text-center'><svg viewBox='0 0 400 200' class='w-full h-auto stroke-on-surface fill-transparent'><defs><path id='bell-curve-new4' d='M 20 180 C 100 180, 140 20, 200 20 C 260 20, 300 180, 380 180' /><clipPath id='shade-right-new4'><rect x='220' y='0' width='100' height='200' /></clipPath></defs><use href='#bell-curve-new4' class='fill-primary/20 stroke-none' clip-path='url(#shade-right-new4)' /><path d='M 20 180 C 100 180, 140 20, 200 20 C 260 20, 300 180, 380 180' stroke-width='2' class='fill-none stroke-on-surface' /><line x1='20' y1='180' x2='380' y2='180' stroke-width='2' class='stroke-on-surface' /><line x1='200' y1='180' x2='200' y2='20' stroke-width='2' stroke-dasharray='5,5' class='stroke-on-surface' /><text x='195' y='198' class='fill-on-surface stroke-none font-bold text-lg'>μ</text></svg></div>",
                subA: "a. El área bajo la curva que yace entre $$P(0.5 \\le Z \\le 2.0)$$",
                subB: "b. El valor de k tal que $$P(Z < k) = 0.9900$$",
                optionsA: ["0.2857", "0.6915", "0.9772", "0.1915"],
                optionsB: ["2.33", "2.58", "1.96", "1.64"],
                correctA: 0,
                correctB: 0,
                explanation: "a: P(Z<=2.0) - P(Z<=0.5) = 0.9772 - 0.6915 = 0.2857. b: Buscando en la tabla para 0.9900, el valor de Z correspondiente es aproximadamente 2.33."
            }
        ]
    },
    {
        id: "tema5",
        title: "Simulacro Tema 5",
        exercises: [
            {
                q: "1. Un analista financiero evalúa el retorno potencial de una inversión en un nuevo fondo. Ha desglosado el rendimiento (X) en miles de dólares en cuatro escenarios posibles con sus probabilidades:<br><br>Retorno: $10k (0.20), $20k (0.40), $30k (0.30), -$10k (0.10).",
                subA: "a. ¿Cuál es el Valor Esperado (Esperanza) del retorno de la inversión?",
                subB: "b. ¿Cuál es la Varianza de esta inversión en miles de dólares al cuadrado?",
                optionsA: ["18.00", "20.00", "15.00", "12.50"],
                optionsB: ["136.00", "144.00", "118.00", "150.00"],
                correctA: 0,
                correctB: 0,
                explanation: "a: E[X] = (10*0.2) + (20*0.4) + (30*0.3) + (-10*0.1) = 2 + 8 + 9 - 1 = 18. b: Varianza = Σ((x - E[x])^2 * P(x)) = (-8)^2*0.2 + (2)^2*0.4 + (12)^2*0.3 + (-28)^2*0.1 = 12.8 + 1.6 + 43.2 + 78.4 = 136."
            },
            {
                q: "2. Una compañía de envíos garantiza la entrega en 24hs con una tasa de éxito del 80%. Se auditan 15 envíos al azar.",
                subA: "a. ¿Cuál es la probabilidad de que los 15 envíos lleguen a tiempo?",
                subB: "b. ¿Cuál es el número esperado de envíos que fallarán (llegarán tarde)?",
                optionsA: ["0.0352", "0.1671", "0.0850", "0.0150"],
                optionsB: ["3", "12", "5", "2"],
                correctA: 0,
                correctB: 0,
                explanation: "a: X~Bi(15, 0.80). P(X=15) = (0.80)^15 ≈ 0.0352. b: Si la tasa de éxito es 0.8, la de falla es p=0.2. E[Fallas] = 15 * 0.2 = 3."
            },
            {
                q: "3. En un peaje automático, los errores de lectura de patentes ocurren a razón de 5 por turno de 8 horas. (Distribución de Poisson).",
                subA: "a. ¿Cuál es la probabilidad de tener exactamente 3 errores en un turno?",
                subB: "b. ¿Cuál es la probabilidad de tener exactamente 1 error en medio turno (4 horas)?",
                optionsA: ["0.1404", "0.1755", "0.0842", "0.1008"],
                optionsB: ["0.2052", "0.2565", "0.1336", "0.2873"],
                correctA: 0,
                correctB: 0,
                explanation: "a: λ=5, P(X=3) = (e^-5 * 5^3)/3! ≈ 0.1404. b: Para medio turno, λ = 2.5. P(X=1) = (e^-2.5 * 2.5^1)/1! ≈ 0.2052."
            },
            {
                q: "4. El tiempo necesario para completar una transacción en un sistema de pagos se distribuye normalmente con media 10 segundos y desviación estándar de 0.5 segundos.",
                subA: "a. ¿Cuál es la probabilidad de que una transacción tarde entre 9.2 y 10.8 segundos?",
                subB: "b. En 50 transacciones, ¿cuántas se espera que tarden más de 11 segundos?",
                optionsA: ["0.8904", "0.9452", "0.0548", "0.7881"],
                optionsB: ["1", "5", "3", "0"],
                correctA: 0,
                correctB: 0,
                explanation: "a: Z1=(9.2-10)/0.5=-1.6, Z2=1.6. P(-1.6 < Z < 1.6) = 0.9452 - 0.0548 = 0.8904. b: Z=(11-10)/0.5=2. P(Z>2) = 0.0228. Total = 50 * 0.0228 = 1.14 ≈ 1."
            },
            {
                q: "5. Dada una distribución normal estándar:",
                subA: "a. Determine el área bajo la curva que yace entre $$P(-2.5 \\le Z \\le -1.0)$$",
                subB: "b. Determine el valor de k tal que el área en la cola superior sea 0.01 ($$P(Z > k) = 0.01$$)",
                optionsA: ["0.1525", "0.1587", "0.0062", "0.3413"],
                optionsB: ["2.33", "2.58", "1.96", "1.28"],
                correctA: 0,
                correctB: 0,
                explanation: "a: P(Z <= -1) - P(Z <= -2.5) = 0.1587 - 0.0062 = 0.1525. b: P(Z > k) = 0.01 implica P(Z <= k) = 0.99. Según la tabla de Z, k = 2.33."
            }
        ]
    },
    {
        id: "tema6",
        title: "Simulacro Tema 6",
        exercises: [
            {
                q: "1. Se analiza la entrega de proyectos según el turno de los equipos (Mañana o Tarde) y si se entregan A Tiempo (A) o Tarde (T).<br><br><table class='w-full text-center border-collapse border border-outline-variant mt-2 mb-4'><thead><tr class='bg-surface-variant text-on-surface-variant font-bold'><th></th><th class='border border-outline-variant p-2'>A Tiempo (A)</th><th class='border border-outline-variant p-2'>Tarde (T)</th><th class='border border-outline-variant p-2'>Totales</th></tr></thead><tbody><tr><td class='border border-outline-variant font-bold p-2'>T. Mañana (M)</td><td class='border border-outline-variant p-2'>0.40</td><td class='border border-outline-variant p-2'>0.10</td><td class='border border-outline-variant p-2'>0.50</td></tr><tr><td class='border border-outline-variant font-bold p-2'>T. Tarde (Td)</td><td class='border border-outline-variant p-2'>0.30</td><td class='border border-outline-variant p-2'>0.20</td><td class='border border-outline-variant p-2'>0.50</td></tr><tr class='bg-surface-variant/30'><td class='border border-outline-variant font-bold p-2'>Totales</td><td class='border border-outline-variant p-2'>0.70</td><td class='border border-outline-variant p-2'>0.30</td><td class='border border-outline-variant p-2'>1.00</td></tr></tbody></table>Calcule:",
                subA: "a. $$P(M \\cup A)$$",
                subB: "b. $$P(T|Td)$$",
                optionsA: ["0.8000", "0.5000", "0.7000", "0.9000"],
                optionsB: ["0.4000", "0.2000", "0.5000", "0.3000"],
                correctA: 0,
                correctB: 0,
                explanation: "a: P(M) + P(A) - P(M ∩ A) = 0.50 + 0.70 - 0.40 = 0.80. b: P(T ∩ Td) / P(Td) = 0.20 / 0.50 = 0.40."
            },
            {
                q: "2. Una máquina expendedora tiene una probabilidad del 60% de dar un ticket premiado al realizar compras especiales. Un usuario realiza 8 compras.",
                subA: "a. ¿Cuál es la probabilidad de que gane 7 o más premios?",
                subB: "b. ¿Cuál es el número esperado de tickets premiados?",
                optionsA: ["0.1064", "0.0896", "0.0168", "0.2000"],
                optionsB: ["4.8", "3.2", "4.0", "5.0"],
                correctA: 0,
                correctB: 0,
                explanation: "a: X~Bi(8, 0.6). P(X>=7) = P(X=7) + P(X=8) = 8*(0.6^7)(0.4) + 0.6^8 = 0.0896 + 0.0168 = 0.1064. b: E[X] = 8 * 0.6 = 4.8."
            },
            {
                q: "3. En promedio hay 3 baches por cada kilómetro en una ruta antigua. Suponga distribución de Poisson.",
                subA: "a. ¿Cuál es la probabilidad de encontrar a lo sumo 1 bache en un tramo de 1 kilómetro?",
                subB: "b. ¿Cuál es la probabilidad de no encontrar ningún bache en un tramo de 2 kilómetros?",
                optionsA: ["0.1991", "0.1494", "0.0498", "0.2240"],
                optionsB: ["0.0025", "0.0498", "0.0183", "0.0067"],
                correctA: 0,
                correctB: 0,
                explanation: "a: λ=3. P(X<=1) = P(0) + P(1) = e^-3 + 3e^-3 = 4*0.0498 = 0.1991. b: Para 2km, λ=6. P(X=0) = e^-6 ≈ 0.0025."
            },
            {
                q: "4. La presión máxima soportada por una válvula se distribuye normalmente con media de 120 PSI y desviación estándar de 10 PSI.",
                subA: "a. ¿Cuál es la probabilidad de que una válvula soporte menos de 105 PSI antes de fallar?",
                subB: "b. ¿Cuál es la probabilidad de que soporte más de 140 PSI?",
                optionsA: ["0.0668", "0.9332", "0.1587", "0.0228"],
                optionsB: ["0.0228", "0.9772", "0.0668", "0.1587"],
                correctA: 0,
                correctB: 0,
                explanation: "a: Z=(105-120)/10 = -1.5. P(Z<-1.5) = 0.0668. b: Z=(140-120)/10 = 2.0. P(Z>2.0) = 0.0228."
            },
            {
                q: "5. Dada una distribución normal estándar:",
                subA: "a. Determine el área bajo la curva que yace entre $$P(-1.0 \\le Z \\le 0)$$",
                subB: "b. Determine el valor de k tal que el área a su izquierda sea el 25% ($$P(Z < k) = 0.25$$)",
                optionsA: ["0.3413", "0.1587", "0.5000", "0.8413"],
                optionsB: ["-0.67", "-0.25", "-0.84", "-1.28"],
                correctA: 0,
                correctB: 0,
                explanation: "a: P(Z<=0) - P(Z<=-1) = 0.5000 - 0.1587 = 0.3413. b: Buscando 0.2500 en el interior de la tabla, el Z más cercano es -0.67."
            }
        ]
    },
    {
        id: "tema7",
        title: "Simulacro Tema 7",
        exercises: [
            {
                q: "1. Se analizan 2000 cuentas de un servicio de streaming. Se clasifican según el Plan (Básico o Premium) y si han iniciado un Reclamo (Sí o No):<br><br><table class='w-full text-center border-collapse border border-outline-variant mt-2 mb-4'><thead><tr class='bg-surface-variant text-on-surface-variant font-bold'><th></th><th class='border border-outline-variant p-2'>Reclamo Sí (S)</th><th class='border border-outline-variant p-2'>Reclamo No (N)</th><th class='border border-outline-variant p-2'>Total</th></tr></thead><tbody><tr><td class='border border-outline-variant font-bold p-2'>Plan Básico (B)</td><td class='border border-outline-variant p-2'>0.15</td><td class='border border-outline-variant p-2'>0.45</td><td class='border border-outline-variant p-2'>0.60</td></tr><tr><td class='border border-outline-variant font-bold p-2'>Plan Premium (P)</td><td class='border border-outline-variant p-2'>0.05</td><td class='border border-outline-variant p-2'>0.35</td><td class='border border-outline-variant p-2'>0.40</td></tr><tr class='bg-surface-variant/30'><td class='border border-outline-variant font-bold p-2'>Total</td><td class='border border-outline-variant p-2'>0.20</td><td class='border border-outline-variant p-2'>0.80</td><td class='border border-outline-variant p-2'>1.00</td></tr></tbody></table>Calcule:",
                subA: "a. $$P(P \\cup N)$$",
                subB: "b. $$P(S|B)$$",
                optionsA: ["0.8500", "0.4000", "0.8000", "0.7500"],
                optionsB: ["0.2500", "0.1500", "0.6000", "0.3333"],
                correctA: 0,
                correctB: 0,
                explanation: "a: P(P) + P(N) - P(P ∩ N) = 0.40 + 0.80 - 0.35 = 0.85. b: P(S ∩ B) / P(B) = 0.15 / 0.60 = 0.25."
            },
            {
                q: "2. Una campaña de email marketing tiene una tasa de conversión del 30%. Se envía a un grupo de control de 10 usuarios.",
                subA: "a. ¿Cuál es la probabilidad de que exactamente 3 usuarios conviertan?",
                subB: "b. ¿Cuál es la varianza del número de conversiones?",
                optionsA: ["0.2668", "0.2001", "0.1200", "0.3500"],
                optionsB: ["2.1", "3.0", "7.0", "1.5"],
                correctA: 0,
                correctB: 0,
                explanation: "a: X~Bi(10, 0.3). P(X=3) = 120 * (0.3^3) * (0.7^7) ≈ 0.2668. b: Var(X) = n * p * q = 10 * 0.3 * 0.7 = 2.1."
            },
            {
                q: "3. La cantidad de imperfecciones en el tejido de una tela es de 10 por metro cuadrado. Sigue una distribución de Poisson.",
                subA: "a. ¿Cuál es la probabilidad de hallar exactamente 8 imperfecciones en un metro cuadrado?",
                subB: "b. ¿Cuál es la probabilidad de hallar exactamente 2 imperfecciones en medio metro cuadrado (0.5 m²)?",
                optionsA: ["0.1126", "0.1251", "0.0948", "0.1500"],
                optionsB: ["0.0842", "0.1404", "0.0498", "0.1755"],
                correctA: 0,
                correctB: 0,
                explanation: "a: λ=10. P(X=8) = (e^-10 * 10^8)/8! ≈ 0.1126. b: Para 0.5m², λ=5. P(X=2) = (e^-5 * 5^2)/2! ≈ 0.0842."
            },
            {
                q: "4. Las puntuaciones de una prueba de rendimiento de procesadores siguen una distribución normal con media 80 puntos y desviación estándar de 5 puntos.",
                subA: "a. ¿Cuál es la probabilidad de obtener una puntuación entre 75 y 90?",
                subB: "b. Si se quiere premiar al 5% superior, ¿cuál debe ser la puntuación mínima (k) para recibir el premio?",
                optionsA: ["0.8185", "0.9772", "0.1587", "0.6826"],
                optionsB: ["88.23", "85.00", "90.00", "86.45"],
                correctA: 0,
                correctB: 0,
                explanation: "a: Z1=(75-80)/5=-1; Z2=(90-80)/5=2. P(-1 < Z < 2) = 0.9772 - 0.1587 = 0.8185. b: El 5% superior es área 0.95 acumulada -> Z=1.645. X = 80 + 1.645*5 = 88.225."
            },
            {
                q: "5. Dada una distribución normal estándar:",
                subA: "a. Determine el área bajo la curva que yace en los extremos, es decir $$P(|Z| > 1.96)$$",
                subB: "b. Encuentre el valor de k tal que el área central sea del 95% ($$P(|Z| < k) = 0.95$$)",
                optionsA: ["0.0500", "0.0250", "0.9500", "0.1000"],
                optionsB: ["1.96", "1.64", "2.33", "2.58"],
                correctA: 0,
                correctB: 0,
                explanation: "a: P(Z > 1.96) o P(Z < -1.96) = 0.025 * 2 = 0.0500. b: Si el área central es 0.95, queda 0.025 en cada cola. El Z que deja 0.025 arriba es 1.96."
            }
        ]
    },
    {
        id: "tema8",
        title: "Simulacro Tema 8",
        exercises: [
            {
                q: "1. Un control de calidad evalúa lotes de un componente. Clasifica según Origen (Nacional (N) o Importado (I)) y Calidad (Aprobado (A) o Rechazado (R)):<br><br><table class='w-full text-center border-collapse border border-outline-variant mt-2 mb-4'><thead><tr class='bg-surface-variant text-on-surface-variant font-bold'><th></th><th class='border border-outline-variant p-2'>Aprobado (A)</th><th class='border border-outline-variant p-2'>Rechazado (R)</th><th class='border border-outline-variant p-2'>Total</th></tr></thead><tbody><tr><td class='border border-outline-variant font-bold p-2'>Nacional (N)</td><td class='border border-outline-variant p-2'>0.50</td><td class='border border-outline-variant p-2'>0.10</td><td class='border border-outline-variant p-2'>0.60</td></tr><tr><td class='border border-outline-variant font-bold p-2'>Importado (I)</td><td class='border border-outline-variant p-2'>0.30</td><td class='border border-outline-variant p-2'>0.10</td><td class='border border-outline-variant p-2'>0.40</td></tr><tr class='bg-surface-variant/30'><td class='border border-outline-variant font-bold p-2'>Total</td><td class='border border-outline-variant p-2'>0.80</td><td class='border border-outline-variant p-2'>0.20</td><td class='border border-outline-variant p-2'>1.00</td></tr></tbody></table>Calcule:",
                subA: "a. $$P(I \\cup R)$$",
                subB: "b. $$P(A|I)$$",
                optionsA: ["0.5000", "0.4000", "0.2000", "0.6000"],
                optionsB: ["0.7500", "0.3000", "0.4000", "0.5000"],
                correctA: 0,
                correctB: 0,
                explanation: "a: P(I) + P(R) - P(I ∩ R) = 0.40 + 0.20 - 0.10 = 0.50. b: P(A ∩ I) / P(I) = 0.30 / 0.40 = 0.75."
            },
            {
                q: "2. Una entrevista de trabajo tiene una tasa histórica de aprobación del 50%. Suponga que 5 candidatos se presentan de forma independiente.",
                subA: "a. ¿Cuál es la probabilidad de que exactamente los 5 candidatos aprueben?",
                subB: "b. ¿Cuál es la probabilidad de que al menos 1 candidato apruebe?",
                optionsA: ["0.0313", "0.1563", "0.5000", "0.0100"],
                optionsB: ["0.9688", "0.0313", "0.5000", "0.8000"],
                correctA: 0,
                correctB: 0,
                explanation: "a: P(X=5) = 0.5^5 = 0.03125. b: P(X>=1) = 1 - P(X=0) = 1 - 0.5^5 = 1 - 0.03125 = 0.96875."
            },
            {
                q: "3. El número de pedidos de reposición de un almacén sigue una distribución de Poisson con promedio de 2 pedidos por semana.",
                subA: "a. ¿Cuál es la probabilidad de no tener ningún pedido en una semana dada?",
                subB: "b. ¿Cuál es la probabilidad de tener exactamente 4 pedidos en un periodo de 4 semanas?",
                optionsA: ["0.1353", "0.2707", "0.0498", "0.1000"],
                optionsB: ["0.0573", "0.0993", "0.0286", "0.1500"],
                correctA: 0,
                correctB: 0,
                explanation: "a: λ=2. P(X=0) = e^-2 ≈ 0.1353. b: Para 4 semanas, λ = 2 * 4 = 8. P(X=4) = (e^-8 * 8^4)/4! ≈ 0.0573."
            },
            {
                q: "4. La duración de la batería de cierto dispositivo sigue una distribución normal con media 250 horas y desviación estándar de 25 horas.",
                subA: "a. ¿Cuál es la probabilidad de que una batería dure menos de 200 horas?",
                subB: "b. ¿Cuál es la probabilidad de que dure más de 300 horas?",
                optionsA: ["0.0228", "0.1587", "0.0668", "0.0100"],
                optionsB: ["0.0228", "0.1587", "0.0668", "0.0500"],
                correctA: 0,
                correctB: 0,
                explanation: "a: Z = (200-250)/25 = -2. P(Z < -2) = 0.0228. b: Z = (300-250)/25 = 2. P(Z > 2) = 0.0228."
            },
            {
                q: "5. Dada una distribución normal estándar:",
                subA: "a. Encuentre el área bajo la curva que yace a la derecha de Z = 1.28 ($$P(Z > 1.28)$$)",
                subB: "b. Encuentre el valor de k tal que el área a su izquierda sea del 10% ($$P(Z < k) = 0.10$$)",
                optionsA: ["0.1003", "0.8997", "0.0500", "0.1500"],
                optionsB: ["-1.28", "-1.64", "-1.96", "-0.84"],
                correctA: 0,
                correctB: 0,
                explanation: "a: P(Z > 1.28) = 1 - 0.8997 = 0.1003. b: P(Z < k) = 0.10 se ubica simétricamente opuesto al valor que acumula 0.90, por ende Z = -1.28."
            }
        ]
    },
    {
        id: "tema9",
        title: "Simulacro Tema 9",
        exercises: [
            {
                q: "1. El número de fallas (X) en un sistema de inyección por día tiene la siguiente distribución de probabilidad: X=1 (0.1), X=2 (0.3), X=3 (0.4), X=4 (0.2).",
                subA: "a. ¿Cuál es el Valor Esperado E[X]?",
                subB: "b. ¿Cuál es la Varianza del número de fallas?",
                optionsA: ["2.70", "3.00", "2.50", "2.00"],
                optionsB: ["0.81", "1.00", "0.50", "1.21"],
                correctA: 0,
                correctB: 0,
                explanation: "a: E[X] = 1*0.1 + 2*0.3 + 3*0.4 + 4*0.2 = 0.1 + 0.6 + 1.2 + 0.8 = 2.7. b: E[X^2] = 1*0.1 + 4*0.3 + 9*0.4 + 16*0.2 = 8.1. Var(X) = E[X^2] - (E[X])^2 = 8.1 - (2.7)^2 = 8.1 - 7.29 = 0.81."
            },
            {
                q: "2. Una línea de producción reporta que el 5% de las piezas salen con rayaduras. Se selecciona una muestra aleatoria de 25 piezas.",
                subA: "a. ¿Cuál es el número esperado de piezas rayadas en la muestra?",
                subB: "b. ¿Cuál es la probabilidad de que ninguna pieza de la muestra esté rayada?",
                optionsA: ["1.25", "2.50", "0.50", "1.00"],
                optionsB: ["0.2774", "0.3500", "0.1500", "0.5000"],
                correctA: 0,
                correctB: 0,
                explanation: "a: E[X] = n*p = 25 * 0.05 = 1.25. b: P(X=0) = (0.95)^25 ≈ 0.2774."
            },
            {
                q: "3. La densidad de partículas contaminantes en una superficie sigue un proceso de Poisson con λ = 1.5 por cm².",
                subA: "a. ¿Cuál es la probabilidad de encontrar exactamente 2 partículas en un cm²?",
                subB: "b. ¿Cuál es la probabilidad de encontrar 0 partículas en un área de 2 cm²?",
                optionsA: ["0.2510", "0.3347", "0.1255", "0.1500"],
                optionsB: ["0.0498", "0.1353", "0.2240", "0.1000"],
                correctA: 0,
                correctB: 0,
                explanation: "a: P(X=2) = (e^-1.5 * 1.5^2) / 2 ≈ 0.2510. b: Para 2 cm², λ = 3. P(X=0) = e^-3 ≈ 0.0498."
            },
            {
                q: "4. Las ventas diarias de un producto de nicho se distribuyen normalmente con media de 50 unidades y desviación estándar de 8 unidades.",
                subA: "a. ¿Cuál es la probabilidad de vender entre 42 y 66 unidades en un día?",
                subB: "b. En un año comercial de 200 días, ¿en cuántos días se espera vender menos de 34 unidades?",
                optionsA: ["0.8185", "0.6826", "0.9544", "0.5000"],
                optionsB: ["5 días", "10 días", "2 días", "8 días"],
                correctA: 0,
                correctB: 0,
                explanation: "a: Z1=(42-50)/8 = -1; Z2=(66-50)/8 = 2. P(-1 < Z < 2) = 0.9772 - 0.1587 = 0.8185. b: Z=(34-50)/8 = -2. P(Z<-2) = 0.0228. 200 * 0.0228 = 4.56 ≈ 5."
            },
            {
                q: "5. Dada una distribución normal estándar:",
                subA: "a. Determine el área bajo la curva que yace entre $$P(-2.33 \\le Z \\le 2.33)$$",
                subB: "b. Determine el valor de k tal que el área en la cola inferior sea del 5% ($$P(Z < k) = 0.05$$)",
                optionsA: ["0.9802", "0.9901", "0.9500", "0.9000"],
                optionsB: ["-1.64", "-1.96", "-1.28", "-2.33"],
                correctA: 0,
                correctB: 0,
                explanation: "a: P(Z <= 2.33) - P(Z <= -2.33) = 0.9901 - 0.0099 = 0.9802. b: El Z que deja 0.05 a la izquierda es aproximadamente -1.64 (o -1.645)."
            }
        ]
    },
    {
        id: "tema10",
        title: "Simulacro Tema 10",
        exercises: [
            {
                q: "1. Se investiga el perfil de clientes de una tienda online. Se cruzan datos por Edad (Joven (J) o Adulto (A)) y si concretaron la Compra (Sí (S) o No (N)):<br><br><table class='w-full text-center border-collapse border border-outline-variant mt-2 mb-4'><thead><tr class='bg-surface-variant text-on-surface-variant font-bold'><th></th><th class='border border-outline-variant p-2'>Compra Sí (S)</th><th class='border border-outline-variant p-2'>Compra No (N)</th><th class='border border-outline-variant p-2'>Total</th></tr></thead><tbody><tr><td class='border border-outline-variant font-bold p-2'>Joven (J)</td><td class='border border-outline-variant p-2'>0.20</td><td class='border border-outline-variant p-2'>0.30</td><td class='border border-outline-variant p-2'>0.50</td></tr><tr><td class='border border-outline-variant font-bold p-2'>Adulto (A)</td><td class='border border-outline-variant p-2'>0.40</td><td class='border border-outline-variant p-2'>0.10</td><td class='border border-outline-variant p-2'>0.50</td></tr><tr class='bg-surface-variant/30'><td class='border border-outline-variant font-bold p-2'>Total</td><td class='border border-outline-variant p-2'>0.60</td><td class='border border-outline-variant p-2'>0.40</td><td class='border border-outline-variant p-2'>1.00</td></tr></tbody></table>Calcule:",
                subA: "a. $$P(A \\cup S)$$",
                subB: "b. $$P(S|J)$$",
                optionsA: ["0.7000", "0.5000", "0.6000", "0.8000"],
                optionsB: ["0.4000", "0.2000", "0.5000", "0.3000"],
                correctA: 0,
                correctB: 0,
                explanation: "a: P(A) + P(S) - P(A ∩ S) = 0.50 + 0.60 - 0.40 = 0.70. b: P(S ∩ J) / P(J) = 0.20 / 0.50 = 0.40."
            },
            {
                q: "2. Una máquina detectora de metales en un aeropuerto tiene una sensibilidad del 40% para ciertos objetos pequeños. Pasan 6 personas que portan dichos objetos.",
                subA: "a. ¿Cuál es la probabilidad de que detecte el objeto exactamente a 2 personas?",
                subB: "b. ¿Cuál es la probabilidad de que detecte el objeto exactamente a 3 personas?",
                optionsA: ["0.3110", "0.1866", "0.2765", "0.4000"],
                optionsB: ["0.2765", "0.3110", "0.1866", "0.3500"],
                correctA: 0,
                correctB: 0,
                explanation: "a: X~Bi(6, 0.4). P(X=2) = 15 * (0.4^2) * (0.6^4) ≈ 0.3110. b: P(X=3) = 20 * (0.4^3) * (0.6^3) ≈ 0.2765."
            },
            {
                q: "3. El número de reclamos de garantía en una tienda es, en promedio, de 12 al año. Sigue una distribución de Poisson.",
                subA: "a. ¿Cuál es la probabilidad de tener exactamente 10 reclamos en un año?",
                subB: "b. ¿Cuál es la probabilidad de tener exactamente 1 reclamo en un mes (1/12 de año)?",
                optionsA: ["0.1048", "0.1143", "0.0825", "0.1500"],
                optionsB: ["0.3679", "0.1353", "0.2707", "0.5000"],
                correctA: 0,
                correctB: 0,
                explanation: "a: λ=12. P(X=10) = (e^-12 * 12^10)/10! ≈ 0.1048. b: Para un mes, λ = 12/12 = 1. P(X=1) = e^-1 * 1 ≈ 0.3679."
            },
            {
                q: "4. Las horas de uso anuales de un grupo electrógeno tienen distribución normal con media 1000 horas y desviación estándar de 50 horas.",
                subA: "a. ¿Cuál es la probabilidad de que un equipo se use más de 1100 horas en un año?",
                subB: "b. ¿Cuál es la probabilidad de que se use entre 900 y 1000 horas?",
                optionsA: ["0.0228", "0.1587", "0.0668", "0.0100"],
                optionsB: ["0.4772", "0.3413", "0.6826", "0.5000"],
                correctA: 0,
                correctB: 0,
                explanation: "a: Z = (1100-1000)/50 = 2. P(Z>2) = 0.0228. b: Z1 = (900-1000)/50 = -2; Z2=0. P(-2 < Z < 0) = 0.5000 - 0.0228 = 0.4772."
            },
            {
                q: "5. Dada una distribución normal estándar:",
                subA: "a. Calcule la probabilidad de $$P(Z > 0.84)$$",
                subB: "b. Encuentre el valor de k tal que el área acumulada sea del 80% ($$P(Z < k) = 0.80$$)",
                optionsA: ["0.2005", "0.7995", "0.1500", "0.2500"],
                optionsB: ["0.84", "1.28", "0.50", "1.00"],
                correctA: 0,
                correctB: 0,
                explanation: "a: P(Z > 0.84) = 1 - 0.7995 = 0.2005. b: Buscando en la tabla para el área 0.8000, el valor de Z correspondiente es cercano a 0.84."
            }
        ]
    }
];