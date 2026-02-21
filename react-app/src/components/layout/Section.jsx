import './Section.css';

export default function Section({ children, className = '' }) {
  return (
    <section className={`section ${className}`}>
      <div className="section__inner">
        {children}
      </div>
    </section>
  );
}
