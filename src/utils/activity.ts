export interface ActivityDay{date:string;tasks:string[];minutes:number;dictationScores:number[];speakingScores:number[];lessons:number}
const day=(offset=0)=>{const d=new Date();d.setDate(d.getDate()+offset);return d.toISOString().slice(0,10)};const key=(date:string)=>`lingua:activity:${date}`;
export function getActivity(date=day()):ActivityDay{try{return{date,tasks:[],minutes:0,dictationScores:[],speakingScores:[],lessons:0,...JSON.parse(localStorage.getItem(key(date))||'{}')}}catch{return{date,tasks:[],minutes:0,dictationScores:[],speakingScores:[],lessons:0}}}
export function updateActivity(patch:(current:ActivityDay)=>ActivityDay){const current=getActivity();const next=patch(current);localStorage.setItem(key(current.date),JSON.stringify(next));window.dispatchEvent(new Event('activity'));return next}
export function logTask(task:string,minutes:number){updateActivity(a=>({...a,tasks:Array.from(new Set([...a.tasks,task])),minutes:a.tasks.includes(task)?a.minutes:a.minutes+minutes}))}
export function logDictation(score:number){updateActivity(a=>({...a,dictationScores:[...a.dictationScores,score]}))}
export function logSpeaking(score:number,seconds:number){updateActivity(a=>({...a,speakingScores:[...a.speakingScores,score],minutes:a.minutes+Math.max(1,Math.round(seconds/60))}))}
export function logLesson(){updateActivity(a=>({...a,lessons:a.lessons+1}))}
export function getLastSevenDays(){return Array.from({length:7},(_,i)=>getActivity(day(i-6)))}
