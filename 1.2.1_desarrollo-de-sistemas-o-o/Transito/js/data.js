const appData = {
    units: [
        {
            id: "u1",
            title: "LEY N° 5.688",
            subtitle: "SISTEMA INTEGRAL DE SEGURIDAD PÚBLICA",
            desc: "Conceptos sobre la Ley N° 5.688 y las funciones del Cuerpo de Agentes de Control de Tránsito y Transporte.",
            topics: [
                {
                    id: "u1t1",
                    title: "Autoridad y Control",
                    exp: "El Cuerpo de Agentes compone el Sistema Integral de Seguridad Pública de la Ciudad de Buenos Aires (Art. 505) y es la autoridad de control del tránsito y el transporte (Art. 506).",
                    videos: [],
                    exercises: []
                }
            ]
        },
        {
            id: "u2",
            title: "LEY N° 2.148",
            subtitle: "CÓDIGO DE TRÁNSITO Y TRANSPORTE",
            desc: "Estudio de las normas del Código de Tránsito y Transporte de la Ciudad Autónoma de Buenos Aires.",
            topics: [
                {
                    id: "u2t1",
                    title: "Autoridad de Aplicación",
                    exp: "La Autoridad de Aplicación de este Código es la Subsecretaría de Tránsito y Transporte (Art. 1.1.3).",
                    videos: [],
                    exercises: []
                }
            ]
        },
        {
            id: "u3",
            title: "LEY N° 1.472 Y 12",
            subtitle: "RÉGIMEN CONTRAVENCIONAL Y ALCOHOLEMIA",
            desc: "Faltas contravencionales, límites de alcoholemia y retención preventiva de licencias y vehículos.",
            topics: [
                {
                    id: "u3t1",
                    title: "Conducción Peligrosa",
                    exp: "El Artículo 111 del Código Contravencional sanciona a quien conduce en estado de ebriedad o bajo la acción de sustancias (multa, arresto, e inhabilitación).",
                    videos: [],
                    exercises: []
                }
            ]
        }
    ],
    flashcardsPool: [
{"id": "f1", "front": "Ley N° 2.148", "back": "Aprueba el Código de Tránsito y Transporte de la CABA."},
{"id": "f2", "front": "Ley N° 5.688", "back": "Establece el Sistema Integral de Seguridad Pública de la CABA (crea el Cuerpo de Agentes)."},
{"id": "f3", "front": "Ley N° 1.472", "back": "Aprueba el Código Contravencional de la CABA."},
{"id": "f4", "front": "Art. 111 (Ley 1.472)", "back": "Sanciona conducir en estado de ebriedad o bajo efectos de estupefacientes."},
{"id": "f5", "front": "Art. 112 (Ley 1.472)", "back": "Sanciona la negativa a someterse a controles (alcoholemia/estupefacientes)."},
{"id": "f6", "front": "Art. 113 (Ley 1.472)", "back": "Sanciona la conducción peligrosa (picadas, excesos de velocidad irracionales)."},
{"id": "f7", "front": "Art. 505 (Ley 5.688)", "back": "El Cuerpo de Agentes integra el Sistema de Seguridad Pública de la Ciudad."},
{"id": "f8", "front": "Art. 508 (Ley 5.688)", "back": "El Cuerpo de Agentes es civil, sin estado policial y prohíbe portar armas de fuego."},
{"id": "f9", "front": "Prioridad de Paso", "back": "Todo conductor debe ceder el paso en encrucijadas al que cruza desde su derecha (Art. 6.7.2)."},
{"id": "f10", "front": "Límite Alcoholemia Particulares", "back": "0.5 g/l de alcohol en sangre."},
{"id": "f11", "front": "Límite Alcoholemia Profesionales", "back": "0.0 g/l (Tolerancia Cero)."},
{"id": "f12", "front": "Max Velocidad Avenidas", "back": "60 km/h (salvo señalización)."},
{"id": "f13", "front": "Max Velocidad Calles", "back": "40 km/h (salvo señalización)."},
{"id": "f14", "front": "Prioridad en Rotondas", "back": "Tiene prioridad el que circula por ella, anulando la prioridad de la derecha."},
{"id": "f15", "front": "Autoridad de Aplicación (Tránsito)", "back": "La Subsecretaría de Tránsito y Transporte (Art. 1.1.3)."}
    ]
};

