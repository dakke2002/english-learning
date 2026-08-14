import { useNavigate } from 'react-router-dom';
import { PlayerDashboard } from '../PlayerDashboard';
import { dailyEnglishCourse, ieltsEnglishCourse } from '../../data/courses';

export function HomePage() {
  const navigate = useNavigate();
  let assessed = false;
  try { assessed = Boolean(JSON.parse(localStorage.getItem('lingua:assessment') || 'null')); } catch { assessed = false; }

  return <div className="homepage pathway-home">
    <header className="site-nav">
      <div className="brand-mark"><span className="brand-dot" /> LINGUA LAB</div>
      <div className="home-header-actions">
        <button className="assessment-header-button" onClick={() => navigate('/assessment')}>{assessed ? '重新测评' : '入学测评'}</button>
        <PlayerDashboard />
      </div>
    </header>
    <main className="home-shell">
      <section className="pathway-intro">
        <p className="eyebrow">CHOOSE YOUR LEARNING PATH</p>
        <h1>今天想学哪一种英语？</h1>
        <p>先选择课程体系，再进入具体课程。以后增加新课程时，首页仍然只保留清晰的学习入口。</p>
      </section>
      <section className="pathway-grid">
        <article className="pathway-card daily-path" onClick={() => navigate('/courses/daily-english')}>
          <div className="pathway-number">01</div>
          <div className="pathway-label">DAILY ENGLISH PRACTICE</div>
          <h2>日常英语练习</h2>
          <p>从真实生活主题入手，训练听力理解、实用词汇和英文复述，适合日常积累与自由加练。</p>
          <div className="pathway-facts"><span><b>{dailyEnglishCourse.subCourses.length}</b> 节现有课程</span><span>听力 · 词汇 · 复述</span></div>
          <button>进入日常英语 <span>→</span></button>
        </article>
        <article className="pathway-card ielts-path" onClick={() => navigate('/courses/ielts-english')}>
          <div className="pathway-number">02</div>
          <div className="pathway-label">TOPIC LEARNING · IELTS</div>
          <h2>主题学习（雅思）</h2>
          <p>围绕雅思口语任务系统学习，从示范输入、重点表达和答案结构，推进到录音评分与完整模拟。</p>
          <div className="pathway-facts"><span><b>{ieltsEnglishCourse.subCourses.length}</b> 节现有课程</span><span>目标 Band 7</span></div>
          <button>进入雅思主题学习 <span>→</span></button>
        </article>
      </section>
      <section className="pathway-footer-note">
        <span>第一次使用，不确定从哪里开始？</span>
        <button onClick={() => navigate('/assessment')}>完成 3 分钟入学测评 →</button>
      </section>
    </main>
    <footer className="site-footer">en-learning.cn · Practice with a clear outcome.</footer>
  </div>;
}
export default HomePage;
