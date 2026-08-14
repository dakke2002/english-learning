import type{Vocabulary}from'../types';
export interface SavedWord extends Vocabulary{lessonId:string;savedAt:string}
const KEY='lingua:vocabulary-book';
export function getSavedWords():SavedWord[]{try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return[]}}
export function saveWord(word:Vocabulary,lessonId:string){const words=getSavedWords();if(!words.some(w=>w.word.toLowerCase()===word.word.toLowerCase()))words.unshift({...word,lessonId,savedAt:new Date().toISOString()});localStorage.setItem(KEY,JSON.stringify(words));window.dispatchEvent(new Event('vocabulary-book'))}
export function removeWord(word:string){localStorage.setItem(KEY,JSON.stringify(getSavedWords().filter(w=>w.word!==word)));window.dispatchEvent(new Event('vocabulary-book'))}
export const isSaved=(word:string)=>getSavedWords().some(w=>w.word.toLowerCase()===word.toLowerCase());
export function markMastered(lessonId:string,word:string){const key=`lingua:mastered:${lessonId}`;const words=JSON.parse(localStorage.getItem(key)||'[]') as string[];if(!words.includes(word))words.push(word);localStorage.setItem(key,JSON.stringify(words));return words}
export function getMastered(lessonId:string):string[]{try{return JSON.parse(localStorage.getItem(`lingua:mastered:${lessonId}`)||'[]')}catch{return[]}}
