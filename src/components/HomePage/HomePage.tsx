import { useNavigate } from 'react-router-dom';
import { allCourses } from '../../data/courses';

export function HomePage() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleCourseClick = (courseId: string) => {
    if (!token) {
      navigate('/login');
      return;
    }
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="homepage">
      <div className="home-header">
        <h1 className="home-title">📖 英语学习小站</h1>
        <p className="home-subtitle">采用系统学习法，全面提升英语听说读写能力</p>
        {!token && (
          <button
            className="btn btn-primary"
            style={{ marginTop: '20px', width: 'auto', padding: '12px 30px' }}
            onClick={() => navigate('/login')}
          >
            登录 / 注册
          </button>
        )}
      </div>
      <div className="course-grid">
        {allCourses.map((course) => (
          <div
            key={course.id}
            className="course-card main-module-card"
            onClick={() => handleCourseClick(course.id)}
            style={{ cursor: 'pointer', borderLeft: `4px solid ${course.color}` }}
          >
            <div className="course-icon">{course.icon}</div>
            <h2 className="course-title">{course.titleEn}</h2>
            <p className="course-description">{course.title} - {course.description}</p>
            <div className="course-features">
              <span className="course-tag">{course.subCourses.length} 个视频课程</span>
              <span className="course-tag">视频学习</span>
              <span className="course-tag">听写填空</span>
              <span className="course-tag">词汇句型</span>
            </div>
            <button className="course-btn">进入课程</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
