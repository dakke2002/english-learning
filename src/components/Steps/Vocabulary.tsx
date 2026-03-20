import type { Lesson } from '../../types';

interface VocabularyProps {
  lesson: Lesson;
}

export function Vocabulary({ lesson }: VocabularyProps) {
  return (
    <div className="content-card">
      <h2 className="card-title">
        <span className="card-icon">📚</span>
        重点词汇
      </h2>
      <div className="vocabulary-grid">
        {lesson.vocabulary.map((vocab, index) => (
          <div className="vocab-card" key={index}>
            <div className="vocab-word">{vocab.word}</div>
            <div className="vocab-phonetic">{vocab.phonetic}</div>
            <div className="vocab-meaning">{vocab.meaning}</div>
            <div className="vocab-example">
              <strong>例句：</strong>{vocab.example}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
