

1. Descripción del problema
   Un centro de estética atendido por dos profesionales recibe a sus clientes mediante turnos
   programados para diversos tratamientos. Actualmente, la gestión de la agenda y el registro de la
   seña obligatoria que se cobra al sacar un turno se realizan de forma manual en papel. Esto genera
   constantes superposiciones de horarios, errores de asignación y dificulta el control administrativo.
   Además, la información de los clientes, su historial de tratamientos, los saldos pendientes y los
   registros de pagos totales se encuentran dispersos en distintos cuadernos, complicando el
   seguimiento y el control de caja. A esto se suma un alto índice de ausentismo, ya que no existe un
   registro ordenado que permita gestionar los recordatorios de las citas próximas de manera
   eficiente.
   3. Objetivo del sistema
   El objetivo principal del sistema es centralizar la gestión de clientes, profesionales y tratamientos,
   optimizando la organización de la agenda de turnos para evitar superposiciones y demoras.
   Asimismo, el sistema busca mejorar el control de caja mediante el registro integrado de los pagos
   totales y las señas asociadas a cada reserva, brindando además herramientas para reducir el
   ausentismo al facilitar el seguimiento y los recordatorios de citas.
   4. Alcance del sistema
   Dentro del sistema
   ● Registrar, modificar y consultar datos de clientes.
   ● Registrar y administrar a las profesionales (esteticistas).
   ● Registrar y gestionar el catálogo de tratamientos ofrecidos.
   ● Consultar disponibilidad de horarios por profesional y fecha.
   ● Reservar, reprogramar y cancelar turnos, permitiendo registrar el cobro de la seña de reserva
   y controlando el plazo de 48hs de anticipación.
   ● Bloquear horarios en la agenda de los profesionales.
   ● Registrar los pagos restantes asociados a los turnos concretados.
   ● Consultar el historial de tratamientos de un cliente.
   ● Generar un listado de turnos diarios para facilitar los recordatorios.
   Fuera del sistema
   ● Facturación electrónica con integración real a la AFIP.
   ● Procesamiento de cobros a través de pasarelas de pago online.
   ● Envío automatizado de mensajes de confirmación por WhatsApp.
   ● Liquidación de sueldos o comisiones de los profesionales.
   ● Control de stock de insumos y cremas del centro de estética.
   5. Actores identificados
   ● Recepcionista: Encargado/a de la atención al cliente, registra a los clientes, gestiona la
   agenda (reservas, cancelaciones) y asienta los pagos (señas y saldos restantes).
   ● Profesional (Esteticista): Consulta su agenda diaria o semanal de turnos, bloquea horarios
   para trámites personales y registra en el sistema que la atención o el tratamiento fue
   realizado.
   ● Administrador: Encargado de la configuración general, gestiona el catálogo de tratamientos
   (precios y duración), los perfiles de las profesionales y tiene acceso a reportes generales.
   6. Requerimientos funcionales
   ● RF01. El sistema debe permitir registrar, modificar y consultar los datos personales de un
   cliente.
   ● RF02. El sistema debe permitir registrar y administrar a las profesionales (esteticistas) del
   centro.
   ● RF03. El sistema debe permitir gestionar (crear, modificar, eliminar) un catálogo de
   tratamientos estéticos con su respectiva duración y costo.
   ● RF04. El sistema debe permitir consultar la disponibilidad de turnos filtrando por profesional y
   fecha.
   ● RF05. El sistema debe permitir reservar un turno para un cliente, asociándolo a un
   tratamiento, una profesional y registrando el monto abonado en concepto de seña.
   ● RF06. El sistema debe permitir cancelar o reprogramar un turno existente, controlando que
   se realice con al menos 48hs de anticipación para no perder la seña.
   ● RF07. El sistema debe permitir registrar el pago del saldo restante una vez concretada la
   atención del turno.
   ● RF08. El sistema debe permitir consultar el historial de tratamientos realizados a un cliente
   específico.
   ● RF09. El sistema debe permitir a la profesional bloquear rangos horarios específicos en su
   agenda para trámites personales, impidiendo la asignación de turnos en esos bloques.
   7. Requerimientos no funcionales básicos
   ● RNF01. El sistema debe proteger el acceso a la información mediante autenticación con
   usuario y contraseña para cada actor.
   ● RNF02. El sistema debe contar con una interfaz gráfica clara y rápida para facilitar la carga
   ágil de turnos y pagos por parte de la recepcionista.
   ● RNF03. El sistema debe evitar la reserva de dos turnos en el mismo horario para la misma
   profesional, bloqueando superposiciones.
   8. Historias de usuario
   ● HU01. Como recepcionista, quiero registrar los datos de un nuevo cliente, para poder
   asignarle turnos y llevar su historial.
   ● HU02. Como recepcionista, quiero consultar la disponibilidad de la agenda, para ofrecerle
   opciones de horarios al cliente.
   ● HU03. Como recepcionista, quiero registrar la reserva de un turno junto con el pago de su
   seña, para asegurar la cita y mantener el control de caja.
   ● HU04. Como profesional, quiero consultar mi agenda (diaria o semanal) y bloquear horarios
   específicos, para organizar mis tiempos y evitar la asignación de turnos durante mis trámites
   personales.
   ● HU05. Como profesional, quiero registrar que una atención fue completada, para mantener
   actualizado el historial del cliente.
   ● HU06. Como administrador, quiero gestionar los tratamientos y sus precios, para mantener la
   oferta del centro unificada y actualizada.
   9. Casos de uso
   ● CU01. Administrar Cliente:
   Actor principal: Recepcionista.
   Descripción: Permite dar de alta, modificar y buscar los datos personales de los clientes.
   ● CU02. Administrar Tratamientos:
   Actor principal: Administrador.
   Descripción: Permite gestionar el catálogo de servicios estéticos, definiendo sus costos y
   duraciones.
   ● CU03. Consultar Disponibilidad:
   Actor principal: Recepcionista.
   Descripción: Permite visualizar los horarios libres de una profesional en una fecha
   determinada.
   ● CU04. Reservar Turno:
   Actor principal: Recepcionista.
   Descripción: Permite asignar un turno a un cliente con una profesional, exigiendo el registro
   de la seña.
   ● CU05. Registrar Pago de Saldo:
   Actor principal: Recepcionista.
   Descripción: Permite asentar el cobro del monto restante del tratamiento una vez finalizado el
   turno.
   ● CU06. Gestionar Agenda de Profesional:
   Actor principal: Profesional.
   Descripción: Permite a la esteticista visualizar los turnos asignados de forma diaria o
   semanal, y reservar bloques horarios para trámites personales, impidiendo la asignación de
   turnos.
   10. Diagrama UML de casos de uso
   ![](C:/Users/avila/AppData/Roaming/marktext/images/2026-06-27-03-25-57-image.png)
   
   11. Ficha completa de un caso de uso principal
   Nombre del caso de uso: CU04. Reservar Turno
   Actor principal: Recepcionista
   Actor secundario: Cliente (indirecto)
   Objetivo: Registrar un turno para un cliente asociado a un tratamiento y a una profesional, dejando
   constancia del pago de la seña obligatoria para asegurar la reserva.
   Precondiciones:
   ● La recepcionista inició sesión en el sistema.
   ● Existen profesionales (esteticistas) registradas en el sistema.
   ● El catálogo cuenta con al menos un tratamiento con su precio definido.
   Flujo principal:

