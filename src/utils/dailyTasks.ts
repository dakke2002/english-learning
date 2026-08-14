import { logTask } from './activity';
export type DailyTaskId='listening'|'vocabulary'|'speaking';
export interface DailyState{date:string;done:DailyTaskId[];claimed:boolean}
const date=()=>new Date().toISOString().slice(0,10);const key=()=>`lingua:daily:${date()}`;
export function getDailyState():DailyState{try{return{date:date(),done:[],claimed:false,...JSON.parse(localStorage.getItem(key())||'{}')}}catch{return{date:date(),done:[],claimed:false}}}
export function completeDailyTask(task:DailyTaskId){const state=getDailyState();if(!state.done.includes(task)){state.done.push(task);logTask(task,task==='vocabulary'?3:task==='listening'?1:0)}localStorage.setItem(key(),JSON.stringify(state));window.dispatchEvent(new Event('daily-tasks'));return state}
export function claimDailyReward(){const state=getDailyState();if(state.done.length<3||state.claimed)return false;state.claimed=true;localStorage.setItem(key(),JSON.stringify(state));localStorage.setItem('lingua:xp',String(Number(localStorage.getItem('lingua:xp')||0)+30));localStorage.setItem('lingua:coins',String(Number(localStorage.getItem('lingua:coins')||0)+5));window.dispatchEvent(new Event('daily-tasks'));window.dispatchEvent(new Event('player-stats'));return true}
