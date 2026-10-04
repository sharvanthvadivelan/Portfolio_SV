/** Keep portraits, certificates, and project results independent. Add only verified assets. */
export type Photo = { id:string; src:string; alt:string; title:string; caption:string };
export type Certificate = { title:string; issuer:string; date:string; url:string; image:string; file?:string };
export type ResultMedia = { type:'image'|'video'; src:string; poster?:string; title:string; caption:string; alt:string };
export type ProjectEvidence = { summary:string; media:ResultMedia[]; files:{label:string;url:string}[]; notes:string[] };
export const photos: Photo[] = [{"id": "shooting", "title": "Professional shooting", "caption": "Focus, precision, and disciplined practice.", "src": "/photos/shooting-user.jpg", "alt": "SV practicing professional shooting"}, {"id": "cycling", "title": "MTB cycling", "caption": "Endurance and consistency, beyond the screen.", "src": "/photos/cycling-user.png", "alt": "SV mountain biking"}, {"id": "ncc", "title": "NCC journey", "caption": "National Cadet Corps \u2014 discipline, service, and teamwork.", "src": "/photos/ncc.jpeg", "alt": "NCC journey \u2014 SV"}];
export const certificates: Certificate[] = [
 {title:"NCC 'C' Certificate",issuer:'4 Tamilnadu Battalion NCC',date:'2026',url:'',image:'/certificates/ncc-certificate-c.png'},
 {title:"NCC 'B' Certificate",issuer:'4 Tamilnadu Battalion NCC',date:'2025',url:'',image:'/certificates/ncc-certificate-b.jpg'},
 {title:'Annual Training Camp - I',issuer:'4 Tamilnadu Battalion NCC',date:'12 Jun 2024',url:'',image:'/certificates/ncc-annual-camp-i.png'},
 {title:'Annual Training Camp - II',issuer:'4 Tamilnadu Battalion NCC',date:'26 Jul 2024',url:'',image:'/certificates/ncc-annual-camp-ii.png'},
];
export const projectEvidence: Record<string,ProjectEvidence> = {
 laila:{
  summary:'The repository includes the LAILA interface animation below. It is a visual asset used by the app, not a recording of a live AI response.',
  media:[{type:'video',src:'/projects/laila/interface-animation.mp4',poster:'/projects/laila/interface-poster.webp',title:'LAILA interface animation',caption:'Original interface animation from the public LAILA-AI repository. No generated response or performance result is shown.',alt:'A glowing blue animated face used in the LAILA interface.'}],
  files:[
   {label:'Project source folder',url:'https://github.com/sharvanthvadivelan/LAILA-AI/tree/main/LAILA-AI'},
   {label:'Backend · FastAPI entry point',url:'https://github.com/sharvanthvadivelan/LAILA-AI/blob/main/LAILA-AI/app/main.py'},
   {label:'API routes',url:'https://github.com/sharvanthvadivelan/LAILA-AI/blob/main/LAILA-AI/app/api/routes.py'},
   {label:'Frontend · JavaScript',url:'https://github.com/sharvanthvadivelan/LAILA-AI/blob/main/LAILA-AI/frontend/app.js'},
   {label:'Frontend · HTML',url:'https://github.com/sharvanthvadivelan/LAILA-AI/blob/main/LAILA-AI/frontend/index.html'},
   {label:'Feature status & limitations',url:'https://github.com/sharvanthvadivelan/LAILA-AI/blob/main/LAILA-AI/docs/FEATURE_STATUS.md'},
  ],
  notes:['The source documents local chat, a planner, study logs, document retrieval, and approval-based Windows launches.','On-device model, voice, and Windows behavior still require testing as described in the repository.','Full application screenshots and a recorded workflow will be added when available.'],
 },
};

