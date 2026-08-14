import { useRef, useState } from 'react';
import type { Lesson } from '../../types';
import { updateProgress } from '../../utils/progress';

const feedback = (score: number, audioMode: boolean) => score === 100
  ? '全部正确：本项训练通过'
  : score >= 75 ? '已经很接近：检查错题后再试一次'
  : score >= 50 ? audioMode ? '继续重复播放薄弱句子' : '回到词汇和原文，检查句意后再试'
  : audioMode ? '每句多听几遍，再填写答案' : '先阅读完整语境，再填写答案';

function InlineSentence({ sentence, value, onChange }: { sentence: string; value: string; onChange: (value: string) => void }) {
  const [before, after = ''] = sentence.split('___');
  return <div className="dictation-inline-sentence"><span>{before}</span><input aria-label="填写缺失单词" value={value} placeholder="填写单词" onChange={event => onChange(event.target.value)} /><span>{after}</span></div>;
}

function SentencePlayer({ lesson, index }: { lesson: Lesson; index: number }) {
  const ref = useRef<HTMLAudioElement>(null);
  return <div className="dictation-player"><button onClick={() => { if (ref.current) { ref.current.currentTime = 0; ref.current.play(); } }}><span>▶</span> 播放本句</button><audio ref={ref} controls preload="metadata" src={`/audio/dictation/${lesson.id}-${index + 1}.mp3?v=3`}>你的浏览器不支持音频播放。</audio></div>;
}

export function Dictation({ lesson }: { lesson: Lesson }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const audioMode = lesson.id.startsWith('ielts-speaking-');
  const correct = lesson.dictationExercises.filter((exercise, index) => (answers[index] || '').trim().toLowerCase() === exercise.answer.toLowerCase()).length;
  const percent = Math.round(correct / lesson.dictationExercises.length * 100);
  const check = () => { setChecked(true); updateProgress(lesson.id, { dictationScore: percent }); };
  const title = audioMode ? '听写检验' : '语境填空';
  const guidance = audioMode ? '先播放音频，再在完整句子的空格中填写听到的单词。全部正确、达到 100% 才能通过。' : '根据完整句子的语境填写重点词汇。不需要播放音频，全部正确、达到 100% 即可通过。';

  return <div className="content-card"><h2 className="card-title">{title}</h2><p className="section-guidance">{guidance}</p>{checked && <div className={`score-banner ${percent === 100 ? 'pass' : 'retry'}`}><strong>{percent} 分</strong><span>{correct} / {lesson.dictationExercises.length} 正确</span><b>{feedback(percent, audioMode)}</b></div>}<div className="dictation-list audio-dictation">{lesson.dictationExercises.map((exercise, index) => { const answer = answers[index] || ''; const correctAnswer = answer.trim().toLowerCase() === exercise.answer.toLowerCase(); return <div className={`dictation-item ${checked && !correctAnswer ? 'needs-review' : ''}`} key={index}><div className="dictation-number"><b>第 {index + 1} 题</b><span>{checked ? (correctAnswer ? '已正确' : '请再试一次') : audioMode ? '先听后填' : '根据语境填写'}</span></div>{audioMode && <SentencePlayer lesson={lesson} index={index} />}<InlineSentence sentence={exercise.sentence} value={answer} onChange={value => { setChecked(false); setAnswers({ ...answers, [index]: value }); }} />{checked && <div className={correctAnswer ? 'answer-correct' : 'answer-wrong'}>{correctAnswer ? '正确' : `正确答案：${exercise.answer}`}</div>}<div className="dictation-hint">提示：{exercise.hint}</div></div>; })}</div><div className="dictation-actions"><button className="btn btn-primary" onClick={check}>核对并评分</button><button className="btn btn-secondary" onClick={() => { setAnswers({}); setChecked(false); }}>重新开始</button></div></div>;
}