2. La recepcionista ingresa a la sección de reservas de turnos.

3. El sistema solicita ingresar los datos de búsqueda del cliente (DNI o Nombre).

4. La recepcionista busca y selecciona al cliente.

5. El sistema muestra la ficha del cliente validado.

6. La recepcionista selecciona el tratamiento deseado.

7. El sistema solicita seleccionar a la profesional encargada.

8. La recepcionista selecciona a una de las dos profesionales.

9. El sistema muestra el calendario con las fechas y horarios disponibles para esa profesional
   (omitiendo bloques ocupados por otros turnos o trámites personales de la profesional).

10. La recepcionista selecciona una fecha y horario.

11. El sistema solicita registrar el pago de la seña obligatoria correspondiente al tratamiento
    elegido.

12. La recepcionista ingresa el monto abonado y el método de pago de la seña.

13. El sistema registra el pago, confirma el turno y bloquea ese horario en la agenda de la
    profesional.

14. El sistema muestra un mensaje de reserva exitosa con los detalles del turno.
    Flujo alternativo A: Cliente no registrado

15. En el paso 3 del flujo principal, el sistema informa que no existe un cliente con los datos
    ingresados.

16. La recepcionista selecciona la opción "Registrar nuevo cliente".

17. El sistema solicita los datos básicos (Nombre, Apellido, DNI, Teléfono).

18. La recepcionista ingresa los datos y guarda.

19. El sistema confirma el registro del nuevo cliente.

20. El flujo retorna al paso 5 del flujo principal.
    Flujo alternativo B: No hay disponibilidad de horarios

21. En el paso 8 del flujo principal, el sistema informa que la profesional seleccionada no tiene
    horarios disponibles en la fecha requerida.

