import { useState, useCallback } from 'react';
import type { Lesson } from '../../types';

interface DictationItemState {
  answer: string;
  result: { correct: boolean; show: boolean } | null;
}

interface DictationItemProps {
  exercise: Lesson['dictationExercises'][0];
  index: number;
  state: DictationItemState;
  onUpdate: (index: number, newState: Partial<DictationItemState>) => void;
}

function DictationItem({ exercise, index, state, onUpdate }: DictationItemProps) {
  const checkAnswer = useCallback(() => {
    const isCorrect = state.answer.trim().toLowerCase() === exercise.answer.toLowerCase();
    onUpdate(index, { result: { correct: isCorrect, show: true } });
  }, [state.answer, exercise.answer, index, onUpdate]);

  const resetItem = useCallback(() => {
    onUpdate(index, { answer: '', result: null });
  }, [index, onUpdate]);

  const formatSentence = () => {
    const parts = exercise.sentence.split('___');
    return (
      <>
        {parts[0]}
        <span className={`blank ${state.result?.show ? (state.result.correct ? 'correct' : 'incorrect') : ''}`}>
          {state.result?.show ? (
            <span style={{ color: state.result.correct ? 'var(--success-color)' : 'var(--error-color)', fontWeight: 'bold' }}>
              {state.answer || exercise.answer}
            </span>
          ) : (
            <input
              type="text"
              value={state.answer}
              onChange={(e) => onUpdate(index, { answer: e.target.value })}
              placeholder="填入单词"
              autoComplete="off"
            />
          )}
        </span>
        {parts.slice(1).map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 2 && (
              <span className={`blank ${state.result?.show ? (state.result.correct ? 'correct' : 'incorrect') : ''}`}>
                {state.result?.show ? exercise.answer : ''}
              </span>
            )}
          </span>
        ))}
      </>
    );
  };

  return (
    <div className="dictation-item" data-index={index}>
      <div className="dictation-sentence">{formatSentence()}</div>
      <div className="dictation-hint">💡 提示：{exercise.hint}</div>
      <div className="dictation-actions">
        <button className="btn btn-primary check-btn" onClick={checkAnswer}>
          核对
        </button>
        <button className="btn btn-secondary reset-btn" onClick={resetItem}>
          重置
        </button>
      </div>
      {state.result?.show && (
        <div className={`dictation-result show ${state.result.correct ? 'correct' : 'incorrect'}`}>
          {state.result.correct ? '✅ 正确！Great job!' : `❌ 不对哦。正确答案是：${exercise.answer}`}
        </div>
      )}
    </div>
  );
}

interface DictationProps {
  lesson: Lesson;
}

export function Dictation({ lesson }: DictationProps) {
  const [itemStates, setItemStates] = useState<Map<number, DictationItemState>>(new Map());

  const updateItemState = useCallback((index: number, newState: Partial<DictationItemState>) => {
    setItemStates(prev => {
      const newMap = new Map(prev);
      const prevValue = prev.get(index) || { answer: '', result: null };
      newMap.set(index, { ...prevValue, ...newState });
      return newMap;
    });
  }, []);

  const checkAllAnswers = useCallback(() => {
    setItemStates(prev => {
      const newMap = new Map(prev);
      lesson.dictationExercises.forEach((exercise, index) => {
        const currentState = prev.get(index) || { answer: '', result: null };
        const isCorrect = currentState.answer.trim().toLowerCase() === exercise.answer.toLowerCase();
        newMap.set(index, { ...currentState, result: { correct: isCorrect, show: true } });
      });
      return newMap;
    });
  }, [lesson]);

  const resetAllItems = useCallback(() => {
    setItemStates(new Map());
  }, []);

  return (
    <div className="content-card">
      <h2 className="card-title">
        <span className="card-icon">📋</span>
        听写填空
      </h2>
      <div className="toggle-all-container">
        <button className="btn btn-secondary" onClick={checkAllAnswers}>
          核对答案
        </button>
        <button className="btn btn-secondary" onClick={resetAllItems}>
          重置
        </button>
      </div>
      <div className="dictation-list">
        {lesson.dictationExercises.map((exercise, index) => (
          <DictationItem
            key={index}
            exercise={exercise}
            index={index}
            state={itemStates.get(index) || { answer: '', result: null }}
            onUpdate={updateItemState}
          />
        ))}
      </div>
    </div>
  );
}
