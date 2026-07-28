import { useNavigate } from 'react-router-dom';
import type { SubCourse } from '../../data/courses';

function SubCourseCard({ lesson }: { lesson: SubCourse }) {
  const navigate = useNavigate();
  return <article className="course-card" onClick={() => navigate(`/learn?course=${lesson.id}`)}>
    <div className="course-icon">{lesson.icon}</div><p className="card-kicker">LESSON</p><h2 className="course-title">{lesson.titleEn}</h2>
    <p className="course-description">{lesson.titleChinese} · {lesson.description}</p>
    <div className="course-features"><span className="course-tag">{lesson.vocabulary.length} words</span><span className="course-tag">{lesson.sentencePatterns.length} patterns</span><span className="course-tag">Video practice</span><span className="course-tag">Dictation</span></div>
    <button className="course-btn">Start lesson <span>↗</span></button>
  </article>;
}

export function SubCourseList({ subCourses, mainTitle, mainTitleEn }: { subCourses: SubCourse[]; mainTitle: string; mainTitleEn: string }) {
  const navigate = useNavigate();
  return <div className="homepage"><header className="site-nav"><div className="brand-mark"><span className="brand-dot" /> LINGUA LAB</div><button className="back-home-btn" onClick={() => navigate('/')}>← Back to paths</button></header>
    <main className="home-shell"><section className="home-header"><p className="eyebrow">LEARNING PATH</p><h1 className="home-title">{mainTitleEn}</h1><p className="home-subtitle">{mainTitle} · Choose a lesson to begin.</p></section><section className="course-grid">{subCourses.map(lesson => <SubCourseCard key={lesson.id} lesson={lesson} />)}</section></main></div>;
}
export default SubCourseList;
