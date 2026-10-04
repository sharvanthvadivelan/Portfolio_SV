'use client';
import {motion,useReducedMotion} from 'framer-motion';
export default function AnimatedTitle({children}:{children:string}){
 const reduced=useReducedMotion();
 return <motion.h2 className="animated-title" aria-label={children} initial="hidden" whileInView="visible" viewport={{once:true,amount:.65}}>{children.split(' ').map((word,i)=><span className="title-word-mask" aria-hidden="true" key={i}><motion.span variants={{hidden:{opacity:0,y:'105%',filter:'blur(5px)'},visible:{opacity:1,y:0,filter:'blur(0px)'}}} transition={{duration:reduced?0:.65,delay:reduced?0:i*.065,ease:[.2,.7,.25,1]}}>{word}</motion.span>{i<children.split(' ').length-1?' ':''}</span>)}</motion.h2>
}
