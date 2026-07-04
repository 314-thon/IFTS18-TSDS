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
    ]
};
