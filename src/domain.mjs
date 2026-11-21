/** TrazoDesk demo domain model. No backend, payments, private links or authentication. */
export const STORAGE_KEY = 'trazodesk-demo-v1';
export const ROLES = {
  freelancer: { label: 'Freelancer', subtitle: 'Espacio del creativo' },
  agency: { label: 'Agencia', subtitle: 'Gestión del equipo' },
  client: { label: 'Cliente', subtitle: 'Portal de revisión' },
};
export const STATUS = {
  agreement: {label:'Pendiente de acuerdo', tone:'amber'},
  active: {label:'En producción',tone:'blue'},
  in_review: {label:'En revisión',tone:'purple'},
  changes_requested: {label:'Cambios solicitados',tone:'orange'},
  approved: {label:'Aprobado',tone:'green'},
  delivered: {label:'Entregado',tone:'green'},
};
export const REQUEST_STATUS = {pending:'Pendiente',accepted:'Convertida en proyecto',rejected:'Descartada'};
export const nowDate = () => new Date().toISOString().slice(0,10);
export const uid = (prefix='id') => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`;
const day = n => new Date(Date.now()+n*864e5).toISOString().slice(0,10);
const ago = n => new Date(Date.now()-n*864e5).toISOString();
export function seedState() {
  const clients = [
    {id:'c1', name:'Nube Café',contact:'Valeria Soto',email:'valeria@ejemplo.invalid',initials:'NC',color:'#d5e7ff'},
    {id:'c2',name:'Lumen Studio',contact:'Daniel Ríos',email:'daniel@ejemplo.invalid',initials:'LS',color:'#fbe3c8'},
    {id:'c3',name:'Selva Botánica',contact:'Lucía Vargas',email:'lucia@ejemplo.invalid',initials:'SB',color:'#d7f1de'},
    {id:'c4',name:'Editorial Ámbar',contact:'Mario Vélez',email:'mario@ejemplo.invalid',initials:'EA',color:'#f3d9e9'},
  ];
  const team = [
    {id:'m1',name:'Alex Moreno',role:'Dirección creativa',initials:'AM',tone:'#d9d5ff'},
    {id:'m2',name:'Camila Torres',role:'Diseño gráfico',initials:'CT',tone:'#d9f2e6'},
    {id:'m3',name:'Nicolás Reyes',role:'Producción y entregas',initials:'NR',tone:'#ffe3d5'},
  ];
  const projects = [
    {id:'p1',name:'Identidad de marca · Nube Café',clientId:'c1',ownerId:'m1',service:'Identidad de marca',status:'in_review',deadline:day(8),createdAt:ago(16),budget:580,currency:'USD',scope:'Logotipo principal, isotipo, paleta y mini manual de marca.',exclusions:'Impresión, packaging y piezas de redes sociales.',rounds:2,agreementAcceptedAt:ago(14),deliveredAt:null},
    {id:'p2',name:'Campaña digital · Lumen',clientId:'c2',ownerId:'m2',service:'Campaña para redes',status:'changes_requested',deadline:day(12),createdAt:ago(12),budget:340,currency:'USD',scope:'Tres piezas estáticas para redes sociales y formatos 1:1 y 4:5.',exclusions:'Animación, pauta y gestión de anuncios.',rounds:2,agreementAcceptedAt:ago(11),deliveredAt:null},
    {id:'p3',name:'Packaging · Selva Botánica',clientId:'c3',ownerId:'m1',service:'Diseño de empaque',status:'approved',deadline:day(6),createdAt:ago(22),budget:720,currency:'USD',scope:'Etiqueta frontal, posterior y arte final para imprenta.',exclusions:'Pruebas físicas, troqueles y producción.',rounds:3,agreementAcceptedAt:ago(20),deliveredAt:null},
    {id:'p4',name:'Catálogo · Editorial Ámbar',clientId:'c4',ownerId:'m3',service:'Diseño editorial',status:'delivered',deadline:day(-4),createdAt:ago(35),budget:450,currency:'USD',scope:'Catálogo digital de ocho páginas, versión PDF.',exclusions:'Fotografía y traducciones.',rounds:2,agreementAcceptedAt:ago(34),deliveredAt:ago(3)},
    {id:'p5',name:'Nueva portada · Editorial Ámbar',clientId:'c4',ownerId:'m1',service:'Diseño editorial',status:'agreement',deadline:day(19),createdAt:ago(2),budget:290,currency:'USD',scope:'Portada y contraportada para edición digital.',exclusions:'Corrección editorial y maquetación interna.',rounds:2,agreementAcceptedAt:null,deliveredAt:null},
  ];
  const versions = [
    {id:'v11',projectId:'p1',number:1,label:'Concepto inicial',filename:'nube-cafe-v1.png',kind:'image/png',sample:'assets/demo-brand.png',round:1,createdAt:ago(9),decision:'changes_requested'},
    {id:'v12',projectId:'p1',number:2,label:'Ajustes de identidad',filename:'nube-cafe-v2.png',kind:'image/png',sample:'assets/demo-brand.png',round:2,createdAt:ago(3),decision:'pending'},
    {id:'v21',projectId:'p2',number:1,label:'Primeras piezas',filename:'lumen-campana-v1.jpg',kind:'image/jpeg',sample:'assets/demo-campaign.jpg',round:1,createdAt:ago(4),decision:'changes_requested'},
    {id:'v31',projectId:'p3',number:1,label:'Exploración de empaque',filename:'selva-packaging-v1.png',kind:'image/png',sample:'assets/demo-packaging.png',round:1,createdAt:ago(15),decision:'changes_requested'},
    {id:'v32',projectId:'p3',number:2,label:'Propuesta refinada',filename:'selva-packaging-v2.png',kind:'image/png',sample:'assets/demo-packaging.png',round:2,createdAt:ago(10),decision:'changes_requested'},
    {id:'v33',projectId:'p3',number:3,label:'Arte final',filename:'selva-packaging-v3.png',kind:'image/png',sample:'assets/demo-packaging.png',round:3,createdAt:ago(4),decision:'approved'},
    {id:'v41',projectId:'p4',number:1,label:'Catálogo final (muestra)',filename:'ambar-catalogo-v1.pdf',kind:'application/pdf',sample:'assets/demo-catalog.pdf',round:1,createdAt:ago(6),decision:'approved'},
  ];
  const comments = [
    {id:'cm1',versionId:'v12',author:'Valeria Soto',role:'client',text:'¿Podemos probar una variante con un tono más cálido?',x:68,y:30,createdAt:ago(1),resolved:false},
    {id:'cm2',versionId:'v12',author:'Alex Moreno',role:'freelancer',text:'He preparado la tipografía con mayor contraste.',x:35,y:62,createdAt:ago(1),resolved:true},
    {id:'cm3',versionId:'v21',author:'Daniel Ríos',role:'client',text:'Solicito aumentar la presencia de la llamada a la acción.',x:70,y:70,createdAt:ago(2),resolved:false},
    {id:'cm4',versionId:'v33',author:'Lucía Vargas',role:'client',text:'Todo aprobado. Gracias por los ajustes.',x:40,y:55,createdAt:ago(4),resolved:true},
  ];
  const requests = [
    {id:'r1',clientId:'c2',title:'Material para lanzamiento de producto',details:'Cinco piezas gráficas para anunciar la colección.',service:'Campaña para redes',budget:420,deadline:day(24),status:'pending',createdAt:ago(1)},
    {id:'r2',clientId:'c1',title:'Actualización de menú visual',details:'Piezas digitales para presentar el menú de temporada.',service:'Diseño gráfico',budget:180,deadline:day(18),status:'pending',createdAt:ago(2)},
  ];
  const extras = [
    {id:'ex1',projectId:'p2',title:'Adaptación a banner web',amount:65,status:'pending',createdAt:ago(1)},
    {id:'ex2',projectId:'p3',title:'Segunda variante de etiqueta',amount:90,status:'accepted',createdAt:ago(8)},
  ];
  const events = [
    {id:'e1',projectId:'p1',text:'Valeria dejó un comentario en la versión 2.',actor:'Valeria Soto',createdAt:ago(1),kind:'comment'},
    {id:'e2',projectId:'p2',text:'Cambios solicitados para la versión 1.',actor:'Daniel Ríos',createdAt:ago(2),kind:'review'},
    {id:'e3',projectId:'p3',text:'Arte final aprobado por el cliente.',actor:'Lucía Vargas',createdAt:ago(4),kind:'approval'},
    {id:'e4',projectId:'p4',text:'Entrega final registrada.',actor:'Nicolás Reyes',createdAt:ago(3),kind:'delivery'},
    {id:'e5',projectId:'p5',text:'Acuerdo enviado para aceptación.',actor:'Alex Moreno',createdAt:ago(2),kind:'agreement'},
  ];
  return {schema:1,clients,team,projects,versions,comments,requests,extras,events};
}
export function clientOf(state, project) {return state.clients.find(c=>c.id===project.clientId);}
export function versionsOf(state, projectId) {return state.versions.filter(v=>v.projectId===projectId).sort((a,b)=>b.number-a.number);}
export function latestVersion(state, projectId) {return versionsOf(state,projectId)[0]||null;}
export function roundInfo(state, projectId) {
  const p=state.projects.find(p=>p.id===projectId);
  const count=versionsOf(state,projectId).filter(v=>v.decision==='changes_requested').length;
  return {used:count,included:p?.rounds??0,remaining:Math.max(0,(p?.rounds??0)-count),overLimit:count>=(p?.rounds??0)};
}
export function canReview(project,version,role) {return role==='client' && !!project?.agreementAcceptedAt && project.status==='in_review' && version?.decision==='pending';}
export function canUpload(project,role) {return role!=='client' && !!project?.agreementAcceptedAt && ['active','changes_requested','in_review'].includes(project.status);}
export function canDeliver(project,role) {return role!=='client' && project?.status==='approved';}
export function canAcceptAgreement(project,role) {return role==='client'&&project?.status==='agreement'&&!project?.agreementAcceptedAt;}
export function canDecideExtra(extra,role) {return role==='client' && extra.status==='pending';}
export function visibility(state,role,clientId) {return state.projects.filter(p => role!=='client'||p.clientId===clientId);}
export function requestVisibility(state,role,clientId) {return state.requests.filter(r=>role!=='client'||r.clientId===clientId);}
export function allowedFile(file) {return !!file && ['image/png','image/jpeg','application/pdf'].includes(file.type) && file.size>0 && file.size<=12*1024*1024;}
export const formatMoney = n => new Intl.NumberFormat('es-BO',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(Number(n)||0);
export const formatDate = input => input ? new Intl.DateTimeFormat('es-BO',{day:'2-digit',month:'short',year:'numeric'}).format(new Date(input.length===10?input+'T12:00:00':input)):'—';
