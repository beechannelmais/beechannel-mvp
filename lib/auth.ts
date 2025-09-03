'use client';
import { kv } from './storage'; import type { User } from './types';
const KEY='auth:user'; export function currentUser():User|null{return kv.get<User|null>(KEY,null)} export function login(user:User){kv.set(KEY,user)} export function logout(){kv.del(KEY)}
