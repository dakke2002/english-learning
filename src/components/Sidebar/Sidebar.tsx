import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { NavItem } from './NavItem';

const steps = [
  { id: 1, title: '音频', icon: '🎧' },
  { id: 2, title: '中英双语字幕', icon: '📺' },
  { id: 3, title: '重点词汇', icon: '📚' },
  { id: 4, title: '句式表达', icon: '✍️' },
  { id: 5, title: '中英文本', icon: '📖' },
  { id: 6, title: '纯英文本', icon: '📝' },
  { id: 7, title: '听写填空', icon: '📋' }
];

interface SidebarProps {
  currentStep: number;
  onStepChange: (step: number) => void;
}

export function Sidebar({ currentStep, onStepChange }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSidebarClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleGoHome = () => {
    // 根据当前课程返回到对应的课程列表页面
    const currentCourse = searchParams.get('course');
    if (currentCourse && currentCourse.startsWith('daily-english')) {
      navigate('/courses/daily-english');
    } else {
      navigate('/');
    }
  };

  return (
    <aside
      className={`sidebar ${isExpanded ? 'expanded' : ''}`}
      id="sidebar"
      onClick={handleSidebarClick}
    >
      <div className="sidebar-header" onClick={handleGoHome}>
        <div className="sidebar-logo">📖</div>
        <div className="sidebar-logo-text">英语学习小站</div>
      </div>
      <nav className="nav-steps" id="navSteps">
        {steps.map((step) => (
          <NavItem
            key={step.id}
            title={step.title}
            icon={step.icon}
            isActive={currentStep === step.id}
            onClick={() => {
              onStepChange(step.id);
            }}
          />
        ))}
      </nav>
    </aside>
  );
}
