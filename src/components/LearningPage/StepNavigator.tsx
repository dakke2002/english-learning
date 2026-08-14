const baseSteps = [
  { id: 1, label: '盲听' },
  { id: 2, label: '字幕' },
  { id: 3, label: '词汇' },
  { id: 4, label: '结构' },
  { id: 5, label: '理解' },
  { id: 6, label: '口语' }
];

export function StepNavigator({
  current,
  visited,
  onChange,
  isIelts
}: {
  current: number;
  visited: number[];
  onChange: (step: number) => void;
  isIelts: boolean;
}) {
  const steps = [...baseSteps, { id: 7, label: isIelts ? '听写' : '语境填空' }];

  return (
    <nav className="step-navigator" aria-label="课程步骤">
      <div className="step-nav-heading">
        <span>自由选择训练步骤</span>
        <b>{visited.length} / 7 已浏览</b>
      </div>
      <div className="step-nav-list">
        {steps.map(step => (
          <button
            key={step.id}
            className={`${current === step.id ? 'active' : ''} ${visited.includes(step.id) ? 'visited' : ''}`}
            onClick={() => onChange(step.id)}
          >
            <span>{visited.includes(step.id) ? '✓' : step.id}</span>
            <b>{step.label}</b>
          </button>
        ))}
      </div>
    </nav>
  );
}
