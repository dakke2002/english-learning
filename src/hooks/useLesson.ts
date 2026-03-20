import { useState, useCallback, useMemo } from 'react';
import type { Lesson } from '../types';
import { allCourses } from '../data/courses';
import type { SubCourse } from '../data/courses';

// 将所有子课程转换为 Lesson 格式
function convertToLesson(subCourse: SubCourse): Lesson {
  return {
    id: subCourse.id,
    title: subCourse.titleEn + (subCourse.titleChinese ? ` - ${subCourse.titleChinese}` : ''),
    titleChinese: subCourse.titleChinese,
    description: subCourse.description,
    icon: subCourse.icon,
    media: {
      noSubtitleVideo: subCourse.videoFile,
      audio: subCourse.videoFile,
      withSubtitleVideo: subCourse.videoFile
    },
    vocabulary: subCourse.vocabulary,
    sentencePatterns: subCourse.sentencePatterns,
    bilingualText: subCourse.bilingualText,
    englishText: subCourse.englishText,
    dictationExercises: subCourse.dictationExercises
  };
}

// 创建所有课程的 Lesson 映射
const allLessonsMap: Record<string, Lesson> = {};
allCourses.forEach(course => {
  course.subCourses.forEach(subCourse => {
    allLessonsMap[subCourse.id] = convertToLesson(subCourse);
  });
});

// 展平的课程列表用于下拉菜单
const flatLessonList: Lesson[] = allCourses.flatMap(course =>
  course.subCourses.map(subCourse => convertToLesson(subCourse))
);

export function useLesson() {
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);

  const setLesson = useCallback((lessonId: string) => {
    const lesson = allLessonsMap[lessonId];
    if (lesson) {
      setCurrentLesson(lesson);
    }
  }, []);

  const switchLesson = useCallback((lessonId: string) => {
    const lesson = allLessonsMap[lessonId];
    if (lesson && lesson.id !== currentLesson?.id) {
      setCurrentLesson(lesson);
      return true;
    }
    return false;
  }, [currentLesson]);

  return useMemo(() => ({
    currentLesson,
    setLesson,
    switchLesson,
    lessonId: currentLesson?.id,
    lessonList: flatLessonList
  }), [currentLesson, setLesson, switchLesson]);
}
