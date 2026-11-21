# TrazoDesk — Demo interactiva

**Estado:** prototipo de demostración estática, no SaaS comercial. Nombre provisional de CreaFlow. Idioma de interfaz: español.

Demo funcional sin dependencias externas, construida con HTML/CSS y módulos ES de JavaScript. Preparada para alojarse en GitHub Pages. **Preparado para la primera publicación; aún no hay URL pública confirmada.**

## Inicio rápido

- En local, desde la carpeta raíz: `python3 -m http.server 8765` y abrir `http://localhost:8765/`.
- Alternativamente: `npm run serve` (requiere Python 3) o usar un servidor estático HTTP. No abrir con `file://`: los módulos y el almacenamiento se comportan distinto.
- Pruebas unitarias: `npm test` (Node.js 22 o compatible).

## Probar las tres perspectivas

1. **Freelancer**: crear un proyecto (nace con acuerdo pendiente), observar solicitudes, cargar archivos y nuevas versiones, atender comentarios, proponer extras y registrar entregas aprobadas.
2. **Agencia**: además de lo anterior, abrir **Equipo** y reasignar responsables de proyectos. No es gestión multiusuario real.
3. **Cliente**: seleccionar una empresa ficticia de la lista superior, ver únicamente los proyectos y solicitudes de ese cliente, aceptar un acuerdo pendiente (ejemplo: Editorial Ámbar), anotar sobre una imagen, solicitar cambios o aprobar una versión, decidir extras y descargar entregas registradas.

Se incluyen proyectos en cinco estados y archivos de muestra. Para probar el flujo íntegro desde cero, crear un proyecto en Freelancer/Agencia, cambiar a Cliente correspondiente, aceptar el acuerdo, regresar a Freelancer/Agencia para subir una versión PNG/JPG/PDF, volver a Cliente para comentar y aprobar, y registrar la entrega desde Freelancer/Agencia.

La perspectiva Cliente es un selector **simulado**. Un botón **Vista de cliente** copia un enlace de *simulación* con parámetros de URL; **no es privado y no protege ningún dato**. Los datos ficticios de la demostración pueden ser inspeccionados por cualquiera que acceda al sitio.

## Funciones incluidas

- Panel contextual y indicadores por perspectiva.
- Solicitudes de servicio, aceptación/rechazo por profesionales y conversión a proyectos.
- Creación de proyectos con alcance, exclusiones, presupuesto referencial, fechas y rondas de revisión incluidas.
- Aceptación del acuerdo por la vista de Cliente (sin contrato digital ni firma legal).
- Versiones de entregables JPG/PNG/PDF (hasta 12 MB) guardados localmente en IndexedDB.
- Previsualización de imágenes y PDF, con comentarios anclados en imágenes y comentarios generales para PDF.
- Resolución de comentarios, aprobación o solicitud de ajustes sobre la última versión, historial de rondas y bloqueo de decisiones duplicadas.
- Registro final de entrega solo después de aprobación y descarga local del archivo aprobado.
- Propuestas de ampliación de alcance aceptadas/rechazadas por Cliente; importes ilustrativos sin pagos.
- Asignación de responsables para la vista Agencia.
- Historial de acciones y exportación de datos JSON; reinicio de la demo.
- Diseño responsive y navegación accesible por teclado en sus controles principales.

## Persistencia y límites

- **localStorage** conserva los datos de la demo (proyectos, comentarios, acuerdos, historial) dentro de un navegador y origen.
- **IndexedDB** conserva temporalmente los archivos cargados; no se suben a servidores externos. Si el navegador elimina los datos, se pierden.
- No hay backend, registro, autenticación, permisos de servidor, mensajería, correos, notificaciones externas, API, base de datos remota, pagos, facturación, enlaces privados ni colaboración entre equipos.
- Los PNG incluidos son artefactos **ficticios**, no proyectos o marcas reales. Las direcciones terminadas en `.invalid` nunca envían correos.
- No cargues información personal, archivos de clientes ni material sensible: la demo es pública si la publicas en Pages.
- GitHub Pages es apropiado para mostrar este prototipo estático, pero sus términos **no permiten hospedar un SaaS comercial**. Para lanzarlo como producto se necesitará otra arquitectura y alojamiento.

## Publicación en GitHub Pages (preparada; pendiente de activación en GitHub)

El proyecto incluye `.github/workflows/pages.yml`, que **valida y despliega automáticamente** el sitio al hacer push a `main`, después de que GitHub Pages haya sido habilitado en el repositorio. El repositorio de trabajo es `axenoban/Trazodesk` y la activación inicial de Pages requiere seleccionar **Settings → Pages → Source: GitHub Actions**. La URL esperada será `https://axenoban.github.io/Trazodesk/`, **solo una vez confirmada la ejecución verde**.

Ver instrucciones completas, verificación y límites en [`docs/DEPLOY_GITHUB_PAGES.md`](docs/DEPLOY_GITHUB_PAGES.md).

> El flujo `ci.yml` ejecuta pruebas por separado. La ejecución de workflows remotos debe verificarse en GitHub Actions tras el commit.

## Arquitectura

```
index.html
assets/                  # Logo y mockups PNG ficticios
src/domain.mjs           # Semillas, invariantes y permisos de interfaz
src/store.mjs            # Persistencia local + IndexedDB
src/app.mjs              # Renderizado, eventos y flujos de demostración
src/styles.css           # Interfaz responsive
.github/workflows/ci.yml # CI de validación
.github/workflows/pages.yml # Publicación tras habilitación inicial de Pages
 tests/domain.test.mjs   # Validación del modelo y permisos
 docs/                   # Alcance y casos de prueba
```

## Trazabilidad

Nombre provisional: **TrazoDesk**. Producto original: **CreaFlow**. Reconstrucción funcional basada en el alcance aprobado; no se ha podido recuperar el código fuente original `creaflow_v2.html`, por lo que **no es una copia byte a byte de la demo v2.0**. No se han hecho cambios a otros repositorios del propietario.

## Ramas y evolución al producto final

- `main`: versión pública y desplegada de la demo (más adelante, producto publicable).
- `dev/trazodesk-core`: línea completa validada cuando se apruebe la primera baseline.
- `feature/*`: nuevas funcionalidades, pruebas y cambios pendientes de aprobación.
- Mantener el despliegue de Pages vinculado a `main`: el código futuro no se publica automáticamente desde ramas de desarrollo.
- Los datos de esta demo son locales y ficticios; no utilizar para clientes reales.

Repositorio canónico: <https://github.com/axenoban/Trazodesk>.
