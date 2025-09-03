'use client';
import { kv } from './storage'; import type { Plan } from './types';
const KEY='plan:selected'; export const PLANS:Plan[]=[{id:'basic',name:'Básico',price:'R$14,90/mês',screens:1},{id:'standard',name:'Padrão',price:'R$24,90/mês',screens:2},{id:'premium',name:'Premium',price:'R$34,90/mês',screens:4}];
export function getPlan():Plan|null{return kv.get<Plan|null>(KEY,null)} export function setPlan(p:Plan){kv.set(KEY,p)}
