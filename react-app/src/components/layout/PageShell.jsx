import MatrixRain from '../animation/MatrixRain';
import './PageShell.css';

export default function PageShell({ children }) {
  return (
    <div className="page-shell">
      <MatrixRain />
      <div className="page-shell__content">
        {children}
      </div>
    </div>
  );
}
