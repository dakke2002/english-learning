import type { Lesson } from '../../types';
import { DictationBox } from './DictationBox';

interface BilingualTextProps {
  lesson: Lesson;
}

export function BilingualText({ lesson }: BilingualTextProps) {
  const enParagraphs = lesson.bilingualText.english.trim().split('\n').filter(p => p.trim());
  const cnParagraphs = lesson.bilingualText.chinese.trim().split('\n').filter(p => p.trim());

  return (
    <div className="content-card">
      <h2 className="card-title">
        <span className="card-icon">📖</span>
        中英文对照
      </h2>

      <div className="bilingual-container">
        <div className="bilingual-column">
          <h4>English</h4>
          <div className="bilingual-text-scrollable">
            {enParagraphs.map((p, index) => (
              <p key={index}>{p.trim()}</p>
            ))}
          </div>
        </div>
        <div className="bilingual-column">
          <h4>中文</h4>
          <div className="bilingual-text-scrollable">
            {cnParagraphs.map((p, index) => (
              <p key={index}>{p.trim()}</p>
            ))}
          </div>
        </div>
      </div>
      <DictationBox lessonId={lesson.id} />
    </div>
  );
}
