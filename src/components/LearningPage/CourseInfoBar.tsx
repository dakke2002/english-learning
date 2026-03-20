import type { Lesson } from '../../types';
import type { SubCourse } from '../../data/courses';

interface CourseInfoBarProps {
  lesson: Lesson;
  currentLessonId: string;
  onSwitchLesson: (lessonId: string) => void;
  lessonList: SubCourse[];
}

export function CourseInfoBar({ lesson, currentLessonId, onSwitchLesson, lessonList }: CourseInfoBarProps) {
  return (
    <div className="course-info-bar">
      <div className="course-current">
        <span className="course-current-icon">{lesson.icon}</span>
        <div className="course-current-text">
          <h3>{lesson.title}</h3>
          <p>{lesson.description}</p>
        </div>
      </div>
      <div className="switch-course">
        <select
          className="switch-btn"
          value={currentLessonId}
          onChange={(e) => onSwitchLesson(e.target.value)}
          style={{
            padding: '8px 16px',
            border: '2px solid var(--primary-color)',
            background: 'white',
            color: 'var(--primary-color)',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          {lessonList.map((l) => (
            <option key={l.id} value={l.id}>
              {l.icon} {l.titleChinese}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
