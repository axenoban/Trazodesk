# Resultados de validación — 21-11-2026

Estado: **candidato de demo**, pendiente de prueba en GitHub Pages y validación del propietario.

## Verificaciones ejecutadas

| Verificación | Resultado |
|---|---|
| `node --check` de los 3 módulos JavaScript | Correcto |
| `node --test` para dominio/permisos | 7/7 aprobados |
| Renderizado de escritorio (1440 px) en Chromium | Correcto, sin excepción JS |
| Renderizado responsive (390 px) en Chromium | Correcto; sin desbordamiento horizontal |
| Cambio de roles y selector de cliente | Correcto en prueba de interfaz |
| Asignación de responsable por agencia | Correcto en prueba de interfaz |
| Aceptación de acuerdo por cliente | Correcto en prueba de interfaz |
| Anotación visual y comentario asociado a versión | Correcto en prueba de interfaz |
| Aprobación de versión y entrega por creativo | Correcto en prueba de interfaz |
| Descarga de muestra | Correcto en prueba de interfaz |
| Subida → cambios → V2 → aprobación → entrega | Correcto en prueba de interfaz con almacenamiento de archivos simulado |
| PDF de ejemplo | Creado y renderizado en dos páginas, revisado visualmente |

## Limitación del entorno de pruebas

El navegador Chromium disponible **bloqueó la navegación HTTP por política del entorno** (`ERR_BLOCKED_BY_ADMINISTRATOR`), incluso hacia el servidor local. Para pruebas visuales y de flujo, el mismo código JavaScript se ejecutó en Chromium **inyectado en la página**, con los módulos concatenados solo durante el test. En el test de carga de archivos se sustituyó la capa de persistencia de archivos por un Map en memoria. Por ello **no se ha probado todavía el sitio desde una URL HTTP real, el funcionamiento real de IndexedDB en ese origen, ni el despliegue GitHub Pages**. Estos son pasos de QA pendientes antes de aprobación.

No se ha conectado ningún backend ni publicado ningún servicio comercial.