const testData = {
    quizPool: [
        { id: "q1", unit: "u2", q: "¿Qué Ley instituye el Código de Tránsito y Transporte de la CABA?", options: ["Ley N° 2.184", "Ley N° 2.418", "Ley N° 2.148", "Ley N° 2.814"], ans: 2, exp: "La Ley N° 2.148 aprueba el Código de Tránsito y Transporte." },
        { id: "q2", unit: "u1", q: "¿Qué Ley establece el Sistema Integral de Seguridad Pública de la CABA?", options: ["Ley N° 5.868", "Ley N° 5.688", "Ley N° 5.886", "Ley N° 5.668"], ans: 1, exp: "El Sistema Integral de Seguridad Pública está establecido por la Ley N° 5.688." },
        { id: "q3", unit: "u2", q: "¿Qué Ley Nacional de Tránsito y Seguridad Vial es referenciada frecuentemente?", options: ["Ley N° 24.494", "Ley N° 24.449", "Ley N° 24.944", "Ley N° 24.444"], ans: 1, exp: "La Ley Nacional de Tránsito es la Ley N° 24.449." },
        { id: "q4", unit: "u3", q: "¿Cuál es el número de la Ley que aprueba el Código Contravencional de la CABA?", options: ["Ley N° 1.427", "Ley N° 1.742", "Ley N° 1.247", "Ley N° 1.472"], ans: 3, exp: "El Código Contravencional de la CABA se aprobó mediante la Ley N° 1.472." },
        { id: "q5", unit: "u2", q: "¿Qué Resolución determinó los modelos de actas de infracción de tránsito unificadas?", options: ["Resolución N° 10/21", "Resolución N° 4/21", "Resolución N° 4/20", "Resolución N° 10/20"], ans: 1, exp: "La Resolución N° 4/21 determinó los modelos de actas unificadas." },
        { id: "q6", unit: "u1", q: "¿Qué Ley modificó el Régimen de Faltas en CABA (Ley 451)?", options: ["Ley N° 6.486", "Ley N° 6.684", "Ley N° 6.846", "Ley N° 6.468"], ans: 0, exp: "La Ley N° 6.486 fue la que modificó la Ley N° 451 (Régimen de Faltas de la CABA)." },
        { id: "q7", unit: "u3", q: "¿Qué Disposición de la ANSV aprobó el formato digital complementario en 'MiArgentina' inicialmente?", options: ["Disposición N° 32/20", "Disposición N° 39/19", "Disposición N° 39/20", "Disposición N° 32/19"], ans: 1, exp: "El formato digital en 'MiArgentina' fue inicialmente aprobado por la Disposición N° 39/19 ANSV." },
        { id: "q8", unit: "u2", q: "Según la Ley N° 2.148, ¿quién es la Autoridad de Aplicación del Código de Tránsito?", options: ["La Policía de la Ciudad", "La Jefatura de Gabinete de Ministros", "La Subsecretaría de Tránsito y Transporte", "El Cuerpo de Agentes de Control"], ans: 2, exp: "La Subsecretaría de Tránsito y Transporte, dependiente del Ministerio de Desarrollo Económico, es la Autoridad de Aplicación." },
        { id: "q9", unit: "u1", q: "¿De qué dependen orgánicamente los Agentes de Tránsito (Art. 507, Ley 5688)?", options: ["Del Ministerio de Desarrollo Económico", "Del Ministerio de Justicia y Seguridad", "De la Policía de la Ciudad", "De la Jefatura de Gobierno"], ans: 1, exp: "Según el Art. 507, dependen orgánica y funcionalmente del Ministerio de Justicia y Seguridad." },
        { id: "q10", unit: "u2", q: "¿Qué artículo de la Ley N° 2.148 refiere a la Autoridad de Control?", options: ["Art. 1.1.3", "Art. 1.1.4", "Art. 1.1.5", "Art. 1.1.2"], ans: 1, exp: "El Art. 1.1.4 del Código de Tránsito (Ley 2148) refiere a la Autoridad de Control (la fuerza policial o de seguridad asignada)." },
        { id: "q11", unit: "u1", q: "¿Cuál de las siguientes NO es una función de los Agentes de Control (Art. 511)?", options: ["Controlar la documentación de los vehículos", "Determinar la culpabilidad en accidentes", "Prevenir y hacer cesar la comisión de faltas", "Actuar como auxiliar de justicia en materia de tránsito"], ans: 1, exp: "Determinar la culpabilidad en accidentes compete a la justicia, no a las funciones operativas de los agentes (Art. 511)." },
        { id: "q12", unit: "u2", q: "Según el Art. 1.2.2 de la Ley 2148, ¿qué edad mínima debe tener el acompañante en motovehículos?", options: ["12 años", "14 años", "16 años", "18 años"], ans: 2, exp: "El acompañante en motovehículos debe ser mayor de 16 años (Art. 1.2.2, inciso a)." },
        { id: "q13", unit: "u3", q: "¿Qué sanciona el Art. 111 de la Ley 1.472 (Código Contravencional)?", options: ["Obstrucción de la vía pública", "Conducir con auriculares", "Conducir en estado de ebriedad o bajo efectos de estupefacientes", "Exceso de velocidad"], ans: 2, exp: "El Artículo 111 sanciona conducir en estado de ebriedad o bajo los efectos de sustancias." },
        { id: "q14", unit: "u3", q: "¿Qué sanciona el Art. 112 de la Ley 1.472?", options: ["No usar casco", "Violar luz roja", "Negativa a someterse a control", "Estacionar en doble fila"], ans: 2, exp: "El Artículo 112 sanciona la 'Negativa a someterse a control' (alcoholemia o toxicológico)." },
        { id: "q15", unit: "u3", q: "¿Qué sanciona el Art. 113 de la Ley 1.472?", options: ["Organizar o participar en picadas (Conducción Peligrosa)", "Conducir usando el celular", "Circular sin luces", "Darse a la fuga"], ans: 0, exp: "El Artículo 113 aborda la 'Conducción Peligrosa' en relación a destrezas y picadas." },
        { id: "q16", unit: "u2", q: "Según la normativa general, ¿cuándo NO es aplicable la retención preventiva del vehículo?", options: ["Cuando no se cumple con la VTV", "Cuando el conductor se niega al test de alcoholemia", "Cuando se olvidó el DNI en casa pero tiene licencia", "Cuando el vehículo no tiene chapas patentes"], ans: 2, exp: "Olvidar el DNI no es causal directa de retención del vehículo si se posee la licencia de conducir habilitante y demás documentación." },
        { id: "q17", unit: "u1", q: "¿Qué normativa regula específicamente el Régimen de Faltas de la CABA?", options: ["Ley N° 2.148", "Ley N° 451", "Ley N° 1.472", "Ley N° 5.688"], ans: 1, exp: "La Ley N° 451 es la que establece el Régimen de Faltas de la Ciudad Autónoma de Buenos Aires." },
        { id: "q18", unit: "u3", q: "En un control de alcoholemia, ¿quién está habilitado para labrar el acta contravencional si da positivo?", options: ["Sólo la Policía de la Ciudad", "Cualquier civil", "El Agente de Tránsito u otra autoridad de control facultada", "El Juez de Faltas directamente en la calle"], ans: 2, exp: "Los Agentes de Control de Tránsito están facultados para realizar los controles y labrar las actas correspondentes." },
        { id: "q19", unit: "u1", q: "¿Qué establece el Art. 509 de la Ley 5.688 respecto a los deberes de los agentes?", options: ["Pueden cobrar multas en efectivo", "Deben usar siempre chaleco antibalas", "Garantizan el respeto de los Derechos Humanos e Igualdad de Género", "Sólo actúan de noche"], ans: 2, exp: "El Art. 509 enfatiza los principios de actuación, incluyendo el respeto a los derechos humanos, igualdad de género y no discriminación." },
        { id: "q20", unit: "u2", q: "Respecto a la Licencia Nacional de Conducir (Art. 3.1.2), su formato físico es exigible, excepto si...", options: ["Está vencida hace un día", "Se presenta de manera digital en la aplicación 'MiArgentina' (bajo ciertas condiciones)", "El conductor jura tenerla", "Está plastificada"], ans: 1, exp: "La licencia digital a través de 'MiArgentina' tiene validez, aunque su aplicación exacta depende de la jurisdicción y disposiciones específicas (ANSV 39/19)." }
    ,
{"id": "q21", "unit": "u3", "q": "Según el Art. 111 de la Ley 1.472, ¿cuál es la sanción por conducir en estado de ebriedad?", "options": ["Sólo retención del vehículo", "Multa, arresto de 1 a 10 días e inhabilitación", "Multa y trabajos comunitarios únicamente", "Inhabilitación de por vida en la primera infracción"], "ans": 1, "exp": "El Art. 111 impone multa (de $150 a $1000) o arresto de 1 a 10 días, e inhabilitación."},
{"id": "q22", "unit": "u3", "q": "Según el Art. 112 de la Ley 1.472, si un conductor se niega al test de alcoholemia, ¿qué ocurre?", "options": ["Se le cobra doble multa por el Art. 111", "Se asume que está ebrio y se lo arresta", "Incurre en la contravención de negativa a someterse a control, con multa o días de arresto", "Se le retira el vehículo pero no se le multa"], "ans": 2, "exp": "La negativa al control (Art. 112) es una contravención autónoma que prevé multa o arresto."},
{"id": "q23", "unit": "u3", "q": "En el Art. 113 (Conducción Peligrosa), ¿cuál es el agravante principal para aumentar al doble la sanción?", "options": ["Conducir de noche", "Conducir superando en 20 km/h la máxima permitida", "Que la conducción riesgosa sea realizada por conductores de vehículos de transporte público", "Que el conductor sea menor de 21 años"], "ans": 2, "exp": "La sanción se eleva al doble si el infractor es conductor de vehículos de transporte de pasajeros o carga (Art. 113)."},
{"id": "q24", "unit": "u1", "q": "El Artículo 507 de la Ley N° 5.688 indica que el Cuerpo de Agentes de Control ejerce funciones en...", "options": ["Toda la República Argentina", "Exclusivamente en las Autopistas de la CABA", "El ámbito territorial de la Ciudad Autónoma de Buenos Aires", "Las zonas limítrofes entre CABA y Provincia"], "ans": 2, "exp": "Su jurisdicción es exclusivamente dentro del ámbito territorial de la CABA."},
{"id": "q25", "unit": "u1", "q": "¿Cuál es un requisito fundamental para el ingreso al Cuerpo de Agentes según el Art. 513 de la Ley 5.688?", "options": ["Ser ciudadano argentino, nativo o por opción", "Tener estudios universitarios completos en seguridad", "Tener más de 35 años de edad al momento del ingreso", "Poseer vehículo propio"], "ans": 0, "exp": "Uno de los requisitos de ingreso (Art. 513 inc. b) es ser ciudadano argentino, nativo o por opción."},
{"id": "q26", "unit": "u2", "q": "Según el Código de Tránsito (Ley 2.148), ¿qué significa la señal luminosa 'Amarilla intermitente'?", "options": ["Avanzar con precaución", "Detenerse inmediatamente", "Acelerar antes de que cambie a rojo", "Ceder el paso a la derecha exclusivamente"], "ans": 0, "exp": "La luz amarilla intermitente indica precaución (Art. 6.3.1)."},
{"id": "q27", "unit": "u2", "q": "¿En qué consiste la 'Retención Preventiva' del vehículo (Art. 5.6.1)?", "options": ["En la expropiación del vehículo por parte del Estado", "En el secuestro temporal para que cese la comisión de una falta grave", "En cobrar la multa en el acto", "En demorar al conductor en la vía pública por 24 horas"], "ans": 1, "exp": "La retención es una medida cautelar para hacer cesar el peligro inminente ante ciertas faltas graves."},
{"id": "q28", "unit": "u2", "q": "Si un conductor presenta una Licencia de Conducir con domicilio en otra jurisdicción pero vive en CABA hace más de 90 días, ¿qué ocurre?", "options": ["Nada, la licencia es nacional", "La licencia pierde validez para circular en CABA", "Debe pagar un impuesto adicional", "La licencia se renueva automáticamente"], "ans": 1, "exp": "El Art. 3.2.9 establece que el titular debe denunciar cambio de domicilio en 90 días, de lo contrario la licencia caduca."},
{"id": "q29", "unit": "u2", "q": "Según la Ley 2.148, en una intersección sin semáforos, ¿quién tiene prioridad de paso?", "options": ["El que circula por la avenida", "El que se presenta por la derecha", "El vehículo más pesado", "El que va a mayor velocidad"], "ans": 1, "exp": "La prioridad absoluta de paso la tiene quien se presenta por la derecha (Art. 6.7.2)."},
{"id": "q30", "unit": "u2", "q": "¿Cuál de estas situaciones anula la prioridad de paso de la derecha (Art. 6.7.2)?", "options": ["Circular de día", "Ingresar a una rotonda", "Conducir un vehículo particular de lujo", "Llegar un segundo antes a la bocacalle"], "ans": 1, "exp": "En las rotondas, la prioridad es del que circula por ella, anulando la prioridad de la derecha."},
{"id": "q31", "unit": "u3", "q": "El Artículo 111 prohíbe conducir superando los límites de alcohol en sangre. ¿Cuál es el límite para conductores particulares en CABA?", "options": ["0.0 g/l (Tolerancia Cero)", "0.2 g/l", "0.5 g/l", "0.8 g/l"], "ans": 2, "exp": "En CABA el límite general para particulares sigue siendo 0.5 g/l (salvo principiantes y profesionales que es 0.0)."},
{"id": "q32", "unit": "u3", "q": "¿Cuál es el límite de alcohol en sangre para conductores profesionales (taxis, colectivos, carga)?", "options": ["0.0 g/l", "0.2 g/l", "0.5 g/l", "No tienen límite distinto al particular"], "ans": 0, "exp": "Para los conductores profesionales (y principiantes) rige la tolerancia cero (0.0 g/l)."},
{"id": "q33", "unit": "u1", "q": "¿Qué exige el Art. 510 de la Ley N° 5.688 a los agentes en cuanto a la identificación?", "options": ["Deben mantener su identidad en secreto por seguridad", "Deben usar uniforme y llevar la placa de identificación ostensiblemente", "Solo deben identificarse si el conductor lo solicita por escrito", "La identificación está en el móvil, no en el uniforme"], "ans": 1, "exp": "Es deber del agente portar su credencial e identificación de manera ostensible (Art. 510 inc c)."},
{"id": "q34", "unit": "u2", "q": "¿Está permitido el estacionamiento sobre las sendas peatonales?", "options": ["Sí, por un máximo de 5 minutos", "Sí, si el conductor permanece en el vehículo", "No, está prohibido bajo cualquier circunstancia", "Solo los días feriados"], "ans": 2, "exp": "Está absolutamente prohibido estacionar o detenerse sobre las sendas peatonales."},
{"id": "q35", "unit": "u2", "q": "En el caso de un siniestro vial, ¿cuál es el primer deber del conductor?", "options": ["Llamar a su abogado", "Detenerse inmediatamente e intercambiar datos", "Huir si no hubo heridos graves", "Mover el vehículo antes de que llegue la policía"], "ans": 1, "exp": "La normativa exige detenerse inmediatamente y suministrar los datos de su licencia y seguro (Art. 6.9.1)."},
{"id": "q36", "unit": "u1", "q": "El Art. 508 establece que el Cuerpo de Agentes de Control está integrado por...", "options": ["Personal civil con estado policial", "Personal civil sin estado policial", "Policías retirados", "Gendarmes reasignados"], "ans": 1, "exp": "El cuerpo es de carácter civil y su personal no tiene estado policial (Art. 508)."},
{"id": "q37", "unit": "u3", "q": "Si un conductor sobrepasa la velocidad máxima permitida en más de 140 km/h, ¿qué falta comete?", "options": ["Ninguna, solo le descuentan puntos", "Falta administrativa leve", "Contravención de conducción peligrosa", "Un delito de competencia federal"], "ans": 2, "exp": "Exceder excesivamente los límites (como correr picadas o ir a más de 140 km/h) encuadra en la contravención del Art. 113."},
{"id": "q38", "unit": "u2", "q": "¿Cuál es la velocidad máxima permitida en avenidas de la CABA (salvo señalización en contrario)?", "options": ["40 km/h", "60 km/h", "70 km/h", "80 km/h"], "ans": 1, "exp": "La máxima genérica en avenidas es de 60 km/h (Art. 6.2.2)."},
{"id": "q39", "unit": "u2", "q": "¿Cuál es la velocidad máxima permitida en calles de la CABA (salvo señalización en contrario)?", "options": ["30 km/h", "40 km/h", "50 km/h", "60 km/h"], "ans": 1, "exp": "La máxima genérica en calles es de 40 km/h (Art. 6.2.2)."},
{"id": "q40", "unit": "u1", "q": "¿Pueden los Agentes de Control portar armas de fuego según la Ley 5.688?", "options": ["Sí, armas calibre 9mm", "Solo si están acompañados por la Policía", "Tienen expresamente prohibida la portación de armas de fuego", "Sí, pero solo armas de fogueo"], "ans": 2, "exp": "Al ser un cuerpo civil sin estado policial, tienen expresamente prohibida la portación de armas de fuego (Art. 508)."},
    ],
    flashcardsPool: [
{"id": "f1", "front": "Ley N° 2.148", "back": "Aprueba el Código de Tránsito y Transporte de la CABA."},
{"id": "f2", "front": "Ley N° 5.688", "back": "Establece el Sistema Integral de Seguridad Pública de la CABA (crea el Cuerpo de Agentes)."},
{"id": "f3", "front": "Ley N° 1.472", "back": "Aprueba el Código Contravencional de la CABA."},
{"id": "f4", "front": "Art. 111 (Ley 1.472)", "back": "Sanciona conducir en estado de ebriedad o bajo efectos de estupefacientes."},
{"id": "f5", "front": "Art. 112 (Ley 1.472)", "back": "Sanciona la negativa a someterse a controles (alcoholemia/estupefacientes)."},
{"id": "f6", "front": "Art. 113 (Ley 1.472)", "back": "Sanciona la conducción peligrosa (picadas, excesos de velocidad irracionales)."},
{"id": "f7", "front": "Art. 505 (Ley 5.688)", "back": "El Cuerpo de Agentes integra el Sistema de Seguridad Pública de la Ciudad."},
{"id": "f8", "front": "Art. 508 (Ley 5.688)", "back": "El Cuerpo de Agentes es civil, sin estado policial y prohíbe portar armas de fuego."},
{"id": "f9", "front": "Prioridad de Paso", "back": "Todo conductor debe ceder el paso en encrucijadas al que cruza desde su derecha (Art. 6.7.2)."},
{"id": "f10", "front": "Límite Alcoholemia Particulares", "back": "0.5 g/l de alcohol en sangre."},
{"id": "f11", "front": "Límite Alcoholemia Profesionales", "back": "0.0 g/l (Tolerancia Cero)."},
{"id": "f12", "front": "Max Velocidad Avenidas", "back": "60 km/h (salvo señalización)."},
{"id": "f13", "front": "Max Velocidad Calles", "back": "40 km/h (salvo señalización)."},
{"id": "f14", "front": "Prioridad en Rotondas", "back": "Tiene prioridad el que circula por ella, anulando la prioridad de la derecha."},
{"id": "f15", "front": "Autoridad de Aplicación (Tránsito)", "back": "La Subsecretaría de Tránsito y Transporte (Art. 1.1.3)."}
    ]
};
