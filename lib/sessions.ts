'use client';
import { getPlan } from './plan'; import { currentUser } from './auth';
const KEY=(email:string)=>`sessions:${email}`; type Entry={id:string; ts:number};
let id=''; if(typeof window!=='undefined'){ id=Math.random().toString(36).slice(2); }
function read(email:string):Entry[]{ try{ const raw=localStorage.getItem(KEY(email)); if(!raw) return []; return JSON.parse(raw) as Entry[];}catch{return []}}
function write(email:string,entries:Entry[]){ localStorage.setItem(KEY(email),JSON.stringify(entries));}
function prune(entries:Entry[]):Entry[]{ const now=Date.now(); return entries.filter(e=>now-e.ts<20000);}
export function startSession(){ const u=currentUser(); if(!u) return; const entries=prune(read(u.email)); entries.push({id,ts:Date.now()}); write(u.email,entries);}
export function heartbeat(){ const u=currentUser(); if(!u) return; const entries=prune(read(u.email)); const idx=entries.findIndex(e=>e.id===id); if(idx>=0) entries[idx].ts=Date.now(); else entries.push({id,ts:Date.now()}); write(u.email,entries);}
export function endSession(){ const u=currentUser(); if(!u) return; const entries=read(u.email).filter(e=>e.id!=id); write(u.email,entries);}
export function overLimit():{over:boolean;count:number;allowed:number}{ const u=currentUser(); const plan=getPlan(); if(!u||!plan) return {over:false,count:1,allowed:1}; const entries=prune(read(u.email)); const count=entries.length; return {over:count>plan.screens,count,allowed:plan.screens};}
