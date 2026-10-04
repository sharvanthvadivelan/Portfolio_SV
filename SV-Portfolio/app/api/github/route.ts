import { profile } from '../../../content/portfolio';
let cache: {time:number; data:unknown}|null=null;
export async function GET() {
 if(cache && Date.now()-cache.time<600000) return Response.json(cache.data);
 try {
  const get=async(path:string):Promise<any>=>{const r=await fetch('https://api.github.com/'+path,{headers:{Accept:'application/vnd.github+json','User-Agent':'SV-Portfolio'},signal:AbortSignal.timeout(8000)});if(!r.ok)throw new Error('GitHub is temporarily unavailable');return r.json();};
  const [user,repos,events]=await Promise.all([get('users/'+profile.github),get('users/'+profile.github+'/repos?sort=updated&per_page=100'),get('users/'+profile.github+'/events/public?per_page=100')]);
  const languages:Record<string,number>={};repos.filter((r:any)=>!r.fork&&r.language).forEach((r:any)=>{languages[r.language]=(languages[r.language]||0)+1;});
  const days:Record<string,number>={};events.forEach((e:any)=>{const day=e.created_at.slice(0,10);days[day]=(days[day]||0)+1;});
  const data={followers:user.followers,repos:user.public_repos,url:user.html_url,languages,days,events:events.length,pushEvents:events.filter((e:any)=>e.type==='PushEvent').length,repositories:repos.filter((r:any)=>!r.fork).slice(0,6).map((r:any)=>({name:r.name,description:r.description,language:r.language,stars:r.stargazers_count,url:r.html_url})),updated:new Date().toISOString()};
  cache={time:Date.now(),data};return Response.json(data,{headers:{'Cache-Control':'public, max-age=300'}});
 }catch{return Response.json({error:'GitHub data is temporarily unavailable. Visit the profile or try again.'},{status:503});}
}
