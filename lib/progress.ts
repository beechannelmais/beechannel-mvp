'use client';
import { kv } from './storage'; import { currentUser } from './auth'; import type { Profile } from './types';
function key(email:string,profileId:string){return `progress:${email}:${profileId}`;}
export type Progress=Record<string,number>;
export function getProgress(profile:Profile):Progress{const u=currentUser(); if(!u) return {}; return kv.get<Progress>(key(u.email,profile.id),{})}
export function setProgress(profile:Profile,videoId:string,seconds:number){const u=currentUser(); if(!u) return; const p=getProgress(profile); p[videoId]=seconds; kv.set(key(u.email,profile.id),p)}
