export interface LessonMeta { level: string; duration: string; skills: string[]; objective: string; outcome: string }
const daily: LessonMeta = { level: 'B1', duration: '15 分钟', skills: ['听力', '词汇', '复述'], objective: '听懂核心信息并积累可复用表达', outcome: '完成 60 秒英文复述' };
const metas: Record<string, LessonMeta> = {
  'ielts-speaking-01': { level: '目标 Band 7', duration: '25 分钟', skills: ['Part 2', '人物题', '故事表达'], objective: '用人物、经历、影响和反思组织答案', outcome: '完成 90-120 秒人物描述' },
  'ielts-speaking-02': { level: '目标 Band 7', duration: '20 分钟', skills: ['Part 1', '答案扩展', '自然表达'], objective: '把一句短答案扩展成有原因和例子的回答', outcome: '完成 20-30 秒自然回答' },
  'ielts-speaking-03': { level: '目标 Band 7', duration: '25 分钟', skills: ['Part 2', '地点题', '感官细节'], objective: '用位置、画面、活动和感受描述地点', outcome: '完成 90-120 秒地点描述' },
  'ielts-speaking-04': { level: '目标 Band 7', duration: '25 分钟', skills: ['Part 3', '观点讨论', '逻辑论证'], objective: '用观点、原因、例子和让步展开抽象问题', outcome: '完成 45-60 秒深度回答' },
  'ielts-speaking-05': { level: '目标 Band 7', duration: '30 分钟', skills: ['模拟考试', '临场修正', '综合输出'], objective: '串联三部分并练习自然修正错误', outcome: '完成一次完整口语模拟' },
  'ielts-speaking-06': { level: '基础', duration: '15 分钟', skills: ['Foundation', 'TS+SD', '答案扩展'], objective: '用原因和例子把短答案说完整', outcome: '完成 20 秒回答并录音' },
  'ielts-speaking-07': { level: '基础', duration: '15 分钟', skills: ['Part 1', '时态', '个人经历'], objective: '自然切换过去、现在和未来时态', outcome: '完成三时态回答' },
  'ielts-speaking-08': { level: '目标 Band 7', duration: '20 分钟', skills: ['Part 2', '物品题', '情感价值'], objective: '用来源、外观、场景和意义描述物品', outcome: '完成 90 秒物品描述' },
  'ielts-speaking-09': { level: '目标 Band 7', duration: '20 分钟', skills: ['Part 2', '经历叙事', '转折结果'], objective: '用时间线和转折讲清难忘经历', outcome: '完成 90 秒故事' },
  'ielts-speaking-10': { level: '目标 Band 7', duration: '20 分钟', skills: ['Part 2', '变化题', '过去现在对比'], objective: '解释变化原因、影响和个人态度', outcome: '完成 90 秒变化描述' },
  'ielts-speaking-11': { level: '目标 Band 7', duration: '20 分钟', skills: ['Part 3', '比较评价', '宏观视角'], objective: '比较两种选择并说明适用条件', outcome: '完成两组 TS+SD' },
  'ielts-speaking-12': { level: '目标 Band 7', duration: '20 分钟', skills: ['Part 3', '原因影响', '逻辑链'], objective: '建立原因、结果和例证的分析链', outcome: '完成 45-60 秒分析' },
  'ielts-speaking-13': { level: '目标 Band 7', duration: '20 分钟', skills: ['Part 3', '问题方案', '限制条件'], objective: '提出具体可执行且有边界的解决方案', outcome: '完成问题与方案回答' },
  'ielts-speaking-14': { level: '模拟训练', duration: '30 分钟', skills: ['Mock', '计时', '自我修复'], objective: '训练停顿、改述和保持连贯', outcome: '完成一轮计时模拟' },
  'ielts-speaking-15': { level: '复盘提升', duration: '20 分钟', skills: ['Band 7', '错误库', '目标管理'], objective: '根据录音为下一轮设定一个可测目标', outcome: '完成个人错误记录' },
};
export function getLessonMeta(id: string): LessonMeta { return metas[id] || daily; }
