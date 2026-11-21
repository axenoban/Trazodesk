# Estrategia de ramas — TrazoDesk

- `main`: versiones publicables. Para la fase de prueba contiene la demo aprobada para publicación; GitHub Pages despliega únicamente esta rama.
- `dev/trazodesk-core`: última baseline completa validada del producto; crearla tras aprobar la demo o una fase funcional.
- `feature/*`: trabajo no validado. Integración a dev tras revisión y tests; publicación en main solo cuando se apruebe un hito.

No usar force push, no reescribir historia, preferir avance fast-forward cuando sea posible y validar GitHub Actions antes de publicar.

La demo no dispone de cuentas ni backend; cualquier función multiusuario futura requerirá arquitectura y controles de seguridad diferentes.
