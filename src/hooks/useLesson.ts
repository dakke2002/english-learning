import { useState, useCallback, useMemo } from 'react';
import type { Lesson } from '../types';
import { allCourses } from '../data/courses';
import type { SubCourse } from '../data/courses';
import { lessonOverrides } from '../data/lessonOverrides';
import { advancedLessonOverrides } from '../data/advancedLessonOverrides';

// 将所有子课程转换为 Lesson 格式
function convertToLesson(subCourse: SubCourse): Lesson {
  const source = { ...subCourse, ...lessonOverrides[subCourse.id], ...advancedLessonOverrides[subCourse.id] } as SubCourse;
  return {
    id: source.id,
    title: source.titleEn,
    titleChinese: source.titleChinese,
    description: source.description,
    icon: source.icon,
    media: {
      noSubtitleVideo: source.videoFile,
      audio: source.videoFile,
      withSubtitleVideo: source.videoFile
    },
    vocabulary: source.vocabulary,
    sentencePatterns: source.sentencePatterns,
    bilingualText: source.bilingualText,
    englishText: source.englishText,
    dictationExercises: source.dictationExercises
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
