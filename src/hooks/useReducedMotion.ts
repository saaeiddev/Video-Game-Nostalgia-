import {useEffect,useState} from 'react';
export function useReducedMotion(){const [reduced,set]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches);useEffect(()=>{const m=window.matchMedia('(prefers-reduced-motion: reduce)');const update=()=>set(m.matches);m.addEventListener('change',update);return()=>m.removeEventListener('change',update)},[]);return reduced;}
