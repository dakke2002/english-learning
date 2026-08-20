import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { SubCourse } from '../../data/courses';
import { getLessonMeta } from '../../data/lessonMeta';
import { getProgress } from '../../utils/progress';
import { lessonOverrides } from '../../data/lessonOverrides';
import { advancedLessonOverrides } from '../../data/advancedLessonOverrides';

function stage(index: number) {
  if (index < 2) return 'FOUNDATION';
  if (index < 4) return 'PART 1';
  if (index < 9) return 'PART 2';
  if (index < 12) return 'PART 3';
  return 'MOCK & REVIEW';
}

function Card({ lesson, index }: { lesson: SubCourse; index: number }) {
  const navigate = useNavigate();
  const display = { ...lesson, ...lessonOverrides[lesson.id], ...advancedLessonOverrides[lesson.id] };
  const meta = getLessonMeta(lesson.id);
  const progress = getProgress(lesson.id);
  const status = progress.completed ? '已通关' : progress.visited.length ? '进行中' : '未开始';
  return (
    <article className="course-card level-card" onClick={() => navigate(`/learn?course=${lesson.id}`)}>
      <div className="level-status"><span>{stage(index)} · {String(index + 1).padStart(2, '0')}</span><b>{status}</b></div>
      <div className="course-icon">{display.icon}</div>
      <p className="card-kicker">IELTS SPEAKING PATH</p>
      <h2 className="course-title">{display.titleEn}</h2>
      <div className="lesson-facts"><span><b>目标</b>{meta.level}</span><span><b>时长</b>{meta.duration}</span></div>
      <div className="lesson-goal"><b>本课目标</b><p>{meta.objective}</p><b>完成标准</b><p>{meta.outcome}</p></div>
      <div className="course-features">{meta.skills.map(skill => <span className="course-tag" key={skill}>{skill}</span>)}</div>
      <button className="course-btn">{progress.completed ? '再次练习' : '开始训练'} <span>→</span></button>
    </article>
  );
}

export function SubCourseList({ subCourses, mainTitle, mainTitleEn }: { subCourses: SubCourse[]; mainTitle: string; mainTitleEn: string }) {
  const navigate = useNavigate();
  const [, refresh] = useState(0);
  useEffect(() => { const handler = () => refresh(value => value + 1); window.addEventListener('lesson-progress', handler); return () => window.removeEventListener('lesson-progress', handler); }, []);
  return <div className="homepage"><header className="site-nav"><div className="brand-mark"><span className="brand-dot" /> LINGUA LAB</div><button className="back-home-btn" onClick={() => navigate('/')}>← 返回学习路径</button></header><main className="home-shell"><section className="home-header"><p className="eyebrow">15-LESSON BAND 7 PATH</p><h1 className="home-title">{mainTitleEn}</h1><p className="home-subtitle">{mainTitle}。按推荐顺序从基础表达进入 Part 1、Part 2、Part 3，再通过模考和错误复盘持续迭代。每节课都可以自由进入。</p></section><section className="course-grid">{subCourses.map((lesson, index) => <Card key={lesson.id} lesson={lesson} index={index} />)}</section></main></div>;
}

export default SubCourseList;
