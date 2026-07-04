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
                },
                {
                    id: "u1t2",
                    title: "Funciones Principales (Art. 511)",
                    exp: `<ul>
          <li>Ordenar y dirigir el tránsito.</li>
          <li>Ejercer el control del estacionamiento en la vía pública.</li>
          <li>Prevenir y hacer cesar la comisión de faltas y contravenciones.</li>
          <li>Ser autoridad de fiscalización y comprobación de infracciones.</li>
        </ul>`,
                    videos: [],
                    exercises: []
                },
                {
                    id: "u1t3",
                    title: "Facultades (Art. 512)",
                    exp: `<ul>
          <li>Labrar actas contravencionales cumpliendo la Ley 12.</li>
          <li>Labrar actas de comprobación de infracciones cumpliendo la Ley 1217.</li>
          <li>Proceder a la detención del vehículo en la vía pública al sólo efecto de confeccionar el acta o requerir documentación.</li>
        </ul>`,
                    videos: [],
                    exercises: []
                }
            ]
        },
        {
            id: "u2",
            title: "LEY N° 2.148",
            subtitle: "CÓDIGO DE TRÁNSITO Y TRANSPORTE",
            desc: "Normativa principal sobre tránsito, prioridades, licencias de conducir y retenciones preventivas.",
            topics: [
                {
                    id: "u2t1",
                    title: "Prioridades Normativas (Art. 2.3.4)",
                    exp: "El orden de prioridad que el usuario de la vía pública debe respetar es: <ol class='list-decimal list-inside ml-4 mt-2'><li>Señales u órdenes de la autoridad de control</li><li>Señales transitorias</li><li>Semáforos</li><li>Señal vertical y demarcación horizontal</li><li>Normas legales de carácter general</li></ol>",
                    videos: [],
                    exercises: []
                },
                {
                    id: "u2t2",
                    title: "Clasificación de Licencias (Art. 3.2.2)",
                    exp: `<ul class="list-disc list-inside mt-2 space-y-1">
          <li><strong>Clase A:</strong> Motovehículos (ej. más de 150 cm3).</li>
          <li><strong>Clase B:</strong> Automóviles, casas rodantes, camionetas (hasta 750kg acoplado).</li>
          <li><strong>Clase C:</strong> Camiones sin acoplado.</li>
          <li><strong>Clase D:</strong> Transporte de pasajeros, emergencia, seguridad, escolar.</li>
          <li><strong>Clase E:</strong> Camiones articulados con acoplado.</li>
          <li><strong>Clase F:</strong> Automotores adaptados para discapacidad.</li>
          <li><strong>Clase G:</strong> Tractores y maquinaria agrícola.</li>
        </ul>`,
                    videos: [],
                    exercises: []
                },
                {
                    id: "u2t3",
                    title: "Conductores Principiantes (Art. 3.2.7)",
                    exp: "La condición de principiante dura <strong>2 años</strong>. Durante los primeros 6 meses no pueden circular por arterias con velocidad permitida superior a 70 km/h y deben llevar el distintivo 'P'. La tolerancia de alcohol es <strong>0.0 g/l</strong> durante los 2 años.",
                    videos: [],
                    exercises: []
                },
                {
                    id: "u2t4",
                    title: "Requisitos para Circular (Art. 6.1.2) y Retención (Art. 5.6.1)",
                    exp: `<strong>Documentación Obligatoria:</strong> Licencia vigente, DNI, Cédula de identificación del automotor, Comprobante de seguro obligatorio, Certificado de Verificación Técnica (VTV) vigente y llevar colocadas las placas oficiales.<br><br>
                    <strong>Retención Preventiva:</strong> Se impide continuar conduciendo ante alcoholemia, vehículos sin habilitación, o inhabilitados. Se retienen licencias si están vencidas, adulteradas o caducadas por cambio de jurisdicción no denunciado a los 90 días (Ley 24.449 Art. 18).`,
                    videos: [],
                    exercises: []
                }
            ]
        },
        {
            id: "u3",
            title: "RÉGIMEN CONTRAVENCIONAL",
            subtitle: "LEYES 1.472 Y 12",
            desc: "Actas contravencionales, alcoholemia y normativas anexas importantes (Identidad de Género, Cédulas, etc.).",
            topics: [
                {
                    id: "u3t1",
                    title: "El Acta y la Contravención",
                    exp: "El Código Contravencional (Ley 1.472) sanciona conductas dolosas o culposas que implican daño o peligro. Un acta es un <strong>documento público y declaración testimonial</strong>; la falsedad ideológica constituye delito. Las personas menores de 18 años son inimputables, salvo en tránsito si tienen edad para obtener licencia.",
                    videos: [],
                    exercises: []
                },
                {
                    id: "u3t2",
                    title: "Acta Contravencional (Art. 40 Ley 12)",
                    exp: "Debe contener ineludiblemente: lugar, fecha y hora del acta y del hecho; descripción circunstanciada; datos del contraventor, testigos y denunciante; firma de la autoridad.",
                    videos: [],
                    exercises: []
                },
                {
                    id: "u3t3",
                    title: "Alcoholemia (Art. 131 y Art. 5.4.x Ley 2.148)",
                    exp: "Está prohibido conducir con más de <strong>0.5 g/l</strong> en sangre (0.2 g/l para motos, 0.0 g/l para profesionales/principiantes). Si el resultado es positivo o hay negativa, se prohíbe continuar, se retiene licencia (con boleta de citación 'Z'), se labra Acta Contravencional y se dispone remoción del vehículo.",
                    videos: [],
                    exercises: []
                },
                {
                    id: "u3t4",
                    title: "Identidad de Género (Ley 26.743)",
                    exp: "Deberá respetarse la identidad de género adoptada por las personas. La autopercepción prima siempre y se debe respetar incluso cuando no coincide con el DNI. Se debe dejar constancia en observaciones <em>'S/ Ley de Identidad de Género 26.743 art. 12'</em>.",
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
        { id: "q5", unit: "u3", q: "¿Qué Ley establece el Procedimiento Contravencional en CABA?", options: ["Ley N° 21", "Ley N° 12", "Ley N° 121", "Ley N° 112"], ans: 1, exp: "El Procedimiento Contravencional está reglamentado por la Ley N° 12." },
        { id: "q6", unit: "u3", q: "¿Qué Ley regula el Régimen de Faltas en CABA?", options: ["Ley N° 541", "Ley N° 415", "Ley N° 451", "Ley N° 145"], ans: 2, exp: "El Régimen de Faltas de la CABA está dispuesto por la Ley N° 451." },
        { id: "q7", unit: "u1", q: "¿Qué Ley dicta el Procedimiento de Faltas en la Ciudad de Buenos Aires?", options: ["Ley N° 1271", "Ley N° 1712", "Ley N° 1217", "Ley N° 2171"], ans: 2, exp: "El Procedimiento de Faltas se rige por la Ley N° 1217." },
        { id: "q8", unit: "u2", q: "¿Qué Decreto es el Reglamentario de la Ley N° 2.148?", options: ["Decreto N° 588/2010", "Decreto N° 855/2010", "Decreto N° 580/2018", "Decreto N° 885/2001"], ans: 0, exp: "El Decreto Reglamentario de la Ley 2.148 es el Decreto N° 588/2010." },
        { id: "q9", unit: "u3", q: "¿Qué Ley Nacional regula la Identidad de Género?", options: ["Ley N° 26.473", "Ley N° 26.347", "Ley N° 26.743", "Ley N° 26.734"], ans: 2, exp: "La Ley Nacional de Identidad de Género es la Ley N° 26.743." },
        { id: "q10", unit: "u3", q: "¿Qué Ley Nacional trata sobre Migraciones?", options: ["Ley N° 25.781", "Ley N° 25.817", "Ley N° 25.871", "Ley N° 25.178"], ans: 2, exp: "La Ley Nacional de Migraciones es la Ley N° 25.871." },
        { id: "q11", unit: "u3", q: "¿Bajo qué Ley se dictamina el Reconocimiento y Protección al Refugiado?", options: ["Ley N° 26.156", "Ley N° 26.516", "Ley N° 26.165", "Ley N° 26.615"], ans: 2, exp: "La Ley de Protección al Refugiado es la Ley N° 26.165." },
        { id: "q12", unit: "u2", q: "¿Qué Decreto modificó la validez legal de la Licencia Nacional de Conducir Digital?", options: ["Decreto N° 169/2025", "Decreto N° 196/2025", "Decreto N° 195/2026", "Decreto N° 165/2029"], ans: 1, exp: "El Decreto N° 196/2025 otorgó validez legal en formato digital a la LNC." },
        { id: "q13", unit: "u3", q: "¿Qué Ley aplica sobre el régimen de vehículos abandonados en la vía pública?", options: ["Ley N° 324", "Ley N° 432", "Ley N° 342", "Ley N° 243"], ans: 2, exp: "La Ley N° 342 regula los vehículos abandonados." },
        { id: "q14", unit: "u3", q: "¿Qué Disposición de la DNRPA creó el Registro Único Virtual (RUV)?", options: ["Disposición N° 47/2025", "Disposición N° 74/2052", "Disposición N° 74/2025", "Disposición N° 47/2052"], ans: 2, exp: "La Disposición N° 74/2025 de la DNRPA creó el RUV." },
        { id: "q15", unit: "u3", q: "¿Qué Disposición de la ANSV aprobó el formato digital complementario en 'MiArgentina' inicialmente?", options: ["Disposición N° 93/2019", "Disposición N° 39/2019", "Disposición N° 39/2091", "Disposición N° 93/2091"], ans: 1, exp: "La Disposición N° 39/2019 aprobó el formato digital en MiArgentina." },
        { id: "q16", unit: "u3", q: "¿Qué Disposición de la DNRPA determina que las cédulas de identificación automotor NO caducan?", options: ["Disposición N° 92/24", "Disposición N° 29/24", "Disposición N° 29/42", "Disposición N° 92/42"], ans: 1, exp: "La Disposición N° 29/24 de la DNRPA establece la no caducidad de las cédulas." },
        { id: "q17", unit: "u3", q: "¿Bajo qué Disposición se reglamenta que la Cédula Digital pueda visualizarse en 'Mi Argentina' por terceros?", options: ["Disposición N° 656/25", "Disposición N° 566/25", "Disposición N° 665/25", "Disposición N° 556/25"], ans: 1, exp: "La Disposición N° 566/25 reglamenta esta modalidad para terceros." },
        { id: "q18", unit: "u3", q: "¿Qué Disposición del RENAPER hace obligatorio al DNI para acreditar identidad?", options: ["Disposición N° 241/2023", "Disposición N° 412/2023", "Disposición N° 214/2023", "Disposición N° 421/2023"], ans: 2, exp: "La Disposición N° 214/2023 establece que el DNI no puede ser suplido." },
        { id: "q19", unit: "u3", q: "¿Cuál de estas leyes sancionó el 'nuevo Símbolo de Accesibilidad Universal'?", options: ["Ley N° 6.588", "Ley N° 6.885", "Ley N° 6.858", "Ley N° 6.558"], ans: 1, exp: "La Ley N° 6.885 adoptó el nuevo Símbolo de Accesibilidad Universal." },
        { id: "q20", unit: "u1", q: "¿Según el Artículo 511 de qué Ley se detallan las Funciones Principales del Cuerpo de Agentes?", options: ["Ley N° 5.868", "Ley N° 5.688", "Ley N° 5.886", "Ley N° 5.668"], ans: 1, exp: "El Artículo 511 pertenece a la Ley N° 5.688." },
        { id: "q21", unit: "u3", q: "¿En qué artículo de la Ley N° 12 se especifican los requisitos del Acta Contravencional?", options: ["Artículo 14", "Artículo 24", "Artículo 40", "Artículo 04"], ans: 2, exp: "El Artículo 40 de la Ley N° 12 detalla los requisitos formales del acta." },
        { id: "q22", unit: "u3", q: "¿Qué artículo del Código Contravencional (Ley N° 1.472) pena el conducir con mayor cantidad de alcohol en sangre de la permitida?", options: ["Artículo 113", "Artículo 131", "Artículo 311", "Artículo 111"], ans: 1, exp: "El Artículo 131 sanciona la conducción con niveles prohibidos de alcohol." }
    ],
    flashcardPool: [
        { id: "f1", unit: "u1", front: "¿Cuál es el rol principal del Cuerpo de Agentes según la Ley 5.688?", back: "Ser la autoridad de fiscalización y comprobación de infracciones (Art. 511)." },
        { id: "f2", unit: "u2", front: "¿Cuál es el límite de alcohol para Conductores Principiantes?", back: "0.0 gramos por litro durante los primeros 2 años." },
        { id: "f3", unit: "u2", front: "¿Cuál es el límite de alcohol para motociclistas?", back: "0.2 gramos por litro." },
        { id: "f4", unit: "u2", front: "¿Qué velocidad máxima rige para Principiantes los primeros 6 meses?", back: "No pueden circular por arterias con máxima superior a 70 km/h." },
        { id: "f5", unit: "u2", front: "¿Qué significa retener preventivamente la licencia con boleta de citación 'Z'?", back: "Se utiliza en casos graves como alcoholemia positiva y la licencia queda a disposición del controlador." },
        { id: "f6", unit: "u3", front: "¿Qué se requiere ineludiblemente en un Acta Contravencional (Art 40 Ley 12)?", back: "Lugar, fecha y hora del hecho; descripción; datos del contraventor, testigos y firma del agente." },
        { id: "f7", unit: "u3", front: "¿Qué se debe anotar en observaciones ante una persona trans que su DNI no coincide con su género autopercibido?", back: "Se debe dejar constancia: 'S/ Ley de Identidad de Género 26.743 art. 12'." },
        { id: "f8", unit: "u3", front: "¿Cuáles son las 3 leyes pilares en materia contravencional y faltas en CABA?", back: "Ley 1.472 (Código Contravencional), Ley 12 (Procedimiento Contravencional), Ley 451 (Régimen de Faltas)." },
        { id: "f9", unit: "u2", front: "¿Cuál es el orden de prioridad normativo en la vía pública?", back: "1° Autoridad de control, 2° Señales transitorias, 3° Semáforos, 4° Señalización horizontal/vertical, 5° Normas legales." },
        { id: "f10", unit: "u2", front: "¿A qué clase de vehículos corresponde la Licencia D?", back: "Transporte de pasajeros, vehículos de emergencia, seguridad y escolares." }
    ],
    identifyPool: []
};
