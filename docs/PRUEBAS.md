# Pruebas manuales de TrazoDesk

Prueba con servidor HTTP local, desde un navegador actualizado. Reiniciar desde barra lateral para disponer del estado semilla.

1. Cambia entre Freelancer, Agencia y Cliente. Confirma que Equipo solo aparece en Agencia y que Cliente ofrece selector de empresa.
2. Cliente Nube Café: abre Identidad de marca; en Revisiones selecciona V2, haz clic en la imagen, agrega anotación y solicita cambios. Comprueba que aparece el comentario y que el proyecto cambia a «Cambios solicitados».
3. Freelancer: abre el proyecto anterior, sube un PNG/JPG/PDF; verifica V3 y que el estado vuelve a «En revisión». Repite con Cliente Nube Café, aprueba y comprueba que una segunda aprobación ya no está habilitada.
4. Freelancer: desde Entregas registra la entrega aprobada. Cliente Nube Café: descarga el archivo aprobado.
5. Cliente Editorial Ámbar: abre «Nueva portada» → Acuerdo → acepta. Freelancer: carga su primera versión. Cliente Editorial Ámbar: revisa y aprueba. Freelancer: entrega. Verifica que no se puede cargar un archivo mientras el acuerdo sigue pendiente.
6. Agencia → Equipo: reasigna cualquier proyecto. Cambia a Freelancer y verifica el responsable actualizado. No deben existir botones de reasignación en la vista Cliente.
7. Solicitudes: crea una solicitud desde Cliente y conviértela a proyecto desde Freelancer. Debe iniciar con acuerdo pendiente, no directamente aprobado.
8. Extras: Freelancer propone una ampliación; Cliente del proyecto acepta/rechaza. Verifica que el importe aparece en Presupuestos y no existe ningún cobro real.
9. Cierra la pestaña y vuelve a abrirla. Los metadatos y archivos cargados deberían conservarse en el mismo navegador si no está en modo privado y el almacenamiento está permitido.
10. Verifica vista móvil estrecha, menú, diálogos, filtros, enlaces, ausencia de errores JavaScript y reinicio de demo.

## Limitaciones conocidas

- Para PDF se soporta vista previa embebida y comentario general; no hay anotación en coordenadas de páginas PDF.
- Para JPG/PNG las coordenadas de anotación son relativas a la zona de previsualización; todavía no se implementan coordenadas intrínsecas multi-resolución ni pinzado táctil avanzado.
- No existen cuentas reales, colaboración remota ni sincronización entre navegadores.
- La exportación JSON contiene metadatos, no los blobs de archivos de IndexedDB.
- Esta versión no incluye pruebas E2E automatizadas en GitHub Actions; sus tests de dominio sí se ejecutan por CI.
