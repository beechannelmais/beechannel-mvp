'use client';
const NS='bcx';
export const kv={get<T>(key:string,fallback:T):T{if(typeof window==='undefined')return fallback;try{const raw=localStorage.getItem(`${NS}:${key}`);return raw?JSON.parse(raw) as T:fallback}catch{return fallback}},set<T>(key:string,val:T){if(typeof window==='undefined')return;localStorage.setItem(`${NS}:${key}`,JSON.stringify(val))},del(key:string){if(typeof window==='undefined')return;localStorage.removeItem(`${NS}:${key}`)}};
