import { useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import { CourseInfoBar } from './CourseInfoBar';
import { StepPanel } from '../Steps/StepPanel';
import { useLesson, useNavigation, useKeyboardShortcuts } from '../../hooks';
import { allCourses } from '../../data/courses';
import type { SubCourse } from '../../data/courses';

// 将所有子课程展平为一个列表，用于下拉菜单切换
const allSubCourses: SubCourse[] = allCourses.flatMap(course => course.subCourses);

export function LearningPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { currentLesson, setLesson, switchLesson } = useLesson();
  const { currentStep, goToStep, courseId } = useNavigation();

  // 根据当前课程 ID 获取所属的主课程，然后只获取该主课程下的子课程
  const currentSubCourseList = useMemo(() => {
    if (!currentLesson) return allSubCourses;

    // 查找当前课程属于哪个主课程
    for (const course of allCourses) {
      const isInCourse = course.subCourses.some(sub => sub.id === currentLesson.id);
      if (isInCourse) {
        return course.subCourses;
      }
    }
    return allSubCourses;
  }, [currentLesson]);

  // Initialize lesson from URL
  useEffect(() => {
    const courseFromUrl = searchParams.get('course') || allSubCourses[0]?.id;
    if (!currentLesson || currentLesson.id !== courseFromUrl) {
      setLesson(courseFromUrl);
    }
  }, [searchParams, currentLesson, setLesson]);

  // Keyboard shortcuts
  useKeyboardShortcuts({
    onStepChange: goToStep,
    isVideoStep: currentStep === 2
  });

  // Handle course switch
  const handleSwitchLesson = (lessonId: string) => {
    if (switchLesson(lessonId)) {
      const params = new URLSearchParams(searchParams);
      params.set('course', lessonId);
      params.set('step', currentStep.toString());
      navigate(`/learn?${params.toString()}`, { replace: true });
    }
  };

  if (!currentLesson) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Sidebar currentStep={currentStep} onStepChange={goToStep} />
      <main className="main-content" id="mainContent">
        <CourseInfoBar
          lesson={currentLesson}
          currentLessonId={courseId}
          onSwitchLesson={handleSwitchLesson}
          lessonList={currentSubCourseList}
          currentStep={currentStep}
        />
        <StepPanel
          step={currentStep}
          lesson={currentLesson}
        />
      </main>
    </div>
  );
}

export default LearningPage;
