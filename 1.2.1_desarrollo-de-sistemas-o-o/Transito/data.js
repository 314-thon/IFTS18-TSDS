const studyData = [
  {
    id: "tema-1",
    title: "Conceptos Básicos",
    subtopics: [
      {
        id: "sub-1-1",
        subtitle: "Seguridad Vial",
        content: "De acuerdo a la Organización Panamericana de la Salud, 'la seguridad vial se refiere a las medidas adoptadas para reducir el riesgo de lesiones y muertes causadas por el tránsito'."
      },
      {
        id: "sub-1-2",
        subtitle: "Tránsito",
        content: "El tránsito se refiere al movimiento y flujo de vehículos y personas que circulan por calles, carreteras y otros caminos públicos."
      }
    ]
  },
  {
    id: "tema-2",
    title: "Cuadro de Normativa",
    subtopics: [
      {
        id: "sub-2-1",
        subtitle: "Leyes Principales",
        content: `<ul>
          <li><strong>Ley N° 5.688:</strong> Sistema Integral de Seguridad Pública.</li>
          <li><strong>Ley N° 2.148:</strong> Código de Tránsito y Transporte.</li>
          <li><strong>Ley N° 1.472:</strong> Código Contravencional.</li>
          <li><strong>Ley N° 12:</strong> Procedimiento Contravencional.</li>
          <li><strong>Ley N° 451:</strong> Régimen de Faltas.</li>
          <li><strong>Ley N° 1217:</strong> Procedimiento de Faltas.</li>
          <li><strong>Decreto N° 588/2010:</strong> Reglamentario de la Ley N° 2.148 y sus modificatorios.</li>
        </ul>`
      }
    ]
  },
  {
    id: "tema-3",
    title: "Sistema Integral de Seguridad Pública (Ley 5.688)",
    subtopics: [
      {
        id: "sub-3-1",
        subtitle: "Autoridad y Control",
        content: "El Cuerpo de Agentes de Control de Tránsito y Transporte compone el Sistema Integral de Seguridad Pública de la Ciudad de Buenos Aires (Art. 505) y es la autoridad de control del tránsito y el transporte (Art. 506)."
      },
      {
        id: "sub-3-2",
        subtitle: "Funciones Principales (Art. 511)",
        content: `<ul>
          <li>Ordenar y dirigir el tránsito.</li>
          <li>Ejercer el control del estacionamiento en la vía pública.</li>
          <li>Prevenir y hacer cesar la comisión de faltas y contravenciones.</li>
          <li>Ser autoridad de fiscalización y comprobación de infracciones.</li>
        </ul>`
      },
      {
        id: "sub-3-3",
        subtitle: "Facultades (Art. 512)",
        content: `<ul>
          <li>Labrar actas contravencionales cumpliendo la Ley 12.</li>
          <li>Labrar actas de comprobación de infracciones cumpliendo la Ley 1217.</li>
          <li>Proceder a la detención del vehículo en la vía pública al sólo efecto de confeccionar el acta o requerir documentación.</li>
        </ul>`
      }
    ]
  },
  {
    id: "tema-4",
    title: "Código de Tránsito y Transporte (Ley 2.148)",
    subtopics: [
      {
        id: "sub-4-1",
        subtitle: "Prioridades (Art. 2.3.4)",
        content: "El orden de prioridad normativo que el usuario de la vía pública debe respetar es: 1° Señales u órdenes de la autoridad de control, 2° Señales transitorias, 3° Semáforos, 4° Señal vertical y demarcación horizontal, 5° Normas legales de carácter general."
      },
      {
        id: "sub-4-2",
        subtitle: "Licencias de Conducir (Art. 3.2.2)",
        content: `Las licencias pueden ser:
        <ul class="list-disc pl-5 mt-2">
          <li><strong>Clase A:</strong> Motovehículos (ej. más de 150 cm3).</li>
          <li><strong>Clase B:</strong> Automóviles, casas rodantes, camionetas (hasta 750kg acoplado).</li>
          <li><strong>Clase C:</strong> Camiones sin acoplado.</li>
          <li><strong>Clase D:</strong> Transporte de pasajeros, emergencia, seguridad, escolar.</li>
          <li><strong>Clase E:</strong> Camiones articulados con acoplado.</li>
          <li><strong>Clase F:</strong> Automotores adaptados para discapacidad.</li>
          <li><strong>Clase G:</strong> Tractores y maquinaria agrícola.</li>
        </ul>`
      },
      {
        id: "sub-4-3",
        subtitle: "Conductores Principiantes (Art. 3.2.7)",
        content: "La condición dura 2 años. Durante los primeros 6 meses no pueden circular por arterias con velocidad permitida superior a 70 km/h y deben llevar el distintivo 'P'. La tolerancia de alcohol es 0.0 g/l durante los 2 años."
      },
      {
        id: "sub-4-4",
        subtitle: "Habilitaciones Especiales y Extranjeros",
        content: "Turistas pueden conducir con su licencia extranjera vigente (hasta 3 meses prorrogables). Extranjeros residentes temporarios pueden solicitar habilitación por el plazo de estadía. En caso de cambio de jurisdicción, la licencia caduca a los 90 días si no se denuncia el cambio (Ley 24.449 Art. 18)."
      },
      {
        id: "sub-4-5",
        subtitle: "Requisitos para Circular (Art. 6.1.2)",
        content: "Es indispensable portar: Licencia vigente, DNI, Cédula de identificación del automotor, Comprobante de seguro obligatorio, Certificado de Verificación Técnica vigente y llevar colocadas las placas oficiales."
      },
      {
        id: "sub-4-6",
        subtitle: "Retención Preventiva (Art. 5.6.1)",
        content: "Los vehículos y documentación pueden ser retenidos para inspección. Se impide continuar conduciendo ante alcoholemia, vehículos sin habilitación, o inhabilitados. Se retienen licencias si están vencidas, adulteradas o caducadas por cambio de datos no denunciados."
      }
    ]
  },
  {
    id: "tema-5",
    title: "Régimen Contravencional (Ley 1.472 y Ley 12)",
    subtopics: [
      {
        id: "sub-5-1",
        subtitle: "Contravención y Acta",
        content: "El Código Contravencional (Ley 1.472) sanciona conductas dolosas o culposas que implican daño o peligro. Un acta es un documento público y declaración testimonial; la falsedad ideológica constituye delito. Las personas menores de 18 años son inimputables, salvo en tránsito si tienen edad para obtener licencia."
      },
      {
        id: "sub-5-2",
        subtitle: "Acta Contravencional (Art. 40 Ley 12)",
        content: "Debe contener: lugar, fecha y hora del acta y del hecho; descripción circunstanciada; datos del contraventor, testigos y denunciante; firma de la autoridad."
      },
      {
        id: "sub-5-3",
        subtitle: "Alcoholemia (Art. 131 y Art. 5.4.x Ley 2.148)",
        content: "Está prohibido conducir con más de 0.5 g/l en sangre (0.2 g/l para motos, 0.0 g/l para profesionales/principiantes). Si el resultado es positivo o hay negativa, se prohíbe continuar, se retiene licencia (con boleta de citación 'Z'), se labra Acta Contravencional y se dispone remoción del vehículo."
      },
      {
        id: "sub-5-4",
        subtitle: "Ley de Identidad de Género (Ley 26.743)",
        content: "Deberá respetarse la identidad de género adoptada por las personas. La autopercepción prima siempre y se debe respetar incluso cuando no coincide con el DNI. Se debe dejar constancia en observaciones 'S/ Ley de Identidad de Género 26.743 art. 12'."
      }
    ]
  }
];

