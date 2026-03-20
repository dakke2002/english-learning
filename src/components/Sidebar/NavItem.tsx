interface NavItemProps {
  title: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

export function NavItem({ title, icon, isActive, onClick }: NavItemProps) {
  return (
    <div className="nav-item">
      <button
        className={`nav-btn ${isActive ? 'active' : ''}`}
        onClick={onClick}
      >
        <span className="nav-number">{icon}</span>
        <span className="nav-label">{title}</span>
      </button>
    </div>
  );
}
