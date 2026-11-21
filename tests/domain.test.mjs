import test from 'node:test';
import assert from 'node:assert/strict';
import {seedState,STATUS,visibility,requestVisibility,versionsOf,latestVersion,roundInfo,canReview,canUpload,canDeliver,canAcceptAgreement,canDecideExtra,allowedFile} from '../src/domain.mjs';
const s=seedState();
test('La semilla contiene las tres perspectivas y datos relacionados sin referencias huérfanas',()=>{
  assert.equal(s.schema,1);
  assert.equal(s.clients.length,4);
  assert.equal(s.team.length,3);
  assert.equal(s.projects.length,5);
  const ids=new Set(s.projects.map(p=>p.id));
  const vids=new Set(s.versions.map(v=>v.id));
  assert.ok(s.projects.every(p=>STATUS[p.status]&&s.clients.some(c=>c.id===p.clientId)&&s.team.some(m=>m.id===p.ownerId)));
  assert.ok(s.versions.every(v=>ids.has(v.projectId)));
  assert.ok(s.comments.every(c=>vids.has(c.versionId)));
  assert.ok(s.requests.every(r=>s.clients.some(c=>c.id===r.clientId)));
  assert.ok(s.extras.every(x=>ids.has(x.projectId)));
});
test('La vista de cliente solo ve sus propios proyectos y solicitudes',()=>{
  const c1=visibility(s,'client','c1');
  assert.equal(c1.length,1);assert.equal(c1[0].id,'p1');
  assert.ok(requestVisibility(s,'client','c1').every(x=>x.clientId==='c1'));
  assert.equal(visibility(s,'agency','c1').length,s.projects.length);
});
test('Versiones ordenadas, revisión contabilizada y fase final',()=>{
  assert.deepEqual(versionsOf(s,'p1').map(x=>x.id),['v12','v11']);
  assert.equal(latestVersion(s,'p3').id,'v33');
  assert.deepEqual(roundInfo(s,'p1'),{used:1,included:2,remaining:1,overLimit:false});
});
test('Solo el cliente puede decidir una revisión pendiente, y no después de aprobar',()=>{
  const p=s.projects.find(x=>x.id==='p1'),v=latestVersion(s,'p1');
  assert.equal(canReview(p,v,'client'),true);
  assert.equal(canReview(p,v,'agency'),false);
  assert.equal(canReview(p,v,'freelancer'),false);
  v.decision='approved';p.status='approved';
  assert.equal(canReview(p,v,'client'),false);
  assert.equal(canDeliver(p,'agency'),true);
  assert.equal(canDeliver(p,'client'),false);
});
test('Acuerdo bloquea subida hasta aceptación del cliente',()=>{
  const p=s.projects.find(x=>x.id==='p5');
  assert.equal(canUpload(p,'agency'),false);
  assert.equal(canAcceptAgreement(p,'client'),true);
  assert.equal(canAcceptAgreement(p,'agency'),false);
  p.status='active';p.agreementAcceptedAt=new Date().toISOString();
  assert.equal(canUpload(p,'agency'),true);
  assert.equal(canUpload(p,'client'),false);
});
test('Cambios extra requieren decisión del cliente',()=>{
  const extra=s.extras.find(x=>x.id==='ex1');
  assert.equal(canDecideExtra(extra,'client'),true);
  assert.equal(canDecideExtra(extra,'agency'),false);
  extra.status='accepted';
  assert.equal(canDecideExtra(extra,'client'),false);
});
test('Validación de tipos y tamaños de archivos permitidos',()=>{
  const fake=(type,size)=>({type,size});
  assert.equal(allowedFile(fake('image/png',1234)),true);
  assert.equal(allowedFile(fake('image/jpeg',100)),true);
  assert.equal(allowedFile(fake('application/pdf',10)),true);
  assert.equal(allowedFile(fake('text/html',10)),false);
  assert.equal(allowedFile(fake('image/png',13*1024*1024)),false);
  assert.equal(allowedFile(fake('image/png',0)),false);
});
