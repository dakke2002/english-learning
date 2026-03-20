import { useNavigate } from 'react-router-dom';
import type { SubCourse } from '../../data/courses';

interface SubCourseCardProps {
  lesson: SubCourse;
}

function SubCourseCard({ lesson }: SubCourseCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/learn?course=${lesson.id}`);
  };

  return (
    <div className="course-card" onClick={handleClick}>
      <div className="course-icon">{lesson.icon}</div>
      <h2 className="course-title">{lesson.titleEn}</h2>
      <p className="course-description">{lesson.titleChinese} - {lesson.description}</p>
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

interface SubCourseListProps {
  subCourses: SubCourse[];
  mainTitle: string;
  mainTitleEn: string;
}

export function SubCourseList({ subCourses, mainTitle, mainTitleEn }: SubCourseListProps) {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="home-header">
        <button
          className="back-home-btn"
          onClick={() => navigate('/')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            background: 'white',
            border: '2px solid var(--primary-color)',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            color: 'var(--primary-color)',
            marginBottom: '20px',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'var(--primary-color)';
            e.currentTarget.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.color = 'var(--primary-color)';
          }}
        >
          ← 返回首页
        </button>
        <h1 className="home-title">📖 {mainTitle}</h1>
        <p className="home-subtitle">{mainTitleEn} - 选择你想学习的课程</p>
      </div>
      <div className="course-grid">
        {subCourses.map((lesson) => (
          <SubCourseCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}

export default SubCourseList;
