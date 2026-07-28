import { useState, useCallback, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import type { SubCourse } from '../data/courses';
import { allCourses } from '../data/courses';

// 获取所有子课程 ID
const allSubCourseIds: string[] = allCourses.flatMap((course: { subCourses: SubCourse[] }) =>
  course.subCourses.map((sub: SubCourse) => sub.id)
);

export function useNavigation() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const courseId = searchParams.get('course') || allSubCourseIds[0] || 'daily-english-dream';
  const [currentStep, setCurrentStep] = useState(() => {
    const saved = Number(localStorage.getItem(`progress:${courseId}`));
    return saved >= 1 && saved <= 8 ? saved : 1;
  });

  // Get course from URL params, default to first available course
  const goToStep = useCallback((stepId: number) => {
    setCurrentStep(stepId);
    localStorage.setItem(`progress:${courseId}`, String(stepId));
    // Update URL with step parameter while preserving course
    const params = new URLSearchParams(searchParams);
    params.set('step', stepId.toString());
    navigate(`?${params.toString()}`, { replace: true });
  }, [courseId, navigate, searchParams]);

  // Initialize step from URL on mount or course change
  useEffect(() => {
    const stepFromUrl = searchParams.get('step');
    if (stepFromUrl) {
      const stepNum = parseInt(stepFromUrl, 10);
      if (stepNum >= 1 && stepNum <= 8) {
        setCurrentStep(stepNum);
      }
    } else {
      const saved = Number(localStorage.getItem(`progress:${courseId}`));
      if (saved >= 1 && saved <= 8) setCurrentStep(saved);
    }
  }, [searchParams, courseId]);

  return {
    currentStep,
    goToStep,
    courseId
  };
}
