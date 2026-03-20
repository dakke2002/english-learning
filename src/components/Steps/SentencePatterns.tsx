import type { Lesson } from '../../types';

interface SentencePatternsProps {
  lesson: Lesson;
}

export function SentencePatterns({ lesson }: SentencePatternsProps) {
  return (
    <div className="content-card">
      <h2 className="card-title">
        <span className="card-icon">✍️</span>
        句式表达
      </h2>
      <div className="pattern-list">
        {lesson.sentencePatterns.map((pattern, index) => (
          <div className="pattern-card" key={index}>
            <div className="pattern-english">{pattern.english}</div>
            <div className="pattern-chinese">{pattern.chinese}</div>
            <div className="pattern-usage">{pattern.usage}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
