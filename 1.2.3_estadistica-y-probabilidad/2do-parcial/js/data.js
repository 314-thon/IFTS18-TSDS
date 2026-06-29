        const appData = {
            units: [
                {
                    id: "u3",
                    title: "UNIDAD 3",
                    subtitle: "PROBABILIDAD",
                    desc: "En esta sección exploraremos los fundamentos de la probabilidad, desde el conteo básico hasta reglas complejas como el Teorema de Bayes.",
                    topics: [
                        {
                            id: "u3t1",
                            title: "1. Conceptos básicos y Asignación",
                            exp: `La probabilidad responde a la pregunta: <em>'¿Qué tan posible es que pase esto?'</em>. En el enfoque clásico, se calcula dividiendo los Casos Favorables entre el Total de opciones posibles.
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-1 text-sm'>
                                    <li><b>No tiene fórmula explícita.</b> Se reconoce porque los problemas hablan de dados, cartas, o "sacar canicas de una bolsa".</li>
                                    <li><b>Empírico vs Clásico:</b> Si el texto dice "De las últimas 50 ventas...", es Empírico. Lanzar un dado es Clásico. Si es la opinión de un experto, es Subjetiva.</li>
                                </ul>
                            </div>`,
                            videos: [
                                { title: "Probabilidad básica explicada con urnas", url: "https://www.youtube.com/watch?v=BIN-yXoi_oU" },
                                { title: "Enfoques de la probabilidad", url: "https://www.youtube.com/watch?v=LUqSFexCIcs" }
                            ],
                            exercises: [
                                { level: "Fácil", q: "Lanzas un dado normal de 6 caras. ¿Cuál es la probabilidad matemática de que te salga un número 4?", a: "El dado tiene 6 caras. Solo hay un número 4. P = Favorables / Totales = 1/6 (aprox. 16.6%)." },
                                { level: "Normal", q: "Un restaurante anotó que, de los últimos 50 clientes, 10 pidieron ensalada. ¿Probabilidad de que el próximo pida ensalada y qué método es?", a: "P = 10 / 50 = 0.20 (20%). Método Empírico (por historial)." }
                            ]
                        },
                        {
                            id: "u3t2",
                            title: "2. Reglas de conteo, combinaciones y permutaciones",
                            exp: `Estas reglas te dicen de cuántas formas se pueden agrupar o elegir objetos.
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN: ¿Qué fórmula usar?</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-2 text-sm'>
                                    <li><b>Permutación:</b> Úsala si el problema dice "asignar cargos", "contraseñas" o <b>EL ORDEN IMPORTA</b>.</li>
                                    <li><b>Combinación:</b> Úsala si piden formar "comités" o <b>EL ORDEN NO IMPORTA</b>.</li>
                                    <li><b>Factorial simple (N!):</b> Si vas a ordenar a TODOS los elementos en su totalidad (ej. 5 personas en 5 sillas).</li>
                                </ul>
                            </div>`,
                            videos: [
                                { title: "Diferencia Combinaciones y Permutaciones", url: "https://www.youtube.com/watch?v=hU8FZivhAr8" }
                            ],
                            exercises: [
                                { level: "Fácil", q: "Tienes 4 cuadros diferentes y quieres colgarlos en fila en la pared de tu cuarto. ¿De cuántas formas puedes ordenarlos?", a: "Se ordenan todos. Factorial: 4! = 4 x 3 x 2 x 1 = 24 formas." },
                                { level: "Normal", q: "En un grupo de 6 estudiantes, se debe elegir a 2 para formar un comité. ¿Cuántas parejas diferentes puede formar?", a: "Combinación (el orden no importa). Fórmula: 6! / (2! * 4!) = 15 parejas." }
                            ]
                        },
                        {
                            id: "u3t3",
                            title: "3. Eventos y Complemento",
                            exp: `El 'complemento' de un evento es su opuesto, todo lo que falta para llegar al 100%. Si la probabilidad de llover es 30%, el complemento (no llover) es 70%.
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-1 text-sm'>
                                    <li>Si te piden la probabilidad de que <b>"NO ocurra X"</b>, simplemente calcula la probabilidad de que SÍ ocurra y réstalo a 1. ¡Es mucho más rápido! $P(A') = 1 - P(A)$</li>
                                </ul>
                            </div>`,
                            videos: [
                                { title: "Eventos complementarios", url: "https://www.youtube.com/watch?v=QeXrvsRNZLo" }
                            ],
                            exercises: [
                                { level: "Fácil", q: "Si la probabilidad de ganarte una rifa es de 0.05, ¿cuál es la probabilidad de NO ganarla?", a: "P(Complemento) = 1 - 0.05 = 0.95 (95%)." },
                                { level: "Normal", q: "En una baraja de 52 cartas hay 4 Ases. Calcula la probabilidad de sacar un As y luego la de su complemento.", a: "P(As) = 4/52 = 1/13. Su complemento (No As) es 1 - 1/13 = 12/13." }
                            ]
                        },
                        {
                            id: "u3t4",
                            title: "4. Reglas operativas: Adición y Multiplicación",
                            exp: `Son las reglas para unir dos o más eventos.
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-2 text-sm'>
                                    <li>Si el texto dice <b>"o" / "al menos uno"</b> $\\rightarrow$ Ley de Adición. Suma $P(A) + P(B)$ y resta la intersección si la hay.</li>
                                    <li>Si el texto dice <b>"y" / "ambos" / "consecutivos"</b> $\\rightarrow$ Ley de Multiplicación. Multiplica $P(A) \\cdot P(B)$.</li>
                                    <li><b>Mutuamente Excluyentes:</b> Si el examen dice esto, significa que no pueden pasar a la vez: $P(A \\cap B) = 0$.</li>
                                </ul>
                            </div>`,
                            videos: [
                                { title: "Regla de la Suma y Multiplicación", url: "https://www.youtube.com/watch?v=QeXrvsRNZLo" }
                            ],
                            exercises: [
                                { level: "Fácil", q: "Lanzas una moneda dos veces. ¿Probabilidad de sacar 'Cara' en la primera Y en la segunda?", a: "Eventos independientes y dice 'Y'. Multiplicamos: P(Cara) * P(Cara) = 1/2 * 1/2 = 1/4 (25%)." },
                                { level: "Normal", q: "En una bolsa hay 4 dulces de fresa y 6 de menta. Sacas uno (te lo comes) y sacas otro. ¿Probabilidad de sacar fresa Y luego menta?", a: "Dependientes (sin reemplazo). P(Fresa)=4/10. Quedan 9 dulces (6 menta). P(Menta)=6/9. Multiplicar: (4/10) * (6/9) = 24/90 = 4/15." }
                            ]
                        },
                        {
                            id: "u3t5",
                            title: "5. Probabilidad Condicional",
                            exp: `Es la probabilidad de que ocurra un evento sabiendo que ya ocurrió otro. Nos reduce el "universo" de posibilidades.
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-2 text-sm'>
                                    <li><b>Cómo reconocerla:</b> El problema usa las frases "Sabiendo que...", "Dado que...", "Si se sabe que...".</li>
                                    <li><b>La fórmula:</b> $P(A|B) = P(A \\cap B) / P(B)$. Recuerda: lo que "ya sabemos que pasó" SIEMPRE va en el denominador abajo.</li>
                                </ul>
                            </div>`,
                            videos: [
                                { title: "Probabilidad Condicional", url: "https://www.youtube.com/watch?v=bDfCURXoKkU" }
                            ],
                            exercises: [
                                { level: "Normal", q: "En un grupo, el 40% juega fútbol, el 30% juega tenis y el 10% juega ambos. Si sabemos que un estudiante juega fútbol, ¿cuál es la probabilidad de que juegue tenis?", a: "Condicional: P(Tenis | Fútbol) = P(Ambos) / P(Fútbol)\n= 0.10 / 0.40 = 0.25 (25%)." }
                            ]
                        },
                        {
                            id: "u3t6",
                            title: "6. Teorema de Bayes",
                            exp: `Sirve para actualizar tu probabilidad cuando ya ocurrió otra cosa. Es "viajar al pasado" estadísticamente.
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-2 text-sm'>
                                    <li><b>Cómo reconocerlo:</b> El problema te da "rutas" (Máquina 1, 2) y sus defectos. Te <b>invierte la historia:</b> "Sabiendo que salió Defectuoso, ¿probabilidad de Máquina 1?".</li>
                                    <li>Usa la fórmula de fracción gigante. <b>Numerador</b> = la ruta pedida (M1 * Def). <b>Denominador</b> = suma de todas las rutas defectuosas.</li>
                                </ul>
                            </div>`,
                            videos: [
                                { title: "Teorema de Bayes", url: "https://www.youtube.com/watch?v=NdcpLrFd2RM" }
                            ],
                            exercises: [
                                { level: "Normal", q: "Máquina A produce 60% (5% defectuosos), B produce 40% (2% defectuosos). Si un juguete ES DEFECTUOSO, ¿cuál es la probabilidad de que sea de la Máquina A?", a: "Total Defectuosos (Denominador) = (0.60 * 0.05) + (0.40 * 0.02) = 0.038.\nRuta A (Numerador) = 0.60 * 0.05 = 0.03.\nBayes: 0.03 / 0.038 = 0.789 (78.9%)." }
                            ]
                        }
                    ]
                },
                {
                    id: "u4",
                    title: "UNIDAD 4",
                    subtitle: "DISCRETA",
                    desc: "Análisis de variables contables. Aprenderemos Valor Esperado, Distribución Binomial y Poisson.",
                    topics: [
                        {
                            id: "u4t1",
                            title: "7. Variables aleatorias discretas y continuas",
                            exp: `Una variable aleatoria es la respuesta numérica a un experimento.
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-2 text-sm'>
                                    <li><b>Discreta:</b> Da "saltos" enteros y se cuenta (1, 2 personas, o 4 quejas). Nunca da decimales en la vida real.</li>
                                    <li><b>Continua:</b> Se "mide" y puede tener infinitos decimales (peso, estatura, tiempo, temperatura).</li>
                                </ul>
                            </div>`,
                            videos: [{ title: "Discreta vs Continua", url: "https://www.youtube.com/watch?v=ErIcLjw6aFY" }],
                            exercises: [
                                { level: "Fácil", q: "Clasifica: a) Volumen de agua en una botella. b) Libros en tu mochila.", a: "a) Volumen = Continua (se mide con decimales). b) Libros = Discreta (se cuenta en enteros)." }
                            ]
                        },
                        {
                            id: "u4t2",
                            title: "8. Distribuciones de probabilidad discreta",
                            exp: `Es una tabla que lista todos los resultados posibles (X) con sus probabilidades (P).
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-2 text-sm'>
                                    <li><b>La Regla de Oro:</b> Para que la tabla sea válida en el examen, la fila de abajo (las probabilidades) DEBEN sumar exactamente $1.0$ ($100\\%$). Ni 0.99 ni 1.01.</li>
                                </ul>
                            </div>`,
                            videos: [{ title: "Distribuciones válidas", url: "https://www.youtube.com/watch?v=DzwwCjVcXJo" }],
                            exercises: [
                                { level: "Normal", q: "P(0)=0.20, P(1)=0.45, P(2)=?, P(3)=0.10. ¿Cuánto vale P(2) si es una distribución válida?", a: "Deben sumar 1. 0.20 + 0.45 + P(2) + 0.10 = 1. => 0.75 + P(2) = 1. P(2) = 0.25." }
                            ]
                        },
                        {
                            id: "u4t3",
                            title: "9. Valor Esperado E(X) y Varianza",
                            exp: `El valor esperado es el 'promedio a largo plazo'. La varianza mide qué tan dispersos están los datos.
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-2 text-sm'>
                                    <li>La fórmula de la media es $E(x) = \\Sigma (x \\cdot f(x))$.</li>
                                    <li><b>Cómo reconocerla:</b> El problema te da una tabla con valores "X" y sus probabilidades "f(X)". Para sacar el Valor Esperado, multiplica cada columna (X por P) y suma todos los resultados.</li>
                                </ul>
                            </div>`,
                            videos: [{ title: "Cálculo del Valor Esperado", url: "https://www.youtube.com/watch?v=ErIcLjw6aFY" }],
                            exercises: [
                                { level: "Normal", q: "Heladería vende 1, 2 o 3 pasteles con prob 0.3, 0.5 y 0.2 respectivamente. ¿Valor esperado?", a: "V.E. = (1 * 0.3) + (2 * 0.5) + (3 * 0.2) = 0.3 + 1.0 + 0.6 = 1.9 pasteles." }
                            ]
                        },
                        {
                            id: "u4t4",
                            title: "10. Distribución Binomial",
                            exp: `Se usa cuando solo hay dos finales posibles (éxito/fracaso) y haces varios intentos con probabilidad constante.
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-2 text-sm'>
                                    <li><b>Cómo reconocerla:</b> Te dan intentos fijos "n" (ej. "muestra de 5") y una probabilidad de éxito "p" (ej. "30%").</li>
                                    <li><b>Uso de TABLA:</b> Busca el bloque de tu "n". Busca la columna de tu "p". Baja hasta la fila de tu "x". ¡Ese es el resultado! Si piden "al menos 2", suma los resultados de 2 en adelante.</li>
                                </ul>
                            </div>`,
                            videos: [{ title: "Uso de tabla Binomial", url: "https://www.youtube.com/watch?v=veoI1zTUQm4" }],
                            exercises: [
                                { level: "Normal", q: "El 30% de las cuentas están vencidas. En muestra de 5 cuentas, ¿probabilidad de que EXACTAMENTE 2 estén vencidas?", a: "n=5, p=0.3, x=2. Fórmula o tabla directa: 0.3087 (30.87%)." }
                            ]
                        },
                        {
                            id: "u4t5",
                            title: "11. Distribución de Poisson",
                            exp: `Cuenta cuántos eventos extraños ocurren en un periodo de tiempo, área o espacio.
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-2 text-sm'>
                                    <li><b>Cómo reconocerla:</b> Menciona un <b>promedio</b> ($\\mu$ o $\\lambda$) que ocurre en un <b>TIEMPO o ESPACIO fijo</b> (ej. 5 errores/hora).</li>
                                    <li><b>Trampa Clásica:</b> Si el promedio es "5 por hora" y la pregunta pide la probabilidad en "DOS horas", el nuevo $\\lambda$ debe ser 10. ¡Escala el promedio siempre!</li>
                                </ul>
                            </div>`,
                            videos: [{ title: "Ejercicios Poisson", url: "https://www.youtube.com/watch?v=LUqSFexCIcs" }],
                            exercises: [
                                { level: "Fácil", q: "Promedio de urgencias = 3 por hora. ¿Probabilidad de 0 urgencias en la próxima hora?", a: "λ = 3, x = 0. Fórmula o tabla: (e⁻³ * 3⁰) / 0! = 0.0498 (4.98%)." }
                            ]
                        },
                        {
                            id: "u4t6",
                            title: "12. Uso de Excel (Distribuciones)",
                            exp: `Las computadoras nos facilitan la vida al calcular probabilidades.
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-2 text-sm'>
                                    <li><b>Binomial:</b> <code>=DISTR.BINOM.N(x, n, p, acumulado)</code>.</li>
                                    <li><b>Poisson:</b> <code>=POISSON.DIST(x, $\\lambda$, acumulado)</code>.</li>
                                    <li><b>Acumulado:</b> Usa FALSO si buscas un número exacto ("exactamente 3"). Usa VERDADERO si buscas acumulado ("3 o menos").</li>
                                </ul>
                            </div>`,
                            videos: [{ title: "Funciones en Excel", url: "https://www.youtube.com/watch?v=Q_9i42oJdnE" }],
                            exercises: [
                                { level: "Normal", q: "Poisson: λ=5. Quieres saber la prob de 3 llamadas O MENOS. ¿Fórmula?", a: "=POISSON.DIST(3, 5, VERDADERO)." }
                            ]
                        }
                    ]
                },
                {
                    id: "u5",
                    title: "UNIDAD 5",
                    subtitle: "CONTINUA",
                    desc: "Medición continua. El concepto de la 'Campana de Gauss' domina para explicar comportamientos naturales y estandarizar datos.",
                    topics: [
                        {
                            id: "u5t1",
                            title: "13. Distribución uniforme continua",
                            exp: `Todos los valores dentro de un rango determinado tienen exactamente la misma probabilidad de ocurrir.
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-2 text-sm'>
                                    <li><b>Gráfica:</b> Es un rectángulo plano. La probabilidad se calcula sacando el Área del rectángulo (Base x Altura).</li>
                                    <li><b>Fórmula:</b> La altura es SIEMPRE constante: $1 / (b - a)$.</li>
                                </ul>
                            </div>`,
                            videos: [{ title: "Distribución Uniforme", url: "https://www.youtube.com/watch?v=ErIcLjw6aFY" }],
                            exercises: [
                                { level: "Normal", q: "Un programa de TV dura entre 40 y 50 min. ¿Probabilidad de que dure más de 48 min?", a: "Base total = 10. Altura = 1/10 = 0.1. Rango > 48 tiene base 2. Prob = 2 * 0.1 = 0.2 (20%)." }
                            ]
                        },
                        {
                            id: "u5t2",
                            title: "14. La Curva Normal",
                            exp: `La famosa campana de Gauss. Describe pesos, estaturas, resultados de pruebas, etc.
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-2 text-sm'>
                                    <li>Es perfectamente <b>simétrica</b>. La Media, Mediana y Moda son exactamente iguales y caen en el centro.</li>
                                    <li>El área TOTAL bajo la curva es $1$ ($100\\%$).</li>
                                    <li><b>Regla empírica:</b> Aproximadamente el $68\\%$ de los datos están a $\\pm 1$ desviación estándar del centro.</li>
                                </ul>
                            </div>`,
                            videos: [{ title: "Campana de Gauss", url: "https://www.youtube.com/watch?v=veoI1zTUQm4" }],
                            exercises: [
                                { level: "Fácil", q: "Si la curva es simétrica y el área total es 1, ¿cuánta área hay desde el centro hacia la derecha?", a: "La mitad derecha vale exactamente 0.5 (50%)." }
                            ]
                        },
                        {
                            id: "u5t3",
                            title: "15. Normal Estándar y Variable Z",
                            exp: `Es una "moneda de cambio universal" para comparar cualquier campana de Gauss, centrándola en el 0.
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-2 text-sm'>
                                    <li><b>Fórmula Z:</b> $Z = (x - \\mu) / \\sigma$. (Dato menos Media, sobre Desviación Estándar).</li>
                                    <li><b>Trampa Asesina:</b> A veces te dan la "Varianza" en el enunciado. ¡Sácale la raíz cuadrada primero! (Si Varianza = 4, usa $\\sigma = 2$).</li>
                                    <li>Un valor $Z$ negativo indica que estás por debajo del promedio.</li>
                                </ul>
                            </div>`,
                            videos: [{ title: "Normal Estándar y Valor Z", url: "https://www.youtube.com/watch?v=ErIcLjw6aFY" }],
                            exercises: [
                                { level: "Normal", q: "La duración sigue normal con Media=10 y Varianza=4. ¿Probabilidad de que dure menos de 9 horas?", a: "Trampa: Desviación (σ) = √4 = 2.\nZ = (9 - 10) / 2 = -0.5\nTabla Z para -0.5 da un área izquierda de 0.3085 (30.85%)." }
                            ]
                        },
                        {
                            id: "u5t4",
                            title: "16. Cálculo de probabilidades con Tabla Z",
                            exp: `Una vez que tienes la variable Z, usas la tabla estadística para traducirlo a porcentaje (área poblacional).
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN: Tabla Z</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-2 text-sm'>
                                    <li>La tabla SIEMPRE lee el área a la <b>IZQUIERDA</b> ("menor que").</li>
                                    <li>Si te piden "mayor que" o "a la DERECHA": haz $1 - (valor\\ de\\ la\\ tabla)$.</li>
                                    <li>Si te piden el área "ENTRE" dos valores: Busca los dos en la tabla y resta (Mayor menos Menor).</li>
                                </ul>
                            </div>`,
                            videos: [{ title: "Uso de la Tabla Z", url: "https://www.youtube.com/watch?v=dSQwDdBsIAU" }],
                            exercises: [
                                { level: "Normal", q: "Si el área a la izquierda de Z=1 es 0.8413, ¿cuál es el área a la derecha?", a: "El área total es 1. La derecha es el complemento: 1 - 0.8413 = 0.1587 (15.87%)." }
                            ]
                        },
                        {
                            id: "u5t5",
                            title: "17. Aproximación Normal a la Binomial",
                            exp: `Usamos la campana lisa para no hacer cálculos enormes con la fórmula binomial.
                            <div class='mt-6 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm'>
                                <h4 class='font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2'><span>🚨</span> TIP DE EXAMEN</h4>
                                <ul class='list-disc list-inside text-amber-900 dark:text-amber-100 space-y-2 text-sm'>
                                    <li><b>Regla estricta:</b> Solo se puede hacer el truco si $n \\cdot p > 5$.</li>
                                    <li><b>Corrección por Continuidad:</b> Como pasamos de "escalones" a algo "liso", debes sumar y restar $0.5$. Ej: Para aproximar el valor exacto $X=10$, buscas el área entre $9.5$ y $10.5$.</li>
                                </ul>
                            </div>`,
                            videos: [{ title: "Corrección por continuidad", url: "https://www.youtube.com/watch?v=ErIcLjw6aFY" }],
                            exercises: [
                                { level: "Fácil", q: "Si n=20 y p=0.5, ¿cumple la regla para usar la aproximación Normal?", a: "n * p = 20 * 0.5 = 10. Como 10 > 5, ¡sí cumple la regla!" }
                            ]
                        }
                    ]
                },
                {
                    id: "uparcial",
                    title: "PARCIAL",
                    subtitle: "SIMULADOR",
                    desc: "¡Ponte a prueba con los ejercicios extraídos de tus TPs y exámenes reales! Aquí deberás identificar qué tema estás leyendo antes de poder ver la guía estratégica o la respuesta.",
                    topics: [
                        {
                            id: "p_clase",
                            title: "Ejercicios en clase",
                            exp: "Ejercicios integradores vistos en clase donde aplicarás reglas de asignación, diagramas de conjuntos, probabilidad condicional, el Teorema de Bayes, combinatoria y distribuciones.",
                            videos: [],
                            exercises: [
                                { 
                                    level: "Parcial", 
                                    topicType: "Probabilidad Básica",
                                    topicHint: "Fíjate que el problema te da elementos de un conjunto (E1, E2...) y te pide operaciones simples como unión e intersección.",
                                    topicExplanation: "Trabajamos directamente con elementos de un espacio muestral y conjuntos.",
                                    q: "Suponga que tiene el espacio muestral S={E1, E2, E3, E4, E5, E6}. Las probabilidades son:\nP(E1)=0.21, P(E2)=0.14, P(E3)=0.18, P(E4)=0.19, P(E5)=0.12, P(E6)=0.16.\nSea:\nA={E1, E2, E3}\nB={E1, E2, E4, E6}\nC={E1, E5, E6}\n\nHallar P(A), P(B), P(C)\nHallar B ∪ C y P(B ∪ C)\nHallar A ∩ B ∩ C y P(A ∩ B ∩ C)\nHallar C' y P(C')", 
                                    hint: "Recuerda que la probabilidad de un conjunto es la suma de las probabilidades de sus elementos (puntos muestrales).\n- Unión (∪): Todos los elementos que están en un conjunto O en el otro (sin repetirlos).\n- Intersección (∩): Elementos comunes en todos los conjuntos a la vez.\n- Complemento ('): Lo que falta para llegar a 1, o los elementos de S que NO están en el conjunto.",
                                    a: "1) Probabilidades Individuales:\nP(A) = P(E1)+P(E2)+P(E3) = 0.21+0.14+0.18 = 0.53\nP(B) = P(E1)+P(E2)+P(E4)+P(E6) = 0.21+0.14+0.19+0.16 = 0.70\nP(C) = P(E1)+P(E5)+P(E6) = 0.21+0.12+0.16 = 0.49\n\n2) B ∪ C y P(B ∪ C):\nB ∪ C = {E1, E2, E4, E5, E6}\nP(B ∪ C) = 0.21+0.14+0.19+0.12+0.16 = 0.82\n\n3) A ∩ B ∩ C y P(A ∩ B ∩ C):\nEl único elemento en común entre A, B y C es E1.\nA ∩ B ∩ C = {E1}\nP(A ∩ B ∩ C) = P(E1) = 0.21\n\n4) C' y P(C'):\nC' = {E2, E3, E4}\nP(C') = 1 - P(C) = 1 - 0.49 = 0.51" 
                                },
                                { 
                                    level: "Parcial", 
                                    topicType: "Probabilidad Básica",
                                    topicHint: "Menciona eventos que ocurren y pide probabilidades como 'A pero no B'. Busca resolverlo uniendo o restando conjuntos.",
                                    topicExplanation: "Se resuelve con la regla de adición y restando intersecciones entre conjuntos de eventos simples.",
                                    q: "Las enfermedades A y B son comunes en una región. Se sabe que:\n- 10% de la población contraerá la enfermedad A.\n- 5% contraerá la enfermedad B.\n- 2% contraerá ambas enfermedades.\n\nEncuentre la probabilidad que cualquier persona:\na) Contraiga al menos una enfermedad.\nb) Contraiga la enfermedad A pero no B.\nc) Contraiga la enfermedad A dado que ya contrajo B.\nd) Contraiga la enfermedad B dado que no contrajo A.", 
                                    hint: "a) 'Al menos una' es la UNIÓN: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).\nb) 'A pero no B' es solo la porción exclusiva de A: P(A) - P(A ∩ B).\nc) Probabilidad condicional: P(A|B) = P(A ∩ B) / P(B).\nd) Condicional: P(B|A') = P(A' ∩ B) / P(A'). Recuerda que P(A' ∩ B) es 'B pero no A'.",
                                    a: "Datos: P(A)=0.10, P(B)=0.05, P(A ∩ B)=0.02\n\na) Contraer al menos una: P(A ∪ B)\nP(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.10 + 0.05 - 0.02 = 0.13 (13%)\n\nb) Contraer A pero no B: P(A ∩ B')\nP(A ∩ B') = P(A) - P(A ∩ B) = 0.10 - 0.02 = 0.08 (8%)\n\nc) Contraer A dado que ya contrajo B: P(A|B)\nP(A|B) = P(A ∩ B) / P(B) = 0.02 / 0.05 = 0.40 (40%)\n\nd) Contraer B dado que no contrajo A: P(B|A')\nP(B|A') = P(A' ∩ B) / P(A')\n- P(A' ∩ B) es 'B pero no A': P(B) - P(A ∩ B) = 0.05 - 0.02 = 0.03\n- P(A') es 'No tener A': 1 - P(A) = 1 - 0.10 = 0.90\nP(B|A') = 0.03 / 0.90 ≈ 0.0333... (3.33%)" 
                                },
                                {
                                    level: "Parcial",
                                    topicType: "Teorema de Bayes",
                                    topicHint: "La pregunta 'viaja al pasado'. Sabemos el final (está defectuoso) y te pide calcular la probabilidad de su origen (qué plan se usó).",
                                    topicExplanation: "Es Bayes clásico: partimos de un resultado (defecto) y buscamos la probabilidad de su causa original (el plan).",
                                    q: "Una empresa de manufactura emplea tres planes para el diseño de un producto. Los planes 1, 2 y 3 se utilizan para el 30%, 20% y 50% de los productos, respectivamente. \nLa 'tasa de defectuosos' (D) dado cada plan (E) es:\nP(D|E1) = 0.01\nP(D|E2) = 0.03\nP(D|E3) = 0.02\n\nSi se observa un producto al azar y se encuentra que está DEFECTUOSO, ¿cuál fue el plan que se usó con mayor probabilidad y fue el responsable?",
                                    hint: "Debes usar el Teorema de Bayes para hallar las probabilidades a posteriori: P(E1|D), P(E2|D) y P(E3|D). \nPrimero, calcula la probabilidad TOTAL de defecto P(D) sumando los 3 caminos: P(E1)*P(D|E1) + P(E2)*P(D|E2) + P(E3)*P(D|E3).",
                                    a: "Paso 1: Probabilidad Total de Defecto P(D)\nP(D) = (0.30 * 0.01) + (0.20 * 0.03) + (0.50 * 0.02)\nP(D) = 0.003 + 0.006 + 0.010 = 0.019\n\nPaso 2: Calcular Bayes para cada plan dado que es Defectuoso P(En|D)\nP(E1|D) = 0.003 / 0.019 = 0.1578 (15.78%)\nP(E2|D) = 0.006 / 0.019 = 0.3157 (31.57%)\nP(E3|D) = 0.010 / 0.019 = 0.5263 (52.63%)\n\nRespuesta: El plan con mayor probabilidad es el PLAN 3 (52.63%)."
                                },
                                {
                                    level: "Parcial",
                                    topicType: "Probabilidad Condicional",
                                    topicHint: "Te dan explícitamente los datos con la barra vertical (|) de condicionalidad. Tienes que usar su fórmula algebraica.",
                                    topicExplanation: "El ejercicio trata puramente del uso algebraico de las propiedades de la probabilidad condicional.",
                                    q: "Sean A, B eventos de algún S. Se conoce que:\nP(B) = 0.4\nP(A|B) = 0.3\nP(A|B') = 0.8\n\nHalle lo valores para: P(A), P(B|A), P(B|A')",
                                    hint: "Paso a paso:\n1) Halla P(B') restando 1 - P(B).\n2) Para P(A), usa Probabilidad Total: P(A) = P(A|B)P(B) + P(A|B')P(B').\n3) Para P(B|A), usa la fórmula condicional despejando la intersección.\n4) Para P(B|A'), necesitas P(A' ∩ B) / P(A').",
                                    a: "1) P(B') = 1 - 0.4 = 0.6.\nP(A) = (0.3)(0.4) + (0.8)(0.6) = 0.12 + 0.48 = 0.60.\n\n2) P(B|A) = P(A ∩ B) / P(A).\nP(A ∩ B) = P(A|B)P(B) = 0.12.\nP(B|A) = 0.12 / 0.60 = 0.20.\n\n3) P(B|A') = P(A' ∩ B) / P(A').\nP(A') = 1 - 0.60 = 0.40.\nP(A' ∩ B) = P(B) - P(A ∩ B) = 0.4 - 0.12 = 0.28.\nP(B|A') = 0.28 / 0.40 = 0.70."
                                },
                                {
                                    level: "Parcial",
                                    topicType: "Probabilidad Condicional",
                                    topicHint: "Busca la frase 'dado que'. Esto significa que nuestro universo de casos se reduce solo a los que cumplen esa condición.",
                                    topicExplanation: "Se aplica la probabilidad condicional porque la pregunta restringe los casos usando la expresión 'dado que'.",
                                    q: `Una revista de noticias publica tres columnas tituladas “Arte” (A), “Libros” (B) y “Cine” (C). Los hábitos de lectura de un lector se resumen en esta tabla de probabilidades conjuntas:<br><br>
<div class="overflow-x-auto my-4">
    <table class="math-table w-full text-sm md:text-base border-collapse border border-slate-300 text-center">
        <thead class="bg-slate-100">
            <tr>
                <th class="border border-slate-300 p-2">A</th>
                <th class="border border-slate-300 p-2">B</th>
                <th class="border border-slate-300 p-2">C</th>
                <th class="border border-slate-300 p-2">A ∩ B</th>
                <th class="border border-slate-300 p-2">A ∩ C</th>
                <th class="border border-slate-300 p-2">B ∩ C</th>
                <th class="border border-slate-300 p-2">A ∩ B ∩ C</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 p-2">0.14</td>
                <td class="border border-slate-300 p-2">0.23</td>
                <td class="border border-slate-300 p-2">0.37</td>
                <td class="border border-slate-300 p-2">0.08</td>
                <td class="border border-slate-300 p-2">0.09</td>
                <td class="border border-slate-300 p-2">0.13</td>
                <td class="border border-slate-300 p-2">0.05</td>
            </tr>
        </tbody>
    </table>
</div><br>
¿Cuál es la probabilidad de que el lector lea regularmente la columna “Arte”, dado que lee al menos una de las otras dos columnas?`,
                                    hint: "Traduce el enunciado a notación formal. 'Arte dado que lee al menos una de las otras dos' significa P(A | B ∪ C).\nRecuerda la fórmula de probabilidad condicional y aplica la propiedad distributiva de la intersección sobre la unión en el numerador.",
                                    a: `Para resolver esto, debemos traducir la frase a notación condicional: P(A | B ∪ C).

Fórmula: P(A | B ∪ C) = P(A ∩ (B ∪ C)) / P(B ∪ C)

<strong>Paso 1: Numerador P(A ∩ (B ∪ C))</strong>
Distributiva: P((A ∩ B) ∪ (A ∩ C))
Regla suma: P(A ∩ B) + P(A ∩ C) - P(A ∩ B ∩ C)
Valores: 0.08 + 0.09 - 0.05 = 0.12

<strong>Paso 2: Denominador P(B ∪ C)</strong>
Regla suma: P(B) + P(C) - P(B ∩ C)
Valores: 0.23 + 0.37 - 0.13 = 0.47

<strong>Paso 3: División</strong>
P(A | B ∪ C) = 0.12 / 0.47 ≈ 0.2553

<strong>Resultado Final:</strong> 25.53%`
                                },
                                {
                                    level: "Parcial",
                                    topicType: "Probabilidad Condicional",
                                    topicHint: "Otra vez la expresión 'dado que'. Analiza bien quién es el evento que condiciona y ponlo en el denominador.",
                                    topicExplanation: "Nuevamente, el uso de 'dado que' nos indica una probabilidad condicional clásica a partir de intersecciones.",
                                    q: `Basándonos en la misma tabla de la revista del ejercicio anterior:<br><br>¿Cuál es la probabilidad de que el lector lea al menos una de las dos primeras columnas (“Arte” o “Libros”), dado que lee la columna de “Cine”?`,
                                    hint: "Traduce a notación: Nos piden P(A ∪ B | C). \nAplica la fórmula condicional: P((A ∪ B) ∩ C) / P(C).\nUsa la distributiva en el numerador.",
                                    a: `Notación: Probabilidad de "Arte" o "Libros" (A ∪ B) dado que "Cine" (C). P(A ∪ B | C).

Fórmula: P(A ∪ B | C) = P((A ∪ B) ∩ C) / P(C)

<strong>Paso 1: Numerador P((A ∪ B) ∩ C)</strong>
Distributiva: P((A ∩ C) ∪ (B ∩ C))
Regla suma: P(A ∩ C) + P(B ∩ C) - P(A ∩ B ∩ C)
Valores: 0.09 + 0.13 - 0.05 = 0.17

<strong>Paso 2: Denominador P(C)</strong>
Extraído de tabla: P(C) = 0.37

<strong>Paso 3: División</strong>
P(A ∪ B | C) = 0.17 / 0.37 ≈ 0.4594

<strong>Resultado Final:</strong> 45.94%`
                                }
                            ]
                        },
                        {
                            id: "p_tp4",
                            title: "TPs pre-parcial: TP 4 Variable Discreta",
                            exp: "Ejercicios extraídos directamente del Trabajo Práctico Nº 4 de la cursada, enfocados en variables discretas y combinatoria.",
                            videos: [],
                            exercises: [
                                { 
                                    level: "TP 4 - Discretas", 
                                    topicType: "Distribución Binomial",
                                    topicHint: "¿A qué variable nos referimos? Tienes un total de ensayos fijos (6 pacientes) y cada uno tiene solo dos posibles resultados: reacción adversa o ninguna.",
                                    topicExplanation: "Se aplica Binomial porque los ensayos son independientes (n=6) con probabilidad constante de éxito (0.02).",
                                    q: "Se aplica una vacuna a un paciente y se sabe que la probabilidad de que tenga una reacción adversa es del 0.02. Aplicamos esta vacuna en forma independiente a 6 pacientes. Calcular la probabilidad de:\na. Ningún paciente tenga reacción adversa.\nb. Exactamente 3 pacientes tengan reacción adversa.\nc. A lo sumo 4 pacientes tengan reacción adversa.", 
                                    hint: "X ~ Binomial (n=6, p=0.02). El éxito aquí es 'reacción adversa'.\na) P(x=0)\nb) P(x=3)\nc) P(x≤4) que es P(0)+P(1)+P(2)+P(3)+P(4)",
                                    a: "Parámetros: n=6, p=0.02\n\na) P(x=0) = 6C0 * (0.02)⁰ * (0.98)⁶ = 1 * 1 * 0.8858 = 0.8858\n\nb) P(x=3) = 6C3 * (0.02)³ * (0.98)³ = 20 * 0.000008 * 0.94119 = 0.00015 (o 1.5 x 10⁻⁴)\n\nc) P(x≤4) = P(0) + P(1) + P(2) + P(3) + P(4)\nP(1) = 6C1 * (0.02)¹ * (0.98)⁵ = 0.1085\nP(2) = 6C2 * (0.02)² * (0.98)⁴ = 0.0055\nP(3) = 0.00015\nP(4) = 6C4 * (0.02)⁴ * (0.98)² ≈ 0\nSuma total ≈ 0.9999 (prácticamente 1)." 
                                },
                                { 
                                    level: "TP 4 - Discretas", 
                                    topicType: "Distribución Binomial",
                                    topicHint: "La carta o llega, o no llega. Además, tienes una cantidad contable de intentos (10 cartas o 7 cartas).",
                                    topicExplanation: "Tenemos probabilidad de éxito o fracaso y una variable finita y contable 'n'.",
                                    q: "Se sabe que la probabilidad de que una carta enviada por correo no llegue a su destino es 0.25.\na. Sea la variable X: 'Cantidad de cartas que no llegan a destino, de un total de 10'. Indicar qué distribución tiene X, y calcular P(X = E(X) + 1.5)\nb. Una persona envía 7 cartas. Hallar la probabilidad de que lleguen a destino por lo menos 5 cartas.", 
                                    hint: "a) Binomial con n=10, p=0.25. Primero calcula E(x) = n*p. Luego súmale 1.5 y calcula la probabilidad de que la variable valga exactamente ese número.\nb) ¡Cuidado! Cambia n=7, y pide 'lleguen', así que el nuevo éxito p = 0.75. Te piden P(Y ≥ 5).",
                                    a: "a) X ~ Bi(10; 0.25)\nE(x) = n*p = 10 * 0.25 = 2.5\nNos piden P(x = 2.5 + 1.5) = P(x = 4)\nP(x=4) = 10C4 * (0.25)⁴ * (0.75)⁶ = 210 * 0.003906 * 0.17797 = 0.1460 (14.6%)\n\nb) Y: 'Cartas que LLEGAN de un total de 7'\nY ~ Bi(7; 0.75)\nP(Y≥5) = P(Y=5) + P(Y=6) + P(Y=7)\nP(5) = 7C5 * (0.75)⁵ * (0.25)² = 0.31146\nP(6) = 7C6 * (0.75)⁶ * (0.25)¹ = 0.31146\nP(7) = 7C7 * (0.75)⁷ * (0.25)⁰ = 0.13348\nSuma: P(Y≥5) = 0.7564" 
                                },
                                { 
                                    level: "TP 4 - Discretas", 
                                    topicType: "Valor Esperado / Varianza",
                                    topicHint: "La pregunta te da dos medidas de dispersión/tendencia y te pide hallar los parámetros partiendo de ellas.",
                                    topicExplanation: "Se aplica el sistema de ecuaciones usando E(X)=np y V(X)=npq para despejar.",
                                    q: "Si X es una variable aleatoria con distribución binomial, con E(X) = 4 y V(X) = 2.4, dar los parámetros de la distribución y calcular P(X ≥ 6).", 
                                    hint: "Para hallar los parámetros (n y p), usa el sistema de ecuaciones:\n1) E(X) = n*p = 4\n2) V(X) = n*p*q = 2.4\nSustituye (n*p) por 4 en la segunda ecuación para hallar 'q'. Luego saca 'p', y por último 'n'.",
                                    a: "Paso 1: Hallar parámetros\nSabemos que E(x) = np = 4 y V(x) = np(1-p) = 2.4\nReemplazamos np: 4 * (1-p) = 2.4\n1 - p = 2.4 / 4\n1 - p = 0.6   =>  p = 0.4\nSi np = 4 y p = 0.4  =>  n * 0.4 = 4  =>  n = 10\nLos parámetros son n=10, p=0.4.\n\nPaso 2: Calcular P(X ≥ 6) con X ~ Bi(10, 0.4)\nP(X≥6) = P(6) + P(7) + P(8) + P(9) + P(10)\nP(6) = 10C6 * (0.4)⁶ * (0.6)⁴ = 0.1114\nP(7) = 10C7 * (0.4)⁷ * (0.6)³ = 0.0424\nP(8) = 10C8 * (0.4)⁸ * (0.6)² = 0.0106\nP(9) = 10C9 * (0.4)⁹ * (0.6)¹ = 0.0015\nP(10)= 10C10 * (0.4)¹⁰ * (0.6)⁰ = 0.0001\nP(X≥6) = 0.166" 
                                },
                                { 
                                    level: "TP 4 - Discretas", 
                                    topicType: "Distribución Binomial",
                                    topicHint: "Tienes un número de motores finitos (4 motores o 2 por ala) y una probabilidad de que fallen o no (0.04).",
                                    topicExplanation: "Se usa la Binomial al tener un número discreto y fijo de ensayos (motores) con probabilidades de éxito contables.",
                                    q: "Los cuatro motores de un avión cuatrimotor (dos en cada ala) fallan, cada uno con probabilidad 0.04, en forma independiente, durante un trayecto de 20.000 km. El avión no entra en emergencia mientras funcionen sin fallar por lo menos dos motores:\na. ¿Cuál es la probabilidad de que el avión no entre en emergencia?\nb. ¿Cuál será esa probabilidad si se agrega la restricción de que al menos debe funcionar un motor en CADA ala?", 
                                    hint: "a) X: 'Motores que fallan'. Para NO entrar en emergencia, pueden fallar como máximo 2 motores (0, 1 o 2). P(X ≤ 2) en una Binomial(n=4, p=0.04).\nb) Si debe funcionar 1 en cada ala, significa que NO pueden fallar los 2 de un ala. \nAnaliza el Ala Izquierda ~ Bi(2, 0.04) para P(fallas ≤ 1) y multiplícalo por la probabilidad del Ala Derecha P(fallas ≤ 1).",
                                    a: "a) General: X ~ Bi(4; 0.04). No entra en emergencia si fallan ≤ 2.\nP(X≤2) = P(0) + P(1) + P(2)\nP(0) = 4C0 * (0.04)⁰ * (0.96)⁴ = 0.8493\nP(1) = 4C1 * (0.04)¹ * (0.96)³ = 0.1415\nP(2) = 4C2 * (0.04)² * (0.96)² = 0.0088\nP(X≤2) = 0.9996\n\nb) Por ala: X_ala ~ Bi(2; 0.04). Debe fallar ≤ 1 en cada ala.\nP(X_ala ≤ 1) = P(0) + P(1) = (0.96)² + 2*(0.04)*(0.96) = 0.9216 + 0.0768 = 0.9984\n\nComo deben cumplirse ambas (Ala Izquierda Y Ala Derecha):\nP(Global) = 0.9984 * 0.9984 = 0.9968" 
                                }
                            ]
                        },
                        {
                            id: "p_tp5",
                            title: "TPs pre-parcial: TP 5 Variable Continua",
                            exp: "Ejercicios extraídos directamente del Trabajo Práctico Nº 5, enfocados en el uso de la campana de Gauss, tabla Z y aproximación normal a la binomial.",
                            videos: [],
                            exercises: [
                                { 
                                    level: "TP 5 - Continuas", 
                                    topicType: "Distribución Normal",
                                    topicHint: "El texto es muy explícito: te da el símbolo μ (media) y el símbolo σ (desviación) en una aleatoria continua.",
                                    topicExplanation: "Se resuelve transformando la variable a Z al estar explícitamente definida como Normal.",
                                    q: "Sea X una variable aleatoria normal con μ=5 y σ=10. Hallar:\na. P(X < 0)\nb. P(X > 10)\nc. P(X ≥ 15)", 
                                    hint: "Aplica la fórmula de estandarización Z = (X - μ) / σ para cada inciso.\nRecuerda: si el enunciado pide 'Menor que' (a), miras directo en la tabla. Si pide 'Mayor que' (b, c), haces 1 menos el valor de la tabla.",
                                    a: "a) P(X < 0):\nZ = (0 - 5) / 10 = -0.5\nPor tabla Z, Área para -0.5 = 0.3085 (30.85%)\n\nb) P(X > 10):\nZ = (10 - 5) / 10 = 0.5\nPor tabla, Área izquierda = 0.6915\nÁrea derecha ('Mayor') = 1 - 0.6915 = 0.3085 (30.85%)\n\nc) P(X ≥ 15):\nZ = (15 - 5) / 10 = 1.0\nPor tabla, Área izquierda = 0.8413\nÁrea derecha = 1 - 0.8413 = 0.1587 (15.87%)" 
                                },
                                { 
                                    level: "TP 5 - Continuas", 
                                    topicType: "Distribución Normal",
                                    topicHint: "El peso es una medida continua que forma una 'campana'. Te dicen la media y desviación.",
                                    topicExplanation: "Es un problema inverso y directo de tipificación con Z usando valores continuos en una campana de Gauss.",
                                    q: "La distribución de los pesos de los alumnos varones de una tecnicatura es aproximadamente normal, con media = 75kg y desviación típica = 7kg.\na. Hallar la probabilidad de que un alumno, elegido al azar, pese más de 95kg.\nb. Calcular el peso no superado por el 10.03% de los alumnos.", 
                                    hint: "a) Z = (95 - 75) / 7. Recuerda usar complemento (1 - área) porque dice 'más de'.\nb) Es un problema inverso. El 10.03% (0.1003 de área) está a la izquierda. Búscalo adentro de la tabla Z para encontrar a qué valor Z corresponde, y luego despeja X de la fórmula Z = (X - μ) / σ.",
                                    a: "a) P(X > 95)\nZ = (95 - 75) / 7 = 20 / 7 ≈ 2.85\nPor tabla para Z=2.85 el área izquierda es 0.9978.\nComo es 'más de', P = 1 - 0.9978 = 0.0022 (0.22%)\n\nb) Peso no superado por 10.03% (área = 0.1003 a la izquierda).\nBuscamos 0.1003 en el interior de la tabla Z. Corresponde a Z = -1.28.\nDespejamos X:\n-1.28 = (X - 75) / 7\n-1.28 * 7 = X - 75\n-8.96 = X - 75\nX = 75 - 8.96 = 66.04 kg." 
                                },
                                { 
                                    level: "TP 5 - Continuas", 
                                    topicType: "Distribución Normal",
                                    topicHint: "Habla del 'tiempo', que es una variable continua. ¡Cuidado con el dato que te entregan! Es la varianza.",
                                    topicExplanation: "Requiere cálculo bajo la curva normal estándar, asegurándote de convertir primero la varianza a desviación estándar (σ).",
                                    q: "El tiempo necesario para llenar un frasco es una variable aleatoria X con distribución normal con una media de 10 segundos, y una varianza de 4 seg².\na. Calcular la probabilidad de que el tiempo exceda los 11.5 segundos.\nb. Hallar el tiempo de llenado tal que la probabilidad de excederlo sea 0.03.", 
                                    hint: "¡Cuidado con la varianza! La fórmula Z exige la desviación estándar (σ), que es la raíz cuadrada de la varianza (√4 = 2).\nb) 'Probabilidad de EXCEDERLO (estar a su derecha) sea 0.03'. Esto significa que el área a su izquierda es 1 - 0.03 = 0.9700. Busca 0.9700 en la tabla Z positiva y despeja X.",
                                    a: "Media (μ) = 10. Desviación (σ) = √4 = 2.\n\na) P(X > 11.5)\nZ = (11.5 - 10) / 2 = 0.75\nTabla Z para 0.75 = 0.7734\nP('exceda') = 1 - 0.7734 = 0.2266 (22.66%)\n\nb) Área a la derecha es 0.03, por tanto área a la izquierda es 0.9700.\nBuscando 0.9700 en la tabla Z obtenemos Z = 1.88.\nDespejamos X:\n1.88 = (X - 10) / 2\n1.88 * 2 = X - 10\n3.76 = X - 10\nX = 13.76 segundos." 
                                },
                                { 
                                    level: "TP 5 - Continuas", 
                                    topicType: "Aproximación Normal a Binomial",
                                    topicHint: "Tienes probabilidades contables (defectuoso o no) pero el 'n' (1000 microchips) es absurdamente grande para calcularlo de forma regular.",
                                    topicExplanation: "Se debe usar la media (np) y la desviación para convertir la extensa prueba binomial a un intervalo liso con curva Normal.",
                                    q: "En una línea de producción el 35% de los productos es defectuoso. ¿Cuál es la probabilidad aproximada de que, entre los siguientes 1000 microchips manufacturados en esa línea, menos de 354 sean defectuosos?", 
                                    hint: "Muestra enorme (n=1000). Es inviable usar Binomial. Usa la Aproximación Normal: μ = n*p y σ = √(npq).\nImportante: 'Menos de 354' (P < 354) significa que el máximo aceptado es 353. Aplica corrección por continuidad usando X = 353.5 para abarcar todo el escalón 353.",
                                    a: "Paso 1: Parámetros Binomiales a Normales\nn = 1000, p = 0.35, q = 0.65\nμ = n*p = 1000 * 0.35 = 350\nσ = √(npq) = √(1000 * 0.35 * 0.65) = √227.5 ≈ 15.08\n\nPaso 2: Corrección y Estandarización\nPiden P(X < 354), lo que en variable discreta equivale a 353 o menos.\nCon la corrección por continuidad sumamos 0.5 al límite: X = 353.5.\nZ = (353.5 - 350) / 15.08 = 3.5 / 15.08 ≈ 0.23\n\nPaso 3: Tabla Z\nPara Z = 0.23, el área a la izquierda es 0.5910.\nLa probabilidad aproximada es 59.10%." 
                                }
                            ]
                        },
                        {
                            id: "p_tips",
                            title: "Tips Parcial",
                            exp: `<div class="space-y-4">
                                <p class="text-gray-700 dark:text-gray-300 mb-6 font-medium">Recopilación de todos los "Tips de Examen" vistos durante el curso para una lectura rápida antes del parcial. ¡Identificar de qué habla el problema es la mitad de la nota!</p>
                                
                                <div class="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border-l-4 border-amber-500 shadow-sm">
                                    <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase text-xs tracking-wider mb-1 flex items-center justify-between">Probabilidad Básica y Asignación <span class="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-100 px-2 py-0.5 rounded text-[10px]">UNIDAD 3</span></h4>
                                    <p class="text-sm text-amber-900 dark:text-amber-100 mt-2"><b>No tiene fórmula explícita.</b> Se reconoce porque los problemas hablan de dados, cartas, o "sacar canicas de una bolsa". <br><br><b>Empírico vs Clásico:</b> Si el texto dice "De las últimas 50 ventas...", es Empírico. Lanzar un dado es Clásico. Si es la opinión de un experto, es Subjetiva.</p>
                                </div>

                                <div class="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border-l-4 border-amber-500 shadow-sm">
                                    <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase text-xs tracking-wider mb-1 flex items-center justify-between">Reglas de Conteo <span class="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-100 px-2 py-0.5 rounded text-[10px]">UNIDAD 3</span></h4>
                                    <ul class="text-sm text-amber-900 dark:text-amber-100 mt-2 list-disc list-inside space-y-1">
                                        <li><b>Permutación:</b> Úsala si el problema dice "asignar cargos", "contraseñas" o <b>EL ORDEN IMPORTA</b>.</li>
                                        <li><b>Combinación:</b> Úsala si piden formar "comités" o <b>EL ORDEN NO IMPORTA</b>.</li>
                                        <li><b>Factorial simple (N!):</b> Si vas a ordenar a TODOS los elementos en su totalidad (ej. 5 personas en 5 sillas).</li>
                                    </ul>
                                </div>

                                <div class="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border-l-4 border-amber-500 shadow-sm">
                                    <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase text-xs tracking-wider mb-1 flex items-center justify-between">Probabilidad Condicional <span class="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-100 px-2 py-0.5 rounded text-[10px]">UNIDAD 3</span></h4>
                                    <p class="text-sm text-amber-900 dark:text-amber-100 mt-2"><b>Cómo reconocerla:</b> El problema usa las frases "Sabiendo que...", "Dado que...", "Si se sabe que...".<br>La fórmula es $P(A|B) = P(A \\cap B) / P(B)$. Recuerda: lo que "ya sabemos que pasó" SIEMPRE va en el denominador (abajo).</p>
                                </div>

                                <div class="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border-l-4 border-amber-500 shadow-sm">
                                    <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase text-xs tracking-wider mb-1 flex items-center justify-between">Teorema de Bayes <span class="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-100 px-2 py-0.5 rounded text-[10px]">UNIDAD 3</span></h4>
                                    <p class="text-sm text-amber-900 dark:text-amber-100 mt-2"><b>Cómo reconocerlo:</b> El problema te da "rutas" (Máquina 1, 2) y sus defectos. Te <b>invierte la historia:</b> "Sabiendo que salió Defectuoso, ¿probabilidad de que sea de la Máquina 1?". Usa la fórmula de fracción gigante (Ruta pedida / Total de Rutas posibles).</p>
                                </div>

                                <div class="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border-l-4 border-amber-500 shadow-sm">
                                    <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase text-xs tracking-wider mb-1 flex items-center justify-between">Valor Esperado E(X) y Varianza <span class="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-100 px-2 py-0.5 rounded text-[10px]">UNIDAD 4</span></h4>
                                    <p class="text-sm text-amber-900 dark:text-amber-100 mt-2"><b>Cómo reconocerla:</b> El problema te da una tabla con valores "X" y sus probabilidades "P(X)". Para sacar la media o Valor Esperado, simplemente multiplica cada columna (X por P) y suma todos los resultados.</p>
                                </div>

                                <div class="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border-l-4 border-amber-500 shadow-sm">
                                    <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase text-xs tracking-wider mb-1 flex items-center justify-between">Distribución Binomial <span class="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-100 px-2 py-0.5 rounded text-[10px]">UNIDAD 4</span></h4>
                                    <p class="text-sm text-amber-900 dark:text-amber-100 mt-2"><b>Cómo reconocerla:</b> Te dan intentos fijos "$n$" (ej. "muestra de 5") y una probabilidad de éxito "$p$" (ej. "30%"). Si te piden probabilidad de "al menos 2", debes calcular la de 2, 3, 4, 5... y sumarlas (o usar el complemento).</p>
                                </div>

                                <div class="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border-l-4 border-amber-500 shadow-sm">
                                    <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase text-xs tracking-wider mb-1 flex items-center justify-between">Distribución de Poisson <span class="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-100 px-2 py-0.5 rounded text-[10px]">UNIDAD 4</span></h4>
                                    <p class="text-sm text-amber-900 dark:text-amber-100 mt-2"><b>Cómo reconocerla:</b> Menciona un <b>promedio</b> ($\\mu$ o $\\lambda$) que ocurre en un <b>TIEMPO o ESPACIO fijo</b> (ej. 5 errores/hora).<br><b>Trampa Clásica:</b> Si el promedio es "5 por hora" y la pregunta pide la probabilidad en "DOS horas", el nuevo $\\lambda$ debe ser 10. ¡Escala el promedio siempre!</p>
                                </div>

                                <div class="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border-l-4 border-amber-500 shadow-sm">
                                    <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase text-xs tracking-wider mb-1 flex items-center justify-between">Distribución Uniforme Continua <span class="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-100 px-2 py-0.5 rounded text-[10px]">UNIDAD 5</span></h4>
                                    <p class="text-sm text-amber-900 dark:text-amber-100 mt-2"><b>Gráfica:</b> Es un rectángulo plano. La probabilidad se calcula sacando el Área del rectángulo (Base x Altura).<br><b>Fórmula:</b> La altura es SIEMPRE constante y vale: $\\frac{1}{b-a}$.</p>
                                </div>

                                <div class="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border-l-4 border-amber-500 shadow-sm">
                                    <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase text-xs tracking-wider mb-1 flex items-center justify-between">Curva Normal y Valor Z <span class="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-100 px-2 py-0.5 rounded text-[10px]">UNIDAD 5</span></h4>
                                    <p class="text-sm text-amber-900 dark:text-amber-100 mt-2"><b>Trampa Asesina:</b> A veces te dan la "Varianza" en el enunciado. ¡Sácale la raíz cuadrada primero! (Si Varianza = 4, usa Desviación $\\sigma = 2$).<br><br><b>Uso de Tabla Z:</b> La tabla SIEMPRE lee el área a la IZQUIERDA ("menor que"). Si te piden "mayor que" o "a la DERECHA", haz $1 - (valor\\ de\\ la\\ tabla)$.</p>
                                </div>

                                <div class="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border-l-4 border-amber-500 shadow-sm">
                                    <h4 class="font-bold text-amber-900 dark:text-amber-300 uppercase text-xs tracking-wider mb-1 flex items-center justify-between">Aproximación Normal a Binomial <span class="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-100 px-2 py-0.5 rounded text-[10px]">UNIDAD 5</span></h4>
                                    <p class="text-sm text-amber-900 dark:text-amber-100 mt-2"><b>Regla estricta:</b> Solo se puede hacer el truco si $n > 30$ y $n \\cdot p > 5$.<br><b>Corrección por Continuidad:</b> Como pasamos de "escalones" a algo "liso", debes sumar y restar $0.5$ a la $X$ discreta para transformarla en intervalo continuo.</p>
                                </div>
                            </div>`,
                            videos: [],
                            exercises: []
                        }
                    ]
                }
            ]
        };

        // Ñepyrũ (Init)
        document.addEventListener('DOMContentLoaded', () => {
            loadUserData();
            renderNav();
            showHome();
        });

        // Ñongatu (Persistence)
        function loadUserData() {
            const data = localStorage.getItem('stats_estadistica_v7'); 
            if (data) {
                userStats = JSON.parse(data);
            }
        }

        function saveUserData() {
            localStorage.setItem('stats_estadistica_v7', JSON.stringify(userStats));
        }

        function toggleTopicLearned(topicId) {
            const index = userStats.learnedTopics.indexOf(topicId);
            if (index === -1) {
                userStats.learnedTopics.push(topicId);
            } else {
                userStats.learnedTopics.splice(index, 1);
            }
            saveUserData();
            
            const btn = document.getElementById(`btn-topic-${topicId}`);
            if (btn) {
                const unit = appData.units.find(u => u.topics.some(t => t.id === topicId));
                if(unit) {
                    const topicTitle = unit.topics.find(t => t.id === topicId).title;
                    const isLearned = userStats.learnedTopics.includes(topicId);
                    btn.innerHTML = `<span>${topicTitle}</span> ${isLearned ? '<span class="text-green-600">✅</span>' : ''}`;
                }
            }
        }

        // Ñembohape (Navigation & UI)
        function renderNav() {
            const nav = document.getElementById('unit-nav');
            nav.innerHTML = ''; 
            appData.units.forEach(unit => {
                const btn = document.createElement('button');
                const baseClasses = "px-2 py-1 md:px-3 md:py-2 rounded-md text-xs md:text-sm font-medium transition-colors whitespace-nowrap ";
                if (unit.id === 'uparcial') {
                    btn.className = baseClasses + `bg-tertiary text-on-tertiary hover:bg-tertiary-container hover:text-on-tertiary-container ${currentUnitId === unit.id ? 'ring-2 ring-outline font-bold' : ''}`;
                    btn.innerHTML = `📝 ${unit.title}`;
                } else {
                    btn.className = baseClasses + `text-on-surface hover:bg-primary/20 hover:text-primary ${currentUnitId === unit.id ? 'bg-primary text-on-primary shadow-md' : ''}`;
                    btn.innerText = `${unit.title}`;
                }
                
                btn.onclick = () => goToUnit(unit.id);
                nav.appendChild(btn);
            });
        }

        function updateNavClasses() {
            const nav = document.getElementById('unit-nav');
            Array.from(nav.children).forEach((btn, idx) => {
                const uId = appData.units[idx].id;
                
                if (uId === 'uparcial') {
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
                }
            });
        }

        function showHome() {
            currentUnitId = null;
            currentTopicId = null;
            updateNavClasses();
            
            document.getElementById('sidebar').classList.add('hidden');
            document.getElementById('sidebar').classList.remove('lg:flex');
            
            document.getElementById('welcome-screen').classList.remove('hidden');
            document.getElementById('content-screen').classList.add('hidden');
            document.getElementById('content-screen').classList.remove('flex');
            
            const testScreen = document.getElementById('test-screen');
            if(testScreen) {
                testScreen.classList.add('hidden');
                testScreen.classList.remove('flex');
            }
        }

        function goToUnit(unitId) {
            const unit = appData.units.find(u => u.id === unitId);
            if (!unit) return;
            
            let targetTopicId = unit.topics[0].id;
            for (let topic of unit.topics) {
                if (!userStats.learnedTopics.includes(topic.id)) {
                    targetTopicId = topic.id;
                    break;
                }
            }
            
            selectUnit(unitId);
            selectTopic(targetTopicId);
        }

        function selectUnit(unitId) {
            currentUnitId = unitId;
            updateNavClasses();
            
            const unit = appData.units.find(u => u.id === unitId);
            if(!unit) return;
            
            document.getElementById('sidebar-unit-title').innerText = `${unit.title}: ${unit.subtitle}`;
            document.getElementById('sidebar-unit-desc').innerText = unit.desc;

            const topicsList = document.getElementById('topics-list');
            topicsList.innerHTML = '';
            
            unit.topics.forEach((topic) => {
                const btn = document.createElement('button');
                const isLearned = userStats.learnedTopics.includes(topic.id);
                
                btn.className = `w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors border border-transparent flex justify-between items-center hover:bg-surface-variant hover:border-outline-variant text-on-surface`;
                btn.id = `btn-topic-${topic.id}`;
                btn.innerHTML = `<span>${topic.title}</span> ${isLearned ? '<span class="text-tertiary">✅</span>' : ''}`;
                btn.onclick = () => selectTopic(topic.id);
                
                topicsList.appendChild(btn);
            });
            
            currentTopicId = null;
        }

        function selectTopic(topicId) {
            const unit = appData.units.find(u => u.topics.some(t => t.id === topicId));
            if(!unit) return;
            
            currentTopicId = topicId;
            currentUnitId = unit.id; 
            const topic = unit.topics.find(t => t.id === topicId);

            document.getElementById('sidebar').classList.remove('hidden');
            document.getElementById('sidebar').classList.add('lg:flex');

            document.getElementById('welcome-screen').classList.add('hidden');
            const testScreen = document.getElementById('test-screen');
            if(testScreen) {
                testScreen.classList.add('hidden');
                testScreen.classList.remove('flex');
            }
            
            document.getElementById('content-screen').classList.remove('hidden');
            document.getElementById('content-screen').classList.add('flex');

            updateNavClasses();

            const buttons = document.getElementById('topics-list').children;
            for(let b of buttons) {
                b.classList.remove('bg-amber-500', 'border-amber-600', 'text-amber-950', 'font-bold');
            }
            const activeBtn = document.getElementById(`btn-topic-${topicId}`);
            if(activeBtn) {
                activeBtn.classList.add('bg-amber-500', 'border-amber-600', 'text-amber-950', 'font-bold');
            }

            document.getElementById('topic-badge').innerText = `${unit.title} - ${unit.subtitle}`;
            document.getElementById('topic-title').innerText = topic.title;
            
            const expDiv = document.getElementById('topic-explanation');
            expDiv.innerHTML = topic.exp;
            
            if (window.renderMathInElement) {
                renderMathInElement(expDiv, {
                    delimiters: [
                        {left: '$$', right: '$$', display: true},
                        {left: '$', right: '$', display: false}
                    ],
                    throwOnError: false
                });
            }

            const videoContainer = document.getElementById('topic-videos');
            const videoSection = document.getElementById('videos-section');
            if (topic.videos && topic.videos.length > 0) {
                videoSection.classList.remove('hidden');
                videoContainer.innerHTML = '';
                topic.videos.forEach(vid => {
                    const a = document.createElement('a');
                    a.href = vid.url;
                    a.target = "_blank";
                    a.className = "flex items-center gap-3 p-4 border border-outline-variant/30 rounded-lg bg-surface-bright hover:bg-error-container hover:border-error transition-colors group";
                    a.innerHTML = `
                        <div class="bg-error-container text-on-error-container p-2 rounded-full group-hover:bg-error group-hover:text-on-error transition-colors">
                            <span class="text-xl leading-none">▶</span>
                        </div>
                        <span class="font-medium text-on-surface group-hover:text-error">${vid.title}</span>
                    `;
                    videoContainer.appendChild(a);
                });
            } else {
                videoSection.classList.add('hidden');
            }

            const exContainer = document.getElementById('exercises-container');
            const practiceSection = document.getElementById('practice-section');
            exContainer.innerHTML = '';
            
            if (topic.exercises && topic.exercises.length > 0) {
                practiceSection.classList.remove('hidden');
                
                if(unit.id === 'uparcial') {
                    document.getElementById('exercise-intro-text').innerText = "Debes clasificar el ejercicio correctamente eligiendo el tema o distribución en el menú desplegable. Solo al acertar, se habilitarán los botones de ayuda.";
                } else {
                    document.getElementById('exercise-intro-text').innerText = "Intenta resolver el ejercicio de práctica antes de ver la respuesta paso a paso.";
                }

                topic.exercises.forEach((ex, index) => {
                    const exId = `topic-ex-${index}`;
                    let chartHtml = '';
                    if (ex.hasZChart) {
                        chartHtml = `<div class="w-full flex justify-center my-6"><canvas id="topic-z-canvas-${index}" class="w-full max-w-md"></canvas></div>`;
                    }
                    
                    let selectHtml = '';
                    let opacityClass = '';
                    if(ex.topicType) {
                        opacityClass = 'opacity-50 pointer-events-none'; // Inician bloqueados hasta acertar
                        selectHtml = `
                            <div class="mb-4 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg border border-indigo-100 dark:border-indigo-800 shadow-inner">
                                <label class="block text-sm font-bold text-indigo-900 dark:text-indigo-200 mb-2">🕵️‍♂️ Selecciona el tema o fórmula a aplicar antes de resolver:</label>
                                <div class="flex flex-col gap-3">
                                    <select id="${exId}-select" class="w-full md:w-2/3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-indigo-500 focus:border-indigo-500" onchange="checkTopic('${exId}', '${ex.topicType}', '${exId}-hint-btn', '${exId}-a-btn', '${unit.id}', '${topic.id}', ${index})">
                                        <option value="">Selecciona una opción...</option>
                                        <option value="Probabilidad Básica">Probabilidad Básica / Conjuntos</option>
                                        <option value="Reglas de Conteo">Reglas de Conteo</option>
                                        <option value="Probabilidad Condicional">Probabilidad Condicional</option>
                                        <option value="Teorema de Bayes">Teorema de Bayes</option>
                                        <option value="Valor Esperado / Varianza">Valor Esperado / Varianza</option>
                                        <option value="Distribución Binomial">Distribución Binomial</option>
                                        <option value="Distribución de Poisson">Distribución de Poisson</option>
                                        <option value="Distribución Uniforme">Distribución Uniforme Continua</option>
                                        <option value="Distribución Normal">Distribución Normal Estándar (Z)</option>
                                        <option value="Aproximación Normal a Binomial">Aproximación Normal a Binomial</option>
                                    </select>
                                    <div id="${exId}-status" class="w-full text-sm text-left min-h-[1.5rem] transition-all duration-300"></div>
                                </div>
                            </div>
                        `;
                    }

                    let html = `
                    <div class="bg-surface rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
                        <div class="p-6 bg-surface-container-low border-b border-outline-variant/30 flex justify-between items-start">
                            <div class="w-full">
                                <span class="inline-block px-2 py-1 bg-primary-container text-on-primary-container text-xs font-bold uppercase tracking-wider rounded">Ejercicio ${index + 1} • ${ex.level}</span>
                                <div class="mt-4 text-on-surface font-medium whitespace-pre-line">${ex.q}</div>
                                ${chartHtml}
                            </div>
                        </div>
                        <div class="p-4 bg-surface-container flex flex-col gap-3 justify-center">
                            ${selectHtml}
                            <div class="flex flex-wrap gap-3 justify-center">
                    `;

                    if (ex.hint) {
                        html += `<button id="${exId}-hint-btn" onclick="toggleElement('${exId}-hint')" class="${opacityClass} bg-secondary text-on-secondary hover:brightness-110 font-semibold py-2 px-6 rounded-lg transition-colors flex items-center gap-2"><span>💡</span> Ver Guía</button>`;
                    }

                    html += `<button id="${exId}-a-btn" onclick="toggleElement('${exId}-a')" class="${opacityClass} bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container font-semibold py-2 px-6 rounded-lg transition-colors flex items-center gap-2"><span>✅</span> Ver Resolución</button>
                        </div></div>`;

                    if (ex.hint) {
                        html += `<div id="${exId}-hint" class="hidden p-6 bg-secondary-container/20 border-t border-secondary-container text-on-surface border-l-4 border-l-secondary">
                            <span class="font-bold uppercase text-xs tracking-wider text-secondary block mb-2">Pista Estratégica:</span> 
                            <div class="whitespace-pre-line format-math text-on-surface">${ex.hint}</div>
                        </div>`;
                    }

                    html += `<div id="${exId}-a" class="hidden p-6 bg-primary-container/20 border-t border-primary-container text-on-surface border-l-4 border-l-primary">
                            <span class="font-bold uppercase text-xs tracking-wider text-primary block mb-2">Resolución Paso a Paso:</span> 
                            <div class="whitespace-pre-line format-math text-on-surface">${ex.a}</div>
                        </div>
                    </div>`;

                    exContainer.insertAdjacentHTML('beforeend', html);
                });

                if (window.renderMathInElement) {
                    document.querySelectorAll('.format-math').forEach(el => {
                        renderMathInElement(el, {
                            delimiters: [
                                {left: '$$', right: '$$', display: true},
                                {left: '$', right: '$', display: false}
                            ],
                            throwOnError: false
                        });
                    });
                }

                topic.exercises.forEach((ex, index) => {
                    if (ex.hasZChart) {
                        drawZProblemCanvas(`topic-z-canvas-${index}`);
                    }
                });
            } else {
                practiceSection.classList.add('hidden');
            }

            renderVisualization(unit.id, topic.id);

            const isLearned = userStats.learnedTopics.includes(topicId);
            const container = document.getElementById('completion-btn-container');
            container.innerHTML = ''; 
            
            const checkBtn = document.createElement('button');
            checkBtn.className = `w-full py-4 rounded-xl font-bold transition-all shadow-sm ${
                isLearned ? 'bg-tertiary-container text-on-tertiary-container border-2 border-tertiary' : 'bg-surface-variant text-on-surface-variant hover:bg-tertiary hover:text-on-tertiary'
            }`;
            checkBtn.innerText = isLearned ? "✓ Tema Completado" : "Marcar tema como aprendido";
            checkBtn.onclick = () => {
                toggleTopicLearned(topicId);
                selectTopic(topicId); 
            };
            container.appendChild(checkBtn);
        }

        function toggleElement(id) {
            const el = document.getElementById(id);
            if (el.classList.contains('hidden')) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        }

        // Ta'ãnga (Visualizations)
        function renderVisualization(unitId, topicId) {
            const vizSection = document.getElementById('viz-section');
            const vizControls = document.getElementById('viz-controls');
            vizControls.innerHTML = '';

            if (currentChart) {
                currentChart.destroy();
                currentChart = null;
            }

            if (unitId === 'u4' && topicId === 'u4t4') {
                vizSection.classList.remove('hidden');
                document.getElementById('viz-desc').innerText = "Observa cómo cambia la distribución binomial al modificar la probabilidad de éxito (p) o el número de intentos (n).";
                
                vizControls.innerHTML = `
                    <div class="flex items-center gap-2">
                        <label class="text-sm font-bold text-gray-700">Intentos (n):</label>
                        <input type="range" id="binom-n" min="1" max="20" value="10" class="w-24">
                        <span id="binom-n-val" class="text-sm font-mono bg-gray-100 px-2 py-1 rounded">10</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <label class="text-sm font-bold text-gray-700">Probabilidad (p):</label>
                        <input type="range" id="binom-p" min="0" max="1" step="0.1" value="0.5" class="w-24">
                        <span id="binom-p-val" class="text-sm font-mono bg-gray-100 px-2 py-1 rounded">0.5</span>
                    </div>
                `;

                const ctx = document.getElementById('interactiveCanvas').getContext('2d');
                currentChart = new Chart(ctx, {
                    type: 'bar',
                    data: getBinomialData(10, 0.5),
                    options: getChartOptions('Probabilidad Binomial', 'x (Éxitos)', 'P(x)')
                });

                document.getElementById('binom-n').oninput = (e) => {
                    document.getElementById('binom-n-val').innerText = e.target.value;
                    updateBinomial();
                };
                document.getElementById('binom-p').oninput = (e) => {
                    document.getElementById('binom-p-val').innerText = parseFloat(e.target.value).toFixed(1);
                    updateBinomial();
                };

            } else if (unitId === 'u5' && ['u5t2', 'u5t3', 'u5t4', 'u5t5'].includes(topicId)) {
                vizSection.classList.remove('hidden');
                document.getElementById('viz-desc').innerText = "Visualiza la Curva Normal Estándar. Ajusta la media para ver cómo la campana se desplaza manteniendo su simetría.";
                
                vizControls.innerHTML = `
                    <div class="flex items-center gap-2">
                        <label class="text-sm font-bold text-gray-700">Media (μ):</label>
                        <input type="range" id="norm-mu" min="-3" max="3" step="0.5" value="0" class="w-32">
                        <span id="norm-mu-val" class="text-sm font-mono bg-gray-100 px-2 py-1 rounded">0</span>
                    </div>
                `;

                const ctx = document.getElementById('interactiveCanvas').getContext('2d');
                currentChart = new Chart(ctx, {
                    type: 'line',
                    data: getNormalData(0, 1),
                    options: getChartOptions('Curva Normal', 'Valores', 'Densidad', true)
                });

                document.getElementById('norm-mu').oninput = (e) => {
                    document.getElementById('norm-mu-val').innerText = parseFloat(e.target.value).toFixed(1);
                    const mu = parseFloat(e.target.value);
                    currentChart.data = getNormalData(mu, 1);
                    currentChart.update();
                };

            } else {
                vizSection.classList.add('hidden');
            }
        }

        function factorial(n) {
            if (n === 0 || n === 1) return 1;
            for (var i = n - 1; i >= 1; i--) { n *= i; }
            return n;
        }
        function combinations(n, k) {
            return factorial(n) / (factorial(k) * factorial(n - k));
        }
        function getBinomialData(n, p) {
            const labels = [];
            const data = [];
            for (let x = 0; x <= n; x++) {
                labels.push(x);
                let prob = combinations(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x);
                data.push(prob);
            }
            return {
                labels: labels,
                datasets: [{
                    label: 'Probabilidad',
                    data: data,
                    backgroundColor: 'rgba(15, 118, 110, 0.7)',
                    borderColor: 'rgba(15, 118, 110, 1)',
                    borderWidth: 1,
                    borderRadius: 4
                }]
            };
        }
        function updateBinomial() {
            if(!currentChart) return;
            const n = parseInt(document.getElementById('binom-n').value);
            const p = parseFloat(document.getElementById('binom-p').value);
            currentChart.data = getBinomialData(n, p);
            currentChart.update();
        }

        function getNormalData(mu, sigma) {
            const labels = [];
            const data = [];
            for (let x = -5; x <= 5; x += 0.2) {
                labels.push(x.toFixed(1));
                let y = (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2));
                data.push(y);
            }
            return {
                labels: labels,
                datasets: [{
                    label: 'Densidad Normal',
                    data: data,
                    backgroundColor: 'rgba(30, 64, 175, 0.2)',
                    borderColor: 'rgba(30, 64, 175, 1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }]
            };
        }

        function getChartOptions(title, xTitle, yTitle, isLine = false) {
            return {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) { label += ': '; }
                                if (context.parsed.y !== null) {
                                    label += context.parsed.y.toFixed(4);
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: { display: true, text: xTitle, font: { weight: 'bold' } },
                        grid: { display: false }
                    },
                    y: {
                        title: { display: true, text: yTitle, font: { weight: 'bold' } },
                        beginAtZero: true,
                        max: isLine ? 0.45 : null 
                    }
                },
                animation: { duration: 400 }
            };
        }

        function drawZProblemCanvas(canvasId) {
            const canvas = document.getElementById(canvasId);
            if (!canvas) return;
            
            const w = 600;
            const h = 300;
            canvas.width = w;
            canvas.height = h;
            
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, w, h);
            
            const padB = 40; 
            const padT = 20;
            
            function getX(z) { return (z + 3.5) / 7 * w; }
            function getY(y) { return h - padB - (y / 0.45) * (h - padB - padT); }
            
            function normalDist(z) {
                return (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * Math.pow(z, 2));
            }

            const z2 = -0.674;
            const z1 = 0.385;

            ctx.beginPath();
            ctx.moveTo(getX(z2), getY(0));
            for(let z = z2; z <= z1; z += 0.02) {
                ctx.lineTo(getX(z), getY(normalDist(z)));
            }
            ctx.lineTo(getX(z1), getY(0));
            ctx.closePath();
            ctx.fillStyle = '#22c55e';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(getX(z1), getY(0));
            for(let z = z1; z <= 3.5; z += 0.02) {
                ctx.lineTo(getX(z), getY(normalDist(z)));
            }
            ctx.lineTo(getX(3.5), getY(0));
            ctx.closePath();
            ctx.fillStyle = '#c4b5fd'; 
            ctx.fill();

            ctx.beginPath();
            for(let z = -3.5; z <= 3.5; z += 0.02) {
                if(z === -3.5) ctx.moveTo(getX(z), getY(normalDist(z)));
                else ctx.lineTo(getX(z), getY(normalDist(z)));
            }
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 2.5;
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0, getY(0));
            ctx.lineTo(w, getY(0));
            ctx.strokeStyle = '#1e293b';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.beginPath();
            ctx.setLineDash([6, 4]);
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 2;
            
            ctx.moveTo(getX(0), getY(0));
            ctx.lineTo(getX(0), getY(normalDist(0)));
            ctx.moveTo(getX(z2), getY(0));
            ctx.lineTo(getX(z2), getY(normalDist(z2)));
            ctx.moveTo(getX(z1), getY(0));
            ctx.lineTo(getX(z1), getY(normalDist(z1)));
            
            ctx.stroke();
            ctx.setLineDash([]); 

            ctx.fillStyle = '#0f172a';
            ctx.font = 'bold 18px sans-serif';
            ctx.textAlign = 'center';
            
            ctx.fillText('Z2 = ?', getX(z2), getY(0) + 25);
            ctx.fillText('Z1 = ?', getX(z1), getY(0) + 25);
            
            ctx.font = 'bold 20px sans-serif';
            ctx.fillText('40%', getX((z2+0)/2), getY(0.15));
            ctx.fillText('35%', getX((z1+2)/2), getY(0.08));
        }

        // Ñeha'ã (Test Mode)
        function updateQuizScoresUI() {
            const select = document.getElementById('quiz-unit-select');
            Array.from(select.options).forEach(opt => {
                const unitId = opt.value;
                if (unitId !== 'all' && userStats.quizGrades[unitId] !== undefined) {
                    if(!opt.text.includes('🏆')) {
                        opt.text = `${opt.text} (Mejor: ${userStats.quizGrades[unitId]}/10 🏆)`;
                    } else {
                        opt.text = opt.text.replace(/\(Mejor:.*\)/, `(Mejor: ${userStats.quizGrades[unitId]}/10 🏆)`);
                    }
                }
            });

            const idScoreBadge = document.getElementById('identify-score-badge');
            if(userStats.quizGrades['identify'] !== undefined) {
                idScoreBadge.innerText = `Mejor Nota: ${userStats.quizGrades['identify']}/10 🏆`;
            }
        }

        function openTestMode() {
            currentUnitId = null;
            updateNavClasses();
            
            document.getElementById('sidebar').classList.add('hidden');
            document.getElementById('sidebar').classList.remove('lg:flex');
            document.getElementById('main-content').classList.remove('lg:pl-80');

            document.getElementById('welcome-screen').classList.add('hidden');
            document.getElementById('content-screen').classList.add('hidden');
            document.getElementById('content-screen').classList.remove('flex');
            
            const buttons = document.getElementById('topics-list').children;
            for(let b of buttons) {
                b.classList.remove('bg-teal-50', 'border-teal-500', 'text-teal-900', 'font-bold');
            }
            
            updateQuizScoresUI();

            document.getElementById('test-screen').classList.remove('hidden');
            document.getElementById('test-screen').classList.add('flex');
            
            document.getElementById('test-menu').classList.remove('hidden');
            document.getElementById('quiz-ui').classList.add('hidden');
            document.getElementById('quiz-results').classList.add('hidden');
            document.getElementById('flash-ui').classList.add('hidden');
            document.getElementById('flash-results').classList.add('hidden');
        }

        function shuffleArray(array) {
            let curId = array.length;
            while (0 !== curId) {
                let randId = Math.floor(Math.random() * curId);
                curId -= 1;
                let tmp = array[curId];
                array[curId] = array[randId];
                array[randId] = tmp;
            }
            return array;
        }

        function startQuiz(modeStr = 'theory') {
            testState.submode = modeStr;
            let pool = [];

            if (modeStr === 'identify') {
                pool = testData.identifyPool;
            } else {
                const unitFilter = document.getElementById('quiz-unit-select').value;
                pool = testData.quizPool;
                if (unitFilter !== 'all') {
                    pool = pool.filter(q => q.unit === unitFilter);
                }
            }

            let shuffled = shuffleArray([...pool]);
            testState.activeItems = shuffled.slice(0, Math.min(10, shuffled.length));
            testState.currentIndex = 0;
            testState.score = 0;
            testState.mode = 'quiz';

            if(testState.activeItems.length === 0) {
                alert("No hay preguntas para esta selección."); return;
            }

            document.getElementById('test-menu').classList.add('hidden');
            document.getElementById('quiz-results').classList.add('hidden');
            document.getElementById('quiz-ui').classList.remove('hidden');
            document.getElementById('quiz-ui').classList.add('flex');

            renderQuizQuestion();
        }

        function renderQuizQuestion() {
            const item = testState.activeItems[testState.currentIndex];
            const total = testState.activeItems.length;
            
            document.getElementById('quiz-progress').innerText = `Pregunta ${testState.currentIndex + 1} de ${total}`;
            
            let unitStr = "ESTADÍSTICA GENERAL";
            if (testState.submode === 'identify') {
                unitStr = "IDENTIFICA EL PROBLEMA 🔍";
            } else {
                if (item.unit === "u3") unitStr = "UNIDAD 3: Probabilidad";
                if (item.unit === "u4") unitStr = "UNIDAD 4: Discreta";
                if (item.unit === "u5") unitStr = "UNIDAD 5: Continua";
            }
            
            document.getElementById('quiz-unit-badge').innerText = unitStr;
            document.getElementById('quiz-question').innerText = item.q;
            
            const optionsContainer = document.getElementById('quiz-options');
            optionsContainer.innerHTML = '';
            
            const feedback = document.getElementById('quiz-feedback');
            feedback.classList.add('hidden');
            feedback.className = 'hidden w-full p-4 rounded-xl mb-6 font-medium text-center text-lg'; 
            document.getElementById('quiz-next-btn').classList.add('hidden');

            item.options.forEach((optText, idx) => {
                const btn = document.createElement('button');
                btn.className = "w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 font-medium text-gray-700 transition-colors option-btn";
                btn.innerText = optText;
                btn.onclick = () => handleQuizAnswer(idx, btn);
                optionsContainer.appendChild(btn);
            });
        }

        function handleQuizAnswer(selectedIndex, btnElement) {
            const item = testState.activeItems[testState.currentIndex];
            const isCorrect = selectedIndex === item.ans;
            const allButtons = document.querySelectorAll('.option-btn');
            
            allButtons.forEach((btn, idx) => {
                btn.onclick = null; 
                btn.classList.remove('hover:bg-blue-50', 'hover:border-blue-300');
                if (idx === item.ans) {
                    btn.classList.add('bg-green-100', 'border-green-500', 'text-green-800'); 
                } else if (idx === selectedIndex && !isCorrect) {
                    btn.classList.add('bg-red-100', 'border-red-500', 'text-red-800'); 
                } else {
                    btn.classList.add('opacity-50');
                }
            });

            const feedback = document.getElementById('quiz-feedback');
            feedback.classList.remove('hidden');
            
            if (isCorrect) {
                testState.score++;
            }
            
            let feedbackText = isCorrect ? "¡Correcto! Excelente trabajo. ✅" : "Incorrecto. La respuesta correcta está en verde. ❌";
            let colorClasses = isCorrect ? ['bg-green-50', 'text-green-700', 'border', 'border-green-200'] : ['bg-red-50', 'text-red-700', 'border', 'border-red-200'];
            
            if (item.exp) {
                feedbackText += `<div class="mt-4 p-4 bg-white/60 rounded-lg text-left text-sm text-gray-800 border border-gray-200">${item.exp}</div>`;
            }

            feedback.innerHTML = feedbackText;
            feedback.classList.add(...colorClasses);

            // Renderizar KaTeX en el feedback (Render Math)
            if (window.renderMathInElement) {
                renderMathInElement(feedback, {
                    delimiters: [
                        {left: '$$', right: '$$', display: true},
                        {left: '$', right: '$', display: false}
                    ],
                    throwOnError: false
                });
            }

            const nextBtn = document.getElementById('quiz-next-btn');
            nextBtn.classList.remove('hidden');
            if (testState.currentIndex === testState.activeItems.length - 1) {
                nextBtn.innerText = "Ver Resultados Finales 🏆";
            } else {
                nextBtn.innerText = "Siguiente Ejercicio →";
            }
        }

        function nextQuizQuestion() {
            testState.currentIndex++;
            if (testState.currentIndex < testState.activeItems.length) {
                renderQuizQuestion();
            } else {
                showQuizResults();
            }
        }

        function showQuizResults() {
            document.getElementById('quiz-ui').classList.add('hidden');
            document.getElementById('quiz-results').classList.remove('hidden');
            document.getElementById('quiz-results').classList.add('flex');
            
            const total = testState.activeItems.length;
            const score = testState.score;
            document.getElementById('quiz-score-display').innerText = `${score} / ${total}`;
            
            let isNewRecord = false;

            if (testState.submode === 'identify') {
                if (!userStats.quizGrades['identify'] || score > userStats.quizGrades['identify']) {
                    isNewRecord = true;
                    saveQuizGrade('identify', score);
                }
            } else {
                const unitFilter = document.getElementById('quiz-unit-select').value;
                if(unitFilter !== 'all') {
                    if (!userStats.quizGrades[unitFilter] || score > userStats.quizGrades[unitFilter]) {
                        isNewRecord = true;
                        saveQuizGrade(unitFilter, score);
                    }
                }
            }

            const resultMsg = document.getElementById('quiz-result-msg');
            if (isNewRecord) {
                resultMsg.innerHTML = `<span class="text-green-600 font-bold text-xl">¡Nuevo Récord en este modo! 🌟</span>`;
            } else {
                resultMsg.innerText = "Aquí tienes tu puntuación final.";
            }

            const emoji = document.getElementById('quiz-result-emoji');
            if(score === total) emoji.innerText = '🥇';
            else if (score >= total * 0.7) emoji.innerText = '👍';
            else emoji.innerText = '📚';
        }

        function startFlashcards(isRetry = false) {
            if (!isRetry) {
                const unitFilter = document.getElementById('flash-unit-select').value;
                let pool = testData.flashcardPool;
                
                if (unitFilter !== 'all') {
                    pool = pool.filter(f => f.unit === unitFilter);
                }
                testState.activeItems = shuffleArray([...pool]);
                testState.flashMistakes = [];
            } else {
                testState.activeItems = shuffleArray([...testState.flashMistakes]);
                testState.flashMistakes = []; 
            }

            testState.currentIndex = 0;
            testState.mode = 'flash';

            if(testState.activeItems.length === 0) {
                alert("No hay tarjetas para repasar."); return;
            }

            document.getElementById('test-menu').classList.add('hidden');
            document.getElementById('flash-results').classList.add('hidden');
            document.getElementById('flash-ui').classList.remove('hidden');
            document.getElementById('flash-ui').classList.add('flex');

            renderFlashcard();
        }

        function renderFlashcard() {
            const item = testState.activeItems[testState.currentIndex];
            const total = testState.activeItems.length;
            
            document.getElementById('flash-progress').innerText = `Tarjeta ${testState.currentIndex + 1} de ${total}`;
            
            const cardContainer = document.getElementById('flashcard-container');
            cardContainer.classList.remove('flipped');
            document.getElementById('flash-controls').classList.add('hidden');

            document.getElementById('flash-front-text').innerText = item.f;
            document.getElementById('flash-back-text').innerText = item.b;
        }

        function flipCard() {
            const cardContainer = document.getElementById('flashcard-container');
            if(!cardContainer.classList.contains('flipped')) {
                cardContainer.classList.add('flipped');
                setTimeout(() => {
                    document.getElementById('flash-controls').classList.remove('hidden');
                }, 300);
            }
        }

        function markFlashcard(knewIt) {
            const currentItem = testState.activeItems[testState.currentIndex];
            if (!knewIt) {
                testState.flashMistakes.push(currentItem);
            }

            testState.currentIndex++;
            if (testState.currentIndex < testState.activeItems.length) {
                renderFlashcard();
            } else {
                showFlashResults();
            }
        }

        function showFlashResults() {
            document.getElementById('flash-ui').classList.add('hidden');
            document.getElementById('flash-results').classList.remove('hidden');
            document.getElementById('flash-results').classList.add('flex');
            
            const total = testState.activeItems.length;
            const mistakes = testState.flashMistakes.length;
            const known = total - mistakes;

            const resText = document.getElementById('flash-result-text');
            const resButtons = document.getElementById('flash-result-buttons');
            resButtons.innerHTML = '';

            if (mistakes === 0) {
                resText.innerText = `¡Excelente! Dominaste todas las ${total} tarjetas.`;
                document.getElementById('flash-result-emoji').innerText = '🎉';
            } else {
                resText.innerText = `Recordaste ${known} tarjetas, pero hay ${mistakes} que necesitan más repaso.`;
                document.getElementById('flash-result-emoji').innerText = '💪';
                
                const retryBtn = document.createElement('button');
                retryBtn.className = "bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-sm";
                retryBtn.innerText = `Repasar las ${mistakes} que fallé`;
                retryBtn.onclick = () => startFlashcards(true);
                resButtons.appendChild(retryBtn);
            }

            const menuBtn = document.createElement('button');
            menuBtn.className = "bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-xl transition-colors";
            menuBtn.innerText = "Volver al Menú";
            menuBtn.onclick = openTestMode;
            resButtons.appendChild(menuBtn);
        }