export interface LessonMeta{level:string;duration:string;skills:string[];objective:string;outcome:string}
const daily:LessonMeta={level:'B1',duration:'15 分钟',skills:['听力','词汇','复述'],objective:'听懂核心信息并积累可复用表达',outcome:'完成 60 秒英文复述'};
const metas:Record<string,LessonMeta>={
'ielts-speaking-01':{level:'目标 Band 7',duration:'25 分钟',skills:['Part 2','人物话题','故事表达'],objective:'用人物、经历、影响和反思组织答案',outcome:'完成 90–120 秒人物描述'},
'ielts-speaking-02':{level:'目标 Band 7',duration:'20 分钟',skills:['Part 1','答案扩展','自然表达'],objective:'把一句话短答案扩展成有原因和例子的回答',outcome:'完成 20–30 秒自然回答'},
'ielts-speaking-03':{level:'目标 Band 7',duration:'25 分钟',skills:['Part 2','地点话题','感官细节'],objective:'用位置、画面、活动和感受描述地点',outcome:'完成 90–120 秒地点描述'},
'ielts-speaking-04':{level:'目标 Band 7',duration:'25 分钟',skills:['Part 3','观点讨论','逻辑论证'],objective:'用观点、原因、例子和让步展开抽象问题',outcome:'完成 45–60 秒深度观点回答'},
'ielts-speaking-05':{level:'目标 Band 7',duration:'30 分钟',skills:['模拟考试','临场修正','综合输出'],objective:'串联 Part 1、2、3 并练习自然修正错误',outcome:'完成一次完整口语模拟'}};
export function getLessonMeta(id:string):LessonMeta{
  if (metas[id]) return metas[id];
  if (id.startsWith('ielts-speaking-')) {
    const n=Number(id.split('-').pop()||0);
    const part=n<=7?'Part 1':n<=10?'Part 2':n<=13?'Part 3':'综合训练';
    return {level:'目标 Band 7',duration:n>=14?'30 分钟':'25 分钟',skills:[part,'TS+SD','录音复盘'],objective:'用 TS+SD 方法完成一项可重复训练，并记录一个需要改进的点',outcome:'完成一轮回答、语境填空和录音复盘'};
  }
  return daily;
}
