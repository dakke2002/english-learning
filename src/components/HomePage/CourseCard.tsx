import { useNavigate } from 'react-router-dom';
import type { VideoLesson } from '../../types';

interface CourseCardProps {
  lesson: VideoLesson;
}

export function CourseCard({ lesson }: CourseCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/learn?course=${lesson.id}`);
  };

  return (
    <div className="course-card" onClick={handleClick}>
      <div className="course-icon">{lesson.icon}</div>
      <h2 className="course-title">{lesson.titleEn}</h2>
      <p className="course-description">{lesson.title} - {lesson.description}</p>
      <div className="course-features">
        <span className="course-tag">{lesson.vocabulary.length} 个词汇</span>
        <span className="course-tag">{lesson.sentencePatterns.length} 个句型</span>
        <span className="course-tag">视频学习</span>
        <span className="course-tag">听写填空</span>
      </div>
      <button className="course-btn">开始学习</button>
    </div>
  );
}