Object.assign(projectEvidence, {
  "famwise": {
    "summary": "5 supplied screenshots of the FamWise family finance interface.",
    "media": [
      {
        "type": "image" as const,
        "src": "/projects/famwise/2026-10-04-075058.png",
        "title": "Welcome and household setup",
        "caption": "Project interface screenshot supplied by SV.",
        "alt": "Welcome and household setup"
      },
      {
        "type": "image" as const,
        "src": "/projects/famwise/2026-10-04-075253.png",
        "title": "Family finance dashboard",
        "caption": "Project interface screenshot supplied by SV.",
        "alt": "Family finance dashboard"
      },
      {
        "type": "image" as const,
        "src": "/projects/famwise/2026-10-04-075957.png",
        "title": "Monthly budget",
        "caption": "Project interface screenshot supplied by SV.",
        "alt": "Monthly budget"
      },
      {
        "type": "image" as const,
        "src": "/projects/famwise/2026-10-04-080035.png",
        "title": "Bills and reminders",
        "caption": "Project interface screenshot supplied by SV.",
        "alt": "Bills and reminders"
      },
      {
        "type": "image" as const,
        "src": "/projects/famwise/2026-10-04-080148.png",
        "title": "Transactions",
        "caption": "Project interface screenshot supplied by SV.",
        "alt": "Transactions"
      }
    ],
    "files": [],
    "notes": [
      "Screenshots document the interface; source links and live demos are not yet supplied."
    ]
  },
  "studymate": {
    "summary": "6 supplied screenshots of the StudyMate AI learning interface.",
    "media": [
      {
        "type": "image" as const,
        "src": "/projects/studymate/2026-10-04-081257.png",
        "title": "StudyMate AI overview",
        "caption": "Project interface screenshot supplied by SV.",
        "alt": "StudyMate AI overview"
      },
      {
        "type": "image" as const,
        "src": "/projects/studymate/2026-10-04-081337.png",
        "title": "Learning dashboard",
        "caption": "Project interface screenshot supplied by SV.",
        "alt": "Learning dashboard"
      },
      {
        "type": "image" as const,
        "src": "/projects/studymate/2026-10-04-081410.png",
        "title": "Smart flashcards",
        "caption": "Project interface screenshot supplied by SV.",
        "alt": "Smart flashcards"
      },
      {
        "type": "image" as const,
        "src": "/projects/studymate/2026-10-04-081449.png",
        "title": "Smart study planner",
        "caption": "Project interface screenshot supplied by SV.",
        "alt": "Smart study planner"
      },
      {
        "type": "image" as const,
        "src": "/projects/studymate/2026-10-04-081542.png",
        "title": "PDF library",
        "caption": "Project interface screenshot supplied by SV.",
        "alt": "PDF library"
      },
      {
        "type": "image" as const,
        "src": "/projects/studymate/2026-10-04-081601.png",
        "title": "Ask your notes",
        "caption": "Project interface screenshot supplied by SV.",
        "alt": "Ask your notes"
      }
    ],
    "files": [],
    "notes": [
      "Screenshots document the interface; source links and live demos are not yet supplied."
    ]
  },
  "scamshield": {
    "summary": "3 supplied screenshots of the ScamShield message analysis interface.",
    "media": [
      {
        "type": "image" as const,
        "src": "/projects/scamshield/2026-10-04-084059.png",
        "title": "ScamShield message analyzer",
        "caption": "Project interface screenshot supplied by SV.",
        "alt": "ScamShield message analyzer"
      },
      {
        "type": "image" as const,
        "src": "/projects/scamshield/2026-10-04-084440.png",
        "title": "Message analysis result",
        "caption": "Project interface screenshot supplied by SV.",
        "alt": "Message analysis result"
      },
      {
        "type": "image" as const,
        "src": "/projects/scamshield/2026-10-04-084656.png",
        "title": "SMS analysis result",
        "caption": "Project interface screenshot supplied by SV.",
        "alt": "SMS analysis result"
      }
    ],
    "files": [],
    "notes": [
      "Screenshots document the interface; source links and live demos are not yet supplied."
    ]
  },
  "security": {
    "summary": "Authentication interface screenshot. Its parent project is not yet identified.",
    "media": [
      {
        "type": "image" as const,
        "src": "/projects/security/2026-10-03-200955.png",
        "title": "System authentication interface",
        "caption": "Project interface screenshot supplied by SV.",
        "alt": "System authentication interface"
      }
    ],
    "files": [],
    "notes": [
      "Screenshots document the interface; source links and live demos are not yet supplied."
    ]
  }
});

projectEvidence.security.media.push(...[{"type": "image" as const, "src": "/projects/security/115359.png", "title": "Authentication workflow", "caption": "Project interface screenshot supplied by SV.", "alt": "Authentication workflow"}, {"type": "image" as const, "src": "/projects/security/115434.png", "title": "Zero trust network access", "caption": "Project interface screenshot supplied by SV.", "alt": "Zero trust network access"}, {"type": "image" as const, "src": "/projects/security/115527.png", "title": "Security command dashboard", "caption": "Project interface screenshot supplied by SV.", "alt": "Security command dashboard"}]);
projectEvidence.security.summary="AI Threat Defense Hub interface: authentication, zero trust access, and a security dashboard.";
projectEvidence.discipline={"summary": "A 90-day workspace for habits, AI learning, and startup building.", "media": [{"type": "image" as const, "src": "/projects/discipline/121912.png", "title": "90-day founder discipline dashboard", "caption": "Project interface screenshot supplied by SV.", "alt": "90-day founder discipline dashboard"}], "files": [], "notes": ["Screenshot supplied by SV."]};
