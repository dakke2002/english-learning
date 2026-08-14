import { useNavigate } from 'react-router-dom';

const shortcuts = [
  { step: 1, title: '听力专项', copy: '盲听与关键词捕捉' },
  { step: 3, title: '词汇专项', copy: '课程词汇与生词本' },
  { step: 6, title: '口语专项', copy: '录音、评分与复述' },
  { step: 7, title: '听写专项', copy: '填空、评分与纠错' }
];

export function TrainingShortcuts() {
  const navigate = useNavigate();
  let last: { courseId: string; step: number } | null = null;
  try {
    last = JSON.parse(localStorage.getItem('lingua:last-learning') || 'null');
  } catch {
    last = null;
  }

  return (
    <section className="training-shortcuts">
      <div className="shortcut-heading">
        <div><p className="card-kicker">QUICK PRACTICE</p><h2>选择专项训练</h2></div>
        {last && <button className="continue-learning" onClick={() => navigate(`/learn?course=${last.courseId}&step=${last.step}`)}>继续上次学习 <span>→</span></button>}
      </div>
      <div className="shortcut-list">
        {shortcuts.map(item => (
          <button key={item.step} onClick={() => navigate(`/learn?course=ielts-speaking-01&step=${item.step}`)}>
            <b>{item.title}</b><span>{item.copy}</span><em>→</em>
          </button>
        ))}
      </div>
    </section>
  );
}
