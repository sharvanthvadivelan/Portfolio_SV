import type { Metadata } from 'next';
import './globals.css';
import './reference-flow.css';
import './media-showcase.css';
export const metadata: Metadata = {
 title:'SV | AI Engineer | Cybersecurity | SaaS Builder',
 description:'Portfolio of SV showcasing AI projects, cybersecurity learning journey, software engineering, SaaS development, and technology innovations.',
 keywords:['AI','Machine Learning','Cybersecurity','Software Engineer','Portfolio','Developer','India','SaaS','Full Stack','React','Python'],
 manifest:'/manifest.webmanifest',
 icons:{icon:'/favicon.svg',apple:'/icon-192.png'},
 openGraph:{title:'SV — Building what comes next.',description:'AI, cybersecurity, and purposeful software. Step inside the lab.',type:'website'},
 twitter:{card:'summary',title:'SV — AI Laboratory',description:'Building technology that solves real problems.'}
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><head><meta name="theme-color" content="#05070A"/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/></head><body>{children}</body></html>}
