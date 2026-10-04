'use client';
import {useEffect,useRef} from 'react';
/** Presentation-only background. No data, navigation or application state. */
export default function ParticleField(){
 const ref=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const canvas=ref.current;if(!canvas)return;const ctx=canvas.getContext('2d');if(!ctx)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');let frame=0,last=0,w=0,h=0,t=0;
  const points=Array.from({length:46},(_,i)=>({x:((i*137.508)%997)/997,y:((i*83.173)%991)/991,phase:i*.73}));
  function resize(){w=innerWidth;h=innerHeight;const ratio=Math.min(devicePixelRatio||1,1.5);canvas!.width=w*ratio;canvas!.height=h*ratio;ctx!.setTransform(ratio,0,0,ratio,0,0);draw()}
  function draw(){ctx!.clearRect(0,0,w,h);const p=points.map(v=>({x:v.x*w+Math.sin(t*.14+v.phase)*16,y:v.y*h+Math.cos(t*.11+v.phase)*13}));p.forEach((v,i)=>{ctx!.fillStyle='rgba(0,229,255,.28)';ctx!.beginPath();ctx!.arc(v.x,v.y,i%6===0?1.8:1,0,Math.PI*2);ctx!.fill();p.slice(i+1).forEach(q=>{const d=Math.hypot(v.x-q.x,v.y-q.y);if(d<105){ctx!.strokeStyle=`rgba(0,229,255,${.11*(1-d/105)})`;ctx!.beginPath();ctx!.moveTo(v.x,v.y);ctx!.lineTo(q.x,q.y);ctx!.stroke()}})})}
  function tick(now:number){if(!document.hidden&&!reduced.matches&&now-last>50){t+=.05;draw();last=now}frame=requestAnimationFrame(tick)}
  resize();frame=requestAnimationFrame(tick);addEventListener('resize',resize);return()=>{cancelAnimationFrame(frame);removeEventListener('resize',resize)};
 },[]);
 return <canvas ref={ref} className="particle-field" aria-hidden="true"/>;
}
