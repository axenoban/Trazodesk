import {seedState, STORAGE_KEY} from './domain.mjs';
let memoryBackup = null;
export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){const parsed=JSON.parse(raw); if(parsed?.schema===1&&Array.isArray(parsed.projects)&&Array.isArray(parsed.versions))return parsed;}
  } catch(err){console.warn('Se usarán datos de ejemplo',err);}
  return memoryBackup || seedState();
}
export function saveState(state){
  memoryBackup=state;
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));return true;}catch(err){console.warn('Sin almacenamiento local disponible',err);return false;}
}
export function resetState(){try{localStorage.removeItem(STORAGE_KEY);}catch{} memoryBackup=null;}
let dbPromise;
function openDB(){
  if(!('indexedDB' in window))return Promise.resolve(null);
  if(!dbPromise)dbPromise=new Promise(resolve=>{
    let request;
    try{request=indexedDB.open('trazodesk-demo-files-v1',1);}catch{return resolve(null);}
    request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains('files'))request.result.createObjectStore('files');};
    request.onsuccess=()=>resolve(request.result);
    request.onerror=()=>resolve(null);
    request.onblocked=()=>resolve(null);
  });
  return dbPromise;
}
export async function saveFile(id,file){
  const db=await openDB(); if(!db)throw new Error('Tu navegador no permite guardar archivos en esta demo.');
  return new Promise((resolve,reject)=>{const tx=db.transaction('files','readwrite');tx.objectStore('files').put(file,id);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(new Error('No se pudo guardar el archivo localmente.'));});
}
export async function readFile(id){const db=await openDB();if(!db)return null;return new Promise(resolve=>{const tx=db.transaction('files','readonly');const r=tx.objectStore('files').get(id);r.onsuccess=()=>resolve(r.result||null);r.onerror=()=>resolve(null);});}
export async function resetFiles(){const db=await openDB();if(!db)return;await new Promise(resolve=>{const tx=db.transaction('files','readwrite');tx.objectStore('files').clear();tx.oncomplete=()=>resolve();tx.onerror=()=>resolve();});}
