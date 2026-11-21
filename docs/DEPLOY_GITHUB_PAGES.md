# Publicación de TrazoDesk Demo en GitHub Pages

> **Estado**: el repositorio existe; la publicación depende de transferir los archivos y habilitar Pages. Nunca confundir una URL propuesta con un despliegue confirmado.

## Repositorio previsto

- Propietario: `axenoban`
- Repositorio compartido por demo y producto futuro: `axenoban/Trazodesk`
- Visibilidad: **public** (requisito para GitHub Pages en plan gratuito).
- Rama de publicación: `main`.
- URL esperada tras activar Pages y finalizar el workflow: `https://axenoban.github.io/Trazodesk/`.

## Primera activación

1. Usar el repositorio público existente <https://github.com/axenoban/Trazodesk>, preservando su historial inicial; importar la demo como nuevo commit descendiente de `main`, sin force push.
2. Desde la carpeta raíz de la demo, con Git y autorización válida a la cuenta `axenoban`:

   ```bash
   git clone https://github.com/axenoban/Trazodesk.git
   cd Trazodesk
   # Copiar el contenido de este paquete a este repositorio, preservando .git
   npm test
   git add -A && git commit -m "feat: add TrazoDesk demo" && git push origin main
   ```

   Si `origin` ya está configurado correctamente, omitir `git remote add origin`.
3. En <https://github.com/axenoban/Trazodesk/settings/pages>, establecer **Build and deployment → Source: GitHub Actions**.
4. En **Actions**, si el primer flujo `Publicar TrazoDesk Demo en GitHub Pages` hubiera fallado antes de configurar Pages, pulsar **Re-run jobs**. También se puede iniciar desde **Run workflow** sobre `main`.
5. Solo después de que el trabajo **deploy** termine en verde, abrir `https://axenoban.github.io/Trazodesk/` y comprobar el estado HTTP, los recursos y las interacciones.

La activación de Pages requiere permisos de administración de repositorio. `actions/configure-pages@v5` **no puede** activar Pages con el `GITHUB_TOKEN` ordinario (`enablement: true` exige un token con permisos adicionales); por eso la configuración inicial en Settings es necesaria.

## Verificación posterior al despliegue

- Cargar pantalla inicial en móvil y escritorio; confirmar que el CSS, logotipo y las imágenes se ven.
- Cambiar entre Freelancer, Agencia y Cliente.
- Seleccionar Editorial Ámbar y aceptar su acuerdo pendiente.
- Regresar a Freelancer, subir un JPG/PNG ficticio y revisar su versión en Cliente.
- Dejar un comentario y aprobar; registrar una entrega desde Freelancer y descargarla desde Cliente.
- Refrescar y comprobar persistencia local; reiniciar la demo para recuperar las muestras.
- Abrir la consola y descartar errores de `404`, CORS y JavaScript.

## Seguridad y límites

El enlace es **público**, no tiene control de acceso y no contiene datos reales. La perspectiva Cliente es una simulación, no autenticación. `localStorage` e `IndexedDB` guardan datos solo en el navegador de cada visitante. No cargar datos personales, confidenciales ni archivos reales de clientes. La publicación **no significa lanzamiento de SaaS comercial**.

## Rollback / despublicación

Para suspender la demo, en `Settings → Pages` usa **Unpublish site**. El código seguirá existiendo en el repositorio. También puedes revertir un commit de `main`, sin force push ni reescribir historia.