const questionPool = [
  {
    id: "q1",
    question: "¿Qué Ley instituye el Código de Tránsito y Transporte de la Ciudad Autónoma de Buenos Aires?",
    options: ["Ley N° 2.184", "Ley N° 2.418", "Ley N° 2.148", "Ley N° 2.814"],
    correctAnswer: "Ley N° 2.148",
    explanation: "La Ley N° 2.148 aprueba el Código de Tránsito y Transporte de CABA."
  },
  {
    id: "q2",
    question: "¿Qué Ley establece el Sistema Integral de Seguridad Pública de la CABA?",
    options: ["Ley N° 5.868", "Ley N° 5.688", "Ley N° 5.886", "Ley N° 5.668"],
    correctAnswer: "Ley N° 5.688",
    explanation: "El Sistema Integral de Seguridad Pública está establecido por la Ley N° 5.688."
  },
  {
    id: "q3",
    question: "¿Qué Ley Nacional de Tránsito y Seguridad Vial es referenciada frecuentemente para normativas generales en todo el país?",
    options: ["Ley N° 24.494", "Ley N° 24.449", "Ley N° 24.944", "Ley N° 24.444"],
    correctAnswer: "Ley N° 24.449",
    explanation: "La Ley Nacional de Tránsito es la Ley N° 24.449."
  },
  {
    id: "q4",
    question: "¿Cuál es el número de la Ley que aprueba el Código Contravencional de la CABA?",
    options: ["Ley N° 1.427", "Ley N° 1.742", "Ley N° 1.247", "Ley N° 1.472"],
    correctAnswer: "Ley N° 1.472",
    explanation: "El Código Contravencional de la CABA se aprobó mediante la Ley N° 1.472."
  },
  {
    id: "q5",
    question: "¿Qué Ley establece el Procedimiento Contravencional en CABA?",
    options: ["Ley N° 21", "Ley N° 12", "Ley N° 121", "Ley N° 112"],
    correctAnswer: "Ley N° 12",
    explanation: "El Procedimiento Contravencional de CABA está reglamentado por la Ley N° 12."
  },
  {
    id: "q6",
    question: "¿Qué Ley regula el Régimen de Faltas en CABA?",
    options: ["Ley N° 541", "Ley N° 415", "Ley N° 451", "Ley N° 145"],
    correctAnswer: "Ley N° 451",
    explanation: "El Régimen de Faltas de la CABA está dispuesto por la Ley N° 451."
  },
  {
    id: "q7",
    question: "¿Qué Ley dicta el Procedimiento de Faltas en la Ciudad de Buenos Aires?",
    options: ["Ley N° 1271", "Ley N° 1712", "Ley N° 1217", "Ley N° 2171"],
    correctAnswer: "Ley N° 1217",
    explanation: "El Procedimiento de Faltas se rige por la Ley N° 1217."
  },
  {
    id: "q8",
    question: "¿Qué Decreto es el Reglamentario de la Ley N° 2.148 (Código de Tránsito y Transporte)?",
    options: ["Decreto N° 588/2010", "Decreto N° 855/2010", "Decreto N° 580/2018", "Decreto N° 885/2001"],
    correctAnswer: "Decreto N° 588/2010",
    explanation: "El Decreto Reglamentario de la Ley 2.148 es el Decreto N° 588/2010."
  },
  {
    id: "q9",
    question: "¿Qué Ley Nacional regula la Identidad de Género y debe ser respetada en los controles?",
    options: ["Ley N° 26.473", "Ley N° 26.347", "Ley N° 26.743", "Ley N° 26.734"],
    correctAnswer: "Ley N° 26.743",
    explanation: "La Ley Nacional de Identidad de Género es la Ley N° 26.743."
  },
  {
    id: "q10",
    question: "¿Qué Ley Nacional trata sobre Migraciones?",
    options: ["Ley N° 25.781", "Ley N° 25.817", "Ley N° 25.871", "Ley N° 25.178"],
    correctAnswer: "Ley N° 25.871",
    explanation: "La Ley Nacional de Migraciones es la Ley N° 25.871."
  },
  {
    id: "q11",
    question: "¿Bajo qué Ley se dictamina el Reconocimiento y Protección al Refugiado?",
    options: ["Ley N° 26.156", "Ley N° 26.516", "Ley N° 26.165", "Ley N° 26.615"],
    correctAnswer: "Ley N° 26.165",
    explanation: "La Ley de Reconocimiento y Protección al Refugiado es la Ley N° 26.165."
  },
  {
    id: "q12",
    question: "¿Qué Decreto modificó la Reglamentación General de la Ley N° 24.449 sobre la Nueva Licencia de Conducir Digital?",
    options: ["Decreto N° 169/2025", "Decreto N° 196/2025", "Decreto N° 195/2026", "Decreto N° 165/2029"],
    correctAnswer: "Decreto N° 196/2025",
    explanation: "El Decreto N° 196/2025 otorgó validez legal en formato digital a la Licencia Nacional de Conducir."
  },
  {
    id: "q13",
    question: "¿Qué Ley aplica sobre el régimen de vehículos abandonados en la vía pública?",
    options: ["Ley N° 324", "Ley N° 432", "Ley N° 342", "Ley N° 243"],
    correctAnswer: "Ley N° 342",
    explanation: "La Ley N° 342 y sus modificatorias regulan el régimen para vehículos abandonados."
  },
  {
    id: "q14",
    question: "¿Qué Disposición de la DNRPA creó el Registro Único Virtual (RUV) para placas de dominio?",
    options: ["Disposición N° 47/2025", "Disposición N° 74/2052", "Disposición N° 74/2025", "Disposición N° 47/2052"],
    correctAnswer: "Disposición N° 74/2025",
    explanation: "La Disposición N° 74/2025 de la DNRPA creó el Registro Único Virtual (RUV)."
  },
  {
    id: "q15",
    question: "¿Qué Disposición de la ANSV aprobó el formato digital complementario en 'MiArgentina' inicialmente?",
    options: ["Disposición N° 93/2019", "Disposición N° 39/2019", "Disposición N° 39/2091", "Disposición N° 93/2091"],
    correctAnswer: "Disposición N° 39/2019",
    explanation: "La Disposición N° 39/2019 aprobó el formato digital en MiArgentina."
  },
  {
    id: "q16",
    question: "¿Qué Disposición de la DNRPA determina que las cédulas de identificación automotor NO caducan (salvo disposición en contrario)?",
    options: ["Disposición N° 92/24", "Disposición N° 29/24", "Disposición N° 29/42", "Disposición N° 92/42"],
    correctAnswer: "Disposición N° 29/24",
    explanation: "La Disposición N° 29/24 de la DNRPA establece la no caducidad de las cédulas (ex 'cédula verde')."
  },
  {
    id: "q17",
    question: "¿Bajo qué Disposición se reglamenta que la Cédula de Identificación Digital pueda visualizarse en 'Mi Argentina' por terceros?",
    options: ["Disposición N° 656/25", "Disposición N° 566/25", "Disposición N° 665/25", "Disposición N° 556/25"],
    correctAnswer: "Disposición N° 566/25",
    explanation: "La Disposición N° 566/25 reglamenta esta modalidad para titulares registrales."
  },
  {
    id: "q18",
    question: "¿Qué Disposición del RENAPER hace obligatorio al DNI para acreditar identidad en toda circunstancia?",
    options: ["Disposición N° 241/2023", "Disposición N° 412/2023", "Disposición N° 214/2023", "Disposición N° 421/2023"],
    correctAnswer: "Disposición N° 214/2023",
    explanation: "La Disposición N° 214/2023 establece que el DNI no puede ser suplido por otro documento."
  },
  {
    id: "q19",
    question: "¿Cuál de estas leyes sancionó en CABA el 'nuevo Símbolo de Accesibilidad Universal'?",
    options: ["Ley N° 6.588", "Ley N° 6.885", "Ley N° 6.858", "Ley N° 6.558"],
    correctAnswer: "Ley N° 6.885",
    explanation: "La Ley N° 6.885 adoptó el nuevo Símbolo de Accesibilidad Universal en CABA."
  },
  {
    id: "q20",
    question: "¿Según el Artículo 511 de qué Ley se detallan las Funciones Principales del Cuerpo de Agentes de Control?",
    options: ["Ley N° 5.868", "Ley N° 5.688", "Ley N° 5.886", "Ley N° 5.668"],
    correctAnswer: "Ley N° 5.688",
    explanation: "El Artículo 511 pertenece a la Ley N° 5.688 (Sistema Integral de Seguridad Pública)."
  },
  {
    id: "q21",
    question: "En caso de conducir bajo los efectos del alcohol, el procedimiento se detalla fundamentalmente en los Artículos 5.4.x de qué Código/Ley?",
    options: ["Ley N° 11.179", "Ley N° 1.472", "Ley N° 2.148", "Ley N° 12"],
    correctAnswer: "Ley N° 2.148",
    explanation: "Los procedimientos específicos y obligaciones (Art 5.4.1 a 5.4.9) están en el Código de Tránsito (Ley 2.148)."
  },
  {
    id: "q22",
    question: "La retención preventiva de licencias o vehículos está dispuesta en el Art. 5.6.1 de qué Ley en CABA?",
    options: ["Ley N° 2.184", "Ley N° 2.148", "Ley N° 2.418", "Ley N° 2.814"],
    correctAnswer: "Ley N° 2.148",
    explanation: "El Art. 5.6.1 pertenece al Código de Tránsito y Transporte (Ley 2.148)."
  },
  {
    id: "q23",
    question: "¿En qué artículo de la Ley N° 12 (Procedimiento Contravencional) se especifican los requisitos del Acta Contravencional?",
    options: ["Artículo 14", "Artículo 24", "Artículo 40", "Artículo 04"],
    correctAnswer: "Artículo 40",
    explanation: "El Artículo 40 de la Ley N° 12 detalla los requisitos formales del acta."
  },
  {
    id: "q24",
    question: "¿Qué artículo del Código Contravencional (Ley N° 1.472) pena el conducir con mayor cantidad de alcohol en sangre de la permitida?",
    options: ["Artículo 113", "Artículo 131", "Artículo 311", "Artículo 111"],
    correctAnswer: "Artículo 131",
    explanation: "El Artículo 131 sanciona la conducción con más de 1.0 g/l de alcohol (o los límites que apliquen)."
  }
];

export { studyData, questionPool };
