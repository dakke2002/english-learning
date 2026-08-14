export type IELTSPart = 1 | 2 | 3;
export interface IELTSQuestion { id: string; part: IELTSPart; topic: string; prompt: string; followUps?: string[]; }

// Original practice prompts aligned with the public IELTS Speaking format.
// They are not presented as recalled or leaked live-test questions.
export const ieltsQuestions: IELTSQuestion[] = [
  { id:'p1-home', part:1, topic:'Home & Hometown', prompt:'What do you like most about the place where you live?', followUps:['Has your hometown changed in recent years?','Would you like to live there in the future?'] },
  { id:'p1-study', part:1, topic:'Study & Work', prompt:'What part of your studies or work do you find most interesting?', followUps:['What would you like to improve?','Do you prefer working alone or with others?'] },
  { id:'p1-free', part:1, topic:'Free Time', prompt:'How do you usually spend your free time?', followUps:['Did you have the same hobbies as a child?','Why are hobbies important?'] },
  { id:'p1-tech', part:1, topic:'Technology', prompt:'What piece of technology do you use most often?', followUps:['Is it easy for you to learn new technology?','Could you live without it?'] },
  { id:'p2-person', part:2, topic:'People', prompt:'Describe a person who has encouraged you to achieve a goal.', followUps:['Who the person is','What the goal was','How the person encouraged you','Explain why this encouragement mattered'] },
  { id:'p2-place', part:2, topic:'Places', prompt:'Describe a place you visited that you would like to return to.', followUps:['Where it is','When you visited','What you did there','Explain why you want to return'] },
  { id:'p2-skill', part:2, topic:'Skills', prompt:'Describe a useful skill you learned outside school.', followUps:['What the skill is','How you learned it','How often you use it','Explain why it is useful'] },
  { id:'p2-event', part:2, topic:'Experiences', prompt:'Describe a time when you successfully solved a difficult problem.', followUps:['What the problem was','Who was involved','What you did','Explain how you felt afterward'] },
  { id:'p3-education', part:3, topic:'Education', prompt:'What skills should schools prepare students to use in adult life?', followUps:['Should schools teach more practical skills?','How might education change in the future?'] },
  { id:'p3-cities', part:3, topic:'Cities', prompt:'Why do many people choose to move to large cities?', followUps:['What problems can rapid urban growth create?','How can smaller cities become more attractive?'] },
  { id:'p3-tech', part:3, topic:'Technology', prompt:'How has technology changed the way people communicate?', followUps:['Are online relationships as valuable as face-to-face ones?','What changes do you expect next?'] },
  { id:'p3-environment', part:3, topic:'Environment', prompt:'Who should take the most responsibility for protecting the environment?', followUps:['What can individuals realistically do?','Should environmental rules be stricter?'] }
];
