import { useNavigate } from 'react-router-dom';
import { allCourses } from '../../data/courses';

export function HomePage() {
  const navigate = useNavigate();
  const openCourse = (id: string) => navigate(`/courses/${id}`);

  return <div className="homepage">
    <header className="site-nav"><div className="brand-mark"><span className="brand-dot" /> LINGUA LAB</div><div className="nav-meta">English learning studio <span className="nav-status">● Online</span></div></header>
    <main className="home-shell">
      <section className="home-header">
        <p className="eyebrow">YOUR DAILY ENGLISH PRACTICE</p>
        <h1 className="home-title">Build fluency,<br /><em>one day at a time.</em></h1>
        <p className="home-subtitle">短而有效的真实语境课程，帮你把听到的、说出的英语，变成真正会用的表达。</p>
      </section>
      <div className="home-stats"><span><strong>2</strong> learning paths</span><span><strong>15+</strong> video lessons</span><span><strong>8-step</strong> method</span></div>
      <section className="course-grid">{allCourses.map(course => <article key={course.id} className="course-card main-module-card" onClick={() => openCourse(course.id)} style={{ cursor: 'pointer', borderTop: `4px solid ${course.color}` }}>
        <div className="course-icon">{course.icon}</div><p className="card-kicker">LEARNING PATH</p><h2 className="course-title">{course.titleEn}</h2><p className="course-description">{course.title} · {course.description}</p>
        <div className="course-features"><span className="course-tag">{course.subCourses.length} lessons</span><span className="course-tag">Video practice</span><span className="course-tag">Dictation</span><span className="course-tag">Vocabulary</span></div>
        <button className="course-btn">Explore path <span>↗</span></button>
      </article>)}</section>
    </main><footer className="site-footer">en-learning.cn <span>·</span> Learn with intention.</footer>
  </div>;
}
export default HomePage;
