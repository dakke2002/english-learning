import { useNavigate } from 'react-router-dom';

type Assessment = { score: number; priority: string; date: string };
const labels: Record<string, string> = {
  Vocabulary: '词汇与表达',
  Grammar: '语法准确性',
  Coherence: '回答结构与连贯性',
  'Listening strategy': '听力理解策略'
};
const steps: Record<string, number> = { Vocabulary: 3, Grammar: 4, Coherence: 4, 'Listening strategy': 1 };

export function FirstVisitCard() {
  const navigate = useNavigate();
  let result: Assessment | null = null;
  try { result = JSON.parse(localStorage.getItem('lingua:assessment') || 'null'); } catch { result = null; }

  if (result) return <section className="first-visit-card completed">
    <div className="first-visit-icon"><strong>{result.score}</strong><span>分</span></div>
    <div className="first-visit-copy"><p className="card-kicker">YOUR BASELINE</p><h2>你的入学测评已完成</h2><p>当前优先训练：<b>{labels[result.priority] || result.priority}</b>。建议先完成针对训练，再进入完整课程。</p></div>
    <div className="first-visit-actions"><button className="assessment-primary" onClick={() => navigate(`/learn?course=ielts-speaking-01&step=${steps[result!.priority] || 1}`)}>开始针对训练</button><button className="assessment-secondary" onClick={() => navigate('/assessment')}>重新测评</button></div>
  </section>;

  return <section className="first-visit-card">
    <div className="first-visit-icon"><span>约</span><strong>3</strong><span>分钟</span></div>
    <div className="first-visit-copy"><p className="card-kicker">FIRST TIME HERE?</p><h2>第一次使用，先找到你的学习起点</h2><p>通过 8 道小题检查词汇、语法、回答结构和听力策略，并获得优先训练建议。</p></div>
    <div className="first-visit-actions"><button className="assessment-primary" onClick={() => navigate('/assessment')}>开始入学测评</button><button className="assessment-secondary" onClick={() => navigate('/learn?course=ielts-speaking-01&step=1')}>暂时跳过，直接学习</button></div>
  </section>;
}
