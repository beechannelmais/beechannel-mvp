import type { Video } from './types';
export const CATALOG:Video[]=[
{id:'bunny',title:'Big Buck Bunny',description:'Animação clássica em open-source. (demo)',category:'Animação',thumb:'https://i.ytimg.com/vi/YE7VzlLtp-4/maxresdefault.jpg',url:'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',durationSec:634},
{id:'sintel',title:'Sintel',description:'Filme curto do Blender Foundation. (demo)',category:'Aventura',thumb:'https://i.ytimg.com/vi/eRsGyueVLvQ/maxresdefault.jpg',url:'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',durationSec:888},
{id:'elephants',title:'Elephants Dream',description:'Primeiro filme open movie do Blender. (demo)',category:'Fantasia',thumb:'https://i.ytimg.com/vi/eM3Nf4oG0J0/maxresdefault.jpg',url:'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',durationSec:654}
];
export function categories():string[]{const set=new Set(CATALOG.map(v=>v.category)); return Array.from(set);}
