import { profile } from '../../../content/portfolio';
let cache: {time:number; data:unknown}|null=null;
export async function GET() {
 if(cache && Date.now()-cache.time<600000) return Response.json(cache.data);
 try {
  const get=async(path:string):Promise<any>=>{const r=await fetch('https://api.github.com/'+path,{headers:{Accept:'application/vnd.github+json','User-Agent':'SV-Portfolio'},signal:AbortSignal.timeout(8000)});if(!r.ok)throw new Error('GitHub is temporarily unavailable');return r.json();};
  const contributionGraph=getContributionGraph();
  const [user,repos,events,contributions]=await Promise.all([get('users/'+profile.github),get('users/'+profile.github+'/repos?sort=updated&per_page=100'),get('users/'+profile.github+'/events/public?per_page=100'),contributionGraph]);
  const languages:Record<string,number>={};repos.filter((r:any)=>!r.fork&&r.language).forEach((r:any)=>{languages[r.language]=(languages[r.language]||0)+1;});
  const days:Record<string,number>={};events.forEach((e:any)=>{const day=e.created_at.slice(0,10);days[day]=(days[day]||0)+1;});
  const activity=events.filter((e:any)=>['PushEvent','CreateEvent','IssuesEvent','PullRequestEvent','ReleaseEvent','ForkEvent','WatchEvent'].includes(e.type)).slice(0,12).map((e:any)=>({id:e.id,type:e.type,action:e.type==='PushEvent'?'Pushed updates to':e.type==='CreateEvent'?e.payload.ref_type==='repository'?'Created repository':'Created '+(e.payload.ref_type||'project item'):e.type==='IssuesEvent'?(e.payload.action==='opened'?'Opened issue in':'Updated issue in'):e.type==='PullRequestEvent'?(e.payload.action==='opened'?'Opened pull request in':'Updated pull request in'):e.type==='ReleaseEvent'?'Published release in':e.type==='ForkEvent'?'Forked':'Starred',createdAt:e.created_at,repository:e.repo.name,url:'https://github.com/'+e.repo.name}));
  const data={followers:user.followers,repos:user.public_repos,url:user.html_url,languages,days,events:events.length,pushEvents:events.filter((e:any)=>e.type==='PushEvent').length,contributions:contributions.days,contributionError:contributions.error,activity,repositories:repos.filter((r:any)=>!r.fork).slice(0,6).map((r:any)=>({name:r.name,description:r.description,language:r.language,stars:r.stargazers_count,url:r.html_url})),updated:new Date().toISOString()};
  cache={time:Date.now(),data};return Response.json(data,{headers:{'Cache-Control':'public, max-age=300'}});
 }catch{return Response.json({error:'GitHub data is temporarily unavailable. Visit the profile or try again.'},{status:503});}
}

async function getContributionGraph():Promise<{days:{date:string;level:number}[];error?:string}> {
 try {
  const to=new Date().toISOString().slice(0,10);
  const response=await fetch(`https://github.com/users/${profile.github}/contributions?to=${to}`,{headers:{'User-Agent':'SV-Portfolio'},signal:AbortSignal.timeout(8000)});
  if(!response.ok) throw new Error('GitHub contribution graph is unavailable.');
  const html=await response.text();
  const days=Array.from(html.matchAll(/data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g),match=>({date:match[1],level:Number(match[2])}));
  if(!days.length) throw new Error('GitHub did not provide contribution graph data.');
  return {days};
 }catch(error) {
  return {days:[],error:error instanceof Error?error.message:'GitHub contribution graph is unavailable.'};
 }
}
