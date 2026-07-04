# Reglas de Desarrollo y Arquitectura del Proyecto

Este documento define las reglas estrictas de flujo de trabajo y arquitectura para este proyecto. El asistente de IA DEBE leer y aplicar estas directrices antes de ejecutar cualquier cambio, refactorización o nueva funcionalidad.

## 1. Flujo de Trabajo y Control de Versiones
- **Repositorio:** GitHub (Privado).
- **Hosting:** Vercel.
- **Autorización Estricta de Push:** LA DECISIÓN FINAL ES DEL USUARIO. El asistente de IA tiene terminantemente prohibido ejecutar un `git push` de manera autónoma. Siempre debe preparar los cambios, informarlos y solicitar confirmación explícita del usuario antes de pushear al repositorio.
- **Regla de Oro:** ESTRICTAMENTE PROHIBIDO hacer push, commits directos o modificaciones sobre la rama `main`. La rama `main` es sagrada y solo debe contener código estable.
- **Ramas (Branches):** Toda nueva funcionalidad, arreglo de bug o refactorización debe realizarse en una rama nueva (ej. `feature/nombre-de-la-funcion`, `fix/nombre-del-error`, `refactor/componente`).
- **Testing y Deployments:** Las pruebas de integración se validan a través de los Preview Deployments de Vercel generados automáticamente al abrir un Pull Request hacia `main`.

## 2. Refactorización y Arquitectura (Desarme del Index)
Actualmente existe un archivo `index` sobrecargado. El objetivo principal a lo largo de las próximas iteraciones es desarmarlo aplicando el principio de responsabilidad única. No se debe agregar nueva lógica extensa a este archivo.

### Convenciones de Estructura de Carpetas:
*   **/components:** Mover aquí todos los elementos visuales de la interfaz de usuario (UI). Cada botón, formulario, modal o sección debe ser un componente aislado y exportable.
*   **/services (o /lib):** Mover aquí toda la lógica de comunicación con APIs o servicios externos. Crear funciones puras para que la UI solo tenga que llamarlas sin conocer la lógica subyacente.
*   **/utils:** Mover aquí la lógica de negocio, validaciones complejas, formateo de fechas o cálculos matemáticos.
*   **Rol del Index:** El archivo `index` y las vistas principales deben actuar únicamente como orquestadores que importan componentes de UI, consumen servicios y manejan el estado general.