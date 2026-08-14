import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { NavItem } from './NavItem';

const baseSteps = [
  { id: 1, title: '盲听训练', icon: '01' },
  { id: 2, title: '字幕精听', icon: '02' },
  { id: 3, title: '重点词汇', icon: '03' },
  { id: 4, title: '回答结构', icon: '04' },
  { id: 5, title: '双语理解', icon: '05' },
  { id: 6, title: '英文复述', icon: '06' }
];

export function Sidebar({
  currentStep,
  onStepChange,
  isIelts
}: {
  currentStep: number;
  onStepChange: (step: number) => void;
  isIelts: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const steps = [...baseSteps, { id: 7, title: isIelts ? '听写检验' : '语境填空', icon: '07' }];
  const goBack = () => {
    const id = params.get('course');
    navigate(id?.startsWith('ielts-') ? '/courses/ielts-english' : '/courses/daily-english');
  };

  return (
    <aside className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <div className="sidebar-header" onClick={goBack}>
        <div className="sidebar-logo">LL</div>
        <div className="sidebar-logo-text">返回课程</div>
      </div>
      <button className="sidebar-toggle" onClick={() => setExpanded(!expanded)} aria-label="展开学习步骤">
        {expanded ? '‹' : '›'}
      </button>
      <nav className="nav-steps">
        {steps.map(step => (
          <NavItem key={step.id} title={step.title} icon={step.icon} isActive={currentStep === step.id} onClick={() => onStepChange(step.id)} />
        ))}
      </nav>
    </aside>
  );
}
