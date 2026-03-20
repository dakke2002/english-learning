export interface Vocabulary {
  word: string;
  phonetic: string;
  meaning: string;
  example: string;
}

export interface SentencePattern {
  english: string;
  chinese: string;
  usage: string;
}

export interface DictationExercise {
  sentence: string;
  answer: string;
  hint: string;
}

export interface LessonMedia {
  noSubtitleVideo: string;
  audio: string;
  withSubtitleVideo: string;
}

export interface Lesson {
  id: string;
  title: string;
  titleChinese?: string;
  description: string;
  icon: string;
  media: LessonMedia;
  vocabulary: Vocabulary[];
  sentencePatterns: SentencePattern[];
  bilingualText: { english: string; chinese: string };
  englishText: string;
  dictationExercises: DictationExercise[];
}

export interface Step {
  id: number;
  title: string;
  icon: string;
}

// 视频课程配置接口（用于定义课程元数据）
export interface VideoLesson {
  id: string;
  title: string;
  titleEn: string;
  titleChinese?: string;
  description: string;
  icon: string;
  videoFile: string;
  vocabulary: Vocabulary[];
  sentencePatterns: SentencePattern[];
  bilingualText: { english: string; chinese: string };
  englishText: string;
  dictationExercises: DictationExercise[];
}

export interface AllLessons {
  [key: string]: Lesson;
}

// 导出未使用的类型以保持兼容性
export type { AllLessons as DeprecatedAllLessons };
