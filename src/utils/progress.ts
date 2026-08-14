import { recordActiveDay } from './gamification';
import { completeDailyTask } from './dailyTasks';
import { logLesson } from './activity';
export interface LessonProgress { visited:number[]; dictationScore:number; speakingScore:number; completed:boolean; completedAt?:string; }
const empty=():LessonProgress=>({visited:[],dictationScore:0,speakingScore:0,completed:false});
export function getProgress(id:string):LessonProgress{try{return{...empty(),...JSON.parse(localStorage.getItem(`lesson-progress:${id}`)||'{}')}}catch{return empty()}}
export function updateProgress(id:string,patch:Partial<LessonProgress>){const previous=getProgress(id);const next={...previous,...patch};next.completed=next.visited.length>=4&&next.dictationScore>=100&&next.speakingScore>=60;if(next.completed&&!previous.completed){next.completedAt=new Date().toISOString();recordActiveDay();logLesson();localStorage.setItem('lingua:xp',String(Number(localStorage.getItem('lingua:xp')||0)+50));localStorage.setItem('lingua:coins',String(Number(localStorage.getItem('lingua:coins')||0)+20))}localStorage.setItem(`lesson-progress:${id}`,JSON.stringify(next));window.dispatchEvent(new CustomEvent('lesson-progress',{detail:{id,progress:next}}));window.dispatchEvent(new Event('player-stats'));return next}
export function visitStep(id:string,step:number){const current=getProgress(id);if(step===3)completeDailyTask('vocabulary');return updateProgress(id,{visited:Array.from(new Set([...current.visited,step])).sort()})}
