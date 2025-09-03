'use client';
import { kv } from './storage'; import type { Profile } from './types'; import { currentUser } from './auth';
function key(email:string){return `profiles:${email}`;}
export function listProfiles():Profile[]{const u=currentUser(); if(!u) return []; return kv.get<Profile[]>(key(u.email),[])}
export function saveProfiles(profiles:Profile[]){const u=currentUser(); if(!u) return; kv.set(key(u.email),profiles)}
export function upsertProfile(p:Profile){const arr=listProfiles(); const i=arr.findIndex(x=>x.id===p.id); if(i>=0) arr[i]=p; else arr.push(p); saveProfiles(arr)}
export function deleteProfile(id:string){saveProfiles(listProfiles().filter(p=>p.id!==id))}
