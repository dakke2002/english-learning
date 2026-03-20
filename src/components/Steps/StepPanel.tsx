import type { Lesson } from '../../types';
import { AudioStep } from './AudioStep';
import { WithSubtitleVideo } from './WithSubtitleVideo';
import { Vocabulary } from './Vocabulary';
import { SentencePatterns } from './SentencePatterns';
import { BilingualText } from './BilingualText';
import { EnglishText } from './EnglishText';
import { Dictation } from './Dictation';

const steps = [
  { id: 1, title: '音频', icon: '🎧' },
  { id: 2, title: '中英双语字幕', icon: '📺' },
  { id: 3, title: '重点词汇', icon: '📚' },
  { id: 4, title: '句式表达', icon: '✍️' },
  { id: 5, title: '中英文本', icon: '📖' },
  { id: 6, title: '纯英文本', icon: '📝' },
  { id: 7, title: '听写填空', icon: '📋' }
];

interface StepPanelProps {
  step: number;
  lesson: Lesson;
}

export function StepPanel({ step, lesson }: StepPanelProps) {
  const stepConfig = steps.find((s) => s.id === step);

  if (!stepConfig) {
    return <p>请选择一个步骤</p>;
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <AudioStep lesson={lesson} />;
      case 2:
        return <WithSubtitleVideo lesson={lesson} />;
      case 3:
        return <Vocabulary lesson={lesson} />;
      case 4:
        return <SentencePatterns lesson={lesson} />;
      case 5:
        return <BilingualText lesson={lesson} />;
      case 6:
        return <EnglishText lesson={lesson} />;
      case 7:
        return <Dictation lesson={lesson} />;
      default:
        return <p>请选择一个步骤</p>;
    }
  };

  return (
    <div className="step-panel active">
      <div className="page-header">
        <h1 className="page-title">
          {stepConfig.icon} {stepConfig.title}
        </h1>
      </div>
      {renderStepContent()}
    </div>
  );
}
