import './PhilosophyAccordion.css';

export default function PhilosophyAccordion({ theme, isOpen, onToggle }) {
  return (
    <div className={`philosophy-accordion ${isOpen ? 'philosophy-accordion--open' : ''}`}>
      <button className="philosophy-accordion__header" onClick={onToggle}>
        <div className="philosophy-accordion__header-text">
          <h3 className="philosophy-accordion__title">{theme.title}</h3>
          <p className="philosophy-accordion__subtitle">{theme.subtitle}</p>
        </div>
        <span className="philosophy-accordion__icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div className="philosophy-accordion__body">
        <div className="philosophy-accordion__content">
          <p className="philosophy-accordion__description">{theme.description}</p>
          <div className="philosophy-accordion__meta">
            <div className="philosophy-accordion__meta-item">
              <span className="philosophy-accordion__meta-label">Key Scene</span>
              <span className="philosophy-accordion__meta-value">{theme.keyScene}</span>
            </div>
            <div className="philosophy-accordion__meta-item">
              <span className="philosophy-accordion__meta-label">Philosopher</span>
              <span className="philosophy-accordion__meta-value">{theme.philosopher}</span>
            </div>
          </div>
          <p className="philosophy-accordion__connection">{theme.connection}</p>
        </div>
      </div>
    </div>
  );
}
