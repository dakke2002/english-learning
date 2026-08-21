import { useMemo, useState } from 'react';
import type { Lesson } from '../../types';

const sampleAudioLessons = new Set(['ielts-speaking-01', 'ielts-speaking-02', 'ielts-speaking-03', 'ielts-speaking-04', 'ielts-speaking-05']);

export function GuidedSample({ lesson, blind = false }: { lesson: Lesson; blind?: boolean }) {
  const paragraphs = useMemo(() => lesson.bilingualText.english.trim().split(/\n\s*\n/).filter(Boolean), [lesson]);
  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);
  const hasAudio = sampleAudioLessons.has(lesson.id);
  return <section className={`guided-sample ${blind ? 'blind-mode' : ''}`}>
    <div className="sample-stage"><div className="sample-badge">BAND 7 ORIGINAL SAMPLE</div><div className="sample-avatar">EN</div><p className="sample-topic">{lesson.title}</p>
      {blind && hasAudio && !show ? <div className="blind-prompt"><strong>本课示范音频</strong><span>先听完整回答，再查看分段文字稿</span></div> : <div className="sample-caption"><p>{paragraphs[active]}</p><span>第 {active + 1} 段 · 注意这一段的回答作用</span></div>}
      <div className="sample-progress">{paragraphs.map((_, i) => <button key={i} className={i === active ? 'active' : ''} onClick={() => setActive(i)} aria-label={`第 ${i + 1} 段`} />)}</div>
    </div>
    {hasAudio ? <div className="real-audio-player"><audio controls preload="metadata" src={`/audio/${lesson.id}-sample.mp3?v=3`}>你的浏览器不支持音频播放。</audio></div> : <p className="section-guidance">本课暂未配置示范音频。请先阅读示范答案，再进入录音复述，重点模仿句子节奏和结构。</p>}
    {blind && hasAudio && <button className="transcript-toggle" onClick={() => setShow(value => !value)}>{show ? '隐藏文字稿' : '听完后查看文字稿'}</button>}
  </section>;
}
