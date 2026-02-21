import './PillGlow.css';

export default function PillGlow({ color, children }) {
  return (
    <div className={`pill-glow pill-glow--${color}`}>
      {children}
    </div>
  );
}