22. La recepcionista selecciona una nueva fecha o cambia la selección a la otra profesional
    disponible.

23. El sistema actualiza el calendario y vuelve a mostrar horarios (Retorna al paso 8 del flujo
    principal).
    Flujo alternativo C: Pago de seña no concretado (Excepción)

24. En el paso 11 del flujo principal, el cliente informa que no puede abonar la seña en ese
    momento.

25. La recepcionista cancela la operación de cobro.

26. El sistema advierte que el turno no puede ser reservado sin el registro de la seña
    correspondiente.

27. El caso de uso finaliza (se aborta) sin registrar el turno.
    Postcondición:
    El turno queda guardado en la agenda, reduciendo la disponibilidad de la profesional seleccionada
    en ese horario, y el pago de la seña queda asociado a la cuenta del cliente para ser descontado del
    saldo final del tratamiento.

28. Diagrama de clases
    El diagrama de clases modela la estructura estática del sistema. A continuación se detallan las 6
    clases principales elegidas con sus atributos y operaciones más representativas:
    
    
    ![](C:/Users/avila/AppData/Roaming/marktext/images/2026-06-27-03-24-52-image.png)

29. Justificación del modelo de clases
    Para armar este modelo, decidí ubicar a la clase Turno como el eje central de toda la aplicación, ya
    que es el elemento que conecta las distintas partes de la operación diaria del centro. A partir de ahí,
    estructuré las relaciones siguiendo la lógica real del negocio y cuidando la coherencia del sistema:
    ● Asociaciones con Cliente, Profesional y Tratamiento: Conecté estas tres clases
    directamente con Turno mediante asociaciones simples. La lógica de las multiplicidades (1
    a 0..*) responde a que un turno específico pertenece sí o sí a un único cliente, lo atiende
    una sola profesional y corresponde a un tratamiento en particular. Por el otro lado, definí el
    extremo opuesto como 0..* porque un cliente nuevo puede arrancar sin turnos asignados
    (0) pero con el tiempo acumular muchos en su historial (*), lo mismo que aplica para la
    rotación de la agenda de las esteticistas y los servicios del catálogo.
    ● La relación Turno - Pago (Composición): Acá elegí usar una relación de composición
    porque un pago en este contexto no tiene sentido de existir de forma aislada si no está
    atado a una cita concreta. Además, fijé la multiplicidad estrictamente entre (1..2) para
    obligar al sistema a cumplir la regla de negocio: el turno nace sí o sí con un pago registrado
    (la seña obligatoria, cumpliendo el mínimo de 1) y, una vez realizada la atención, se le suma
    el segundo pago correspondiente al saldo restante (llegando al máximo de 2).
    ● Bloqueos de agenda de las Profesionales (Composición): Diseñé otra composición
    entre Profesional y BloqueoHorario (1 a 0..*). El motivo de esta decisión es que los
    bloques de tiempo que una esteticista reserva para sus trámites personales le pertenecen
    exclusivamente a ella y mueren con ella. Si en algún momento se da de baja a una
    profesional del sistema, no tiene ningún sentido operativo conservar esos bloqueos flotando
    en la base de datos, por lo que su ciclo de vida depende totalmente de la clase mayor.

30. Diagrama de secuencia
    ![](C:/Users/avila/AppData/Roaming/marktext/images/2026-06-27-03-26-19-image.png)

31. Diagrama de actividad
    
    
    ![](C:/Users/avila/AppData/Roaming/marktext/images/2026-06-27-03-26-46-image.png)

32. Conclusión del trabajo
    Al desarrollar este trabajo práctico, me di cuenta de lo importante que es definir bien el alcance del
    sistema antes de empezar a armar cualquier diagrama. Identificar correctamente a los actores y sus
    necesidades con las historias de usuario me ayudó a plantear casos de uso mucho más realistas y
    apegados a los problemas del local, como el manejo de las señas obligatorias o los bloqueos en la
    agenda.
    Por otro lado, hacer el diagrama de clases me sirvió para entender desde un lado más técnico
    cómo se cruzan los datos. Por ejemplo, me quedó muy claro por qué la composición entre un turno
    y su pago es una regla estricta y no pueden existir por separado.
    A futuro, este diseño base podría crecer sin problemas para sumar módulos como la facturación
    electrónica o la automatización de recordatorios por WhatsApp. Pero para esta primera etapa, creo
    que el modelo actual cumple perfecto con el objetivo principal, que es terminar con las
    superposiciones de horarios y organizar el día a día del centro de estética.


