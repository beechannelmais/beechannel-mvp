'use client';
import { kv } from './storage'; import { currentUser } from './auth'; import type { Profile } from './types';
function key(email:string,profileId:string){return `watchlater:${email}:${profileId}`;}
export function getWatchLater(profile:Profile):string[]{const u=currentUser(); if(!u) return []; return kv.get<string[]>(key(u.email,profile.id),[])}
export function toggleWatchLater(profile:Profile,id:string){const u=currentUser(); if(!u) return; const arr=new Set(getWatchLater(profile)); if(arr.has(id)) arr.delete(id); else arr.add(id); kv.set(key(u.email,profile.id),Array.from(arr))}
export function hasWatchLater(profile:Profile,id:string){return new Set(getWatchLater(profile)).has(id)}
